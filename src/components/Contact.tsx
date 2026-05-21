"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@kdev.io", href: "mailto:hello@kdev.io" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/kdev", href: "#" },
  { icon: "⌨️", label: "GitHub", value: "github.com/kdev", href: "#" },
  { icon: "📍", label: "Location", value: "Remote — Worldwide", href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message");
      }

      toast.success("Message sent! I'll get back to you soon 🐱", {
        duration: 5000,
        style: { background: "#eef2ff", color: "#4f46e5", border: "1px solid #c7d2fe" },
      });
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.", {
        duration: 4000,
        style: { background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gray-50/50">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-4xl">💬</span>
          <div>
            <p className="text-emerald-500 font-semibold text-sm uppercase tracking-widest mb-1">
              Say hello
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Get in <span className="gradient-text">Touch</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Let&apos;s work together!</h3>
              <p className="text-gray-500 leading-relaxed">
                Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
                create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-xl shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-700 font-medium hover:text-indigo-500 transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cat quote */}
            <div className="bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl p-5 text-white">
              <div className="text-3xl mb-3">🐱</div>
              <p className="text-sm font-medium opacity-90 italic">
                &ldquo;My cat approves all my work. If she walks across my keyboard, it&apos;s a feature.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all ${
                      errors.name ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all ${
                      errors.email ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Project collaboration, freelance work, etc."
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all ${
                    errors.subject ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project, ideas, or just say hi! 👋"
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all resize-none ${
                    errors.message ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message 🚀
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
