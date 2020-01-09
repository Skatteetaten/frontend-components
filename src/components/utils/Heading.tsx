import * as React from 'react';

const Heading: React.FC<{
  text: string;
  level: number;
}> = ({ text, level }) => {
  switch (level) {
    case 1:
      return <h1>{text}</h1>;
    case 2:
      return <h2>{text}</h2>;
    case 3:
      return <h3>{text}</h3>;
    case 4:
      return <h4>{text }</h4>;
    case 5:
      return <h5>{text}</h5>;
    case 6:
      return <h6>{text}</h6>;
    default:
      return <span>{text}</span>;
  }
};

export default Heading;