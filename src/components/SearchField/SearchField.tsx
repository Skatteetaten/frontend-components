import classnames from 'classnames';
import { ISearchBox, SearchBox } from '@fluentui/react';
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getClassNames } from './SearchField.classNames';
import { IDropdownOption } from '@fluentui/react';
import i18n from 'i18next';
import { generateId, useHotkeys, t } from '../utils';
import { LabelWithCallout } from '../LabelWithCallout';
import { SearchFieldProps } from './SearchField.types';

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

/*
 * visibleName SearchField (Søkefelt)
 */
export const SearchField: React.FC<SearchFieldProps> = (props) => {
  const {
    className,
    help,
    id,
    label,
    labelButtonAriaLabel,
    labelWithCalloutProps,
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
  const _searchBoxElement = createRef<HTMLDivElement>();
  const _componentRef = useRef<ISearchBox>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [searchResultList, setSearchResultList] = useState(options);
  const [value, setValue] = useState<string | undefined>(props.value);
  const [focus, setFocus] = useState<number>(-1);
  const [hasSelected, setHasSelected] = useState<boolean>(false);
  const styles = getClassNames(props);
  const listRefs = useRef<(HTMLLIElement | null)[]>([]);

  const genratedId = generateId();
  const mainId = id ? id : 'searchfield-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';
  const srFocus = mainId + '-srFocus';
  const resultsId = mainId + '-results';

  if (language) {
    i18n.changeLanguage(language);
  }

  const setSearchResult = useCallback(
    (newValue: string) => {
      if (options && newValue && !hasSelected) {
        let newList = searchInList(options, newValue);
        newList = limitNumberOfResults(newList, limit);
        setSearchResultList(newList);
        setDropdownVisible(newList.length > 0);
        listRefs.current = [];
        setFocus(-1);
      }
    },
    [limit, options, hasSelected]
  );

  useEffect(() => {
    setSearchResultList(options);
    setSearchResult(value ? value : '');
  }, [options, setSearchResult, value]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
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
    setHasSelected(true);
    setDropdownVisible(false);
    setFocus(-1);
    listRefs.current = [];
  };

  const handleOnKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
    if (dropdownVisible && listRefs.current) {
      let newFocus = focus;
      if (ev.key === 'ArrowUp') {
        ev.preventDefault();
        newFocus > 0 && newFocus--;
      } else if (ev.key === 'ArrowDown') {
        ev.preventDefault();
        newFocus < listRefs.current.length && newFocus++;
      } else if (ev.key === 'Escape') {
        setDropdownVisible(false);
        _componentRef.current && _componentRef.current.focus();
      }
      if (newFocus !== focus && newFocus <= listRefs.current.length - 1) {
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

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      event.relatedTarget &&
      !event.currentTarget.contains(event.relatedTarget as Node)
    ) {
      if (
        !event.currentTarget.parentNode ||
        !event.currentTarget.parentNode.contains(event.relatedTarget as Node)
      ) {
        setDropdownVisible(false);
      }
      setFocus(-1);
    }
  };

  const renderSuggestions = (list) => {
    if (list.length === 0) {
      listRefs.current = [];
    }
    return (
      <div className={styles.searchListDropdown} onBlur={handleBlur}>
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
                onFocus={() => {
                  setFocus(key);
                }}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    selectEvent(listItem);
                  } else {
                    handleOnKeyDown(ev);
                  }
                }}
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
        {...labelWithCalloutProps}
      />
      {options ? (
        <div ref={_searchBoxElement}>
          <span id={srFocus} className={styles.srOnly}>
            {t('searchfield.sr.focus')}
          </span>
          <SearchBox
            {...rest}
            onFocus={(event) => {
              event.target && event.target.select();
            }}
            id={inputId}
            aria-expanded={dropdownVisible}
            aria-describedby={srFocus}
            aria-owns={resultsId}
            type={'search'}
            className={classnames(styles.main, className)}
            onChange={(ev, newValue) => {
              onChange && onChange(ev, newValue);
              setHasSelected(false);
              if (!newValue) {
                setDropdownVisible(false);
              } else {
                setSearchResult(newValue);
              }
              setValue(newValue);
            }}
            onKeyDown={(ev) => handleOnKeyDown(ev)}
            value={value !== undefined ? value : ''}
            componentRef={_componentRef}
            iconProps={{
              iconName: 'Filter',
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
          showIcon={true}
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
