
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Award, Calendar, Clock } from 'lucide-react';

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

  const certifications = [
    {
      title: "Cloud Virtual Internship",
      provider: "AICTE - National Internship Portal",
      institution: "Techno India University, West Bengal",
      duration: "10 weeks",
      period: "July - September 2024",
      image: "/lovable-uploads/25d74831-f7a2-4c21-833b-a314ec1131b6.png",
      type: "Virtual Internship",
      description: "Completed comprehensive cloud computing internship program with AWS Academy curriculum.",
    },
    {
      title: "AWS Academy Cloud Architecting",
      provider: "AWS Academy",
      duration: "60 hours",
      issued: "08/15/2024",
      badge: "https://www.credly.com/go/lyNLA6hT",
      image: "/lovable-uploads/650f9f99-86b6-400c-8bb6-7080c9ad96cd.png",
      type: "Certificate",
      description: "Mastered AWS cloud architecture principles and best practices for designing scalable solutions.",
    },
    {
      title: "AWS Academy Cloud Foundations",
      provider: "AWS Academy",
      duration: "20 hours",
      issued: "08/02/2024",
      badge: "https://www.credly.com/go/CXxs7wdZ",
      image: "/lovable-uploads/4fe0f913-cc50-4891-bfc6-e6ab14238bb9.png",
      type: "Certificate",
      description: "Built foundational knowledge of AWS cloud services and core concepts.",
    },
    {
      title: "Data Analytics Process Automation",
      provider: "AICTE - NEAT",
      institution: "Techno India University, West Bengal",
      duration: "10 weeks",
      period: "April - June 2024",
      supporter: "Alteryx SparkED",
      image: "/lovable-uploads/9767a468-84d2-4ba8-bf54-ceeeaa68d540.png",
      type: "Virtual Internship",
      description: "Specialized in data analytics and process automation using enterprise-grade tools.",
    },
    {
      title: "Getting Started with Enterprise-grade AI",
      provider: "IBM",
      issued: "03 AUG 2024",
      verification: "https://www.credly.com/go/n8m09DmU",
      image: "/lovable-uploads/70bce67e-7dc4-4c6c-80b1-a485cb96ce05.png",
      type: "Certificate",
      description: "Gained expertise in implementing enterprise-level AI solutions and strategies.",
    },
    {
      title: "Embedded Developer Internship",
      provider: "NEAT - EduSkills",
      institution: "Techno India University, West Bengal",
      duration: "10 weeks",
      period: "September - November 2023",
      supporter: "Microchip",
      image: "/lovable-uploads/16efcdb9-8385-49f8-9f47-bc4a433f9535.png",
      type: "Virtual Internship",
      description: "Developed embedded systems programming skills with Microchip technologies.",
    },
    {
      title: "2024 Gen AI Study Jams",
      provider: "Google Developer Groups",
      institution: "Techno India University",
      achievement: "Top 80 completion",
      period: "1st October 2024 to 1st November 2024",
      date: "20.01.25",
      image: "/lovable-uploads/7103bda6-2946-45bf-93bb-1a89578a115c.png",
      type: "Achievement",
      description: "Secured top 80 position in Google's comprehensive AI study program.",
    },
    {
      title: "Introduction to Cyber Security",
      provider: "Simplilearn SkillUp",
      issued: "8th July 2025",
      code: "Certificate code: 8594130",
      image: "/lovable-uploads/c944ceae-a91b-4901-9b84-db4542ad1fd2.png",
      type: "Certificate",
      description: "Comprehensive introduction to cybersecurity fundamentals and best practices.",
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      provider: "TCS iON - TATA",
      period: "04 Dec 2024 - 08 Jul 2025",
      skills: "Communication Skills, Presentation Skills, Soft Skills, Career Guidance, Resume Writing, Interview Skills, Business Etiquette, Email Writing, Telephone Etiquette, Accounting Fundamentals, IT Skills, AI Overview",
      image: "/lovable-uploads/276174d2-f6c1-42af-bb37-66c8d8bd8e5e.png",
      type: "Professional Course",
      description: "Comprehensive professional development program covering essential career skills.",
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="section-container">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="heading mb-4">Portfolio & Achievements</h2>
          <p className="subheading mx-auto">
            A showcase of my certifications, internships, and professional development journey in technology and innovation.
          </p>
        </div>
        
        <div ref={contentRef} className="opacity-0" style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass border-primary/20 hover-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.type === 'Virtual Internship' ? 'bg-primary/20 text-primary' :
                      cert.type === 'Certificate' ? 'bg-accent/20 text-accent' :
                      cert.type === 'Achievement' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-secondary/20 text-secondary-foreground'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary/80">
                    {cert.provider}
                  </CardDescription>
                  {cert.institution && (
                    <CardDescription className="text-xs text-muted-foreground">
                      {cert.institution}
                    </CardDescription>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0 space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2 text-xs">
                    {cert.duration && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{cert.duration}</span>
                      </div>
                    )}
                    
                    {(cert.period || cert.issued) && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.period || cert.issued}</span>
                      </div>
                    )}
                    
                    {cert.achievement && (
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Award className="w-3 h-3" />
                        <span>{cert.achievement}</span>
                      </div>
                    )}
                    
                    {cert.supporter && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Supported by:</span> {cert.supporter}
                      </div>
                    )}
                    
                    {cert.skills && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Skills:</span> {cert.skills}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {(cert.badge || cert.verification) && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs rounded-full border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a 
                          href={cert.badge || cert.verification} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-white rounded-full px-8"
              asChild
            >
              <a href="#contact">
                Let's Connect & Collaborate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
