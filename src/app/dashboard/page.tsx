import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/");
  }

  const email =
    typeof data.claims.email === "string" ? data.claims.email : "your account";

  return (
    <main className="flex min-h-dvh flex-col bg-background px-6 py-10 font-mono text-foreground sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8">
        <header className="border-b border-border pb-4">
          <span className="text-sm tracking-tight">gethired_</span>
        </header>
        <section className="flex flex-1 flex-col justify-center gap-4">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            dashboard
          </p>
          <h1 className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight tracking-tight">
            signed in as {email}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Your résumé workspace will live here.
          </p>
        </section>
      </div>
    </main>
  );
}
