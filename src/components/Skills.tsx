import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();

  const technicalSkills = [
    'Product Management',
    'Project Management',
    'Agile Methodologies',
    'RESTful APIs',
    'SQL',
    'Postman',
    'HTML/CSS',
    'JavaScript',
    'Flutter',
    'WordPress',
    'System Design',
    'Data Analysis'
  ];

  const toolsAndPlatforms = [
    'Jira',
    'Confluence',
    'Figma',
    'tray.io',
    'Salesforce',
    'Redash',
    'Snowflake',
    'PostgreSQL',
    'MySQL',
    'Oracle SQL Dev',
    'Google Analytics',
    'Mixpanel'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="inline-block text-4xl font-bold text-[#f2b632] mb-16 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f2b632] after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:rounded-md"
          data-aos="fade-up"
        >
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SkillsCard 
            title="Technical Skills"
            skills={technicalSkills}
            delay={100}
          />
          
          <SkillsCard 
            title="Tools & Platforms"
            skills={toolsAndPlatforms}
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

interface SkillsCardProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills, delay }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="h-full" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className={`h-full p-8 rounded-lg backdrop-blur transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-[rgba(30,30,45,0.7)] border border-[rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(242,182,50,0.2),0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(242,182,50,0.3),0_12px_35px_rgba(0,0,0,0.15)]'
      } hover:-translate-y-3`}>
        <h3 className="text-xl font-semibold text-[#f2b632] mb-6">{title}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-[#f2b632] text-[#10101a]'
                  : 'bg-[#f5c961] text-[#222222] hover:bg-[#f2b632]'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;