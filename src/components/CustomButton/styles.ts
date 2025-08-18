import { StyleSheet } from "react-native";
import { AppTheme } from "../../types/themeTypes";

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.button.background,
      width: theme.colors.button.width,
      height: theme.colors.button.height,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    title: {
      fontFamily: theme.colors.button.font,
      fontSize: theme.colors.button.size,
    },
  });
