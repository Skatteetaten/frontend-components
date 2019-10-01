import React from 'react';
import PropTypes from 'prop-types';

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
/**
 * @visibleName FooterContent (Bunn)
 */
export default class FooterContent extends React.PureComponent {
  static propTypes = {
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };

  static Logo = Logo;

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { children, className, id } = this.props;
    const styles = getClassNames(this.props);
    return (
      <div id={id} className={className}>
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
