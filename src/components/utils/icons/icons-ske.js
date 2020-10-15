const fontUrls = [];

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
        'Company': '\uea09', 
        'Down': '\uea0a', 
        'Ekteskap': '\uea0b', 
        'Familie': '\uea0c', 
        'Folkeregister': '\uea0d', 
        'Kroner': '\uea0e', 
        'More': '\uea0f', 
        'MoveUp': '\uea10', 
        'PreviewFile': '\uea11', 
        'Skattetrekk': '\uea12', 
        'TemaAndreForhold': '\uea13', 
        'TemaArbeidTrygdPensjon': '\uea14', 
        'TemaBankLaanForsikring': '\uea15', 
        'TemaBoligEiendeler': '\uea16', 
        'TemaFamilie': '\uea17', 
        'TemaFinans': '\uea18', 
        'TemaGaveArv': '\uea19', 
        'TemaKredittfradrag': '\uea1a', 
        'TemaPersonligeForhold': '\uea1b', 
        'TemaSelskapDeltakerfastsetting': '\uea1c', 
        'Up': '\uea1d' 
    }
};
