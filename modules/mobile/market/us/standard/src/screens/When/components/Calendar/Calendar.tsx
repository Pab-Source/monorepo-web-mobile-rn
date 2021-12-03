import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Calendar as WixCalendar } from 'react-native-calendars';
import { Arrow } from './components/Arrow';
import { makeStyles } from './styles';
import { useTheme } from '../../../../context/hooks/useTheme';
import type { Theme } from 'react-native-calendars/src/types';
import './config/locales.ts';

export interface ICalendar {
  onChange: (value: string) => void;
}

export const Calendar: FC<ICalendar> = ({ onChange }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [selected, setSelected] = useState('');

  const handlePress = (value: any) => {
    setSelected(value.dateString);
    onChange(value.dateString);
  };

  const stylesCalendar: Theme = {
    calendarBackground: theme.layoutColor,
    backgroundColor: theme.layoutColor,
    textSectionTitleColor: theme.titleColor,
    todayTextColor: theme.calendarToday,
    selectedDayBackgroundColor: theme.calendarSelected,
    textDisabledColor: theme.calendarDisabledDay,
    monthTextColor: theme.calendarMonth,
    textSectionTitleDisabledColor: theme.calendarTextDisabled,
    dayTextColor: theme.calendarActivesDays,
    textDayFontFamily: theme.fontFamily,
    textMonthFontFamily: theme.fontFamily,
    textDayHeaderFontFamily: theme.fontFamily,
    textDayFontWeight: 'normal',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 16,
  };

  return (
    <View style={styles.container}>
      <WixCalendar
        onDayPress={handlePress}
        markingType="custom"
        markedDates={{
          [selected]: {
            selected: true,
            selectedColor: theme.calendarSelected,
            customStyles: { container: styles.badgeCalendar },
          },
        }}
        renderArrow={(direction) => <Arrow direction={direction} />}
        minDate={new Date()}
        theme={stylesCalendar}
      />
    </View>
  );
};
