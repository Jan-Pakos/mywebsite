import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const education = [
    {
      title: "Bachelor of Computer and Systems Sciences",
      institution: "Stockholm University",
      period: "2026",
      description: "I gained proficiency in designing and implementing programs using UML and Java, as well as in UI/UX design and databases with SQL, during these studies.",
      type: "degree"
    },
    {
      title: "B.Sc. Business Administration (Finance)",
      institution: "Stockholm University",
      period: "2024",
      description: "I used Microsoft Excel for financial calculations, PowerPoint for presentations, and Word for collaborative writing during my studies. My curriculum covered management, financial statistics, and accounting. I also used R to build ARIMA models on time series data. My bachelor’s thesis analyzed historical stock data for statistically significant deviations from expectations.",
      type: "course"
    }
  ];

  const certifications = [
    {
      title: "CS50's Introduction to Computer Science",
      institution: "HarvardX (edx.org)",
      period: "2023",
      description: "An introduction to algorithms, data structures, web development, and more, using languages such as C, Python and SQL.",
      type: "Course"
    },
    {
      title: "CS50's Web Programming with Python and JavaScript",
      institution: "HarvardX (edx.org)",
      period: "2024",
      description: "Web development with Django, React, and SQL. Topics include database design, scalability, security, and user experience.",
      type: "Course"
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

  const renderEducationItem = (item, index, sectionDelay = 0) => (
    <div 
      key={item.title}
      className={`relative pl-8 pb-8 transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{transitionDelay: `${sectionDelay + 0.4 + index * 0.15}s`}}
    >
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
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
          <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic background, courses and certifications that shaped my technical knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold text-white mb-8 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`} style={{transitionDelay: '0.2s'}}>
                Formal Education
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
                {education.map((item, index) => renderEducationItem(item, index, 0))}
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-bold text-white mb-8 transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`} style={{transitionDelay: '0.25s'}}>
                Courses & Certifications
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
                {certifications.map((item, index) => renderEducationItem(item, index, 0.3))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default EducationSection;
