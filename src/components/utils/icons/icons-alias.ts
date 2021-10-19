import SkeIconfontWOFF from '../assets/SkeIconfont.woff';

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
      `url("${SkeIconfontWOFF}") format("woff")`,
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
