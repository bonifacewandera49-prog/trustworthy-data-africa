import snapshot from "./content-resolved.json";
const collections = new Map<string, unknown[]>();
const listeners = new Set<() => void>();
export function content<T>(collection:string, defaults:T[]):T[]{
 const records=(snapshot as Record<string,unknown>)[collection];
 const items=[...(Array.isArray(records)?records as T[]:defaults)];
 collections.set(collection,items);
 return items;
}
export function onContentChange(listener:()=>void){listeners.add(listener);}
export async function refreshContent(){
 const {supabase}=await import("@/integrations/supabase/client");
 const [states,items,events]=await Promise.all([
  supabase.from("content_collections").select("collection"),
  supabase.from("content_items").select("collection,data").eq("published",true).order("created_at"),
  supabase.from("events").select("*").eq("published",true).order("start_date")
 ]);
 if(states.error||items.error||events.error)throw new Error("Website content could not be loaded.");
 for(const {collection} of states.data||[]){const target=collections.get(collection);if(target)target.splice(0,target.length,...(items.data||[]).filter(r=>r.collection===collection).map(r=>r.data));}
 const target=collections.get("events");if(target)target.splice(0,target.length,...(events.data||[]));
 listeners.forEach(fn=>fn());
}
