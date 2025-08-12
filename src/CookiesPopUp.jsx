// /* eslint-disable react/prop-types */
// import { X, Cookie } from 'lucide-react';

// const CookiesPopup = ({ 
//   isOpen, 
//   onAccept, 
//   onDecline, 
//   onClose 
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-40 flex items-end sm:items-center justify-center p-4 animate-fadeIn"
//       style={{ zIndex: 100000 }}
//     >
//       <div className="bg-white rounded-2xl w-full max-w-md mx-auto relative overflow-hidden shadow-2xl transform animate-slideUp">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 z-10 group"
//           aria-label="Close cookies popup"
//         >
//           <X size={20} className="group-hover:rotate-90 transition-transform duration-200" />
//         </button>

//         {/* Content */}
//         <div className="p-6 pt-8">
//           {/* Cookie Icon */}
//           <div className="flex items-center mb-4">
//             <div className="bg-amber-100 rounded-full p-3 mr-3">
//               <Cookie size={24} className="text-amber-600" />
//             </div>
//           </div>

//           {/* Main Text */}
//           <div className="mb-6">
//             <p className="text-gray-800 text-base leading-relaxed">
//               If you accept cookies, we'll use them to improve and customise your experience 
//               and enable our partners to show you personalised PayPal ads when you visit other sites.{' '}
//               <button 
//                 className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
//                 onClick={() => {
//                   // Handle manage cookies action
//                   console.log('Manage cookies clicked');
//                 }}
//               >
//                 Manage cookies and learn more
//               </button>
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button
//               onClick={onAccept}
//               className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Accept
//             </button>
//             <button
//               onClick={onDecline}
//               className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Decline
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookiesPopup;



/* eslint-disable react/prop-types */
import { X, Cookie } from "lucide-react"

const CookiesPopup = ({ isOpen, onAccept, onDecline, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100000]">
      {/* Bottom right positioned popup */}
      <div className="absolute bottom-4 right-4 pointer-events-auto w-full max-w-sm sm:max-w-md lg:max-w-lg animate-slideUp">
        <div className="bg-white rounded-2xl mx-4 sm:mx-0 relative overflow-hidden shadow-2xl border border-gray-100">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-all duration-200 z-10 group"
            aria-label="Close cookies popup"
          >
            <X size={16} className="group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Content */}
          <div className="p-4 sm:p-5 lg:p-6 pt-6 sm:pt-7 lg:pt-8">
            {/* Cookie Icon */}
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="bg-amber-100 rounded-full p-2 sm:p-2.5 lg:p-3 mr-2 sm:mr-3">
                <Cookie size={18} className="text-amber-600 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">Cookie Settings</h3>
            </div>

            {/* Main Text */}
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                We use cookies to improve your experience and show personalized ads.{" "}
                <button
                  className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200 inline"
                  onClick={() => {
                    // Handle manage cookies action
                    console.log("Manage cookies clicked")
                  }}
                >
                  Learn more
                </button>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
              <button
                onClick={onAccept}
                className="flex-1 bg-blue-600 text-white font-semibold py-2 sm:py-2.5 lg:py-3 px-4 sm:px-5 lg:px-6 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm lg:text-base"
              >
                Accept All
              </button>
              <button
                onClick={onDecline}
                className="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 sm:py-2.5 lg:py-3 px-4 sm:px-5 lg:px-6 rounded-full hover:bg-gray-300 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm lg:text-base"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CookiesPopup