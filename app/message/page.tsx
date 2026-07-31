import Link from "next/link";

export default function MessagePage() {
  return (
    <main className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-14 text-center">
      <div className="relative z-10 w-full max-w-xl">
        <div className="fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-400/80 sm:text-sm">
            A birthday wish for Manavi
          </p>
          <p className="mt-6 text-lg italic leading-relaxed text-[#5f3a46] sm:text-xl">
            May this new year bloom with joy, laughter, and all the little
            miracles you deserve.
          </p>
          <p className="mt-4 text-lg font-medium text-[#5f3a46] sm:text-xl">
            Shine on — the world is brighter with you in it.
          </p>
          <p className="mt-8 font-script text-3xl text-rose-500 sm:text-4xl">
            Wishes from Kanna 🤍
          </p>
        </div>

        <Link
          href="/letter"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-500 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-600 hover:shadow-rose-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Read your letter
          <span aria-hidden>→</span>
        </Link>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-rose-300/70 bg-white/50 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 transition hover:bg-white/80 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span aria-hidden>←</span>
          Back to the start
        </Link>
      </div>
    </main>
  );
}
