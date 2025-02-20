import { DefaultTheme } from "styled-components/native";
import { fonts } from "./fonts";

export const light: DefaultTheme = {
  colors: {
    screen: {
      background: "#FFFFFF",
    },
    header: {
      background: "#F0F0F0",
      title: "#303030",
    },
    input: {
      background: {
        primary: "#F0F0F0",
        secondary:
          "linear-gradient(to bottom, rgba(10, 10, 10, 0.75) 0%, #707070 100%",
      },
      label: {
        color: "#E1FF41",
        size: 20,
      },
      placeholder: {
        primary: "#303030",
        secondary: "3E1FF41",
        size: 18,
      },
      width: 274,
      height: 54,
    },
    button: {
      background: "#E1FF41",
      color: "#000000",
      font: fonts.bold,
      size: 25,
      width: 274,
      height: 54,
    },
  },
  fonts: fonts
};
