"use client";
import { Articles } from "@/app/_datacontance/Data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a0f1c]  text-white py-20 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold pb-8 mb-12">
          Stay up to date with the latest news
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {Articles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} key={index}>
            <motion.div
              className="bg-[#0f172a] p-4 rounded-2xl shadow-md flex flex-col h-full transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={article.image}
                alt="News thumbnail"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold leading-snug mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{article.date}</p>
              <p className="text-sm text-gray-300 flex-1">
                {article.description}
              </p>
            </motion.div>
            </Link>

          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-red-800 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all">
            See all resources
          </button>
        </div>
      </div>
    </section>
  );
}
