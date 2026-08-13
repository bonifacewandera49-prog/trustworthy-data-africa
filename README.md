# Trustworthy Data Africa

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Database, 
  Lock, 
  Globe, 
  Cpu, 
  Users, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Target,
  Eye,
  Award,
  BookOpen,
  Activity,
  Server,
  FileText,
  Code
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
    
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 88, 12, 0.6)';
        ctx.fill();
        
        // Connect nearby particles
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(234, 88, 12, ${0.2 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    


  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tools', href: '#tools' },
    { name: 'Research', href: '#research' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    
      


        


          


            


              
            


            


              Solid Elf
              Security & Data Lab
            


          


          
          


            {navLinks.map((link) => (
              
                {link.name}
              
            ))}
            
              Get in Touch
            
          


          
           setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ?  : }
          
        


      


      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        


          


            {navLinks.map((link) => (
               setIsMobileMenuOpen(false)}
              >
                {link.name}
              
            ))}
          


        


      )}
    
  );
};

// Hero Section
const HeroSection = () => {
  return (
    


      
      
      


        


          


            


              
              Based in Bugiri, Uganda
            


            
            


              Data Is Only as{' '}
              
                Powerful
              {' '}
              as the Trust Behind It
            


            
            


              Africa generates data the world does not have. We research, investigate, and build the tools, 
              frameworks, and datasets that make African data trustworthy.
            


            
            


              
                Explore Our Tools
                
              
              
                View Research
              
            


            
            


              


                

500+


                

Datasets Secured


              


              


                

12


                

African Markets


              


              


                

44+


                

Research Partners


              


            


          


          
          


            


              


              


                


                  


                    
                  


                  


                    


                    


                  


                  


                    


                    


                    


                  


                


              


            


          


        


      


      
      


    


  );
};

// About Section
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');
  
  const tabs = {
    mission: {
      title: "Our Mission",
      content: "To advance the science and practice of data security and privacy across Africa, building the tools, frameworks, and knowledge that protect data, unlock its value, and ensure the systems built on it are trustworthy and fair, for this continent and the world.",
      icon: Target
    },
    vision: {
      title: "Our Vision",
      content: "A world where African data is collected with integrity, secured with rigour, and used to build systems that serve everyone equitably, and where the research and tools that make that possible originate from Africa itself.",
      icon: Eye
    },
    values: {
      title: "Our Values",
      content: "Integrity First. Built for Here. Independent. Knowledge That Transfers. Africa First, World Relevant. Multidisciplinary by Necessity.",
      icon: Award
    }
  };
  
  return (
    


      


        


          About Us
          


            We See What Others Miss
          


          


            We are a Security and Data Research Lab based in Bugiri, Uganda. We investigate how data is collected, 
            managed, secured, and analyzed across the African landscape.
          


        


        
        


          


            


              


                {Object.entries(tabs).map(([key, { title, icon: Icon }]) => (
                   setActiveTab(key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                      activeTab === key 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    
                    {title}
                  
                ))}
              


              
              


                


                  {tabs[activeTab].title}
                


                


                  {tabs[activeTab].content}
                


              


            


          


          
          


            


              


                
                

Built From Here


                

We do not import solutions. We build from here, for African realities.


              


              


                
                

Research-Driven


                

We produce knowledge that advances the field and tools that work.


              


            


            


              


                
                

Independently African


                

Working on African problems, producing African solutions.


              


              


                
                

Integrity First


                

Every method, tool, and finding held to rigorous standards.


              


            


          


        


        
        {/* Stats Section */}
        


          


            


              

2019


              

Founded in Bugiri


            


            


              

4


              

Core Tools Built


            


            


              

50+


              

Research Papers


            


            


              

100%


              

Independent


            


          


        


      


    


  );
};

// Tools Section
const ToolsSection = () => {
  const tools = [
    {
      name: "HookLine",
      description: "A phishing simulation platform built for the African threat environment. Trains individuals and organizations to recognize and resist phishing attacks with realistic, controlled simulations.",
      icon: Target,
      color: "from-red-500 to-orange-600",
      features: ["Sector-specific campaigns", "Local language support", "Realistic threat simulation"]
    },
    {
      name: "CanaryDrop",
      description: "High-fidelity breach detection solution. Places carefully crafted decoys inside systems that trigger silent, immediate alerts the moment they are touched by intruders.",
      icon: Shield,
      color: "from-orange-500 to-amber-600",
      features: ["Real-time alerts", "Zero false positives", "Easy integration"]
    },
    {
      name: "FieldPipe",
      description: "Data collection tool built for the African field environment. Captures data reliably through low-bandwidth and offline-capable channels with integrity preservation.",
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      features: ["Offline capable", "Chain of custody", "Multi-language support"]
    },
    {
      name: "Cabrine AI",
      description: "No-code AI modeling platform that puts machine learning in the hands of people who understand the data, not just the code. Built for African realities.",
      icon: Cpu,
      color: "from-purple-500 to-pink-600",
      features: ["No-code interface", "Fairness checking", "Local data optimization"]
    }
  ];
  
  return (
    


      


        


          Our Tools
          


            We Do Not Only Research. We Build.
          


          


            Every tool we develop is a direct product of our research into how data security, 
            integrity, and privacy challenges actually manifest in the African environment.
          


        


        
        


          {tools.map((tool, index) => (
            


              


              
              


                


                  
                


                
                

{tool.name}


                

{tool.description}


                
                


                  {tool.features.map((feature) => (
                    
                      {feature}
                    
                  ))}
                


                
                
                  Learn more 
                
              


            


          ))}
        


      


    


  );
};

// Research Section
const ResearchSection = () => {
  const researchAreas = [
    {
      title: "Data Collection Methods",
      description: "New protocols for capturing data reliably through USSD, SMS, oral reporting, and field collection channels.",
      icon: Database
    },
    {
      title: "AI Security",
      description: "How adversarial attacks, data poisoning, and model manipulation manifest when AI systems are built on African datasets.",
      icon: Cpu
    },
    {
      title: "Privacy Engineering",
      description: "Translating Uganda's Data Protection and Privacy Act (2019) into practical technical implementation standards.",
      icon: Lock
    },
    {
      title: "Synthetic Datasets",
      description: "Developing methodologies for building synthetic datasets that accurately represent African data environments.",
      icon: FileText
    },
    {
      title: "Blockchain Viability",
      description: "Assessing whether blockchain-based trust systems actually deliver under East African infrastructure constraints.",
      icon: Server
    },
    {
      title: "Quantum-Resilient Cryptography",
      description: "Preparing frameworks for protecting data against quantum-enabled decryption threats.",
      icon: Shield
    }
  ];
  
  return (
    


      


        


          Research
          


            Active Research Areas
          


          


            Our research is driven by unsolved problems in the African data landscape. 
            We investigate what is missing, what is broken, and what has never been properly studied.
          


        


        
        


          {researchAreas.map((area, index) => (
            


              
              

{area.title}


              

{area.description}


            


          ))}
        


        
        


          


            


              

Research Philosophy


              


                We produce findings, methods, and tools that others can build on. Our research is reproducible, 
                independently conducted, and published to advance the field, not to serve any commercial or institutional agenda.
              


            


            
              View Publications
            
          


        


      


    


  );
};

// Sectors Section
const SectorsSection = () => {
  const sectors = [
    { name: "Health", description: "Securing patient data across its full lifecycle, from rural clinics to digital hospital systems." },
    { name: "Finance", description: "Protecting mobile money, USSD transactions, and AI-powered credit scoring systems." },
    { name: "Agriculture", description: "Building secure data collection frameworks for smallholder farming patterns." },
    { name: "Education", description: "Data governance for student information and AI-driven assessment tools." },
    { name: "Government", description: "Sovereign data architecture for nationally sensitive datasets." },
    { name: "Research & NGOs", description: "Ethical data collection protocols for vulnerable populations." }
  ];
  
  return (
    


      


        


          Sectors
          


            Across Every Sector
          


          


            The same foundational challenges of data security, integrity, privacy, and fairness run through every sector. 
            We bring the same rigorous approach to each.
          


        


        
        


          {sectors.map((sector, index) => (
            


              


                
                  {sector.name.charAt(0)}
                
              


              

{sector.name}


              

{sector.description}


            


          ))}
        


      


    


  );
};

// Contact Section
const ContactSection = () => {
  return (
    


      


        


          


            Contact
            


              Get In Touch
            


            


              We work with organizations, institutions, and researchers that take data seriously. 
              Whether you are navigating a specific security challenge or looking to strengthen your data governance, we want to hear from you.
            


            
            


              


                


                  
                


                


                  

Location


                  

Bugiri, Uganda


                


              


              
              


                


                  
                


                


                  

Email


                  

info@solidelf.org


                
              
              
              


                


                  
                


                


                  

Website


                  

www.solidelf.org


                


              


            
          
          
          


            


              


                


                  First Name
                  
                


                


                  Last Name
                  
                


              


              
              


                Email
                @example.com" />
              
              
              


                Organization
                
              


              
              


                Inquiry Type
                
                  Research Collaboration
                  Tool Inquiries
                  Training Programs
                  General Inquiry
                
              


              
              


                Message
                
              


              
              
                Send Message
              
            
          
        
      
    
  );
};

// Footer
const Footer = () => {
  return (
    


      


        


          


            


              


                
              


              


                Solid Elf
                Security & Data Lab
              


            


            


              We research, investigate, and build the tools, frameworks, and datasets that make African data trustworthy, 
              from the moment it is first collected to the systems and decisions it ultimately drives.
            


            


              


                
              


              


                
              


            


          


          
          


            

Quick Links


            


              

Home


              

About Us


              

Our Tools


              

Research


              

Sectors


            


          


          
          


            

Contact


            


              


                
                Bugiri, Uganda
              


              


                
                info@solidelf.org</span>
              
              


                
                www.solidelf.org
              


            
          
        
        
        


          

© 2024 Solid Elf Security and Data Lab. All rights reserved.


          


            Privacy Policy
            Terms of Service
          


        


      
    
  );
};

// Main App Component
const App = () => {
  return (
    


      
      
      
      
      
      
      
      


    


  );
};

export default App;

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c25e856a-4139-40a8-897d-84abff8776eb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
