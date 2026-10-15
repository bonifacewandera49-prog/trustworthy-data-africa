CREATE TABLE public.content_items (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 collection text NOT NULL CHECK (collection IN ('courses','blog','team','opportunities','papers','datasets','reports')),
 slug text NOT NULL,
 data jsonb NOT NULL DEFAULT '{}'::jsonb,
 published boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(collection,slug)
);
GRANT SELECT ON public.content_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_items TO authenticated;
GRANT ALL ON public.content_items TO service_role;
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published content is public" ON public.content_items FOR SELECT TO anon,authenticated USING (published);
CREATE POLICY "Admins manage website content" ON public.content_items FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE FUNCTION public.touch_content_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at=now(); RETURN NEW; END; $$;
CREATE TRIGGER content_updated_at BEFORE UPDATE ON public.content_items FOR EACH ROW EXECUTE FUNCTION public.touch_content_updated_at();