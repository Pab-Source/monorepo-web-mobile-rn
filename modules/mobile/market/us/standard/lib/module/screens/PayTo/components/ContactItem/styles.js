import { StyleSheet } from 'react-native';
export const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 18,
      flexDirection: 'row',
      alignItems: 'center',
    },
    badgeInitials: {
      marginRight: 12,
      backgroundColor: theme.badgeInitialsBg,
      borderRadius: 20,
      height: theme.badgeInitialsSize,
      width: theme.badgeInitialsSize,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInitials: {
      fontSize: 12,
      color: theme.badgeInitialsColor,
      fontFamily: theme.fontFamily,
      fontWeight: 'bold',
    },
    contactBody: {},
    name: {
      fontFamily: theme.fontFamily,
      color: theme.titleColor,
      fontSize: 16,
    },
    phone: {
      fontFamily: theme.fontFamily,
      fontSize: 12,
      color: theme.descriptionColor,
    },
  });
//# sourceMappingURL=styles.js.map
