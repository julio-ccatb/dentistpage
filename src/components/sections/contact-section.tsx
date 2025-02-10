"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export function ContactSection() {
  return (
    <AnimatedSection id="contacto" className="py-16 sm:py-20 bg-[#EBF8FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-blue-900 text-center">Contacto</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 text-base sm:text-lg">
                Enviar mensaje
              </Button>
            </form>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Información de contacto</h3>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-base sm:text-lg text-gray-700">+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-base sm:text-lg text-gray-700">Calle Principal 123, Madrid</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-base sm:text-lg text-gray-700">Lun-Vie: 9:00-20:00</span>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4">Horario de atención</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Lunes - Viernes</span>
                  <span className="text-blue-700 font-medium">9:00 - 20:00</span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Sábado</span>
                  <span className="text-blue-700 font-medium">10:00 - 15:00</span>
                </li>
                <li className="flex justify-between text-base sm:text-lg">
                  <span className="text-gray-700">Domingo</span>
                  <span className="text-blue-700 font-medium">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

