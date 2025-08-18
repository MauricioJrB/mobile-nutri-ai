import { AppTheme } from "../../types/themeTypes";
import { fonts } from "./fonts";

export const light: AppTheme = {
  mode: "light",
  colors: {
    screen: {
      background: "#E6E6E6",
    },
    header: {
      background: "#9E9E9E",
      title: "#303030",
      username: "#D8FF0B",
    },
    input: {
      background: {
        primary: "#F0F0F0",
        secondary: "#D8FF0B",
      },
      label: {
        color: "#D8FF0B",
        size: 20,
      },
      placeholder: {
        primary: "#303030",
        secondary: "#D8FF0B",
        size: 18,
        icon: {
          primary: "#303030",
          secondary: "#D8FF0B",
        },
      },
      width: 274,
      height: 54,
    },
    button: {
      background: "#D8FF0B",
      color: "#000000",
      font: fonts.bold,
      size: 25,
      width: 274,
      height: 54,
    },
    gradient: {
      primary: "#9E9E9E",
      secondary: "#E6E6E6",
    },
    navbar: {
      background: {
        primary: "#D8FF0B",
        secondary: "#E6E6E6",
      },
      icon: {
        primary: "#D8FF0B",
        secondary: "#303030",
      },
    },
  },
  fonts,
};
