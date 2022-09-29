export const DEFAULTFORMATDATE = (date: Date | null | undefined): string => {
  return date
    ? Intl.DateTimeFormat('no', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      }).format(date)
    : '';
};

export const DEFAULTPARSEDATEFROMSTRING = (date: string): Date | null => {
  try {
    if (date && date.length === 10) {
      const day: number = parseInt(date.substring(0, 2));
      const month: number = parseInt(date.substring(3, 5));
      const year: number = parseInt(date.substring(6, 10));
      const formattedDate: Date = new Date(Date.UTC(year, month - 1, day));
      return formattedDate;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const monthsForLocale = (
  localeName = 'no',
  monthFormat: 'long' | 'short' = 'long'
) => {
  const format = new Intl.DateTimeFormat(localeName, { month: monthFormat })
    .format;
  const months: string[] = [];
  for (let month = 0; month < 12; month++) {
    months.push(format(new Date(Date.UTC(2020, month))));
  }
  return months;
};

export const weekdaysForLocale = (
  localeName = 'no',
  dayFormat: 'long' | 'short' = 'long'
) => {
  const format = new Intl.DateTimeFormat(localeName, { weekday: dayFormat })
    .format;
  const weekdays: string[] = [];
  for (let day = 0; day < 7; day++) {
    weekdays.push(format(new Date(Date.UTC(2020, 7, day + 2)))); // add 2 days to let the week start on Sunday
  }
  return weekdays;
};
