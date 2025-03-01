import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { authService } from "../../services/Auth";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthData {
  token: string | null;
  email: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFromStorage();
  }, []);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem("@AuthData");
    if (auth) {
      setAuth(JSON.parse(auth));
    }
  };

  const signIn = async (email: string, password: string): Promise<AuthData> => {
    try {
      const auth = await authService.login(email, password);
      setAuth(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));

      return auth;
    } catch (error) {
      Alert.alert(error.message, "tente novamente");
      throw new Error("Login failed");
    }
  };

  const signOut = async (): Promise<void> => {
    setAuth(undefined);
    await AsyncStorage.removeItem("@AuthData");
    return;
  };

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
