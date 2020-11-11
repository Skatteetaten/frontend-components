import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import { getClassNames } from './FileUploader.classNames';
import classnames from 'classnames';
import Icon from '../Icon';
import LabelWithCallout, {
  calloutState,
  LabelWithCalloutProps
} from '../LabelWithCallout';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

export enum FileFormatTypes {
  doc = '.doc',
  docx = '.docx',
  jpeg = '.jpeg',
  jpg = '.jpg',
  pdf = '.pdf',
  png = '.png',
  tif = '.tif',
  txt = '.txt',
  xml = '.xml'
}

export interface AttachmentMetadata extends File {
  id: string;
}
/**
 * @visibleName FileUploader (Filopplaster)
 */
export interface FileUploaderProps {
  /** Akksepterte filformater */
  acceptedFileFormats?: Array<FileFormatTypes>;
  /** Tekst for opplastingskomponenten */
  addFileString?: string | JSX.Element;
  /** Funksjon som kjøres etter opplasting */
  afterUpload?: () => void;
  /** aria-label @deprecated */
  ariaLabel?: string;
  /** string for Apikall */
  axiosPath?: string;
  /** CSS class */
  className?: string;
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** trigger funksjon til å slette alle filer */
  deleteAllFiles?: boolean;
  /** Aria-label for "fjern fil"-knapp */
  deleteButtonAriaLabel?: string;
  /** Funksjon for å slette opplastet fil */
  deleteFile?: (file: AttachmentMetadata | File) => void;
  /**feilmelding for oversteget av filstørrelsesgrense*/
  exceedFileSizeLimitErrorMessage?: string;
  /** Opplastede filer */
  files?: Array<any>;
  /** Størrelsesgrense til en enkelt fil i bit*/
  fileSizeLimit?: number;
  /** Forsinkelse før opplasting i millisekunder*/
  forsinkelse?: number;
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Id - should have a value so unique references to labels inside component can be made */
  id?: string;
  /** Tilleggsinformasjon */
  info?: string | JSX.Element;
  /** Definer ugyldige tegn som skal erstattes med "_". NormalizeFileName vil erstatte alle ugyldige tegn dersom denne verdien ikke er satt. */
  invalidCharacterRegexp?: RegExp;
  /**Funksjon som kjører dersom spinner forandrer state */
  isLoading?: (loading: boolean) => void;
  /** Beskrivende label for FileUploader */
  label?: string;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Spinner når fil laster */
  loading?: boolean;
  /** Mulighet for å laste opp flere filer */
  multipleFiles?: boolean;
  /** Erstatter tegn som er ugyldige */
  normalizeFileName?: boolean;
  /** Brukerspesifisert event for callout */
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Parametere for axioskall */
  queryParams?: any;
  /** Funksjon for filopplasting */
  uploadFile?: (file: File) => void;
}

export const isCorrectFileFormat = (
  file: File,
  acceptedFilformats: Array<FileFormatTypes> | undefined
) => {
  if (!acceptedFilformats) {
    return true;
  }
  const fileExtention = file.name.match(/\.[0-9a-z]+$/i);
  if (fileExtention && fileExtention[0]) {
    if (acceptedFilformats.indexOf(fileExtention[0] as FileFormatTypes) > -1) {
      return true;
    }
  }
  return false;
};

const nonWordCharacterRegexp = /\W/g;
const fileNameRegex = /\.(?=[^.]+$)/;

const normalize = (file: File, invalidCharacterRegexp?: RegExp) => {
  const nameList = file.name.split(fileNameRegex);
  const fileName = nameList[0];
  const normalizedName = fileName.replace(
    invalidCharacterRegexp || nonWordCharacterRegexp,
    '_'
  );
  return normalizedName.concat('.', nameList[1]);
};

enum FilTyperNavn {
  ExcelFile = 'ExcelFile',
  WordFile = 'WordFile',
  PDFFile = 'PDFFile',
  XMLFile = 'XMLFile',
  File = 'File'
}

const filtypeMap = (() => {
  const map = new Map<string, FilTyperNavn>();
  map.set('xls', FilTyperNavn.ExcelFile);
  map.set('xlsx', FilTyperNavn.ExcelFile);
  map.set('doc', FilTyperNavn.WordFile);
  map.set('docx', FilTyperNavn.WordFile);
  map.set('pdf', FilTyperNavn.PDFFile);
  map.set('xml', FilTyperNavn.XMLFile);
  return map;
})();

const getFileIconName = (fil: AttachmentMetadata) => {
  const filutvidelse = fil.name.split('.').pop();
  const fileType = filtypeMap.get(filutvidelse ? filutvidelse : '');
  return fileType ? fileType : FilTyperNavn.File;
};

const FileUploader: React.FC<FileUploaderProps> = props => {
  const {
    acceptedFileFormats,
    addFileString,
    afterUpload,
    axiosPath,
    className,
    deleteAllFiles,
    deleteButtonAriaLabel,
    deleteFile,
    exceedFileSizeLimitErrorMessage,
    files,
    fileSizeLimit,
    help,
    id = 'fileupload',
    info,
    invalidCharacterRegexp,
    isLoading,
    label,
    labelButtonAriaLabel,
    labelCallout,
    labelWithCalloutAutoDismiss,
    loading,
    multipleFiles,
    normalizeFileName,
    onCalloutToggle,
    queryParams,
    uploadFile
  } = props;
  const styles = getClassNames(props);
  const [internalFiles, setInternalFiles] = React.useState<Array<any>>(
    files ? files : []
  );
  const [internalErrorMessages, setInternalErrorMessages] = React.useState<
    string[]
  >([]);
  const [internalLoading, setInternalLoading] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (files) {
      setInternalErrorMessages([]);
      setInternalFiles(files);
    }
  }, [files]);

  const pushToInternalMessages = (msg: string) =>
    setInternalErrorMessages(prevState => [...prevState, msg]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.files && event.target.files.length > 0) {
      handleNewFiles(Array.from(event.target.files));
    }
    // Må set input verdi til "" så at det er mulig å opplaste samme fil etter den blir fjernes i Chrome
    event.target.value = '';
  };

  const triggerUpdateFiles = (validFiles: Array<File>) => {
    if (uploadFile) {
      validFiles.forEach(file => {
        uploadFile(file);
      });
    }
  };

  const uploadFilePromise = (
    url: string,
    file: File,
    params?: any
  ): Promise<any> => {
    const formData = new FormData();
    formData.append(
      'upload',
      file,
      normalizeFileName ? normalize(file, invalidCharacterRegexp) : undefined
    );
    return axios.post<FormData, AxiosResponse<AttachmentMetadata>>(
      url,
      formData,
      { params }
    );
  };

  const isValidFile = (file: File, sizeLimit?: number) =>
    isCorrectFileFormat(file, acceptedFileFormats) &&
    (sizeLimit ? file.size <= sizeLimit : true);

  const handleNewFiles = (fileList: File[]) => {
    setInternalErrorMessages([]);

    const exceedSizeLimitFiles = fileSizeLimit
      ? fileList.filter(file => file.size > fileSizeLimit)
      : [];
    if (fileSizeLimit && exceedSizeLimitFiles.length) {
      pushToInternalMessages(
        exceedFileSizeLimitErrorMessage ||
          createDefaultOversizedFileErrorMessage(fileSizeLimit)
      );
    }

    const invalidFileFormatFiles = fileList.filter(
      file => !isCorrectFileFormat(file, acceptedFileFormats)
    );
    if (invalidFileFormatFiles.length) {
      pushToInternalMessages('Dette filformatet er ikke godkjent');
    }

    const validFiles = fileList.filter(file =>
      isValidFile(file, fileSizeLimit)
    );

    triggerUpdateFiles(validFiles);

    if (!axiosPath) {
      return;
    }

    if (validFiles && validFiles.length) {
      setInternalLoading(true);
      const allPromises = validFiles.map((file: File) =>
        uploadFilePromise(axiosPath, file, queryParams)
      );

      setTimeout(() => {
        axios
          .all(allPromises)
          .then(responses => {
            setInternalFiles([
              ...internalFiles,
              ...responses.map(res => res.data)
            ]);
          })
          .catch(errors => {
            //TODO: Det trenger design om flere feilmeldinger
            pushToInternalMessages('Kunne ikke laste opp fil');
          })
          .finally(() => {
            if (afterUpload) {
              afterUpload();
            }
            setInternalLoading(false);
          });
      }, props.forsinkelse || 0);
    }
  };

  const createDefaultOversizedFileErrorMessage = (
    filstoerrelsegrense: number
  ) =>
    `Vi kan ikke motta denne filen fordi den er for stor. Filer kan ikke overstige ${bitToMegabyte(
      filstoerrelsegrense
    )} Mb. Du kan forsøke å dele opp i flere mindre filer, eller bruke et format som tar mindre plass.`;

  const bitToMegabyte = (size: number) => (size / (1024 * 1024)).toFixed(1);

  const handleDragOverAndDragEnter = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
      handleNewFiles(Array.from(event.dataTransfer.files));
    }
  };

  const deleteFromList = (fileToBeDeleted: AttachmentMetadata) => {
    if (deleteFile) {
      deleteFile(fileToBeDeleted);
    }
    if (axiosPath) {
      axios
        .delete(`${axiosPath}/${fileToBeDeleted.id}`, {
          params: queryParams,
          data: {} // kreves av BigIP
        })
        .then(() => {
          const newList = internalFiles.filter(
            f => f.id !== fileToBeDeleted.id
          );
          setInternalFiles(newList);
          triggerUpdateFiles(newList);
        });
    }
  };
  if (deleteAllFiles && files) {
    files.forEach(file => {
      deleteFromList(file);
    });
  }

  if (isLoading) {
    if (loading || internalLoading) {
      isLoading(true);
    } else {
      isLoading(false);
    }
  }

  return (
    <div className={classnames(styles.main, className)}>
      <LabelWithCallout
        id={id + '-label'}
        inputId={id + '-input'}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      <label id="buttonLabel">
        <div
          className={styles.uploadArea}
          role="button"
          aria-describedby="acceptedFileFormats"
          tabIndex={0}
          onDragEnter={handleDragOverAndDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOverAndDragEnter}
          onDrop={handleDrop}
          onClick={event => {
            event.preventDefault();
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
          onKeyPress={ev => {
            if (ev.keyCode === 0 && inputRef.current) {
              inputRef.current.click();
            }
          }}
        >
          {loading || internalLoading ? (
            <Spinner />
          ) : (
            <>
              <Icon iconName={'AttachFile'} className={styles.uploadAreaIcon} />
              <u>{addFileString ? addFileString : 'Legg til fil(er)'}</u>
            </>
          )}
        </div>
      </label>
      <input
        className={styles.fileUploadInput}
        type="file"
        id={id + '-input'}
        ref={inputRef}
        multiple={multipleFiles}
        onChange={handleFileChange}
        tabIndex={-1}
        aria-hidden={true}
      />

      {acceptedFileFormats && (
        <span className={styles.informationWrapper} id="acceptedFileFormats">
          Aksepterte filformater:{' '}
          <span className={styles.acceptedFileFormats}>
            {acceptedFileFormats.map(
              (fileFormat: FileFormatTypes, index: number) => {
                if (index === acceptedFileFormats.length - 1) {
                  return fileFormat;
                } else {
                  return fileFormat.concat(', ');
                }
              }
            )}
          </span>
        </span>
      )}
      {info && (
        <div
          className={styles.informationWrapper}
          id="information"
          aria-label={'informasjon'}
        >
          {info}
        </div>
      )}
      {internalErrorMessages &&
        internalErrorMessages.map(msg => (
          <div key={msg}>
            <ErrorMessage>{msg}</ErrorMessage>
          </div>
        ))}
      {internalFiles.length > 0 && (
        <div role="alert" className={styles.fileListWrapper}>
          <ul className={styles.fileList}>
            {internalFiles.map((file, index: number) => (
              <li key={file.name.concat(index.toString())}>
                <div className={styles.fileName}>
                  <Icon iconName={getFileIconName(file)} />
                  <span>{file.name}</span>
                </div>
                {file.error ? (
                  <Icon iconName={'Error'} className={styles.errorColor} />
                ) : (
                  <button
                    className={styles.fileListCancelBtn}
                    onClick={() => deleteFromList(file)}
                    aria-label={
                      deleteButtonAriaLabel
                        ? deleteButtonAriaLabel
                        : 'Fjern fil'
                    }
                  >
                    <Icon iconName={'Cancel'} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
