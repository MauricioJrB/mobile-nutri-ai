import React from "react";

import { Logo } from "../../components/Logo";
import { InputForm } from "../../components/InputForm";
import { CustomButton } from "../../components/CustomButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../../schemas/loginFormSchema";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../types/RootStackParamList";

import { styles as createStyles } from "./styles";

import { useAuth } from "../../contexts/Auth";
import { useTheme } from "../../contexts/Theme";
import iconGoogle from "../../assets/icon-google.png";

import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

type LoginData = z.infer<typeof loginFormSchema>;

export function Login() {
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

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const navigation = useNavigation<AuthNavigationProp>();

  const { promptGoogleLogin, loginWithEmail } = useAuth();

  const isDark = theme.mode === "dark";

  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };

  const handleGoogleLogin = async () => {
    try {
      await promptGoogleLogin();
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error to login with Google", error.message);
      }
    }
  };

  const handleLoginWithEmailAndPassword = async (data: LoginData) => {
    try {
      await loginWithEmail(data.email, data.password);
    } catch (error) {
      console.log("Error to login with Email/Password: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={150} height={150} />
      <View style={styles.section}>
        <Text style={styles.title}>Faça login na sua conta</Text>
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

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.containerButton}>
          <CustomButton
            title={"Login"}
            onPress={handleSubmit(handleLoginWithEmailAndPassword)}
          ></CustomButton>
        </View>
      </View>

      <Text style={isDark ? styles.orTextDark : styles.orTextLight}>
        Ou faça login com
      </Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={
            isDark ? styles.registerButtonDark : styles.registerButtonLight
          }
          onPress={handleGoogleLogin}
        >
          <Image style={styles.socialIcon} source={iconGoogle} />
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text
          style={isDark ? styles.registerTextDark : styles.registerTextLight}
        >
          Não tem uma conta?
        </Text>
        <TouchableOpacity onPress={handleNavigateToRegister}>
          <Text style={styles.registerButtonText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
