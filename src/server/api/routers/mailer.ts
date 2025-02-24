import { env } from "@/env";
import contactSchema from "@/globals/types";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { transporter } from "@/server/lib/nodemailer";
import { TRPCError } from "@trpc/server";

export const mailerRouter = createTRPCRouter({
  create: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
    try {
      console.log(transporter);

      // **Correo para la empresa (recibiendo la consulta del cliente)**
      const mailToCompany = {
        from: `"${input.name}" <${input.email}>`, // El cliente como remitente
        to: env.SMTP_USER, // Correo de la empresa
        subject: `Contacto: ${input.name}`,
        text: `Has recibido un nuevo mensaje de contacto:

Nombre: ${input.name}
Email: ${input.email}
Teléfono: ${input.phone ?? "No proporcionado"}

Mensaje:
${input.message}
        `,
        html: `
          <h2>📩 Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Teléfono:</strong> ${input.phone ?? "No proporcionado"}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${input.message}</p>
        `,
      };

      // **Correo de confirmación para el cliente**
      const mailToClient = {
        from: `"Soporte" <${env.SMTP_USER}>`, // La empresa como remitente
        to: input.email, // Cliente como destinatario
        subject: "Hemos recibido tu mensaje",
        text: `Hola ${input.name},

Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo te responderá lo antes posible.

Copia de tu mensaje:
"${input.message}"

Atentamente,
El equipo de soporte.
        `,
        html: `
          <h2>✅ Hemos recibido tu mensaje</h2>
          <p>Hola <strong>${input.name}</strong>,</p>
          <p>Gracias por contactarnos. Hemos recibido tu mensaje y nuestro equipo te responderá lo antes posible.</p>
          <p><strong>Copia de tu mensaje:</strong></p>
          <blockquote>${input.message}</blockquote>
          <p>Atentamente,</p>
          <p><strong>El equipo de soporte</strong></p>
        `,
      };

      console.log(mailToCompany, mailToClient);

      // Enviar ambos correos
      await transporter.sendMail(mailToCompany);
      await transporter.sendMail(mailToClient);

      return { success: true };
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error al enviar el correo",
      });
    }
  }),
});
