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
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 text-white font-sans"> {/* Added bg-gray-900, text-white, font-sans for context */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }`}>
          <div className="space-y-2">
            <h2 className="text-xl text-blue-400 font-medium">Hello, I'm</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="inline-block"> {/* Outer span for layout */}
                <span
                  className={`
                    ${showTypewriter ? 'animate-typewriter overflow-hidden whitespace-nowrap' : 'opacity-0'} 
                    ${showTypewriter ? 'border-r-2 border-blue-400' : ''}
                    inline-block 
                  `}
                  // The 'animate-typewriter' class will be defined in tailwind.config.js
                  // 'overflow-hidden' and 'whitespace-nowrap' are crucial for the effect
                  // Conditionally apply border to act as cursor only when typing
                >
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

         {/* 
            <div className="flex space-x-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                View My Work
              </button>
            </div> 
        */}


        <div className={`flex justify-center transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '0.3s' }}>
          <div className="relative">
            {/* The 'animate-float' class will be defined in tailwind.config.js */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/144565382?v=4"
                  alt="Profile Jan Pakos" // Improved alt text
                  className="w-72 h-72 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop if placeholder also fails
                    target.src = 'https://placehold.co/288x288/374151/E5E7EB?text=Profile'; // Placeholder
                  }}
                />
              </div>
            </div>
            {/* These are standard Tailwind animations, no custom config needed for ping/pulse */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* The <style jsx> block has been removed */}
    </section>
  );
};

export default HeroSection;
