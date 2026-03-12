import { Target, Shield, Database, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  {
    name: 'HookLine',
    description: 'A phishing simulation platform built for the African threat environment. Trains individuals and organizations to recognize and resist phishing attacks.',
    icon: Target,
    features: ['Sector-specific campaigns', 'Local language support', 'Realistic threat simulation'],
  },
  {
    name: 'CanaryDrop',
    description: 'High-fidelity breach detection solution. Places carefully crafted decoys inside systems that trigger silent, immediate alerts.',
    icon: Shield,
    features: ['Real-time alerts', 'Zero false positives', 'Easy integration'],
  },
  {
    name: 'FieldPipe',
    description: 'Data collection tool built for the African field environment. Captures data reliably through low-bandwidth and offline-capable channels.',
    icon: Database,
    features: ['Offline capable', 'Chain of custody', 'Multi-language support'],
  },
  {
    name: 'Cabrine AI',
    description: 'No-code AI modeling platform that puts machine learning in the hands of people who understand the data, not just the code.',
    icon: Cpu,
    features: ['No-code interface', 'Fairness checking', 'Local data optimization'],
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Tools</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">We Do Not Only Research. We Build.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every tool we develop is a direct product of our research into how data security, integrity, and privacy challenges actually manifest in the African environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated p-6 group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <tool.icon size={24} className="text-primary" />
              </div>

              <h3 className="text-xl font-bold font-heading mb-2">{tool.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tool.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((f) => (
                  <span key={f} className="text-xs bg-secondary text-muted-foreground px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
