
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="glass p-6 rounded-xl text-center hover-card opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
        style={{ backgroundColor: `${skill.color}20` }}
      >
        <span 
          className="text-2xl"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </span>
      </div>
      <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: "Web Design", icon: "🎨", color: "#8B5CF6" },
    { name: "Competitive Coding", icon: "💻", color: "#EC4899" },
    { name: "Python", icon: "🐍", color: "#06B6D4" },
    { name: "C/C++", icon: "⚙️", color: "#3B82F6" },
    { name: "JavaScript", icon: "📱", color: "#F59E0B" },
    { name: "React", icon: "⚛️", color: "#10B981" },
    { name: "HTML/CSS", icon: "🌐", color: "#F43F5E" },
    { name: "MySQL", icon: "🗃️", color: "#6366F1" },
    { name: "Video Editing", icon: "🎬", color: "#8B5CF6" },
    { name: "Event Management", icon: "📅", color: "#EC4899" }
  ];

  const coreTechnologies = [
    "React", "JavaScript", "HTML/CSS", "Python", "C/C++", "MySQL"
  ];

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="section-container">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="heading mb-4">My Skills</h2>
          <p className="subheading mx-auto">
            I've developed proficiency in various technical skills throughout my academic journey and personal projects.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
        
        <div className="mt-16 glass rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-center">Core Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreTechnologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-primary/10 rounded-full py-2 px-4 text-center text-sm font-medium text-primary"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
