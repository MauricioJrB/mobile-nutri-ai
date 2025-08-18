import { useAuth } from "../../contexts/Auth";
import { Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";

export function Home() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <CustomButton title="Logout" onPress={() => logout()} />
    </View>
  );
}
