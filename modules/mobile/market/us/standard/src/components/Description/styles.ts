import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    text: {
      color: theme.descriptionColor,
      marginTop: 12,
      fontSize: theme.descriptionSize,
      fontFamily: theme.fontFamily,
    },
  });
