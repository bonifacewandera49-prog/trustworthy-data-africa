import { useState } from 'react';
import { Target, Eye, Award, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = {
  mission: {
    title: 'Our Mission',
    content:
      'To advance the science and practice of data security and privacy across Africa, building the tools, frameworks, and knowledge that protect data, unlock its value, and ensure the systems built on it are trustworthy and fair.',
    icon: Target,
  },
  vision: {
    title: 'Our Vision',
    content:
      'A world where African data is collected with integrity, secured with rigour, and used to build systems that serve everyone equitably — and where the research and tools that make that possible originate from Africa itself.',
    icon: Eye,
  },
  values: {
    title: 'Our Values',
    content:
      'Integrity First. Built for Here. Independent. Knowledge That Transfers. Africa First, World Relevant. Multidisciplinary by Necessity.',
    icon: Award,
  },
};

type TabKey = keyof typeof tabs;

const values = [
  { icon: Globe, title: 'Built From Here', desc: 'We do not import solutions. We build from here, for African realities.' },
  { icon: BookOpen, title: 'Research-Driven', desc: 'We produce knowledge that advances the field and tools that work.' },
  { icon: Target, title: 'Independently African', desc: 'Working on African problems, producing African solutions.' },
  { icon: Award, title: 'Integrity First', desc: 'Every method, tool, and finding held to rigorous standards.' },
];

const stats = [
  { value: '2019', label: 'Founded in Bugiri' },
  { value: '4', label: 'Core Tools Built' },
  { value: '50+', label: 'Research Papers' },
  { value: '100%', label: 'Independent' },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('mission');

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">We See What Others Miss</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a Security and Data Research Lab based in Bugiri, Uganda. We investigate how data is collected, managed, secured, and analyzed across the African landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Tabs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {(Object.entries(tabs) as [TabKey, (typeof tabs)[TabKey]][]).map(([key, { title, icon: Icon }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
                    activeTab === key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
                  <span>{title}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-elevated p-6"
            >
              <h3 className="text-xl font-bold font-heading mb-3">{tabs[activeTab].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tabs[activeTab].content}</p>
            </motion.div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="card-elevated p-5">
                <v.icon size={24} className="text-primary mb-3" />
                <h4 className="font-semibold font-heading text-sm mb-1">{v.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="card-elevated p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold font-heading text-primary">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
