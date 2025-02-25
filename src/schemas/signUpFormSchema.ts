import z from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome é obrigatório" })
    .max(20, { message: "O nome deve ter no máximo 20 caracteres" })
    .trim(),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "Senha mínima de 6 caracteres" }),
});
