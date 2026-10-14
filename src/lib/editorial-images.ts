const legacy: Record<string, string> = { "security-ops.jpg":"security", "canarydrop.jpg":"security", "hero-bg.jpg":"security", "data-lifecycle.jpg":"government", "qkabrine.jpg":"data", "fieldwork.jpg":"field", "team-working.jpg":"research", "about-research.jpg":"research", "default-thumbnail.jpg":"research", "sector-health.webp":"health", "sector-finance.webp":"finance", "sector-agriculture.webp":"agriculture" };
const allowed = new Set(["security","government","data","field","research","education","health","finance","agriculture"]);
export function editorialImage(source: string | null | undefined) {
 const name = source?.split("/").pop() || "";
 const key = legacy[name] || (source?.startsWith("/images/editorial/") ? name.replace(".webp", "") : "education");
 return `/images/editorial/${allowed.has(key) ? key : "education"}.webp`;
}
