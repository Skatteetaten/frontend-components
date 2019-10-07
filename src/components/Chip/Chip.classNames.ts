import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

import { getFocusStyle } from '../utils/getFocusStyle';

export var getClassNames = function getClassNames(props) {
  const { palette } = getTheme();
  const inset = '-0.5rem';
  const radius = '3rem';

  return mergeStyles([
    getFocusStyle({ palette }, inset, 'relative', radius),
    {
      displayName: `ske-chip`,
      display: 'inline-block',
      color: palette.skeColor.blackAlt,
      fontWeight: props.bold ? '700' : '400',
      border: `1px solid ${palette.skeColor.white}`,
      verticalAlign: 'middle',
      padding: '3px 12px',
      fontSize: props.size,
      borderRadius: '5px',
      backgroundColor: palette.skeColor[props.type],
      selectors: {
        '& > div': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '& a': {
          textDecoration: 'underlined',
          color: palette.skeColor.blackAlt
        },
        '& i': {
          verticalAlign: 'text-bottom'
        }
      }
    }
  ]);
};
