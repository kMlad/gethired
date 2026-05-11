import type { ReactNode } from "react";
import { GoogleButton } from "@/components/google-button";

const reveal =
  "motion-safe:animate-[reveal_0.7s_cubic-bezier(0.16,1,0.3,1)_both]";

const caret = "motion-safe:animate-[caret-blink_1.15s_linear_infinite]";

const STEPS = [
  {
    n: "01",
    lead: "enter your career",
    rest: "& the technologies you've worked with.",
  },
  {
    n: "02",
    lead: "paste the links",
    rest: "to the job postings you want.",
  },
  {
    n: "03",
    lead: "get a résumé",
    rest: "tailored to each specific job.",
  },
] as const;

function Eyebrow({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <div
      className={`flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground ${reveal}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span>{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background font-mono text-foreground">
      {/* clipped backdrop numeral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span
          className={`absolute -bottom-[10vw] right-[2vw] select-none text-[24vw] font-light leading-none text-foreground/[0.04] ${reveal}`}
          style={{ animationDelay: "240ms" }}
        >
          04
        </span>
      </div>

      {/* header */}
      <header
        className={`relative z-10 shrink-0 border-b border-border ${reveal}`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-6 py-4 sm:px-10">
          <span className="text-sm tracking-tight text-foreground">
            gethired
            <span aria-hidden="true" className={caret}>
              _
            </span>
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            01&nbsp;/&nbsp;01
          </span>
        </div>
      </header>

      {/* main — two columns above the fold on desktop */}
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12 sm:px-10 lg:flex-row lg:py-0">
        {/* left — what it is + how it works */}
        <div className="flex min-w-0 flex-col justify-center gap-10 lg:flex-[1.4_1_0%] lg:gap-9 lg:py-12 lg:pr-12">
          <section className="space-y-5">
            <Eyebrow delay={80}>what this is</Eyebrow>
            <h1
              className={`text-[clamp(2.1rem,3.2vw,2.75rem)] font-light leading-[1.1] tracking-tight text-foreground ${reveal}`}
              style={{ animationDelay: "140ms" }}
            >
              the résumé
              <br />
              <span className=" decoration-2">
                the job description
              </span>
              <br />
              asked for.
              <span
                aria-hidden="true"
                className={`ml-2 inline-block h-[0.85em] w-[0.45em] bg-foreground ${caret}`}
              />
            </h1>
            <p
              className={`max-w-md text-sm leading-relaxed text-muted-foreground ${reveal}`}
              style={{ animationDelay: "220ms" }}
            >
              Enter your career history once. Paste the jobs you want. Get a
              résumé built for each posting.
            </p>
          </section>

          <section className="space-y-4">
            <Eyebrow delay={300}>how it works</Eyebrow>
            <ul
              className={`divide-y divide-border border-y border-border ${reveal}`}
              style={{ animationDelay: "360ms" }}
            >
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="group flex items-baseline gap-4 py-3.5"
                >
                  <span className="shrink-0 border border-border px-1.5 py-0.5 text-[0.65rem] tracking-widest text-muted-foreground transition-colors duration-150 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    {step.n}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
                    <span className="text-foreground">{step.lead}</span>{" "}
                    {step.rest}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* divider */}
        <div
          aria-hidden="true"
          className="hidden bg-border lg:block lg:w-px lg:shrink-0"
        />

        {/* right — sign in */}
        <div className="mt-14 flex min-w-0 flex-col justify-center gap-5 lg:mt-0 lg:flex-1 lg:py-12 lg:pl-12">
          <Eyebrow delay={460}>get started</Eyebrow>
          <div
            className={`border border-border bg-foreground/[0.02] p-6 sm:p-8 ${reveal}`}
            style={{ animationDelay: "520ms" }}
          >
            <h2 className="text-base tracking-tight text-foreground sm:text-lg">
              sign in to continue
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Your workspace, résumés, and job list live here.
            </p>
            <GoogleButton className="mt-6" />
            <p className="mt-3.5 text-[0.65rem] leading-relaxed text-muted-foreground">
              By continuing you agree to the{" "}
              <a
                href="/terms"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Terms
              </a>{" "}
              &amp;{" "}
              <a
                href="/privacy"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer
        className={`relative z-10 shrink-0 border-t border-border ${reveal}`}
        style={{ animationDelay: "620ms" }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>© 2026 gethired</span>
          <span className="flex gap-5">
            <a
              href="/terms"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              terms
            </a>
            <a
              href="/privacy"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              privacy
            </a>
            <a
              href="/contact"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              contact
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
