import { z } from "zod";

export const rulesLoign = z.object({
    email: z
        .string()
        .nonempty("E-mail é obrigatório.")
        .email("Forneça um e-mail válido."),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "A senha precisa ter no mínimo oito caracteres.")
        .regex(
            /(?=.*?[A-Z])/,
            "A senha deve ter pelo menos uma letra maiúscula."
        )
        .regex(
            /(?=.*?[a-z])/,
            "A senha deve ter pelo menos uma letra minúscula."
        )
        .regex(/(?=.*?[0-9])/, "A senha deve ter pelo menos um número.")
});