import { api } from "../api";
import * as Google from "expo-auth-session/providers/google";
import { CLIENT_ID, ANDROID_CLIENT_ID, WEB_CLIENT_ID } from "@env";
import { useEffect, useState } from "react";
import { AuthData } from "../../contexts/Auth";

export const useGoogleAuth = () => {
  const [user, setUser] = useState<AuthData | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    scopes: ["openid", "profile", "email"],
  });

  const authenticateWithGoogle = async (
    id_token: string,
  ): Promise<AuthData> => {
    try {
      const authResponse = await api.post<AuthData>(
        "/auth/login/google",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${id_token}`,
          },
        },
      );

      const userData: AuthData = {
        id: authResponse.data.id,
        name: authResponse.data.name,
        email: authResponse.data.email,
        photoUrl: authResponse.data.photoUrl ?? "",
        token: authResponse.data.token,
      };
      setUser(userData);
      return userData;
    } catch (error) {
      console.log("Erro ao autenticar com Google:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      if (id_token) authenticateWithGoogle(id_token);
    }
  }, [response]);

  return { authenticateWithGoogle, promptAsync, user };
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
): Promise<AuthData> => {
  try {
    const response = await api.post<AuthData>("/auth/register", {
      name,
      email,
      password,
    });

    const userData: AuthData = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      photoUrl: response.data.photoUrl ?? "",
      token: null,
    };

    return userData;
  } catch (error) {
    console.log("Erro ao registrar usuário:", error);
    throw error;
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<AuthData> => {
  try {
    const response = await api.post<AuthData>("/auth/login", {
      email,
      password,
    });

    const userData: AuthData = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      photoUrl: response.data.photoUrl ?? "",
      token: response.data.token,
    };
    return userData;
  } catch (error) {
    console.log("Erro ao logar usuário:", error);
    throw error;
  }
};
