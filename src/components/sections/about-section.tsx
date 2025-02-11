"use client";

import { Calendar, ArrowRight, SmileIcon as Tooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative -mt-1 overflow-hidden bg-rose-50 py-16 sm:py-20"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/dra.jpg?height=600&width=600"
              alt="Dra. Ofara Pacheco examinando un modelo dental"
              width={500}
              height={500}
              className="mx-auto w-full max-w-[250px] !rounded-full shadow-2xl sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]"
            />
            <div className="absolute -bottom-4 -right-4 rounded-full bg-white p-3 shadow-lg sm:p-4">
              <Tooth className="h-6 w-6 text-rose-600 sm:h-8 sm:w-8" />
            </div>
          </motion.div>
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold leading-tight text-rose-900 sm:mb-6 sm:text-4xl md:text-5xl">
              Dra. Ofara Pacheco
              <span className="block text-rose-600">
                Odontóloga-Periodoncista
              </span>
            </h2>
            <p className="mb-6 text-base text-rose-800 sm:mb-8 sm:text-lg md:text-xl">
              Soy odontóloga especializada en periodoncia e implantes, con 9
              años de experiencia ayudando a mis pacientes a recuperar su salud
              bucal y confianza. Me apasiona la odontología y estoy comprometida
              en mejorar sonrisas a través de tratamientos personalizados y de
              alta calidad. Mi enfoque combina la última tecnología con un trato
              cercano, asegurando bienestar y resultados duraderos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-rose-600 text-base text-white shadow-lg hover:bg-rose-700 sm:w-auto sm:text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda una consulta
              </Button>
              <Link href={"/about"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-rose-300 text-base text-rose-600 hover:bg-rose-50 hover:text-rose-900 sm:w-auto sm:text-lg"
                >
                  Conoce más sobre mí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
