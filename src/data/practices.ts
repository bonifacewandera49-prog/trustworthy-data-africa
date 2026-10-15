export interface Practice {
 slug:string; title:string; tagline:string; overview:string; desc:string; image:string;
 fit:string[]; capabilities:string[]; outputs:string[]; approach:{title:string;body:string}[];
 scenario:string; related:{to:string;label:string}[]; article:string;
}
export const researchPractices: Practice[] = [
  {
    "slug": "data-collection-translation-integrity",
    "title": "Data Collection, Translation & Integrity",
    "tagline": "From the field to the database, accurately and securely.",
    "overview": "Data enters systems through USSD, SMS, paper records, field enumerators, community networks, and informal channels. Each channel introduces its own risks of error, loss, and unauthorised access. We design secure collection protocols, translate and structure data from hard-to-use sources, and train field teams to maintain integrity from the point of first capture.",
    "desc": "From the field to the database, accurately and securely.",
    "image": "/images/editorial/collection-real.webp",
    "fit": [
      "You collect information through several channels.",
      "Field teams need an offline or low-connectivity workflow.",
      "Records need cleaning, translation or verification before analysis."
    ],
    "capabilities": [
      "Design secure data collection protocols for low-resource and low-connectivity environments",
      "Translate and structure data from paper, audio, and unstructured digital sources",
      "Build verification pipelines that catch errors before they propagate",
      "Train field teams on secure collection, handling, and transmission practices",
      "Assess data quality and integrity across multi-channel ingestion systems"
    ],
    "outputs": [
      "Collection protocol and data dictionary",
      "Validation rules and an exception log",
      "Documented transfer and access controls",
      "Field-team guidance and handover notes"
    ],
    "approach": [
      {
        "title": "Design the collection",
        "body": "Define the question, required fields, consent workflow and minimum information needed. Consider participant safety, device loss and the conditions in which a field team works."
      },
      {
        "title": "Validate at the source",
        "body": "Pilot the form and translation process. Check required fields, range rules, duplicate records and inconsistencies while a correction is still possible."
      },
      {
        "title": "Preserve the evidence",
        "body": "Document transformations, quality flags and access decisions. Plan safe transfer, reconciliation and retention so later analysis can trace a record back to its source."
      }
    ],
    "scenario": "A programme receives paper forms and mobile submissions from several locations. A useful engagement would map both routes, pilot a common schema, reconcile duplicates and document how uncertain values are handled before a reporting dataset is produced.",
    "related": [
      {
        "to": "/consultancy/bespoke-tool-development",
        "label": "Secure Tools & Data Product Development"
      },
      {
        "to": "/consultancy/data-analytics-business-intelligence",
        "label": "Data Analytics & Business Intelligence"
      }
    ],
    "article": "/blog/data-governance-operating-model"
  },
  {
    "slug": "cybersecurity-threat-intelligence",
    "title": "Cybersecurity & Threat Intelligence",
    "tagline": "Understanding threats before they reach your systems.",
    "overview": "Security threats affecting organisations follow distinct patterns shaped by local platforms, languages, and social engineering methods. We gather intelligence on these patterns, develop tools calibrated to the threats we observe, and deliver training that prepares teams to recognise and respond.",
    "desc": "Understanding threats before they reach your systems.",
    "image": "/images/editorial/cyber-real.webp",
    "fit": [
      "You need a clearer view of threats to your services.",
      "Alerts are frequent but difficult to prioritise.",
      "Teams need practical detection and response guidance."
    ],
    "capabilities": [
      "Monitor and analyse phishing and social engineering campaigns targeting organisations and digital services",
      "Develop threat intelligence feeds calibrated to local attack patterns",
      "Develop and deploy breach detection tooling for early warning",
      "Conduct adversarial testing and security assessments",
      "Deliver threat awareness training for teams and organisations"
    ],
    "outputs": [
      "Threat model and prioritised exposure map",
      "Detection use cases and evidence requirements",
      "Response recommendations and escalation paths",
      "A practical security improvement backlog"
    ],
    "approach": [
      {
        "title": "Understand the exposure",
        "body": "Map critical services, identities, third parties and routes to sensitive information. Prioritise threats that could interrupt operations or harm the people relying on a service."
      },
      {
        "title": "Validate the signals",
        "body": "Review the available telemetry and test agreed detection scenarios. Separate observed evidence from assumptions, and identify where missing logs limit confidence."
      },
      {
        "title": "Make response usable",
        "body": "Connect findings to clear actions, accountable owners and escalation decisions. Review how the team will recognise a similar event and what information responders will need."
      }
    ],
    "scenario": "A digital service receives suspicious account-access alerts. The work could connect identity events with application activity, distinguish routine behaviour from meaningful anomalies and define escalation conditions without collecting unnecessary personal information.",
    "related": [
      {
        "to": "/consultancy/security-assessment-penetration-testing",
        "label": "Security Assessment & Penetration Testing"
      },
      {
        "to": "/consultancy/cybersecurity-digital-safety",
        "label": "Cybersecurity Strategy & Digital Safety"
      }
    ],
    "article": "/blog/incident-response-first-hour"
  },
  {
    "slug": "privacy-engineering-data-protection",
    "title": "Privacy Engineering & Data Protection",
    "tagline": "Making data protection legislation practically enforceable.",
    "overview": "Data protection legislation exists in most jurisdictions, but translating legal requirements into engineering decisions is a specialised challenge. We help organisations bridge that gap through synthetic data generation, differential privacy, secure computation, and compliance frameworks that work in real-world infrastructure.",
    "desc": "Making data protection legislation practically enforceable.",
    "image": "/images/editorial/activity-privacy.webp",
    "fit": [
      "Sensitive information moves between several systems.",
      "A new product needs privacy controls from the start.",
      "Teams need useful analysis without unnecessary disclosure."
    ],
    "capabilities": [
      "Design privacy-preserving data systems that support required privacy controls",
      "Implement differential privacy and synthetic data generation pipelines",
      "Develop secure computation protocols for sensitive data analysis",
      "Create compliance frameworks and data protection impact assessments",
      "Train engineering teams on privacy-by-design principles"
    ],
    "outputs": [
      "Data-flow and exposure assessment",
      "Privacy control design and trade-off record",
      "Evaluation plan for privacy-enhancing methods",
      "Implementation and review guidance"
    ],
    "approach": [
      {
        "title": "Map information and harm",
        "body": "Identify what is collected, whose information it is, how it moves and where unnecessary exposure can occur. Include retention, secondary use and third-party access."
      },
      {
        "title": "Choose proportionate controls",
        "body": "Compare minimisation, access restrictions, aggregation and privacy-enhancing approaches against the intended use. Document utility limits and residual disclosure risks."
      },
      {
        "title": "Evaluate the design",
        "body": "Test the proposed workflow with representative, appropriately authorised data. Record assumptions and establish review points when the data, users or purpose change."
      }
    ],
    "scenario": "A research team wants to share an analytical dataset. The work could compare aggregate outputs and synthetic alternatives, evaluate disclosure and usefulness, and document restrictions rather than assume that removing names makes the information safe.",
    "related": [
      {
        "to": "/consultancy/privacy-engineering-compliance",
        "label": "Privacy Engineering & Compliance Support"
      },
      {
        "to": "/consultancy/data-strategy-governance",
        "label": "Data Strategy & Governance"
      }
    ],
    "article": "/blog/synthetic-data-privacy"
  },
  {
    "slug": "ai-machine-learning-fairness",
    "title": "AI, Machine Learning & Fairness",
    "tagline": "Models that work for everyone they affect.",
    "overview": "We build models suited to diverse data conditions, where data is sparse, biased, or incomplete, and develop interpretability tools so organisations can understand and explain automated decisions. Our fairness audits identify disparities in model outcomes across demographic groups, and we work with teams to address them.",
    "desc": "Models that work for everyone they affect.",
    "image": "/images/editorial/activity-ai.webp",
    "fit": [
      "A model supports decisions that affect people.",
      "Training data is incomplete or unrepresentative.",
      "A team needs evidence before deploying a model."
    ],
    "capabilities": [
      "Build machine learning models for resource-constrained data environments",
      "Conduct independent fairness audits of automated decision-making systems",
      "Develop interpretability tools that explain model decisions to non-technical stakeholders",
      "Design bias mitigation strategies for production ML systems",
      "Advise on responsible AI deployment practices"
    ],
    "outputs": [
      "Evaluation dataset and metric definitions",
      "Performance and subgroup assessment",
      "Documented limitations and improvement options",
      "Monitoring and human-review recommendations"
    ],
    "approach": [
      {
        "title": "Define the decision",
        "body": "Clarify how the output will be used, who may be affected and which errors matter. Establish a simple baseline and agree the conditions under which the model should not be used."
      },
      {
        "title": "Evaluate across conditions",
        "body": "Assess data quality, leakage, overall performance and relevant subgroup differences. Describe uncertainty and data gaps rather than treating a single score as proof of suitability."
      },
      {
        "title": "Plan responsible operation",
        "body": "Document oversight, monitoring and escalation. Identify the circumstances that should trigger retraining, additional human review or withdrawal of the model."
      }
    ],
    "scenario": "A team is considering a model to prioritise support requests. An evaluation could compare it with a transparent baseline, examine missed urgent cases and test whether performance changes across relevant user groups before any rollout.",
    "related": [
      {
        "to": "/consultancy/ai-fairness-interpretability-audits",
        "label": "AI Safety, Fairness & Interpretability Audits"
      },
      {
        "to": "/consultancy/data-analytics-business-intelligence",
        "label": "Data Analytics & Business Intelligence"
      }
    ],
    "article": "/blog/responsible-ai-assurance"
  },
  {
    "slug": "emerging-technology-assessment",
    "title": "Quantum, Blockchain & Emerging Technology",
    "tagline": "Evidence before adoption.",
    "overview": "We assess quantum machine learning, blockchain and other emerging technologies against practical needs. Technical novelty is only one consideration: security, safety, governance, resource requirements and maintainability determine whether an approach is suitable.",
    "desc": "Evidence before adoption.",
    "image": "/images/editorial/activity-quantum.webp",
    "fit": [
      "A proposed technology needs an independent feasibility review.",
      "Claims of quantum advantage need a credible baseline.",
      "A blockchain proposal needs a security and governance assessment."
    ],
    "capabilities": [
      "Evaluate quantum circuit architectures and hybrid classical\u2013quantum workflows",
      "Compare quantum machine learning with credible classical baselines",
      "Assess distributed-ledger trust, key management and governance models",
      "Review security, feasibility and operational costs of emerging systems"
    ],
    "outputs": [
      "Use-case and alternatives assessment",
      "Benchmark design and reproducible comparison",
      "Security, safety and governance risk register",
      "A practical adopt, pilot or defer recommendation"
    ],
    "approach": [
      {
        "title": "Start with the requirement",
        "body": "Define the operational problem before choosing a technology. Compare conventional databases, classical algorithms and existing controls with the proposed alternative."
      },
      {
        "title": "Test the central claim",
        "body": "For quantum machine learning, examine encoding, hybrid workflows, hardware constraints and fair classical baselines. For blockchain, examine trust assumptions, key management, transaction costs and governance."
      },
      {
        "title": "Decide with the limitations visible",
        "body": "Assess feasibility, maintainability, security and the evidence still missing. Recommend a bounded pilot only when it can answer a useful question; document when a simpler approach is preferable."
      }
    ],
    "scenario": "An organisation is considering a distributed ledger while a research team is exploring quantum-assisted optimisation. Both require explicit success criteria and conventional baselines, but their experiments differ. One examines shared trust and governance; the other examines computational performance and realistic resource costs.",
    "related": [
      {
        "to": "/consultancy/bespoke-tool-development",
        "label": "Secure Tools & Data Product Development"
      },
      {
        "to": "/consultancy/security-assessment-penetration-testing",
        "label": "Security Assessment & Penetration Testing"
      }
    ],
    "article": "/blog/security-review-before-launch"
  },
  {
    "slug": "interpretability-explainability",
    "title": "Interpretability & Explainability",
    "tagline": "Understanding how systems reach their conclusions.",
    "overview": "When organisations deploy systems that make consequential decisions, they need to understand and explain how those systems reach their conclusions. We develop interpretability tools, conduct explainability audits, and create documentation frameworks that make automated decisions transparent to affected communities and regulatory bodies.",
    "desc": "Understanding how systems reach their conclusions.",
    "image": "/images/editorial/activity-explain.webp",
    "fit": [
      "Decision-makers cannot explain how a model is used.",
      "Users need understandable reasons and review routes.",
      "Technical explanations need validation and documentation."
    ],
    "capabilities": [
      "Develop interpretability tools for complex ML models",
      "Conduct explainability audits of production systems",
      "Create model documentation frameworks (model cards, Datasheets for Datasets)",
      "Design human-readable explanations for automated decisions",
      "Advise on regulatory requirements for AI transparency"
    ],
    "outputs": [
      "Explanation needs and audience map",
      "Assessment of selected explanation methods",
      "Model documentation and known limitations",
      "Human-review and communication guidance"
    ],
    "approach": [
      {
        "title": "Identify the audience",
        "body": "Separate what engineers, operators, reviewers and affected users need to understand. An explanation should answer a defined question rather than merely display a chart."
      },
      {
        "title": "Test the explanation",
        "body": "Check consistency and sensitivity to changes in the inputs or model. Distinguish an association in a prediction from evidence that changing a feature will cause a real-world outcome."
      },
      {
        "title": "Support human decisions",
        "body": "Place explanations alongside uncertainty, limitations and review procedures. Document how someone can question a result and who has authority to change the decision."
      }
    ],
    "scenario": "A model flags transactions for review. Analysts may need relevant contributing signals, while a customer needs an understandable explanation and a route to correction. The design should serve both audiences without exposing sensitive detection logic unnecessarily.",
    "related": [
      {
        "to": "/consultancy/ai-fairness-interpretability-audits",
        "label": "AI Safety, Fairness & Interpretability Audits"
      },
      {
        "to": "/consultancy/data-analytics-business-intelligence",
        "label": "Data Analytics & Business Intelligence"
      }
    ],
    "article": "/blog/responsible-ai-assurance"
  },
  {
    "slug": "data-governance-policy",
    "title": "Data Governance & Policy",
    "tagline": "Frameworks that govern data responsibly.",
    "overview": "Our work examines how data governance policy can be translated into practice. Our work spans cross-border data sharing, sovereign data strategies, compliance frameworks, and the governance of AI systems, always grounded in the realities of implementation.",
    "desc": "Frameworks that govern data responsibly.",
    "image": "/images/editorial/activity-governance.webp",
    "fit": [
      "Important datasets have unclear owners.",
      "Access, sharing and retention decisions are inconsistent.",
      "Policy needs to become a workable operating process."
    ],
    "capabilities": [
      "Research cross-border data governance frameworks for cross-border and multi-jurisdiction environments",
      "Develop sovereign data strategy recommendations for governments",
      "Analyse compliance requirements across jurisdictions",
      "Design governance frameworks for AI and automated systems",
      "Engage with policymakers to translate research into actionable policy"
    ],
    "outputs": [
      "Ownership and decision-rights model",
      "Data inventory and lifecycle responsibilities",
      "Access, quality and retention guidance",
      "Governance review and exception process"
    ],
    "approach": [
      {
        "title": "Understand the current practice",
        "body": "Trace a small number of valuable datasets through collection, use, sharing and disposal. Identify where decisions are informal and where policy differs from daily work."
      },
      {
        "title": "Assign workable responsibilities",
        "body": "Define owners, stewards and approval routes. Keep rules proportionate to sensitivity and purpose, and provide a documented way to handle exceptions."
      },
      {
        "title": "Measure adoption",
        "body": "Choose useful checks such as unresolved quality issues, overdue access reviews and retention exceptions. Review the framework when systems or responsibilities change."
      }
    ],
    "scenario": "A reporting dataset is copied between departments without a clear owner. The work could establish a trusted source, a named steward, a change process and practical sharing rules so analytics teams can use consistent information safely.",
    "related": [
      {
        "to": "/consultancy/data-strategy-governance",
        "label": "Data Strategy & Governance"
      },
      {
        "to": "/consultancy/privacy-engineering-compliance",
        "label": "Privacy Engineering & Compliance Support"
      }
    ],
    "article": "/blog/data-governance-operating-model"
  },
  {
    "slug": "data-analytics-insights",
    "title": "Data Analytics & Decision Intelligence",
    "tagline": "Turn reliable data into decisions you can explain.",
    "overview": "We connect data preparation, statistical analysis, visualisation and decision support. Our work makes the quality of the evidence visible, helps teams interpret trends responsibly and produces analytical workflows that can be reviewed and repeated. Security and privacy are built into the handling of the data.",
    "desc": "Turn reliable data into decisions you can explain.",
    "image": "/images/editorial/analytics-practice.webp",
    "fit": [
      "You have data but no dependable decision-making view.",
      "Reporting relies on disconnected spreadsheets.",
      "You need to understand trends, uncertainty and performance."
    ],
    "capabilities": [
      "Clean, reconcile and profile data from multiple sources",
      "Conduct exploratory and statistical analysis",
      "Develop dashboards, metrics and reporting workflows",
      "Evaluate forecasting and predictive approaches against useful baselines"
    ],
    "outputs": [
      "Clean, documented analytical dataset",
      "Agreed metrics and an analysis plan",
      "Dashboards or reproducible analytical reports",
      "Interpretation, limitations and handover guidance"
    ],
    "approach": [
      {
        "title": "Frame the question",
        "body": "Define the business or research decision, the audience and the action an answer could support. Agree metric definitions and check whether the available data can answer the question."
      },
      {
        "title": "Build a reliable analysis",
        "body": "Profile missing values, duplicates, sampling gaps and unusual records. Use exploratory, statistical or predictive methods appropriate to the evidence, with comparisons and uncertainty made explicit."
      },
      {
        "title": "Turn results into decisions",
        "body": "Design clear dashboards and reports with traceable definitions. Explain limitations, set review routines and transfer the analytical workflow so results remain usable after handover."
      }
    ],
    "scenario": "A service team wants to understand delays across several locations. An analysis could reconcile event timestamps, compare completion times and identify where data coverage is weak. A dashboard would then show reliable measures and support specific operational follow-up rather than simply display more charts.",
    "related": [
      {
        "to": "/consultancy/data-analytics-business-intelligence",
        "label": "Data Analytics & Business Intelligence"
      },
      {
        "to": "/consultancy/data-strategy-governance",
        "label": "Data Strategy & Governance"
      }
    ],
    "article": "/blog/data-governance-operating-model"
  },
  {
    "slug": "training-capacity-building",
    "title": "Training, Security Awareness & Capacity Building",
    "tagline": "Building the teams that sustain the work.",
    "overview": "Every training programme is built from our active research and tailored to participant contexts. We cover cybersecurity, privacy engineering, safe data collection, threat awareness, and responsible AI, delivering practical skills that teams can apply immediately.",
    "desc": "Building the teams that sustain the work.",
    "image": "/images/editorial/activity-training.webp",
    "fit": [
      "Staff need safer everyday digital habits.",
      "Engineers need practical security or privacy skills.",
      "Teams need to rehearse difficult response decisions."
    ],
    "capabilities": [
      "Design and deliver cybersecurity training for teams and organisations",
      "Build privacy engineering capacity through hands-on workshops",
      "Train field teams on secure data collection and handling",
      "Develop threat awareness programmes calibrated to local attack patterns",
      "Create self-paced learning materials and documentation"
    ],
    "outputs": [
      "Role-specific learning plan",
      "Facilitated exercises and practical materials",
      "Learning assessment and feedback",
      "Follow-up actions and reference guidance"
    ],
    "approach": [
      {
        "title": "Start with the roles",
        "body": "Understand the tasks participants perform and the risks they encounter. Set clear learning goals for staff, technical teams or decision-makers rather than use one syllabus for everyone."
      },
      {
        "title": "Practise realistic situations",
        "body": "Use bounded exercises such as suspicious-message reporting, access reviews, safe data handling or incident coordination. Create an environment where people can ask questions without blame."
      },
      {
        "title": "Support continued use",
        "body": "Review what participants can do after the session. Provide concise reference materials, agree follow-up actions and identify the internal owners who will sustain the practice."
      }
    ],
    "scenario": "A mixed team needs to improve its response to suspicious requests. Staff can practise checking and reporting messages while administrators rehearse account recovery and escalation. Each group learns the actions relevant to its role, using the same response process.",
    "related": [
      {
        "to": "/consultancy/custom-training-programmes",
        "label": "Security, Safety & Data Training"
      },
      {
        "to": "/consultancy/cybersecurity-digital-safety",
        "label": "Cybersecurity Strategy & Digital Safety"
      }
    ],
    "article": "/blog/phishing-resistant-mfa-rollout"
  }
];
export const consultancyPractices: Practice[] = [
  {
    "slug": "security-assessment-penetration-testing",
    "title": "Security Assessment & Penetration Testing",
    "tagline": "Know your vulnerabilities before attackers do.",
    "overview": "We conduct comprehensive security evaluations of data infrastructure, applications, and workflows. Our assessments combine automated scanning with manual adversarial testing to identify vulnerabilities that tools alone cannot find. Every engagement produces a clear, prioritised remediation roadmap.",
    "desc": "Know your vulnerabilities before attackers do.",
    "image": "/images/editorial/service-security.webp",
    "fit": [
      "An application or integration is approaching launch.",
      "You need to validate exposure after a major change.",
      "Security findings need independent prioritisation."
    ],
    "capabilities": [
      "Conduct full infrastructure and application penetration tests",
      "Perform adversarial testing calibrated to local threat patterns",
      "Assess data handling workflows for security gaps",
      "Evaluate third-party integrations and supply chain risks",
      "Deliver actionable remediation reports with prioritised recommendations"
    ],
    "outputs": [
      "Agreed scope and rules of engagement",
      "Evidence-backed technical findings",
      "Executive risk summary and remediation plan",
      "Retest findings where included in scope"
    ],
    "approach": [
      {
        "title": "Scope safely",
        "body": "Agree written authorisation, in-scope systems, access, testing windows, operational contacts and stop conditions. Identify fragile systems and the business activities that must remain available."
      },
      {
        "title": "Test and validate",
        "body": "Combine relevant tooling with manual review of authentication, authorisation, configuration and application behaviour. Confirm findings carefully within the agreed boundaries and communicate urgent issues promptly."
      },
      {
        "title": "Prioritise and verify",
        "body": "Explain plausible impact, affected assets and practical remediation. Review findings with the people responsible for fixing them and agree any retesting needed to confirm the changes."
      }
    ],
    "scenario": "A customer portal is preparing for release. A focused assessment could examine account separation, document access, administrative permissions and critical integrations, then provide a prioritised release checklist and a bounded retest.",
    "related": [
      {
        "to": "/work/cybersecurity-threat-intelligence",
        "label": "Cybersecurity & Threat Intelligence"
      },
      {
        "to": "/work/privacy-engineering-data-protection",
        "label": "Privacy Engineering & Data Protection"
      }
    ],
    "article": "/blog/api-authorization-beyond-login"
  },
  {
    "slug": "cybersecurity-digital-safety",
    "title": "Cybersecurity Strategy & Digital Safety",
    "tagline": "Protect your systems. Support the people who depend on them.",
    "overview": "We help organisations turn cybersecurity and digital safety into everyday practice. The work connects technical controls with identity protection, safer information handling, incident readiness and staff confidence. Engagements are scoped to the organisation\u2019s risks and resources.",
    "desc": "Protect your systems. Support the people who depend on them.",
    "image": "/images/editorial/safety-consultancy.webp",
    "fit": [
      "Security responsibilities and priorities are unclear.",
      "Staff face phishing, impersonation or account-takeover risks.",
      "You need to prepare for disruption and incidents."
    ],
    "capabilities": [
      "Assess security posture and organisational risk",
      "Improve identity, access and account-recovery practices",
      "Design phishing, impersonation and digital-safety guidance",
      "Develop incident playbooks and facilitate tabletop exercises"
    ],
    "outputs": [
      "Practical security and digital-safety roadmap",
      "Identity, device and information-handling priorities",
      "Incident roles and escalation playbook",
      "Tabletop exercise findings and improvement actions"
    ],
    "approach": [
      {
        "title": "Understand what needs protecting",
        "body": "Map critical services, sensitive information and the people exposed to harm. Review identity, devices, suppliers, account recovery and everyday communication practices."
      },
      {
        "title": "Build a proportionate plan",
        "body": "Prioritise improvements such as stronger sign-in, safer sharing, access reviews, backup verification and clear reporting routes. Define owners and dependencies so the plan can be implemented."
      },
      {
        "title": "Rehearse the response",
        "body": "Walk through a relevant incident with operational and leadership teams. Test decisions, trusted communications and recovery dependencies, then turn the gaps into a practical improvement backlog."
      }
    ],
    "scenario": "A small organisation is concerned about executive impersonation and account compromise. The engagement could review verification procedures, administrative access and recovery paths, then rehearse how a suspicious request is reported and contained. The focus is safer decisions and workable controls.",
    "related": [
      {
        "to": "/work/cybersecurity-threat-intelligence",
        "label": "Cybersecurity & Threat Intelligence"
      },
      {
        "to": "/work/training-capacity-building",
        "label": "Training, Security Awareness & Capacity Building"
      }
    ],
    "article": "/blog/incident-response-first-hour"
  },
  {
    "slug": "privacy-engineering-compliance",
    "title": "Privacy Engineering & Compliance Support",
    "tagline": "From legal requirement to engineering reality.",
    "overview": "Data protection legislation exists in most jurisdictions, but translating legal requirements into engineering decisions is a specialised challenge. We bridge that gap by designing privacy-preserving systems, implementing differential privacy and synthetic data generation, and creating compliance frameworks that work in real-world infrastructure.",
    "desc": "From legal requirement to engineering reality.",
    "image": "/images/editorial/service-privacy.webp",
    "fit": [
      "A product processes personal or sensitive information.",
      "Privacy requirements need translating into controls.",
      "You need to assess a new sharing or analysis workflow."
    ],
    "capabilities": [
      "Map legal requirements to specific engineering controls",
      "Implement differential privacy and synthetic data pipelines",
      "Design secure computation protocols for sensitive analysis",
      "Create data protection impact assessments (DPIAs)",
      "Train engineering teams on privacy-by-design principles"
    ],
    "outputs": [
      "Data-flow and privacy risk assessment",
      "Control recommendations and implementation priorities",
      "DPIA support and decision documentation where scoped",
      "Retention, access and review guidance"
    ],
    "approach": [
      {
        "title": "Map the processing",
        "body": "Identify the purpose, data categories, users, recipients and retention requirements. Work with the organisation\u2019s relevant policy and legal owners to clarify obligations and unresolved questions."
      },
      {
        "title": "Design the controls",
        "body": "Review minimisation, access, secure sharing, deletion and appropriate privacy-enhancing methods. Document operational trade-offs and responsibilities rather than assume a tool alone ensures compliance."
      },
      {
        "title": "Validate and hand over",
        "body": "Check the proposed controls against the workflow, explain residual risks and identify review triggers. Provide engineering guidance and evidence that supports the organisation\u2019s ongoing privacy decisions."
      }
    ],
    "scenario": "A team plans to combine customer information with a research dataset. The engagement could examine whether the join is necessary, identify disclosure risks and evaluate a more limited output, while documenting the controls and approvals needed.",
    "related": [
      {
        "to": "/work/privacy-engineering-data-protection",
        "label": "Privacy Engineering & Data Protection"
      },
      {
        "to": "/work/data-governance-policy",
        "label": "Data Governance & Policy"
      }
    ],
    "article": "/blog/synthetic-data-privacy"
  },
  {
    "slug": "data-strategy-governance",
    "title": "Data Strategy & Governance",
    "tagline": "Frameworks that make data assets manageable and secure.",
    "overview": "Organisations accumulate data faster than they can govern it. We help design and implement data governance frameworks that account for real-world constraints: limited infrastructure, diverse data sources, and evolving regulatory requirements, while making data more secure, findable, and usable.",
    "desc": "Frameworks that make data assets manageable and secure.",
    "image": "/images/editorial/service-governance.webp",
    "fit": [
      "Teams disagree on metrics or trusted sources.",
      "Data ownership and access decisions are unclear.",
      "A growing data estate needs a realistic roadmap."
    ],
    "capabilities": [
      "Assess current data assets, flows, and governance gaps",
      "Design governance frameworks tailored to organisational context",
      "Implement data cataloguing and lineage tracking",
      "Create data quality standards and monitoring processes",
      "Train teams on governance practices and tools"
    ],
    "outputs": [
      "Data maturity and priority assessment",
      "Ownership, stewardship and decision model",
      "Quality, access and lifecycle standards",
      "A sequenced implementation roadmap"
    ],
    "approach": [
      {
        "title": "Understand the decision landscape",
        "body": "Identify the decisions data should support and review the sources, tools and working practices involved. Focus on the datasets with the highest operational value or risk."
      },
      {
        "title": "Define the operating model",
        "body": "Assign ownership and stewardship. Agree definitions, access principles, quality checks and an exception process that teams can follow within their resources."
      },
      {
        "title": "Sequence the implementation",
        "body": "Build a roadmap with dependencies, accountable owners and review points. Start with a manageable use case, validate the approach and extend it as the organisation develops capability."
      }
    ],
    "scenario": "A management team receives several versions of the same monthly metric. The work could agree one definition, trace the underlying sources, assign an owner and establish a repeatable reporting process with visible quality checks.",
    "related": [
      {
        "to": "/work/data-governance-policy",
        "label": "Data Governance & Policy"
      },
      {
        "to": "/work/data-analytics-insights",
        "label": "Data Analytics & Decision Intelligence"
      }
    ],
    "article": "/blog/data-governance-operating-model"
  },
  {
    "slug": "data-analytics-business-intelligence",
    "title": "Data Analytics & Business Intelligence",
    "tagline": "Reliable insight, built around the decisions you need to make.",
    "overview": "We help teams move from fragmented data to clear analysis and useful reporting. Engagements can cover data preparation, business intelligence, statistical analysis and forecasting, with privacy, security and maintainability considered throughout.",
    "desc": "Reliable insight, built around the decisions you need to make.",
    "image": "/images/editorial/analytics-consultancy.webp",
    "fit": [
      "Reporting is manual, slow or difficult to trust.",
      "You need insight into performance, customers or operations.",
      "A dashboard or forecast needs a sound analytical foundation."
    ],
    "capabilities": [
      "Clean and combine data from agreed sources",
      "Define metrics and reporting requirements",
      "Build dashboards and analytical reports",
      "Evaluate statistical and forecasting methods",
      "Train teams to maintain and interpret outputs"
    ],
    "outputs": [
      "Analysis-ready data and documented transformations",
      "A shared metric dictionary",
      "Interactive dashboards or analytical reports",
      "Validation, interpretation and maintenance guidance"
    ],
    "approach": [
      {
        "title": "Agree the questions",
        "body": "Define the intended users, decisions and useful measures. Review source access and confidentiality before deciding on dashboards, statistical analysis or predictive methods."
      },
      {
        "title": "Prepare and analyse",
        "body": "Profile and reconcile the data, document transformations and investigate patterns. Check sensitivity to missing records, time periods and assumptions before presenting an apparent trend as a reliable finding."
      },
      {
        "title": "Deliver a usable workflow",
        "body": "Build clear reporting with contextual definitions and sensible access controls. Explain what the results support, what remains uncertain and how the team can refresh and maintain the output."
      }
    ],
    "scenario": "An operations team wants to compare service turnaround across regions. A scoped project could build a shared metric definition, clean the source records and deliver a dashboard that separates genuine delays from gaps in recording. Follow-up analysis would be driven by decisions the team can actually take.",
    "related": [
      {
        "to": "/work/data-analytics-insights",
        "label": "Data Analytics & Decision Intelligence"
      },
      {
        "to": "/work/data-collection-translation-integrity",
        "label": "Data Collection, Translation & Integrity"
      }
    ],
    "article": "/blog/data-governance-operating-model"
  },
  {
    "slug": "ai-fairness-interpretability-audits",
    "title": "AI Safety, Fairness & Interpretability Audits",
    "tagline": "Independent evaluation of automated decision-making.",
    "overview": "When organisations deploy AI systems that make consequential decisions, independent evaluation is essential. We conduct fairness audits that identify disparities in model outcomes across demographic groups, assess interpretability for non-technical stakeholders, and provide actionable recommendations for improvement.",
    "desc": "Independent evaluation of automated decision-making.",
    "image": "/images/editorial/service-ai.webp",
    "fit": [
      "An automated system influences consequential decisions.",
      "A model needs independent evaluation before deployment.",
      "You need to understand fairness, reliability and oversight gaps."
    ],
    "capabilities": [
      "Audit model outcomes for demographic disparities",
      "Evaluate interpretability and explainability of AI systems",
      "Assess data quality and representation in training sets",
      "Review model documentation and development practices",
      "Provide actionable recommendations with remediation guidance"
    ],
    "outputs": [
      "Agreed evaluation scope and risk questions",
      "Performance, fairness and explanation assessment",
      "Documented limitations and residual risks",
      "Improvement and monitoring recommendations"
    ],
    "approach": [
      {
        "title": "Clarify the intended use",
        "body": "Review the decision, users, affected groups and acceptable limits. Agree evaluation data, access and the questions an audit can reasonably answer."
      },
      {
        "title": "Examine the evidence",
        "body": "Assess data quality, relevant performance differences, explanation methods and foreseeable misuse. Review uncertainty and failure conditions, including where the evaluation lacks sufficient data."
      },
      {
        "title": "Support a defensible decision",
        "body": "Connect findings to deployment safeguards, human oversight and monitoring. Document remaining limitations and the changes that should trigger another assessment."
      }
    ],
    "scenario": "A team uses a model to rank applications. The review could examine data coverage, errors across relevant groups, the usefulness of explanations and the process for human challenge. Findings would support a deployment decision without treating an audit as a guarantee of safety.",
    "related": [
      {
        "to": "/work/ai-machine-learning-fairness",
        "label": "AI, Machine Learning & Fairness"
      },
      {
        "to": "/work/interpretability-explainability",
        "label": "Interpretability & Explainability"
      }
    ],
    "article": "/blog/responsible-ai-assurance"
  },
  {
    "slug": "custom-training-programmes",
    "title": "Security, Safety & Data Training",
    "tagline": "Practical skills built from active research.",
    "overview": "Every training programme is built from our active research and tailored to participant contexts. We cover cybersecurity, privacy engineering, safe data collection, threat awareness, and responsible AI, delivering practical skills that teams can apply immediately, not theoretical content that sits in a binder.",
    "desc": "Practical skills built from active research.",
    "image": "/images/editorial/service-training.webp",
    "fit": [
      "Teams need practical cybersecurity and digital-safety skills.",
      "Staff must handle sensitive information more confidently.",
      "Leaders and operators need to practise incident decisions."
    ],
    "capabilities": [
      "Design curricula from current research and real case studies",
      "Deliver hands-on workshops with practical exercises",
      "Create self-paced learning modules for ongoing reference",
      "Assess participant progress against agreed learning goals",
      "Provide post-training support and resources"
    ],
    "outputs": [
      "Role-specific syllabus and learning goals",
      "Practical workshops and exercises",
      "Participant feedback and learning assessment",
      "Reference materials and follow-up recommendations"
    ],
    "approach": [
      {
        "title": "Understand the participants",
        "body": "Discuss roles, existing knowledge and common tasks. Agree practical learning outcomes and accommodate different levels of technical confidence."
      },
      {
        "title": "Teach through practice",
        "body": "Use relevant exercises on phishing, account safety, secure data handling, analytics or responsible AI. Tailor examples to the organisation without exposing real sensitive information."
      },
      {
        "title": "Reinforce the learning",
        "body": "Review what participants can apply and where more support is needed. Provide concise reference materials and recommend follow-up practice with named internal owners."
      }
    ],
    "scenario": "A programme combines field staff, analysts and managers. Separate practical sessions can address safe collection, responsible analysis and escalation decisions, while a shared exercise shows how the teams work together when a device or account is compromised.",
    "related": [
      {
        "to": "/work/training-capacity-building",
        "label": "Training, Security Awareness & Capacity Building"
      },
      {
        "to": "/work/cybersecurity-threat-intelligence",
        "label": "Cybersecurity & Threat Intelligence"
      }
    ],
    "article": "/blog/phishing-resistant-mfa-rollout"
  },
  {
    "slug": "bespoke-tool-development",
    "title": "Secure Tools & Data Product Development",
    "tagline": "Purpose-built tools for specific challenges.",
    "overview": "Sometimes off-the-shelf tools do not fit the context. We build custom data collection, security, and analytics tools designed for specific operational requirements, whether that means offline-first mobile apps, secure data pipelines, or specialised monitoring systems.",
    "desc": "Purpose-built tools for specific challenges.",
    "image": "/images/editorial/service-tools.webp",
    "fit": [
      "Existing tools do not fit your workflow or infrastructure.",
      "You need an offline-capable collection or reporting tool.",
      "A prototype must become a maintainable, secure service."
    ],
    "capabilities": [
      "Analyse operational requirements and constraints",
      "Design tools that work in target infrastructure",
      "Build and test with user feedback throughout development",
      "Document thoroughly for handover and maintenance",
      "Train teams on deployment and ongoing use"
    ],
    "outputs": [
      "Agreed requirements and architecture",
      "A scoped prototype or working implementation",
      "Security checks and technical documentation",
      "Deployment, maintenance and handover guidance"
    ],
    "approach": [
      {
        "title": "Define the smallest useful product",
        "body": "Identify users, workflows, constraints and the information the tool will handle. Agree success criteria and the security requirements that must be designed in from the beginning."
      },
      {
        "title": "Build and review in stages",
        "body": "Prototype the critical workflow and obtain user feedback. Review access control, input validation, error handling and operational dependencies as the implementation develops."
      },
      {
        "title": "Prepare for ownership",
        "body": "Document deployment, configuration and maintenance. Test agreed recovery and operational scenarios, then hand over the code and guidance to the people responsible for running it."
      }
    ],
    "scenario": "A field programme needs a collection tool that tolerates intermittent connectivity. A bounded project could prototype local capture, safe synchronisation, validation and a review queue, then test the workflow with representative users before a wider rollout.",
    "related": [
      {
        "to": "/work/data-collection-translation-integrity",
        "label": "Data Collection, Translation & Integrity"
      },
      {
        "to": "/work/cybersecurity-threat-intelligence",
        "label": "Cybersecurity & Threat Intelligence"
      }
    ],
    "article": "/blog/security-review-before-launch"
  }
];
