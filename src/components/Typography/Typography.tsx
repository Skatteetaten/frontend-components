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
const Typography: React.FC<TypographyProps> = props => {
  const { children, className } = props;

  return (
    <div className={classnames(getClassNames(props), className)}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  className: undefined,
  noBorder: undefined,
  noColor: undefined,
  noMargin: undefined,
  noSize: undefined
};
export default Typography;
