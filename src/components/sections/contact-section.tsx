"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { globalVariable } from "@/globals/config";
import contactSchema, { type Contact } from "@/globals/types";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import {
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export function ContactSection() {
  const { mutate, isPending } = api.mailer.create.useMutation({
    onMutate: () => toast.info("Enviando mensaje..."),
    onSuccess: () => toast.success("Mensaje enviado correctamente"),
    onError: () => toast.error("Ocurrió un error al enviar el mensaje"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Contact> = (data: Contact, e) => {
    e?.preventDefault();
    mutate(data);
    reset();
  };

  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-pink-50/70 via-white to-pink-50/50 py-16 sm:py-24">
      {/* Decorative background glow circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl"
      />

      <div id="contacto" className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-pink-600" />
            Atención Personalizada
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl md:text-5xl">
            Estamos Aquí Para Ayudarte
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            ¿Tienes alguna consulta o deseas agendar tu valoración? Contáctanos
            a través de cualquiera de nuestros canales o envíanos un mensaje directo.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {/* Phone Card */}
          <div className="group rounded-2xl border border-pink-100 bg-white p-6 shadow-md shadow-pink-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-600/10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Teléfono
                </h3>
                <Link
                  href={globalVariable.phoneLink}
                  className="mt-1 block text-lg font-bold text-gray-900 transition-colors hover:text-pink-600"
                >
                  {globalVariable.phone}
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  Llamada directa para citas y urgencias
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-md shadow-emerald-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-600/10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <SiWhatsapp className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    WhatsApp
                  </h3>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    Respuesta rápida
                  </span>
                </div>
                <Link
                  target="_blank"
                  href={globalVariable.whatsappLink}
                  className="mt-1 inline-flex items-center gap-1.5 text-lg font-bold text-gray-900 transition-colors hover:text-emerald-600"
                >
                  Chat en WhatsApp
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-emerald-600" />
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  Escríbenos directamente a nuestro WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group rounded-2xl border border-pink-100 bg-white p-6 shadow-md shadow-pink-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-600/10 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Correo Electrónico
                </h3>
                <Link
                  href={globalVariable.emailLink}
                  className="mt-1 block truncate text-base font-bold text-gray-900 transition-colors hover:text-pink-600 sm:text-lg"
                  title={globalVariable.email}
                >
                  {globalVariable.email}
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  Escríbenos en cualquier momento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Form & Clinic Information */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Contact Form (7 cols on lg) */}
          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-900/5 sm:p-8 lg:col-span-7 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl font-bold text-pink-900 sm:text-2xl">
                Envíanos un Mensaje
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Completa el formulario y nos comunicaremos contigo a la mayor
                brevedad posible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name Field */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Nombre completo <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      {...register("name")}
                      className={`w-full rounded-xl border bg-gray-50/50 py-2.5 pl-10 pr-3.5 text-sm text-gray-800 placeholder-gray-400 transition-all focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-500/10 ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Correo electrónico <span className="text-pink-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      {...register("email")}
                      className={`w-full rounded-xl border bg-gray-50/50 py-2.5 pl-10 pr-3.5 text-sm text-gray-800 placeholder-gray-400 transition-all focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-500/10 ${
                        errors.email ? "border-red-400 bg-red-50/30" : "border-gray-200"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Teléfono / Móvil
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Ej. +1 (809) 000-0000"
                    {...register("phone")}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-3.5 text-sm text-gray-800 placeholder-gray-400 transition-all focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-500/10"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Mensaje o motivo de consulta <span className="text-pink-600">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-3.5 top-3 text-gray-400">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="¿En qué tratamiento estás interesado o qué consulta tienes?"
                    {...register("message")}
                    className={`w-full rounded-xl border bg-gray-50/50 py-2.5 pl-10 pr-3.5 text-sm text-gray-800 placeholder-gray-400 transition-all focus:border-pink-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-500/10 ${
                      errors.message ? "border-red-400 bg-red-50/30" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full rounded-xl bg-pink-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-600/25 transition-all duration-200 hover:bg-pink-700 hover:shadow-xl hover:shadow-pink-600/35 active:scale-[0.99] disabled:opacity-70"
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Enviando mensaje...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </span>
                )}
              </Button>

              {/* Privacy / Security Notice */}
              <div className="flex items-center justify-center gap-1.5 pt-2 text-center text-xs text-gray-500">
                <CheckCircle2 className="h-3.5 w-3.5 text-pink-600" />
                Tus datos están protegidos y serán tratados con absoluta confidencialidad médica.
              </div>
            </form>
          </div>

          {/* Right Column: Location, Map & Schedule (5 cols on lg) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Location & Map Card */}
            <div className="overflow-hidden rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-900/5 sm:p-7">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-pink-900 sm:text-lg">
                      Nuestra Ubicación
                    </h3>
                    <p className="text-xs text-gray-500">Padilla Clínica Dental</p>
                  </div>
                </div>
                <Link
                  href={globalVariable.mapsDirectLink}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-pink-600 hover:text-pink-700"
                >
                  Cómo llegar
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                {globalVariable.address}
              </p>

              {/* Map embed */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-pink-100 shadow-inner">
                <iframe
                  src={globalVariable.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Ubicación Dra. Ofara Pacheco"
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-xl shadow-pink-900/5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-pink-900 sm:text-lg">
                      Horario de Atención
                    </h3>
                    <p className="text-xs text-gray-500">Atención personalizada</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2.5 py-1 text-xs font-medium text-pink-700">
                  <Calendar className="h-3 w-3" />
                  Previa Cita
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center justify-between rounded-xl bg-pink-50/60 px-3.5 py-2.5 text-sm">
                  <span className="font-medium text-gray-800">Lunes - Viernes</span>
                  <span className="font-bold text-pink-700">
                    {globalVariable.schedule.weekdaysHours}
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm">
                  <span className="font-medium text-gray-700">Sábado</span>
                  <span className="font-semibold text-gray-900">
                    {globalVariable.schedule.saturday}
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm">
                  <span className="font-medium text-gray-500">Domingo</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
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
