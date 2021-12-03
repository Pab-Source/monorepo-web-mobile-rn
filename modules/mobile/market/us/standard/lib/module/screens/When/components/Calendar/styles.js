import { StyleSheet } from 'react-native';
export const palette = {
  DarkGrey: '#3B3B3B',
  Orange: '#E36414',
  ExtraDarkGrey: '#C2C2C2',
};
export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 25,
      backgroundColor: theme.layoutColor,
    },
    icon: {
      transform: [
        {
          rotateZ: '180deg',
        },
      ],
    },
    badgeCalendar: {
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 30,
    },
  });
//# sourceMappingURL=styles.js.map
