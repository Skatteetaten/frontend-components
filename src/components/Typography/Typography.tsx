import * as React from 'react';
import classnames from 'classnames';
import { getClassNames } from './Typography.classNames';

interface TypographyProps {
  /** Mulighet for egen overstyring av css */
  className?: string;
  /** Tar bort definisjon av marg for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
  noMargin?: string[];
  /** Tar bort definisjon av farge for spesifikke tagger ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote') */
  noColor?: string[];
  /** Tar bort definisjon av fontstørrelse for spesifikke tagger
   * ('h1', 'h2', 'h3', 'h4', 'p', 'ol', 'ul', 'blockquote')
   */
  noSize?: string[];
  /** Tar bort definisjon av ramme for spesifikke tagger ('a') */
  noBorder?: string[];
}
/**
 * @visibleName Typography (Fontstørrelse)
 */
export class Typography extends React.Component<TypographyProps, {}> {
  static defaultProps = {
    className: undefined,
    noBorder: undefined,
    noColor: undefined,
    noMargin: undefined,
    noSize: undefined
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
