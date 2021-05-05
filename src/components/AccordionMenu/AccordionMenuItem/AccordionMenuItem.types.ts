import * as React from 'react';

export interface AccordionMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Ikon som benyttes for et menypunkt   */
  icon?: string;
  /** If a menu item should be open by default */
  isOpen?: boolean;
  /** The title of the menu item */
  heading: string | JSX.Element | undefined;
  /** Callback when used opens the menu item. Is called only when opened, not when closing.  */
  onClick?: (...args: any[]) => any;
  /** Additional class names for overriding styling */
  className?: string;
  children?: JSX.Element;
  /** aria-label for the menu item */
  ariaLabel?: string;
  /** Flex the title section */
  flex?: boolean;
}
