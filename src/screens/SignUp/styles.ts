import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.screen.background};
  align-items: center;
`;

export const Section = styled.View`
  background-color: #9e9e9e;
  width: 320px;
  height: 475;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  align-items: center;
  padding: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #d8ff0b;
  font-size: 25px;
  margin-top: -10px;
  margin-bottom: 25px;
`;

export const TextStyled = styled.Text`
  margin-top: 12px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.input.label.color};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 18px;
`;

export const TextSingUp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #ffffff;
  font-size: 18px;
`;

export const ButtonContainer = styled.View`
  margin-top: 25px;
`;

export const ContainerSocialMedia = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const ButtonSocialMedia = styled.TouchableOpacity`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  width: 71px;
  height: 54px;
  border-radius: 15px;
  margin-bottom: 6px;
`;

export const ContainerSignUp = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 18px;
  color: #d8ff0b;
`;

export const Image = styled.Image`
  width: 29px;
  height: 31px;
`;
