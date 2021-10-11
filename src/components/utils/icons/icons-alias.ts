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
    'clear': '\uea17', //tilsvarer Cancel
    'checkmark': '\uea1b', //tilsvarer Check
    'blocked2': '\uea4f', //tilsvarer Lock
    'statuscirclecheckmark': '\uea28', //tilsvarer Completed
    'errorbadge': '\uea35', //tilsvarer ErrorOutline
  }
};
