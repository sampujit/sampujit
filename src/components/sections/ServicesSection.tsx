
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-hero-pattern">
      <div className="absolute inset-0 z-0 bg-black/60"></div>
      
      <div className="section-container relative z-10">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="heading mb-4">My Services</h2>
          <p className="subheading mx-auto">
            I offer specialized services leveraging my technical skills and academic background.
          </p>
        </div>
        
        <div ref={cardRef} className="max-w-3xl mx-auto opacity-0" style={{ animationDelay: '200ms' }}>
          <div className="glass p-8 rounded-xl border border-primary/20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
              <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Web Design</h3>
                <p className="text-muted-foreground mb-6">
                  I create modern, responsive, and user-friendly websites tailored to your vision. Whether you're a startup, a creative, or an organization, I can help you build a strong web presence that reflects your goals.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-primary/10 rounded-full py-1 px-4 text-sm font-medium text-primary">Responsive</span>
                  <span className="bg-primary/10 rounded-full py-1 px-4 text-sm font-medium text-primary">User-friendly</span>
                  <span className="bg-primary/10 rounded-full py-1 px-4 text-sm font-medium text-primary">Modern</span>
                  <span className="bg-primary/10 rounded-full py-1 px-4 text-sm font-medium text-primary">Customizable</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/80 text-white rounded-full px-8"
                  asChild
                >
                  <a href="#contact">
                    Let's Build Together <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-muted-foreground">
            Looking for other services? Feel free to <a href="#contact" className="text-primary hover:underline">contact me</a> with your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
