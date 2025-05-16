import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, FileText, Mail, Phone } from 'lucide-react';

interface HeroProps {
  openModal: (modalId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  const { theme } = useTheme();
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typedElementRef.current) {
      // Load Typed.js dynamically
      import('typed.js').then((Typed) => {
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }

        typedInstanceRef.current = new Typed.default(typedElementRef.current, {
          strings: [
            "Digital Product Development",
            "Innovative Web Solutions",
            "Mobile App Strategies",
            "API Integration Expertise"
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 2000,
          loop: true,
          smartBackspace: true,
          cursorChar: '_',
        });
      });
    }

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right">
            <p className="text-[#f2b632] font-semibold tracking-wider uppercase mb-2">
              Aryan Sharma
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span ref={typedElementRef} className="text-[#f2b632]"></span>
              <br />for Disruptors.
            </h1>
            
            <p className="text-lg max-w-xl mb-8 opacity-90">
              I specialize in turning innovative ideas into impactful digital products, 
              with a passion for identifying and addressing unmet customer needs. With 4 years of experience in Product & Project Management,
              I've worked with enterprise clients across F&B, Telecom, EdTech, and FinTech.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button 
                className="px-5 py-3 bg-[#f2b632] text-[#10101a] font-semibold rounded hover:bg-[#e0a72b] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[rgba(242,182,50,0.3)] hover:-translate-y-1 duration-300"
                onClick={() => openModal('workHistory')}
              >
                <Briefcase size={18} />
                Work History
              </button>
              
              <button 
                className="px-5 py-3 border border-[#f2b632] text-[#f2b632] font-semibold rounded hover:bg-[#f2b632] hover:text-[#10101a] transition-colors flex items-center gap-2 hover:-translate-y-1 duration-300"
                onClick={() => openModal('resume')}
              >
                <FileText size={18} />
                View Resume
              </button>
              
              <a 
                href="mailto:aryansharma73095@gmail.com" 
                className="px-5 py-3 bg-[#f2b632] text-[#10101a] font-semibold rounded hover:bg-[#e0a72b] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[rgba(242,182,50,0.3)] hover:-translate-y-1 duration-300"
              >
                <Mail size={18} />
                Contact Me
              </a>
              
              <a 
                href="https://wa.me/7309544193?text=Hi%20Aryan!%20I%20saw%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#25D366] text-white font-semibold rounded hover:bg-[#20b858] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <img 
                src="aryanimg.jpeg"
                alt="Aryan Sharma"
                className={`max-w-[70%] md:max-w-[60%] lg:max-w-[70%] rounded-lg border-4 border-[#f2b632] transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  theme === 'dark' 
                    ? 'shadow-[0_0_30px_rgba(242,182,50,0.3),0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'shadow-[0_0_20px_rgba(242,182,50,0.4),0_10px_30px_rgba(0,0,0,0.2)]'
                }`}
              />
              <div className="absolute inset-0 border-4 border-[#f2b632] rounded-lg opacity-20 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;