
import { Download, Smartphone, QrCode, X, Apple, PlayCircle } from 'lucide-react';


const DownloadModal = ({ isOpen, onClose, appName,qrCode, appStoreLink  }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:mt-24">
      <div className="bg-gradient-to-b from-[#550665] to-[#27012F]   rounded-2xl max-w-md w-full p-6 relative animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-4">
            <img src='/easy-withdraw-logo.png' className="mx-auto mb-2" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">Download {appName}</h3>
            <p className="text-white">Scan the QR code or choose your platform</p>
          </div>
          
          {/* QR Code Section */}
          <div className="mb-6 p-4  rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <QrCode className="text-gray-500 mr-2" size={20} />
              <span className="text-sm font-medium text-white">Scan with your phone</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
              <img 
                src={qrCode} 
                alt="Download QR Code" 
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>
          
          {/* Download Buttons */}
           <div className="space-y-3">
            {appStoreLink && (
  <a 
    href={appStoreLink} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full bg-black text-white py-3 px-4 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors"
  >
    <Apple className="mr-3" size={24} />
    <div className="text-left">
      <div className="text-xs">Download on the</div>
      <div className="text-lg font-semibold">App Store</div>
    </div>
  </a>
)}

          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadModal



