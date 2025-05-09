'use client'
import Image from "next/image";
import { motion } from "framer-motion";
export default function OurClients() {
  const ClientData = [
    { name: "aws", image: "/aws.png" },
    { name: "fortinet", image: "/fortinet.png" },
    { name: "google-cloud", image: "/google-cloud.png" },
    { name: "microsoft-azure", image: "/microsoft-azure.png" },
    { name: "sentinelone", image: "/sentinelone.png" },
    { name: "fortinet", image: "/fortinet.png" },
    { name: "google-cloud", image: "/google-cloud.png" },
    { name: "microsoft-azure", image: "/microsoft-azure.png" },
    { name: "aws", image: "/aws.png" },

   ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center py-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }} // trigger when 30% in view
        >

        <div >
          <h2 className="text-xl font-bold text-gray-400 pb-5 ">OUR PARTNERS</h2>
          <h3 className="text-white font-bold text-4xl lg:text-5xl pb-3">
            An ultimate source for
          </h3>
          <span className="text-white font-bold text-4xl lg:text-5xl block pb-5">
            cybersecurity service
          </span>
          <p className="text-white pt-5 text-xl font-medium">
            Discover top cybersecurity solutions to protect your digital assets.
            Whether for SMBs or large enterprises, we provide the tools to keep
            you secure in an evolving digital landscape.
          </p>
        </div>
        </motion.div>


        {/* Right Grid of Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
         >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
          {ClientData.map((item,index) => (
        
            <div
              key={index}
              className="shadow border-gray-300 bg-gray-50  rounded-2xl flex items-center justify-center w-40 h-30 p-2"
            >
              <Image
                className="object-cover"
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
              />
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </div>
  );
}
