import { MapPin, Mail, Globe } from 'lucide-react';
import logo from '@/assets/solid-elf-logo.png';

const SiteFooter = () => {
  return (
    <footer className="border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Solid Elf" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We research, investigate, and build the tools, frameworks, and datasets that make African data trustworthy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Home', 'About Us', 'Our Tools', 'Research', 'Sectors'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-heading mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Bugiri, Uganda</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@solidelf.org</li>
              <li className="flex items-center gap-2"><Globe size={14} className="text-primary" /> www.solidelf.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Solid Elf Security and Data Lab. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
