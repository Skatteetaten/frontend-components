import { getTheme } from '@fluentui/react';
import { mergeStyles } from '@fluentui/merge-styles';
import { PaletteProps } from '../utils';
import { ChipProps, ChipType } from './Chip.types';

export const getClassNames = function getClassNames(props: ChipProps) {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles({
    displayName: `ske-chip`,
    display: 'inline-block',
    color: palette.skeColor.blackAlt,
    fontWeight: '400',
    border: `1px solid ${palette.skeColor.white}`,
    verticalAlign: 'middle',
    padding: '3px 12px',
    fontSize: props.size,
    borderRadius: '5px',
    backgroundColor: palette.skeColor[props.type as ChipType],
    selectors: {
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& a': {
        textDecoration: 'underlined',
        color: palette.skeColor.blackAlt,
      },
      '& i': {
        verticalAlign: 'text-bottom',
      },
    },
  });
};
