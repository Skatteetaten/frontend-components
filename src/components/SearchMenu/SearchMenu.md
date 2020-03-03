** SearchMenu er en komponent som filtrer menyvalg **

SearchMenu er basert på at de søkbare elementene er pakket inn i en ul

```js
import React from 'react';
import ActionButton from '@skatteetaten/frontend-components/ActionButton';
import SearchMenu from '@skatteetaten/frontend-components/SearchMenu';
import Typography from '@skatteetaten/frontend-components/Typography';

const list_1 = [
  { key: 1, text: 'Forskuddsskatt' },
  { key: 2, text: 'Skattemelding' },
  { key: 3, text: 'Skatteoppgjør' }
];

const list_2 = [
  { key: 4, text: 'Tvangsmulkt' },
  { key: 5, text: 'Tilleggsskatt' },
  { key: 6, text: 'Overtredelsesgebyr' }
];
const [value, setValue] = React.useState(undefined);
const [visible, setVisible] = React.useState(true);

<div style={{ width: '350px' }}>
  <SearchMenu value={value} dropdownVisible={visible}>
    <Typography>
      <h4 style={{ marginLeft: '20px' }}>Skatt for bedrifter og org</h4>
    </Typography>
    <ul>
      {list_1.map(listItem => {
        return (
          <li key={listItem.key}>
            <ActionButton
              ariaLabel={listItem.text}
              color={'black'}
              onClick={() => {
                setValue(listItem.text);
                setVisible(false);
              }}
              tabIndex={-1}
            >
              {listItem.text}
            </ActionButton>
          </li>
        );
      })}
    </ul>
    <Typography>
      <h4 style={{ marginLeft: '20px' }}>Frister, gebyrer og tilleggsskatt</h4>
    </Typography>
    <ul>
      {list_2.map(listItem => {
        return (
          <li key={listItem.key}>
            <ActionButton
              ariaLabel={listItem.text}
              color={'black'}
              onClick={() => {
                setValue(listItem.text);
                setVisible(false);
              }}
            >
              {listItem.text}
            </ActionButton>
          </li>
        );
      })}
    </ul>
  </SearchMenu>
</div>;
```

Med Checkboxer:

```js
import React from 'react';
import SearchMenu from '@skatteetaten/frontend-components/SearchMenu';
import CheckBox from '@skatteetaten/frontend-components/CheckBox';

const checkBoxList = [
  { key: 1, text: 'Forskuddsskatt' },
  { key: 2, text: 'Skattemelding' },
  { key: 3, text: 'Skatteoppgjør' }
];
const [value] = React.useState(undefined);
const [visible, setVisible] = React.useState(true);
const [list, setList] = React.useState([]);

<div style={{ width: '350px' }}>
  <SearchMenu value={value} dropdownVisible={visible} checkbox={true}>
    <ul>
      {checkBoxList.map(listItem => {
        return (
          <li key={listItem.key}>
            <CheckBox
              boxSide={'start'}
              label={listItem.text}
              onChange={(ev, checked) => {
                const tempList = list;
                checked
                  ? tempList.push(listItem.text)
                  : tempList.splice(list.indexOf(listItem.text), 1);
                setList(tempList);
                console.log(list);
              }}
            />
          </li>
        );
      })}
    </ul>
  </SearchMenu>
</div>;
```
