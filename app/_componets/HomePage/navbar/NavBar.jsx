"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Link from "next/link";

const navigation = [
  { name: "Services" },
  { name: "Contact" },
  { name: "About" },
  { name: "Company" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://l4it.net/wp-content/uploads/2022/06/Merged-Video_Home-PageUpdated-1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/90 to-transparent" />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-10 px-10 p-6 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        {/* <div>L4IT</div> */}
        <div className="">  <Image
      src="/l4itremoved.png"
      width={200}
      height={100}
      alt="Picture of the author"
    />
    
    </div>
        <div className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={`#${item.name}`}
              onClick={(e) => handleScrollTo(e, item.name)}
              className="text-lg font-semibold cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Center Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl " >
          Is Your Information Technology Aligned with Your Business Goals?
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
          L4IT Company is a premier IT company supporting organizations in the
          Greater Chicago area and surrounding suburbs.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="#Contact"
            onClick={(e) => handleScrollTo(e, "Contact")}
            className="bg-red-800 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md"
          >
            Schedule a Consultation
          </Link>
          {/* <a href="#About" onClick={(e) => handleScrollTo(e, "About")} className="text-white font-semibold underline">
            Learn more
          </a> */}
        </div>
      </div>
    </div>
  );
}
