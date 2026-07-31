const CANDLE_COLORS = ["#e99ab1", "#f0c06a", "#c5a3dc"];
const CANDLE_X = [150, 180, 210];

export default function Cake({
  candles,
  onBlow,
}: {
  candles: boolean[];
  onBlow: (index: number) => void;
}) {
  return (
    <svg
      viewBox="0 0 360 330"
      className="mx-auto w-72 drop-shadow-[0_20px_30px_rgba(214,120,140,0.25)] sm:w-96"
      role="img"
      aria-label="Birthday cake with candles"
    >
      <defs>
        <radialGradient id="flameGrad" cx="50%" cy="82%" r="75%">
          <stop offset="0%" stopColor="#fff6c9" />
          <stop offset="55%" stopColor="#ffc94d" />
          <stop offset="100%" stopColor="#ff8a3d" />
        </radialGradient>
        <linearGradient id="tierGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbd3da" />
          <stop offset="100%" stopColor="#f2aebe" />
        </linearGradient>
      </defs>

      <ellipse cx={180} cy={320} rx={150} ry={14} fill="#eecdc4" />

      <rect x={62} y={216} width={236} height={104} rx={16} fill="url(#tierGrad)" />
      <rect x={62} y={216} width={236} height={20} rx={10} fill="#fff3ec" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={96 + i * 42} cy={258} r={4} fill="#fff3ec" opacity={0.85} />
      ))}

      <rect x={118} y={132} width={124} height={88} rx={14} fill="#fff0ea" />
      <rect x={118} y={132} width={124} height={16} rx={8} fill="#f9cdd4" />

      {CANDLE_X.map((x, i) => (
        <g
          key={i}
          onClick={() => onBlow(i)}
          className="cursor-pointer"
          style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        >
          <rect x={x - 6} y={86} width={12} height={46} rx={3} fill={CANDLE_COLORS[i]} />
          <rect x={x - 6} y={86} width={12} height={10} rx={3} fill="#fff" opacity={0.35} />
          <line x1={x} y1={86} x2={x} y2={80} stroke="#7a4b2e" strokeWidth={2} />
          {candles[i] ? (
            <path
              className="flame"
              style={{ animationDelay: `${i * 0.35}s` }}
              d={`M${x},56 C ${x - 8},66 ${x - 6},74 ${x},78 C ${x + 6},74 ${x + 8},66 ${x},56 Z`}
              fill="url(#flameGrad)"
            />
          ) : (
            <g
              className="smoke"
              style={
                {
                  "--sx": `${(i % 2 ? 1 : -1) * 7}px`,
                } as React.CSSProperties
              }
            >
              <circle cx={x} cy={74} r={4.5} fill="#dcc9c4" opacity={0.85} />
              <circle cx={x + (i % 2 ? 5 : -5)} cy={68} r={3} fill="#e6d4cf" opacity={0.7} />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
