import classnames from 'classnames';
import {
  ISearchBoxProps,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import * as React from 'react';
import { getClassNames } from './SearchField.classNames';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Størrelsen på søkefeltet */
  searchFieldSize?: 'standard' | 'large';
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** @ignore */
  underlined?: ISearchBoxProps['underlined'];
}

/**
 * @visibleName SearchField (Søkefelt)
 */
const SearchField: React.FC<SearchFieldProps> = props => {
  const { className, ...rest } = props;

  return (
    <SearchBox
      {...rest}
      className={classnames(getClassNames(props), className)}
    />
  );
};

SearchField.defaultProps = {
  border: 'default',
  searchFieldSize: 'standard'
};

export default SearchField;
