
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';

const Index = () => {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
