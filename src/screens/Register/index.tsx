import { z } from "zod";
import { Logo } from "../../components/Logo";
import { useForm } from "react-hook-form";
import { InputForm } from "../../components/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomButton } from "../../components/CustomButton";

import { AuthStackParamList } from "../../types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

import { useTheme } from "../../contexts/Theme";
import { useAuth } from "../../contexts/Auth";

import { styles as createStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import iconGoogle from "../../assets/icon-google.png";
import { registerFormSchema } from "../../schemas/registerFormSchema";

type NavigationProp = StackNavigationProp<AuthStackParamList>;

type RegisterData = z.infer<typeof registerFormSchema>;

type Props = {
  navigation: NavigationProp;
};

export function Register({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { promptGoogleLogin, registerWithEmail } = useAuth();

  const isDark = theme.mode === "dark";

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const handleGoogleLogin = async () => {
    try {
      await promptGoogleLogin();
    } catch (error) {
      console.log("Error to login with Google: ", error);
    }
  };

  const handleRegister = async (data: RegisterData) => {
    try {
      await registerWithEmail(data.name, data.email, data.password);
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error to register: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo width={120} height={120} />
      <View style={styles.section}>
        <Text style={styles.title}>Crie sua conta</Text>
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
        <View style={styles.containerButton}>
          <CustomButton
            title={"Registrar"}
            onPress={handleSubmit(handleRegister)}
          ></CustomButton>
        </View>
      </View>

      <Text style={isDark ? styles.orTextDark : styles.orTextLight}>
        Ou cadastre-se com
      </Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={isDark ? styles.loginButtonDark : styles.loginButtonLight}
          onPress={handleGoogleLogin}
        >
          <Image style={styles.socialIcon} source={iconGoogle} />
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={isDark ? styles.loginTextDark : styles.loginTextLight}>
          Já tem uma conta?
        </Text>
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
