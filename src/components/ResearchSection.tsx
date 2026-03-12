import { Database, Cpu, Lock, FileText, Server, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const researchAreas = [
  { title: 'Data Collection Methods', description: 'New protocols for capturing data reliably through USSD, SMS, oral reporting, and field collection channels.', icon: Database },
  { title: 'AI Security', description: 'How adversarial attacks, data poisoning, and model manipulation manifest when AI systems are built on African datasets.', icon: Cpu },
  { title: 'Privacy Engineering', description: "Translating Uganda's Data Protection and Privacy Act (2019) into practical technical implementation standards.", icon: Lock },
  { title: 'Synthetic Datasets', description: 'Developing methodologies for building synthetic datasets that accurately represent African data environments.', icon: FileText },
  { title: 'Blockchain Viability', description: 'Assessing whether blockchain-based trust systems actually deliver under East African infrastructure constraints.', icon: Server },
  { title: 'Quantum-Resilient Cryptography', description: 'Preparing frameworks for protecting data against quantum-enabled decryption threats.', icon: Shield },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Research</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Active Research Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our research is driven by unsolved problems in the African data landscape. We investigate what is missing, what is broken, and what has never been properly studied.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-elevated p-6 hover:border-primary/30 transition-colors"
            >
              <area.icon size={28} className="text-primary mb-3" />
              <h3 className="font-bold font-heading mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="card-elevated p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-heading mb-2">Research Philosophy</h3>
            <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
              We produce findings, methods, and tools that others can build on. Our research is reproducible, independently conducted, and published to advance the field.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shrink-0">
            View Publications <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
