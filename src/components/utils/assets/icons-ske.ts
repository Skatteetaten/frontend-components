const fontUrls: string[] = [];

fontUrls.push('url("' + require('./SkeIconfont.eot') + '")');
fontUrls.push(
  'url("' +
    require('./SkeIconfont.eot') +
    '?#iefix") format("embedded-opentype")'
);
fontUrls.push('url("' + require('./SkeIconfont.woff2') + '") format("woff2")');
fontUrls.push('url("' + require('./SkeIconfont.woff') + '") format("woff")');
fontUrls.push('url("' + require('./SkeIconfont.ttf') + '") format("truetype")');

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
    fontSize: 'inherit'
  },
  fontFace: {
    fontFamily: '"SkeIconfont"',
    src: fontUrls.join(', ')
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
    PDFFile: '\uea07',
    Person: '\uea08',
    Skattetrekk: '\uea09',
    WarningOutline: '\uea0a',
    XMLFile: '\uea0b'
  }
};
