import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    text: {
      color: '#757575',
      marginTop: 12,
      fontSize: 18,
      fontFamily: theme.fontFamily,
    },
  });
