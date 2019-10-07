import * as React from 'react';
import Icon from '../../Icon/Icon';

export interface ContentProps {
  icon: string;
  title: string;
  description?: string;
  to: string;
  id?: string;
}

/**
 * @visibleName NavigationContent (Innhold til forsideknapp)
 */
const NavigationContent = (props: ContentProps) => (
  <div {...props}>
    <Icon iconName={props.icon} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

export default NavigationContent;
