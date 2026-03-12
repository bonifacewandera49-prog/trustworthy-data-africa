import { motion } from 'framer-motion';

const sectors = [
  { name: 'Health', description: 'Securing patient data across its full lifecycle, from rural clinics to digital hospital systems.' },
  { name: 'Finance', description: 'Protecting mobile money, USSD transactions, and AI-powered credit scoring systems.' },
  { name: 'Agriculture', description: 'Building secure data collection frameworks for smallholder farming patterns.' },
  { name: 'Education', description: 'Data governance for student information and AI-driven assessment tools.' },
  { name: 'Government', description: 'Sovereign data architecture for nationally sensitive datasets.' },
  { name: 'Research & NGOs', description: 'Ethical data collection protocols for vulnerable populations.' },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Sectors</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">Across Every Sector</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The same foundational challenges of data security, integrity, privacy, and fairness run through every sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-elevated p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold font-heading text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {sector.name.charAt(0)}
              </div>
              <h3 className="font-bold font-heading mb-2">{sector.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
