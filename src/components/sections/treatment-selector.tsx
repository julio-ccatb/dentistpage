/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownToLine,
  Calendar,
  CheckCircle,
  Clock,
  Crown,
  Layers,
  Maximize2,
  Microscope,
  Repeat,
  ScissorsIcon as Scalpel,
  Scissors,
  Search,
  Shield,
  Sparkles,
  Stethoscope,
  Target,
  SmileIcon as Tooth,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Updated treatment groups with process information and new descriptions
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
        processImage: {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Diagrama del proceso de implantes dentales",
        },
        process: [
          {
            title: "Diagnóstico y planificación",
            description:
              "Evaluación completa mediante radiografías 3D y escáneres digitales para crear un plan de tratamiento personalizado.",
            icon: Search,
          },
          {
            title: "Colocación del implante",
            description:
              "Procedimiento quirúrgico mínimamente invasivo para insertar el implante de titanio en el hueso maxilar.",
            icon: ArrowDownToLine,
          },
          {
            title: "Período de osteointegración",
            description:
              "Fase de cicatrización de 3-6 meses donde el implante se fusiona con el hueso, creando una base sólida.",
            icon: Clock,
          },
          {
            title: "Colocación de la corona",
            description:
              "Diseño y fijación de una corona personalizada sobre el implante, restaurando la función y estética dental.",
            icon: Crown,
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
          "La frenectomía es un procedimiento sencillo en el que se elimina o modifica un frenillo bucal (labial o lingual) cuando causa problemas en la movilidad de la lengua, el habla, la alineación de los dientes o el uso de prótesis. Se realiza de forma rápida y con mínima molestia, mejorando la función y la salud bucal.",
        processImage: {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Diagrama del proceso de frenectomía",
        },
        process: [
          {
            title: "Evaluación inicial",
            description:
              "Examen detallado para determinar la necesidad de la frenectomía y planificar el procedimiento.",
            icon: Search,
          },
          {
            title: "Procedimiento quirúrgico",
            description:
              "Técnica mínimamente invasiva para liberar el frenillo, utilizando anestesia local para mayor comodidad.",
            icon: Scissors,
          },
          {
            title: "Recuperación inmediata",
            description:
              "Instrucciones post-operatorias para minimizar molestias y promover una cicatrización óptima.",
            icon: CheckCircle,
          },
          {
            title: "Seguimiento y resultados",
            description:
              "Evaluación de la cicatrización y mejora en la movilidad labial o lingual según el caso.",
            icon: Calendar,
          },
        ],
      },
      {
        id: "gingivectomia",
        name: "Gingivectomía",
        description:
          "Técnica quirúrgica para remodelar el contorno de las encías, eliminando el exceso de tejido gingival.",
        processImage: {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Diagrama del proceso de gingivectomía",
        },
        process: [
          {
            title: "Diagnóstico estético",
            description:
              "Evaluación del contorno gingival y planificación del procedimiento para lograr una sonrisa armónica.",
            icon: Search,
          },
          {
            title: "Marcado y medición",
            description:
              "Delimitación precisa del tejido a remodelar para garantizar resultados estéticos óptimos.",
            icon: Target,
          },
          {
            title: "Remodelado gingival",
            description:
              "Eliminación del exceso de tejido utilizando láser o bisturí, según las necesidades del caso.",
            icon: Scalpel,
          },
          {
            title: "Cicatrización y resultados",
            description:
              "Período de recuperación breve con resultados visibles inmediatos y mejora progresiva.",
            icon: Sparkles,
          },
        ],
      },
      {
        id: "peeling-gingival",
        name: "Peeling Gingival",
        description:
          "El peeling gingival es un tratamiento estético que elimina las manchas oscuras en las encías causadas por la acumulación de melanina. Se realiza con láser o mediante técnicas mínimamente invasivas, devolviendo a las encías un color más rosado y uniforme para una sonrisa más estética y saludable.",
        processImage: {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Diagrama del proceso de peeling gingival",
        },
        process: [
          {
            title: "Evaluación de la pigmentación",
            description:
              "Análisis de la coloración gingival y determinación del tratamiento más adecuado.",
            icon: Search,
          },
          {
            title: "Aplicación del peeling",
            description:
              "Uso de agentes específicos o tecnología láser para eliminar la capa superficial pigmentada.",
            icon: Layers,
          },
          {
            title: "Regeneración tisular",
            description:
              "Proceso natural de renovación del tejido gingival, resultando en un color más uniforme.",
            icon: Repeat,
          },
          {
            title: "Mantenimiento del resultado",
            description:
              "Recomendaciones para preservar el color natural de las encías a largo plazo.",
            icon: CheckCircle,
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
        name: "Profilaxis Dental",
        description:
          "La profilaxis dental es una limpieza profesional que elimina la placa bacteriana, el sarro y las manchas en los dientes. Ayuda a prevenir enfermedades como la gingivitis y la periodontitis, manteniendo las encías y los dientes sanos.",
        processImage: {
          src: "/placeholder.svg?height=400&width=600",
          alt: "Diagrama del proceso de profilaxis dental",
        },
        process: [
          {
            title: "Evaluación inicial",
            description:
              "Examen completo de la salud bucal para identificar áreas que requieren atención especial.",
            icon: Stethoscope,
          },
          {
            title: "Eliminación de placa y sarro",
            description:
              "Remoción profesional de depósitos duros y blandos de todas las superficies dentales.",
            icon: Zap,
          },
          {
            title: "Pulido dental",
            description:
              "Suavizado de las superficies dentales para eliminar manchas y reducir la acumulación de placa.",
            icon: Sparkles,
          },
          {
            title: "Recomendaciones personalizadas",
            description:
              "Instrucciones específicas para el cuidado en casa y programación de próximas visitas preventivas.",
            icon: Calendar,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Set initial treatment when group changes
  useEffect(() => {
    if (selectedGroup && selectedGroup.treatments.length > 0) {
      setSelectedTreatment(selectedGroup.treatments[0]);
    }
  }, [selectedGroup]);

  // Close modal when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  return (
    <section id="tratamientos" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-bold text-pink-900">
            Nuestros Tratamientos
          </h2>
          <div className="flex flex-wrap gap-4">
            {treatmentGroups.map((group) => (
              <motion.button
                key={group.id}
                onClick={() => {
                  setSelectedGroup(group);
                }}
                className={`rounded-full px-4 py-2 transition-colors ${
                  selectedGroup?.id === group.id
                    ? "bg-pink-600 text-white"
                    : "bg-white text-pink-900 hover:bg-pink-100"
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
            <h3 className="mb-4 text-2xl font-bold text-pink-900">
              {selectedGroup?.name}
            </h3>
            <div className="space-y-4">
              {selectedGroup?.treatments.map((treatment) => (
                <motion.button
                  key={treatment.id}
                  onClick={() => {
                    setSelectedTreatment(treatment);
                  }}
                  className={`w-full rounded-lg p-4 text-left transition-colors ${
                    selectedTreatment?.id === treatment.id
                      ? "bg-pink-600 text-white"
                      : "bg-white text-pink-900 hover:bg-pink-100"
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
                <h3 className="mb-4 text-2xl font-bold text-pink-900">
                  {selectedTreatment?.name}
                </h3>
                <p className="mb-6 text-lg text-pink-800">
                  {selectedTreatment?.description}
                </p>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-pink-900">
                      Proceso del Tratamiento
                    </h4>

                    {/* Small process diagram thumbnail */}
                    <div
                      className="relative h-16 w-24 cursor-pointer overflow-hidden rounded-md border-2 border-pink-200 transition-colors hover:border-pink-500"
                      onClick={() => setIsModalOpen(true)}
                      title="Ampliar diagrama"
                    >
                      <Image
                        src={
                          selectedTreatment?.processImage?.src ??
                          "/placeholder.svg"
                        }
                        alt={
                          selectedTreatment?.processImage?.alt ??
                          "Diagrama del proceso"
                        }
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity hover:bg-opacity-40">
                        <Maximize2 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {selectedTreatment?.process?.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                            <step.icon className="h-6 w-6 text-pink-600" />
                          </div>
                          {index <
                            (selectedTreatment?.process?.length || 0) - 1 && (
                            <div className="mx-auto my-2 h-16 w-0.5 bg-pink-200"></div>
                          )}
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-pink-900">
                            {step.title}
                          </h5>
                          <p className="mt-1 text-pink-800">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal for expanded process image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={handleClickOutside}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white p-2"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-2 top-2 z-10 rounded-full bg-pink-600 p-1 text-white"
                aria-label="Cerrar modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative h-[80vh] w-[80vw]">
                <Image
                  src={
                    selectedTreatment?.processImage?.src ?? "/placeholder.svg"
                  }
                  alt={
                    selectedTreatment?.processImage?.alt ??
                    "Diagrama del proceso"
                  }
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
