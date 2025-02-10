"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

const testimonials = [
  {
    name: "María García",
    text: "La Dra. Ofara Pacheco es increíble. Su atención y profesionalismo hicieron que mi tratamiento periodontal fuera mucho más cómodo de lo que esperaba.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Juan Rodríguez",
    text: "Gracias a la Dra. Pacheco, mi sonrisa ha mejorado significativamente. Su experiencia en periodoncia es evidente en cada visita.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "El cuidado y la atención que recibí en la clínica fueron excepcionales. La Dra. Ofara realmente se preocupa por la salud bucal de sus pacientes.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonios" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-light text-blue-900 sm:mb-12 sm:text-4xl">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-blue-50 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="mr-4 h-12 w-12 rounded-full border-2 border-white shadow-md sm:h-14 sm:w-14"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-blue-900 sm:text-lg">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-sm italic text-gray-700 sm:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
