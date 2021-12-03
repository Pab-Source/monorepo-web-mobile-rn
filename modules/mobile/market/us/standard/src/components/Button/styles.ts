import { StyleSheet } from 'react-native';

export const makeStyles = (theme: any) =>
  StyleSheet.create({
    button: {
      borderRadius: 12,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 51,
    },
    buttonDisabled: { backgroundColor: theme.buttonDisabled },
    buttonActive: {
      backgroundColor: theme.buttonActive,
    },
    buttonText: {
      fontFamily: theme.fontFamily,
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonTextDisabled: {
      color: theme.buttonTextDisabled,
    },
    buttonTextActive: { color: theme.buttonTextActive },
  });
