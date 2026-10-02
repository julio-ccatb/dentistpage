"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { globalVariable } from "@/globals/config";
import contactSchema, { type Contact } from "@/globals/types";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function ContactSection() {
  const { mutate } = api.mailer.create.useMutation({
    onMutate: () => toast.info("Enviando mensaje..."),
    onSuccess: () => toast.success("Mensaje enviado correctamente"),
    onError: () => toast.error("Ocurrió un error al enviar el mensaje"),
  });

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
    <AnimatedSection className="bg-pink-50 py-16 sm:py-20">
      <div id="contacto" className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-light text-pink-900 sm:mb-12 sm:text-3xl">
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-pink-500 focus:ring-pink-500"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-pink-500 focus:ring-pink-500"
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
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-pink-500 focus:ring-pink-500"
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
                className="w-full bg-pink-600 text-base text-white hover:bg-pink-700 sm:text-lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-pink-900">
                Información de contacto
              </h3>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-600" />
                <Link
                  href={globalVariable.phoneLink}
                  className="text-base text-gray-700 hover:text-pink-600 sm:text-lg"
                >
                  {globalVariable.phone}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-600" />
                <Link
                  href={globalVariable.emailLink}
                  className="text-base text-gray-700 hover:text-pink-600 sm:text-lg"
                >
                  {globalVariable.email}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  {globalVariable.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-pink-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  {globalVariable.schedule.weekdays}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={globalVariable.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-pink-900 sm:text-xl">
                Horario de atención
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Lunes - Viernes</span>
                  <span className="font-medium text-pink-700">
                    {globalVariable.schedule.weekdaysHours}
                  </span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Sábado</span>
                  <span className="font-medium text-pink-700">
                    {globalVariable.schedule.saturday}
                  </span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Domingo</span>
                  <span className="font-medium text-pink-700">
                    {globalVariable.schedule.sunday}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
