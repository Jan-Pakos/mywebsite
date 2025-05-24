
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-2">
            <h2 className="text-xl text-blue-400 font-medium">Hello, I'm</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              <span className="inline-block overflow-hidden border-r-2 border-blue-400 animate-pulse">
                <span className={isVisible ? 'typewriter' : ''}>
                  Your Name
                </span>
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              Software Engineer
            </h2>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Passionate software engineer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions and bringing ideas to life through code.
          </p>
          
          <div className="flex space-x-4 pt-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 glow-effect">
              View My Work
            </button>
          </div>
        </div>
        
        <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
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
  );
};

export default HeroSection;
