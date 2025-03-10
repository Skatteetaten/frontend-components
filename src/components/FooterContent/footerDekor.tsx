import React from 'react';
export default (primaryColor = '#6F2C3F', secondaryColor = '#F3A7B0') => (
  <svg
    focusable="false"
    className="footer-decoration-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
    viewBox="0 0 1440 100"
    version="1.1"
  >
    <desc />
    <defs />
    <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
      <g id="bakgrunn">
        <polygon
          fill={secondaryColor}
          points="0 99.6400524 1440 99.6400524 1440 69.2255838 0 17.1793194"
        />
        <path
          d="M1440,98 L1440,629 L0,629 L0,98 L1440,0 L1440,98 Z"
          fill={primaryColor}
        />
      </g>
    </g>
  </svg>
);
