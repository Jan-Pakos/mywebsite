
import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Portfolio
        </div>
        
        <div className="flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="text-white hover:bg-white/10 hover:text-blue-400 transition-colors"
          >
            {language === 'en' ? 'SV' : 'EN'}
          </Button>
          
          <a 
            href="https://github.com/Jan-Pakos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jan-p-b065a2127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
