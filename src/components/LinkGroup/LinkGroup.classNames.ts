import { mergeStyleSets } from '@fluentui/merge-styles';

export const getClassNames = () => {
  return mergeStyleSets({
    arrowLink: {
      display: 'block',
      position: 'relative',
      margin: '0 0 12px 0px',
    },
    icon: {
      /* Icon is imported and then hidden to import correct icon font */
      display: 'none',
    },
    arrowLinkList: {
      paddingInlineStart: '0px',
    },
  });
};
