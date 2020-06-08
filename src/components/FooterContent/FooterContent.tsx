import * as React from 'react';
import { Image } from '../index';
import { getClassNames, getLogoClassNames } from './FooterContent.classNames';
import FooterDekor from './footerDekor';
import logo from './assets/ske-logo.svg';

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

export interface FooterContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** aria-label */
  ariaLabel?: string;
}

/**
 * @visibleName FooterContent (Bunn)
 */
export class FooterContent extends React.PureComponent<FooterContentProps> {
  static Logo = Logo;
  render() {
    const { children, className, ariaLabel } = this.props;
    const styles = getClassNames();
    return (
      <div className={className} aria-label={ariaLabel}>
        <div className={styles.footerDecorContainer} aria-hidden="true">
          <FooterDekor />
        </div>
        <footer className={styles.footerWrapper}>
          <div className={styles.footerContent}>{children}</div>
        </footer>
      </div>
    );
  }
}
