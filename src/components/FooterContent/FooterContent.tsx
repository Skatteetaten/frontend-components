import * as React from 'react';
import { Image } from '../Image';
import { getClassNames, getLogoClassNames } from './FooterContent.classNames';
import footerDekor from './footerDekor';

import logo from './assets/ske-logo.svg';
import logoEn from './assets/ske-logo-en.svg';
import { FooterContentProps } from './FooterContent.types';
import { BrandContext } from '../SkeBasis';

const Logo = () => {
  return (
    <Image
      src={logo}
      className={getLogoClassNames()}
      height="74px"
      alt="Skatteetaten logo"
    />
  );
};

const LogoEn = () => {
  return (
    <Image
      src={logoEn}
      className={getLogoClassNames()}
      height="74px"
      alt="Norwegian Tax Authorities logo"
    />
  );
};

/*
 * visibleName FooterContent (Bunn)
 */
export class FooterContent extends React.PureComponent<FooterContentProps> {
  /** Engelsk logo */
  static LogoEn = LogoEn;
  /** Norsk Logo */
  static Logo = Logo;

  render() {
    const { children, className, ariaLabel } = this.props;
    const styles = getClassNames();

    return (
      <BrandContext.Consumer>
        {({ tag, primaryColor, secondaryColor }) => (
          <div className={className} aria-label={ariaLabel}>
            <div className={styles.footerDecorContainer} aria-hidden="true">
              {footerDekor(primaryColor, secondaryColor)}
            </div>

            <footer className={styles['footerWrapper' + tag]}>
              <div className={styles['footerContent' + tag]}>{children}</div>
            </footer>
          </div>
        )}
      </BrandContext.Consumer>
    );
  }
}
