import Link from "next/link";
import GiftBox from "@/components/GiftBox";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center px-5 py-14 text-center">
      <div className="relative z-10 w-full max-w-xl">
        <div className="float-slow">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-400/80 sm:text-sm">
            August 1st · a little something, just for you
          </p>
          <h1 className="mt-4 font-script text-6xl leading-none text-rose-600 sm:text-8xl">
            Happy Birthday
          </h1>
          <p className="mt-3 font-script text-7xl leading-none text-rose-500 sm:text-9xl">
            Manavi
          </p>
          <p className="mt-3 text-2xl italic text-[#8a5a66] sm:text-3xl">
            to a truly wonderful you
          </p>
        </div>

        <GiftBox />

        <Link
          href="/wish"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-rose-500 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-600 hover:shadow-rose-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Begin
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
