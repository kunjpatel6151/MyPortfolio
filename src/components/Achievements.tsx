import { useReveal } from "@/hooks/use-reveal";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "Knight Badge",
    category: "LEETCODE",
    desc: "Solved 500+ algorithmic problems, achieved a rating of 1852, and ranked among the Top 6.18% of programmers worldwide.",
    year: "1852"
  },
  {
    title: "Pupil",
    category: "CODEFORCES",
    desc: "Solved 375+ competitive programming problems and earned the Pupil title with a maximum rating of 1242.",
    year: "1242"
  },
  {
    title: "ACPC Rank 218",
    category: "ACADEMIC MERIT",
    desc: "Secured All Gujarat Rank 218 in ACPC Counselling based on the combined merit of HSC and GUJCET.",
    year: "#218"
  }
];

export function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" ref={ref} className="relative py-28 px-6 bg-[#F1EAD6] s-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="s-accent font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — Honors &amp; Glory —
          </p>
          <h2 className="s-heading font-western text-5xl sm:text-6xl mt-3 text-[#1A1A1A]">Sheriff Commendations</h2>
          <p className="s-subtitle font-body italic text-[#1A1A1A]/65 mt-3 max-w-xl mx-auto">
            Notices of exceptional merit and legendary feats across the digital plains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <div 
              key={idx} 
              className="s-card group relative p-1 transition-transform duration-500 hover:-translate-y-2"
              style={{ "--card-i": idx } as React.CSSProperties}
            >
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
