import * as React from 'react';
import { ISearchBoxProps, SearchBox } from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import classnames from 'classnames';
import { getClassNames } from './SearchMenu.classNames';
import { getClassNames as searchFieldClasses } from '../SearchField/SearchField.classNames';
import { ReactElement } from 'react';

export interface SearchMenuProps extends ISearchBoxProps {
  /** Boolean for om dropdownlisten skal vises initielt */
  dropdownVisible?: boolean;
}

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
  const [dropdownVisible, setDropDownVisible] = React.useState<boolean>(dropdownVisibleFromProp !== undefined ? dropdownVisibleFromProp : true);

  const renderChildrenBasedOnSearch = (children, value: string | undefined) => {
    const filteredChildren: Array<ReactElement> = [];
    const filterChildren = (children: Array<ReactElement>) => {
      children.forEach((child: ReactElement) => {
        if (child.type === 'ul') {
          const filteredGrandChildren: Array<ReactElement> = [];
          child.props.children.forEach(listItem => {
            if (
              listItem.ref.current && listItem.ref.current.innerText
                .toString()
                .toLowerCase()
                .indexOf(value?.toLowerCase()) > -1
            ) {
              filteredGrandChildren.push(listItem);
            }
          });
          const clone = React.cloneElement(child, {
            children: filteredGrandChildren
          });
          filteredChildren.push(clone);
        } else {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    };

    return (
      <div
        className={classnames(
          searchFieldClasses(props).searchListDropdown,
          styles.searchMenuDropdown
        )}
      >
        {value ? filterChildren(children) : children}
      </div>
    );
  };
  const [filteredChildren, setFilteredChildren] = React.useState<Array<ReactElement>>(renderChildrenBasedOnSearch(children, valueFromProp));

  React.useEffect(() => {
    setValue(valueFromProp);
    setFilteredChildren(renderChildrenBasedOnSearch(children, valueFromProp))
  }, [valueFromProp]);

  const ShowChildren = filteredChildren.map((child, key: string) => {
    return child
  });

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <SearchBox
          {...rest}
          className={classnames(searchFieldClasses(props).main, className)}
          value={value}
          onChange={(ev, newValue: string | undefined) => {
            setValue(newValue);
          }}
        />
      </div>
      {dropdownVisible && <ShowChildren />}
    </>
  );
};

export default SearchMenu;