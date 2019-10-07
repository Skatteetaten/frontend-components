const fontUrls = [];
fontUrls.push(
  'url("' + require('../assets/materialdesignicons-webfont.eot') + '")'
);
fontUrls.push(
  'url("' +
    require('../assets/materialdesignicons-webfont.eot') +
    '?#iefix") format("embedded-opentype")'
);
fontUrls.push(
  'url("' +
    require('../assets/materialdesignicons-webfont.woff2') +
    '") format("woff2")'
);
fontUrls.push(
  'url("' +
    require('../assets/materialdesignicons-webfont.woff') +
    '") format("woff")'
);
fontUrls.push(
  'url("' +
    require('../assets/materialdesignicons-webfont.ttf') +
    '") format("truetype")'
);

export default {
  style: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none'
  },
  fontFace: {
    fontFamily: `"Material Icons"`,
    src: fontUrls.join(', ')
  },
  icons: {
    //Arrows
    Back: '\uf04d',
    CircleDown: '\ufb0c',
    CircleLeft: '\ufb0e',
    CircleRight: '\ufb10',
    CircleUp: '\ufb12',
    ChevronDown: '\uf140',
    ChevronRightMed: '\uf142',
    ChevronUp: '\uf143',
    ChevronLeft: '\uf141',
    ChevronRight: '\uf142',
    ExpandMore: '\uf04b',
    ArrowDropDown: '\uf140',
    NavigateBefore: '\uf04d',
    NavigateNext: '\uf054',
    MoveUp: '\uf060',

    //Info
    Blocked: '\uf0ad',
    Error: '\uf028',
    ErrorBadge: '\ufcc2',
    ErrorOutline: '\uf5d6',
    helpFilled: '\uf2d7',
    HelpOutline: '\uf625',
    helpSimple: '\uf2d6',
    Info: '\uf2fc',
    InfoOutline: '\uf2fd',
    Warning: '\uf026',
    WarningOutline: '\uf02a',

    //Add/remove
    Add: '\uf415',
    AddOutline: '\uf419',
    Cancel: '\uf5ad',
    Clear: '\uf5ad',
    Delete: '\ufa79',
    Share: '\uf497',
    Upload: '\uf552',
    Download: '\uf1da',
    Deploy: '\uf463',

    //Tag
    Bookmark: '\uf0c0',
    Favorite: '\uf2d1',
    Completed: '\uf133',
    ChatBubbleOutline: '\uf182',
    Cloud: '\uf163',
    CloudUpload: '\ufb5a',
    Check: '\uf12c',
    CheckMark: '\uf12c',
    StatusCircleCheckmark: '\uf12c',
    Lock: '\uf33e',
    LockOpen: '\uf33f',
    LockOutline: '\uf341',
    LockOutlineOpen: '\uf340',
    Blocked2: '\uf33e',

    //Time
    Calendar: '\uf0ed',
    Update: '\uf450',
    History: '\uf2da',
    CircleFilled: '\uf12f',
    Timeline: '\uf12a',
    Loading: '\uf771',
    CalendarClock: '\uf0f0',
    Timelapse: '\uf51a',
    TimerSand: '\uf51f',

    //Manipulate
    FormatAlignLeft: '\uf262',
    FormatAlignRight: '\uf263',
    PauseOutline: '\uf3e6',
    PlayOutline: '\uf40d',
    Filter: '\uf236',
    SortUp: '\uf05d',
    SortDown: '\uf045',
    SortDefault: '\uF4BA',
    SortAsc: '\uF4BC',
    SortDesc: '\uF4BD',
    TaOppgave: '\uF148',
    OpenInNew: '\uf3cc',
    MenuUp: '\uf360',
    MenuDown: '\uf35d',

    //Sections and symbols
    Home: '\uf2dc',
    Menu: '\uf35c',
    Person: '\uf004',
    PersonOutline: '\uf013',
    PersonMore: '\uf014',
    PersonMoreOutline: '\uf800',
    Search: '\uf349',
    Settings: '\uf493',
    Earth: '\uf1e7',
    Email: '\uf1f0',
    Briefcase: '\uf0d6',
    Hammer: '\uf8e9',
    BookOpen: '\uf5da',
    Phone: '\uf602',
    Forum: '\uf28c',
    Calculator: '\uf0ec',
    Facebook: '\uf20d',
    LinkedIn: '\uf33c',
    Twitter: '\uf544',
    Key: '\uf306',
    BookOpenOutline: '\ufb3f',
    CashRefund: '\ufa9b',
    LanPending: '\uf31a',

    //Edit
    Copy: '\uf18f',
    Edit: '\uf3eb',
    Print: '\uf42a',
    Save: '\uf193',
    EditDocument: '\uf90b',

    //Files og types
    AttachFile: '\uf3e2',
    Description: '\uf9ed',
    ExcelFile: '\uf21b',
    File: '\uf219',
    FileOutline: '\uf224',
    WordFile: '\uf22c',
    PDFFile: '\uf225',
    XMLFile: '\uf22e',
    Code: '\uf174'
  }
};
