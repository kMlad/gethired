"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SPINNER = ["|", "/", "-", "\\"] as const;

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        fill="currentColor"
        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.067 0 11.74-4.967 11.74-11.96 0-.804-.086-1.418-.191-2.025H12.24z"
      />
    </svg>
  );
}

export function GoogleButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [frame, setFrame] = useState(0);
  const tick = useRef<ReturnType<typeof setInterval> | null>(null);
  const stop = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (tick.current) clearInterval(tick.current);
      if (stop.current) clearTimeout(stop.current);
    };
  }, []);

  function handleClick() {
    if (loading) return;
    // TODO: wire up Google OAuth — UI placeholder for now.
    setLoading(true);
    setFrame(0);
    tick.current = setInterval(() => {
      setFrame((f) => (f + 1) % SPINNER.length);
    }, 90);
    stop.current = setTimeout(() => {
      if (tick.current) clearInterval(tick.current);
      tick.current = null;
      stop.current = null;
      setLoading(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className={cn(
        "group flex w-full items-center gap-2.5 border border-border bg-transparent px-4 py-4 sm:gap-3 sm:px-5",
        "font-mono text-xs uppercase tracking-[0.14em] text-foreground",
        "transition-colors duration-150 ease-out",
        "hover:border-foreground hover:bg-foreground hover:text-background",
        "focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        "active:translate-y-px disabled:cursor-wait",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-4 shrink-0 items-center justify-center"
      >
        {loading ? (
          <span className="text-sm leading-none">{SPINNER[frame]}</span>
        ) : (
          <GoogleMark />
        )}
      </span>
      <span className="flex-1 text-left">
        {loading ? "connecting" : "continue with google"}
      </span>
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        size={16}
        strokeWidth={2}
        aria-hidden={true}
        className="shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1"
      />
    </button>
  );
}
