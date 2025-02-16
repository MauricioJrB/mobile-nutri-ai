import Routes from "./src/routes";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import colorTheme from './src/styles/themes/index';
import { useColorScheme } from "react-native";

const App = () => {

  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : "dark"];

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
