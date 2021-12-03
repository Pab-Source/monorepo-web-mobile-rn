import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      height: '100%',
      paddingTop: 33,
      paddingHorizontal: 24,
      backgroundColor: theme.layoutColor,
      paddingBottom: 30,
    },
  });

