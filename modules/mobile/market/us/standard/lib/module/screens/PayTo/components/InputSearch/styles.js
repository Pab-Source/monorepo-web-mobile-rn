import { StyleSheet } from 'react-native';
export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 24,
      borderWidth: 0.9,
      paddingRight: 15,
      backgroundColor: theme.backgroundInput,
      borderColor: theme.borderInputColor,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingHorizontal: 20,
      fontSize: theme.inputFontSize,
      color: theme.inputColor,
      fontFamily: theme.fontFamily,
    },
    icon: {},
  });
//# sourceMappingURL=styles.js.map
