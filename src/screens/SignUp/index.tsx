import React from "react";

import Logo from "../../components/Logo";
import InputForm from "../../components/InputForm";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema } from "../../schemas/signUpFormSchema";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../types/RootStackParamList";

import {
  ButtonContainer,
  ButtonSignUp,
  ButtonSocialMedia,
  ButtonText,
  Container,
  ContainerSignUp,
  ContainerSocialMedia,
  Image,
  Section,
  TextSingUp,
  TextStyled,
  Title,
} from "./styles";

type NavigationProp = StackNavigationProp<AuthStackParamList>;

type SignUpData = z.infer<typeof signUpFormSchema>;

type Props = {
  navigation: NavigationProp;
};

const SignUp = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  return (
    <Container>
      <Logo width={120} height={120} />
      <Section>
        <Title>Crie sua conta</Title>
        <InputForm
          label="Nome"
          name="name"
          control={control}
          placeholder="Digite o seu nome"
          error={errors.name?.message}
          keyboardType="default"
          icon={"user"}
        />
        <InputForm
          label="E-mail"
          name="email"
          control={control}
          placeholder="Digite o seu e-mail"
          error={errors.email?.message}
          keyboardType="default"
          icon={"mail"}
        />
        <InputForm
          label="Senha"
          name="password"
          control={control}
          placeholder="Digite sua senha"
          error={errors.password?.message}
          keyboardType="default"
          icon={"lock"}
        />
        <ButtonContainer>
          <CustomButton
            title={"Sign Up"}
            onPress={handleSubmit(handleSignUp)}
          ></CustomButton>
        </ButtonContainer>
      </Section>

      <TextStyled>Ou cadastre-se com</TextStyled>

      <ContainerSocialMedia>
        <ButtonSocialMedia>
          <Image source={require("../../assets/icon-google.png")} />
        </ButtonSocialMedia>
        <ButtonSocialMedia>
          <Image source={require("../../assets/icon-facebook.png")} />
        </ButtonSocialMedia>
      </ContainerSocialMedia>

      <ContainerSignUp>
        <TextSingUp>Já tem uma conta?</TextSingUp>
        <ButtonSignUp onPress={handleNavigateToLogin}>
          <ButtonText>Login</ButtonText>
        </ButtonSignUp>
      </ContainerSignUp>
    </Container>
  );
};

export default SignUp;
