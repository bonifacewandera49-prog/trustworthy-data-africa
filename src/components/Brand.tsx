import logo from "/images/solid-elf-logo.png";

// Preserve the supplied symbol and wordmark; replace its baked-in "Lab" caption in layout.
export default function Brand() {
  return <span className="relative inline-block w-[185px] h-[59px] shrink-0" role="img" aria-label="Solid Elf — Security and Data Research Firm">
    <img src={logo} alt="" className="absolute inset-0 w-full h-full" style={{clipPath:"polygon(0 0,100% 0,100% 66%,33% 66%,33% 100%,0 100%)"}} />
    <span className="absolute left-[35.5%] top-[70%] whitespace-nowrap" style={{fontSize:"5.7px",lineHeight:1.2,color:"#d56940",fontWeight:600}}>Security and Data Research Firm</span>
  </span>;
}
