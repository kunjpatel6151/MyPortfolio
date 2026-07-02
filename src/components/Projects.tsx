import { useState } from "react";
import { Code2, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type Cat = "All" | "Frontend" | "Full Stack" | "Mobile" | "AI/ML";

const projects: { title: string; desc: string; cat: Exclude<Cat, "All">; tech: string[]; bounty: string }[] = [
  { title: "Iron Horse Analytics", desc: "Real-time dashboard for cross-country freight logistics.", cat: "Full Stack", tech: ["Next.js", "tRPC", "Postgres"], bounty: "$8,500" },
  { title: "Whisperwood AI", desc: "Voice-first journaling app powered by on-device LLMs.", cat: "AI/ML", tech: ["Python", "Llama", "Expo"], bounty: "$12,000" },
  { title: "Saloon CMS", desc: "Headless CMS for indie publishers. Markdown-first, Git-backed.", cat: "Frontend", tech: ["React", "Vite", "MDX"], bounty: "$6,000" },
  { title: "Posse Tracker", desc: "Native social app for organizing tabletop game nights.", cat: "Mobile", tech: ["React Native", "Supabase"], bounty: "$7,500" },
  { title: "Bounty Bot", desc: "Slack agent that triages bugs using semantic search.", cat: "AI/ML", tech: ["Node", "OpenAI", "pgvector"], bounty: "$9,000" },
  { title: "Telegraph UI", desc: "Open-source component kit with a vintage western soul.", cat: "Frontend", tech: ["React", "Tailwind"], bounty: "$5,000" },
];

const cats: Cat[] = ["All", "Frontend", "Full Stack", "Mobile", "AI/ML"];

export function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const [flipped, setFlipped] = useState<string | null>(null);
  const ref = useReveal();
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6 bg-[#F1EAD6] s-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="s-accent font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — Sheriff's Office —
          </p>
          <h2 className="s-heading font-western text-5xl sm:text-6xl mt-3 text-[#1A1A1A]">The Bounty Board</h2>
          <p className="s-subtitle font-body italic text-[#1A1A1A]/65 mt-3 max-w-xl mx-auto">
            Wanted: these projects, brought in dead or alive — preferably shipped.
          </p>
        </div>

        <div className="s-content flex flex-wrap justify-center gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-ui tracking-widest text-xs uppercase px-5 py-2 border-2 transition-all ${
                active === c
                  ? "bg-[#1A1A1A] text-[#F1EAD6] border-[#1A1A1A]"
                  : "border-[#1A1A1A]/40 text-[#1A1A1A] hover:border-[#E51B24] hover:text-[#E51B24]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => {
            const isFlip = flipped === p.title;
            return (
              <div
                key={p.title}
                className="s-card group [perspective:1200px] h-[420px]"
                style={{ "--card-i": i } as React.CSSProperties}
                onMouseEnter={() => setFlipped(p.title)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlip ? null : p.title)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlip ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 paper ornate-border p-6 flex flex-col [backface-visibility:hidden]">
                    <p className="font-western text-center text-xl tracking-widest">WANTED</p>
                    <div className="bullet-divider my-2"><span className="font-western">★</span></div>
                    <div className="my-3 mx-auto w-full aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1A1A1A] border-2 border-[#1A1A1A] flex items-center justify-center text-[#E51B24] font-western text-3xl overflow-hidden">
                      {p.title.split(" ").map((w) => w[0]).join("").slice(0,3)}
                    </div>
                    <h3 className="font-subheading text-2xl text-center leading-tight">{p.title}</h3>
                    <p className="font-ui text-center text-[11px] tracking-widest text-[#1A1A1A]/70 mt-2">
                      {p.cat.toUpperCase()}
                    </p>
                    <div className="mt-auto pt-3 text-center">
                      <p className="font-subheading text-3xl text-[#E51B24]">{p.bounty}</p>
                      <p className="font-ui text-[10px] tracking-widest">REWARD</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-[#1A1A1A] text-[#F1EAD6] border-2 border-[#E51B24]/60 p-6 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="font-subheading text-2xl text-[#E51B24]">{p.title}</h3>
                    <p className="mt-3 font-body text-sm text-[#F1EAD6]/85 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="font-ui text-[10px] tracking-widest border border-[#F1EAD6]/30 px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-3 pt-4">
                      <a href="#" onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-2 border border-[#F1EAD6]/40 py-2 font-ui text-xs tracking-widest hover:bg-[#F1EAD6] hover:text-[#1A1A1A] transition-colors">
                        <Code2 size={14} /> CODE
                      </a>
                      <a href="#" onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-2 bg-[#E51B24] py-2 font-ui text-xs tracking-widest hover:bg-[#F1EAD6] hover:text-[#1A1A1A] transition-colors">
                        <ExternalLink size={14} /> LIVE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
