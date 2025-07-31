/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

const PaymentAddressCopy = ({ paymentAddress, selectedOption }) => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Format the payment address to show truncated version on mobile
  const formatAddress = (address) => {
    if (isMobile && address.length > 20) {
      return `${address.slice(0, 10)}...${address.slice(-10)}`;
    }
    return address;
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <p className="text-sm font-medium text-center mb-2">
        Or copy this {selectedOption.toUpperCase()} address:
      </p>
      
      <div className="relative group">
        <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md">
          <div className="py-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide text-sm font-mono select-all flex-1 text-slate-700 dark:text-slate-300">
            {formatAddress(paymentAddress)}
          </div>
          
          <button
            onClick={handleCopy}
            className={`min-w-16 h-full py-3 px-4 flex items-center justify-center transition-colors ${
              copied 
                ? "bg-green-500 text-white" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
        
        {isMobile && (
          <div className="absolute -bottom-5 left-0 right-0 text-xs text-center text-slate-500 dark:text-slate-400">
            Tap to view full address
          </div>
        )}
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className={`w-2 h-2 rounded-full ${selectedOption === 'btc' ? 'bg-orange-400' : selectedOption === 'eth' ? 'bg-blue-400' : 'bg-green-400'}`}></div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {selectedOption === 'btc' ? 'Bitcoin' : selectedOption === 'eth' ? 'Ethereum' : 'Tron'} network only
        </p>
      </div>
    </div>
  );
};

export default PaymentAddressCopy;