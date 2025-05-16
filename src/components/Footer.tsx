import { useTheme } from '../context/ThemeContext';
import { Linkedin, Github as GitHub, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 text-center ${
      theme === 'dark' 
        ? 'bg-[#0a0a10] text-gray-300' 
        : 'bg-white text-gray-800 shadow-[0_-5px_15px_rgba(0,0,0,0.03)]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://www.linkedin.com/in/imaryansharma/"
            target="_blank"
            rel="noreferrer"
            className={`text-3xl transition-all duration-300 hover:text-[#f2b632] hover:scale-110 hover:-translate-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/imaryansharma"
            target="_blank"
            rel="noreferrer"
            className={`text-3xl transition-all duration-300 hover:text-[#f2b632] hover:scale-110 hover:-translate-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            aria-label="GitHub"
          >
            <GitHub size={28} />
          </a>
          <a
            href="mailto:aryansharma73095@gmail.com"
            className={`text-3xl transition-all duration-300 hover:text-[#f2b632] hover:scale-110 hover:-translate-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://wa.me/7309544193?text=Hi%20Aryan!"
            target="_blank"
            rel="noreferrer"
            className={`text-3xl transition-all duration-300 hover:text-[#f2b632] hover:scale-110 hover:-translate-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            aria-label="WhatsApp"
          >
            <Phone size={28} />
          </a>
        </div>
        
        <p className="text-sm">
          © {currentYear} <a href="#" className="text-[#f2b632] no-underline">Aryan Sharma</a>. All Rights Reserved.
        </p>
        
        <p className="text-sm mt-2 opacity-75">
          Designed & Developed with <span className="text-[#f2b632]">❤</span> by Aryan Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;