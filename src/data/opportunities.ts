import { content } from "./content";
export const defaultOpportunities = [
  {
    "slug": "jobs",
    "category": "Jobs",
    "title": "Professional opportunities",
    "description": "Contribute specialist skills in secure data collection, quality assurance, analytics, privacy or cybersecurity.",
    "fit": "Experienced practitioners who can demonstrate careful methods, clear documentation and reliable delivery.",
    "items": [
      "Your areas of expertise and relevant experience",
      "A short portfolio or examples you are authorised to share",
      "Preferred working arrangements and availability"
    ],
    "status": "Expressions of interest",
    "service": "/consultancy",
    "open": false
  },
  {
    "slug": "fellowships",
    "category": "Fellowships",
    "title": "Research fellowship interests",
    "description": "Explore research questions across data integrity, security, responsible AI and the full data lifecycle.",
    "fit": "Researchers and graduates with a focused question, a rigorous approach and an interest in practical outcomes.",
    "items": [
      "A brief research interest or question",
      "Relevant research, methods or writing samples",
      "Your learning objectives and potential collaborators"
    ],
    "status": "Expressions of interest",
    "service": "/consultancy",
    "open": false
  },
  {
    "slug": "internships",
    "category": "Internships",
    "title": "Learning and internship interests",
    "description": "Express interest in structured learning in data quality, secure collection, analysis or digital safety.",
    "fit": "Students and early-career contributors interested in careful, ethical practice and supervised learning.",
    "items": [
      "Your course or learning background",
      "Skills you would like to develop",
      "Availability and any placement requirements"
    ],
    "status": "Expressions of interest",
    "service": "/consultancy",
    "open": false
  },
  {
    "slug": "contracts",
    "category": "Contracts",
    "title": "Consultant and supplier interests",
    "description": "Introduce your capabilities for scoped delivery, specialist assessments, training or research support.",
    "fit": "Independent consultants, delivery partners and suppliers with relevant evidence of capability.",
    "items": [
      "A concise capability statement",
      "Relevant delivery examples and available capacity",
      "Your proposed area of support; commercial details can follow privately"
    ],
    "status": "Expressions of interest",
    "service": "/consultancy",
    "open": false
  }
];

export const opportunities = content("opportunities", defaultOpportunities);
