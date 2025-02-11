"use client";

import { motion } from "framer-motion";
import {
  SmileIcon as Tooth,
  Smile,
  Microscope,
  Brain,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      title: "Periodoncia Avanzada",
      description:
        "Tratamientos especializados para enfermedades de las encías y tejidos de soporte dental.",
      icon: Tooth,
    },
    {
      title: "Implantología Dental",
      description:
        "Colocación de implantes dentales con técnicas mínimamente invasivas y de carga inmediata.",
      icon: Smile,
    },
    {
      title: "Regeneración Tisular",
      description:
        "Técnicas innovadoras para la regeneración de hueso y tejidos blandos en la cavidad oral.",
      icon: Microscope,
    },
    {
      title: "Odontología Neurofocal",
      description:
        "Enfoque integral que considera la relación entre la salud dental y el sistema nervioso.",
      icon: Brain,
    },
    {
      title: "Periodoncia y Salud Sistémica",
      description:
        "Estudio de la relación entre las enfermedades periodontales y condiciones sistémicas como diabetes y enfermedades cardiovasculares.",
      icon: HeartPulse,
    },
    {
      title: "Medicina Periodontal",
      description:
        "Manejo de las manifestaciones orales de enfermedades sistémicas y su impacto en la salud periodontal.",
      icon: Stethoscope,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-rose-900 sm:mb-12 sm:text-4xl">
            Áreas de Experiencia
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-rose-800">
            La Dra. Ofara Pacheco se especializa en diversas áreas de la
            odontología, con un enfoque particular en la periodoncia y sus
            conexiones con la salud general.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                  <area.icon className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-rose-900">
                  {area.title}
                </h3>
              </div>
              <p className="text-rose-800">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
