import * as React from 'react';
import { getClassNames } from './FileUploader.classNames';
import classnames from 'classnames';
import Icon from '../Icon';
import LabelWithCallout, {
  calloutState,
  LabelWithCalloutProps
} from '../LabelWithCallout';

export enum FileFormatTypes {
  doc = 'doc',
  docx = 'docx',
  jpg = 'jpg',
  pdf = 'pdf',
  png = 'png',
  txt = 'txt',
  xml = 'xml'
}
export interface FileUploaderProps {
  /** Akksepterte filformater */
  acceptedFileFormats?: Array<FileFormatTypes>;
  /** Tekst for opplastingskomponenten */
  addFileString?: string;
  /** aria-label */
  ariaLabel?: string;
  /** CSS class */
  className?: string;
  /** Funksjon for å slette opplastet fil */
  deleteFile?: (file: File) => void;
  /** Hjelpetekst */
  help?: string;
  /** Id */
  id?: string;
  /** Descriptive label for SearchField */
  label?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Funksjon for filopplasting */
  uploadFile: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = props => {
  const {
    acceptedFileFormats,
    addFileString,
    ariaLabel,
    className,
    deleteFile,
    help,
    id,
    label,
    labelCallout,
    onCalloutToggle,
    uploadFile
  } = props;
  const styles = getClassNames(props);
  const [files, setFiles] = React.useState<Array<File>>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.files && event.target.files.length > 0) {
      handleNewFiles(Array.from(event.target.files));
    }
  };

  const handleNewFiles = (fileList: File[]) => {
    // I denne versjonen støtte vi kun en fil om gangen
    uploadFile(fileList[0]);
    const newList = [...files];
    newList.push(fileList[0]);
    setFiles(newList);
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

  const deleteFromList = (fileToBeDeleted: File) => {
    const newList = files.filter(file => file !== fileToBeDeleted);
    if (deleteFile) {
      deleteFile(fileToBeDeleted);
    }
    setFiles(newList);
  };

  return (
    <div className={classnames(styles.main, className)}>
      <LabelWithCallout
        id={id}
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      <input
        className={styles.fileUploadInput}
        type="file"
        id="fileupload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileupload"
        aria-label={ariaLabel ? ariaLabel : 'fileupload'}
      >
        <div
          className={styles.uploadArea}
          onDragEnter={handleDragOverAndDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOverAndDragEnter}
          onDrop={handleDrop}
        >
          <Icon iconName={'AttachFile'} className={styles.uploadAreaIcon} />
          {addFileString ? addFileString : 'Legg til fil(er)'}
        </div>
      </label>
      {acceptedFileFormats && (
        <span className={styles.acceptedFileTypesWrapper}>
          Aksepterte filformater:{' '}
          <span className={styles.acceptedFileFormats}>
            {acceptedFileFormats.map(
              (fileFormat: FileFormatTypes, index: number) => {
                if (index === acceptedFileFormats.length - 1) {
                  return '.'.concat(fileFormat);
                } else {
                  return '.'.concat(fileFormat, ', ');
                }
              }
            )}
          </span>
        </span>
      )}
      {files && (
        <ul className={styles.fileList}>
          {files.map((file: File, index: number) => (
            <li key={file.name.concat(index.toString())}>
              {file.name}
              <button
                className={styles.fileListCancelBtn}
                onClick={() => deleteFromList(file)}
              >
                <Icon iconName={'Cancel'} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
