import { mergeStyleSets } from '@uifabric/merge-styles';

export const getClassNames = () => {
  return mergeStyleSets({
    arrowLink: {
      display: 'block',
      position: 'relative',
      margin: '0 0 12px 0px'
    },
    arrowLinkList: {
      paddingInlineStart: '0px'
    }
  });
};
