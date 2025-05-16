import { useTheme } from '../../context/ThemeContext';
import { X } from 'lucide-react';

interface WorkHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define company logos with their details
const companyLogos = [
  {
    name: 'Lepton Software',
    logo: 'https://leptonsoftware.com/wp-content/uploads/2021/04/Lepton-white-logo-for-website.png',
    darkBg: true
  },
  {
    name: 'DotPe',
    logo: 'https://cdn.dotpe.in/dotpe-website-live/images/dotpe-white-logo-svg.svg',
    darkBg: true
  },
  {
    name: 'Planet Spark',
    logo: 'https://planetspark.in/blog/wp-content/uploads/2022/11/logo-blue.svg',
    darkBg: false
  },
  {
    name: 'Skillvertex',
    logo: 'https://www.skillvertex.com/pl2024/img/logo.png',
    darkBg: false
  }
];

// Timeline item component with company logo
interface TimelineItemProps {
  title: string;
  companyName: string;
  responsibilities: string[];
  theme: 'dark' | 'light';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, companyName, responsibilities, theme }) => {
  // Find the matching company logo
  const company = companyLogos.find(c => title.includes(c.name));
  
  return (
    <div className="relative pl-12 mb-10 last:mb-0">
      {/* Timeline line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#f2b632]"
        style={{ transform: 'translateX(5px)' }}
      />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full bg-[#f2b632] border-4 border-[#10101a] z-10" 
        style={{ 
          borderColor: theme === 'dark' ? '#10101a' : '#f4f7f9',
          transform: 'translateX(-4px)'
        }}
      />
      
      <div className="mb-2 flex items-center gap-3">
        {/* Company Logo */}
        {company && (
          <div 
            className={`w-10 h-10 rounded overflow-hidden flex items-center justify-center p-1 ${
              company.darkBg 
                ? 'bg-gray-800' 
                : 'bg-white'
            }`}
          >
            <img 
              src={company.logo} 
              alt={company.name} 
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        {/* Job Title */}
        <h4 className="text-lg font-semibold text-[#f2b632]">{title}</h4>
      </div>
      
      <ul className="list-disc ml-5 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-sm">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

const WorkHistoryModal: React.FC<WorkHistoryModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-75" 
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-3xl">
          <div className={`rounded-lg shadow-xl ${
            theme === 'dark' 
              ? 'bg-[rgba(30,30,45,0.95)] backdrop-blur border border-[rgba(255,255,255,0.1)]' 
              : 'bg-[rgba(255,255,255,0.95)] backdrop-blur border border-[rgba(0,0,0,0.08)]'
          }`}>
            <div className="px-6 pt-5 pb-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-[#f2b632]">
                Work History
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto p-6">
              <div className="timeline">
                <TimelineItem
                  title="Assistant Product Manager, Lepton Software (08/2024 – Present, Telecom)"
                  companyName="Lepton Software"
                  theme={theme}
                  responsibilities={[
                    "Handling Vi (Vodafone) & Dialog WFM flow, API requirement and development.",
                    "Extensive experience in analysis, design, and implementation of project requirements.",
                    "Working with tools such as WFM and Smart Inventory.",
                    "Handling test flow for tickets raised via HPSM, OWS, NMS, etc.",
                    "Utilizing Oracle SQL Developer & pgAdmin to analyze API errors and ticket issues.",
                    "Conducting API testing in Postman for functional validation.",
                    "Leading a team of 4 developers (backend & frontend).",
                    "Working on MySQL, Postgres, APIs, and Inhouse tools."
                  ]}
                />
                
                <TimelineItem
                  title="Assistant Integration Manager, DotPe (10/2021 – 01/2024, F&B, FinTech)"
                  companyName="DotPe"
                  theme={theme}
                  responsibilities={[
                    "Partnered with Support Manager and IT Product teams to prioritize and address support tickets 24/7.",
                    "Provided product support and maintenance for specific ERP solutions.",
                    "Initiated API Integrations for businesses using PIPE (Postman, Swiggy, Zomato).",
                    "Worked on Data and Strategy using Redash & Snowflake.",
                    "Fixed TAT, SLA for FTP and ADSR integration ticket issues.",
                    "Handled sales dip and ftp data for enterprise clients (Blue Tokai, McD, Biryani Blues, etc.).",
                    "Led website/app integration with 3PO systems & payment gateways.",
                    "Managed inventory, supply chain complexities, and product requirements (ERP, CRM, POS).",
                    "Supervised a team of 6 Solution Managers."
                  ]}
                />
                
                <TimelineItem
                  title="Product Analyst, Planet Spark (04/2021 - 08/2021, EdTech)"
                  companyName="Planet Spark"
                  theme={theme}
                  responsibilities={[
                    "Analyzed product performance and business insights for data-driven decisions.",
                    "Handled CRM (Salesforce) for lead management and user data tracking.",
                    "Managed B2B sales projects for product delivery and customer satisfaction."
                  ]}
                />
                
                <TimelineItem
                  title="Web Developer, Skillvertex (01/2021 - 03/2021, EdTech)"
                  companyName="Skillvertex"
                  theme={theme}
                  responsibilities={[
                    "Developed website using WordPress and HTML/CSS (Front-end).",
                    "Worked on backend data management. Website: skillvertex.in.",
                    "Handled microservices, FR & CR."
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistoryModal;