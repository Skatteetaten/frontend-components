import * as React from 'react';
import Image from '../Image/Image';
import { getClassNames, getLogoClassNames } from './FooterContent.classNames';
import FooterDekor from './footerDekor';

const logo = require('./assets/ske-logo.svg');
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

interface FooterContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** aria-label */
  ariaLabel?: string;
}

/**
 * @visibleName FooterContent (Bunn)
 */
class FooterContent extends React.PureComponent<FooterContentProps> {
  static Logo = Logo;
  render() {
    const { children, className, ariaLabel } = this.props;
    const styles = getClassNames();
    return (
      <div className={className} aria-label={ariaLabel}>
        <div className={styles.footerDecorContainer} role="contentinfo">
          <FooterDekor />
        </div>
        <footer className={styles.footerWrapper}>
          <div className={styles.footerContent}>{children}</div>
        </footer>
      </div>
    );
  }
}

export default FooterContent;
