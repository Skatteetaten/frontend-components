const fontUrls: string[] = [];

fontUrls.push('url("' + require('../assets/SkeIconfont.eot') + '")');
fontUrls.push('url("' + require('../assets/SkeIconfont.eot') + '?#iefix") format("embedded-opentype")');
fontUrls.push('url("' + require('../assets/SkeIconfont.woff2') + '") format("woff2")');
fontUrls.push('url("' + require('../assets/SkeIconfont.woff') + '") format("woff")');
fontUrls.push('url("' + require('../assets/SkeIconfont.ttf') + '") format("truetype")');

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
