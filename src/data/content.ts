import snapshot from "./content-resolved.json";
export function content<T>(collection:string, defaults:T[]):T[]{const records=(snapshot as Record<string,unknown>)[collection];return Array.isArray(records)?records as T[]:defaults;}
