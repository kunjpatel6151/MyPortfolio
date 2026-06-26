export function SheriffBadge({ initials = "KP", size = 44 }: { initials?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-md">
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f3d97a" />
          <stop offset="60%" stopColor="#b8862b" />
          <stop offset="100%" stopColor="#5a3a10" />
        </radialGradient>
      </defs>
      {/* 5-point star */}
      <polygon
        points="50,4 61,38 96,38 67,58 78,92 50,72 22,92 33,58 4,38 39,38"
        fill="url(#bg-grad)"
        stroke="#2a1a08"
        strokeWidth="2"
      />
      {[[50,4],[96,38],[78,92],[22,92],[4,38]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill="#f1ead6" stroke="#2a1a08" strokeWidth="1"/>
      ))}
      <circle cx="50" cy="52" r="16" fill="#1a1a1a" stroke="#f1ead6" strokeWidth="1.5"/>
      <text x="50" y="58" textAnchor="middle" fontSize="14" fill="#f1ead6" fontFamily="Chinese Rocks, sans-serif" fontWeight="400">
        {initials}
      </text>
    </svg>
  );
}
