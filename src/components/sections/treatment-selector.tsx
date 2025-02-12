"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SmileIcon as Tooth, Bone, Smile, Microscope } from "lucide-react";

const treatmentGroups = [
  {
    id: "implantologia",
    name: "Implantología",
    icon: Tooth,
    treatments: [
      {
        id: "implantes-unitarios",
        name: "Implantes Unitarios",
        description:
          "Restauración de dientes individuales con implantes de titanio biocompatibles para una sonrisa natural y funcional.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Implante dental individual",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de colocación de implante unitario",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Resultado final de implante unitario",
          },
        ],
      },
      {
        id: "implantes-carga-inmediata",
        name: "Implantes de Carga Inmediata",
        description:
          "Implantes y prótesis provisionales en el mismo día, para una recuperación estética inmediata.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de carga inmediata",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de carga inmediata",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Paciente con implantes de carga inmediata",
          },
        ],
      },
      {
        id: "all-on-4",
        name: "All-on-4",
        description:
          "Técnica revolucionaria para rehabilitar una arcada completa con solo cuatro implantes estratégicamente colocados.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso All-on-4",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de All-on-4",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Radiografía de All-on-4",
          },
        ],
      },
    ],
  },
  {
    id: "periodoncia",
    name: "Periodoncia",
    icon: Microscope,
    treatments: [
      {
        id: "tratamiento-periodontal",
        name: "Tratamiento Periodontal",
        description:
          "Cuidado integral de las encías para prevenir y tratar enfermedades periodontales.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Tratamiento periodontal en progreso",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de tratamiento periodontal",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Equipo utilizado en tratamientos periodontales",
          },
        ],
      },
      {
        id: "cirugia-periodontal",
        name: "Cirugía Periodontal",
        description:
          "Procedimientos quirúrgicos avanzados para tratar casos severos de enfermedad periodontal y mejorar la estética gingival.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Cirugía periodontal en progreso",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de cirugía periodontal",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Instrumentos de cirugía periodontal",
          },
        ],
      },
    ],
  },
  {
    id: "regeneracion",
    name: "Regeneración Ósea",
    icon: Bone,
    treatments: [
      {
        id: "injerto-oseo",
        name: "Injerto Óseo",
        description:
          "Técnicas avanzadas para recuperar el volumen óseo necesario para implantes exitosos.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de injerto óseo",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de injerto óseo",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Materiales utilizados en injertos óseos",
          },
        ],
      },
      {
        id: "elevacion-seno-maxilar",
        name: "Elevación de Seno Maxilar",
        description:
          "Procedimiento para aumentar el volumen óseo en el maxilar superior, permitiendo la colocación de implantes en áreas con poco hueso.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de elevación de seno maxilar",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de elevación de seno",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Radiografía de elevación de seno maxilar",
          },
        ],
      },
    ],
  },
  {
    id: "estetica-dental",
    name: "Estética Dental",
    icon: Smile,
    treatments: [
      {
        id: "carillas",
        name: "Carillas Dentales",
        description:
          "Láminas delgadas de porcelana que se adhieren a la superficie del diente para mejorar su apariencia.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de colocación de carillas",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de carillas dentales",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Detalle de carillas dentales",
          },
        ],
      },
      {
        id: "blanqueamiento",
        name: "Blanqueamiento Dental",
        description:
          "Tratamiento para aclarar el color de los dientes, eliminando manchas y decoloraciones.",
        images: [
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Proceso de blanqueamiento dental",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Antes y después de blanqueamiento",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Equipo de blanqueamiento dental",
          },
        ],
      },
    ],
  },
];

export function TreatmentSelector() {
  const [selectedGroup, setSelectedGroup] = useState(treatmentGroups[0]);
  const [selectedTreatment, setSelectedTreatment] = useState(
    treatmentGroups[0]?.treatments[0],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="tratamientos" className="bg-gray-50 py-16">
      {" "}
      {/* Removed mt-20, added id for anchor link */}
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-bold text-rose-900">
            Nuestros Tratamientos
          </h2>
          <div className="flex flex-wrap gap-4">
            {treatmentGroups.map((group) => (
              <motion.button
                key={group.id}
                onClick={() => {
                  setSelectedGroup(group);
                  setSelectedTreatment(group.treatments[0]);
                  setCurrentImageIndex(0);
                }}
                className={`rounded-full px-4 py-2 transition-colors ${
                  selectedGroup?.id === group.id
                    ? "bg-rose-600 text-white"
                    : "bg-white text-rose-900 hover:bg-rose-100"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <group.icon className="mr-2 inline-block h-5 w-5" />
                <span className="font-semibold">{group.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <h3 className="mb-4 text-2xl font-bold text-rose-900">
              {selectedGroup?.name}
            </h3>
            <div className="space-y-4">
              {selectedGroup?.treatments.map((treatment) => (
                <motion.button
                  key={treatment.id}
                  onClick={() => {
                    setSelectedTreatment(treatment);
                    setCurrentImageIndex(0);
                  }}
                  className={`w-full rounded-lg p-4 text-left transition-colors ${
                    selectedTreatment?.id === treatment.id
                      ? "bg-rose-600 text-white"
                      : "bg-white text-rose-900 hover:bg-rose-100"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold">{treatment.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTreatment?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-4 text-2xl font-bold text-rose-900">
                  {selectedTreatment?.name}
                </h3>
                <p className="mb-6 text-lg text-rose-800">
                  {selectedTreatment?.description}
                </p>
                <div className="relative mb-4 aspect-video">
                  <Image
                    src={
                      selectedTreatment?.images[currentImageIndex]?.src ??
                      "/placeholder.svg"
                    }
                    alt={
                      selectedTreatment?.images[currentImageIndex]?.alt ?? ""
                    }
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex justify-center gap-2">
                  {selectedTreatment?.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-3 w-3 rounded-full ${currentImageIndex === index ? "bg-rose-600" : "bg-rose-200"}`}
                      aria-label={`Ver imagen ${index + 1} de ${selectedTreatment.name}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
