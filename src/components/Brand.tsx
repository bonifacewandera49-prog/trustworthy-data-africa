import { useId } from "react";
export default function Brand() {
 const id="original-"+useId().replace(/:/g,"");
 return <span className="brand-artwork" role="img" aria-label="Solid Elf — Security and Data Research Firm"><svg viewBox="48 112 1496 504" aria-hidden="true" className="brand-original"><defs><filter id={id} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -1.5 0 1.5" /></filter></defs><image filter={`url(#${id})`} href="/images/solid-elf-supplied.png" width="1584" height="672" /></svg></span>;
}
