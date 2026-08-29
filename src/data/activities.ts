export interface ActivityArea {
  slug: string;
  title: string;
  desc: string;
}

export const activityAreas: ActivityArea[] = [
  { slug: "data-collection-translation-integrity", title: "Data Collection, Translation & Integrity", desc: "Data enters systems through USSD, SMS, paper records, field enumerators, community networks, and informal channels. We design secure collection protocols, translate and structure data from hard-to-use sources, and train field teams." },
  { slug: "cybersecurity-threat-intelligence", title: "Cybersecurity & Threat Intelligence", desc: "Security threats affecting organisations follow distinct patterns shaped by local platforms, languages, and social engineering methods. We gather intelligence, develop detection tooling, and deliver training." },
  { slug: "privacy-engineering-data-protection", title: "Privacy Engineering & Data Protection", desc: "We help organisations translate data protection legislation into practical engineering decisions through synthetic data, differential privacy, secure computation, and compliance training." },
  { slug: "ai-machine-learning-fairness", title: "AI, Machine Learning & Fairness", desc: "We build models suited to diverse data conditions, conduct fairness audits, and develop interpretability tools so organisations can understand and explain automated decisions." },
  { slug: "quantum-machine-learning", title: "Quantum Machine Learning", desc: "We explore the intersection of quantum computing and machine learning, developing quantum circuit architectures, hybrid classical-quantum models, and automated quantum hyperparameter optimisation." },
  { slug: "interpretability-explainability", title: "Interpretability & Explainability", desc: "When organisations deploy systems that make consequential decisions, they need to understand and explain how those systems reach their conclusions." },
  { slug: "blockchain-emerging-technology", title: "Blockchain & Emerging Technology Assessment", desc: "We conduct rigorous, independent assessments of emerging technologies proposed for real-world contexts, evaluating performance under local conditions." },
  { slug: "data-governance-policy", title: "Data Governance & Policy Research", desc: "We produce peer-reviewed research and frameworks that inform data governance policy globally." },
  { slug: "training-capacity-building", title: "Training & Capacity Building", desc: "Every training programme is built from our active research and tailored to participant contexts, covering cybersecurity, privacy engineering, safe data collection, and threat awareness." },
];
