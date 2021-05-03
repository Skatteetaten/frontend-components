import * as React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Heading } from '../utils';
import { getClassNames } from './OpenClose.classNames';
import { OpenCloseProps } from './OpenClose.types';

export const OpenClose: React.FC<OpenCloseProps> = (props) => {
  const {
    title,
    className,
    headingLevel,
    iconRight,
    onClick,
    children,
  } = props;

  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const toggleVisibility = () => setContentOpen(!isContentOpen);

  const clickHandler = () => {
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  const styles = getClassNames(props);

  return (
    <div className={className}>
      <button
        className={
          isContentOpen
            ? classnames(styles.toggleButton, styles.toggleButtonOpen)
            : styles.toggleButton
        }
        aria-expanded={isContentOpen}
        onClick={clickHandler}
      >
        {!iconRight && <Icon iconName={'ChevronDown'} />}
        {headingLevel && title ? (
          <Heading text={title} level={headingLevel} />
        ) : (
          title
        )}
        {iconRight && <Icon iconName={'ChevronDown'} />}
      </button>
      {isContentOpen && (
        <div
          className={!iconRight ? styles.content : styles.contentWhenIconRight}
        >
          {children}
        </div>
      )}
    </div>
  );
};
