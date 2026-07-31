import Link from "next/link";
import Envelope from "@/components/Envelope";

export default function LetterPage() {
  return (
    <main className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-14 text-center">
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
