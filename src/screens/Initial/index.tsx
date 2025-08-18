import { Logo } from "../../components/Logo";
import { useTheme } from "../../contexts/Theme";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { AuthStackParamList } from "../../types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles as createStyles } from "./styles";

type InitialNavigationProp = StackNavigationProp<AuthStackParamList, "Initial">;

type Props = {
  navigation: InitialNavigationProp;
};

export function Initial({ navigation }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={250} height={250} />
    </SafeAreaView>
  );
}
