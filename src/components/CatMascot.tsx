"use client";

import { motion } from "framer-motion";

// SVG Cat Mascot - a cute minimal cat with vivid colors
export default function CatMascot() {
  return (
    <div className="relative animate-float">
      {/* Glow effect behind cat */}
      <div className="absolute inset-0 bg-indigo-300/20 rounded-full blur-3xl scale-150" />

      <svg
        viewBox="0 0 240 280"
        width="320"
        height="373"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Shadow */}
        <ellipse cx="120" cy="265" rx="60" ry="12" fill="#6366f1" opacity="0.12" />

        {/* Tail */}
        <path
          d="M155 210 Q190 230 185 255 Q182 265 170 260 Q175 248 168 235 Q160 222 148 218 Z"
          fill="#6366f1"
          className="cat-tail"
          style={{ transformOrigin: "155px 210px" }}
        />

        {/* Body */}
        <ellipse cx="120" cy="200" rx="70" ry="65" fill="#6366f1" />

        {/* Belly patch */}
        <ellipse cx="120" cy="215" rx="42" ry="40" fill="#eef2ff" />

        {/* Head */}
        <circle cx="120" cy="115" r="72" fill="#6366f1" />

        {/* Left ear outer */}
        <path d="M62 68 L48 28 L92 52 Z" fill="#6366f1" className="cat-ear" />
        {/* Left ear inner */}
        <path d="M66 62 L56 38 L85 56 Z" fill="#ec4899" className="cat-ear" />

        {/* Right ear outer */}
        <path d="M178 68 L192 28 L148 52 Z" fill="#6366f1" className="cat-ear" />
        {/* Right ear inner */}
        <path d="M174 62 L184 38 L155 56 Z" fill="#ec4899" className="cat-ear" />

        {/* Left eye white */}
        <circle cx="94" cy="110" r="18" fill="white" />
        {/* Right eye white */}
        <circle cx="146" cy="110" r="18" fill="white" />

        {/* Left pupil */}
        <ellipse cx="96" cy="112" rx="9" ry="12" fill="#0f0f0f" className="cat-eye" />
        {/* Right pupil */}
        <ellipse cx="148" cy="112" rx="9" ry="12" fill="#0f0f0f" className="cat-eye" />

        {/* Eye shine left */}
        <circle cx="100" cy="107" r="3.5" fill="white" />
        {/* Eye shine right */}
        <circle cx="152" cy="107" r="3.5" fill="white" />

        {/* Nose */}
        <path d="M116 132 L124 132 L120 137 Z" fill="#ec4899" />

        {/* Mouth */}
        <path d="M114 137 Q120 143 126 137" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Whiskers left */}
        <line x1="58" y1="130" x2="110" y2="133" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="62" y1="140" x2="110" y2="138" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Whiskers right */}
        <line x1="182" y1="130" x2="130" y2="133" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="178" y1="140" x2="130" y2="138" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Code tag on body - cute detail */}
        <rect x="88" y="185" width="64" height="28" rx="6" fill="white" opacity="0.9" />
        <text x="120" y="204" textAnchor="middle" fontSize="11" fill="#6366f1" fontFamily="monospace" fontWeight="bold">
          &lt;/dev&gt;
        </text>

        {/* Paws */}
        <ellipse cx="82" cy="248" rx="22" ry="14" fill="#6366f1" />
        <ellipse cx="158" cy="248" rx="22" ry="14" fill="#6366f1" />
        {/* Paw toes */}
        <circle cx="73" cy="244" r="5" fill="#7c3aed" />
        <circle cx="82" cy="241" r="5" fill="#7c3aed" />
        <circle cx="91" cy="244" r="5" fill="#7c3aed" />
        <circle cx="149" cy="244" r="5" fill="#7c3aed" />
        <circle cx="158" cy="241" r="5" fill="#7c3aed" />
        <circle cx="167" cy="244" r="5" fill="#7c3aed" />
      </svg>

      {/* Speech bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="absolute -top-6 -right-4 bg-white border-2 border-indigo-100 rounded-2xl rounded-br-none px-4 py-2 shadow-lg"
      >
        <span className="text-sm font-semibold text-gray-700">Hello, World! 👋</span>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 -left-8 bg-pink-100 border border-pink-200 rounded-xl px-3 py-1.5 shadow-sm"
      >
        <span className="text-xs font-semibold text-pink-600">✨ Creative</span>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4], rotate: [3, -3, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 -left-10 bg-emerald-100 border border-emerald-200 rounded-xl px-3 py-1.5 shadow-sm"
      >
        <span className="text-xs font-semibold text-emerald-600">🚀 Fast</span>
      </motion.div>
    </div>
  );
}
