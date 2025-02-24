"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import contactSchema, { type Contact } from "@/globals/types";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export function ContactSection() {
  const { mutate } = api.mailer.create.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Contact> = (data: Contact, e) => {
    e?.preventDefault();
    console.log("Formulario enviado:", data);
    mutate(data);
    reset(); // Resetear el formulario después del envío
  };

  return (
    <AnimatedSection className="bg-rose-50 py-16 sm:py-20">
      <div id="contacto" className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-light text-rose-900 sm:mb-12 sm:text-3xl">
          Contacto
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-600 text-base text-white hover:bg-rose-700 sm:text-lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-900">
                Información de contacto
              </h3>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-600" />
                <Link
                  href="tel:+18292909120"
                  className="text-base text-gray-700 sm:text-lg"
                >
                  +1 (829) 290-9120
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-rose-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  C. Espiral #4, esquina calle 13, Santo Domingo. Padilla
                  clínica dental.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-rose-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  Lun-Vie: 9:00-20:00
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.181201214053!2d-69.95094122480944!3d18.47544968260935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8987c442beb9%3A0x308a4a0d8aaee248!2sPadilla%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses-419!2sdo!4v1740400432063!5m2!1ses-419!2sdo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-rose-900 sm:text-xl">
                Horario de atención
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Lunes - Viernes</span>
                  <span className="font-medium text-rose-700">
                    9:00 - 20:00
                  </span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Sábado</span>
                  <span className="font-medium text-rose-700">
                    10:00 - 15:00
                  </span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Domingo</span>
                  <span className="font-medium text-rose-700">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
