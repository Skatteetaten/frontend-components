import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import i18n, { t } from './../utils/i18n/i18n';
import { getClassNames } from './FileUploader.classNames';
import classnames from 'classnames';
import { ErrorMessage } from '../ErrorMessage';
import { Spinner } from '../Spinner';
import { Icon } from '../Icon';
import { LabelWithCallout } from '../LabelWithCallout';
import { Link } from '../Link';
import {
  AttachmentMetadata,
  FileFormatTypes,
  FileUploaderProps,
} from './FileUploader.types';
import { useEffect, useRef, useState } from 'react';
import { generateId } from '../utils';

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
  File = 'File',
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

export const FileUploader: React.FC<FileUploaderProps> = (props) => {
  const {
    acceptedFileFormats,
    acceptedFileFormatsLabel,
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
    language,
    loading,
    multipleFiles,
    normalizeFileName,
    onCalloutToggle,
    queryParams,
    uploadFile,
    downloadFile,
  } = props;
  const styles = getClassNames(props);
  const [internalFiles, setInternalFiles] = useState<Array<any>>(
    files ? files : []
  );
  const [internalErrorMessages, setInternalErrorMessages] = useState<string[]>(
    []
  );
  const [internalLoading, setInternalLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uploadAreaRef = useRef<HTMLDivElement | null>(null);

  const randomId = generateId();
  const fileuploadLabelId = 'fileupload'.concat(randomId, '-label');
  const acceptedFileFormatsId = 'acceptedFileFormats'.concat(randomId);
  const informationId = 'information'.concat(randomId);

  if (language) {
    i18n.changeLanguage(language);
  }

  useEffect(() => {
    if (files) {
      setInternalFiles(files);
    }
  }, [files]);

  const pushToInternalMessages = (msg: string) =>
    setInternalErrorMessages((prevState) => [...prevState, msg]);

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
      validFiles.forEach((file) => {
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
      ? fileList.filter((file) => file.size > fileSizeLimit)
      : [];
    if (fileSizeLimit && exceedSizeLimitFiles.length) {
      pushToInternalMessages(
        exceedFileSizeLimitErrorMessage ||
          createDefaultOversizedFileErrorMessage(fileSizeLimit)
      );
    }

    const invalidFileFormatFiles = fileList.filter(
      (file) => !isCorrectFileFormat(file, acceptedFileFormats)
    );
    if (invalidFileFormatFiles.length) {
      pushToInternalMessages(t('fileuploader.error.file_format'));
    }

    const validFiles = fileList.filter((file) =>
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
          .then((responses) => {
            const updatedInternalFiles = [
              ...internalFiles,
              ...responses.map((res) => res.data),
            ];
            setInternalFiles(updatedInternalFiles);
            if (afterUpload) {
              afterUpload(updatedInternalFiles);
            }
          })
          .catch((error) => {
            //TODO: Det trenger design om flere feilmeldinger
            if (error.response && error.response.status === 403) {
              pushToInternalMessages(t('fileuploader.error.upload.403'));
            } else {
              pushToInternalMessages(t('fileuploader.error.upload.general'));
            }
            if (afterUpload) {
              afterUpload(internalFiles);
            }
          })
          .finally(() => {
            setInternalLoading(false);
          });
      }, props.forsinkelse || 0);
    }
  };

  const createDefaultOversizedFileErrorMessage = (
    filstoerrelsegrense: number
  ) =>
    i18n.t('fileuploader.error.file_size', {
      filstoerrelsegrense: bitToMegabyte(filstoerrelsegrense),
    });

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

  const showFileName = (file: any) => {
    if (downloadFile) {
      return (
        <Link
          tabIndex={0}
          text={file.name}
          onClick={() => downloadFile(file)}
        />
      );
    } else {
      return <span>{file.name}</span>;
    }
  };

  const deleteFromList = (fileToBeDeleted: AttachmentMetadata) => {
    setInternalErrorMessages([]);
    if (axiosPath) {
      axios
        .delete(`${axiosPath}/${fileToBeDeleted.id}`, {
          params: queryParams,
          data: props.usesWebSealCompatibleDelete === true ? null : {}, // body kreves av BigIP
        })
        .then(() => {
          const newList = internalFiles.filter(
            (f) => f.id !== fileToBeDeleted.id
          );
          setInternalFiles(newList);
          triggerUpdateFiles(newList);
        })
        .catch((error) => {
          if (error.response && error.response.status === 403) {
            pushToInternalMessages(t('fileuploader.error.delete.403'));
          } else {
            pushToInternalMessages(t('fileuploader.error.delete.general'));
          }
        })
        .finally(() => {
          if (deleteFile) {
            deleteFile(fileToBeDeleted, internalErrorMessages);
          }
        });
    } else {
      if (deleteFile) {
        deleteFile(fileToBeDeleted, internalErrorMessages);
      }
    }
    uploadAreaRef.current?.focus();
  };
  if (deleteAllFiles && files) {
    files.forEach((file) => {
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
      <label id={fileuploadLabelId}>
        <div
          ref={uploadAreaRef}
          className={styles.uploadArea}
          role="button"
          aria-describedby={fileuploadLabelId.concat(
            ' ',
            acceptedFileFormatsId
          )}
          tabIndex={0}
          onDragEnter={handleDragOverAndDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOverAndDragEnter}
          onDrop={handleDrop}
          onClick={(event) => {
            event.preventDefault();
            if (inputRef.current) {
              inputRef.current.click();
            }
          }}
          onKeyPress={(ev) => {
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
              <u>
                {addFileString ? addFileString : t('fileuploader.add.label')}
              </u>
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
        <span className={styles.informationWrapper} id={acceptedFileFormatsId}>
          {acceptedFileFormatsLabel
            ? acceptedFileFormatsLabel
            : t('fileuploader.accepted_file_formats')}{' '}
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
          aria-describedby={fileuploadLabelId.concat(
            ' ',
            acceptedFileFormatsId,
            ' ',
            informationId
          )}
          className={styles.informationWrapper}
          id={informationId}
        >
          {info}
        </div>
      )}
      {internalErrorMessages &&
        internalErrorMessages.map((msg) => (
          <div key={msg}>
            <ErrorMessage>{msg}</ErrorMessage>
          </div>
        ))}
      <div role="alert" className={styles.fileListWrapper}>
        <span className="sr-only">{t('fileuploader.uploaded')}</span>
        {internalFiles.length > 0 && (
          <ul className={styles.fileList}>
            {internalFiles.map((file, index: number) => (
              <li key={file.name.concat(index.toString())}>
                <div className={styles.fileName}>
                  <Icon
                    className={styles.fileIcon}
                    iconName={getFileIconName(file)}
                  />
                  {showFileName(file)}
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
                        : t('fileuploader.delete.ariaLabel')
                    }
                  >
                    <Icon iconName={'Cancel'} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
