
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/80 py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-heading font-bold gradient-text mb-4">
            Sampujit<span className="text-primary">.</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Sampujit Nath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
