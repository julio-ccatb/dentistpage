"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  Users,
  Landmark,
} from "lucide-react";
const timelineEvents = [
  {
    year: "2016",
    title: "Graduación en Estomatología",
    description:
      "Obtiene el título de Doctora en Estomatología en la Pontificia Universidad Católica Madre y Maestra.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2019",
    title: "Especialización en Periodoncia e Implantología",
    description:
      "Completa su maestría en Periodoncia e Implantología Oral en la Pontificia Universidad Católica Madre y Maestra.",
    icon: Award,
    color: "bg-green-500",
  },
  {
    year: "2016 - Actualidad",
    title: "Experiencia Profesional",
    description:
      "Más de 9 años de experiencia en clínicas del sector público y privado, además de ser miembro del Colegio Dominicano de Odontólogos.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    year: "2020 - Actualidad",
    title: "Participación en Congresos",
    description:
      "Asiste a congresos nacionales e internacionales para mantenerse actualizada en las últimas tendencias de la odontología.",
    icon: BookOpen,
    color: "bg-yellow-500",
  },
  {
    year: "Actualidad",
    title: "Clínica Multidisciplinaria",
    description:
      "Cuenta con un equipo especializado en diversas áreas de la odontología para ofrecer una atención integral.",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    year: "Actualidad",
    title: "Consultorio en Santo Domingo",
    description: "Dirige su consultorio en la Clínica Dental Padilla",
    icon: Landmark,
    color: "bg-red-500",
  },
];
function TimelineEvent({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.2 },
        },
      }}
      className="mb-8 flex w-full flex-col items-center px-4 md:w-1/2 lg:w-1/3"
    >
      <div
        className={`h-16 w-16 ${event.color} mb-4 flex items-center justify-center rounded-full`}
      >
        <event.icon className="h-8 w-8 text-white" />
      </div>
      <div className="mb-2 text-3xl font-bold text-pink-900">{event.year}</div>
      <h3 className="mb-2 text-center text-xl font-semibold text-pink-800">
        {event.title}
      </h3>
      <p className="text-center text-pink-700">{event.description}</p>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-pink-900 sm:mb-12 sm:text-4xl">
            Trayectoria Profesional
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-pink-800">
            Explore el viaje profesional de la Dra. Ofara Pacheco, desde sus
            inicios académicos hasta su reconocimiento internacional en el campo
            de la periodoncia.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff1f2"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
