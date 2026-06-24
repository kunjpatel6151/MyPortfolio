import { useReveal } from "@/hooks/use-reveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Lead Frontier Engineer",
    org: "Gold Rush Tech",
    duration: "2022 — Present",
    desc: "Led a posse of engineers to build scalable, high-throughput logistical systems. Engineered real-time data pipelines and mentored junior deputies in the ways of clean architecture."
  },
  {
    role: "Full Stack Outlaw",
    org: "Saloon Software",
    duration: "2019 — 2022",
    desc: "Built modern React and Node.js web applications for local merchants and frontier businesses. Migrated legacy monoliths to swift, resilient microservices."
  },
  {
    role: "Junior Drifter",
    org: "High Plains Digital",
    duration: "2017 — 2019",
    desc: "Started out writing HTML/CSS scripts and wrangling legacy jQuery code. Quickly adapted to the React frontier and learned the ropes of backend databases."
  }
];

export function Experience() {
  const ref = useReveal();
  
  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain reveal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — The Trail —
          </p>
          <h2 className="font-western text-5xl sm:text-6xl mt-3 text-[#F1EAD6]">Sheriff's Record</h2>
          <p className="font-body italic text-[#F1EAD6]/60 mt-3 max-w-xl mx-auto">
            A documented history of territories conquered and bounties collected.
          </p>
        </div>

        <div className="relative border-l-2 border-[#E51B24]/30 pl-8 space-y-12 ml-4 md:ml-0 md:border-l-0 md:pl-0">
          {/* Central Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E51B24]/30 -translate-x-1/2" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative md:flex items-center justify-between reveal-child ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="absolute -left-[41px] md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-[#E51B24] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(229,27,36,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-[#E51B24]" />
                </div>

                {/* Empty Space for alignment on Desktop */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] paper ornate-border p-6 md:p-8 relative group hover:-translate-y-1 transition-transform duration-300">
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
