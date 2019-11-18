import * as React from 'react';
import Icon from '../../Icon/Icon';

export interface ContentProps {
  icon: string;
  title: string | JSX.Element;
  description?: string;
  to: string;
  id?: string;
  className?: string;
  key: number | string;
  children?: string | JSX.Element;
  /** Som standard brukes a-elementet for å lage lenker. Denne gir mulighet for å lage en egen link implementasjon som omslutter innholdet i NavigationContent */
  renderContent?: (children: JSX.Element) => JSX.Element;
}

const Content = (
  props: Pick<ContentProps, 'icon' | 'title' | 'description' | 'children'>
) => {
  return (
    <>
      <Icon iconName={props.icon} />
      {React.isValidElement(props.title) ? props.title : <h2>{props.title}</h2>}
      <p>{props.description || props.children}</p>
    </>
  );
};

/**
 * @visibleName NavigationContent (Innhold til forsideknapp)
 */
const NavigationContent: React.FC<ContentProps> = props => {
  const { renderContent, id, key, className, ...rest } = props;
  return (
    <li id={id} key={key} className={className}>
      {renderContent ? (
        renderContent(<Content {...rest} />)
      ) : (
        <a href={props.to}>
          <Content {...rest} />
        </a>
      )}
    </li>
  );
};

export default NavigationContent;
