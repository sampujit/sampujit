
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Award, Calendar, Clock, Eye } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  
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
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google (Coursera)",
      issued: "Jul 15, 2025",
      courses: "9 Courses",
      skills: "Python, Linux, SQL, Security Information and Event Management (SIEM) tools, Intrusion Detection, Network Protocol Analyzers, Risk Assessment, Incident Response, Vulnerability Assessment",
      image: "/lovable-uploads/2ca3fb71-34b6-4c47-b20f-3eb96f4ca7cb.png",
      type: "Professional Certificate",
      description: "Completed comprehensive cybersecurity training covering hands-on, practice-based assessments designed to prepare for entry-level roles in cybersecurity. Gained expertise in beginner-level Python, Linux, SQL, and essential cybersecurity tools.",
    },
    {
      title: "Cyber Security Consulting Simulation",
      provider: "PwC (Forage)",
      issued: "Jul 15, 2025",
      type: "Certificate of Completion",
      skills: "Risk Assessment, SDLC, IT General Controls (ITGC), Controls Testing, Security Consulting, Cybersecurity Framework Implementation",
      image: "/lovable-uploads/b863da5a-7c4a-4855-908f-0ae163c591cd.png",
      description: "Completed PwC's virtual cybersecurity consulting simulation, gaining hands-on experience in risk assessment, SDLC walkthrough, IT general controls testing, and security consulting practices.",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      provider: "Google (Coursera)",
      issued: "Jul 12, 2025",
      type: "Course Certificate",
      skills: "Linux, SQL, Command Line Interface, Database Management, File System Navigation, Query Optimization",
      image: "/lovable-uploads/93494487-5c9a-4d36-86c2-b48c2c0352fe.png",
      description: "Successfully completed Google's comprehensive course on Linux and SQL fundamentals, covering essential tools for cybersecurity and data analysis.",
    },
    {
      title: "ChatGPT for Cybersecurity",
      provider: "Simplilearn SkillUp",
      issued: "9th July 2025",
      code: "Certificate code: 8594538",
      image: "/lovable-uploads/f326824e-d4cf-40c8-ba38-fbc43b057af0.png",
      type: "Certificate",
      description: "Completed comprehensive training on using ChatGPT for cybersecurity applications and threat analysis.",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      provider: "Forage",
      institution: "TATA Group",
      issued: "July 9th, 2025",
      skills: "Identity and access management (IAM) fundamentals, IAM strategy assessment, Crafting custom IAM solutions, Platform integration",
      verificationCode: "ZswJxNsmjCQQKwd",
      userCode: "yQpPP4EGLghSkAsgK",
      image: "/lovable-uploads/09b05732-fa79-4602-9c5a-98d4f95ae8fc.png",
      type: "Job Simulation",
      description: "Completed practical cybersecurity analyst tasks including IAM fundamentals, strategy assessment, and custom solutions development.",
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
      title: "Getting Started with Enterprise-grade AI",
      provider: "IBM",
      issued: "03 AUG 2024",
      verification: "https://www.credly.com/go/n8m09DmU",
      image: "/lovable-uploads/70bce67e-7dc4-4c6c-80b1-a485cb96ce05.png",
      type: "Certificate",
      description: "Gained expertise in implementing enterprise-level AI solutions and strategies.",
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
      title: "Embedded Developer Internship",
      provider: "NEAT - EduSkills",
      institution: "Techno India University, West Bengal",
      duration: "10 weeks",
      period: "September - November 2023",
      supporter: "Microchip",
      image: "/lovable-uploads/16efcdb9-8385-49f8-9f47-bc4a433f9535.png",
      type: "Virtual Internship",
      description: "Developed embedded systems programming skills with Microchip technologies.",
    }
  ];

  const handleCertificateClick = (cert: any) => {
    setSelectedCertificate(cert);
  };

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
              <Card key={index} className="glass border-primary/20 hover-card group overflow-hidden cursor-pointer" onClick={() => handleCertificateClick(cert)}>
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
                      cert.type === 'Job Simulation' ? 'bg-green-500/20 text-green-400' :
                      'bg-secondary/20 text-secondary-foreground'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Eye className="w-8 h-8 text-white" />
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
                    
                    {cert.code && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Code:</span> {cert.code}
                      </div>
                    )}
                    
                    {cert.verificationCode && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Verification:</span> {cert.verificationCode}
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
                        onClick={(e) => e.stopPropagation()}
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

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={selectedCertificate?.image} 
              alt={selectedCertificate?.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-medium">
                {selectedCertificate?.provider}
              </p>
              {selectedCertificate?.institution && (
                <p className="text-xs text-muted-foreground">
                  {selectedCertificate.institution}
                </p>
              )}
              <p className="text-sm text-foreground">
                {selectedCertificate?.description}
              </p>
              {(selectedCertificate?.badge || selectedCertificate?.verification) && (
                <Button 
                  size="sm" 
                  className="mt-4"
                  asChild
                >
                  <a 
                    href={selectedCertificate.badge || selectedCertificate.verification} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
