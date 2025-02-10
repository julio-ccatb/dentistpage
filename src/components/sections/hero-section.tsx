"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, SmileIcon as Tooth } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight text-blue-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Sonrisas Perfectas, <br />
              <span className="text-blue-600">Resultados Extraordinarios</span>
            </h1>
            <p className="mb-6 text-lg text-blue-800 sm:mb-8 sm:text-xl">
              Especialistas en Odontología y Periodoncia. Transformamos sonrisas
              y cambiamos vidas con tecnología de vanguardia y cuidado
              personalizado.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-blue-600 text-base text-white shadow-lg hover:bg-blue-700 sm:w-auto sm:text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu cita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-blue-300 text-base text-blue-600 hover:bg-blue-50 hover:text-blue-900 sm:w-auto sm:text-lg"
              >
                Conoce nuestros servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-8 w-full max-w-lg lg:mt-0 lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/hero.jpg"
              alt="Sonrisa perfecta"
              width={600}
              height={600}
              className="mx-auto w-full max-w-[300px] rounded-full shadow-2xl sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
            <div className="absolute -bottom-4 -right-4 rounded-full bg-white p-3 shadow-lg sm:p-4">
              <Tooth className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
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
