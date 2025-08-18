import { AppTheme } from "../../types/themeTypes";
import { StyleSheet } from "react-native";

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.screen.background,
      alignItems: "center",
      justifyContent: "space-around",
    },
    section: {
      backgroundColor: "#9e9e9e",
      width: 320,
      minHeight: 385,
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 50,
      alignItems: "center",
      padding: 25,
    },
    title: {
      fontFamily: theme.fonts.bold,
      color: "#d8ff0b",
      fontSize: 25,
      marginBottom: 30,
    },
    forgotButton: {
      marginBottom: 15,
      marginTop: 1,
    },
    forgotText: {
      fontFamily: theme.fonts.bold,
      fontSize: 18,
      color: theme.colors.header.background,
    },
    containerButton: {
      paddingTop: 2,
    },
    orTextDark: {
      fontFamily: theme.fonts.light,
      fontSize: 18,
      color: "#FFFFFF",
    },
    orTextLight: {
      fontFamily: theme.fonts.light,
      fontSize: 18,
      color: "#0A0A0A",
    },
    socialContainer: {
      flexDirection: "row",
      gap: 20,
    },
    socialButton: {
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      width: 71,
      height: 54,
      borderRadius: 15,
    },
    socialIcon: {
      width: 29,
      height: 31,
    },
    registerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    registerTextDark: {
      fontFamily: theme.fonts.medium,
      fontSize: 18,
      color: "#ffffff",
    },
    registerTextLight: {
      fontFamily: theme.fonts.medium,
      fontSize: 18,
      color: "#0A0A0A",
    },
    registerButtonText: {
      fontFamily: theme.fonts.bold,
      fontSize: 18,
      color: theme.colors.header.background,
    },
    registerButtonDark: {
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      width: 71,
      height: 54,
      borderRadius: 15,
    },
    registerButtonLight: {
      backgroundColor: "#1E1E1E",
      justifyContent: "center",
      alignItems: "center",
      width: 71,
      height: 54,
      borderRadius: 15,
    },
  });
