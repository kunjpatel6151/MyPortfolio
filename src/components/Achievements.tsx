import { useReveal } from "@/hooks/use-reveal";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "Quickest Draw in the West",
    category: "Hackathon Winner",
    desc: "Built a full-stack AI bounty board from scratch in under 48 hours, taking first place among 50 competing posses.",
    year: "2023"
  },
  {
    title: "Master of the Telegraph",
    category: "Open Source Contributor",
    desc: "Recognized as a core contributor to major open-source UI component libraries used by thousands across the frontier.",
    year: "2021"
  },
  {
    title: "Legendary Bounty Hunter",
    category: "Product Delivery Excellence",
    desc: "Successfully shipped over 10 major commercial products to production with zero critical bugs on launch day.",
    year: "2024"
  }
];

export function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" ref={ref} className="relative py-28 px-6 bg-[#F1EAD6] reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — Honors & Glory —
          </p>
          <h2 className="font-western text-5xl sm:text-6xl mt-3 text-[#1A1A1A]">Sheriff Commendations</h2>
          <p className="font-body italic text-[#1A1A1A]/65 mt-3 max-w-xl mx-auto">
            Notices of exceptional merit and legendary feats across the digital plains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <div key={idx} className="reveal-child group relative p-1 transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#E51B24] rotate-1 shadow-lg transition-transform duration-500 group-hover:rotate-2" />
              <div className="relative h-full bg-[#1A1A1A] text-[#F1EAD6] border-2 border-[#1A1A1A] p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8a0f1c] to-[#3d0408] border-2 border-[#F1EAD6]/40 flex items-center justify-center text-[#F1EAD6] mb-6 shadow-inner">
                  <Award size={32} />
                </div>
                
                <p className="font-ui tracking-widest text-xs uppercase text-[#E51B24] mb-2">{ach.category}</p>
                <h3 className="font-subheading text-2xl leading-tight mb-4">{ach.title}</h3>
                
                <div className="w-full flex items-center gap-2 text-[#F1EAD6]/20 mb-4">
                  <div className="h-px bg-current flex-1" />
                  <span className="font-western text-sm">★</span>
                  <div className="h-px bg-current flex-1" />
                </div>

                <p className="font-body text-[#F1EAD6]/70 text-sm leading-relaxed mb-6 flex-grow">{ach.desc}</p>
                
                <div className="mt-auto border border-[#E51B24]/40 px-4 py-1">
                  <span className="font-western text-xl text-[#E51B24]">{ach.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
