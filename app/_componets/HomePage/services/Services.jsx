"use client";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const ServiceData = [
  { name: "Projects", image: "/dashboard.png" },
  { name: "Tasks", image: "/dash2.png" },
  { name: "Marketing", image: "/dash2.png" },
  { name: "Design", image: "/dash3.png" },
  { name: "CRM", image: "/dashboard.png" },
  { name: "Software", image: "/dash3.png" },
  { name: "IT", image: "/dash3.png" },
  { name: "Operations", image: "/dash3.png" },
  { name: "Product", image: "/dashboard.png" },
];

export default function Services() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);

  console.log(selectedServices);

  const toggleService = (name) => {
    setSelectedServices((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const currentImage =
    ServiceData.find((item) => item.name === hoveredService)?.image ||
    "/dashboard.png";

  return (
    <div className="bg-white py-20 ">
      <span className="flex justify-center items-center">
        <Image src="/l4it.jpg" width={120} height={100} alt="logo" />
        <h4 className="text-black font-mono text-2xl ">Services</h4>
      </span>

      <div className="p-5">
        <h2 className="text-black flex justify-center items-center pt-6 font-bold text-4xl ">
          Made for work,
        </h2>
        <h2 className="text-black flex justify-center items-center pt-2 font-normal text-7xl ">
          designed to love 
        </h2>
        <p className="text-black text-center pt-8">
          Streamline workflows, gain clear visibility across teams, and empower
          smarter decisions with AI seamlessly woven into your work.
        </p>
      </div>

      <div className="bg-white shadow min-h-screen flex items-center justify-center p-5 relative">
        <div className="flex-col lg:flex-row w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden lg:p-10 gap-10 p-20 ">
          {/* Left Image */}
          <div className="lg:flex justify-center items-center">
            <Image
              src={currentImage}
              alt="Preview"
              width={400}
              height={400}
              className="rounded-2xl lg:w-[80%] md:w-full h-auto object-cover shadow"
            />
          </div>

          {/* Right selection panel */}
          <div className="w-full lg:w-[300px] bg-white/90 border p-6 rounded-2xl shadow-md mx-auto lg:absolute lg:right-80  lg:top-10 ">
            <h3 className="text-center font-semibold text-lg mb-6 text-black">
              What would you like to manage?
            </h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
              {ServiceData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleService(item.name)}
                  onMouseEnter={() => setHoveredService(item.name)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`border rounded-xl p-3 py-6 flex flex-col items-center justify-center cursor-pointer transition hover:shadow ${
                    selectedServices.includes(item.name)
                      ? "border-red-700 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="w-5 h-5 mb-1 border border-black rounded-sm flex items-center justify-center bg-white">
                    {selectedServices.includes(item.name) && (
                      <div className="w-3 h-3 bg-red-700 rounded-sm" />
                    )}
                  </div>
                  {/* <ShieldCheck size={20} color="#000000" /> */}
                  <span className="text-xs font-semibold mt-1 text-center text-black">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full py-2 bg-red-800 text-white font-semibold rounded-xl hover:bg-red-700 transition">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
