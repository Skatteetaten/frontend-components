import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import { getClassNames } from './OpenClose.classNames';
import Heading from '../utils/Heading';

export interface OpenCloseProps {
  /** If the content aria should be open/visible */
  isOpen?: boolean;
  /** Callback when opened (not when closed) */
  onClick?: (...args: any[]) => any;
  /** Button title  */
  title?: string;
  /** If the title should be a wrapped in a heading tag, value 1-7 .*/
  headingLevel?: number;
  /** By default er ikonet for åpning til venstre. Kan overstyres med iconRight: true. */
  iconRight?: boolean;
  /** Display as a compact version with smaller font size and margins */
  compact?: boolean;
  /** Styling overrides */
  className?: string;
  /** Elements that are shown/hidden.*/
  children?: JSX.Element;
}

const OpenClose: React.FC<OpenCloseProps> = props => {
  const {
    title,
    className,
    headingLevel,
    iconRight,
    onClick,
    children
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

export default OpenClose;
