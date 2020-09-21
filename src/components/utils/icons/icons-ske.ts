import SkeIconfontEOT from '../assets/SkeIconfont.eot';
import SkeIconfontWOFF2 from '../assets/SkeIconfont.woff2';
import SkeIconfontWOFF from '../assets/SkeIconfont.woff';
import SkeIconfontTTF from '../assets/SkeIconfont.ttf';
import SkeIconfontSVG from '../assets/SkeIconfont.svg';

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
    src: [
      `url("${SkeIconfontEOT}") format("embedded-opentype")`,
      `url("${SkeIconfontEOT}?#iefix") format("embedded-opentype")`,
      `url("${SkeIconfontWOFF2}") format("woff2")`,
      `url("${SkeIconfontWOFF}") format("woff")`,
      `url("${SkeIconfontTTF}") format("truetype")`,
      `url("${SkeIconfontSVG}#SkeIconfont") format("svg")`
    ].join(', '),
  },
  icons: { 
    'AccountEnk': '\uea01', 
    'ArrowBack': '\uea02', 
    'ArrowDown': '\uea03', 
    'ArrowForward': '\uea04', 
    'ArrowUp': '\uea05', 
    'ArrowUpDown': '\uea06', 
    'Avgift': '\uea07', 
    'AvgiftBedrift': '\uea08', 
    'Company': '\uea09', 
    'Down': '\uea0a', 
    'Ekteskap': '\uea0b', 
    'Familie': '\uea0c', 
    'Folkeregister': '\uea0d', 
    'Kroner': '\uea0e', 
    'More': '\uea0f', 
    'PreviewFile': '\uea10', 
    'Skattetrekk': '\uea11', 
    'TemaArbeidTrygdPensjon': '\uea12', 
    'TemaBankLaanForsikring': '\uea13', 
    'TemaBoligEiendeler': '\uea14', 
    'TemaFamilie': '\uea15', 
    'TemaFinans': '\uea16', 
    'TemaGaveArv': '\uea17', 
    'TemaPersonligeForhold': '\uea18', 
    'Up': '\uea19' 
  }
};
