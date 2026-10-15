import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const partnerships = [
 {title:"Joint research and methods",body:"Work with universities, researchers and practitioners to investigate collection methods, quality control, lifecycle threats, secure processing and responsible use. Agree the questions, contributions, ethics review where needed, authorship and publication arrangements together."},
 {title:"Technical collaboration and co-delivery",body:"Combine complementary skills to build or improve capture systems, storage architectures, analytics workflows and security controls. Partners can contribute engineering, domain knowledge, implementation capacity or access to an agreed testing environment."},
 {title:"Sector and field partnerships",body:"Work with organisations that understand the context in which data is collected and used. Co-design practical protocols, pilot quality controls and validate whether outputs support real decisions. Any data access is separately authorised and governed."},
 {title:"Training and knowledge exchange",body:"Co-develop workshops, share methods and build capability in secure data handling, quality assurance, cybersecurity, governance and interpretation. Collaboration can take the form of staff time, teaching, facilities or technical expertise."},
];

export default function Partnerships() {
 return <>
  <Hero tag="Partnerships & Funding" title="Work together for trustworthy data." subtitle="Bring complementary expertise, shared research questions, implementation capacity or funding. We welcome partnerships that strengthen data quality, security and reliable use throughout the full lifecycle." actions={[{label:"Discuss a partnership",to:"/contact?service=Partnership%20enquiry"},{label:"Discuss funding",to:"/contact?service=Funding%20enquiry",variant:"outline"}]} />
  <Section><SplitSection eyebrow="Partnerships">
   <h2 className="text-2xl font-semibold mb-5" style={{color:"var(--dark-text)"}}>Collaboration starts with a shared purpose.</h2>
   <p className="leading-relaxed mb-5">A partnership can centre on knowledge, methods, technology, delivery or learning. A financial contribution is one possible form of support; it is not a requirement for exploring collaboration.</p>
   <p className="leading-relaxed">We are interested in the whole data pipeline: how information is collected and checked, stored and protected, processed and interpreted, used by systems and people, and eventually disposed of. The right partnership brings complementary strengths to a clearly defined problem.</p>
  </SplitSection></Section>
  <Section><SplitSection eyebrow="Ways to collaborate">
   <h2 className="text-2xl font-semibold mb-8" style={{color:"var(--dark-text)"}}>Contribute expertise. Build something useful together.</h2>
   <div className="space-y-8">{partnerships.map(x=><div key={x.title}><h3 className="text-lg font-semibold mb-3" style={{color:"var(--dark-text)"}}>{x.title}</h3><p className="leading-relaxed">{x.body}</p></div>)}</div>
  </SplitSection></Section>
  <Section><SplitSection eyebrow="Funding and sponsorship" reverse>
   <h2 className="text-2xl font-semibold mb-5" style={{color:"var(--dark-text)"}}>Support agreed programmes and shared outcomes.</h2>
   <p className="leading-relaxed mb-5">Grants, joint proposals and programme sponsorship can support research, pilots, tools, training or carefully governed datasets. We can explore consortium roles, technical delivery and co-designed proposals with institutions and funders.</p>
   <p className="leading-relaxed mb-5">Before accepting support, we agree the scope, budget, responsibilities, reporting, ownership and publication terms. Any open release depends on permissions, privacy, security and the suitability of the material. Funding arrangements should preserve clear methods and transparent reporting of findings.</p>
   <p className="leading-relaxed">For a defined organisational requirement, our <Link to="/consultancy" className="underline underline-offset-4" style={{color:"var(--orange)"}}>Consultancy and Services</Link> page sets out options for a scoped paid engagement.</p>
  </SplitSection></Section>
  <Section><SplitSection eyebrow="How we begin">
   <h2 className="text-2xl font-semibold mb-6" style={{color:"var(--dark-text)"}}>Agree the contribution and the responsibilities.</h2>
   <div className="space-y-6">{[
    ["Define a shared problem", "Explain the data, systems, people and decisions involved, and what each organisation hopes to achieve."],
    ["Identify complementary contributions", "Discuss expertise, time, facilities, technology, authorised data access or financial support. Set realistic commitments and decision-making roles."],
    ["Agree safeguards and ownership", "Document confidentiality, access, data protection, quality expectations, intellectual property, publication and conflict-management arrangements before work begins."],
    ["Start with a useful next step", "A scoping discussion, methods exchange, joint proposal or bounded pilot can establish whether the partnership is a good fit."]
   ].map(([title,body])=><div key={title}><h3 className="font-semibold mb-2" style={{color:"var(--dark-text)"}}>{title}</h3><p className="leading-relaxed">{body}</p></div>)}</div>
  </SplitSection></Section>
  <Section narrow className="text-center"><h2 className="text-2xl font-semibold mb-4">Tell us what we could do together.</h2><p className="leading-relaxed mb-7">Share your organisation's interests, the problem you want to explore and the contribution you have in mind. We can discuss collaboration, funding or a combination of both.</p><div className="flex flex-wrap gap-4 justify-center"><Link to="/contact?service=Partnership%20enquiry" className="rounded-lg px-6 py-3 font-semibold" style={{background:"var(--orange)",color:"#211711"}}>Explore a partnership</Link><Link to="/contact?service=Funding%20enquiry" className="rounded-lg border px-6 py-3" style={{borderColor:"var(--orange)",color:"var(--orange)"}}>Discuss funding</Link></div></Section>
 </>;
}
