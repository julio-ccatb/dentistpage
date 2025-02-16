"use client";

import { motion } from "framer-motion";
import {
  SmileIcon as Tooth,
  Smile,
  Stethoscope,
  Locate,
  Braces,
  User2,
  Baby,
} from "lucide-react";

export function Expertise() {
  const expertiseAreas = [
    {
      title: "Periodoncia e Implantología Oral",
      description:
        "Especializada en el tratamiento de enfermedades de las encías y colocación de implantes dentales.",
      icon: Smile,
    },
    {
      title: "Endodoncia",
      description:
        "Tratamientos avanzados para salvar dientes afectados por caries profundas o infecciones.",
      icon: Tooth,
    },
    {
      title: "Prótesis Dental",
      description:
        "Rehabilitación oral con prótesis fijas y removibles para restaurar la funcionalidad dental.",
      icon: Locate,
    },
    {
      title: "Ortodoncia",
      description:
        "Corrección de la alineación dental y mordida mediante el uso de brackets y alineadores.",
      icon: Braces,
    },
    {
      title: "Odontología General",
      description:
        "Atención odontológica integral para el cuidado y mantenimiento de la salud bucal.",
      icon: User2,
    },
    {
      title: "Odontopediatría",
      description:
        "Cuidado dental especializado para niños, promoviendo una salud bucal desde la infancia.",
      icon: Baby,
    },
    {
      title: "Cirugía Maxilofacial",
      description:
        "Procedimientos quirúrgicos para tratar anomalías faciales y problemas en los maxilares.",
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
