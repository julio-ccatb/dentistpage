"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { globalVariable } from "@/globals/config";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-rose-600 to-rose-800 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl">
            ¿Listo para transformar tu sonrisa?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-rose-100 sm:mb-10 sm:text-xl">
            Agenda tu cita hoy y da el primer paso hacia una sonrisa más
            saludable y radiante. Nuestro equipo de expertos está listo para
            brindarte la mejor atención dental personalizada.
          </p>
          <Link target="_blank" href={globalVariable.whatsappLink}>
            <Button
              size="lg"
              className="bg-white text-lg font-semibold text-rose-600 hover:bg-rose-50"
            >
              Agendar Cita
              <Calendar className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
