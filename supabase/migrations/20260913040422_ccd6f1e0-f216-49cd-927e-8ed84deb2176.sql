CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  notes TEXT,
  page TEXT,
  campaign TEXT,
  whatsapp_clicked_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Owner can read enquiries" ON public.leads FOR SELECT TO authenticated USING (lower(auth.jwt() ->> 'email') = 'contact@wellhandled.in');
CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);