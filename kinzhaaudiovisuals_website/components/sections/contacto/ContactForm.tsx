"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT_TOPICS } from "@/lib/contact/topics";

type Status = "idle" | "sending" | "sent" | "error";

const control =
    "mt-1 w-full rounded-md border border-black/40 bg-white/80 px-3 py-2 text-sm text-black outline-none focus-visible:ring-2 focus-visible:ring-action";

    export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);
    const submitting = useRef(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting.current) return;
        submitting.current = true;
        setStatus("sending");
        setError(null);

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: AbortSignal.timeout(20000),
            body: JSON.stringify(data),
        });
        const json = await res.json().catch(() => null);

        if (!res.ok) {
            setError(json?.error ?? "No pudimos enviar tu mensaje. Inténtalo de nuevo.");
            setStatus("error");
            return;
        }

        form.reset();
        setStatus("sent");
        } catch {
        setError("No pudimos conectar con el servidor. Inténtalo de nuevo.");
        setStatus("error");
        } finally {
        submitting.current = false;
        }
    }

    if (status === "sent") {
        return (
        <div role="status" className="rounded-lg bg-card p-6 text-black">
            <h3 className="font-display text-2xl font-bold uppercase">¡Mensaje enviado!</h3>
            <p className="mt-3 text-sm leading-relaxed">
            Gracias por escribirnos. Te responderemos al correo que dejaste.
            </p>
            <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 text-sm underline underline-offset-2"
            >
            Enviar otro mensaje
            </button>
        </div>
        );
    }

    return (
        <form
        onSubmit={handleSubmit}
        aria-busy={status === "sending"}
        className="relative rounded-lg bg-card p-6 text-black"
        >
        <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
            Nombre
            <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                className={control}
            />
            </label>

            <label className="block text-sm">
            Correo electrónico
            <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className={control}
            />
            </label>

            <label className="block text-sm sm:col-span-2">
            ¿Sobre qué quieres hablar?
            <select name="topic" required defaultValue="" className={control}>
                <option value="" disabled>
                Elige una opción
                </option>
                {CONTACT_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                    {topic}
                </option>
                ))}
            </select>
            </label>

            <label className="block text-sm sm:col-span-2">
            Mensaje
            <textarea
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                className={`${control} resize-y`}
            />
            </label>
        </div>

        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
            <label>
            No llenar este campo
            <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
        </div>

        {error && (
            <p role="alert" className="mt-4 text-sm font-medium text-brand-red-dark">
            {error}
            </p>
        )}

        <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 rounded-full bg-action px-6 py-2 text-sm text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-60"
        >
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>

        <p className="mt-4 text-xs">
            Usaremos tus datos únicamente para responder tu mensaje.
        </p>
        </form>
    );
}