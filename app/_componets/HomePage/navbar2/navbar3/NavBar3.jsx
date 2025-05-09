"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar3() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 ">
<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 bg-white rounded-full py-2">
          <Image src="/l4itremoved.png" alt="Logo"  width={200} height={200} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-mobile"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ?  (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="lucide lucide-circle-x-icon lucide-circle-x"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          ):
          (
            <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          )
          }
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center border rounded-full px-6 py-7 space-x-6 bg-white shadow-sm">
          <Link
            href="/about"
            className="text-black hover:text-red-800 font-bold text-lg"
          >
            Company
          </Link>
          <Link
            href="#"
            className="text-black hover:text-red-800 font-bold text-lg"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-black hover:text-red-800 font-bold text-lg"
          >
            Case Studies
          </Link>
          <Link
            href="#"
            className="text-black hover:text-red-800 font-bold text-lg"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-black hover:text-red-800 font-bold text-lg"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white hover:bg-red-800 hover:text-white shadow-2xl text-black px-6  rounded-full font-medium transition py-5">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md rounded-b-lg p-6 space-y-4 text-center"
          >
            <Link
              href="/about"
              className="block text-black font-bold text-lg hover:text-red-800"
            >
              Company
            </Link>
            <Link
              href="#"
              className="block text-black font-bold text-lg hover:text-red-800"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-black font-bold text-lg hover:text-red-800"
            >
              Case Studies
            </Link>
            <Link
              href="#"
              className="block text-black font-bold text-lg hover:text-red-800"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block text-black font-bold text-lg hover:text-red-800"
            >
              Contact
            </Link>
            <button className="w-full bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition ">
              Get Free Consultation
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
