import Link from "next/link";
import Envelope from "@/components/Envelope";

export default function LetterPage() {
  return (
    <main className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden px-5 py-14 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="heartbeat h-[60vh] w-auto text-rose-300 opacity-60 blur-xl sm:h-[85vh]"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-400/80 sm:text-sm">
          For Manavi
        </p>
        <h2 className="mt-4 font-script text-5xl leading-none text-rose-600 sm:text-7xl">
          A letter for you
        </h2>

        <div className="mt-10">
          <Envelope />
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-rose-300/70 bg-white/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 transition hover:bg-white/80 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span aria-hidden>←</span>
          Back to the start
        </Link>
      </div>
    </main>
  );
}
