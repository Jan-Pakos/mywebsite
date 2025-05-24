
import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Focused on software engineering, algorithms, and data structures.",
      type: "degree"
    },
    {
      title: "Full Stack Web Development",
      institution: "Online Bootcamp",
      period: "2022",
      description: "Intensive program covering modern web technologies and frameworks.",
      type: "course"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Certified in AWS cloud development and deployment practices.",
      type: "certification"
    },
    {
      title: "React Developer Certification",
      institution: "Meta",
      period: "2023",
      description: "Advanced React development patterns and best practices.",
      type: "certification"
    }
  ];

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

  const renderEducationItem = (item: any, index: number) => (
    <div 
      key={item.title}
      className={`relative pl-8 pb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{animationDelay: `${0.2 + index * 0.1}s`}}
    >
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] glow-effect">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full">
            {item.period}
          </span>
        </div>
        <p className="text-blue-400 font-medium mb-3">{item.institution}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and professional certifications that shaped my technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold text-white mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
              Education & Courses
            </h3>
            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {education.map((item, index) => renderEducationItem(item, index))}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold text-white mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              Certifications
            </h3>
            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {certifications.map((item, index) => renderEducationItem(item, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
