import "server-only";
import nodemailer from "nodemailer";
import type { ContactInput } from "@/lib/contact/schema";
import { escapeHtml } from "./escape";

export async function sendContactEmail(input: ContactInput): Promise<boolean> {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.CONTACT_TO_EMAIL || user; 

    if (!user || !pass) {
        console.warn("[CONTACT] Faltan EMAIL_USER o EMAIL_PASS en el .env.");
        return false;
    }

    const { name, email, topic, message } = input;

    const html = `
        <div style="font-family:Arial,sans-serif;max-width:560px;">
        <h2 style="margin:0 0 12px;">Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tema:</strong> ${escapeHtml(topic)}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
        <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>`;

    const text = `Nombre: ${name}\nCorreo: ${email}\nTema: ${topic}\n\n${message}`;

    try {
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
        });

        const info = await transporter.sendMail({
        from: `"Contacto Web" <${user}>`,
        to: to, 
        replyTo: email, 
        subject: `Contacto web: ${topic}`,
        html,
        text,
        });

        console.log("[CONTACT] Correo enviado con éxito:", info.messageId);
        return true;
    } catch (error) {
        console.error("[CONTACT_EMAIL_ERROR]", error);
        return false;
    }
}