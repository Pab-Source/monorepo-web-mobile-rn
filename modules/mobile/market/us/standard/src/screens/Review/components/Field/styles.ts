import { StyleSheet } from 'react-native';


export const makeStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    label: {
      fontFamily: theme.fontFamily,
      fontSize: theme.reviewLabelSize,
      color: theme.reviewLabelColor,
    },
    value: {
      fontFamily: theme.fontFamily,
      color: theme.reviewValueColor,
      fontSize: theme.reviewValueSize,
      fontWeight: 'bold',
    },
  });
