import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Well Handled" },
      { name: "description", content: "Owner sign in for the Well Handled enquiry dashboard." },
      { property: "og:title", content: "Sign in — Well Handled" },
      { property: "og:description", content: "Owner sign in for the Well Handled enquiry dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/dashboard", replace: true });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMessage(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + "/dashboard" },
      });
      setBusy(false);
      setMessage(
        error ? error.message : "Check your inbox and confirm your email, then sign in here.",
      );
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setMessage(error.message);
      return;
    }
    navigate({ to: "/dashboard", replace: true });
  };

  const field =
    "mt-2 w-full border border-border bg-background px-4 py-3 font-sans text-sm outline-none focus:border-foreground";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-16 text-foreground">
      <form onSubmit={onSubmit} className="w-full max-w-md border border-border bg-card p-7 sm:p-10">
        <Link to="/" className="font-display text-xl tracking-tight">
          Well Handled
        </Link>
        <h1 className="mt-6 font-display text-3xl tracking-tight">
          {mode === "signin" ? "Sign in" : "Create your account"}
        </h1>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          The enquiry dashboard is private to the owner account.
        </p>

        <label className="mt-7 block">
          <span className="eyebrow">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className={field}
          />
        </label>

        <label className="mt-5 block">
          <span className="eyebrow">Password</span>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            className={field}
          />
        </label>

        <button
          type="submit"
          disabled={busy}
          className="mt-7 w-full bg-foreground px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-background disabled:opacity-60"
        >
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
        </button>

        {message ? (
          <p className="mt-4 font-sans text-sm text-muted-foreground" role="status">
            {message}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-5 w-full text-center font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
        >
          {mode === "signin" ? "Need an account?" : "Already have an account?"}
        </button>
      </form>
    </div>
  );
}
