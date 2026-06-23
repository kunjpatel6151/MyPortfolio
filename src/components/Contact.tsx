import { useState } from "react";
import { Code2, Briefcase, MessageSquare, Mail } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-telegraph text-[#E51B24] tracking-[0.4em] text-xs uppercase">— Western Union —</p>
          <h2 className="font-western text-5xl sm:text-6xl mt-3">The Telegraph Office</h2>
          <p className="font-serif italic text-[#F1EAD6]/60 mt-3">Send word. The wire runs day and night.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="paper text-[#1A1A1A] p-8 ornate-border"
          >
            <p className="font-western text-2xl text-center">— TELEGRAM —</p>
            <p className="font-telegraph text-center text-xs tracking-widest mb-6">STOP. SEND YOUR MESSAGE. STOP.</p>

            {sent ? (
              <div className="text-center py-12 animate-in fade-in zoom-in">
                <p className="font-western text-4xl text-[#E51B24]">✓ Telegram Delivered!</p>
                <p className="font-telegraph mt-3 text-sm tracking-widest">I'LL WIRE BACK SOON, PARTNER.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="font-telegraph text-xs tracking-widest">NAME</label>
                  <input required maxLength={100} className="w-full mt-1 bg-transparent border-b-2 border-[#1A1A1A]/50 focus:border-[#E51B24] outline-none py-2 font-telegraph" />
                </div>
                <div>
                  <label className="font-telegraph text-xs tracking-widest">EMAIL</label>
                  <input required type="email" maxLength={255} className="w-full mt-1 bg-transparent border-b-2 border-[#1A1A1A]/50 focus:border-[#E51B24] outline-none py-2 font-telegraph" />
                </div>
                <div>
                  <label className="font-telegraph text-xs tracking-widest">MESSAGE</label>
                  <textarea required maxLength={1000} rows={5} className="w-full mt-1 bg-transparent border-b-2 border-[#1A1A1A]/50 focus:border-[#E51B24] outline-none py-2 font-telegraph resize-none" />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full relative group flex items-center justify-center gap-3 bg-[#E51B24] text-[#F1EAD6] py-4 font-western tracking-widest hover:bg-[#1A1A1A] transition-colors border-2 border-[#1A1A1A]"
                >
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8a0f1c] to-[#3d0408] border border-[#F1EAD6]/40 flex items-center justify-center text-xs">JD</span>
                  SEAL & SEND
                </button>
              </div>
            )}
          </form>

          {/* Socials */}
          <div className="flex flex-col justify-center">
            <p className="font-telegraph tracking-widest text-xs text-[#E51B24] mb-4">— THE WIRES —</p>
            <h3 className="font-western text-3xl mb-8">Find Me Across The Frontier</h3>
            <ul className="space-y-3">
              {[
                { Icon: Code2, label: "GitHub", handle: "@jessedrifter" },
                { Icon: Briefcase, label: "LinkedIn", handle: "in/jessedrifter" },
                { Icon: MessageSquare, label: "Twitter / X", handle: "@jessecodes" },
                { Icon: Mail, label: "Email", handle: "jesse@drifter.dev" },
              ].map(({ Icon, label, handle }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="group flex items-center gap-4 border border-[#F1EAD6]/15 p-4 hover:border-[#E51B24] hover:bg-[#E51B24]/5 transition-all"
                  >
                    <span className="w-11 h-11 flex items-center justify-center border border-[#F1EAD6]/30 text-[#E51B24] group-hover:bg-[#E51B24] group-hover:text-[#F1EAD6] transition-colors">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-western text-lg leading-none">{label}</p>
                      <p className="font-telegraph text-xs tracking-widest text-[#F1EAD6]/60 mt-1">{handle}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
