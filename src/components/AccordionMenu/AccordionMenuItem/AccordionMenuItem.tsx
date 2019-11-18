import * as React from 'react';
import IconButton from '../../IconButton';
import Icon from '../../Icon';
import classnames from 'classnames';
import { getClassNames } from '../AccordionMenu.classNames';

interface AccordionMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ikon som benyttes for et menypunkt   */
  icon?: string;
  /** ariaLabel for ikonet i et menypunkt  */
  iconLabel?: string;
  /** Om et menypunkt skal være default åpen */
  isOpen?: boolean;
  /** Tittel på menypunkt */
  heading: string | JSX.Element | undefined;
  /** Om man ønsker ytterligere aksjon når bruker åpner steget. Kalles KUN når steget åpnes, ikke når det lukkes. */
  onClick?: (...args: any[]) => any;
  /** Klasse som kan benyttes til overstyre stiler */
  className?: string;
  children?: JSX.Element;
}

type AccordionMenuItemState = {
  isContentOpen: boolean;
};

const AccordionMenuItem = (props: AccordionMenuItemProps) => {
  const [isContentOpen, setContentOpen] = React.useState<boolean>(
    props.isOpen || false
  );

  const styles = getClassNames();
  const { heading, iconLabel, icon, onClick, className, children } = props;

  const toggleVisibility = () => {
    setContentOpen(!isContentOpen);
  };

  const clickHandler = () => {
    if (onClick && !isContentOpen) {
      onClick();
    }
    toggleVisibility();
  };

  const {
    menuItem,
    menuItemIsOpen,
    menuItemTitle,
    iconWrapper,
    toggleButton,
    toggleButtonOpen,
    content
  } = styles;

  const styleTitle = styles.title;

  return (
    <li className={className}>
      <header
        onClick={clickHandler}
        className={
          isContentOpen ? classnames(menuItem, menuItemIsOpen) : menuItem
        }
      >
        <div className={menuItemTitle}>
          <div className={iconWrapper}>
            <div>
              <Icon
                iconName={icon}
                style={{ fontSize: '28px' }}
                ariaLabel={iconLabel}
              />
            </div>
          </div>
          <div className={styleTitle}>{heading}</div>
        </div>
        <div
          className={
            isContentOpen
              ? classnames(toggleButton, toggleButtonOpen)
              : toggleButton
          }
        >
          <IconButton
            alt={'Åpne og lukke knapp'}
            icon="ChevronDown"
            title="Skriv ut"
          />
        </div>
      </header>
      {isContentOpen && <section className={content}>{children}</section>}
    </li>
  );
};

export default AccordionMenuItem;
