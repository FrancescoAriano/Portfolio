import { NextResponse } from "next/server";
import { transporter } from "@/lib/nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All value are needed." },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: `Nuovo messaggio da ${name} dal portfolio`,
      html: `
        <h1>Nuovo Contatto dal Portfolio</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email del mittente:</strong> ${email}</p>
        <hr />
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        `,
    };

    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Conferma ricezione messaggio | Francesco Ariano`,
      html: `
        <h1>Grazie per avermi contattato, ${name}!</h1>
        <p>Ciao ${name},</p>
        <p>Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.</p>
        <br>
        <p><strong>Riepilogo del tuo messaggio:</strong></p>
        <blockquote style="border-left: 2px solid #ccc; padding-left: 1rem; margin-left: 0; color: #555;">
        ${message.replace(/\n/g, "<br>")}
        </blockquote>
        <br>
        <p>A presto,</p>
        <p><strong>Francesco Ariano</strong></p>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);

    return NextResponse.json(
      { error: "Email sent succesfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error: ", error);

    return NextResponse.json(
      { error: "Error during email sending" },
      { status: 500 }
    );
  }
}
