"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🐱</span>
            <span className="font-bold text-lg">
              <span className="text-indigo-500">K</span>
              <span className="text-gray-800">dev</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["about", "skills", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm text-gray-500 hover:text-indigo-500 capitalize transition-colors"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: "⌨️", href: "#", label: "GitHub" },
              { icon: "💼", href: "#", label: "LinkedIn" },
              { icon: "🐦", href: "#", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-100 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <span className="text-base">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-400">
            © {year} Kdev. Built with{" "}
            <span className="text-pink-500">♥</span> using{" "}
            <span className="font-mono text-indigo-500">Next.js</span> &amp;{" "}
            <span className="font-mono text-indigo-500">PostgreSQL</span>.
            {" "}Powered by cat energy 🐱
          </p>
        </div>
      </div>
    </footer>
  );
}
