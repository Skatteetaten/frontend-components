import * as React from 'react';
import { getClassNames } from './TopStripeMenu.classNames';
import classnames from 'classnames';
import { UseScreen } from '../../utils';
import { Icon } from '../../Icon';
import { LinkProps } from '../../Link/Link.types';
import { TopStripeButton } from '../TopStripeButton';
import { TopStripeContext } from '../TopStripe';
import { TopStripeMenuItems } from './TopStripeMenuItems';

export interface TopStripeMenuProps extends Omit<LinkProps, 'title'> {
  children?: React.ReactNode;
  /**
   * Close menu on item click
   * @default true
   */
  closeOnClick?: boolean;
  defaultSelected?: number;
  showOnMobile: boolean;
  title: string | JSX.Element;
  className?: string;
  index?: number;
  /** Name of icon to display */
  icon?: string;
  /** Ability to show/hide chevron icon */
  showChevron?: boolean;
  /**  Aria-label for close button in sub menu */
  closeMenuAriaLabel?: string;
  /** Spesify if content is menu or not (changes wai-aria behaviour)  */
  contentIsMenu?: boolean;
}

/*
 * visibleName TopStripeMenu (ToppstripeMeny)
 */
export const TopStripeMenu: React.FC<TopStripeMenuProps> = (props) => {
  const styles = getClassNames();
  const {
    className,
    icon,
    title,
    index,
    showOnMobile = false,
    showChevron = true,
    contentIsMenu = true,
  } = props;
  const { open, setOpen } = React.useContext(TopStripeContext);
  const isMenuOpen = open === index;

  const screenSize = UseScreen();
  if (screenSize.sm && !showOnMobile) {
    return null;
  }

  return (
    <>
      <TopStripeButton
        aria-haspopup={contentIsMenu}
        aria-expanded={isMenuOpen}
        className={classnames(className, {
          [styles.topStripeMenuShowChevron]: showChevron,
        })}
        onClick={() => setOpen(index)}
        onKeyDown={(e: any) => {
          e.stopPropagation();
          if (e.shiftKey && e.key === 'Tab' && isMenuOpen) {
            setOpen(index);
          }
        }}
        showOnMobile={showOnMobile}
      >
        {icon && (
          <span className={styles.topStripeMenuIcon}>
            <Icon iconName={icon} />
          </span>
        )}
        <span>{title}</span>
        {showChevron && (
          <Icon
            className={styles.topStripeMenuChevronIcon}
            aria-hidden
            iconName={isMenuOpen ? 'MenuUp' : 'MenuDown'}
          />
        )}
      </TopStripeButton>
      {isMenuOpen && <TopStripeMenuItems {...props} />}
    </>
  );
};
