import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  demoDisabled?: boolean;
}

const Projects = () => {
  const { theme } = useTheme();
  
  const projects: Project[] = [
    {
      id: 1,
      name: 'OneForce UI (WFM System)',
      description: 'Managed API requirements and development for Vi & Dialog WFM flow, enhancing operational efficiency.',
      image: 'https://leptonsoftware.com/wp-content/uploads/2021/04/Lepton-white-logo-for-website.png',
      tags: ['API Development', 'WFM', 'Telecom', 'Oracle SQL'],
      demoLink: '#',
      demoDisabled: true
    },
    {
      id: 2,
      name: 'Enterprise API Integrations (DotPe)',
      description: 'Led API integrations for major F&B clients (McD, Blue Tokai) with platforms like Swiggy & Zomato using PIPE.',
      image: 'https://cdn.dotpe.in/dotpe-website-live/images/dotpe-white-logo-svg.svg',
      tags: ['API Integration', 'F&B', 'PIPE', 'Redash'],
      demoLink: '#',
      demoDisabled: true
    },
    {
      id: 3,
      name: 'Skillvertex Website Dev',
      description: 'Developed the front-end for an EdTech platform using WordPress, HTML/CSS, focusing on user experience.',
      image: 'https://www.skillvertex.com/pl2024/img/logo.png',
      tags: ['WordPress', 'HTML/CSS', 'Frontend', 'EdTech'],
      demoLink: 'https://www.skillvertex.com/'
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a10]' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="inline-block text-4xl font-bold text-[#f2b632] mb-16 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f2b632] after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:rounded-md"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        
        <p 
          className="text-lg max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here are a few examples of projects I've managed or developed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="h-full" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className={`h-full rounded-lg overflow-hidden flex flex-col transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-[rgba(30,30,45,0.7)] border border-[rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(242,182,50,0.2),0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(242,182,50,0.3),0_12px_35px_rgba(0,0,0,0.15)]'
      } hover:-translate-y-3`}>
        <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-800">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-contain p-4"
          />
        </div>
        
        <div className="p-6 text-left flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-[#f2b632] mb-2">{project.name}</h3>
          <p className="text-sm opacity-90 mb-4">{project.description}</p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                  theme === 'dark'
                    ? 'bg-[rgba(242,182,50,0.15)] text-[#f2b632]'
                    : 'bg-[rgba(242,182,50,0.2)] text-[#e0a72b]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-auto">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className={`inline-block px-4 py-2 rounded text-sm font-semibold ${
                project.demoDisabled 
                  ? 'bg-gray-500 opacity-50 cursor-not-allowed'
                  : 'bg-[#f2b632] text-[#10101a] hover:bg-[#e0a72b] transition-colors'
              }`}
              aria-disabled={project.demoDisabled}
              onClick={project.demoDisabled ? (e) => e.preventDefault() : undefined}
            >
              {project.demoDisabled ? 'Live Demo (NDA)' : 'View Site'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;