
import { Download, Smartphone, QrCode, X, Apple, PlayCircle } from 'lucide-react';

// Mock card image - replace with your actual cashapp image
const cashapp = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' rx='15' fill='%2300d632'/%3E%3Ctext x='150' y='90' text-anchor='middle' dy='0.3em' fill='white' font-size='24' font-weight='bold'%3ECashApp%3C/text%3E%3Ctext x='150' y='120' text-anchor='middle' dy='0.3em' fill='white' font-size='16'%3ECrypto Card%3C/text%3E%3C/svg%3E";

// Mock QR code - replace with your actual QR code image
const qrCodeImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cg fill='black'%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3Crect x='60' y='20' width='20' height='20'/%3E%3Crect x='100' y='20' width='20' height='20'/%3E%3Crect x='140' y='20' width='20' height='20'/%3E%3Crect x='180' y='20' width='20' height='20'/%3E%3Crect x='20' y='60' width='20' height='20'/%3E%3Crect x='100' y='60' width='20' height='20'/%3E%3Crect x='180' y='60' width='20' height='20'/%3E%3Crect x='20' y='100' width='20' height='20'/%3E%3Crect x='60' y='100' width='20' height='20'/%3E%3Crect x='100' y='100' width='20' height='20'/%3E%3Crect x='140' y='100' width='20' height='20'/%3E%3Crect x='180' y='100' width='20' height='20'/%3E%3Crect x='20' y='140' width='20' height='20'/%3E%3Crect x='100' y='140' width='20' height='20'/%3E%3Crect x='180' y='140' width='20' height='20'/%3E%3Crect x='20' y='180' width='20' height='20'/%3E%3Crect x='60' y='180' width='20' height='20'/%3E%3Crect x='100' y='180' width='20' height='20'/%3E%3Crect x='140' y='180' width='20' height='20'/%3E%3Crect x='180' y='180' width='20' height='20'/%3E%3C/g%3E%3C/svg%3E";

const DownloadModal = ({ isOpen, onClose, appName,qrCode  }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-4">
            <Smartphone className="mx-auto text-blue-500 mb-2" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Download {appName}</h3>
            <p className="text-gray-600">Scan the QR code or choose your platform</p>
          </div>
          
          {/* QR Code Section */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <QrCode className="text-gray-500 mr-2" size={20} />
              <span className="text-sm font-medium text-gray-700">Scan with your phone</span>
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
          {/* <div className="space-y-3">
            <button className="w-full bg-black text-white py-3 px-4 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors">
              <Apple className="mr-3" size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
            
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors">
              <PlayCircle className="mr-3" size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default DownloadModal