import React, { useContext } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../contexts/Auth";

const Home: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <CustomButton title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
