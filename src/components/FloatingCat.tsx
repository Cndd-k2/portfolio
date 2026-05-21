"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIPS = [
  "Remember to commit your code! 💾",
  "Stay hydrated! 💧",
  "Take a break! 😴",
  "Push to production! 🚀",
  "Write tests! 🧪",
  "Document your code! 📝",
];

// A mini cat that occasionally walks across the bottom of the screen
export default function FloatingCat() {
  const [isWalking, setIsWalking] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Trigger walk every ~25 seconds with some randomness
    const schedule = () => {
      const delay = 15000 + Math.random() * 20000;
      const id = setTimeout(() => {
        setCurrentTip(Math.floor(Math.random() * TIPS.length));
        setIsWalking(true);
        const walkEndId = setTimeout(() => setIsWalking(false), 6000);
        timeoutsRef.current.push(walkEndId);
        schedule();
      }, delay);
      timeoutsRef.current.push(id);
    };
    // First appearance after 8 seconds
    const initial = setTimeout(() => {
      setCurrentTip(0);
      setIsWalking(true);
      const walkEndId = setTimeout(() => setIsWalking(false), 6000);
      timeoutsRef.current.push(walkEndId);
      schedule();
    }, 8000);
    timeoutsRef.current.push(initial);

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none overflow-hidden h-20">
      <AnimatePresence>
        {isWalking && (
          <motion.div
            initial={{ x: -160 }}
            animate={{ x: "calc(100vw + 160px)" }}
            transition={{ duration: 6, ease: "linear" }}
            exit={{}}
            className="absolute bottom-2 flex flex-col items-center gap-1"
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
            style={{ pointerEvents: "auto" }}
          >
            {/* Speech bubble */}
            <AnimatePresence>
              {showTip && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white border-2 border-indigo-100 rounded-xl rounded-bl-none px-3 py-1.5 shadow-lg mb-1 whitespace-nowrap"
                >
                  <span className="text-xs text-gray-600 font-medium">{TIPS[currentTip]}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mini walking cat SVG */}
            <svg viewBox="0 0 80 60" width="80" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Tail */}
              <path
                d="M60 35 Q72 28 70 18 Q68 12 62 14 Q64 20 60 26 Q58 30 58 35 Z"
                fill="#6366f1"
                className="cat-tail"
                style={{ transformOrigin: "60px 35px" }}
              />

              {/* Body */}
              <ellipse cx="38" cy="38" rx="24" ry="16" fill="#6366f1" />

              {/* Head */}
              <circle cx="16" cy="28" r="16" fill="#6366f1" />

              {/* Left ear */}
              <path d="M6 14 L2 4 L14 10 Z" fill="#6366f1" />
              <path d="M7 13 L4 6 L13 11 Z" fill="#ec4899" />

              {/* Right ear */}
              <path d="M22 13 L26 3 L18 9 Z" fill="#6366f1" />
              <path d="M21 12 L24 5 L19 10 Z" fill="#ec4899" />

              {/* Eyes */}
              <ellipse cx="11" cy="27" rx="4" ry="5" fill="white" />
              <ellipse cx="21" cy="27" rx="4" ry="5" fill="white" />
              <ellipse cx="11" cy="28" rx="2.5" ry="3.5" fill="#0f0f0f" className="cat-eye" />
              <ellipse cx="21" cy="28" rx="2.5" ry="3.5" fill="#0f0f0f" className="cat-eye" />
              <circle cx="12.5" cy="26" r="1.5" fill="white" />
              <circle cx="22.5" cy="26" r="1.5" fill="white" />

              {/* Nose */}
              <path d="M14 33 L18 33 L16 35 Z" fill="#ec4899" />

              {/* Walking legs */}
              <motion.g
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: "28px 50px" }}
              >
                <rect x="25" y="50" width="6" height="12" rx="3" fill="#6366f1" />
              </motion.g>
              <motion.g
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: "36px 50px" }}
              >
                <rect x="33" y="50" width="6" height="12" rx="3" fill="#6366f1" />
              </motion.g>
              <motion.g
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: "46px 50px" }}
              >
                <rect x="43" y="50" width="6" height="12" rx="3" fill="#6366f1" />
              </motion.g>
              <motion.g
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 0.4, repeat: Infinity }}
                style={{ transformOrigin: "54px 50px" }}
              >
                <rect x="51" y="50" width="6" height="12" rx="3" fill="#6366f1" />
              </motion.g>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
