import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Enquiries — Well Handled" },
      { name: "description", content: "Every enquiry sent through the Well Handled site." },
      { property: "og:title", content: "Enquiries — Well Handled" },
      { property: "og:description", content: "Every enquiry sent through the Well Handled site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

type Lead = {
  id: string;
  service: string;
  name: string;
  email: string;
  notes: string | null;
  page: string | null;
  campaign: string | null;
  whatsapp_clicked_at: string | null;
  created_at: string;
};

function formatDate(value: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Lead[];
    },
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const leads = data ?? [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="font-display text-xl tracking-tight sm:text-2xl">
            Well Handled
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <span className="eyebrow">Enquiries</span>
        <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Your leads</h1>
        <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          Every brief sent from a service page, newest first — with the moment the WhatsApp chat was
          opened.
        </p>

        {isLoading ? (
          <p className="mt-10 font-sans text-sm text-muted-foreground">Loading…</p>
        ) : error ? (
          <p className="mt-10 font-sans text-sm text-destructive">
            These enquiries are only visible to the owner account (contact@wellhandled.in).
          </p>
        ) : leads.length === 0 ? (
          <p className="mt-10 font-sans text-sm text-muted-foreground">No enquiries yet.</p>
        ) : (
          <>
            {/* Table on wider screens */}
            <div className="mt-10 hidden overflow-x-auto border border-border md:block">
              <table className="w-full border-collapse text-left font-sans text-sm">
                <thead className="bg-secondary">
                  <tr>
                    {["Service", "Name", "Email", "Notes", "WhatsApp opened"].map((h) => (
                      <th key={h} className="whitespace-nowrap px-4 py-3 text-xs uppercase tracking-[0.16em]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-border align-top">
                      <td className="px-4 py-3">{lead.service}</td>
                      <td className="px-4 py-3">{lead.name}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${lead.email}`} className="underline">
                          {lead.email}
                        </a>
                      </td>
                      <td className="max-w-xs px-4 py-3 text-muted-foreground">{lead.notes || "—"}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {formatDate(lead.whatsapp_clicked_at ?? lead.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards on phones */}
            <div className="mt-10 grid gap-4 md:hidden">
              {leads.map((lead) => (
                <article key={lead.id} className="border border-border bg-card p-5">
                  <span className="eyebrow">{lead.service}</span>
                  <h2 className="mt-2 font-display text-2xl tracking-tight">{lead.name}</h2>
                  <a href={`mailto:${lead.email}`} className="mt-1 block font-sans text-sm underline">
                    {lead.email}
                  </a>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {lead.notes || "No notes"}
                  </p>
                  <p className="mt-3 font-sans text-xs text-muted-foreground">
                    WhatsApp opened: {formatDate(lead.whatsapp_clicked_at ?? lead.created_at)}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
