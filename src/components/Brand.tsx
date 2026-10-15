import { useId } from "react";
export default function Brand() {
 const id = `logo-ink-${useId().replace(/:/g, "")}`;
 return <span className="brand-artwork" role="img" aria-label="Solid Elf — Security and Data Research Firm">
  <svg className="brand-mark" viewBox="50 116 500 500" aria-hidden="true">
   <defs><filter id={id} colorInterpolationFilters="sRGB"><feColorMatrix result="ink" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -4 0 3.8" /><feFlood floodColor="currentColor" /><feComposite in2="ink" operator="in" /></filter></defs>
   <image href="/images/solid-elf-supplied.png" width="1584" height="672" filter={`url(#${id})`} />
  </svg>
  <span className="brand-wording" aria-hidden="true">
   <svg className="brand-wordmark" viewBox="580 205 960 220"><image href="/images/solid-elf-supplied.png" width="1584" height="672" filter={`url(#${id})`} /></svg>
   <span className="brand-descriptor">Security and Data Research Firm</span>
  </span>
 </span>;
}
