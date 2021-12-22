import { calloutState, LabelWithCalloutProps } from '../LabelWithCallout';

export enum Language {
  en = 'en',
  nb = 'nb',
  nn = 'nn',
}

export enum FileFormatTypes {
  doc = '.doc',
  docx = '.docx',
  jpeg = '.jpeg',
  jpg = '.jpg',
  pdf = '.pdf',
  png = '.png',
  tif = '.tif',
  txt = '.txt',
  xml = '.xml',
  csv = '.csv',
  odf = '.odf',
  odp = '.odp',
  ods = '.ods',
  odt = '.odt',
  ppt = '.ppt',
  pptx = '.pptx',
  xls = '.xls',
  xlsx = '.xlsx',
}

export interface AttachmentMetadata extends File {
  id: string;
}
/*
 * visibleName FileUploader (Filopplaster)
 */
export interface FileUploaderProps {
  /** Akksepterte filformater */
  acceptedFileFormats?: Array<FileFormatTypes>;
  /** Tekst for aksepeterte typer*/
  acceptedFileFormatsLabel?: string;
  /** Tekst for opplastingskomponenten */
  addFileString?: string | JSX.Element;
  /** Funksjon som kjøres etter opplasting */
  afterUpload?: (uploadedFiles: any) => void;
  /** aria-label @deprecated */
  ariaLabel?: string;
  /** string for Apikall */
  axiosPath?: string;
  /** CSS class */
  className?: string;
  /** trigger funksjon til å slette alle filer */
  deleteAllFiles?: boolean;
  /** Aria-label for "fjern fil"-knapp */
  deleteButtonAriaLabel?: string;
  /** Funksjon for å slette opplastet fil */
  deleteFile?: (file: AttachmentMetadata | File, errors: string[]) => void;
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
  labelWithCalloutProps?: LabelWithCalloutProps;
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
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
  /** Om merke for obligatorisk felt skal vises */
  required?: boolean;
  /** Funksjon for filopplasting */
  uploadFile?: (file: File) => void;
  /** Gjør at DELETE operasjonen, ved slett av opplastet fil, fungerer når løsningen kjører bak WebSeal.
   * Default implementasjon legger ved en tom body i DELETE requesten som er nødvendig for løsninger som kjører bak BigIp
   *  **/
  usesWebSealCompatibleDelete?: boolean;
  /**
   * Funksjon for filnedlasting
   * */
  downloadFile?: (file: File) => void;
}
