import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface Props {
  hasIcon?: boolean;
}

export const Container = styled.View`
  margin-bottom: 1px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.input.label.color};
  font-size: ${({ theme }) => theme.colors.input.label.size};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputStyled = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.input.placeholder.primary,
}))<Props>`
  background-color: ${({ theme }) => theme.colors.input.background.primary};
  width: ${({ theme }) => `${theme.colors.input.width}px`};
  height: ${({ theme }) => `${theme.colors.input.height}px`};
  font-size: ${({ theme }) => `${theme.colors.input.placeholder.size}px`};
  font-family: ${({ theme }) => theme.fonts.regular};
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.input.placeholder.primary};
`;

export const IconStyled = styled(Feather)`
  color: ${({ theme }) => theme.colors.input.placeholder.icon.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  padding: 0 10px;
  z-index: 1;
  position: absolute;
  color: ${({ theme }) => theme.colors.input.placeholder.primary};
`;

export const ErrorText = styled.Text`
  color: #f6190b;
  margin-top: 0px;
  margin-left: 10px;
`;
