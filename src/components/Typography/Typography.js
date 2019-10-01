import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getClassNames } from './Typography.classNames';

/**
 * @visibleName Typography (Fontstørrelse)
 */
export class Typography extends React.Component {
  static propTypes = {
    /** Mulighet for egen overstyring av css*/
    className: PropTypes.string,
    /** Tar bort definisjon av marg for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
    noMargin: PropTypes.arrayOf(PropTypes.string),
    /** Tar bort definisjon av farge for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
    noColor: PropTypes.arrayOf(PropTypes.string),
    /** Tar bort definisjon av fontstørrelse for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
    noSize: PropTypes.arrayOf(PropTypes.string),
    /** Tar bort definisjon av ramme for spesifikke tagger ('a')*/
    noBorder: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    className: undefined,
    noMargin: undefined,
    noColor: undefined,
    noSize: undefined,
    noBorder: undefined
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={classnames(getClassNames(this.props), className)}>
        {children}
      </div>
    );
  }
}

export default Typography;
