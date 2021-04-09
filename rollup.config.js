import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import externals from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import globals from 'rollup-plugin-node-globals';

const extensions = ['.js', '.ts', '.tsx', '.jsx'];
const outputDir = './lib/umd/';
const urlConfig = {
  include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot', '**/*.svg'],
  limit: Infinity,
};
export const externalsConfig = {
  include: [
    'react',
    'react-dom',
    'prop-types',
    'moment',
    'classnames',
    'axios',
    'tslib',
    'react-i18next',
  ],
};
const resolveConfig = {
  extensions,
};
const commonJsConfig = {
  include: /node_modules/,
};
const injectProcessEnvConfig = {
  NODE_ENV: 'production',
};
const typescriptOptions = {};
const babelConfig = {
  exclude: 'node_modules/**',
  extensions,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'transform-react-remove-prop-types',
  ],
  babelHelpers: 'bundled',
};
const terserConfig = (prod) => {
  return {
    compress: {
      unused: false,
      collapse_vars: false,
    },
    output: {
      comments: !prod,
    },
  };
};

const getPluginsConfig = (prod, mini) => {
  const sortie = [
    url(urlConfig),
    svgr(),
    image(),
    json(),
    externals(externalsConfig),
    globals(),
    nodePolyfills(),
    injectProcessEnv(injectProcessEnvConfig),
    resolve(resolveConfig),
    typescript(typescriptOptions),
    babel(babelConfig),
    commonjs(commonJsConfig),
  ];

  if (mini) {
    sortie.push(terser(terserConfig(prod)));
  }

  return sortie;
};

export default (CLIArgs) => {
  const prod = CLIArgs.prod ? CLIArgs.prod : false;
  const mini = CLIArgs.mini ? CLIArgs.mini : false;

  delete CLIArgs.prod;
  delete CLIArgs.mini;

  const bundle = {
    input: 'src/components/index.ts',
    output: {
      file: `${outputDir}index.${prod ? 'production' : 'development'}.js`,
      format: 'umd',
      name: '@skatteetaten/frontend-components',
      globals: {
        react: 'React',
        'react-dom': 'ReactDom',
        'prop-types': 'prop-types',
        classnames: 'classnames',
        moment: 'moment',
        axios: 'axios',
      },
    },
  };

  bundle.plugins = getPluginsConfig(prod, mini);

  return bundle;
};
