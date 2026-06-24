export function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] text-[#F1EAD6] py-10 px-6 border-t border-[#F1EAD6]/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#E51B24]">
          <g fill="currentColor" stroke="#F1EAD6" strokeWidth="0.6">
            <g transform="translate(8 8) rotate(-30 10 10)">
              <rect x="0" y="6" width="22" height="6" rx="1"/>
              <rect x="20" y="4" width="4" height="10"/>
              <circle cx="6" cy="9" r="4" fill="#1A1A1A" stroke="#F1EAD6"/>
            </g>
            <g transform="translate(52 8) rotate(30 -10 10) scale(-1 1)">
              <rect x="0" y="6" width="22" height="6" rx="1"/>
              <rect x="20" y="4" width="4" height="10"/>
              <circle cx="6" cy="9" r="4" fill="#1A1A1A" stroke="#F1EAD6"/>
            </g>
          </g>
        </svg>
        <p className="font-western text-xl">Jesse Drifter</p>
        <p className="font-ui text-xs tracking-[0.4em] text-[#E51B24]">OUTLAWS TO THE END</p>
        <p className="font-body text-[11px] text-[#F1EAD6]/40 mt-4">
          © {new Date().getFullYear()} — Built with bullets, beans, and TypeScript.
        </p>
      </div>
    </footer>
  );
}
