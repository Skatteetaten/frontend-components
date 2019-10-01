const path = require('path');
const pkg = require('./package.json');

function generateComponentsGroup(groupName, components) {
  return {
    name: groupName,
    components: components.map(
      component => `src/components/${component}/**/[A-Z]*.js`
    )
  };
}

module.exports = {
  title: 'Skatteetatens designsystem',
  components: 'src/components/**/[A-Z]*.js',
  exampleMode: 'collapse',
  moduleAliases: {
    '@skatteetaten/frontend-components': path.resolve(
      __dirname,
      'src/components'
    )
  },
  pagePerSection: false,
  sections: [
    {
      name: 'Designe og utvikle',
      content: 'src/sections/forside.md',
      sections: [
        {
          name: 'Kom i gang for utviklere',
          content: 'src/sections/kom-i-gang/installasjon.md'
        },
        {
          name: 'Kom i gang for designere',
          content: 'src/sections/kom-i-gang/designere.md'
        },
        {
          name: 'Bidra',
          content: 'src/sections/kom-i-gang/forbedre.md'
        },
        {
          name: 'Teknisk',
          content: 'src/sections/kom-i-gang/utviklere.md'
        },
        {
          name: 'Versjonshistorikk',
          content: 'CHANGELOG.md'
        }
      ]
    },
    generateComponentsGroup('Knapper', [
      'ActionButton',
      'Button',
      'IconButton',
      'NavigationTile',
      'ScrollToTopButton',
    ]),
    generateComponentsGroup('Oppsett av siden', [
      'FooterContent',
      'Grid',
      'SkeBasis',
      'TopBanner',
      'TopStripe',
      'Typography'
    ]),
    generateComponentsGroup('Inputfelt', [
      'Checkbox',
      'ComboBox',
      'DatePicker',
      'Dropdown',
      'RadioButtonGroup',
      'SearchField',
      'TextField'
    ]),
    generateComponentsGroup('Bokser og gruppering', [
      'Accordion',
      'AccordionMenu',
      'Card',
      'CommandBar',
      'StepList',
      'Step',
      'Tabs'
    ]),
    generateComponentsGroup('Ikoner og bilder', ['Chip', 'Icon', 'Image']),
    generateComponentsGroup('Varsler og meldinger', [
      'Callout',
      'Dialog',
      'MessageBar',
      'ErrorMessage'
    ]),
    generateComponentsGroup('Innlasting', ['ProgressBar', 'Spinner']),
    generateComponentsGroup('Tabeller', ['DetailsList', 'Table']),

    {
      name: 'Font og farge',
      sections: [
        {
          name: 'Om skrifttypen',
          content: 'src/sections/design/typografi.md'
        },
        {
          name: 'Farger',
          content: 'src/sections/design/farger.md'
        }
      ]
    }
  ],
  assetsDir: 'assets',
  template: {
    favicon: './favicon.ico',
    head: {
      links: [
        {
          rel: 'manifest',
          href: './manifest.json'
        }
      ]
    }
  },
  styleguideDir: 'docs',
  defaultExample: false,
  usageMode: 'collapse',
  showSidebar: true,
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/components/utils/**',
    '**/*.classNames.js'
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    const dir = path.dirname(componentPath).replace('src/components', '');
    if (dir.search('Layout') > 0) {
      return `import ${name} from '${pkg.name}${dir}/${name}';`;
    } else {
      return `import ${name} from '${pkg.name}${dir}';`;
    }
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md');
  },
  theme: {
    color: {
      linkHover: '#6F2C3F',
      link: '#1362ae',
      name: '#4f2330',
      tyoe: '#6F2C3F',
      error: '#df4661'
    },
    fontFamily: {
      base: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    }
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
    )
  }
};
