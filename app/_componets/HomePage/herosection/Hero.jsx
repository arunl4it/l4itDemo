"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const words = ["Industries", "Technologies", "Capabilities", "Perspectives"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const marqueeItems = [
    { name: "aws", image: "/clinet4.png" },
    { name: "fortinet", image: "/client2.png" },
    { name: "google-cloud", image: "/client3.png" },
    { name: "aws", image: "/clinet4.png" },
    { name: "fortinet", image: "/client2.png" },
    { name: "google-cloud", image: "/client3.png" },
    { name: "aws", image: "/clinet4.png" },
    { name: "fortinet", image: "/client2.png" },
    { name: "google-cloud", image: "/client3.png" },  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 50);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
   >
      <div className="bg-gradient-to-t from-black via-red-900 to-black mt-36 pb-20">
        <div className="max-w-7xl mx-auto py-10 text-center">
          <div className="md:flex justify-center gap-6 p-4 items-center">
            <div className="p-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold">
                Transforming{" "}
              </h1>
            </div>
            <div className="bg-white lg:w-90 p-4">
              <h1 className="text-red-800 text-5xl font-bold">
                {words[index]}
              </h1>
            </div>
          </div>

          <h2 className="text-5xl py-5 text-white font-extrabold">
            with Advanced AI Solutions
          </h2>
          <h3 className="text-slate-300 text-xl font-semibold">
            Your Trusted Tech Partner for Your Digital Innovations
          </h3>

          <div className="bg-transparent shadow rounded-2xl flex flex-wrap items-center justify-center mt-25">
            {/* Left Section - Rotating Star */}
            <div className="p-2 px-6 w-full sm:w-auto flex justify-center">
              <div className="bg-red-800 relative rounded-full w-30 h-30 flex items-center justify-center text-center">
                <span className="text-white text-2xl z-10">★</span>
                <svg
                  viewBox="0 0 200 200"
                  className="absolute top-0 left-0 w-full h-full spin-slow"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100
                        m -75, 0
                        a 75,75 0 1,1 150,0
                        a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="white" fontSize="15" fontFamily="sans-serif">
                    <textPath href="#circlePath" startOffset="0%">
                      CLIENTS AND THEIR LOGOS • CLIENTS AND THEIR LOGOS •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Right Section - Marquee */}
            <div className="w-full sm:flex-1 overflow-hidden py-2 bg-white rounded-2xl h-20 flex items-center">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute flex items-center h-full animate-marquee whitespace-nowrap">
                  {marqueeItems.map((item, i) => (
                    <div key={i} className="mx-8 flex-shrink-0 h-full flex items-center">
                      <Image
                        src={item.image}
                        width={200}
                        height={100}
                        alt={item.name}
                        className="object-contain h-full w-auto"
                      />
                    </div>
                  ))}
                  {/* Duplicate items for seamless looping */}
                  {marqueeItems.map((item, i) => (
                    <div key={`dup-${i}`} className="mx-8 flex-shrink-0 h-full flex items-center">
                      <Image
                        src={item.image}
                        width={100}
                        height={40}
                        alt={item.name}
                        className="object-contain h-full w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}