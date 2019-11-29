import * as React from 'react';
import Icon from '../../Icon/Icon';

export interface NavigationContentProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: string;
  heading: string | JSX.Element;
  description?: string;
  to: string;
  id?: string;
  className?: string;
  key: number | string;
  children?: string | JSX.Element;
  /** Som standard brukes a-elementet for å lage lenker. Denne gir mulighet for å lage en egen link implementasjon som omslutter innholdet i NavigationContent */
  renderContent?: (to: string, children: JSX.Element) => JSX.Element;
}

export type ContentProps = Pick<
  NavigationContentProps,
  'icon' | 'heading' | 'description' | 'children' | 'to'
>;

type _InternalContentProps = Pick<
  NavigationContentProps,
  'icon' | 'heading' | 'description' | 'children'
>;

const Content = (props: _InternalContentProps) => {
  return (
    <>
      <Icon iconName={props.icon} />
      {React.isValidElement(props.heading) ? (
        props.heading
      ) : (
        <h2>{props.heading}</h2>
      )}
      <p>{props.description || props.children}</p>
    </>
  );
};

/**
 * @visibleName NavigationContent (Innhold til forsideknapp)
 */
const NavigationContent: React.FC<NavigationContentProps> = props => {
  const {
    renderContent,
    id,
    key,
    className,
    icon,
    heading,
    description,
    children,
    ...htmlAttributes
  } = props;

  const contentProps = {
    icon,
    heading,
    description,
    children
  };

  return (
    <li id={id} key={key} className={className}>
      {renderContent ? (
        renderContent(props.to, <Content {...contentProps} />)
      ) : (
        <a href={props.to} {...htmlAttributes}>
          <Content {...contentProps} />
        </a>
      )}
    </li>
  );
};

export default NavigationContent;
