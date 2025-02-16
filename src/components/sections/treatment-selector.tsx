"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SmileIcon as Tooth, Microscope, Shield } from "lucide-react";

const treatmentGroups = [
  {
    id: "implantologia",
    name: "Implantología",
    icon: Tooth,
    treatments: [
      {
        id: "implantes-dentales",
        name: "Implantes Dentales",
        description:
          "Restauración completa mediante implantes de titanio biocompatibles, ofreciendo una solución permanente y natural para dientes perdidos.",
        images: [
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZRPsZdMEAHJwfPNGXOtV06ovKB9Y1e74LmMCT",
            alt: "Implante dental individual",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZ26aLbXuLx6PJWCqFOMbwAVDuHcS978GYERpn",
            alt: "Proceso de colocación de implante",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZMYjg8zPGjN0J6qnVOxA43FKwmt5fvcuoshXQ",
            alt: "Resultado final de implantes",
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
        id: "frenectomia",
        name: "Frenectomía",
        description:
          "Procedimiento quirúrgico para corregir el frenillo labial o lingual, mejorando la función y estética bucal.",
        images: [
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZ8wx0cUsGtLX3yWRPe2k7hmBgAwMF6r58U4Sq",
            alt: "Procedimiento de frenectomía",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZcLh3gokPAREVgCtQlZsJbFWLOd80aSGTp6vc",
            alt: "Antes y después de frenectomía",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZrTbOy1I4a95z3DBkW1yVEZwJlAXgIoFxncfj",
            alt: "Resultados de frenectomía",
          },
        ],
      },
      {
        id: "gingivectomia",
        name: "Gingivectomía",
        description:
          "Técnica quirúrgica para remodelar el contorno de las encías, eliminando el exceso de tejido gingival.",
        images: [
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZuwOJ1yKYyRhZH5uvOxt6NQ1Sa0ejCWAPwMp7",
            alt: "Procedimiento de gingivectomía",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZlXHBtJuCW7KiXoF0STwvz8AGeI519MJQrEdf",
            alt: "Antes y después de gingivectomía",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZk4Y6j9Drn63yQHEetX5BwpaIVsWK9rvRgMSc",
            alt: "Resultados de gingivectomía",
          },
        ],
      },
      {
        id: "peeling-gingival",
        name: "Peeling Gingival",
        description:
          "Tratamiento para mejorar la salud y apariencia de las encías, eliminando tejido dañado y promoviendo la regeneración.",
        images: [
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZj9XQtEWHKlDdosVLzfEJrCXFP9GveS8R1M7x",
            alt: "Proceso de peeling gingival",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZhoodhD613u9y4X012ElMxIWF6vOoTqP7Kcnf",
            alt: "Antes y después de peeling gingival",
          },
        ],
      },
    ],
  },
  {
    id: "prevencion",
    name: "Higiene y Prevención",
    icon: Shield,
    treatments: [
      {
        id: "profilaxis",
        name: "Profilaxis",
        description:
          "Limpieza dental profesional para prevenir enfermedades periodontales y mantener una óptima salud bucal.",
        images: [
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZrWhQdFI4a95z3DBkW1yVEZwJlAXgIoFxncfj",
            alt: "Procedimiento de profilaxis dental",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZTS9ZVSjzaQAcb2GUWtr0kMs9V3DpfY6oPSuB",
            alt: "Antes y después de profilaxis",
          },
          {
            src: "https://unh6ilypz7.ufs.sh/f/LRNJWRv4WyTZx1L021wtSAslWR2wGXmOoYIy9fgrbP4vdeha",
            alt: "Equipo de profilaxis dental",
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
