import { useReveal } from "@/hooks/use-reveal";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Deputy",
    issuer: "Amazon Web Services",
    date: "Issued: Oct 2023",
    signature: "A. W. S."
  },
  {
    title: "Frontend Architect Badge",
    issuer: "Meta / React",
    date: "Issued: May 2022",
    signature: "M. Zuckerberg"
  },
  {
    title: "Machine Learning Marshal",
    issuer: "DeepLearning.AI",
    date: "Issued: Jan 2024",
    signature: "A. Ng"
  }
];

export function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" ref={ref} className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain s-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="s-accent font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — Official Records —
          </p>
          <h2 className="s-heading font-western text-5xl sm:text-6xl mt-3">Verified Documents</h2>
          <p className="s-subtitle font-body italic text-[#F1EAD6]/60 mt-3 max-w-xl mx-auto">
            Stamped and signed certifications verifying expertise in the modern frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="s-card paper p-6 sm:p-8 ornate-border relative flex flex-col items-center text-center text-[#1A1A1A]"
              style={{ "--card-i": idx } as React.CSSProperties}
            >
              
              {/* Seal */}
              <div className="absolute top-4 right-4 text-[#E51B24]/80 opacity-60">
                <BadgeCheck size={48} strokeWidth={1} />
              </div>

              <div className="w-full border-b-2 border-double border-[#1A1A1A]/30 pb-6 mb-6 mt-4">
                <p className="font-ui tracking-widest text-[10px] uppercase text-[#1A1A1A]/60 mb-3">— Certificate of Competency —</p>
                <h3 className="font-subheading text-2xl leading-snug">{cert.title}</h3>
              </div>

              <p className="font-body text-sm text-[#1A1A1A]/80 mb-8 italic">
                This document certifies that the bearer has demonstrated exceptional skill and mastery recognized by <strong className="font-bold">{cert.issuer}</strong>.
              </p>

              <div className="mt-auto w-full flex items-end justify-between border-t border-[#1A1A1A]/20 pt-4">
                <p className="font-ui text-[10px] tracking-widest uppercase text-[#1A1A1A]/50">{cert.date}</p>
                <div className="text-right">
                  <p className="font-script text-2xl text-[#1A1A1A] -rotate-2">{cert.signature}</p>
                  <div className="w-24 h-px bg-[#1A1A1A]/30 mt-1" />
                  <p className="font-ui text-[8px] tracking-widest uppercase text-[#1A1A1A]/40 mt-1">Authorized Signature</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
