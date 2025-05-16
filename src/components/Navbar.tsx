import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  openModal: (modalId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'services', 'skills', 'projects', 'linkedinPosts', 'testimonials'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8 py-4 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[rgba(20,20,30,0.8)] backdrop-blur shadow-md'
            : 'bg-[rgba(255,255,255,0.8)] backdrop-blur shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-[#f2b632]"
        >
          Aryan Sharma
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#f2b632] mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#f2b632] mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#f2b632] transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Navigation */}
        <div className={`lg:flex items-center hidden`}>
          <ul className="flex gap-5 mr-4">
            <li>
              <a 
                href="#home"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'home' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'services' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'skills' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'projects' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#linkedinPosts"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'linkedinPosts' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Posts
              </a>
            </li>
            <li>
              <a 
                href="#testimonials"
                className={`transition-colors hover:text-[#f2b632] ${
                  activeSection === 'testimonials' ? 'text-[#f2b632]' : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded border border-[#f2b632] text-[#f2b632] hover:bg-[#f2b632] hover:text-[#10101a] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 bg-[#10101a] bg-opacity-95 z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 mt-12">
            <li>
              <a 
                href="#home"
                className={`text-xl ${
                  activeSection === 'home' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services"
                className={`text-xl ${
                  activeSection === 'services' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#skills"
                className={`text-xl ${
                  activeSection === 'skills' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects"
                className={`text-xl ${
                  activeSection === 'projects' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#linkedinPosts"
                className={`text-xl ${
                  activeSection === 'linkedinPosts' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Posts
              </a>
            </li>
            <li>
              <a 
                href="#testimonials"
                className={`text-xl ${
                  activeSection === 'testimonials' ? 'text-[#f2b632]' : 'text-white'
                }`}
                onClick={handleLinkClick}
              >
                Testimonials
              </a>
            </li>
            <li className="mt-4">
              <button
                onClick={() => {
                  toggleTheme();
                  handleLinkClick();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded border border-[#f2b632] text-[#f2b632]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;