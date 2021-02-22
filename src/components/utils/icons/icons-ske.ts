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
    'Bell': '\uea09', 
    'Company': '\uea0a', 
    'Down': '\uea0b', 
    'Ekteskap': '\uea0c', 
    'Facebook': '\uea0d', 
    'Familie': '\uea0e', 
    'Folkeregister': '\uea0f', 
    'Kroner': '\uea10', 
    'More': '\uea11', 
    'MoveUp': '\uea12', 
    'PreviewFile': '\uea13', 
    'Skattetrekk': '\uea14', 
    'TemaAndreForhold': '\uea15', 
    'TemaArbeidTrygdPensjon': '\uea16', 
    'TemaBankLaanForsikring': '\uea17', 
    'TemaBoligEiendeler': '\uea18', 
    'TemaFamilie': '\uea19', 
    'TemaFinans': '\uea1a', 
    'TemaGaveArv': '\uea1b', 
    'TemaKredittfradrag': '\uea1c', 
    'TemaPersonligeForhold': '\uea1d', 
    'TemaSelskapDeltakerfastsetting': '\uea1e', 
    'Up': '\uea1f' 
  }
};