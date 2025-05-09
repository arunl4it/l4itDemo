"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurPeopleSection() {
  return (
    <section className="bg-gradient-to-t from-black via-[#2b1204] to-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Animated Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }} // trigger when 30% in view
        >
          <p className="text-lg font-semibold text-gray-400 uppercase mb-3">
            Work and Joy
          </p>
          <h2 className="text-5xl font-bold mb-6">Our people</h2>
          <p className="text-xl text-gray-300">
            In this series, we are discussing topics in cybersecurity and
            raising awareness about cyber threats.
          </p>
        </motion.div>

        {/* Animated Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-3 gap-2 bg-[#1f0d06] p-4 rounded-3xl ">
            {[
              "/image1.jpg",
              "/imag2.jpg",
              "/image3.webp",
              "/image4.jpg",
              "/image5.jpg",
              "/image1.jpg",
            ].map((src, idx) => (
              <Image
                width={200}
                height={200}
                key={idx}
                src={src}
                alt={`Team photo ${idx + 1}`}
                className="rounded-md object-cover w-full h-full transform transition duration-300 ease-in-out hover:scale-[1.3] hover:shadow-2xl"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
