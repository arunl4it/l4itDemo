"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const logos = [
  { alt: "aws", image: "/aws.png" },
  { alt: "fortinet", image: "/fortinet.png" },
  { alt: "google-cloud", image: "/google-cloud.png" },
  { alt: "microsoft-azure", image: "/microsoft-azure.png" },
  { alt: "sentinelone", image: "/sentinelone.png" },
  { alt: "fortinet", image: "/fortinet.png" },
  { alt: "google-cloud", image: "/google-cloud.png" },
  { alt: "microsoft-azure", image: "/microsoft-azure.png" },
  { alt: "aws", image: "/aws.png" },
  { alt: "sentinelone", image: "/sentinelone.png" },
  { alt: "fortinet", image: "/fortinet.png" },
  { alt: "google-cloud", image: "/google-cloud.png" },
  { alt: "google-cloud", image: "/google-cloud.png" },
  { alt: "microsoft-azure", image: "/microsoft-azure.png" },
  { alt: "aws", image: "/aws.png" },
  { alt: "sentinelone", image: "/sentinelone.png" },
  { alt: "fortinet", image: "/fortinet.png" },
  { alt: "google-cloud", image: "/google-cloud.png" },
];

export default function ClientsPartners() {
  return (
    <section className="bg-gradient-to-t from-[#0a0f1c] via-gray-900 to-[#0a0f1c] py-16 px-6 md:px-20  pt-30 pb-30 ">
      <div className="max-w-7xl mx-auto ">
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }} // trigger when 30% in view
        >
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-12 pb-8 ">
          Clients & Technology Partners
        </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="w-full content-center p-4 hover:bg-white/10 
               justify-items-center  h-40 relative border rounded-2xl border-white/10 shadow-2xl  transform transition duration-300 ease-in-out hover:scale-[1.1] hover:shadow-2xl hover:z-30 hover:shadow-amber-600"
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={100}
                  height={90}
                  className="object-cover  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
