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
  children: Array<ReactElement>;
}
const filterChildren = (children: Array<ReactElement>, value) => {
  const tempFilteredChildren: Array<ReactElement> = [];

  children.forEach((child: ReactElement) => {
    if (child.type === 'ul') {
      child.props.children.filter(grandchild => {
        if (
          grandchild.ref.current.innerText
            .toLowerCase()
            .indexOf(value.toLowerCase()) === -1
        ) {
          grandchild.ref.current.style.display = 'none';
          grandchild.ref.current.setAttribute('tabindex', 0);
        } else {
          grandchild.ref.current.style.display = '';
          grandchild.ref.current.setAttribute('tabindex', -1);
        }
        return grandchild;
      });
    }
    tempFilteredChildren.push(child);
  });
  return tempFilteredChildren;
};

const SearchMenu: React.FC<SearchMenuProps> = props => {
  const {
    children,
    className,
    dropdownVisible: dropdownVisibleFromProp,
    value: valueFromProp,
    ...rest
  } = props;
  const styles = getClassNames(props);
  const [value, setValue] = React.useState<string | undefined>(valueFromProp);
  const [dropdownVisible, setDropDownVisible] = React.useState<boolean>(
    dropdownVisibleFromProp !== undefined ? dropdownVisibleFromProp : true
  );
  const [filteredChildren, setFilteredChildren] = React.useState<
    Array<ReactElement>
  >([]);

  React.useEffect(() => {
    setValue(valueFromProp);
    setFilteredChildren(renderChildrenBasedOnSearch(children, valueFromProp));
  }, [valueFromProp]);

  const renderChildrenBasedOnSearch = (
    children: Array<ReactElement> | ReactElement,
    value: string | undefined
  ) => {
    if (!Array.isArray(children)) {
      children = [children]
    }
    const returnedList = value ? filterChildren(children, value) : children;
    return returnedList;
  };

  const mappedChildren = filteredChildren.map(
    (child: ReactElement, key: number) => {
      return (
        <div key={child.type.toString().concat(key.toString())}>{child}</div>
      );
    }
  );

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <SearchBox
          {...rest}
          className={classnames(searchFieldClasses(props).main, className)}
          value={value}
          onChange={(ev, newValue: string | undefined) => {
            setValue(newValue);
            setFilteredChildren(
              renderChildrenBasedOnSearch(children, newValue)
            );
          }}
        />
      </div>
      {dropdownVisible && (
        <div
          className={classnames(
            searchFieldClasses(props).searchListDropdown,
            styles.searchMenuDropdown
          )}
        >
          {mappedChildren}
        </div>
      )}
    </>
  );
};

export default SearchMenu;
