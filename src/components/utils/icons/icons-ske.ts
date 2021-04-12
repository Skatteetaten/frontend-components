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
    'Chatbot': '\uea0a', 
    'Company': '\uea0b', 
    'Down': '\uea0c', 
    'Ekteskap': '\uea0d', 
    'Facebook': '\uea0e', 
    'Familie': '\uea0f', 
    'Folkeregister': '\uea10', 
    'Kroner': '\uea11', 
    'More': '\uea12', 
    'MoveUp': '\uea13', 
    'PreviewFile': '\uea14', 
    'Skattetrekk': '\uea15', 
    'TemaAndreForhold': '\uea16', 
    'TemaArbeidTrygdPensjon': '\uea17', 
    'TemaBankLaanForsikring': '\uea18', 
    'TemaBoligEiendeler': '\uea19', 
    'TemaChatbot': '\uea1a', 
    'TemaFamilie': '\uea1b', 
    'TemaFinans': '\uea1c', 
    'TemaGaveArv': '\uea1d', 
    'TemaKredittfradrag': '\uea1e', 
    'TemaPersonligeForhold': '\uea1f', 
    'TemaSelskapDeltakerfastsetting': '\uea20', 
    'Up': '\uea21' 
  }
};
