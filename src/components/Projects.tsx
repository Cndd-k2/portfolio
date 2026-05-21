"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, payments, and admin dashboard. Built with Next.js, Stripe, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    emoji: "🛒",
    color: "indigo",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag & drop, teams, and notifications. Inspired by Trello.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    emoji: "✅",
    color: "pink",
    link: "#",
    github: "#",
  },
  {
    title: "Dev Blog Platform",
    description:
      "A markdown-powered blog platform with SEO optimization, code highlighting, and newsletter integration.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    emoji: "📝",
    color: "emerald",
    link: "#",
    github: "#",
  },
  {
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js REST API with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL"],
    emoji: "🔌",
    color: "amber",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "AI-powered portfolio generator that creates personalized developer portfolios from GitHub profiles.",
    tags: ["OpenAI", "Next.js", "Vercel AI SDK"],
    emoji: "🤖",
    color: "purple",
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with animated charts, location detection, and 7-day forecasts.",
    tags: ["React", "Chart.js", "OpenWeather API"],
    emoji: "🌤️",
    color: "sky",
    link: "#",
    github: "#",
  },
];

const colorMap: Record<string, { card: string; tag: string; tagText: string; dot: string }> = {
  indigo: { card: "hover:border-indigo-200", tag: "bg-indigo-50 text-indigo-600", tagText: "text-indigo-600", dot: "bg-indigo-500" },
  pink: { card: "hover:border-pink-200", tag: "bg-pink-50 text-pink-600", tagText: "text-pink-600", dot: "bg-pink-500" },
  emerald: { card: "hover:border-emerald-200", tag: "bg-emerald-50 text-emerald-600", tagText: "text-emerald-600", dot: "bg-emerald-500" },
  amber: { card: "hover:border-amber-200", tag: "bg-amber-50 text-amber-600", tagText: "text-amber-600", dot: "bg-amber-500" },
  purple: { card: "hover:border-purple-200", tag: "bg-purple-50 text-purple-600", tagText: "text-purple-600", dot: "bg-purple-500" },
  sky: { card: "hover:border-sky-200", tag: "bg-sky-50 text-sky-600", tagText: "text-sky-600", dot: "bg-sky-500" },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-4xl">🚀</span>
          <div>
            <p className="text-pink-500 font-semibold text-sm uppercase tracking-widest mb-1">
              What I&apos;ve built
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mb-12 ml-14 text-lg"
        >
          A selection of projects I&apos;ve worked on.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative group bg-white border-2 border-gray-100 ${colors.card} rounded-2xl p-6 cursor-pointer transition-all duration-300 ${hovered === i ? "shadow-lg -translate-y-1" : ""}`}
              >
                {/* Color dot */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.dot}`} />

                {/* Emoji */}
                <div className="text-4xl mb-4">{project.emoji}</div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 ${colors.tag} rounded-lg text-xs font-mono font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors"
                  >
                    <span>⌨️</span> Code
                  </a>
                  <a
                    href={project.link}
                    className={`flex items-center gap-1.5 text-xs ${colors.tagText} font-semibold transition-colors`}
                  >
                    <span>↗</span> Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-600 rounded-full font-semibold transition-all hover:-translate-y-0.5"
          >
            <span>⌨️</span> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
