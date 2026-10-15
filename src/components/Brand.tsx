import { useId } from "react";
// Render the supplied artwork itself. The SVG filter removes only its light paper background.
export default function Brand() {
 const filterId = `brand-ink-${useId().replace(/:/g, "")}`;
 return <span className="brand-artwork" role="img" aria-label="Solid Elf — Security and Data Research Firm">
  <svg width="0" height="0" aria-hidden="true" className="absolute"><defs><filter id={filterId} colorInterpolationFilters="sRGB"><feColorMatrix result="inkMask" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -4 0 3.8" /><feFlood floodColor="currentColor" result="inkColor"/><feComposite in="inkColor" in2="inkMask" operator="in"/></filter></defs></svg>
  <img src="/images/solid-elf-supplied.png" alt="" style={{filter:`url(#${filterId})`}} />
 </span>;
}
