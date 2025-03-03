"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-r from-pink-600 to-pink-800 pb-16 pt-32 text-white">
      {" "}
      {/* Reduced pb-16 for bottom padding */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Nuestros Servicios Especializados
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            Soluciones avanzadas en implantología y periodoncia para transformar
            tu sonrisa y mejorar tu salud bucal
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#tratamientos"
              className="rounded-full bg-white px-8 py-3 font-semibold text-pink-600 transition duration-300 hover:bg-pink-100"
            >
              Explorar Tratamientos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
