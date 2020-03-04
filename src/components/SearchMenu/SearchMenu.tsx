import * as React from 'react';
import {
  ISearchBoxProps,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import classnames from 'classnames';
import { getClassNames } from './SearchMenu.classNames';
import { getClassNames as searchFieldClasses } from '../SearchField/SearchField.classNames';
import { ReactElement } from 'react';

export interface SearchMenuProps extends ISearchBoxProps {
  /** Boolean for om dropdownlisten skal vises initielt */
  dropdownVisible?: boolean;
  children: Array<ReactElement> | ReactElement;
  /** Boolean for on om listeelementene er av type checkbox */
  checkbox?: boolean;
}

const SearchMenu: React.FC<SearchMenuProps> = props => {
  const {
    checkbox,
    children,
    className,
    dropdownVisible: dropdownVisibleFromProp,
    onChange,
    value: valueFromProp,
    ...rest
  } = props;
  const styles = getClassNames(props);
  const [value, setValue] = React.useState<string | undefined>(valueFromProp);
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(
    dropdownVisibleFromProp !== undefined ? dropdownVisibleFromProp : true
  );
  const [focus, setFocus] = React.useState<number>(-1);
  const listRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const setSearchResult = (newValue: string) => {
    if (children && newValue) {
      const newList = searchInList(newValue);
      setDropdownVisible(newList.length > 0);
    }
  };

  const changeEvent = (text: string | undefined) => {
    //@ts-ignore TODO
    const event: React.ChangeEvent<HTMLInputElement> = {};
    setValue(text);
    onChange && onChange(event, text);
    setDropdownVisible(false);
    setFocus(-1);
    listRefs.current = [];
  };

  const findListItems = (
    childrenInList: Array<ReactElement> | ReactElement
  ) => {
    if (!Array.isArray(childrenInList)) {
      childrenInList = [childrenInList];
    }
    const filtered = childrenInList.map((child: ReactElement, key: number) => {
      if (child.type === 'ul') {
        const grandchildrenList: Array<ReactElement> = [];
        child.props.children.map(
          (grandchildren: ReactElement, childKey: number) => {
            const grandChildrenKey = grandchildren.key
              ? (grandchildren.key as number) - 1
              : childKey;
            const editedGrandchild = (
              <li
                key={grandChildrenKey}
                ref={(ref: HTMLLIElement | null) => {
                  listRefs.current.push(ref);
                }}
                className={classnames(checkbox && styles.typeCheckbox)}
                onClick={() => {
                  const currentKey = listRefs.current[grandChildrenKey];
                  if (!checkbox && currentKey) {
                    changeEvent(currentKey.innerText);
                  }
                }}
                onKeyPress={ev => {
                  const currentKey = listRefs.current[grandChildrenKey];
                  if (ev.keyCode === 0 && currentKey) {
                    changeEvent(currentKey.innerText);
                  }
                }}
                onKeyDown={ev => handleOnKeyDown(ev)}
                tabIndex={0}
              >
                {grandchildren.props.children}
              </li>
            );
            grandchildrenList.push(editedGrandchild);
            return grandchildrenList;
          }
        );
        const clone = React.cloneElement(child, {
          children: grandchildrenList,
          key: child.type.toString().concat(key.toString())
        });
        return clone;
      }
      return child;
    });
    return filtered;
  };

  const searchInList = (filterText: string) => {
    return listRefs.current.filter(item => {
      if (item) {
        if (
          item.innerText
            .replace(/\s/g, '')
            .toLowerCase()
            .indexOf(filterText.replace(/\s/g, '').toLowerCase()) > -1
        ) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      }
      return item;
    });
  };

  const handleOnKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
    if (dropdownVisible && listRefs.current) {
      let newFocus = focus;
      if (ev.keyCode === 38) {
        newFocus--;
      } else if (ev.keyCode === 40) {
        newFocus++;
      }
      if (newFocus <= listRefs.current.length - 1) {
        const focusItem = listRefs.current[newFocus];
        focusItem && focusItem.focus();
        setFocus(newFocus);
      }
    }
  };

  const [filteredChildren] = React.useState(findListItems(children));

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <SearchBox
          {...rest}
          type={'search'}
          className={classnames(searchFieldClasses(props).main, className)}
          value={value}
          onChange={(ev, newValue) => {
            if (newValue) {
              setSearchResult(newValue);
            }
            setValue(newValue);
            onChange && onChange(ev, newValue);
          }}
          onKeyDown={ev => handleOnKeyDown(ev)}
        />
      </div>
      {dropdownVisible && (
        <div
          className={classnames(
            searchFieldClasses(props).searchListDropdown,
            styles.searchMenuDropdown
          )}
        >
          {filteredChildren}
        </div>
      )}
    </>
  );
};

export default SearchMenu;
