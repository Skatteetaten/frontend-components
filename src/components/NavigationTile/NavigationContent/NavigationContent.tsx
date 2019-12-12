import * as React from 'react';
import Icon from '../../Icon/Icon';

export interface NavigationContentProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: string;
  heading: string | JSX.Element;
  description?: string;
  to: () => void | string;
  id?: string;
  className?: string;
  children?: string | JSX.Element;
  /** Som standard brukes a-elementet for å lage lenker. Denne gir mulighet for å lage en egen link implementasjon som omslutter innholdet i NavigationContent */
  renderContent?: (to: string, children: JSX.Element) => JSX.Element;
  /** Hver title som sendes inn rendres som en h2. Hvis dette ikke passer inn i din sidestruktur, kan nivå på headingen overskrives.
   * Velg _headingLevel_ 3 f.eks. om ønsker \<h3\>-tag, velg false om _title_ ikke skal få heading-tag i det hele tatt, men rendres som vanlig tekst. */
  headingLevel?: number | boolean;
  /** Hvis NavigationTile brukes til noe utover det primære bruksområde (som er navigasjon videre nedover i sidestrukturen), bør det vurderes
   * om hver tile bør rendres som en knapp. Se avsnitt om universell utforming under.*/
  useButtons?: boolean;
}

export type ContentProps = Pick<
  NavigationContentProps,
  'icon' | 'heading' | 'description' | 'children' | 'to' | 'renderContent'
>;

type _InternalContentProps = Pick<
  NavigationContentProps,
  'icon' | 'heading' | 'description' | 'children' | 'headingLevel'
>;

const Content = (props: _InternalContentProps) => {
  const TitleElement = () => {
    switch (props.headingLevel) {
      case 3:
        return <h3>{props.heading}</h3>;
      case 4:
        return <h4>{props.heading}</h4>;
      case 5:
        return <h5>{props.heading}</h5>;
      case 6:
        return <h6>{props.heading}</h6>;
      default:
        return <h2>{props.heading}</h2>;
    }
  };
  return (
    <>
      <Icon iconName={props.icon} />
      {React.isValidElement(props.heading) ? props.heading : <TitleElement />}
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
    className,
    icon,
    heading,
    description,
    children,
    useButtons,
    headingLevel,
    ...htmlAttributes
  } = props;

  const contentProps = {
    icon,
    heading,
    description,
    children,
    headingLevel
  };

  if (typeof props.to === 'function') {
    if (useButtons) {
      return (
        <button onClick={props.to}>
          <Content {...contentProps} />
        </button>
      );
    } else {
      throw new Error(
        'When property "to" is set as function you have to set "useButtons" to true'
      );
    }
  }

  return (
    <li id={id} key={props.to} className={className}>
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
