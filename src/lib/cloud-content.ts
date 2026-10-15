import { supabase } from "@/integrations/supabase/client";
import { initialDrafts, type Entry } from "@/lib/content-editor";
import type { Json } from "@/integrations/supabase/types";

export async function loadEntries(collection:string):Promise<Entry[]> {
 if(collection==="events"){
  const {data,error}=await supabase.from("events").select("*").order("start_date");
  if(error)throw error;
  return (data||[]).map(row=>({key:row.id,published:row.published,data:row}));
 }
 const {error:initError}=await supabase.rpc("initialize_content_collection",{_collection:collection,_entries:initialDrafts()[collection] as unknown as Json});
 if(initError)throw initError;
 const {data,error}=await supabase.from("content_items").select("*").eq("collection",collection).order("created_at");
 if(error)throw error;
 return (data||[]).map(row=>({key:row.id,published:row.published,data:row.data as Entry["data"]}));
}
export async function saveEntry(collection:string,entry:Entry){
 if(collection==="events"){
  const d=entry.data;
  const {error}=await supabase.from("events").upsert({id:entry.key,slug:String(d.slug),title:String(d.title),description:String(d.description||""),cover_image:String(d.cover_image||"")||null,event_type:String(d.event_type||"Event"),location_type:String(d.location_type||"online"),location:String(d.location||"")||null,meeting_url:String(d.meeting_url||"")||null,start_date:String(d.start_date),end_date:String(d.end_date||"")||null,max_capacity:d.max_capacity===null||d.max_capacity===""?null:Number(d.max_capacity),is_free:!!d.is_free,registration_open:!!d.registration_open,require_approval:!!d.require_approval,published:entry.published,updated_at:new Date().toISOString()});
  if(error)throw error;
 }else{
  const {error}=await supabase.from("content_items").upsert({id:entry.key,collection,slug:String(entry.data.slug||entry.data.id),data:entry.data as Json,published:entry.published,updated_at:new Date().toISOString()});
  if(error)throw error;
 }
}
export async function deleteEntry(collection:string,key:string){
 const {error}=await supabase.from(collection==="events"?"events":"content_items").delete().eq("id",key);
 if(error)throw error;
}