import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      paddingTop: 33,
      paddingBottom: 26,
      paddingHorizontal: 24,
      backgroundColor: theme.layoutColor,
      justifyContent: 'space-between',
    },
  });
