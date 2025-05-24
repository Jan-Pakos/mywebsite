import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Button = ({ children, size, variant, className, asChild, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = size === "sm" ? "h-9 px-3 text-sm" : "h-10 py-2 px-4";
  const variantClasses = variant === "outline" 
    ? "border border-input hover:bg-accent hover:text-accent-foreground" 
    : "bg-primary text-primary-foreground hover:bg-primary/90";
  
  if (asChild) return children;
  return <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className || ''}`} {...props}>{children}</button>;
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["JavaScript", "Chart.js", "OpenWeather API"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (

      <section ref={sectionRef} className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-4">My Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of projects I've worked on, demonstrating my skills and experience in software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{
                  transitionDelay: `${0.2 + index * 0.15}s`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
};

export default ProjectsSection;
