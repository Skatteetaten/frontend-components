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
    'Dupliser': '\uea0d', 
    'Ekteskap': '\uea0e', 
    'Facebook': '\uea0f', 
    'Familie': '\uea10', 
    'Folkeregister': '\uea11', 
    'Kroner': '\uea12', 
    'More': '\uea13', 
    'MoveUp': '\uea14', 
    'PreviewFile': '\uea15', 
    'Skattetrekk': '\uea16', 
    'Soknad': '\uea17', 
    'TemaAndreForhold': '\uea18', 
    'TemaArbeidTrygdPensjon': '\uea19', 
    'TemaBankLaanForsikring': '\uea1a', 
    'TemaBoligEiendeler': '\uea1b', 
    'TemaChatbot': '\uea1c', 
    'TemaFamilie': '\uea1d', 
    'TemaFinans': '\uea1e', 
    'TemaGaveArv': '\uea1f', 
    'TemaKredittfradrag': '\uea20', 
    'TemaPersonligeForhold': '\uea21', 
    'TemaSelskapDeltakerfastsetting': '\uea22', 
    'Up': '\uea23' 
  }
};
