import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export function getClassNames(props) {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    commandBar: {
      selectors: {
        '& .ms-CommandBar': {
          padding: '0',
          backgroundColor: 'transparent'
        },
        '& .ms-Button--commandBar': {
          color: palette.skeColor.blue,
          paddingLeft: '8px',
          paddingRight: '8px',
          marginRight: '2px'
        },
        '& .ms-Button--commandBar:hover': {
          backgroundColor: palette.skeColor.lightBlue
        },
        '& .ms-Button--commandBar:hover .ms-Button-menuIcon': {
          backgroundColor: palette.skeColor.lightBlue
        },
        '& .ms-Button--commandBar:focus': {
          border: `2px solid ${palette.skeColor.blue}`,
          paddingLeft: '6px',
          paddingRight: '6px'
        },
        '& :focus::after': {
          outline: '0px solid transparent !important'
        },
        '& .ms-Button--commandBar:active .ms-Button-label': {
          color: palette.skeColor.darkBlue
        },
        '& .ms-Button-icon': {
          color: props.selected ? palette.skeColor.white : palette.skeColor.blue
        },
        '& .ms-Button-menuIcon': {
          color: palette.skeColor.blue + '!important'
        },
        '& .ms-Button-menuIcon:hover': {
          color: palette.skeColor.blue
        },
        '& .ms-OverflowSet-overflowButton i': {
          color: palette.skeColor.blue
        },
        '& .ms-Button-label': {
          color: palette.skeColor.blue
        }
      }
    },
    contextualMenu: {
      backgroundColor: palette.skeColor.blue
    },
    tabButton: {
      backgroundColor: props.selected
        ? palette.skeColor.lightBlue
        : 'transparent',
      borderRadius: '3px'
    }
  });
}
