import logo from "/images/solid-elf-logo.png";
export default function Brand() {
 return <span className="brand" role="img" aria-label="Solid Elf — Security and Data Research Firm">
  <span className="brand-symbol"><img src={logo} alt="" /></span>
  <span className="brand-type"><span className="brand-name">Solid Elf</span><span className="brand-caption">Security and Data<br className="brand-caption-break" /> Research Firm</span></span>
 </span>;
}
