import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { SearchBox } from 'office-ui-fabric-react/lib-commonjs/SearchBox';

import { getClassNames } from './SearchField.classNames';

/**
 * @visibleName SearchField (Søkefelt)
 */
export default class SearchField extends React.PureComponent {
  static propTypes = {
    /** For ytterligere stiling */
    className: PropTypes.string,
    /** Beskrivende informasjon til skjermlesere */
    ariaLabel: PropTypes.string,
    /** Callback når input endres  */
    onChange: PropTypes.func,
    /** Callback når input fjernes  */
    onClear: PropTypes.func,
    /** Callback når bruker trykker ENTER  */
    onSearch: PropTypes.func,
    /** Tekst inni feltet som vises før man skriver */
    placeholder: PropTypes.string,
    /** Verdi av tekst i søkefeltet */
    value: PropTypes.string,
    /** Størrelsen på søkefeltet */
    searchFieldSize: PropTypes.oneOf(['standard', 'large']),
    /** Størrelsen på rammen */
    border: PropTypes.oneOf(['default', 'slim']),
    /** Global attributt som må være unik for hele HTML dokumentet */
    id: PropTypes.string
  };

  static defaultProps = {
    searchFieldSize: 'standard',
    border: 'default'
  };

  render() {
    const { searchFieldSize, border, className, id, ...props } = this.props;

    return (
      <div id={id}>
        <SearchBox
          {...props}
          className={classnames(getClassNames(this.props), className)}
          searchFieldSize={searchFieldSize}
        />
      </div>
    );
  }
}
