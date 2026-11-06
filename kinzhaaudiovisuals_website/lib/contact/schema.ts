import { z } from "zod";
import { CONTACT_TOPICS } from "./topics";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Escribe tu nombre.")
        .max(100)
        .regex(/^[^\r\n]+$/, "Escribe un nombre válido."),
    email: z.string().trim().toLowerCase().email("Escribe un correo válido.").max(254),
    topic: z.enum(CONTACT_TOPICS, "Elige un tema."),
    message: z
        .string()
        .trim()
        .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
        .max(2000, "El mensaje es demasiado largo (máximo 2000 caracteres)."),
    website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;