import {
  DEFAULTFORMATDATE,
  DEFAULTPARSEDATEFROMSTRING,
  monthsForLocale,
  weekdaysForLocale,
} from './utils';

describe('Datepicker utils', () => {
  describe('DEFAULTFORMATDATE', () => {
    test('Når den kalles med utc dato, så returnerer den riktig dato format', () => {
      const today = new Date(Date.UTC(2022, 8, 29, 0, 0, 0, 0));
      expect(DEFAULTFORMATDATE(today)).toEqual('29.09.2022');
    });
    test('Når den kalles uten argument, så returnerer den en tom string', () => {
      expect(DEFAULTFORMATDATE()).toEqual('');
    });
  });

  describe('DEFAULTPARSEDATEFROMSTRING', () => {
    test('Når den kalles med riktig dato format, så returnerer den utc dato', () => {
      const today = new Date(Date.UTC(2022, 8, 29, 0, 0, 0, 0));
      expect(DEFAULTPARSEDATEFROMSTRING('29.09.2022')).toEqual(today);
    });
    test('Når den kalles med feil dato format, så returnerer den null', () => {
      expect(DEFAULTPARSEDATEFROMSTRING('29.9.2022')).toEqual(null);
    });
    test('Når den kalles uten argument, så returnerer den null', () => {
      expect(DEFAULTPARSEDATEFROMSTRING()).toEqual(null);
    });
  });

  describe('monthsForLocale', () => {
    test('Når den kalles med norsk localeName og long monthFormat, så returnerer den norske måneder', () => {
      const monthsNorwegian = [
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
      expect(monthsForLocale('no', 'long')).toEqual(monthsNorwegian);
    });
    test('Når den kalles med norsk localeName og short monthFormat, så returnerer den forkortelser for norske måneder', () => {
      const shortMonthsNorwegian = [
        'jan',
        'feb',
        'mar',
        'apr',
        'mai',
        'jun',
        'jul',
        'aug',
        'sep',
        'okt',
        'nov',
        'des',
      ];
      expect(monthsForLocale('no', 'short')).toEqual(shortMonthsNorwegian);
    });
    test('Når den kalles med engelsk localeName og long monthFormat, så returnerer den engelske måneder', () => {
      const monthsEnglish = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      expect(monthsForLocale('en', 'long')).toEqual(monthsEnglish);
    });
    test('Når den kalles med engelsk localeName og short monthFormat, så returnerer den forkortelser for engelske måneder', () => {
      const shortMonthsEnglish = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      expect(monthsForLocale('en', 'short')).toEqual(shortMonthsEnglish);
    });
  });

  describe('weekdaysForLocale', () => {
    test('Når den kalles med norsk localeName og long dayFormat, så returnerer den norske ukedager og starter på søndag', () => {
      const daysNorwegian = [
        'søndag',
        'mandag',
        'tirsdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lørdag',
      ];
      expect(weekdaysForLocale('no', 'long')).toEqual(daysNorwegian);
    });
    test('Når den kalles med norsk localeName og short dayFormat, så returnerer den forkortelser for norske ukedager og starter på søndag', () => {
      const shortDaysNorwegian = [
        'søn.',
        'man.',
        'tir.',
        'ons.',
        'tor.',
        'fre.',
        'lør.',
      ];
      expect(weekdaysForLocale('no', 'short')).toEqual(shortDaysNorwegian);
    });
    test('Når den kalles med engelsk localeName og long dayFormat, så returnerer den engelske ukedager og starter på søndag', () => {
      const daysEnglish = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      expect(weekdaysForLocale('en', 'long')).toEqual(daysEnglish);
    });
    test('Når den kalles med engelsk localeName og short dayFormat, så returnerer den forkortelser for engelske ukedager og starter på søndag', () => {
      const shortDaysEnglish = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
      ];
      expect(weekdaysForLocale('en', 'short')).toEqual(shortDaysEnglish);
    });
  });
});
