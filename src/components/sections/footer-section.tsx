"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  SiFacebook,
  SiGmail,
  SiInstagram,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { globalVariable } from "@/globals/config";

export function FooterSection() {
  return (
    <footer className="bg-pink-900 py-12 text-white">
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
                    href={globalVariable.emailLink}
                    target="_blank"
                    className="text-pink-300 hover:text-pink-100"
                  >
                    <SiGmail className="h-5 w-5" />
                  </Link>
                  <Link
                    href={globalVariable.instagram}
                    target="_blank"
                    className="text-pink-300 hover:text-pink-100"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href={globalVariable.facebook}
                    target="_blank"
                    className="text-pink-300 hover:text-pink-100"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href={globalVariable.tiktok}
                    target="_blank"
                    className="text-pink-300 hover:text-pink-100"
                  >
                    <SiTiktok className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-pink-300 sm:text-lg">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-pink-300 sm:text-lg">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Periodoncia
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Estética Dental
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  Odontología General
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-pink-300 sm:text-lg">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-pink-300" />

                <Link
                  href={globalVariable.phoneLink}
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  {globalVariable.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-pink-300" />

                <Link
                  href={globalVariable.emailLink}
                  className="text-sm text-pink-200 hover:text-white sm:text-base"
                >
                  {globalVariable.email}
                </Link>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-7 text-pink-300" />
                <span className="text-sm text-pink-200 sm:text-base">
                  {globalVariable.address}
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-pink-300" />
                <span className="text-sm text-pink-200 sm:text-base">
                  {globalVariable.schedule.weekdays}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-pink-800 pt-8 text-center">
          <p className="text-sm text-pink-200 sm:text-base">
            &copy; 2025 Dra. Ofara Pacheco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
