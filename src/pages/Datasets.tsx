import ResourceIndex from "@/components/ResourceIndex";
import { datasets } from "@/data/resources";
export default function Page(){return <ResourceIndex title="Datasets" description="Explore field-collected, translated and synthetic data themes and releases. Each page describes status and available documentation." items={datasets}/>}
