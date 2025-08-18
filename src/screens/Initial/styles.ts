import { StyleSheet } from "react-native";
import { AppTheme } from "../../types/themeTypes";

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.screen.background,
    },
  });
