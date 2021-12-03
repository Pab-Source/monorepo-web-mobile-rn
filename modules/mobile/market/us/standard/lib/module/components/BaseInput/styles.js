import { StyleSheet } from 'react-native';
export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
    },
    input: {
      height: 55,
      borderWidth: 1.4,
      borderRadius: 12,
      borderColor: theme.borderInputColor,
      backgroundColor: theme.backgroundInput,
      color: theme.inputColor,
      paddingHorizontal: 18,
      fontSize: theme.inputFontSize,
    },
    bottomLabel: {
      marginLeft: 7,
      marginTop: 7,
      fontSize: theme.labelSize,
      color: theme.labelColor,
    },
  });
//# sourceMappingURL=styles.js.map
