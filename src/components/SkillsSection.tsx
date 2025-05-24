import { useEffect, useRef, useState } from 'react';
import { Code, Database, FileCode, GitBranch, Terminal, Globe, Container, Cloud, Network, Zap, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const proficientSkills = [
    { name: 'JavaScript', icon: Code },
    { name: 'TypeScript', icon: FileCode },
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Terminal },
    { name: 'Python', icon: Code },
    { name: 'Git', icon: GitBranch }
  ];

  const familiarSkills = [
    { name: 'Vue.js', icon: Globe },
    { name: 'Docker', icon: Container },
    { name: 'AWS', icon: Cloud },
    { name: 'GraphQL', icon: Network },
    { name: 'MongoDB', icon: Database },
    { name: 'Rust', icon: Cpu }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies I work with, from my strongest skills to those I'm actively learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficient</h3>
            <div className="grid grid-cols-2 gap-4">
              {proficientSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors duration-300 border border-blue-500/20 hover:border-blue-400/40"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Familiar</h3>
            <div className="grid grid-cols-2 gap-4">
              {familiarSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors duration-300 border border-purple-500/20 hover:border-purple-400/40"
                    style={{
                      animationDelay: `${0.5 + index * 0.1}s`
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
