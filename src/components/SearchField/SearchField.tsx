import classnames from 'classnames';
import { ISearchBoxProps, ISearchBox, SearchBox } from '@fluentui/react';
import * as React from 'react';
import { getClassNames } from './SearchField.classNames';
import { IDropdownOption } from '@fluentui/react';
import i18n from 'i18next';
import {
  LabelWithCallout,
  calloutState,
  LabelWithCalloutProps,
  Language,
  generateId,
  useHotkeys,
  t,
} from '../index';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Descriptive label for SearchField */
  label?: string;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
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
  /**påkalt etter bruker valger et alternativ*/
  onSelected?: (option: IDropdownOption) => void;
  /** Language selection for what the screen reader reads out. Default is Norwegian Bokmål */
  language?: Language;
  /** Begrens antall viste søkeresultat */
  limit?: number;
  /** Tillater tastatursnarvei på søk */
  keyboardShortcut?: boolean;
  /** Hvilke taster som fungerer for snarvei */
  searchShortcutKeys?: 'string';
  /** Gjør søkeikonet klikkbart, trenger samme kode som onSearch */
  onSearchIcon?: (newValue: any) => void;
  /** Legg til egen mouseover tittel på søkeikonet */
  searchIconTitle?: 'string';
}

const searchInList = (options: Array<IDropdownOption>, filterText: string) => {
  const regex = /[\s.,:-]+/g;
  return options
    .filter((option) => {
      return (
        option.text
          .replace(regex, '')
          .toLowerCase()
          .indexOf(filterText.replace(regex, '').toLowerCase()) > -1
      );
    })
    .map((option) => option);
};

const limitNumberOfResults = (list: Array<IDropdownOption>, limit?: number) => {
  if (limit && !isNaN(limit)) {
    return list.slice(0, limit);
  }

  return list;
};

/**
 * @visibleName SearchField (Søkefelt)
 */
export const SearchField: React.FC<SearchFieldProps> = (props) => {
  const {
    className,
    labelWithCalloutAutoDismiss,
    help,
    id,
    label,
    labelButtonAriaLabel,
    labelCallout,
    language,
    onCalloutToggle,
    onChange,
    onSelected,
    options,
    limit,
    keyboardShortcut = false,
    searchShortcutKeys = 'ctrl+f',
    onSearchIcon,
    searchIconTitle = 'Søk',
    ...rest
  } = props;
  const _searchBoxElement = React.createRef<HTMLDivElement>();
  const _componentRef = React.useRef<ISearchBox>(null);
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [searchResultList, setSearchResultList] = React.useState(options);
  const [value, setValue] = React.useState<string | undefined>(props.value);
  const [focus, setFocus] = React.useState<number>(-1);
  const styles = getClassNames(props);
  const listRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const genratedId = generateId();
  const mainId = id ? id : 'searchfield-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  const srFocus = mainId + '-srFocus';
  const resultsId = mainId + '-results';

  if (language) {
    i18n.changeLanguage(language);
  }

  const setSearchResult = React.useCallback(
    (newValue: string) => {
      if (options && newValue) {
        let newList = searchInList(options, newValue);
        newList = limitNumberOfResults(newList, limit);
        setSearchResultList(newList);
        setDropdownVisible(newList.length > 0);
      }
    },
    [limit, options]
  );

  React.useEffect(() => {
    setSearchResultList(options);
    setSearchResult(value ? value : '');
  }, [options, setSearchResult, value]);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useHotkeys(searchShortcutKeys, (ev) => {
    if (keyboardShortcut) {
      ev.preventDefault();
      return _componentRef.current?.focus();
    }
  });

  const selectEvent = (item: IDropdownOption) => {
    setValue(!onSelected ? item.text : '');
    onSelected && onSelected(item);
    setDropdownVisible(false);
    setFocus(-1);
    listRefs.current = [];
  };

  const handleOnKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
    if (dropdownVisible && listRefs.current) {
      let newFocus = focus;
      if (ev.keyCode === 38) {
        newFocus--;
      } else if (ev.keyCode === 40) {
        newFocus++;
      } else if (ev.keyCode === 27) {
        setDropdownVisible(false);
      }
      if (newFocus <= listRefs.current.length - 1) {
        const focusItem = listRefs.current[newFocus];
        focusItem && focusItem.focus();
        setFocus(newFocus);
      }
    }
  };

  const handleClickOutside = (event) => {
    const contains = listRefs.current.filter(
      (ref) => ref && ref.contains(event.target)
    );
    if (
      !contains.length &&
      _searchBoxElement.current &&
      !_searchBoxElement.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  const renderSuggestions = (list) => {
    if (list.length === 0) {
      listRefs.current = [];
    }
    return (
      <div className={styles.searchListDropdown}>
        <ul
          id={resultsId}
          role="listbox"
          className={
            dropdownVisible && list.length ? styles.searchList : styles.hiddenUl
          }
        >
          {list.map((listItem, key: number) => {
            return dropdownVisible ? (
              <li
                aria-label={listItem.text}
                key={listItem.key}
                onClick={() => selectEvent(listItem)}
                onKeyPress={(ev) => {
                  if (ev.keyCode === 0) {
                    selectEvent(listItem);
                  }
                }}
                onKeyDown={(ev) => handleOnKeyDown(ev)}
                ref={(ref: HTMLLIElement | null) => {
                  if (ref && listRefs.current.indexOf(ref) === -1) {
                    listRefs.current.splice(key, 0, ref);
                  }
                }}
                tabIndex={0}
                role="option"
                aria-selected={key === focus}
              >
                <div
                  title={listItem.text}
                  className={styles.blackAlt}
                  tabIndex={-1}
                >
                  {listItem.text}
                </div>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        inputId={inputId}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      {options ? (
        <div ref={_searchBoxElement}>
          <span id={srFocus} className={styles.srOnly}>
            {t('searchfield.sr.focus')}
          </span>
          <SearchBox
            {...rest}
            id={inputId}
            aria-expanded={dropdownVisible}
            aria-describedby={srFocus}
            aria-owns={resultsId}
            type={'search'}
            className={classnames(styles.main, className)}
            onChange={(ev, newValue) => {
              onChange && onChange(ev, newValue);
              if (!newValue) {
                setDropdownVisible(false);
              } else {
                setSearchResult(newValue);
              }
              setValue(newValue);
            }}
            onKeyDown={(ev) => handleOnKeyDown(ev)}
            value={value}
            componentRef={_componentRef}
            iconProps={{
              onClick: (ev) => (onSearchIcon ? onSearchIcon(ev) : null),
            }}
          />
          <span aria-live="assertive" className={styles.srOnly}>
            {dropdownVisible
              ? i18n.t('searchfield.sr.results', {
                  ant: searchResultList ? searchResultList.length : 0,
                })
              : ''}
          </span>
          {renderSuggestions(searchResultList)}
        </div>
      ) : (
        <SearchBox
          type={'search'}
          {...props}
          className={classnames(styles.main, className)}
          componentRef={_componentRef}
          iconProps={{
            onClick: (ev) => (onSearchIcon ? onSearchIcon(ev) : null),
            title: onSearchIcon ? searchIconTitle : '',
          }}
        />
      )}
    </div>
  );
};

SearchField.defaultProps = {
  border: 'default',
  searchFieldSize: 'standard',
};
