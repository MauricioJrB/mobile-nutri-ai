import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  useGoogleAuth,
} from "../../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface AuthData {
  id: string;
  email: string;
  name: string;
  photoUrl: string | null;
  token: string | null;
}

interface AuthContextData {
  authData?: AuthData | null;
  logout: () => Promise<void>;
  loading: boolean;
  promptGoogleLogin: () => void;
  registerWithEmail: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({
  authData: null,
  logout: async () => {},
  loading: false,
  promptGoogleLogin: () => {},
  registerWithEmail: async () => {},
  loginWithEmail: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authData, setAuth] = useState<AuthData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { user, promptAsync } = useGoogleAuth();

  useEffect(() => {
    loadFromStorage();
  }, []);

  useEffect(() => {
    if (user) {
      setAuth(user);
      AsyncStorage.setItem("@AuthData", JSON.stringify(user));
    }
  }, [user]);

  const loginWithEmail = async (email: string, password: string) => {
    const auth = await loginWithEmailAndPassword(email, password);
    setAuth(auth);
    await AsyncStorage.setItem("@AuthData", JSON.stringify(auth));
  };

  const registerWithEmail = async (
    name: string,
    email: string,
    password: string,
  ) => {
    await registerWithEmailAndPassword(name, email, password);
  };

  const loadFromStorage = async () => {
    setLoading(true);
    try {
      const auth = await AsyncStorage.getItem("@AuthData");
      if (auth) setAuth(JSON.parse(auth));
    } catch (error) {
      console.log("Erro ao carregar usuário do AsyncStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setAuth(null);
    await AsyncStorage.removeItem("@AuthData");
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        logout,
        loading,
        promptGoogleLogin: promptAsync,
        registerWithEmail,
        loginWithEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
