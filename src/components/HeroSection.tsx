import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    // Small delay to ensure smooth initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start typewriter effect after initial fade-in
      setTimeout(() => setShowTypewriter(true), 800);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 text-white font-sans">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className={`space-y-6 transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }`}>
          <div className="space-y-2">
            <h2 className="text-xl text-blue-400 font-medium">{t('hero.greeting')}</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="inline-block">
                <span
                  className={`
                    ${showTypewriter ? 'animate-typewriter overflow-hidden whitespace-nowrap' : 'opacity-0'} 
                    ${showTypewriter ? 'border-r-2 border-blue-400' : ''}
                    inline-block 
                  `}
                >
                  Jan Pakos
                </span>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              {t('hero.title')}
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
        </div>

        {/* Right Column - Profile Picture */}
        <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '0.3s' }}>
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/144565382?v=4"
                  alt="Profile Jan Pakos"
                  className="w-72 h-72 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/288x288/374151/E5E7EB?text=Profile';
                  }}
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;