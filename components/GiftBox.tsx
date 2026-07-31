"use client";

import { useState } from "react";

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="mt-12">
      <button
        type="button"
        onClick={() => setOpened(true)}
        disabled={opened}
        aria-label={opened ? "Gift opened" : "Open the gift"}
        className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
      >
        <svg
          viewBox="0 0 360 300"
          aria-hidden
          className={`mx-auto w-48 transition-transform duration-500 sm:w-56 ${
            opened ? "scale-105" : "hover:scale-105"
          }`}
        >
          <ellipse cx={180} cy={286} rx={110} ry={12} fill="#eecdc4" />
          <rect x={102} y={156} width={156} height={112} rx={10} fill="#f9cdd4" />
          <rect x={102} y={156} width={156} height={16} rx={8} fill="#fbe3ea" />
          <rect x={102} y={200} width={156} height={16} fill="#f0c06a" />
          <rect x={169} y={156} width={22} height={112} fill="#f0c06a" />
          <g
            style={{
              transition: "transform 0.5s ease",
              transform: opened ? "translateY(-18px)" : "none",
            }}
          >
            <rect x={86} y={128} width={188} height={30} rx={8} fill="#f2aebe" />
            <rect x={86} y={128} width={188} height={12} rx={6} fill="#fbd3da" />
            <rect x={169} y={128} width={22} height={30} fill="#f0c06a" />
          </g>
          <path d="M180 128c-24-15-42-9-42 7 0 15 42 15 42 9z" fill="#e99ab1" />
          <path d="M180 128c24-15 42-9 42 7 0 15-42 15-42 9z" fill="#e99ab1" />
          <circle cx={180} cy={133} r={9} fill="#d47a94" />
        </svg>
      </button>
      <p
        className={`mt-4 text-sm text-rose-400/90 transition-opacity duration-700 ${
          opened ? "fade-up" : "pointer-events-none opacity-0"
        }`}
      >
        Wrapped with love, just for you
      </p>
    </div>
  );
}
