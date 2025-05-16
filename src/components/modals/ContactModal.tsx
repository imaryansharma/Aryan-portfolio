import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { X, Mail, Phone, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill out all fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // Error
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className={`rounded-lg shadow-xl ${
            theme === 'dark' 
              ? 'bg-[rgba(30,30,45,0.95)] backdrop-blur border border-[rgba(255,255,255,0.1)]' 
              : 'bg-[rgba(255,255,255,0.95)] backdrop-blur border border-[rgba(0,0,0,0.08)]'
          }`}>
            <div className="px-6 pt-5 pb-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-[#f2b632]">
                Get In Touch
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#f2b632] ${
                      theme === 'dark'
                        ? 'border-[rgba(255,255,255,0.2)] text-white'
                        : 'border-[rgba(0,0,0,0.2)] text-gray-800'
                    }`}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#f2b632] ${
                      theme === 'dark'
                        ? 'border-[rgba(255,255,255,0.2)] text-white'
                        : 'border-[rgba(0,0,0,0.2)] text-gray-800'
                    }`}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border bg-transparent focus:outline-none focus:ring-2 focus:ring-[#f2b632] ${
                      theme === 'dark'
                        ? 'border-[rgba(255,255,255,0.2)] text-white'
                        : 'border-[rgba(0,0,0,0.2)] text-gray-800'
                    }`}
                    required
                  />
                </div>
                
                {status.message && (
                  <div className={`mb-4 p-3 rounded ${
                    status.type === 'success'
                      ? 'bg-green-600 bg-opacity-20 text-green-200'
                      : 'bg-red-600 bg-opacity-20 text-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#f2b632] text-[#10101a] font-semibold rounded hover:bg-[#e0a72b] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p>Or reach out directly:</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href="mailto:aryansharma73095@gmail.com"
                    className="px-4 py-2 border border-[#f2b632] text-[#f2b632] rounded hover:bg-[#f2b632] hover:text-[#10101a] transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <a
                    href="https://wa.me/7309544193?text=Hi%20Aryan!"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-white rounded hover:bg-[#20b858] transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;