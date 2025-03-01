import { AuthData } from "../../contexts/Auth";

const login = async (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "mau@email.com" && password === "admin123") {
        resolve({ token: "123456", email });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
};

export const authService = { login };
