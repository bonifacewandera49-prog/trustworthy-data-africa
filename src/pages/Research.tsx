import ResourceIndex from "@/components/ResourceIndex";
import { papers } from "@/data/resources";
export default function Page(){return <ResourceIndex title="Research Papers" description="Research publications and proposed themes in security, data integrity and responsible technology. Check each record for its publication status and access link." items={papers}/>}
