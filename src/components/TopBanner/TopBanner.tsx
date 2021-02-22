import * as React from 'react';
//import { t } from '../utils/i18n/i18n'; //Egwene
import ActionButton from '../ActionButton/ActionButton';
import classnames from 'classnames';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';

// @ts-ignore TODO
import externalLogo from './assets/ske-logo.svg';
import externalLogoEn from './assets/ske-logo-en.svg';
import internLogo from './assets/ske-logo-intern.svg';
import internLogoEn from './assets/ske-logo-intern-en.svg';
import { getClassNames as getExternalClassNames } from './External.classNames';
import { getClassNames as getInternalClassNames } from './Internal.classNames';
import { UseScreen } from './../utils/ScreenPlugin';

// @ts-ignore TODO
const InternalHeader = props => {
  const styles = getInternalClassNames(props);
  const size = UseScreen();

  return (
    <header
      className={classnames(styles.header, props.className)}
      id={props.id}
    >
      <div
        className={classnames(
          styles.headerLeftContainer,
          props.slantedAreaClassName
        )}
      >
        <a
          className={styles.headerLinkContainer}
          href={props.homeUrl}
          onClick={props.onClick}
        >
          {size.gt.md && (
            <Image
              className={styles.headerLogo}
              src={props.language === 'en' ? internLogoEn : internLogo}
              alt="Skatteetaten logo"
            />
          )}
          <Icon className={styles.headerIcon} iconName={props.icon} />

          <div className={styles.headerLink}>{props.homeText}</div>
        </a>
      </div>
      <div className={styles.headerDiagonal} />
      <div className={styles.headerRightContainer}>
        {typeof props.title === 'string' ? (
          <h1>{props.title}</h1>
        ) : (
          <div className={styles.elementTitle}>{props.title}</div>
        )}
        <div>{props.children}</div>
      </div>
    </header>
  );
};

// @ts-ignore
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
        href={props.homeUrl}
        onClick={props.onClick}
        className={styles.linkButton}
        icon="Back"
        role="link"
      >
        {props.homeText}
      </ActionButton>
      <h1 className={styles.title}>{props.title}</h1>
    </>
  );
};

const ExternalHeader: React.FC<TopBannerProps> = props => {
  const styles = getExternalClassNames(props);
  const { header, headerMain, contentWrapper } = styles;
  const compactHeight = props.compact ? 55 : 68;

  const imageElement = (
    <Image
      src={props.language === 'en' ? externalLogoEn : externalLogo}
      height={compactHeight}
      alt="Skatteetaten logo"
    />
  );

  return (
    <header className={classnames(header, props.className)} id={props.id}>
      <div className={headerMain}>
        <div>
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

export interface TopBannerProps {
  /** Tittelen på banneren */
  title?: string | JSX.Element;
  /** Teksten som vises ved siden av home-knapp */
  homeText?: string;
  /** URLen på homeknappen */
  homeUrl?: string;
  /** Ikon på intern toppbanner */
  icon?: string;
  /** Om banneren er ment for en intern eller ekstern løsning */
  external?: boolean;
  /** Om banneren skal ta mindre plass vertikalt  */
  compact?: boolean;
  /** Overstyring av stiler */
  className?: string;
  /** Mulighet til å sette bredde på skrått område i toppen (kun intern) */
  slantedAreaWidth?: number | string;
  /** Global attributt som må være unik for hele HTML dokumentet */
  id?: string;
  /** Om logoen skal lenke til skatteetaten.no eller ikke (kun ekstern) */
  logoLink?: boolean;
  /** OnClick event som trigges av klikk på hjemlink */
  onClick?: () => void;
  /** Språk på logoen */
  language?: 'nb' | 'nn' | 'en';
}

/**
 * @visibleName TopBanner (Topp)
 */
const TopBanner: React.FC<TopBannerProps> = props => {
  const { external, ...rest } = props;
  return external ? <ExternalHeader {...rest} /> : <InternalHeader {...rest} />;
};

TopBanner.defaultProps = {
  title: undefined,
  homeUrl: undefined,
  homeText: undefined,
  slantedAreaWidth: undefined,
  icon: 'Home',
  external: false,
  compact: false,
  logoLink: false,
  language: undefined
};

export default TopBanner;
