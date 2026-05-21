"use client";

import { motion } from "framer-motion";
import CatMascot from "./CatMascot";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200/40 rounded-full animate-blob blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/30 rounded-full animate-blob blur-3xl pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 rounded-full animate-blob blur-3xl pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-4"
          >
            <span className="text-gray-900">Hi, I&apos;m</span>
            <br />
            <span className="gradient-text">Kdev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 font-light mb-8 leading-relaxed max-w-md"
          >
            Fullstack Developer crafting beautiful, fast, and functional web experiences. I turn ideas into{" "}
            <span className="text-indigo-500 font-medium">digital reality</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-mono shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Cat mascot side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <CatMascot />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-indigo-300 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
