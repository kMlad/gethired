import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function getRedirectPath(request: NextRequest) {
  const next = request.nextUrl.searchParams.get("next");

  if (next?.startsWith("/") && !next.startsWith("//")) {
    return next;
  }

  return "/dashboard";
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = code ? getRedirectPath(request) : "/";
  redirectTo.search = "";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      redirectTo.pathname = "/";
      redirectTo.searchParams.set("auth_error", "callback_failed");
    }
  }

  return NextResponse.redirect(redirectTo);
}
