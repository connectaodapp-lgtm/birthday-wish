"use client";

import { useState } from "react";
import Link from "next/link";
import Cake from "@/components/Cake";
import Confetti from "@/components/Confetti";

export default function WishPage() {
  const [candles, setCandles] = useState<boolean[]>([true, true, true]);
  const [burst, setBurst] = useState(0);
  const allOut = candles.every((c) => !c);

  const blow = (index: number) => {
    const next = candles.map((c, i) => (i === index ? false : c));
    setCandles(next);
    if (next.every((c) => !c)) setBurst((b) => b + 1);
  };

  return (
    <main className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-14 text-center">
      {allOut && burst > 0 && <Confetti seed={burst * 12345 + 7} />}

      <div className="relative z-10 w-full max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-400/80 sm:text-sm">
          For Manavi · a birthday wish
        </p>
        <h2 className="mt-4 font-script text-5xl leading-none text-rose-600 sm:text-7xl">
          Close your eyes
        </h2>

        <div className="mt-10">
          <Cake candles={candles} onBlow={blow} />
          <p className="mt-2 text-sm text-rose-400/90">
            {allOut ? "Your wish is on its way" : "Tap the candles to make a wish"}
          </p>
        </div>

        <div
          className={`mt-10 transition-opacity duration-700 ${
            allOut ? "fade-up" : "pointer-events-none opacity-0"
          }`}
        >
          <Link
            href="/message"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-600 hover:shadow-rose-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Reveal your message
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
