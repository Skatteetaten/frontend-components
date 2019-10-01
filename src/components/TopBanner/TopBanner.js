import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Image from '../Image/Image';
import ActionButton from '../ActionButton/ActionButton';

import { getClassNames as getInternalClassNames } from './Internal.classNames';
import { getClassNames as getExternalClassNames } from './External.classNames';

const InternalHeader = props => {
  const styles = getInternalClassNames(props);
  const logo = require('./assets/ske-logo-intern.svg');
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

const ExternalHeader = props => {
  const styles = getExternalClassNames(props);
  const logo = require('./assets/ske-logo.svg');
  const compactHeight = props.compact ? 55 : 68;

  const imageElement = (
    <Image src={logo} height={compactHeight} alt="Skatteetaten logo" />
  );

  return (
    <header
      className={classnames(styles.header, props.className)}
      id={props.id}
    >
      <div className={styles.headerMain}>
        <div className={styles.logoWrapper}>
          <div>
            {props.logoLink ? (
              <a href="https://www.skatteetaten.no">{imageElement}</a>
            ) : (
              imageElement
            )}
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <ExternalHeaderContent styles={styles} {...props} />
        </div>
      </div>
    </header>
  );
};

/**
 * @visibleName TopBanner (Topp)
 */
export default class TopBanner extends React.PureComponent {
  static propTypes = {
    /** Tittelen på banneren */
    title: PropTypes.string,
    /** Teksten som vises ved siden av home-knapp */
    homeText: PropTypes.string,
    /** URLen på homeknappen */
    homeUrl: PropTypes.string,
    /** Om banneren er ment for en intern eller ekstern løsning */
    external: PropTypes.bool,
    /** Om banneren skal ta mindre plass vertikalt  */
    compact: PropTypes.bool,
    /** Overstyring av stiler */
    className: PropTypes.string,
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string,
    /** Om logoen skal lenke til skatteetaten.no eller ikke (kun ekstern) */
    logoLink: PropTypes.bool
  };
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
