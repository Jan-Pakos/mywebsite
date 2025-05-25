import { useEffect, useRef, useState } from 'react';
import { Code, Database, FileCode, GitBranch, Terminal, Globe, Coffee, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const { t } = useTranslation();

  const proficientSkills = [
    { name: 'TypeScript', icon: FileCode },
    { name: 'Node.js', icon: Terminal },
    { name: 'Python', icon: Code },
    { name: 'Git', icon: GitBranch },
    { name: 'SQL', icon: Database },
    { name: 'Java', icon: Coffee },
  ];

  const familiarSkills = [
    { name: 'React', icon: Globe },
    { name: 'Flask', icon: Zap },
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
          <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-4">{t('skills.title')}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Proficient Skills */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`} style={{transitionDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('skills.proficient')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {proficientSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className={`bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40 hover:scale-105 transform ${
                        isVisible 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `0.1s`,
                        transitionDuration: '400ms'
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Familiar Skills */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`} style={{transitionDelay: '0.3s'}}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('skills.familiar')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {familiarSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className={`bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105 transform ${
                        isVisible 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `0.1s`,
                        transitionDuration: '400ms'
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
