export interface ThemeColors {
  screen: {
    background: string;
  };
  header: {
    background: string;
    title: string;
    username: string;
  };
  input: {
    background: {
      primary: string;
      secondary: string;
    };
    label: {
      color: string;
      size: number;
    };
    placeholder: {
      primary: string;
      secondary: string;
      size: number;
      icon: {
        primary: string;
        secondary: string;
      };
    };
    width: number;
    height: number;
  };
  button: {
    background: string;
    color: string;
    font: string;
    size: number;
    width: number;
    height: number;
  };
  gradient: {
    primary: string;
    secondary: string;
  };
  navbar: {
    background: {
      primary: string;
      secondary: string;
    };
    icon: {
      primary: string;
      secondary: string;
    };
  };
}

export interface ThemeFonts {
  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
}

export interface AppTheme {
  mode: "dark" | "light";
  colors: ThemeColors;
  fonts: ThemeFonts;
}
