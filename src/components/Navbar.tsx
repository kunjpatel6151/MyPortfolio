import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SheriffBadge } from "./SheriffBadge";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-[#1A1A1A]/70 border-b border-[#F1EAD6]/10" : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <SheriffBadge initials="KP" size={42} />
          <span className="font-western text-[#F1EAD6] text-lg hidden sm:block group-hover:text-[#E51B24] transition-colors">
            Kunj Patel
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-ui text-sm tracking-[0.2em] uppercase text-[#F1EAD6]/85 hover:text-[#E51B24] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#E51B24] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                // TODO: Add resume download logic
              }}
              className="flex items-center justify-center font-ui text-xs tracking-[0.2em] uppercase text-[#F1EAD6] px-4 py-1.5 border border-[#F1EAD6]/30 hover:border-[#E51B24] hover:text-[#E51B24] hover:bg-[#E51B24]/10 transition-colors duration-300"
            >
              Resume
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-[#F1EAD6]"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-5 mt-3 paper rounded-sm p-6 animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-subheading text-xl text-[#1A1A1A] hover:text-[#E51B24]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-[#1A1A1A]/10">
              <button
                onClick={() => {
                  setOpen(false);
                  // TODO: Add resume download logic
                }}
                className="w-full flex items-center justify-center font-ui text-sm tracking-[0.2em] uppercase text-[#1A1A1A] px-4 py-3 border border-[#1A1A1A]/30 hover:border-[#E51B24] hover:text-[#E51B24] hover:bg-[#E51B24]/5 transition-colors duration-300"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
