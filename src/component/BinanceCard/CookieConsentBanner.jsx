// import { useEffect, useState } from "react";
// import { Cookie, Shield } from "lucide-react";

// const CookieConsentModal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("cookieConsent");
//     if (!consent) {
//       const timer = setTimeout(() => {
//         setShowModal(true);
//         setIsAnimating(true);
//         // Disable scroll and prevent interaction
//         document.body.style.overflow = "hidden";
//         document.body.style.pointerEvents = "none";
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("cookieConsent", "true");
//     setIsAnimating(false);
    
//     // Add exit animation delay
//     setTimeout(() => {
//       setShowModal(false);
//       document.body.style.overflow = "auto";
//       document.body.style.pointerEvents = "auto";
//     }, 300);
//   };

//   const handleDecline = () => {
//     localStorage.setItem("cookieConsent", "declined");
//     setIsAnimating(false);
    
//     setTimeout(() => {
//       setShowModal(false);
//       document.body.style.overflow = "auto";
//       document.body.style.pointerEvents = "auto";
//     }, 300);
//   };

//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
//       <div 
//         className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out ${
//           isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}
//         style={{ pointerEvents: 'auto' }}
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
//           <div className="flex items-center space-x-3">
//             <div className="bg-white/20 p-2 rounded-full">
//               <Cookie className="w-6 h-6" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold">Cookie Preferences</h2>
//               <p className="text-blue-100 text-sm">We respect your privacy</p>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-4">
//           <div className="flex items-start space-x-3">
//             <div className="bg-blue-100 p-2 rounded-full mt-1">
//               <Shield className="w-5 h-5 text-blue-600" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
//                 Your data is secure and we never sell it to third parties.
//               </p>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-4 rounded-lg">
//             <h4 className="font-medium text-gray-900 mb-2">What we use cookies for:</h4>
//             <ul className="text-sm text-gray-600 space-y-1">
//               <li>• Essential site functionality</li>
//               <li>• Personalized user experience</li>
//               <li>• Anonymous analytics and improvements</li>
//             </ul>
//           </div>

//           <p className="text-xs text-gray-500 text-center">
//             Read our{" "}
//             <a
//               href="/privacy-policy"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800 underline font-medium"
//             >
//               Privacy Policy
//             </a>{" "}
//             for more information.
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="p-6 pt-0 space-y-3">
//           <button
//             onClick={handleAccept}
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
//           >
//             Accept All Cookies
//           </button>
          
//           <button
//             onClick={handleDecline}
//             className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
//           >
//             Decline Optional Cookies
//           </button>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-4 right-4 opacity-10">
//           <Cookie className="w-12 h-12 text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieConsentModal;


import { useEffect, useState } from "react";
import { Cookie, Shield, X } from "lucide-react";

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowModal(true);
        setIsAnimating(true);
        // Disable scroll and prevent interaction
        document.body.style.overflow = "hidden";
        document.body.style.pointerEvents = "none";
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsAnimating(false);
    
    // Add exit animation delay
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    }, 300);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsAnimating(false);
    
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    }, 300);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4" style={{ zIndex: 99999 }}>
      <div 
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{ pointerEvents: 'auto', position: 'relative' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Cookie Preferences</h2>
              <p className="text-blue-100 text-sm">We respect your privacy</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-full mt-1">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                Your data is secure and we never sell it to third parties.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">What we use cookies for:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Essential site functionality</li>
              <li>• Personalized user experience</li>
              <li>• Anonymous analytics and improvements</li>
            </ul>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Read our{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0 space-y-3">
          <button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Accept All Cookies
          </button>
          
          <button
            onClick={handleDecline}
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
          >
            Decline Optional Cookies
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-10">
          <Cookie className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;