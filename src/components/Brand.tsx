import { useId } from "react";
export default function Brand() {
 const id = `logo-paper-${useId().replace(/:/g, "")}`;
 return <span className="brand-artwork">
  <svg viewBox="50 116 1490 500" role="img" aria-label="Solid Elf — Security and Data Research Firm" preserveAspectRatio="xMinYMid meet">
   <defs><filter id={id} colorInterpolationFilters="sRGB"><feColorMatrix result="ink" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -4 0 3.8" /><feFlood floodColor="currentColor" /><feComposite in2="ink" operator="in" /></filter></defs>
   <image href="/images/solid-elf-supplied.png" width="1584" height="672" filter={`url(#${id})`} />
  </svg>
 </span>;
}
