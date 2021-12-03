import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginTop: 17,
    },
    text: {
      color: theme.descriptionColor,
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: theme.fontFamily,
    },
    arrow: {
      height: 16,
      width: 16,
    },
  });
