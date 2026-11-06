import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact/schema";
import { sendContactEmail } from "@/lib/email/send-contact-email";

export async function POST(req: Request) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos no válidos." },
        { status: 400 },
        );
    }

    if (parsed.data.website) {
        return NextResponse.json({ ok: true });
    }

    const sent = await sendContactEmail(parsed.data);
    if (!sent) {
        return NextResponse.json(
        { error: "No pudimos enviar tu mensaje. Escríbenos por Instagram o por correo." },
        { status: 502 },
        );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
}