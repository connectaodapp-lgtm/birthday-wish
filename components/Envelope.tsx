"use client";

import { useState } from "react";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mx-auto w-full max-w-md">
      {opened ? (
        <div className="fade-up rounded-2xl bg-[#fffdf8] px-7 py-7 text-left shadow-[0_18px_40px_rgba(180,120,90,0.18)]">
          <p className="font-script text-3xl text-rose-500">Dear Manavi,</p>
          <p className="mt-4 text-sm italic leading-relaxed text-[#5f3a46] sm:text-base">
            Happy birthday, Manavi! 🎂 So grateful to have a friend like you.
            Stay happy, keep smiling — here&apos;s to another year of fun and
            laughter together!
          </p>
          <p className="mt-6 text-right font-script text-2xl text-rose-500">
            With love, Kanna 🤍
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpened(true)}
          aria-label="Open the letter"
          className="block w-full rounded-2xl shadow-[0_18px_40px_rgba(180,120,90,0.2)] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
        >
          <svg viewBox="0 0 400 176" className="w-full" aria-hidden>
            <rect x={0} y={0} width={400} height={176} rx={16} fill="#f6e3cd" />
            <polygon points="0,176 200,95 0,20" fill="#f9ecd9" />
            <polygon points="400,176 200,95 400,20" fill="#f3dfc4" />
            <polygon points="200,95 0,20 400,20" fill="#f0d8b9" />
            <circle cx={200} cy={95} r={22} fill="#c98f6a" />
            <circle cx={200} cy={95} r={15} fill="#d9a57f" />
            <path
              d="M200 84c-3-4-9-4-11 0l11 22 11-22c-2-4-8-4-11 0z"
              fill="#fdf3e7"
            />
          </svg>
        </button>
      )}
      <p className="mt-4 text-sm text-rose-400/90">
        {opened ? "A letter, just for you" : "Tap the envelope to read your letter"}
      </p>
    </div>
  );
}
