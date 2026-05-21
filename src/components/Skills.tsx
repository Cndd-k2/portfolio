"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "indigo",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "pink",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 70 },
      { name: "Python / Django", level: 72 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "emerald",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "Prisma ORM", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🔧",
    color: "amber",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "Vercel / Railway", level: 85 },
      { name: "Linux / CLI", level: 78 },
    ],
  },
];

const colorMap: Record<string, { bar: string; bg: string; border: string; text: string }> = {
  indigo: {
    bar: "bg-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-600",
  },
  pink: {
    bar: "bg-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    text: "text-pink-600",
  },
  emerald: {
    bar: "bg-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
  },
  amber: {
    bar: "bg-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
  },
};

function SkillBar({ name, level, barClass, delay }: { name: string; level: number; barClass: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${barClass} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-4xl">⚡</span>
          <div>
            <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-1">
              My toolkit
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Skills &amp; <span className="gradient-text">Tech</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.1 }}
                className={`${colors.bg} border ${colors.border} rounded-2xl p-6 card-hover`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className={`text-lg font-bold ${colors.text}`}>{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      barClass={colors.bar}
                      delay={catIdx * 0.1 + skillIdx * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
