import { useTheme } from '../context/ThemeContext';
import { Linkedin, Newspaper } from 'lucide-react';

const LinkedInSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="linkedinPosts" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="inline-block text-4xl font-bold text-[#f2b632] mb-16 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f2b632] after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:rounded-md"
          data-aos="fade-up"
        >
          Connect & Insights
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div 
            className={`p-10 rounded-lg backdrop-blur transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-[rgba(30,30,45,0.7)] border border-[rgba(255,255,255,0.1)]' 
                : 'bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.08)]'
            }`}
            data-aos="fade-up"
          >
            <Linkedin size={64} className="text-[#f2b632] mx-auto mb-6" />
            
            <h3 className="text-2xl font-semibold text-[#f2b632] mb-4">
              Stay Updated with My Professional Journey
            </h3>
            
            <p className="mb-8 opacity-90">
              Follow me on LinkedIn for my latest articles, product insights, and career updates. Let's connect and share knowledge!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/imaryansharma/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#f2b632] text-[#10101a] font-semibold rounded hover:bg-[#e0a72b] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[rgba(242,182,50,0.3)] hover:-translate-y-1 duration-300"
              >
                <Linkedin size={18} />
                Visit My LinkedIn Profile
              </a>
              
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7328280775320129536/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-[#f2b632] text-[#f2b632] font-semibold rounded hover:bg-[#f2b632] hover:text-[#10101a] transition-colors flex items-center gap-2 hover:-translate-y-1 duration-300"
              >
                <Newspaper size={18} />
                View Specific Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;