import { mulberry32 } from "@/lib/random";

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  sway: number;
  rotate: number;
  opacity: number;
};

type Sparkle = {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

const PETAL_COLORS = [
  "#f7b6c3",
  "#f2a0b6",
  "#fcd0dd",
  "#f9c8b8",
  "#efb7d4",
  "#fbe3ea",
];

const PETALS: Petal[] = (() => {
  const rnd = mulberry32(20260731);
  return Array.from({ length: 22 }, (_, i) => ({
    left: Math.round(rnd() * 1000) / 10,
    delay: Math.round(rnd() * 100) / 10,
    duration: Math.round((11 + rnd() * 8) * 10) / 10,
    size: Math.round((12 + rnd() * 16) * 10) / 10,
    color: PETAL_COLORS[i % PETAL_COLORS.length],
    sway: Math.round((30 + rnd() * 60) * 10) / 10,
    rotate: Math.round(200 + rnd() * 300),
    opacity: Math.round((0.45 + rnd() * 0.45) * 100) / 100,
  }));
})();

const SPARKLES: Sparkle[] = (() => {
  const rnd = mulberry32(991);
  return Array.from({ length: 14 }, () => ({
    left: Math.round(rnd() * 1000) / 10,
    top: Math.round((6 + rnd() * 72) * 10) / 10,
    size: Math.round((6 + rnd() * 10) * 10) / 10,
    delay: Math.round(rnd() * 30) / 10,
    duration: Math.round((2 + rnd() * 2.4) * 10) / 10,
  }));
})();

export default function AmbientBackground() {
  return (
    <>
      {/* Falling petals */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="petal"
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.3,
                "--petal-color": p.color,
                "--petal-opacity": p.opacity,
                "--petal-duration": `${p.duration}s`,
                "--petal-delay": `${p.delay}s`,
                "--petal-sway": `${p.sway}px`,
                "--petal-rotate": `${p.rotate}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Twinkling glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
