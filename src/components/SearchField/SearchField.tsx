import classnames from 'classnames';
import {
  ISearchBoxProps,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import * as React from 'react';
import { getClassNames } from './SearchField.classNames';
import { IDropdownOption } from 'office-ui-fabric-react';
import ActionButton from '../ActionButton';
import LabelWithCallout, {
  calloutState,
  LabelWithCalloutProps
} from '../LabelWithCallout';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** Hjelpetekst */
  help?: string;
  /** Descriptive label for SearchField */
  label?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Liste med mulige søkeresultat fra søk */
  options?: Array<IDropdownOption>;
  /** Størrelsen på søkefeltet */
  searchFieldSize?: 'standard' | 'large';
  /** @ignore */
  underlined?: ISearchBoxProps['underlined'];
}

const searchInList = (options: Array<IDropdownOption>, filterText: string) => {
  return options
    .filter(option => {
      return option.text.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
    })
    .map(option => option);
};

/**
 * @visibleName SearchField (Søkefelt)
 */
const SearchField: React.FC<SearchFieldProps> = props => {
  const {
    className,
    help,
    id,
    label,
    labelCallout,
    onCalloutToggle,
    options,
    ...rest
  } = props;
  const _searchBoxElement = React.createRef<HTMLDivElement>();
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [searchResultList, setSearchResultList] = React.useState(options);
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const styles = getClassNames(props);

  const renderSuggestions = list => {
    return (
      <div className={styles.searchListDropdown}>
        <ul className={styles.searchList}>
          {list.map(listItem => (
            <li key={listItem.key}>
              <ActionButton
                ariaLabel={listItem.text}
                color={'black'}
                onClick={() => {
                  setValue(listItem.text);
                  setDropdownVisible(false);
                }}
              >
                {listItem.text}
              </ActionButton>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <LabelWithCallout
        id={id}
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      {options ? (
        <div ref={_searchBoxElement} className={styles.searchBoxWrapper}>
          <SearchBox
            {...rest}
            className={classnames(styles.main, className)}
            onChange={(ev, newValue) => {
              if (newValue) {
                const newList = searchInList(options, newValue);
                setSearchResultList(newList);
                setDropdownVisible(newList.length > 0);
                setValue(newValue);
              }
            }}
            value={value}
          />
          {dropdownVisible && renderSuggestions(searchResultList)}
        </div>
      ) : (
        <SearchBox {...rest} className={classnames(styles.main, className)} />
      )}
    </>
  );
};

SearchField.defaultProps = {
  border: 'default',
  searchFieldSize: 'standard'
};

export default SearchField;
