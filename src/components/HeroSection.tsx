import { ArrowRight, MapPin, Shield, Database, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-secondary rounded-full px-4 py-2 mb-6">
              <MapPin size={14} className="text-primary" />
              <span className="text-muted-foreground text-sm">Based in Bugiri, Uganda</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Data Is Only as{' '}
              <span className="gradient-text">Powerful</span>{' '}
              as the Trust Behind It
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Africa generates data the world does not have. We research, investigate, and build the tools,
              frameworks, and datasets that make African data trustworthy.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Our Tools <ArrowRight size={18} />
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                View Research
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '500+', label: 'Datasets Secured' },
                { value: '12', label: 'African Markets' },
                { value: '44+', label: 'Research Partners' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold font-heading text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — decorative graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 border border-primary/20 animate-float" />
              <div className="absolute inset-4 rounded-xl bg-secondary/80 border border-border flex items-center justify-center">
                <div className="space-y-4 text-center">
                  <Shield size={48} className="mx-auto text-primary" />
                  <Database size={32} className="mx-auto text-muted-foreground" />
                  <Lock size={28} className="mx-auto text-primary/70" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
