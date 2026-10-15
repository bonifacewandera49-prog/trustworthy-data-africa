import { Link, useParams } from "react-router-dom";
import PracticeDetail from "@/components/PracticeDetail";
import Section from "@/components/Section";
import { consultancyPractices } from "@/data/practices";
export default function ConsultancyDetail(){
 const {slug}=useParams();const practice=consultancyPractices.find(p=>p.slug===slug);
 if(!practice)return <Section><h1>Consultancy service not found</h1><Link to="/consultancy">View consultancy services</Link></Section>;
 return <PracticeDetail practice={practice} consultancy/>;
}
