import type { Theme } from 'react-native-calendars/src/types';

export const palette = {
  DarkGrey: '#3B3B3B',
  Orange: '#E36414',
  ExtraDarkGrey: '#C2C2C2',
};

export const theme: Theme = {
  textSectionTitleColor: palette.DarkGrey,
  todayTextColor: palette.Orange,
  textDisabledColor: palette.ExtraDarkGrey,
  monthTextColor: palette.DarkGrey,
  textSectionTitleDisabledColor: palette.ExtraDarkGrey,
  textDayFontFamily: 'Lato',
  textMonthFontFamily: 'Lato',
  textDayHeaderFontFamily: 'Lato',
  textDayFontWeight: 'normal',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: 'bold',
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 16,
};
