"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Baby,
  Droplets,
  Scissors,
  Sparkles,
  TestTube,
  SmileIcon as Tooth,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Periodoncia",
    description:
      "Tratamos y prevenimos enfermedades de las encías para mantener una base sólida para tu sonrisa y salud bucal general.",
    icon: Droplets,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Implantes Dentales",
    description:
      "Reemplazamos dientes perdidos con implantes de titanio y coronas personalizadas para una sonrisa completa y funcional.",
    icon: ArrowDown,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Estética Dental",
    description:
      "Mejoramos la apariencia de tu sonrisa con tratamientos personalizados como blanqueamiento, carillas y restauraciones estéticas.",
    icon: Sparkles,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Odontología General",
    description:
      "Ofrecemos servicios completos de odontología general para mantener tu salud bucal en óptimas condiciones.",
    icon: Tooth,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Ortodoncia",
    description:
      "Corregimos la posición de los dientes para lograr una sonrisa perfecta y una mordida saludable. Utilizamos técnicas modernas y aparatos discretos.",
    icon: Scissors,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Endodoncia",
    description:
      "Corregimos la posición de los dientes para lograr una sonrisa perfecta y una mordida saludable. Utilizamos técnicas modernas y aparatos discretos.",
    icon: TestTube,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Odontopediatría",
    description:
      "Cuidamos la salud bucal de los más pequeños con tratamientos especializados y un enfoque amigable para niños.",
    icon: Baby,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection className="relative py-16 sm:py-20">
      <div id="servicios" className="container relative z-10 mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-light text-pink-900 sm:text-4xl">
          Nuestros Servicios
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-pink-800 sm:mb-12 sm:text-xl">
          Ofrecemos una amplia gama de servicios dentales para cuidar de tu
          salud bucal y brindarte la mejor sonrisa posible.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg sm:p-8 sm:last:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`mb-4 flex items-center ${service.color} h-12 w-12 justify-center rounded-full p-3 sm:h-16 sm:w-16`}
              >
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-3 text-lg font-medium text-pink-900 sm:text-xl">
                {service.title}
              </h3>
              <p className="mb-6 text-sm text-gray-600 sm:text-base">
                {service.description}
              </p>
              <Link href={"/services"}>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 border-pink-300 text-sm text-pink-600 hover:bg-pink-50 hover:text-pink-900 sm:text-base"
                >
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="rgb(255 241 242)"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </AnimatedSection>
  );
}
