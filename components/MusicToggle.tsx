"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/happy-birthday.mp3");
    audio.loop = true;
    audio.volume = 0.7;
    audioRef.current = audio;

    // Browsers block unmuted autoplay until the user interacts with the page,
    // so try on load and fall back to starting on the first tap anywhere.
    const attemptPlay = () => {
      if (playingRef.current) return;
      void audio
        .play()
        .then(() => {
          playingRef.current = true;
          setPlaying(true);
        })
        .catch(() => {});
    };

    attemptPlay();
    window.addEventListener("pointerdown", attemptPlay, { once: true });
    window.addEventListener("keydown", attemptPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", attemptPlay);
      window.removeEventListener("keydown", attemptPlay);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playingRef.current) {
      audio.pause();
      playingRef.current = false;
      setPlaying(false);
    } else {
      void audio
        .play()
        .then(() => {
          playingRef.current = true;
          setPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause music" : "Play music"}
      className="fixed right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-rose-300/70 bg-white/60 text-rose-500 shadow-sm backdrop-blur transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
    >
      {playing ? <PauseIcon /> : <NoteIcon />}
    </button>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}
