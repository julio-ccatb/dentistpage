"use client";

import { Calendar, Menu, SmileIcon as Tooth, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 w-full bg-white/80 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Tooth className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
          <span className="ml-2 text-lg font-bold text-blue-900 sm:text-xl">
            Dra. Ofara Pacheco
          </span>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <a
                href="#sobre-mi"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600 lg:text-base"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600 lg:text-base"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600 lg:text-base"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-sm text-gray-600 transition-colors hover:text-blue-600 lg:text-base"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-blue-600 text-sm text-white hover:bg-blue-700 lg:text-base">
            <Calendar className="mr-2 h-4 w-4" />
            Agenda tu cita
          </Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-blue-600" />
          ) : (
            <Menu className="h-6 w-6 text-blue-600" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white md:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#sobre-mi"
                    className="block text-base text-gray-600 transition-colors hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="block text-base text-gray-600 transition-colors hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="block text-base text-gray-600 transition-colors hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="block text-base text-gray-600 transition-colors hover:text-blue-600"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <Button className="w-full bg-blue-600 text-base text-white hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agenda tu cita
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
