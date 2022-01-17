import * as React from 'react';

//export const Accordion: React.FC<AccordionProps> = (props) => {

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  level: number;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { level, text, ...rest } = props;

  switch (level) {
    case 1:
      return <h1 {...rest}>{text}</h1>;
    case 2:
      return <h2 {...rest}>{text}</h2>;
    case 3:
      return <h3 {...rest}>{text}</h3>;
    case 4:
      return <h4 {...rest}>{text}</h4>;
    case 5:
      return <h5 {...rest}>{text}</h5>;
    case 6:
      return <h6 {...rest}>{text}</h6>;
    default:
      return <span {...rest}>{text}</span>;
  }
};
