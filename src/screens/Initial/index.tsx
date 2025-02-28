import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../types/RootStackParamList";
import Logo from "../../components/Logo";

import { Container } from "./styles";

type InitialNavigationProp = StackNavigationProp<AuthStackParamList, "Initial">;

type Props = {
  navigation: InitialNavigationProp;
};

const Initial = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <Logo width={250} height={250} />
    </Container>
  );
};

export default Initial;
