import { AppTheme } from "../../types/themeTypes";
import { fonts } from "./fonts";

export const dark: AppTheme = {
  mode: "dark",
  colors: {
    screen: {
      background: "#1E1E1E",
    },
    header: {
      background: "#D8FF0B",
      title: "#303030",
      username: "#9E9E9E",
    },
    input: {
      background: {
        primary: "#1E1E1E",
        secondary: "#D8FF0B",
      },
      label: {
        color: "#D8FF0B",
        size: 20,
      },
      placeholder: {
        primary: "#FFFFFF",
        secondary: "#D8FF0B",
        size: 18,
        icon: {
          primary: "#FFFFFF",
          secondary: "#D8FF0B",
        },
      },
      width: 274,
      height: 54,
    },
    button: {
      background: "#D8FF0B",
      color: "#1E1E1E",
      font: fonts.bold,
      size: 25,
      width: 274,
      height: 54,
    },
    gradient: {
      primary: "#D8FF0B",
      secondary: "#1E1E1E",
    },
    navbar: {
      background: {
        primary: "#D8FF0B",
        secondary: "#1E1E1E",
      },
      icon: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
    },
  },
  fonts,
};
