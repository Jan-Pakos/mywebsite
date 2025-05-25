import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
          <h2 className="text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 0 * 0.15}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="../../images/systemvetardagen.jpeg" 
                alt={t('project1.project1-title')}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project1.project1-title')}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project1.project1-description')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Node.js
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 1 * 0.15}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt={t('project2.project1-title')}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project2.project1-title')}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project2.project1-description')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Express
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 2 * 0.15}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt={t('project3.project1-title')}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project3.project1-title')}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project3.project1-description')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  PHP
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  MySQL
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 3 * 0.15}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt={t('project4.project1-title')}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project4.project1-title')}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project4.project1-description')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  OOP
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 4 * 0.15}s`
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt={t('project5.project1-title')}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project5.project1-title')}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project5.project1-description')}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  GUI
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Algorithms
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                
              </div>
            </div>
          </div>

          {/* To add more projects, copy this template and change the project number:
          
          <div 
            className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-700 ease-out hover:scale-105 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: `${0.2 + 5 * 0.15}s` // Change the index (5) for each new project
            }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="/api/placeholder/400/300" 
                alt={t('project6.project1-title')} // Change project number
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('project6.project1-title')} // Change project number
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {t('project6.project1-description')} // Change project number
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Tag1
                </span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                  Tag2
                </span>
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-600 hover:border-blue-400 hover:bg-blue-600/10 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;