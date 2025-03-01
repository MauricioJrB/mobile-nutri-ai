import { DefaultTheme } from "styled-components/native";
import { fonts } from "./fonts";

export const light: DefaultTheme = {
  colors: {
    screen: {
      background: "#E6E6E6",
    },
    header: {
      background: "#9E9E9E",
      title: "#303030",
    },
    input: {
      background: {
        primary: "#F0F0F0",
        secondary:
          "linear-gradient(to bottom, rgba(10, 10, 10, 0.75) 0%, #D8FF0B 100%",
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
          primary: "#FFFFFF",
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
  },
  fonts: fonts,
};
