import * as React from 'react';
import Icon from '../../Icon/Icon';

export interface ContentProps {
  icon: string;
  title: string;
  description?: string;
  to: string;
  id?: string;
  className?: string;
  key: number | string;
  children?: string | JSX.Element;
  /** aria-label */
  ariaLabel?: string;
}

/**
 * @visibleName NavigationContent (Innhold til forsideknapp)
 */
const NavigationContent: React.FC<ContentProps> = props => (
  <li aria-label={props.ariaLabel} {...props}>
    <a href={props.to}>
      <Icon iconName={props.icon} />
      <h2>{props.title}</h2>
      <p>{props.description || props.children}</p>
    </a>
  </li>
);

export default NavigationContent;
