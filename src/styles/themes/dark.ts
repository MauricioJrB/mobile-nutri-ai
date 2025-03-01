import { DefaultTheme } from "styled-components/native";
import { fonts } from "./fonts";

export const dark: DefaultTheme = {
  colors: {
    screen: {
      background: "#1E1E1E",
    },
    header: {
      background: "#D8FF0B",
      title: "#1E1E1E",
    },
    input: {
      background: {
        primary: "#1E1E1E",
        secondary:
          "linear-gradient(to bottom, rgba(10, 10, 10, 0.75) 0%, #D8FF0B 100%",
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
  },
  fonts: fonts,
};
