import { useEffect, useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { SheriffBadge } from "./SheriffBadge";
import { useActiveSection } from "@/hooks/use-active-section";
import { smoothScrollTo } from "@/utils/smooth-scroll";

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

  const sectionIds = useMemo(() => links.map((l) => l.href.substring(1)), []);
  const { activeSection, setActiveSection } = useActiveSection(sectionIds);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (open) setOpen(false);
    smoothScrollTo(targetId, setActiveSection);
  };

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
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={(e) => handleNavClick(e, "home")}
        >
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
                onClick={(e) => handleNavClick(e, l.href.substring(1))}
                className={`relative font-ui text-sm tracking-[0.2em] uppercase transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#E51B24] hover:after:w-full after:transition-all after:duration-300 ${
                  activeSection === l.href.substring(1) 
                    ? "text-[#E51B24] after:w-full" 
                    : "text-[#F1EAD6]/85 hover:text-[#E51B24] after:w-0"
                }`}
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
                  onClick={(e) => handleNavClick(e, l.href.substring(1))}
                  className={`block font-subheading text-xl transition-colors ${
                    activeSection === l.href.substring(1)
                      ? "text-[#E51B24]"
                      : "text-[#1A1A1A] hover:text-[#E51B24]"
                  }`}
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
