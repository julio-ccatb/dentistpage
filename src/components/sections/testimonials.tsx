/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "María García",
    text: "La Dra. Ofara Pacheco transformó mi sonrisa con implantes dentales. Su experiencia en implantología es excepcional, y el resultado superó todas mis expectativas. Ahora puedo sonreír con confianza nuevamente.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Juan Rodríguez",
    text: "Gracias a la Dra. Pacheco, recuperé la funcionalidad de mi dentadura con implantes de carga inmediata. Su enfoque innovador y atención personalizada hicieron que todo el proceso fuera cómodo y sin complicaciones.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "La experiencia y profesionalismo de la Dra. Ofara en implantología son incomparables. Me realizó un tratamiento de regeneración ósea seguido de implantes, y los resultados son asombrosos. Su clínica es de primer nivel.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="absolute left-0 right-0 top-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="h-auto w-full rotate-180 transform"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff1f2"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-rose-900 sm:mb-12 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>
        <div className="mx-auto max-w-4xl">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-8 shadow-lg"
          >
            <div className="mb-6 flex items-center">
              <Image
                src={
                  testimonials[currentTestimonial]!.image || "/placeholder.svg"
                }
                alt={testimonials[currentTestimonial]!.name}
                width={80}
                height={80}
                className="mr-4 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-rose-900">
                  {testimonials[currentTestimonial]!.name}
                </h3>
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentTestimonial]!.rating)].map(
                    (_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ),
                  )}
                </div>
              </div>
            </div>
            <p className="mb-4 text-lg italic text-rose-800">
              &quot;{testimonials[currentTestimonial]!.text}&quot;
            </p>
          </motion.div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-rose-100 p-2 text-rose-600 transition-colors hover:bg-rose-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-rose-100 p-2 text-rose-600 transition-colors hover:bg-rose-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
