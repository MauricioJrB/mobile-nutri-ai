import { Router } from "./src/routes/Router";

import {
  useFonts,
  KumbhSans_300Light,
  KumbhSans_400Regular,
  KumbhSans_500Medium,
  KumbhSans_600SemiBold,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import { AuthProvider } from "./src/contexts/Auth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/contexts/Theme";
import { StatusBar } from "react-native";

export function App() {
  const [fontsLoaded] = useFonts({
    KumbhSans_300Light,
    KumbhSans_400Regular,
    KumbhSans_500Medium,
    KumbhSans_600SemiBold,
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <StatusBar translucent backgroundColor="transparent" />
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
