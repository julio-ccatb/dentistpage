"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Smile, Heart, ChevronRight } from "lucide-react";

const profileData = [
  {
    category: "Implantología Avanzada",
    icon: Smile,
    color: "bg-rose-500",
    items: [
      {
        title: "Implantes de Carga Inmediata",
        description:
          "Especialista en técnicas de implantación y carga en el mismo día",
      },
      {
        title: "Regeneración Ósea Guiada",
        description:
          "Experta en procedimientos de aumento óseo para implantes complejos",
      },
      {
        title: "Implantes All-on-4 y All-on-6",
        description:
          "Soluciones completas de arco con técnicas mínimamente invasivas",
      },
    ],
  },
  {
    category: "Formación Especializada",
    icon: GraduationCap,
    color: "bg-green-500",
    items: [
      {
        title: "Doctorado en Odontología",
        description:
          "Universidad Complutense de Madrid, con enfoque en implantología",
      },
      {
        title: "Máster en Periodoncia e Implantología",
        description: "Universidad de Barcelona",
      },
      {
        title: "Formación Continua",
        description: "Cursos avanzados en implantología digital y guiada",
      },
    ],
  },
  {
    category: "Filosofía de Tratamiento",
    icon: Heart,
    color: "bg-purple-500",
    items: [
      {
        title: "Planificación 3D Personalizada",
        description:
          "Uso de tecnología de vanguardia para planificar cada implante",
      },
      {
        title: "Enfoque Mínimamente Invasivo",
        description:
          "Técnicas que minimizan el trauma y aceleran la recuperación",
      },
      {
        title: "Atención Integral",
        description:
          "Consideración de aspectos estéticos y funcionales en cada tratamiento",
      },
    ],
  },
  {
    category: "Logros Profesionales",
    icon: Award,
    color: "bg-yellow-500",
    items: [
      {
        title: "Reconocimiento Internacional",
        description: "Premio a la innovación en técnicas de implantología",
      },
      {
        title: "Investigación Pionera",
        description: "Publicaciones sobre nuevos métodos de osteointegración",
      },
      {
        title: "Clínica de Referencia",
        description:
          "Fundadora de un centro especializado en implantología avanzada",
      },
    ],
  },
];

export function DoctorProfile() {
  const [activeCategory, setActiveCategory] = useState(
    profileData[0]!.category,
  );

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <Image
                src="/dra2.jpg"
                alt="Dra. Ofara Pacheco"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 rounded-full bg-rose-500 p-3 text-white shadow-lg">
                <Smile className="h-8 w-8" />
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-3xl font-bold text-rose-900 sm:text-4xl"
            >
              Dra. Ofara Pacheco
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-xl font-semibold text-rose-600"
            >
              Implantóloga Experta
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-rose-800"
            >
              Especialista en Implantología Avanzada y Periodoncia
            </motion.p>
          </motion.div>
          <div className="lg:w-2/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-lg text-rose-800"
            >
              Con más de una década de experiencia, la Dra. Ofara Pacheco se ha
              consolidado como una referente en implantología avanzada. Su
              enfoque innovador combina las últimas tecnologías en implantes
              dentales con técnicas mínimamente invasivas, ofreciendo soluciones
              personalizadas que transforman sonrisas y vidas. Especializada en
              casos complejos de regeneración ósea e implantes de carga
              inmediata, la Dra. Pacheco garantiza resultados excepcionales y
              una experiencia de tratamiento superior.
            </motion.p>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {profileData.map((category) => (
                <motion.button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`flex items-center justify-between rounded-lg p-4 font-semibold transition-all ${
                    activeCategory === category.category
                      ? `${category.color} text-white shadow-lg`
                      : "bg-white text-rose-800 hover:bg-rose-50"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <category.icon className="mr-3 h-6 w-6" />
                    <span>{category.category}</span>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      activeCategory === category.category ? "rotate-90" : ""
                    }`}
                  />
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                {profileData
                  .find((cat) => cat.category === activeCategory)
                  ?.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="mb-4 last:mb-0"
                    >
                      <h3 className="mb-2 text-lg font-semibold text-rose-900">
                        {item.title}
                      </h3>
                      <p className="text-rose-800">{item.description}</p>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
