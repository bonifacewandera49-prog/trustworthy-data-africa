import { Navigate, Link, useParams } from "react-router-dom";
import PracticeDetail from "@/components/PracticeDetail";
import Section from "@/components/Section";
import { researchPractices } from "@/data/practices";
export default function ActivityDetail(){
 const {slug}=useParams();
 if(slug==="quantum-machine-learning" || slug==="blockchain-emerging-technology") return <Navigate to="/work/emerging-technology-assessment" replace/>;
 const practice=researchPractices.find(p=>p.slug===slug);
 if(!practice)return <Section><h1>Service not found</h1><Link to="/work">View all services</Link></Section>;
 return <PracticeDetail practice={practice}/>;
}
