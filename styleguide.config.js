const path = require('path');
const pkg = require('./package.json');

function generateComponentsGroup(groupName, components) {
  return {
    name: groupName,
    components: components.map(
      (component) => `src/components/${component}/**/[A-Z]*.tsx`
    ),
  };
}

module.exports = {
  title: 'Skatteetatens designsystem',
  components: 'src/components/**/[A-Z]*.tsx',
  exampleMode: 'collapse',
  usageMode: 'collapse',
  moduleAliases: {
    '@skatteetaten/frontend-components': path.resolve(
      __dirname,
      'src/components'
    ),
  },
  pagePerSection: false,
  sections: [
    {
      name: 'Designe og utvikle',
      sections: [
        {
          name: 'Kom i gang for utviklere',
          content: 'src/sections/kom-i-gang/installasjon.md',
        },
        {
          name: 'Kom i gang for designere',
          content: 'src/sections/kom-i-gang/designere.md',
        },
        {
          name: 'Tommelfingerregler for design',
          content: 'src/sections/kom-i-gang/tommelfinger.md',
        },
        {
          name: 'Tips og triks',
          content: 'src/sections/kom-i-gang/tipstriks.md',
        },
        {
          name: 'Krav og versjoner',
          content: 'src/sections/kom-i-gang/utviklere.md',
        },
        {
          name: 'Designtokens (deprecated)',
          content: 'src/sections/kom-i-gang/designtokens.md',
        },
        {
          name: 'i18next og språkstøtte',
          content: 'src/sections/kom-i-gang/i18next.md',
        },
        {
          name: 'Nettleserstøtte',
          content: 'src/sections/kom-i-gang/nettlesere.md',
        },
        {
          name: 'Versjonshistorikk',
          content: 'CHANGELOG.md',
        },
      ],
    },
    {
      name: 'Anbefalte mønstre',
      sections: [
        {
          name: 'Obligatoriske felt',
          content: 'src/sections/monstre/obligatorisk.md',
        },
        {
          name: 'Store tabeller',
          content: 'src/sections/monstre/tabell-kompleks.md',
        },
        {
          name: 'Feilmeldinger',
          content: 'src/sections/monstre/feil.md',
        },
        {
          name: 'Hjelpetekster',
          content: 'src/sections/monstre/hjelpetekster.md',
        },
        {
          name: 'Sidelayout',
          content: 'src/sections/monstre/sidelayout.md',
        },
        {
          name: 'Ledetekst',
          content: 'src/sections/monstre/ledetekst.md',
        },
        {
          name: 'Single page-applikasjon (SPA)',
          content: 'src/sections/monstre/spa.md',
        },
      ],
    },
    generateComponentsGroup('Knapper og lenker', [
      'ActionButton',
      'Button',
      'ButtonLink',
      'IconButton',
      'Link',
      'LinkGroup',
      'NavigationTile',
      'ScrollToTopButton',
    ]),
    generateComponentsGroup('Oppsett av siden', [
      'FooterContent',
      'Grid',
      'Pagination',
      'SkeBasis',
      'TopBanner',
      'LanguagePicker',
      'TopStripe',
      'TopStripeMenu',
      'TopStripeButton',
      'Typography',
    ]),
    generateComponentsGroup('Inputfelt og skjema', [
      'CheckBox',
      'ComboBox',
      'DatePicker',
      'Dropdown',
      'FileUploader',
      'RadioButtonGroup',
      'SearchField',
      'TextField',
    ]),
    generateComponentsGroup('Bokser og gruppering', [
      'Accordion',
      'AccordionMenu',
      'Card',
      'OpenClose',
      'CommandBar',
      'LinkGroup',
      'StepList',
      'Step',
      'Tabs',
    ]),
    generateComponentsGroup('Ikoner og bilder', ['Chip', 'Icon', 'Image']),
    generateComponentsGroup('Varsler og meldinger', [
      'Callout',
      'Dialog',
      'Modal',
      'MessageBar',
      'LabelWithCallout',
      'ErrorMessage',
      'ErrorSummary',
    ]),
    generateComponentsGroup('Innlasting', ['ProgressBar', 'Spinner']),
    generateComponentsGroup('Tabeller', ['DetailsList', 'Table']),

    {
      name: 'Font og farge',
      sections: [
        {
          name: 'Skrifttype',
          content: 'src/sections/design/typografi.md',
        },
        {
          name: 'Farger',
          content: 'src/sections/design/farger.md',
        },
      ],
    },
  ],
  assetsDir: 'assets',
  template: {
    lang: 'no',
    favicon: './favicon.ico',
    head: {
      links: [
        {
          rel: 'manifest',
          href: './manifest.json',
        },
      ],
    },
  },
  styleguideDir: 'docs',
  defaultExample: false,
  showSidebar: true,
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/components/utils/**',
    '**/*.classNames.ts',
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    const dirname = path.dirname(componentPath);
    const dirNameStriped = dirname.replace('src/components/', '');
    // src/components/Accordion/AccordionItem/AccordionItem.tsx
    return `import { ${name} } from '${pkg.name}/${dirNameStriped}';`;
  },
  theme: {
    color: {
      linkHover: '#6F2C3F',
      link: '#1362ae',
      name: '#4f2330',
      tyoe: '#6F2C3F',
      error: '#e12143',
      /* "Vis kode" må oppfylle kontrastkravet i WCAG */
      codeComment: '#bfaeae',
      codePunctuation: '#6a6565',
      codeString: '#4e661d',
      codeInserted: '#4e661d',
      codeOperator: '#9d5808',
      codeFunction: '#af1d3a',
      codeVariable: '#99660b',
    },
    fontFamily: {
      base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
  styleguideComponents: {
    StyleGuide: path.join(__dirname, 'src/styleguide/StyleGuide/StyleGuide'),
    'slots/CodeTabButton': path.join(
      __dirname,
      'src/styleguide/slots/CodeTabButton'
    ),
    'slots/UsageTabButton': path.join(
      __dirname,
      'src/styleguide/slots/UsageTabButton'
    ),
    'slots/IsolateButton': path.join(
      __dirname,
      'src/styleguide/slots/IsolateButton'
    ),
    // 'Table': path.join(
    //   __dirname,
    //   'src/styleguide/Table'
    // )
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      savePropValueAsString: true,
      propFilter: (prop) => {
        if (prop.parent) {
          // Fjerner default html props fra API lista
          return !prop.parent.fileName.includes('node_modules/@types/react');
        }
        return true;
      },
    }
  ).parse,
};
