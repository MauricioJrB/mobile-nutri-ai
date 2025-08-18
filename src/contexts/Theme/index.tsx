import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import { AppTheme } from "../../types/themeTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeName = "dark" | "light";

const themes: Record<ThemeName, AppTheme> = {
  dark,
  light,
};

interface ThemeContextProps {
  theme: AppTheme;
  themeName: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("@theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeName(storedTheme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = themeName === "dark" ? "light" : "dark";
    setThemeName(newTheme);
    await AsyncStorage.setItem("@theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
