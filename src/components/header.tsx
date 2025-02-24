"use client";

import { Calendar, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { globalVariable } from "@/globals/config";

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
        >
          <Link href={"/"} className="flex items-center justify-center gap-4">
            <Image
              src={"/Favicon_Rojo Claro.png"}
              alt="logo"
              quality={100}
              objectFit="contain"
              height={50}
              width={50}
            />
            <Image
              quality={100}
              src={"/Logotipo_Rojo Claro.png"}
              alt="Clínica Dental Dra. Ofara Pacheco"
              objectFit="contain"
              height={150}
              width={250}
            />
          </Link>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            <li>
              <Link
                href="/about"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Servicios
              </Link>
            </li>

            <li>
              <Link
                href="/#contacto"
                className="text-sm text-gray-600 transition-colors hover:text-rose-600 lg:text-base"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link target="_blank" href={globalVariable.whatsappLink}>
            <Button className="bg-rose-600 text-sm font-semibold text-white hover:bg-rose-700 lg:text-base">
              Agenda tu cita
              <Calendar className="mr-2 h-4 w-4" />
            </Button>
          </Link>
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
                  <Link
                    href="/about"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Servicios
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#contacto"
                    className="block text-base text-gray-600 transition-colors hover:text-rose-600"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={globalVariable.whatsappLink}>
                    <Button className="w-full bg-rose-600 text-base font-semibold text-white hover:bg-rose-700">
                      Agenda tu cita
                      <Calendar className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
