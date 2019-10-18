import * as React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import classnames from 'classnames';
import Image from '../Image/Image';
// @ts-ignore TODO
import logo from './assets/ske-logo-intern.svg';
import { getClassNames as getExternalClassNames } from './External.classNames';
import { getClassNames as getInternalClassNames } from './Internal.classNames';
// @ts-ignore TODO
const InternalHeader = props => {
  const styles = getInternalClassNames(props);
  return (
    <header
      className={classnames(styles.header, props.className)}
      id={props.id}
    >
      <div className={styles.headerLeftContainer}>
        <Image
          className={styles.headerLogo}
          src={logo}
          alt="Skatteetaten logo"
        />
        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <ActionButton
            href={props.homeUrl}
            className={styles.headerActionButton}
            icon="Home"
            color="white"
            ariaLabel="Til startsiden"
          >
            {props.homeText}
          </ActionButton>
        </div>
      </div>
      <div className={styles.headerDiagonal} />
      <div className={styles.headerRightContainer}>
        <h1>{props.title}</h1>
        <div className={styles.headerRightButtons}>{props.children}</div>
      </div>
    </header>
  );
};
// @ts-ignore TODO
const ExternalHeaderContent = ({ styles, ...props }) => {
  if (props.children) {
    return props.children;
  }

  if (props.compact) {
    return <h1 className={styles.title}>{props.title}</h1>;
  }

  return (
    <>
      <ActionButton
        href={props.onClick ? undefined : props.homeUrl}
        onClick={props.onClick}
        className={styles.linkButton}
        icon="Back"
        ariaLabel="Til startsiden"
      >
        {props.homeText}
      </ActionButton>
      <h1 className={styles.title}>{props.title}</h1>
    </>
  );
};
// @ts-ignore TODO
const ExternalHeader = props => {
  const styles = getExternalClassNames(props);
  // @ts-ignore TODO
  const { header, headerMain, logoWrapper, contentWrapper } = styles;
  const logo = require('./assets/ske-logo.svg');
  const compactHeight = props.compact ? 55 : 68;

  const imageElement = (
    <Image src={logo} height={compactHeight} alt="Skatteetaten logo" />
  );

  return (
    <header className={classnames(header, props.className)} id={props.id}>
      <div className={headerMain}>
        <div className={logoWrapper}>
          <div>
            {props.logoLink ? (
              <a href="https://www.skatteetaten.no">{imageElement}</a>
            ) : (
              imageElement
            )}
          </div>
        </div>
        <div className={contentWrapper}>
          <ExternalHeaderContent styles={styles} {...props} />
        </div>
      </div>
    </header>
  );
};

interface TopBannerProps {
  /** Tittelen på banneren */
  title?: string;
  /** Teksten som vises ved siden av home-knapp */
  homeText?: string;
  /** URLen på homeknappen */
  homeUrl?: string;
  /** Om banneren er ment for en intern eller ekstern løsning */
  external?: boolean;
  /** Om banneren skal ta mindre plass vertikalt  */
  compact?: boolean;
  /** Overstyring av stiler */
  className?: string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Om logoen skal lenke til skatteetaten.no eller ikke (kun ekstern) */
  logoLink?: boolean;
}
/**
 * @visibleName TopBanner (Topp)
 */
export default class TopBanner extends React.PureComponent<TopBannerProps, {}> {
  static defaultProps = {
    title: undefined,
    homeUrl: undefined,
    homeText: undefined,
    external: false,
    compact: false,
    logoLink: false
  };

  render() {
    const { external, ...props } = this.props;
    return external ? (
      <ExternalHeader {...props} />
    ) : (
      <InternalHeader {...props} />
    );
  }
}
