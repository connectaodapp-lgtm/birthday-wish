import { mulberry32 } from "@/lib/random";

const CONFETTI_COLORS = [
  "#f28cae",
  "#ffd166",
  "#a0c4ff",
  "#c7a3dc",
  "#9adc9f",
  "#ff9e7d",
  "#ffffff",
];

export default function Confetti({ seed }: { seed: number }) {
  const rnd = mulberry32(seed);
  const pieces = Array.from({ length: 90 }, (_, i) => ({
    left: Math.round(rnd() * 1000) / 10,
    delay: Math.round(rnd() * 20) / 10,
    duration: Math.round((2.8 + rnd() * 2.4) * 10) / 10,
    w: Math.round((6 + rnd() * 8) * 10) / 10,
    h: Math.round((10 + rnd() * 8) * 10) / 10,
    rot: Math.round(360 + rnd() * 720),
    dx: Math.round((rnd() - 0.5) * 220 * 10) / 10,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {pieces.map((c, i) => (
        <span
          key={i}
          className="confetti"
          style={
            {
              left: `${c.left}%`,
              width: c.w,
              height: c.h,
              "--c": c.color,
              "--d": `${c.duration}s`,
              "--delay": `${c.delay}s`,
              "--dx": `${c.dx}px`,
              "--rot": `${c.rot}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
