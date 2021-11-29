import { TFunction } from 'react-i18next';

export const getIconNameForTheadCell = (
  isSorted: boolean,
  isSortedAscending: boolean
) => {
  if (isSorted) {
    return isSortedAscending ? 'ArrowDown' : 'ArrowUp';
  }

  return 'ArrowUpDown';
};

export const getAriaLabelForTheadCell = (
  name: string | JSX.Element,
  fieldName: string,
  isSorted: boolean,
  isSortedAscending: boolean,
  t: TFunction<Array<string>>
) => {
  let ariaLabel = fieldName;
  if (typeof name === 'string') {
    ariaLabel = isSorted
      ? isSortedAscending
        ? name.concat(' ', t('table.sorted_ascending'))
        : name.concat(' ', t('table.sorted_descending'))
      : name.concat(' ', t('table.sortable'));
  }

  return ariaLabel;
};
