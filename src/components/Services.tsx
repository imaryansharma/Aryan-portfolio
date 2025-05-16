import { useTheme } from '../context/ThemeContext';
import { Settings, Code, Smartphone } from 'lucide-react';

const Services = () => {
  const { theme } = useTheme();
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="inline-block text-4xl font-bold text-[#f2b632] mb-16 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f2b632] after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:rounded-md" 
          data-aos="fade-up"
        >
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <ServiceCard 
            icon={<Settings size={40} />}
            title="Product Management"
            description="Roadmap planning to go-live execution, delivering real-time solutions for seamless product development aligned with business objectives. Expertise in frameworks like RICE & 3E model."
            delay={100}
          />
          
          <ServiceCard 
            icon={<Code size={40} />}
            title="Web Development"
            description="Specializing in high-performance web apps with modern frameworks and robust API integrations. Strong understanding of RESTful APIs for seamless backend communication."
            delay={200}
          />
          
          <ServiceCard 
            icon={<Smartphone size={40} />}
            title="App Development"
            description="Extensive experience in Flutter and Native app development. Building scalable, high-performing applications for startups and enterprises, managing the full product lifecycle."
            delay={300}
          />
        </div>
        
        <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
          <p className="text-lg max-w-3xl mx-auto">
            Proficient with tools like <strong>Jira</strong>, <strong>Confluence</strong>, <strong>Figma</strong>, and <strong>tray.io</strong> for efficient project management, collaboration, and integration workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
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
      } hover:-translate-y-3 flex flex-col items-center`}>
        <div className="text-[#f2b632] mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#f2b632] mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services;