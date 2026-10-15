import { useEffect, useState } from "react";
import { refreshContent } from "@/data/content";

export default function LiveContent({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(typeof window === "undefined");
  useEffect(() => {
    let active = true;
    refreshContent().finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);
  return ready ? children : <p role="status" className="p-8 text-muted-foreground">Loading…</p>;
}