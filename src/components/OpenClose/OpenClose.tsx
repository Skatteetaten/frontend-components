import * as React from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import { getClassNames } from './OpenClose.classNames';
import Heading from '../utils/Heading';

export interface OpenCloseProps {
  /** Om innholdet skal være åpent fra start */
  isOpen?: boolean;
  /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
  onClick?: (...args: any[]) => any;
  /** Tittel på knappen */
  title?: string;
  /** Om man ønsker at tittelen skal være en del av heading tag-hierarkiet. Verdi 1-6.*/
  headingLevel?: number;
  /** Overstyring av stiler */
  className?: string;
  /** Elementene som vises/skjules når bruker ekspanderer/kollapser.*/
  children?: JSX.Element;
}

const OpenClose: React.FC<OpenCloseProps> = props => {
  const { title, className, headingLevel, onClick, children } = props;

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

  const styles = getClassNames();

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
        <Icon iconName={'ChevronDown'} />
        {headingLevel && title ? (
          <Heading text={title} level={headingLevel} />
        ) : (
          title
        )}
      </button>
      {isContentOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default OpenClose;
