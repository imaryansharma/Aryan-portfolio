import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#f2b632] text-[#10101a] flex items-center justify-center shadow-lg hover:bg-[#e0a72b] hover:shadow-[0_0_20px_rgba(242,182,50,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;