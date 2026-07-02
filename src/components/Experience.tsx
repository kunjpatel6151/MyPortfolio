import { useReveal } from "@/hooks/use-reveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Active Member",
    org: "Computer Society of India (CSI), Nirma University",
    duration: "2023 — Present",
    desc: "Participating in coding competitions, technical workshops, and collaborative events while contributing to technical discussions and event organization."
  },
  {
    role: "Community Intern",
    org: "Gram Panchayat (Community Internship)",
    duration: "May 2024 – June 2024",
    desc: "Built modern React and Node.js web applications for local merchants and frontier businesses. Migrated legacy monoliths to swift, resilient microservices."
  },
  {
    role: "Flutter Developer Intern",
    org: "M.D. InfoTech",
    duration: "May 2026 – June 2026",
    desc: "Developed and enhanced Flutter applications, collaborated with the development team, and gained hands-on experience in mobile app development using Flutter and Dart."
  }
];

export function Experience() {
  const ref = useReveal();
  
  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain s-reveal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="s-accent font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — The Trail —
          </p>
          <h2 className="s-heading font-western text-5xl sm:text-6xl mt-3 text-[#F1EAD6]">Sheriff's Record</h2>
          <p className="s-subtitle font-body italic text-[#F1EAD6]/60 mt-3 max-w-xl mx-auto">
            A documented history of territories conquered and bounties collected.
          </p>
        </div>

        <div className="relative border-l-2 border-[#E51B24]/30 pl-8 space-y-12 ml-4 md:ml-0 md:border-l-0 md:pl-0">
          {/* Central Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E51B24]/30 -translate-x-1/2 s-timeline-line origin-top" />
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-[#E51B24]/30 s-timeline-line origin-top" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative md:flex items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div 
                  className="s-timeline-node absolute -left-[41px] md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-[#E51B24] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(229,27,36,0.6)]"
                  style={{ "--node-i": idx } as React.CSSProperties}
                >
                  <div className="w-2 h-2 rounded-full bg-[#E51B24]" />
                </div>

                {/* Empty Space for alignment on Desktop */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <div 
                  className="s-timeline-card w-full md:w-[45%] paper ornate-border p-6 md:p-8 relative group hover:-translate-y-1 transition-transform duration-300"
                  style={{ "--card-i": idx } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 mb-2 text-[#E51B24]">
                    <Briefcase size={18} />
                    <span className="font-ui tracking-widest text-xs uppercase text-[#1A1A1A]/60">{exp.duration}</span>
                  </div>
                  <h3 className="font-subheading text-2xl text-[#1A1A1A] leading-tight mb-1">{exp.role}</h3>
                  <p className="font-western text-[#E51B24] text-lg mb-4">{exp.org}</p>
                  <div className="bullet-divider mb-4 opacity-50"><span className="font-western text-[10px]">★</span></div>
                  <p className="font-body text-[#1A1A1A]/85 text-sm leading-relaxed">{exp.desc}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
