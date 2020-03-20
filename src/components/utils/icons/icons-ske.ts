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
        'ArrowBack': '\uea01', 
        'ArrowDown': '\uea02', 
        'ArrowForward': '\uea03', 
        'ArrowUp': '\uea04', 
        'ArrowUpDown': '\uea05', 
        'Avgift': '\uea06', 
        'AvgiftBedrift': '\uea07', 
        'Company': '\uea08', 
        'Down': '\uea09', 
        'Ekteskap': '\uea0a', 
        'Familie': '\uea0b', 
        'Folkeregister': '\uea0c', 
        'Kroner': '\uea0d', 
        'PreviewFile': '\uea0e', 
        'Skattetrekk': '\uea0f', 
        'Up': '\uea10' 
    }
};