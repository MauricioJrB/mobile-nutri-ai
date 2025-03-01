import React from "react";

import Logo from "../../components/Logo";
import InputForm from "../../components/InputForm";
import CustomButton from "../../components/CustomButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/loginFormSchema";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../types/RootStackParamList";
import { useAuth } from "../../contexts/Auth";

import {
  ButtonSignUp,
  ButtonSocialMedia,
  ButtonText,
  Container,
  ContainerSignUp,
  ContainerSocialMedia,
  ButtonForgotPassword,
  TextForgotPassword,
  Image,
  Section,
  TextSingUp,
  TextStyled,
  Title,
} from "./styles";

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

type LoginData = z.infer<typeof loginFormSchema>;

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigation = useNavigation<AuthNavigationProp>();

  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const { signIn } = useAuth();

  const handleLogin = async ({ email, password }: LoginData) => {
    if (email && password) {
      await signIn(email, password);
    }
  };

  return (
    <Container>
      <Logo width={150} height={150} />
      <Section>
        <Title>Faça login na sua conta</Title>
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

        <ButtonForgotPassword>
          <TextForgotPassword>Esqueceu a senha?</TextForgotPassword>
        </ButtonForgotPassword>

        <CustomButton
          title={"Login"}
          onPress={handleSubmit(handleLogin)}
        ></CustomButton>
      </Section>

      <TextStyled>Ou faça login com</TextStyled>

      <ContainerSocialMedia>
        <ButtonSocialMedia>
          <Image source={require("../../assets/icon-google.png")} />
        </ButtonSocialMedia>

        <ButtonSocialMedia>
          <Image source={require("../../assets/icon-facebook.png")} />
        </ButtonSocialMedia>
      </ContainerSocialMedia>

      <ContainerSignUp>
        <TextSingUp>Não tem uma conta?</TextSingUp>
        <ButtonSignUp onPress={handleNavigateToSignUp}>
          <ButtonText>Sign Up</ButtonText>
        </ButtonSignUp>
      </ContainerSignUp>
    </Container>
  );
};

export default Login;
