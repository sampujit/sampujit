import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-secondary/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zMCAzMGgzMHYzMEgzMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Aspiring Web Designer, Competitive Coder & Cybersecurity Enthusiast
                </span>
              </div>
              
              <h1 ref={headingRef} className="heading">
                <div className="overflow-hidden">
                  <span className="inline-block opacity-0">
                    Building <span className="gradient-text font-bold">Digital</span> 
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block opacity-0 delay-200">
                    Experiences That 
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block opacity-0 delay-400">
                    Make An <span className="text-primary font-bold">Impact</span>
                  </span>
                </div>
              </h1>
              
              <div className="overflow-hidden">
                <p className="text-lg text-muted-foreground max-w-md opacity-0 animate-fade-in delay-500">
                  Curious mind. Code explorer. Data storyteller.
                  I dive deep into Cybersecurity to protect what matters, uncover patterns in data as a Data Analyst, and craft intelligent solutions through AI & Machine Learning.
                  For me, technology isn't just a skill—it's a playground of endless possibilities where I learn, build, and innovate every day.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10 px-8 backdrop-blur-sm"
                asChild
              >
                <a href="#skills">
                  View Skills <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in delay-700">
              {['Python', 'React', 'JavaScript', 'C++', 'HTML/CSS'].map((tech) => (
                <div key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground backdrop-blur-sm border border-secondary/10">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Profile picture with enhanced styling */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Improved background gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-2xl blur-3xl"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-full blur-xl opacity-70"></div>
                
                {/* Glass container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden glass border border-primary/20 shadow-2xl backdrop-blur-xl">
                  {/* Decorative circles */}
                  <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-primary/5 backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-accent/5 backdrop-blur-sm"></div>
                  
                  {/* Profile picture container */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background/80 via-background/60 to-muted/40 backdrop-blur-md p-8">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70"></div>
                    
                    {/* Avatar with styled border */}
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-md opacity-75 animate-pulse" style={{ animationDuration: '3s' }}></div>
                      <Avatar className="w-64 h-64 rounded-full border-2 border-white/10 shadow-lg">
                        <AvatarImage 
                          src="/lovable-uploads/a6417c63-6896-4883-beda-554c46ded4ee.png" 
                          alt="Sampujit Nath" 
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary text-3xl">SN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-lg bg-accent/20 backdrop-blur-md -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-primary/20 backdrop-blur-md -z-10"></div>
              
              {/* Floating code snippets for tech aesthetic */}
              <div className="absolute -right-8 top-1/4 px-3 py-2 rounded bg-black/40 backdrop-blur-md text-xs font-mono text-primary/80 rotate-3 border border-white/5 hidden lg:block">
                &lt;code/&gt;
              </div>
              <div className="absolute -left-6 bottom-1/4 px-3 py-2 rounded bg-black/40 backdrop-blur-md text-xs font-mono text-accent/80 -rotate-3 border border-white/5 hidden lg:block">
                function(){ }
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
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
