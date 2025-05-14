
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-text-reveal');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const headingElement = headingRef.current;
    if (headingElement) {
      const spans = headingElement.querySelectorAll('span');
      spans.forEach((span) => {
        observerRef.current?.observe(span);
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0 bg-black/40"></div>
      
      {/* Floating shapes */}
      <div className="absolute right-10 top-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="overflow-hidden mb-4">
              <span className="inline-block text-sm md:text-base font-medium uppercase tracking-wider text-primary animate-fade-in">
                Aspiring Web Designer & Competitive Coder
              </span>
            </div>
            
            <h1 ref={headingRef} className="heading mb-6">
              <div className="overflow-hidden">
                <span className="inline-block opacity-0">
                  Building <span className="gradient-text">Digital</span> 
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="inline-block opacity-0 delay-200">
                  Experiences That 
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="inline-block opacity-0 delay-400">
                  Make An <span className="text-primary">Impact</span>
                </span>
              </div>
            </h1>
            
            <div className="overflow-hidden">
              <p className="subheading max-w-md opacity-0 animate-fade-in delay-500">
                Tech enthusiast specializing in web design and competitive coding with a passion for building innovative solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 opacity-0 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white rounded-full px-8"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10 px-8"
                asChild
              >
                <a href="#skills">
                  View Skills <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile picture placeholder with animated gradient border */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass hover-card border-2 border-primary/30">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background/80 to-background/30">
                  <p className="text-sm text-center text-muted-foreground p-6">
                    Your professional profile picture will appear here
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg bg-accent/10 -z-10 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-primary/10 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="inline-block animate-bounce text-white/60 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
