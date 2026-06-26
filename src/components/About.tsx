import bountyPoster from "@/assets/image/Bounty Poster.png";
import { useReveal } from "@/hooks/use-reveal";

const timeline = [
  { year: "2015", text: "First arrived in the territory — earned my keep with HTML & CSS." },
  { year: "2018", text: "Joined the React posse. Started building serious frontends." },
  { year: "2020", text: "Crossed into the backend wilderness — Node, Postgres, AWS." },
  { year: "2023", text: "Strapped on the AI/ML six-shooter. Shipped LLM products." },
  { year: "Today", text: "Hired guns: freelance & lead engineering across the frontier." },
];

export function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="relative py-28 px-6 bg-[#F1EAD6] about-reveal">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Bounty Poster */}
        <div className="relative flex justify-center about-poster">
          <div className="rotate-[-4.5deg] hover:rotate-2 transition-transform duration-700">
            <img
              src={bountyPoster}
              alt="Wanted — Kunj Patel bounty poster"
              className="w-full max-w-xl rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] border-2 border-[#1A1A1A]/20"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <div className="about-bio">
            <p className="font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase mb-3">
              — Telegram from the Territory —
            </p>
            <h3 className="font-western text-5xl text-[#1A1A1A] mb-6 leading-tight">
              The Story Of An Outlaw Engineer
            </h3>
            <div className="space-y-4 font-body text-[#1A1A1A]/85 text-base leading-relaxed">
              <p>
                Born in the dust of dial-up modems and raised by the campfire glow of a CRT
                monitor — I've ridden through every frontier the trade has to offer.
              </p>
              <p>
                From scrappy frontend skirmishes to backend gunfights at scale, I build
                products that hold their ground. No snake oil. No vaporware. Just code
                that ships at sundown.
              </p>
            </div>
          </div>

          <ol className="mt-10 relative pl-6 space-y-6">
            {/* Timeline line - animated draw */}
            <div className="about-timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-[#1A1A1A]/30 origin-top" />
            
            {timeline.map((t, i) => (
              <li key={t.year} className="relative">
                <span className="about-timeline-dot absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-[#E51B24] border-2 border-[#1A1A1A]" style={{ "--dot-index": i } as React.CSSProperties} />
                <p className="about-timeline-year font-subheading text-xl text-[#E51B24]" style={{ "--year-index": i } as React.CSSProperties}>{t.year}</p>
                <p className="about-timeline-text font-body text-[#1A1A1A]/85" style={{ "--text-index": i } as React.CSSProperties}>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

