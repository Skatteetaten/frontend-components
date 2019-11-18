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

interface FooterContentProps extends React.ReactHTMLElement<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * @visibleName FooterContent (Bunn)
 */
const FooterContent: React.FC<FooterContentProps> = props => {
  const { children, className } = props;
  const styles = getClassNames();
  return (
    <div className={className}>
      <div className={styles.footerDecorContainer} role="contentinfo">
        <FooterDekor />
      </div>
      <footer className={styles.footerWrapper}>
        <div className={styles.footerContent}>{children}</div>
      </footer>
    </div>
  );
};

// @ts-ignore
FooterContent.Logo = Logo;

export default FooterContent;
