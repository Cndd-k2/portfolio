"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Passion" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-4xl">🙋</span>
            <div>
              <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-1">
                Get to know me
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                About <span className="gradient-text">Me</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m a passionate <span className="text-indigo-500 font-semibold">Fullstack Developer</span>{" "}
                who loves building web applications that are both beautiful and functional. I specialize in
                creating modern, scalable digital experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey started with curiosity about how websites work. Today, I build complete solutions —
                from pixel-perfect frontends to robust backend APIs and database architectures.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open
                source, or playing with my cat 🐱 (who is my biggest source of inspiration for clean and
                elegant code).
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "💡 Problem Solver",
                  "🎨 UI/UX Lover",
                  "🔧 Clean Code Advocate",
                  "🌍 Open Source Fan",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium border border-indigo-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-700 transition-colors group"
                >
                  Let&apos;s work together
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 text-center card-hover"
                >
                  <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}

              {/* Fun fact card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="col-span-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl p-6 text-white"
              >
                <div className="text-2xl mb-2">😺</div>
                <p className="text-sm font-medium opacity-90">
                  Fun fact: My cat reviews all my code before I commit. She&apos;s very strict about
                  naming conventions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
