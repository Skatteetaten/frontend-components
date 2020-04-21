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

export interface FileUploaderProps {
  /** Akksepterte filformater */
  acceptedFileFormats?: Array<FileFormatTypes>;
  /** Tekst for opplastingskomponenten */
  addFileString?: string;
  /** aria-label */
  ariaLabel?: string;
  /**string for Apikall */
  axiosPath?: string;
  /** CSS class */
  className?: string;
  /** trigger funksjon til å slette alle filer */
  deleteAllFiles?: boolean;
  /** Funksjon for å slette opplastet fil */
  deleteFile?: (file: File) => void;
  /** Opplastede filer */
  files?: Array<any>;
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Id */
  id?: string;
  /** Descriptive label for SearchField */
  label?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Spinner når fil laster */
  loading?: boolean;
  /** Mulighet for å laste opp flere filer */
  multipleFiles?: boolean;
  /** Brukerspesifisert event for callout **/
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

const FileUploader: React.FC<FileUploaderProps> = props => {
  const {
    acceptedFileFormats,
    addFileString,
    ariaLabel,
    axiosPath,
    className,
    deleteAllFiles,
    deleteFile,
    files,
    help,
    id,
    label,
    labelCallout,
    loading,
    multipleFiles,
    onCalloutToggle,
    queryParams,
    uploadFile
  } = props;
  const styles = getClassNames(props);
  const [internalFiles, setInternalFiles] = React.useState<Array<any>>(
    files ? files : []
  );
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [internalLoading, setInternalLoading] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (files) {
      setInternalFiles(files);
    }
  }, [files]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.files && event.target.files.length > 0) {
      handleNewFiles(Array.from(event.target.files));
    }
  };

  const handleNewFiles = (fileList: File[]) => {
    setErrorMessage('');
    fileList.forEach((file: File) => {
      const correctFileFormat = isCorrectFileFormat(file, acceptedFileFormats);
      if (correctFileFormat) {
        if (uploadFile) {
          uploadFile(file);
        }
        if (axiosPath) {
          setInternalLoading(true);
          const formData = new FormData();
          formData.append('upload', file);
          axios
            .post<FormData, AxiosResponse<AttachmentMetadata>>(
              axiosPath,
              formData,
              { params: queryParams }
            )
            .then(res => {
              if (res.data) {
                setErrorMessage('');
                setInternalFiles([...internalFiles, res.data]);
              }
            })
            .catch(error => {
              setErrorMessage('Kunne ikke laste opp fil');
            })
            .finally(() => {
              setInternalLoading(false);
            });
        }
      } else {
        setErrorMessage('Dette filformatet er ikke godkjent');
      }
    });
  };

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
      event.dataTransfer.clearData();
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
        });
    }
  };
  if (deleteAllFiles && files) {
    files.forEach(file => {
      deleteFromList(file);
    });
  }

  return (
    <div className={classnames(styles.main, className)}>
      <LabelWithCallout
        id={id}
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      <label
        htmlFor="fileupload"
        aria-label={ariaLabel ? ariaLabel : 'fileupload'}
        id="buttonLabel"
      >
        <div
          className={styles.uploadArea}
          role="button"
          aria-describedby="acceptedFileFormats"
          tabIndex={0}
          onDragEnter={handleDragOverAndDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOverAndDragEnter}
          onDrop={handleDrop}
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
        id="fileupload"
        ref={inputRef}
        multiple={multipleFiles}
        onChange={handleFileChange}
      />
      {acceptedFileFormats && (
        <span
          className={styles.acceptedFileTypesWrapper}
          id="acceptedFileFormats"
        >
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {internalFiles.length > 0 && (
        <ul className={styles.fileList}>
          {internalFiles.map((file, index: number) => (
            <li key={file.name.concat(index.toString())}>
              {file.name}
              {file.error ? (
                <Icon iconName={'Error'} className={styles.errorColor} />
              ) : (
                <button
                  className={styles.fileListCancelBtn}
                  onClick={() => deleteFromList(file)}
                >
                  <Icon iconName={'Cancel'} />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
