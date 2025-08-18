import { StyleSheet } from "react-native";
import { AppTheme } from "../../types/themeTypes";

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: 8,
    },
    label: {
      color: theme.colors.input.label.color,
      fontSize: theme.colors.input.label.size,
      fontFamily: theme.fonts.bold,
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      backgroundColor: theme.colors.input.background.primary,
      width: theme.colors.input.width,
      height: theme.colors.input.height,
      fontSize: theme.colors.input.placeholder.size,
      fontFamily: theme.fonts.regular,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      paddingLeft: 40,
      color: theme.colors.input.placeholder.primary,
    },
    iconContainer: {
      position: "absolute",
      zIndex: 1,
      paddingLeft: 10,
    },
    iconRightContainer: {
      position: "absolute",
      right: 0,
      paddingRight: 10,
    },
    icon: {
      color: theme.colors.input.placeholder.icon.primary,
    },
    errorText: {
      color: "#f6190b",
      marginTop: 4,
      marginLeft: 10,
    },
  });
