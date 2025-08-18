import { AppTheme } from "../../types/themeTypes";
import { StyleSheet } from "react-native";

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.screen.background,
      alignItems: "center",
    },
    section: {
      backgroundColor: "#9e9e9e",
      width: 320,
      minHeight: 420,
      borderTopRightRadius: 50,
      borderBottomLeftRadius: 50,
      alignItems: "center",
      padding: 25,
    },
    title: {
      fontFamily: theme.fonts.bold,
      color: "#d8ff0b",
      fontSize: 25,
      marginTop: -10,
      marginBottom: 10,
    },
    orTextDark: {
      fontFamily: theme.fonts.light,
      fontSize: 18,
      color: "#FFFFFF",
      marginTop: 10,
    },
    orTextLight: {
      fontFamily: theme.fonts.light,
      fontSize: 18,
      color: "#0A0A0A",
      marginTop: 10,
    },
    containerButton: {
      paddingTop: 15,
    },
    socialContainer: {
      marginTop: 12,
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
    loginContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginTop: 15,
    },
    loginTextDark: {
      fontFamily: theme.fonts.medium,
      fontSize: 18,
      color: "#ffffff",
    },
    loginTextLight: {
      fontFamily: theme.fonts.medium,
      fontSize: 18,
      color: "#0A0A0A",
    },
    loginButtonText: {
      fontFamily: theme.fonts.bold,
      fontSize: 18,
      color: theme.colors.header.background,
    },
    loginButtonDark: {
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      width: 71,
      height: 54,
      borderRadius: 15,
    },
    loginButtonLight: {
      backgroundColor: "#1E1E1E",
      justifyContent: "center",
      alignItems: "center",
      width: 71,
      height: 54,
      borderRadius: 15,
    },
  });
