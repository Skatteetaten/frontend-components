import classnames from 'classnames';
import {
  ISearchBoxProps,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import * as React from 'react';
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
    border: 'default',
    searchFieldSize: 'standard'
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
