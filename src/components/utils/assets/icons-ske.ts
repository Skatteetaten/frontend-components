const fontUrls: string[] = [];
fontUrls.push('url("' + require('./SkeIconfont.woff') + '") format("woff")');

export default {
  style: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none',
    display: 'inline-block',
    transform: 'translate(0, 0)',
    textRendering: 'auto',
    fontSize: 'inherit',
  },
  fontFace: {
    fontFamily: '"SkeIconfont"',
    src: fontUrls.join(', '),
  },

  icons: {
    CircleDown: '\uea01',
    CircleLeft: '\uea02',
    CircleRight: '\uea03',
    CircleUp: '\uea04',
    ChevronDown: '',
    ChevronLeft: '',
    ChevronRight: '',
    ChevronUp: '',
    ExcelFile: '\uea05',
    File: '\uea06',
    More: '\uea07',
    PDFFile: '\uea08',
    Person: '\uea09',
    Skattetrekk: '\uea0a',
    WarningOutline: '\uea0b',
    XMLFile: '\uea0c',
  },
};
