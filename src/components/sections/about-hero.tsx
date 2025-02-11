"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-indigo-100 pb-16 pt-24 sm:pb-20 sm:pt-32">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight text-rose-900 sm:mb-6 sm:text-5xl md:text-6xl">
              Transformando Sonrisas,
              <br />
              <span className="text-rose-600">Cambiando Vidas</span>
            </h1>
            <p className="mb-6 text-lg text-rose-800 sm:mb-8 sm:text-xl">
              Conozca a la Dra. Ofara Pacheco, una especialista en Odontología y
              Periodoncia con más de 9 años de experiencia, dedicada a brindar
              atención dental de excelencia y crear sonrisas radiantes.
            </p>
            <Button className="bg-rose-600 text-base text-white hover:bg-rose-700 sm:text-lg">
              Descubre Nuestra Historia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            className="relative mt-8 w-full max-w-lg lg:mt-0 lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/dra.jpg"
              alt="Dra. Ofara Pacheco sonriendo"
              width={500}
              height={500}
              className="mx-auto w-full max-w-[300px] rounded-full shadow-2xl sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px]"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 rounded-full bg-white p-3 shadow-lg sm:p-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 text-rose-600 sm:h-10 sm:w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </motion.div>
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
