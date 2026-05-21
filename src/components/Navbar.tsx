"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">🐱</span>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-indigo-500">K</span>
            <span className="text-gray-800">dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-indigo-50 rounded-full"
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
          >
            Hire me ✨
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`h-0.5 bg-current rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`h-0.5 bg-current rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 bg-current rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-gray-700 hover:text-indigo-500 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-2 px-4 bg-indigo-500 text-white text-center rounded-full font-semibold"
              >
                Hire me ✨
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
