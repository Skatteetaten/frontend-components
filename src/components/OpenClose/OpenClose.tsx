import * as React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Heading } from '../utils';
import { getClassNames } from './OpenClose.classNames';
import { OpenCloseProps } from './OpenClose.types';

/**
 * @deprecated Komponenten er erstattet av OpenClose fra "@skatteetaten/ds-collections"
 *
 * visibleName OpenClose
 */

export const OpenClose: React.FC<OpenCloseProps> = (props) => {
  const {
    title,
    customClassNames,
    headingLevel,
    iconRight,
    onClick,
    isOnClickOnlyFiredOnOpen = true,
    children,
  } = props;

  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const toggleVisibility = () => setContentOpen(!isContentOpen);

  const clickHandler = () => {
    if (onClick) {
      if (isOnClickOnlyFiredOnOpen) {
        if (!isContentOpen) {
          onClick();
        }
      } else {
        onClick();
      }
    }
    toggleVisibility();
  };

  const styles = getClassNames(props);

  return (
    <div className={customClassNames?.wrapper}>
      <button
        className={
          isContentOpen
            ? classnames(
                styles.toggleButton,
                styles.toggleButtonOpen,
                customClassNames?.button
              )
            : classnames(styles.toggleButton, customClassNames?.button)
        }
        aria-expanded={isContentOpen}
        onClick={clickHandler}
      >
        {!iconRight && <Icon iconName={'ChevronDown'} />}
        <span
          className={
            iconRight
              ? styles.toggleTitleSpan
              : classnames(styles.toggleTitleSpan, styles.toggleTitleLeft)
          }
        >
          {headingLevel && title ? (
            <Heading
              text={title}
              level={headingLevel}
              className="styledHeading"
            />
          ) : (
            title
          )}
        </span>
        {iconRight && <Icon iconName={'ChevronDown'} />}
      </button>
      {isContentOpen && (
        <div
          className={
            !iconRight
              ? classnames(styles.content, customClassNames?.content)
              : classnames(
                  styles.contentWhenIconRight,
                  customClassNames?.content
                )
          }
        >
          {children}
        </div>
      )}
    </div>
  );
};

OpenClose.defaultProps = {
  underline: false,
  iconRight: false,
};
