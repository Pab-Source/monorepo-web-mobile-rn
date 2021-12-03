import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    text: {
      fontFamily: theme.fontFamily,
      color: theme.titleColor,
      fontSize: theme.titleSize,
      fontWeight: 'bold',
    },
  });
