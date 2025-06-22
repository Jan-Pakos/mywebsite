import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EducationSection = () => {
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
          <h2 className="text-4xl font-bold text-white mb-4">{t('education.title')}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold text-white mb-8 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`} style={{transitionDelay: '0.2s'}}>
              {t('education.formaleducation')}
            </h3>
            <div className="relative">
              <div className={`absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'scale-y-100 opacity-100' 
                  : 'scale-y-0 opacity-0'
              }`} style={{
                transformOrigin: 'top',
                transitionDelay: '0.3s'
              }}></div>
              
              {/* Education Item 1 */}
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.4s'}}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{t('degreecs.title')}</h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      2026
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{t('degreecs.institution')}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('degreecs.description')}</p>
                </div>
              </div>

              {/* Education Item 2 */}
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.55s'}}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{t('degreefinance.title')}</h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      2024
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{t('degreefinance.institution')}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('degreefinance.description')}</p>
                </div>
              </div>

              {/* To add more education items, copy this template:
              
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.7s'}} // Increase delay for each new item
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Your Degree Title</h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      Year
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">Institution Name</p>
                  <p className="text-gray-400 text-sm leading-relaxed">Your description here...</p>
                </div>
              </div>
              */}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold text-white mb-8 transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`} style={{transitionDelay: '0.25s'}}>
              {t('education.courses-certifications')}
            </h3>
            <div className="relative">
              <div className={`absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'scale-y-100 opacity-100' 
                  : 'scale-y-0 opacity-0'
              }`} style={{
                transformOrigin: 'top',
                transitionDelay: '0.35s'
              }}></div>
              
              {/* Certification Item 1 */}
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.7s'}}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a 
                        href="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                      >
                        {t('coursecs50.title')}
                      </a>
                    </h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      2023
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{t('coursecs50.institution')}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('coursecs50.description')}</p>
                </div>
              </div>

              {/* Certification Item 2 */}
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.85s'}}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a 
                        href="https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                      >
                        {t('coursecs50w.title')}
                      </a>
                    </h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      2024
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{t('coursecs50w.institution')}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('coursecs50w.description')}</p>
                </div>
              </div>

              {/* Certification Item 3 */}
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '0.9s'}}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <a 
                        href="https://www.udemy.com/share/101Wc43@_Mlr9wFOsFKmV0RSJDKwTzJmSD-9IuKAcElWqTa0t7tMmW16TWmc8i5yvWf0gtmrMA==/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                      >
                        {t('springcourse.title')}
                      </a>
                    </h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      2025
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{t('springcourse.institution')}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('springcourse.description')}</p>
                </div>
              </div>

              {/* To add more certification items, copy this template:
              
              <div 
                className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{transitionDelay: '1.0s'}} // Increase delay for each new item
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Your Course/Certification Title</h3>
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                      Year
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">Institution Name</p>
                  <p className="text-gray-400 text-sm leading-relaxed">Your description here...</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
