import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const Testimonials = () => {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Aryan has an exceptional ability to understand complex product requirements and translate them into actionable development tasks. His technical knowledge combined with product thinking makes him a valuable asset to any team.",
      author: "Akash Thakur",
      role: "Assistant Manager, DotPe"
    },
    {
      id: 2,
      text: "Working with Aryan on API integrations was a seamless experience. His attention to detail and problem-solving skills ensured our projects were delivered on time with high quality standards.",
      author: "Praveen Sharma",
      role: "Senior Backend Developer, Lepton Software"
    }
  ];
  
  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };
  
  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className={`py-20 ${theme === 'dark' ? 'bg-[#0a0a10]' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="inline-block text-4xl font-bold text-[#f2b632] mb-16 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#f2b632] after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:rounded-md"
          data-aos="fade-up"
        >
          What Colleagues Say
        </h2>
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`p-8 md:p-10 rounded-lg border-l-4 border-[#f2b632] text-left ${
                      theme === 'dark' 
                        ? 'bg-[rgba(30,30,45,0.7)] border-t border-r border-b border-[rgba(255,255,255,0.1)]' 
                        : 'bg-[rgba(255,255,255,0.8)] border-t border-r border-b border-[rgba(0,0,0,0.08)]'
                    }`}>
                      <p className="italic mb-6">{`"${testimonial.text}"`}</p>
                      <div className="mt-auto">
                        <div className="font-semibold text-[#f2b632]">{testimonial.author}</div>
                        <div className="text-sm opacity-80">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 p-2 rounded-full bg-[#f2b632] text-[#10101a] shadow-lg hover:bg-[#e0a72b] transition-colors focus:outline-none z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 p-2 rounded-full bg-[#f2b632] text-[#10101a] shadow-lg hover:bg-[#e0a72b] transition-colors focus:outline-none z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-[#f2b632] w-8' 
                    : theme === 'dark' 
                      ? 'bg-gray-600' 
                      : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;