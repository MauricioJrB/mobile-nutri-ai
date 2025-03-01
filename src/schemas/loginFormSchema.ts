import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(6, {
    message: "Senha mínima de 6 caracteres",
  }),
});
