import { Code2, Server, Smartphone, Brain, Wrench } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const categories = [
  {
    icon: Code2,
    name: "Frontend",
    items: [
      { label: "React / Next.js", level: 95 },
      { label: "TypeScript", level: 92 },
      { label: "Tailwind / CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    name: "Backend",
    items: [
      { label: "Node.js / Bun", level: 90 },
      { label: "Postgres / Redis", level: 85 },
      { label: "Go", level: 70 },
    ],
  },
  {
    icon: Smartphone,
    name: "Mobile",
    items: [
      { label: "React Native", level: 82 },
      { label: "Expo", level: 80 },
      { label: "Swift (light)", level: 55 },
    ],
  },
  {
    icon: Brain,
    name: "AI / ML",
    items: [
      { label: "LLM Apps / RAG", level: 88 },
      { label: "PyTorch", level: 70 },
      { label: "Vector DBs", level: 80 },
    ],
  },
  {
    icon: Wrench,
    name: "Tools",
    items: [
      { label: "AWS / Cloudflare", level: 85 },
      { label: "Docker / CI/CD", level: 88 },
      { label: "Figma", level: 75 },
    ],
  },
];

function AmmoBelt({ level }: { level: number }) {
  const total = 10;
  const filled = Math.round((level / 100) * total);
  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`block w-2 h-5 rounded-sm border ${
            i < filled
              ? "bg-[#E51B24] border-[#F1EAD6]/40 shadow-[0_0_6px_rgba(229,27,36,0.7)]"
              : "bg-[#2a2a2a] border-[#F1EAD6]/15"
          }`}
        />
      ))}
      <span className="ml-2 font-ui text-xs text-[#F1EAD6]/60">{level}</span>
    </div>
  );
}

export function Skills() {
  const ref = useReveal();
  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain overflow-hidden reveal"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">
            — Inventory —
          </p>
          <h2 className="font-western text-5xl sm:text-6xl mt-3">The Saddlebag</h2>
          <p className="font-body italic text-[#F1EAD6]/60 mt-3 max-w-xl mx-auto">
            Every outlaw needs his tools. Here's what I keep loaded and ready.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, name, items }) => (
            <div
              key={name}
              className="reveal-child group relative bg-gradient-to-br from-[#222] to-[#161616] border border-[#F1EAD6]/10 p-6 hover:border-[#E51B24]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(229,27,36,0.4)]"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E51B24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-5">
                <span className="w-11 h-11 flex items-center justify-center bg-[#E51B24]/15 border border-[#E51B24]/40 text-[#E51B24] group-hover:bg-[#E51B24] group-hover:text-[#F1EAD6] transition-all">
                  <Icon size={22} />
                </span>
                <h3 className="font-subheading text-2xl">{name}</h3>
              </div>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.label}>
                    <div className="flex justify-between text-sm font-ui tracking-wider">
                      <span>{it.label}</span>
                    </div>
                    <AmmoBelt level={it.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
