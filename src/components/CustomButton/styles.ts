import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.button.background};
  width: ${({ theme }) => theme.colors.button.width};
  height: ${({ theme }) => theme.colors.button.height};
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.colors.button.font};
  font-size: ${({ theme }) => theme.colors.button.size};
`;
