import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './ButtonLink.classNames';
import { ButtonLinkProps } from './ButtonLink.types';

/**
 * @deprecated Komponenten er erstattet av MegaButton fra "@skatteetaten/ds-buttons"
 *
 * visibleName ButtonLink (Knappelenke)
 */
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
