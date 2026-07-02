import { useState } from "react";
import { Mail, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useReveal } from "@/hooks/use-reveal";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LeetCodeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.864 5.244 7.736a1.374 1.374 0 0 0-.411.979c0 .37.146.724.411.98l1.872 1.871 5.406 5.426a1.374 1.374 0 0 0 1.942 0 1.374 1.374 0 0 0 0-1.942l-4.435-4.446H22.626c.76 0 1.374-.615 1.374-1.374 0-.76-.614-1.374-1.374-1.374H10.031l4.435-4.446a1.374 1.374 0 0 0 0-1.942 1.374 1.374 0 0 0-.983-.414ZM4.912 11.026a6.87 6.87 0 0 1 0-.31c0-.1.01-.201.028-.301a6.9 6.9 0 0 1 .11-.591c.046-.192.106-.381.179-.566a6.87 6.87 0 0 1 .425-.94l-1.871-1.872A9.618 9.618 0 0 0 1.942 9.213a9.618 9.618 0 0 0 0 3.884 9.618 9.618 0 0 0 1.841 2.767l1.871-1.872a6.87 6.87 0 0 1-.742-2.966Z" />
    </svg>
  );
}

function CodeforcesIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <rect x="3.5" y="13" width="4.5" height="8" rx="1" />
      <rect x="9.75" y="8" width="4.5" height="13" rx="1" />
      <rect x="16" y="3" width="4.5" height="18" rx="1" />
    </svg>
  );
}

function GeeksforGeeksIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5H12v2h-2c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h2v2h-2zm4-9c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5H12v-2h2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-2v-2h2z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

const socials = [
  {
    Icon: Mail,
    label: "Email",
    handle: "kunjkumar6151@gmail.com",
    href: "mailto:kunjkumar6151@gmail.com",
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    handle: "kunjpatel6151",
    href: "https://github.com/kunjpatel6151",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "Kunj Patel",
    href: "https://www.linkedin.com/in/kunj-patel-876a41325/",
  },
  {
    Icon: LeetCodeIcon,
    label: "LeetCode",
    handle: "Kunjkumar_Patel",
    href: "https://leetcode.com/u/Kunjkumar_Patel/",
  },
  {
    Icon: CodeforcesIcon,
    label: "Codeforces",
    handle: "Kunj_Patel_6151",
    href: "https://codeforces.com/profile/Kunj_Patel_6151",
  },
  {
    Icon: GeeksforGeeksIcon,
    label: "GeeksforGeeks",
    handle: "Kunj Patel",
    href: "https://www.geeksforgeeks.org/profile/kunjpatel6151",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const ref = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const newErrors: { name?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Partner, don't forget to sign your name!";
    if (!message.trim()) newErrors.message = "You can't send an empty wire, partner!";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSendError(null);
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: name.trim(), subject: subject.trim() || "Portfolio Inquiry", message: message.trim() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setName("");
      setSubject("");
      setMessage("");
      setTimeout(() => setSent(false), 5000);
    } catch {
      setSendError("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 bg-[#1A1A1A] text-[#F1EAD6] film-grain s-reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="s-accent font-ui text-[#E51B24] tracking-[0.4em] text-xs uppercase">— Western Union —</p>
          <h2 className="s-heading font-western text-5xl sm:text-6xl mt-3">The Telegraph Office</h2>
          <p className="s-subtitle font-body italic text-[#F1EAD6]/60 mt-3">Send word. The wire runs day and night.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <form
            noValidate
            onSubmit={handleSubmit}
            className="s-form paper text-[#1A1A1A] p-8 pb-6 ornate-border"
          >
            <p className="font-subheading text-2xl text-center">— TELEGRAM —</p>
            <p className="font-ui text-center text-xs tracking-widest mb-6">STOP. SEND YOUR MESSAGE. STOP.</p>

            {sent ? (
              <div className="text-center py-12">
                <p className="font-subheading text-4xl text-[#E51B24]">✓ Telegram Delivered!</p>
                <p className="font-ui mt-3 text-sm tracking-widest">I'LL WIRE BACK SOON, PARTNER.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="font-ui text-xs tracking-widest flex justify-between items-center">
                    <span>NAME</span>
                    {errors.name && (
                      <span className="text-[#E51B24] flex items-center gap-1 font-normal lowercase tracking-normal text-[11px]">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    maxLength={100}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    disabled={sending}
                    className={`w-full mt-1 bg-transparent border-b-2 outline-none py-2 font-body transition-colors ${
                      errors.name ? "border-[#E51B24]" : "border-[#1A1A1A]/50 focus:border-[#E51B24]"
                    } ${sending ? "opacity-60" : ""}`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="font-ui text-xs tracking-widest flex justify-between items-center">
                    <span>SUBJECT</span>
                  </label>
                  <input
                    type="text"
                    maxLength={150}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={sending}
                    className={`w-full mt-1 bg-transparent border-b-2 border-[#1A1A1A]/50 focus:border-[#E51B24] outline-none py-2 font-body transition-colors ${sending ? "opacity-60" : ""}`}
                    placeholder="What's this telegram about?"
                  />
                </div>
                <div>
                  <label className="font-ui text-xs tracking-widest flex justify-between items-center">
                    <span>MESSAGE</span>
                    {errors.message && (
                      <span className="text-[#E51B24] flex items-center gap-1 font-normal lowercase tracking-normal text-[11px]">
                        <AlertCircle size={12} />
                        {errors.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    maxLength={1000}
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    disabled={sending}
                    className={`w-full mt-1 bg-transparent border-b-2 outline-none py-2 font-body resize-none transition-colors ${
                      errors.message ? "border-[#E51B24]" : "border-[#1A1A1A]/50 focus:border-[#E51B24]"
                    } ${sending ? "opacity-60" : ""}`}
                    placeholder="Hello Kunj, I'd like to connect regarding..."
                  />
                </div>

                {sendError && (
                  <div className="flex items-center gap-2 text-[#E51B24] font-body text-sm py-2">
                    <AlertCircle size={16} />
                    {sendError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className={`mt-4 w-full relative group flex items-center justify-center gap-3 bg-[#E51B24] text-[#F1EAD6] py-4 font-subheading tracking-widest hover:bg-[#1A1A1A] transition-colors border-2 border-[#1A1A1A] shadow-md hover:shadow-lg ${
                    sending ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {sending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8a0f1c] to-[#3d0408] border border-[#F1EAD6]/40 flex items-center justify-center text-xs">KP</span>
                      SEAL &amp; SEND
                    </>
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Socials */}
          <div className="s-socials flex flex-col justify-center">
            <p className="font-ui tracking-widest text-xs text-[#E51B24] mb-4">— THE WIRES —</p>
            <h3 className="font-subheading text-3xl mb-8">Find Me Across The Frontier</h3>
            <ul className="space-y-3">
              {socials.map(({ Icon, label, handle, href }, i) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="s-social-item group flex items-center gap-4 border border-[#F1EAD6]/15 p-4 hover:border-[#E51B24] hover:bg-[#E51B24]/5 transition-all"
                    style={{ "--social-i": i } as React.CSSProperties}
                  >
                    <span className="w-11 h-11 flex items-center justify-center border border-[#F1EAD6]/30 text-[#E51B24] group-hover:bg-[#E51B24] group-hover:text-[#F1EAD6] transition-colors flex-shrink-0">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-subheading text-lg leading-none">{label}</p>
                      <p className="font-ui text-xs tracking-widest text-[#F1EAD6]/60 mt-1 truncate">{handle}</p>
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
