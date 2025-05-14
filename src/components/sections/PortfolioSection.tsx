
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="section-container">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="heading mb-4">Portfolio</h2>
          <p className="subheading mx-auto">
            Showcasing my projects and work that reflects my skills and creative approach to problem solving.
          </p>
        </div>
        
        <div ref={contentRef} className="glass p-12 rounded-xl text-center max-w-3xl mx-auto opacity-0" style={{ animationDelay: '200ms' }}>
          <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">✨</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I'm currently working on exciting projects that will be showcased here. Check back soon to see my latest work, or contact me to discuss potential collaborations.
          </p>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-primary/50 text-primary hover:bg-primary/10 px-8"
            asChild
          >
            <a href="#contact">
              Let's Collaborate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
