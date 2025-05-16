import { useTheme } from '../../context/ThemeContext';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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
        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-4xl">
          <div className={`rounded-lg shadow-xl ${
            theme === 'dark' 
              ? 'bg-[rgba(30,30,45,0.95)] backdrop-blur border border-[rgba(255,255,255,0.1)]' 
              : 'bg-[rgba(255,255,255,0.95)] backdrop-blur border border-[rgba(0,0,0,0.08)]'
          }`}>
            <div className="px-6 pt-5 pb-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-[#f2b632]">
                My Resume
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 text-center">
              <p className="mb-4">You can download my resume or view it below:</p>
              
              <a 
                href="aryan_sharma_resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-5 py-3 mb-6 bg-[#f2b632] text-[#10101a] font-semibold rounded hover:bg-[#e0a72b] transition-colors shadow-lg hover:shadow-xl hover:shadow-[rgba(242,182,50,0.3)] hover:-translate-y-1 duration-300"
              >
                <Download size={18} />
                Download Resume (PDF)
              </a>
              
              <div 
                className="relative w-full" 
                style={{ paddingBottom: '141.42%' }}
              >
                <iframe
                  src="aryan_sharma_resume.pdf"
                  title="Aryan Sharma Resume"
                  className="absolute top-0 left-0 w-full h-full border-none rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;