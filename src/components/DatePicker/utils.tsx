const monthsNynorsk = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember',
];

const shortMonthsNynorsk = [
  'jan.',
  'feb.',
  'mars',
  'apr.',
  'mai',
  'juni',
  'juli',
  'aug.',
  'sep.',
  'okt.',
  'nov.',
  'des.',
];

const daysNynorsk = [
  'søndag',
  'måndag',
  'tysdag',
  'onsdag',
  'torsdag',
  'fredag',
  'laurdag',
];

const shortDaysNynorsk = ['sø.', 'må.', 'ty.', 'on.', 'to.', 'fr.', 'la.'];

const monthsSamisk = [
  'Ođđajagemánnu',
  'Guovvamánnu',
  'Njukčamánnu',
  'Cuoŋománnu',
  'Miessemánnu',
  'Geassemánnu',
  'Suoidnemánnu',
  'Borgemánnu',
  'Čakčamánnu',
  'Golggotmánnu',
  'Skábmamánnu',
  'Juovlamánnu',
];

const shortMonthsSamisk = [
  'Ođđ',
  'Guo',
  'Nju',
  'Cuo',
  'Mie',
  'Gea',
  'Suo',
  'Bor',
  'Čak',
  'Gol',
  'Ská',
  'Juo',
];

const daysSamisk = [
  'Sotnabeaivi',
  'Mánnodat',
  'Disdat',
  'Gaskavahkku',
  'Duorastat',
  'Bearjadat',
  'Lávvardat',
];

const shortDaysSamisk = ['Sot', 'Mán', 'Dis', 'Gas', 'Duo', 'Bea', 'Láv'];

export const DEFAULTFORMATDATE = (date: Date | null | undefined): string => {
  return date
    ? Intl.DateTimeFormat('no', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
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
    return null;
  }
  return null;
};

export const monthsForLocale = (
  localeName = 'no',
  monthFormat: 'long' | 'short' = 'long'
) => {
  if (localeName === 'nn') {
    if (monthFormat === 'long') {
      return monthsNynorsk;
    }
    if (monthFormat === 'short') {
      return shortMonthsNynorsk;
    }
  }

  if (localeName === 'se') {
    if (monthFormat === 'long') {
      return monthsSamisk;
    }
    if (monthFormat === 'short') {
      return shortMonthsSamisk;
    }
  }

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
  if (localeName === 'nn') {
    if (dayFormat === 'long') {
      return daysNynorsk;
    }
    if (dayFormat === 'short') {
      return shortDaysNynorsk;
    }
  }

  if (localeName === 'se') {
    if (dayFormat === 'long') {
      return daysSamisk;
    }
    if (dayFormat === 'short') {
      return shortDaysSamisk;
    }
  }

  const format = new Intl.DateTimeFormat(localeName, { weekday: dayFormat })
    .format;
  const weekdays: string[] = [];
  for (let day = 0; day < 7; day++) {
    weekdays.push(format(new Date(Date.UTC(2020, 7, day + 2)))); // add 2 days to let the week start on Sunday
  }
  return weekdays;
};
