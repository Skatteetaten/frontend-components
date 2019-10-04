import * as React from 'react';
import PropTypes from 'prop-types';

export default class TabItem extends React.PureComponent {
  static propTypes = {
    /** @deprecated Teksten på arkfanen */
    linkText: PropTypes.string,
    /** Teksten på arkfanen */
    headerText: PropTypes.string,
    /** Unik identifikator av arkfanen */
    itemKey: PropTypes.string,
    /** Ikon på arkfanen */
    itemIcon: PropTypes.string,
    /** Teller på arkfanen */
    itemCount: PropTypes.number,
    /** Overstyring av stiler */
    className: PropTypes.string
  };
  static defaultProps = {
    itemIcon: undefined
  };

  render() {
    const {
      linkText,
      headerText,
      itemIcon,
      itemCount,
      itemKey,
      children,
      className,
      ...props
    } = this.props;

    return (
      <div
        linkText={linkText}
        headerText={headerText}
        itemIcon={itemIcon}
        itemCount={itemCount}
        itemKey={itemKey}
        {...props}
        className={className}
      ></div>
    );
  }
}
