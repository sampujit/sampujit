
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("3bMjRLQOcwiDtPzG2");
  }, []);
  
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
    
    if (infoRef.current) {
      observer.observe(infoRef.current);
    }
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          'service_8znsrk8', 
          'template_6ickcmf', 
          formRef.current,
          '3bMjRLQOcwiDtPzG2'
        );
        
        console.log('SUCCESS!', result.text);
        
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        // Reset the form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('FAILED...', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary" />,
      label: "Email",
      value: "sampujit@gmail.com",
      link: "mailto:sampujit@gmail.com"
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      label: "Phone",
      value: "9732849390",
      link: "tel:9732849390"
    },
    {
      icon: <Linkedin size={24} className="text-primary" />,
      label: "LinkedIn",
      value: "Sampujit Nath",
      link: "https://www.linkedin.com/in/sampujit-nath-2ab482288"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background/80">
      <div className="section-container">
        <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="heading mb-4">Get In Touch</h2>
          <p className="subheading mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={infoRef} className="opacity-0">
            <div className="glass p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">{item.label}</p>
                      <a 
                        href={item.link} 
                        className="text-foreground hover:text-primary transition-colors"
                        target={item.label === "LinkedIn" ? "_blank" : undefined}
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
                <p className="text-muted-foreground mb-6">
                  I'm currently open to freelance opportunities and collaborations. If you have an interesting project or just want to say hello, don't hesitate to reach out!
                </p>
                
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm">
                    <span className="font-medium">Quick Response:</span> I typically respond to all inquiries within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-xl opacity-0" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
