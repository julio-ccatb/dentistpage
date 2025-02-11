"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  return (
    <AnimatedSection className="bg-rose-50 py-16 sm:py-20">
      <div id="contacto" className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-light text-rose-900 sm:mb-12 sm:text-3xl">
          Contacto
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-rose-600 text-base text-white hover:bg-rose-700 sm:text-lg"
              >
                Enviar mensaje
              </Button>
            </form>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rose-900">
                Información de contacto
              </h3>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  +34 123 456 789
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-rose-600" />
                <span className="text-base text-gray-700 sm:text-lg">
                  Calle Principal 123, Madrid
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7479906065996!2d-3.7037974846009275!3d40.41694637936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1645454332337!5m2!1sen!2sus"
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
