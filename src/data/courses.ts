import { content } from "./content";
export const defaultCourses = [
  {
    "slug": "cybersecurity-foundations",
    "title": "Cybersecurity & Digital Safety Foundations",
    "category": "Cybersecurity",
    "price": 300000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 12,
    "level": "Beginner",
    "description": "Build safer everyday habits and understand how identity, devices and data are exposed to threats.",
    "outcomes": [
      "Recognise common phishing and account takeover patterns",
      "Apply MFA, safe sharing and device protection principles",
      "Build a practical personal or small-team security checklist"
    ],
    "modules": [
      "Threats, assets and everyday risk",
      "Passwords, MFA and account recovery",
      "Endpoint protection, updates and secure sharing",
      "Phishing scenarios and a digital safety action plan"
    ],
    "prerequisites": "Basic computer and internet skills.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/cybersecurity-digital-safety",
    "image": "/images/editorial/safety-consultancy.webp",
    "reference": "https://www.nist.gov/cyberframework"
  },
  {
    "slug": "incident-response-readiness",
    "title": "Incident Response & Recovery Readiness",
    "category": "Cybersecurity",
    "price": 550000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 18,
    "level": "Intermediate",
    "description": "Practise triage, escalation and recovery planning through a bounded incident scenario.",
    "outcomes": [
      "Map incident roles and escalation decisions",
      "Build an evidence-aware response checklist",
      "Design a recovery exercise and evaluate dependencies"
    ],
    "modules": [
      "Preparation, asset context and incident ownership",
      "Triage, timelines and evidence handling",
      "Containment decisions and communications",
      "Restoration dependencies and tabletop exercise"
    ],
    "prerequisites": "Familiarity with IT operations, networks or information security.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/cybersecurity-digital-safety",
    "image": "/images/editorial/blog-recovery.webp",
    "reference": "https://www.nist.gov/cyberframework"
  },
  {
    "slug": "application-security-fundamentals",
    "title": "Application Security Assessment Fundamentals",
    "category": "Cybersecurity",
    "price": 650000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 24,
    "level": "Intermediate",
    "description": "Learn a structured approach to reviewing application risks in authorised training environments.",
    "outcomes": [
      "Scope an authorised assessment and define boundaries",
      "Recognise access control, input handling and configuration weaknesses",
      "Document findings and prioritise remediation"
    ],
    "modules": [
      "Assessment scope, ethics and threat modelling",
      "Identity, access control and session risks",
      "Input handling, configuration and dependency review",
      "Evidence, reporting, hardening and retesting"
    ],
    "prerequisites": "Basic understanding of web applications, HTTP and programming concepts.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/security-assessment-penetration-testing",
    "image": "/images/editorial/service-security.webp",
    "reference": "https://www.nist.gov/cyberframework"
  },
  {
    "slug": "secure-data-collection-quality",
    "title": "Secure Data Collection & Quality Control",
    "category": "Data analysis",
    "price": 350000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 12,
    "level": "Beginner",
    "description": "Design dependable collection workflows that protect participants and support reliable analysis.",
    "outcomes": [
      "Define a usable data dictionary and collection checks",
      "Identify missingness, duplication and inconsistent records",
      "Document secure handover, provenance and corrections"
    ],
    "modules": [
      "Purpose, instruments and collection methods",
      "Pilots, validation and systematic quality checks",
      "Secure transfer, access and field handling",
      "Cleaning log and analysis-ready handover"
    ],
    "prerequisites": "Basic spreadsheet skills; useful for researchers and field teams.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/secure-data-collection-quality-assurance",
    "image": "/images/editorial/collection-real.webp",
    "reference": "https://www.w3.org/TR/dwbp/"
  },
  {
    "slug": "qualitative-analysis-nvivo",
    "title": "Qualitative Data Analysis with NVivo",
    "category": "Data analysis",
    "price": 450000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 18,
    "level": "Beginner to intermediate",
    "description": "Move from qualitative source material to a transparent coding framework and defensible findings in NVivo.",
    "outcomes": [
      "Organise de-identified interviews and project sources",
      "Develop, refine and document a codebook",
      "Use queries and memos without losing context",
      "Report themes with an explicit audit trail"
    ],
    "modules": [
      "Qualitative design, source preparation and privacy",
      "Project setup, coding and codebook development",
      "Cases, attributes, memos and queries",
      "Theme review, interpretation and reporting"
    ],
    "prerequisites": "Basic qualitative research knowledge and access to a compatible, licensed NVivo installation. Software licences are not included.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/data-analytics-business-intelligence",
    "image": "/images/editorial/analytics-practice.webp",
    "reference": "https://lumivero.com/products/nvivo/"
  },
  {
    "slug": "qualitative-analysis-maxqda",
    "title": "Qualitative & Mixed Methods Analysis with MAXQDA",
    "category": "Data analysis",
    "price": 450000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 18,
    "level": "Beginner to intermediate",
    "description": "Organise qualitative evidence and connect coding with structured comparisons in MAXQDA.",
    "outcomes": [
      "Prepare sources and maintain traceable coding decisions",
      "Use document variables and coded-segment comparisons",
      "Connect qualitative themes with descriptive summaries",
      "Communicate findings and limitations responsibly"
    ],
    "modules": [
      "Research questions, data preparation and ethical handling",
      "Document organisation, coding and memos",
      "Variables, comparisons and mixed methods workflows",
      "Visual summaries, interpretation and export"
    ],
    "prerequisites": "Basic qualitative research knowledge and access to a compatible, licensed MAXQDA installation. Software licences are not included.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/data-analytics-business-intelligence",
    "image": "/images/editorial/data.webp",
    "reference": "https://www.maxqda.com/"
  },
  {
    "slug": "power-bi-analysis-dashboards",
    "title": "Data Analysis & Dashboards with Power BI",
    "category": "Data analysis",
    "price": 500000,
    "currency": "UGX",
    "priceConfirmed": false,
    "hours": 24,
    "level": "Beginner to intermediate",
    "description": "Turn messy tables into a documented data model and a clear, useful Power BI report.",
    "outcomes": [
      "Clean and reshape data with Power Query",
      "Build relationships and basic DAX measures",
      "Design accessible dashboards for specific decisions",
      "Review sharing, access and refresh assumptions"
    ],
    "modules": [
      "Data quality, Power Query and transformation logs",
      "Data models, relationships and DAX foundations",
      "Dashboard design, filters and interpretation",
      "Access, refresh, validation and presentation"
    ],
    "prerequisites": "Comfort with spreadsheets and a compatible computer running Power BI Desktop. Any paid Power BI service licences are separate.",
    "format": "Instructor-led; delivery format and session dates agreed before enrolment.",
    "includes": "Tuition, guided practice and course exercises. Software licences, travel and accommodation are not included. Confirm taxes and the final fee in your written quotation.",
    "service": "/consultancy/data-analytics-business-intelligence",
    "image": "/images/editorial/analytics-consultancy.webp",
    "reference": "https://learn.microsoft.com/en-us/power-bi/"
  }
];
export const courses = content("courses", defaultCourses);
