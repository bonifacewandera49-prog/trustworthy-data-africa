CREATE TABLE public.content_collections (collection text PRIMARY KEY CHECK (collection IN ('courses','blog','team','opportunities','papers','datasets','reports')), initialized_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.content_collections TO anon, authenticated;
GRANT ALL ON public.content_collections TO service_role;
ALTER TABLE public.content_collections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public collection state" ON public.content_collections FOR SELECT TO anon,authenticated USING (true);
CREATE FUNCTION public.initialize_content_collection(_collection text, _entries jsonb) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
 IF NOT public.has_role(auth.uid(),'admin') THEN RAISE EXCEPTION 'Admin access required'; END IF;
 INSERT INTO public.content_collections(collection) VALUES (_collection) ON CONFLICT DO NOTHING;
 IF NOT FOUND THEN RETURN; END IF;
 INSERT INTO public.content_items(collection,slug,data,published)
 SELECT _collection, COALESCE(entry->'data'->>'slug',entry->'data'->>'id'),entry->'data',COALESCE((entry->>'published')::boolean,false) FROM jsonb_array_elements(_entries) entry;
END; $$;
REVOKE ALL ON FUNCTION public.initialize_content_collection(text,jsonb) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.initialize_content_collection(text,jsonb) TO authenticated;