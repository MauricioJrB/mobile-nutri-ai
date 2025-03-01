import Router from "./src/routes/Router";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import colorTheme from "./src/styles/themes/index";
import { TouchableOpacity, useColorScheme } from "react-native";

import {
  useFonts,
  KumbhSans_300Light,
  KumbhSans_400Regular,
  KumbhSans_500Medium,
  KumbhSans_600SemiBold,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import { AuthProvider } from "./src/contexts/Auth";

const App = () => {
  useFonts({
    KumbhSans_300Light,
    KumbhSans_400Regular,
    KumbhSans_500Medium,
    KumbhSans_600SemiBold,
    KumbhSans_700Bold,
  });

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? colorTheme.dark : colorTheme.light;

  // example
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
