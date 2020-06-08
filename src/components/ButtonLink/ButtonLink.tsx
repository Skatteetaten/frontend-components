import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './ButtonLink.classNames';

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** href-lenken */
  path: string;
  /** Tekst på knappen */
  text: string;
  /** Om lenken skal åpnes i nytt vindu (target=blank) */
  openInNew?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { path, text, className, openInNew, ...htmlAttributes } = props;
  const styles = getClassNames();
  if (openInNew) {
    return (
      <a
        href={path}
        className={classnames(className, styles.buttonLink)}
        role="button"
        {...htmlAttributes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  return (
    <a
      href={path}
      className={classnames(className, styles.buttonLink)}
      role="button"
      {...htmlAttributes}
    >
      {text}
    </a>
  );
};

ButtonLink.defaultProps = {};
