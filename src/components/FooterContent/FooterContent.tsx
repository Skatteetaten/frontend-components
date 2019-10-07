import * as React from 'react';
import Image from '../Image/Image';
import FooterDekor from './footerDekor';
import { getClassNames, getLogoClassNames } from './FooterContent.classNames';

const logo = require('./assets/ske-logo.svg');

const Logo = props => {
  return (
    <div>
      <Image
        src={logo}
        {...props}
        className={getLogoClassNames()}
        height="74px"
        alt="Skatteetaten logo"
      />
    </div>
  );
};

interface FooterContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @visibleName FooterContent (Bunn)
 */
export default class FooterContent extends React.PureComponent<
  FooterContentProps
> {
  static Logo = Logo;

  render() {
    const { children, className } = this.props;
    const styles = getClassNames(this.props);
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
  }
}
