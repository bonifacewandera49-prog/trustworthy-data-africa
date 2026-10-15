import { content } from "./content";
export const resourceSlug = (title:string)=>title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
export const defaultResources = [
  {
    "slug": "differential-privacy-for-mobile-health-data-collection-in-low-resource-environments",
    "title": "Differential Privacy for Mobile Health Data Collection in Low-Resource Environments",
    "description": "Research direction exploring differential Privacy for Mobile Health Data Collection in Low-Resource Environments.",
    "category": "Privacy & Security",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "automated-quantum-circuit-search-for-hybrid-classical-quantum-classification",
    "title": "Automated Quantum Circuit Search for Hybrid Classical-Quantum Classification",
    "description": "Research direction exploring automated Quantum Circuit Search for Hybrid Classical-Quantum Classification.",
    "category": "Quantum Computing",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "phishing-ecosystem-dynamics-in-digital-payment-platforms",
    "title": "Phishing Ecosystem Dynamics in Digital Payment Platforms",
    "description": "Research direction exploring phishing Ecosystem Dynamics in Digital Payment Platforms.",
    "category": "Cybersecurity",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "synthetic-data-generation-for-smallholder-agricultural-yield-prediction",
    "title": "Synthetic Data Generation for Smallholder Agricultural Yield Prediction",
    "description": "Research direction exploring synthetic Data Generation for Smallholder Agricultural Yield Prediction.",
    "category": "Synthetic Data",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "cross-border-data-governance-frameworks-for-multi-jurisdiction-data-sharing",
    "title": "Cross-Border Data Governance Frameworks for Multi-Jurisdiction Data Sharing",
    "description": "Research direction exploring cross-Border Data Governance Frameworks for Multi-Jurisdiction Data Sharing.",
    "category": "Data Governance",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "explainable-ai-for-credit-scoring-in-resource-constrained-settings",
    "title": "Explainable AI for Credit Scoring in Resource-Constrained Settings",
    "description": "Research direction exploring explainable AI for Credit Scoring in Resource-Constrained Settings.",
    "category": "AI Fairness",
    "kind": "Research theme",
    "parent": "/research"
  },
  {
    "slug": "digital-wallet-transaction-patterns-synthetic",
    "title": "Digital Wallet Transaction Patterns (Synthetic)",
    "description": "Synthetic dataset modelled on real mobile money transaction patterns across varied transaction environments.",
    "category": "Synthetic",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "rural-health-facility-data-collection-protocols-dataset",
    "title": "Rural Health Facility Data Collection Protocols Dataset",
    "description": "Structured data from health facility surveys, including paper-to-digital translation examples.",
    "category": "Field Collected",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "phishing-corpus-multilingual-threat-vectors-targeting-institutions",
    "title": "Phishing Corpus: Multilingual Threat Vectors Targeting Institutions",
    "description": "Annotated collection of phishing materials targeting government and financial institutions.",
    "category": "Translated",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "smallholder-farming-yield-data-structured-anonymised",
    "title": "Smallholder Farming Yield Data: Structured & Anonymised",
    "description": "Cleaned agricultural yield data from smallholder farms across four study regions.",
    "category": "Field Collected",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "quantum-circuit-benchmark-suite-for-classification-tasks",
    "title": "Quantum Circuit Benchmark Suite for Classification Tasks",
    "description": "Standardised quantum circuit designs evaluated across multiple classification datasets.",
    "category": "Synthetic",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "government-portal-security-assessment-dataset",
    "title": "Government Portal Security Assessment Dataset",
    "description": "Anonymised security assessment results from government digital service portals across 12 countries.",
    "category": "Field Collected",
    "kind": "Dataset theme",
    "parent": "/datasets"
  },
  {
    "slug": "state-of-cybersecurity-threats-in-digital-financial-services-2025",
    "title": "State of Cybersecurity Threats in Digital Financial Services 2025",
    "description": "A comprehensive analysis of threat patterns affecting mobile money platforms, agent banking networks, and digital lending services across complex digital ecosystems.",
    "category": "Threat Intelligence",
    "kind": "Report theme",
    "parent": "/reports"
  },
  {
    "slug": "data-governance-framework-for-cross-border-health-information-sharing",
    "title": "Data Governance Framework for Cross-Border Health Information Sharing",
    "description": "Proposed governance structures and technical protocols for secure health data exchange between organisations and jurisdictions.",
    "category": "Data Governance",
    "kind": "Report theme",
    "parent": "/reports"
  },
  {
    "slug": "fairness-auditing-of-automated-credit-scoring-systems",
    "title": "Fairness Auditing of Automated Credit Scoring Systems",
    "description": "A reporting theme covering evaluation of algorithmic lending systems in consumer and small-business contexts.",
    "category": "AI Fairness",
    "kind": "Report theme",
    "parent": "/reports"
  },
  {
    "slug": "quantum-ml-readiness-assessment-for-research-institutions",
    "title": "Quantum ML Readiness Assessment for Research Institutions",
    "description": "An evaluation of infrastructure, skills, and research priorities for quantum machine learning adoption.",
    "category": "Quantum Computing",
    "kind": "Report theme",
    "parent": "/reports"
  },
  {
    "slug": "mobile-data-collection-security-a-field-practitioner-s-guide",
    "title": "Mobile Data Collection Security: A Field Practitioner's Guide",
    "description": "Practical guidance for securing data collection in low-connectivity, low-resource environments.",
    "category": "Field Security",
    "kind": "Report theme",
    "parent": "/reports"
  },
  {
    "slug": "synthetic-data-generation-methods-for-healthcare-privacy",
    "title": "Synthetic Data Generation Methods for Healthcare Privacy",
    "description": "Technical methodology and validation results for generating privacy-preserving synthetic health datasets.",
    "category": "Privacy Engineering",
    "kind": "Report theme",
    "parent": "/reports"
  }
];

export interface Resource {slug:string;title:string;description:string;category:string;kind:string;parent:string;status:string;file:string;body:string;}
const prepare=(kind:string)=>defaultResources.filter(r=>r.kind===kind).map(r=>({...r,status:"Proposed theme",file:"",body:""}));
export const papers=content<Resource>("papers",prepare("Research theme"));
export const datasets=content<Resource>("datasets",prepare("Dataset theme"));
export const reports=content<Resource>("reports",prepare("Report theme"));
export const resources:Resource[]=[...papers,...datasets,...reports];
