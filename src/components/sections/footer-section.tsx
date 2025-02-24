"use client";

import { Clock, MapPin, Phone } from "lucide-react";

import {
  SiFacebook,
  SiGmail,
  SiInstagram,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="bg-rose-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex flex-col items-center gap-4 sm:items-start">
              <div className="flex flex-col items-center gap-4">
                <Image
                  quality={100}
                  src="/Imagotipo_Blanco.png"
                  alt="Clínica Dental Dra. Ofara Pacheco"
                  width={200}
                  height={50}
                />
                <div className="flex space-x-4">
                  <Link
                    href={"mailto:info@drapacheco.com"}
                    target="_blank"
                    className="text-rose-300 hover:text-rose-100"
                  >
                    <SiGmail className="h-5 w-5" />
                  </Link>
                  <Link
                    href="http://instagram.com/_u/dra.ofarapacheco/"
                    target="_blank"
                    className="text-rose-300 hover:text-rose-100"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/ofara.pacheco"
                    target="_blank"
                    className="text-rose-300 hover:text-rose-100"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@ofarap"
                    target="_blank"
                    className="text-rose-300 hover:text-rose-100"
                  >
                    <SiTiktok className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-rose-300 sm:text-lg">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#sobre-mi"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-rose-300 sm:text-lg">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Periodoncia
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Estética Dental
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-rose-200 hover:text-white sm:text-base"
                >
                  Odontología General
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-rose-300 sm:text-lg">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-rose-300" />
                <span className="text-sm text-rose-200 sm:text-base">
                  +34 123 456 789
                </span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-7 text-rose-300" />
                <span className="text-sm text-rose-200 sm:text-base">
                  C. Espiral #4, esquina calle 13, Santo Domingo. Padilla
                  clínica dental.
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-rose-300" />
                <span className="text-sm text-rose-200 sm:text-base">
                  Lun-Vie: 9:00-20:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-rose-800 pt-8 text-center">
          <p className="text-sm text-rose-200 sm:text-base">
            &copy; 2025 Dra. Ofara Pacheco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
