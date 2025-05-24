import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

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

      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-2">
              <h2 className="text-xl text-blue-400 font-medium">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                <span className="inline-block">
                  <span className={`${showTypewriter ? 'animate-typewriter' : ''} border-r-2 border-blue-400`}>
                    Jan Pakos
                  </span>
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                Software Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              I am a dedicated software developer with a strong focus on building modern web applications. 
              My expertise includes creating efficient, scalable, and user-centric solutions. While I specialize in backend development with Python and Java, 
              I am also proficient in frontend and full-stack development. I am open to exploring opportunities that align with my skills and interests. 
              Additionally, I am an amateur fitness enthusiast and football player.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                View My Work
              </button>
            </div>
          </div>
          
          <div className={`flex justify-center transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`} style={{transitionDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://avatars.githubusercontent.com/u/144565382?v=4" 
                    alt="Profile" 
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(9, end) forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

  );
};

export default HeroSection;
