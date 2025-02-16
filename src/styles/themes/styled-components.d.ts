import "styled-components/native";

interface FontFamily {
  light: string;
  regular: string;
  medium: string;
  bold: string;
  extraBold: string;
  semiBold: string;
}

interface Screen {
  background: string;
}

interface Header {
  background: string;
  title: string;
}

interface Input {
  background: {
    primary: string;
    secondary: string;
  };
  label: {
    color: string;
    font: string;
    size: number;
  },
  placeholder: {
    primary: string;
    secondary: string;
    font: string;
    size: number;
  };
  width: number;
  height: number;
}

interface Button {
  background: string;
  color: string;
  font: string;
  size: number;
  width: number;
  height: number;
}

interface Theme {
  screen: Screen;
  button: Button;
  header: Header;
  input: Input;
}

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: Theme;
    fonts: FontFamily;
  }
}