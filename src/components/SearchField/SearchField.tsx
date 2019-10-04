import * as React from 'react';
import classnames from 'classnames';

import {
  SearchBox,
  ISearchBoxProps
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';

import { getClassNames } from './SearchField.classNames';

interface SearchFieldProps extends ISearchBoxProps {
  /** Størrelsen på søkefeltet */
  searchFieldSize?: 'standard' | 'large';
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
}

/**
 * @visibleName SearchField (Søkefelt)
 */
export default class SearchField extends React.PureComponent<
  SearchFieldProps,
  {}
> {
  static defaultProps = {
    searchFieldSize: 'standard',
    border: 'default'
  };

  render() {
    const { className, ...props } = this.props;

    return (
      <SearchBox
        {...props}
        className={classnames(getClassNames(this.props), className)}
      />
    );
  }
}
