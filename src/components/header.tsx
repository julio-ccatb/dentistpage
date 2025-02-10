"use client";

import { Calendar, Menu, SmileIcon as Tooth, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
          <Image
            src={"/tooth-svgrepo-com.svg"}
            alt="logo"
            height={50}
            width={50}
            className="h-6 w-6 text-rose-600 sm:h-8 sm:w-8"
          />
          <span className="ml-2 text-lg font-bold text-rose-900 sm:text-xl">
            Dra. Ofara Pacheco
          </span>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <a
                href="#sobre-mi"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-rose-600 text-sm font-semibold text-white hover:bg-rose-700 lg:text-base">
            Agenda tu cita
            <Calendar className="mr-2 h-4 w-4" />
          </Button>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-rose-600" />
          ) : (
            <Menu className="h-6 w-6 text-rose-600" />
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
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <Button className="w-full bg-rose-600 text-base font-semibold text-white hover:bg-rose-700">
                    Agenda tu cita
                    <Calendar className="mr-2 h-4 w-4" />
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
