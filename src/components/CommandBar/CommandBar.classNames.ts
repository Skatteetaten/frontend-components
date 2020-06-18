import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    commandBar: {
      selectors: {
        '& .ms-OverflowSet-overflowButton i': {
          color: palette.blueMid
        }
      }
    },
    tabButton: {
      backgroundColor: props.selected ? palette.blueLight : palette.white
    }
  });
}
