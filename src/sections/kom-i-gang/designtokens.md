Vi bruker design tokens til faste variabler, som farger, luft (spacing) og typografi.

```bash noeditor
import designtokenColors from '/utils/designtokens/_colors.json';
import designtokenFontSizes from '/utils/designtokens/_fontSizes.json';
import designtokenSpacing from '/utils/designtokens/_spacing.json';
import designtokenBreakpoints from '/utils/designtokens/_breakpoints.json';
```

```js noeditor
import { Table } from '@skatteetaten/frontend-components/Table';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Typography } from '@skatteetaten/frontend-components/Typography';
import designtokenSpacing from '../../components/utils/designtokens/_spacing.json';
import designtokenBreakpoints from '../../components/utils/designtokens/_breakpoints.json';
import designtokenFontSizes from '../../components/utils/designtokens/_fontSizes.json';
import designtokenColors from '../../components/utils/designtokens/_colors.json';

const columns = [
  {
    key: 'column1',
    name: 'Navn',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'column3',
    name: '',
    fieldName: 'example',
    isResizable: true,
    alignment: 'right',
  },
  {
    key: 'column2',
    name: 'Verdi',
    fieldName: 'value',
    isResizable: true,
    alignment: 'right',
  },
  {
    key: 'column4',
    name: 'Kopier',
    fieldName: 'kopierToken',
    maxWidth: 50,
    alignment: 'right',
  },
];

const colorKeys = Object.keys(designtokenColors);
const spaceKeys = Object.keys(designtokenSpacing);
const breakKeys = Object.keys(designtokenBreakpoints);
const fontKeys = Object.keys(designtokenFontSizes);

const designTokenColorsData = [];
colorKeys.forEach((item) => {
  designTokenColorsData.push({
    name: `$${item}`,
    value: designtokenColors[item],
    kopierToken: (
      <IconButton
        title="Kopier"
        buttonSize="small"
        icon="Copy"
        onClick={() => {
          navigator.clipboard.writeText(`designtokenColors['${item}']`);
        }}
      />
    ),
    example: (
      <div
        class="squareSwatch"
        style={{
          backgroundColor: designtokenColors[item],
          width: '1.5rem',
          height: '1.5rem',
        }}
      ></div>
    ),
  });
});

const designTokenSpacingsData = [];
spaceKeys.forEach((item) => {
  designTokenSpacingsData.push({
    name: `$${item}`,
    value: designtokenSpacing[item],
    kopierToken: (
      <IconButton
        title="Kopier"
        buttonSize="small"
        icon="Copy"
        onClick={() => {
          navigator.clipboard.writeText(`designtokenSpacing['${item}']`);
        }}
      />
    ),
  });
});

const designtokenBreakpointsData = [];
breakKeys.forEach((item) => {
  designtokenBreakpointsData.push({
    name: `$${item}`,
    value: designtokenBreakpoints[item],
    kopierToken: (
      <IconButton
        title="Kopier"
        buttonSize="small"
        icon="Copy"
        onClick={() => {
          navigator.clipboard.writeText(`designtokenBreakpoints['${item}']`);
        }}
      />
    ),
  });
});

const designtokenTypographyData = [];
fontKeys.forEach((item) => {
  designtokenTypographyData.push({
    name: `$${item}`,
    value: designtokenFontSizes[item],
    kopierToken: (
      <IconButton
        title="Kopier"
        buttonSize="small"
        icon="Copy"
        onClick={() => {
          navigator.clipboard.writeText(`designtokenFontSizes['${item}']`);
        }}
      />
    ),
  });
});

const iconGroup = {
  colours: designTokenColorsData,
  spacings: designTokenSpacingsData,
  breakpoints: designtokenBreakpointsData,
  typography: designtokenTypographyData,
};

<div>
  <Typography>
    <h3>Farger</h3>
    <Table columns={columns} data={iconGroup.colours} fullWidth />
    <br />
    <h3>Typografi</h3>
    <Table columns={columns} data={iconGroup.typography} fullWidth />
    <br />
    <h3>Luft / spacing</h3>
    <Table columns={columns} data={iconGroup.spacings} fullWidth />
    <br />
    <h3>Brekkpunkter</h3>
    <Table columns={columns} data={iconGroup.breakpoints} fullWidth />
    <br />
    <br />
  </Typography>
</div>;
```
