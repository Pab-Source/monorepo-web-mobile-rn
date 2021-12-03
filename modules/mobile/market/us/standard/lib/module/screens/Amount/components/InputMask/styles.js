import { StyleSheet } from 'react-native';
export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      minHeight: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapperInput: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontFamily: theme.fontFamily,
      fontSize: theme.sizeAmount,
      color: theme.colorAmount,
      opacity: theme.opacityAmount,
    },
  });
//# sourceMappingURL=styles.js.map
