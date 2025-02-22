import Routes from "./src/routes";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import colorTheme from "./src/styles/themes/index";
import { useColorScheme } from "react-native";
import {
  useFonts,
  KumbhSans_300Light,
  KumbhSans_400Regular,
  KumbhSans_500Medium,
  KumbhSans_600SemiBold,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";

const App = () => {
  useFonts({
    KumbhSans_300Light,
    KumbhSans_400Regular,
    KumbhSans_500Medium,
    KumbhSans_600SemiBold,
    KumbhSans_700Bold,
  });

  const colorScheme = useColorScheme();
  const theme = colorTheme[colorScheme ? colorScheme : "dark"];

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
