
import React, { useEffect, useRef } from 'react';

const TimelineItem: React.FC<{ 
  year: string; 
  title: string; 
  description: string;
  index: number; 
}> = ({ year, title, description, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`relative pl-10 pb-10 opacity-0`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {index !== 0 && <div className="timeline-line"></div>}
      <div className="timeline-dot"></div>
      <div className="glass p-6 rounded-xl hover-card">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
          {year}
        </span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
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
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "Present",
      title: "BTech in Computer Science and Engineering",
      description: "Currently pursuing my bachelor's degree at Techno India University, focusing on building a strong foundation in computer science principles and advanced web technologies."
    },
    {
      year: "2022",
      title: "12th Grade, KV O.F. Dum Dum",
      description: "Completed higher secondary education with a focus on science and mathematics, which laid the foundation for my technical education."
    },
    {
      year: "2020",
      title: "10th Grade, KV O.F. Dum Dum",
      description: "Completed secondary education with distinction, developing an early interest in computer science and programming."
    }
  ];

  return (
    <section id="about" className="bg-background py-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2" ref={sectionRef}>
            <div className="overflow-hidden">
              <h2 className="heading mb-6 opacity-0 animate-slide-up">About Me</h2>
            </div>
            
            <div ref={textRef} className="opacity-0">
              <p className="text-lg mb-6">
                I am a tech enthusiast and currently pursuing BTech in Computer Science and Engineering from Techno India University. I have a strong passion for technology, web development, and problem-solving through competitive coding.
              </p>
              <p className="text-lg mb-6">
                My academic journey started at KV O.F. Dum Dum, where I completed both my 10th and 12th grades. Through my education and personal projects, I've developed a keen interest in creating modern web experiences and solving complex problems through code.
              </p>
              <p className="text-lg text-muted-foreground">
                Curious mind. Code explorer. Data storyteller.
                I dive deep into Cybersecurity to protect what matters, uncover patterns in data as a Data Analyst, and craft intelligent solutions through AI & Machine Learning.
                For me, technology isn't just a skill—it's a playground of endless possibilities where I learn, build, and innovate every day.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 opacity-0 animate-slide-up">Education Timeline</h3>
            </div>
            
            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
