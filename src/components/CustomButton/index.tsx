import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title , onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default CustomButton;
