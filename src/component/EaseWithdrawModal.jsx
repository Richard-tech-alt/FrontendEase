/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // /* eslint-disable react/prop-types */
// // // /* eslint-disable react/prop-types */
// // // // import React, { useState } from 'react';
// // // // import { X, DollarSign, Lock, Flag } from 'lucide-react';


// // // // const EaseWithdrawModal = ({ isOpen, onClose }) => {
// // // //   const [mobileNumber, setMobileNumber] = useState('');
// // // //   const [notifyUpdates, setNotifyUpdates] = useState(false);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     // Basic validation
// // // //     if (!mobileNumber || mobileNumber.length !== 10) {
// // // //       alert('Please enter a valid 10-digit mobile number');
// // // //       return;
// // // //     }

// // // //     setIsSubmitting(true);
    
// // // //     try {
// // // //       // Handle form submission logic here
// // // //       console.log('Mobile:', mobileNumber, 'Notify:', notifyUpdates);
      
// // // //       // Simulate API call
// // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // //       // Close modal after successful submission
// // // //       onClose();
      
// // // //       // You can add success notification here
// // // //       alert('Application submitted successfully!');
      
// // // //     } catch (error) {
// // // //       console.error('Submission error:', error);
// // // //       alert('Something went wrong. Please try again.');
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   const handleMobileChange = (e) => {
// // // //     const value = e.target.value.replace(/\D/g, ''); // Only allow digits
// // // //     if (value.length <= 10) {
// // // //       setMobileNumber(value);
// // // //     }
// // // //   };

// // // //   if (!isOpen) return null;

// // // //   return (
// // // //     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[9999] animate-fadeIn">
// // // //       <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl w-full max-w-md mx-auto relative overflow-hidden shadow-2xl transform animate-slideUp">
// // // //         {/* Close Button */}
// // // //         <button
// // // //           onClick={onClose}
// // // //           className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 z-10 group"
// // // //           aria-label="Close modal"
// // // //         >
// // // //           <X size={24} className="group-hover:rotate-90 transition-transform duration-200" />
// // // //         </button>

// // // //         {/* Header Section */}
// // // //         <div className="px-6 pt-8 pb-6 text-center">
// // // //           <h1 className="text-white text-3xl font-bold mb-6 tracking-wide">
// // // //             EaseWithdraw
// // // //           </h1>
          
// // // //           <h2 className="text-white text-2xl font-bold mb-8 leading-tight">
// // // //             GET ₹500 CREDIT<br />
// // // //             LINE INSTANTLY
// // // //           </h2>

// // // //           {/* Features */}
// // // //           <div className="space-y-4 mb-8">
// // // //             <div className="flex items-center justify-center text-white group">
// // // //               <div className="bg-yellow-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
// // // //                 <DollarSign size={20} className="text-black" />
// // // //               </div>
// // // //               <span className="text-lg font-medium">Instant approval</span>
// // // //             </div>
            
// // // //             <div className="flex items-center justify-center text-white group">
// // // //               <div className="bg-green-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
// // // //                 <Lock size={20} className="text-black" />
// // // //               </div>
// // // //               <span className="text-lg font-medium">No CIBIL required</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Form Section */}
// // // //         <div className="bg-white rounded-t-3xl px-6 pt-8 pb-6">
// // // //           <h3 className="text-gray-800 text-xl font-semibold text-center mb-6">
// // // //             Login / Signup
// // // //           </h3>

// // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // //             {/* Mobile Number Input */}
// // // //             <div className="relative">
// // // //               <div className="flex">
// // // //                 <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3 py-3">
// // // //                   <Flag size={18} className="text-orange-500 mr-2" />
// // // //                   <span className="text-gray-700 font-medium">+91</span>
// // // //                 </div>
// // // //                 <input
// // // //                   type="tel"
// // // //                   value={mobileNumber}
// // // //                   onChange={handleMobileChange}
// // // //                   placeholder="Enter Mobile Number"
// // // //                   className="flex-1 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
// // // //                   maxLength={10}
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               {mobileNumber && mobileNumber.length < 10 && (
// // // //                 <p className="text-red-500 text-xs mt-1">Please enter a 10-digit mobile number</p>
// // // //               )}
// // // //             </div>

// // // //             {/* Checkbox */}
// // // //             <div className="flex items-start">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 id="notify"
// // // //                 checked={notifyUpdates}
// // // //                 onChange={(e) => setNotifyUpdates(e.target.checked)}
// // // //                 className="mt-1 h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
// // // //               />
// // // //               <label htmlFor="notify" className="ml-3 text-gray-600 text-sm leading-relaxed cursor-pointer">
// // // //                 Notify me for any updates & offers
// // // //               </label>
// // // //             </div>

// // // //             {/* Submit Button */}
// // // //             <button
// // // //               type="submit"
// // // //               disabled={isSubmitting || !mobileNumber || mobileNumber.length !== 10}
// // // //               className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
// // // //             >
// // // //               {isSubmitting ? (
// // // //                 <div className="flex items-center justify-center">
// // // //                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// // // //                   Submitting...
// // // //                 </div>
// // // //               ) : (
// // // //                 'Submit'
// // // //               )}
// // // //             </button>

// // // //             {/* Footer Text */}
// // // //             <p className="text-gray-500 text-xs text-center leading-relaxed">
// // // //               By continuing, you agree to our{' '}
// // // //               <button type="button" className="text-pink-500 font-medium hover:underline">
// // // //                 Privacy Policy
// // // //               </button>{' '}
// // // //               &{' '}
// // // //               <button type="button" className="text-pink-500 font-medium hover:underline">
// // // //                 TSC
// // // //               </button>
// // // //             </p>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EaseWithdrawModal;




// // import  { useState } from 'react';
// // import { X, DollarSign, Lock, Flag } from 'lucide-react';

// // const EaseWithdrawModal = ({ isOpen, onClose }) => {
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [notifyUpdates, setNotifyUpdates] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     // Basic validation
// //     if (!mobileNumber || mobileNumber.length !== 10) {
// //       alert('Please enter a valid 10-digit mobile number');
// //       return;
// //     }

// //     setIsSubmitting(true);
    
// //     try {
// //       // Handle form submission logic here
// //       console.log('Mobile:', mobileNumber, 'Notify:', notifyUpdates);
      
// //       // Simulate API call
// //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// //       // Close modal after successful submission
// //       onClose();
      
// //       // You can add success notification here
// //       alert('Application submitted successfully!');
      
// //     } catch (error) {
// //       console.error('Submission error:', error);
// //       alert('Something went wrong. Please try again.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleMobileChange = (e) => {
// //     const value = e.target.value.replace(/\D/g, ''); // Only allow digits
// //     if (value.length <= 10) {
// //       setMobileNumber(value);
// //     }
// //   };

// //   if (!isOpen) return null;

// //   console.log('Modal is rendering with isOpen:', isOpen); // Debug log

// //   return (
// //     <div 
// //       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 animate-fadeIn"
// //       style={{ zIndex: 99999 }}
// //     >
// //       <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl w-full max-w-md mx-auto relative overflow-hidden shadow-2xl transform animate-slideUp">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 z-10 group"
// //           aria-label="Close modal"
// //         >
// //           <X size={24} className="group-hover:rotate-90 transition-transform duration-200" />
// //         </button>

// //         {/* Header Section */}
// //         <div className="px-12 pt-8 pb-6 text-center">
// //           <img src='/easy-withdraw-logo.png' className="text-white text-3xl font-bold mb-6 tracking-wide"/>
          
          
          
// // <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
// //   GET <span className="inline-flex items-baseline">
// //     <DollarSign size={20} className="text-black" />
// // 500
// //   </span> CREDIT<br />
// //   LINE INSTANTLY
// // </h2>


// //           {/* Features */}
// //           <div className="space-y-4">
// //             <div className="flex items-center justify-center text-white group">
// //               <div className="bg-yellow-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
// //                 <DollarSign size={20} className="text-black" />
// //               </div>
// //               <span className="text-lg font-medium">Instant approval</span>
// //             </div>
            
// //             <div className="flex items-center justify-center text-white group">
// //               <div className="bg-green-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
// //                 <Lock size={20} className="text-black" />
// //               </div>
// //               <span className="text-lg font-medium">No CIBIL required</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Form Section */}
// //         <div className="bg-white rounded-t-3xl px-6 pt-8 pb-6">
// //           <h3 className="text-gray-800 text-xl font-semibold text-center mb-6">
// //             Login / Signup
// //           </h3>

// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* Mobile Number Input */}
// //             <div className="relative">
// //               <div className="flex">
// //                 <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3 py-3">
// //                   <Flag size={18} className="text-orange-500 mr-2" />
// //                   <span className="text-gray-700 font-medium">+91</span>
// //                 </div>
// //                 <input
// //                   type="tel"
// //                   value={mobileNumber}
// //                   onChange={handleMobileChange}
// //                   placeholder="Enter Mobile Number"
// //                   className="flex-1 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
// //                   maxLength={10}
// //                   required
// //                 />
// //               </div>
// //               {mobileNumber && mobileNumber.length < 10 && (
// //                 <p className="text-red-500 text-xs mt-1">Please enter a 10-digit mobile number</p>
// //               )}
// //             </div>

// //             {/* Checkbox */}
// //             <div className="flex items-start">
// //               <input
// //                 type="checkbox"
// //                 id="notify"
// //                 checked={notifyUpdates}
// //                 onChange={(e) => setNotifyUpdates(e.target.checked)}
// //                 className="mt-1 h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
// //               />
// //               <label htmlFor="notify" className="ml-3 text-gray-600 text-sm leading-relaxed cursor-pointer">
// //                 Notify me for any updates & offers
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               disabled={isSubmitting || !mobileNumber || mobileNumber.length !== 10}
// //               className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
// //             >
// //               {isSubmitting ? (
// //                 <div className="flex items-center justify-center">
// //                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// //                   Submitting...
// //                 </div>
// //               ) : (
// //                 'Submit'
// //               )}
// //             </button>

// //             {/* Footer Text */}
// //             <p className="text-gray-500 text-xs text-center leading-relaxed">
// //               By continuing, you agree to our{' '}
// //               <button type="button" className="text-pink-500 font-medium hover:underline">
// //                 Privacy Policy
// //               </button>{' '}
// //               &{' '}
// //               <button type="button" className="text-pink-500 font-medium hover:underline">
// //                 TSC
// //               </button>
// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EaseWithdrawModal;





// import { useState, useRef, useEffect } from 'react';
// import { X, DollarSign, Lock, Flag, ChevronDown, Search } from 'lucide-react';

// const countryCodes = [
//   { code: "+1", country: "US", name: "United States" },
//   { code: "+1", country: "CA", name: "Canada" },
//   { code: "+44", country: "GB", name: "United Kingdom" },
//   { code: "+91", country: "IN", name: "India" },
//   { code: "+86", country: "CN", name: "China" },
//   { code: "+81", country: "JP", name: "Japan" },
//   { code: "+49", country: "DE", name: "Germany" },
//   { code: "+33", country: "FR", name: "France" },
//   { code: "+39", country: "IT", name: "Italy" },
//   { code: "+55", country: "BR", name: "Brazil" },
//   { code: "+52", country: "MX", name: "Mexico" },
//   { code: "+7", country: "RU", name: "Russia" },
//   { code: "+61", country: "AU", name: "Australia" },
//   { code: "+971", country: "AE", name: "United Arab Emirates" },
//   { code: "+20", country: "EG", name: "Egypt" },
//   { code: "+27", country: "ZA", name: "South Africa" },
//   { code: "+82", country: "KR", name: "South Korea" },
//   { code: "+66", country: "TH", name: "Thailand" },
//   { code: "+65", country: "SG", name: "Singapore" },
//   { code: "+60", country: "MY", name: "Malaysia" },
// ];

// const EaseWithdrawModal = ({ isOpen, onClose }) => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [notifyUpdates, setNotifyUpdates] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countryCodes[3]); // Default to India
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
  
//   const dropdownRef = useRef(null);
//   const buttonRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current && 
//         !dropdownRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false);
//         setSearchQuery('');
//       }
//     };

//     if (isDropdownOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   const filteredCountries = countryCodes.filter(country =>
//     country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     country.code.includes(searchQuery) ||
//     country.country.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getCountryFlag = (countryCode) => {
//     const flagMap = {
//       'US': '🇺🇸', 'CA': '🇨🇦', 'GB': '🇬🇧', 'IN': '🇮🇳', 'CN': '🇨🇳',
//       'JP': '🇯🇵', 'DE': '🇩🇪', 'FR': '🇫🇷', 'IT': '🇮🇹', 'BR': '🇧🇷',
//       'MX': '🇲🇽', 'RU': '🇷🇺', 'AU': '🇦🇺', 'AE': '🇦🇪', 'EG': '🇪🇬',
//       'ZA': '🇿🇦', 'KR': '🇰🇷', 'TH': '🇹🇭', 'SG': '🇸🇬', 'MY': '🇲🇾'
//     };
//     return flagMap[countryCode] || '🏳️';
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setIsDropdownOpen(false);
//     setSearchQuery('');
//   };

//   // Reset search query when dropdown closes
//   useEffect(() => {
//     if (!isDropdownOpen) {
//       setSearchQuery('');
//     }
//   }, [isDropdownOpen]);

//   const handleSubmit = async () => {
//     // Basic validation
//     if (!mobileNumber || mobileNumber.length < 7) {
//       alert('Please enter a valid mobile number');
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Handle form submission logic here
//       console.log('Country Code:', selectedCountry.code, 'Mobile:', mobileNumber, 'Notify:', notifyUpdates);
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Close modal after successful submission
//       onClose();
      
//       // You can add success notification here
//       alert('Application submitted successfully!');
      
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleMobileChange = (e) => {
//     const value = e.target.value.replace(/\D/g, ''); // Only allow digits
//     setMobileNumber(value);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black bg-opacity-60 animate-fadeIn"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl w-full max-w-md mx-auto overflow-visible shadow-2xl transform animate-slideUp">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 z-10 group"
//           aria-label="Close modal"
//         >
//           <X size={24} className="group-hover:rotate-90 transition-transform duration-200" />
//         </button>

//         {/* Header Section */}
//         <div className="px-12 pt-8 pb-6 text-center">
//           <div className="text-white text-3xl font-bold mb-6 tracking-wide">
//             <Flag size={32} className="inline-block mr-2" />
//             EasyWithdraw
//           </div>
          
//           <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
//             GET <span className="inline-flex items-baseline">
//               <DollarSign size={20} className="text-black" />
//               500
//             </span> CREDIT<br />
//             LINE INSTANTLY
//           </h2>

//           {/* Features */}
//           <div className="space-y-4">
//             <div className="flex items-center justify-center text-white group">
//               <div className="bg-yellow-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
//                 <DollarSign size={20} className="text-black" />
//               </div>
//               <span className="text-lg font-medium">Instant approval</span>
//             </div>
            
//             <div className="flex items-center justify-center text-white group">
//               <div className="bg-green-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
//                 <Lock size={20} className="text-black" />
//               </div>
//               <span className="text-lg font-medium">No CIBIL required</span>
//             </div>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="bg-white rounded-t-3xl px-6 pt-8 pb-6 relative overflow-visible">
//           <h3 className="text-gray-800 text-xl font-semibold text-center mb-6">
//             Login / Signup
//           </h3>

//           <div className="space-y-6">
//             {/* Mobile Number Input with Country Selector */}
//             <div className="relative">
//               <div className="flex relative">
//                 {/* Country Code Selector */}
//                 <div className="relative">
//                   <button
//                     ref={buttonRef}
//                     type="button"
//                     onClick={toggleDropdown}
//                     className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3 py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 min-w-[120px] relative"
//                   >
//                     <span className="text-xl mr-2">{getCountryFlag(selectedCountry.country)}</span>
//                     <span className="text-gray-700 font-medium mr-2">{selectedCountry.code}</span>
//                     <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {/* Dropdown */}
//                   {isDropdownOpen && (
//                     <div 
//                       ref={dropdownRef}
//                       className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-2xl z-[10000] mt-1 min-w-[320px] max-h-80 overflow-hidden"
//                       style={{ 
//                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
//                       }}
//                     >
//                       {/* Search Input */}
//                       <div className="p-3 border-b border-gray-200 bg-white sticky top-0 z-[10001]">
//                         <div className="relative">
//                           <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                           <input
//                             type="text"
//                             placeholder="Search countries..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
//                             autoComplete="off"
//                           />
//                         </div>
//                       </div>

//                       {/* Countries List */}
//                       <div className="max-h-64 overflow-y-auto">
//                         {filteredCountries.length > 0 ? (
//                           filteredCountries.map((country, index) => (
//                             <button
//                               key={`${country.country}-${country.code}-${index}`}
//                               type="button"
//                               onClick={() => handleCountrySelect(country)}
//                               className="w-full flex items-center px-4 py-3 hover:bg-pink-50 cursor-pointer transition-colors duration-150 border-b border-gray-50 last:border-b-0 text-left"
//                             >
//                               <span className="text-xl mr-3 flex-shrink-0">{getCountryFlag(country.country)}</span>
//                               <span className="text-gray-700 font-medium mr-3 min-w-[60px] flex-shrink-0">{country.code}</span>
//                               <span className="text-gray-600 text-sm truncate flex-1">{country.name}</span>
//                             </button>
//                           ))
//                         ) : (
//                           <div className="px-4 py-8 text-gray-500 text-sm text-center">
//                             No countries found
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Phone Number Input */}
//                 <input
//                   type="tel"
//                   value={mobileNumber}
//                   onChange={handleMobileChange}
//                   placeholder="Enter Mobile Number"
//                   className="flex-1 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
//                   required
//                 />
//               </div>
//               {mobileNumber && mobileNumber.length < 7 && (
//                 <p className="text-red-500 text-xs mt-1">Please enter a valid mobile number</p>
//               )}
//             </div>

//             {/* Checkbox */}
//             <div className="flex items-start">
//               <input
//                 type="checkbox"
//                 id="notify"
//                 checked={notifyUpdates}
//                 onChange={(e) => setNotifyUpdates(e.target.checked)}
//                 className="mt-1 h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
//               />
//               <label htmlFor="notify" className="ml-3 text-gray-600 text-sm leading-relaxed cursor-pointer">
//                 Notify me for any updates & offers
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={isSubmitting || !mobileNumber || mobileNumber.length < 7}
//               className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center justify-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Submitting...
//                 </div>
//               ) : (
//                 'Submit'
//               )}
//             </button>

//             {/* Footer Text */}
//             <p className="text-gray-500 text-xs text-center leading-relaxed">
//               By continuing, you agree to our{' '}
//               <button type="button" className="text-pink-500 font-medium hover:underline">
//                 Privacy Policy
//               </button>{' '}
//               &{' '}
//               <button type="button" className="text-pink-500 font-medium hover:underline">
//                 TSC
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Demo Component to test the modal
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Country Code Selector Demo</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-200 font-semibold"
//         >
//           Open Modal
//         </button>
//       </div>
      
//       <EaseWithdrawModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </div>
//   );
// };

// export default App;


  // import { useState, useRef, useEffect } from 'react';
  // import { X, DollarSign, Lock, Flag, ChevronDown, Search } from 'lucide-react';

  // const countryCodes = [
  //   { code: "+1", country: "US", name: "United States" },
  //   { code: "+1", country: "CA", name: "Canada" },
  //   { code: "+44", country: "GB", name: "United Kingdom" },
  //   { code: "+91", country: "IN", name: "India" },
  //   { code: "+86", country: "CN", name: "China" },
  //   { code: "+81", country: "JP", name: "Japan" },
  //   { code: "+49", country: "DE", name: "Germany" },
  //   { code: "+33", country: "FR", name: "France" },
  //   { code: "+39", country: "IT", name: "Italy" },
  //   { code: "+55", country: "BR", name: "Brazil" },
  //   { code: "+52", country: "MX", name: "Mexico" },
  //   { code: "+7", country: "RU", name: "Russia" },
  //   { code: "+61", country: "AU", name: "Australia" },
  //   { code: "+971", country: "AE", name: "United Arab Emirates" },
  //   { code: "+20", country: "EG", name: "Egypt" },
  //   { code: "+27", country: "ZA", name: "South Africa" },
  //   { code: "+82", country: "KR", name: "South Korea" },
  //   { code: "+66", country: "TH", name: "Thailand" },
  //   { code: "+65", country: "SG", name: "Singapore" },
  //   { code: "+60", country: "MY", name: "Malaysia" },
  // ];

  // const EaseWithdrawModal = ({ isOpen, onClose }) => {
  //   const [mobileNumber, setMobileNumber] = useState('');
  //   const [notifyUpdates, setNotifyUpdates] = useState(false);
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to India
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const [searchQuery, setSearchQuery] = useState('');
    
  //   const dropdownRef = useRef(null);
  //   const buttonRef = useRef(null);

  //   // Close dropdown when clicking outside
  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (
  //         dropdownRef.current && 
  //         !dropdownRef.current.contains(event.target) &&
  //         buttonRef.current &&
  //         !buttonRef.current.contains(event.target)
  //       ) {
  //         setIsDropdownOpen(false);
  //         setSearchQuery('');
  //       }
  //     };

  //     if (isDropdownOpen) {
  //       document.addEventListener('mousedown', handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [isDropdownOpen]);

  //   const filteredCountries = countryCodes.filter(country =>
  //     country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     country.code.includes(searchQuery) ||
  //     country.country.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  //   const getCountryFlag = (countryCode) => {
  //     const flagMap = {
  //       'US': '🇺🇸', 'CA': '🇨🇦', 'GB': '🇬🇧', 'IN': '🇮🇳', 'CN': '🇨🇳',
  //       'JP': '🇯🇵', 'DE': '🇩🇪', 'FR': '🇫🇷', 'IT': '🇮🇹', 'BR': '🇧🇷',
  //       'MX': '🇲🇽', 'RU': '🇷🇺', 'AU': '🇦🇺', 'AE': '🇦🇪', 'EG': '🇪🇬',
  //       'ZA': '🇿🇦', 'KR': '🇰🇷', 'TH': '🇹🇭', 'SG': '🇸🇬', 'MY': '🇲🇾'
  //     };
  //     return flagMap[countryCode] || '🏳️';
  //   };

  //   const handleCountrySelect = (country) => {
  //     setSelectedCountry(country);
  //     setIsDropdownOpen(false);
  //     setSearchQuery('');
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
      
  //     // Basic validation
  //     if (!mobileNumber || mobileNumber.length !== 10) {
  //       alert('Please enter a valid 10-digit mobile number');
  //       return;
  //     }

  //     setIsSubmitting(true);
      
  //     try {
  //       // Handle form submission logic here
  //       console.log('Country Code:', selectedCountry.code, 'Mobile:', mobileNumber, 'Notify:', notifyUpdates);
        
  //       // Simulate API call
  //       await new Promise(resolve => setTimeout(resolve, 1000));
        
  //       // Close modal after successful submission
  //       onClose();
        
  //       // You can add success notification here
  //       alert('Application submitted successfully!');
        
  //     } catch (error) {
  //       console.error('Submission error:', error);
  //       alert('Something went wrong. Please try again.');
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  //   const handleMobileChange = (e) => {
  //     const value = e.target.value.replace(/\D/g, ''); // Only allow digits
  //     if (value.length <= 10) {
  //       setMobileNumber(value);
  //     }
  //   };

  //   if (!isOpen) return null;

  //   console.log('Modal is rendering with isOpen:', isOpen); // Debug log

  //   return (
  //     <div 
  //       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 animate-fadeIn"
  //       style={{ zIndex: 99999 }}
  //     >
  //       <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-3xl w-full max-w-md mx-auto relative overflow-visible shadow-2xl transform animate-slideUp">
  //         {/* Close Button */}
  //         <button
  //           onClick={onClose}
  //           className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 z-10 group"
  //           aria-label="Close modal"
  //         >
  //           <X size={24} className="group-hover:rotate-90 transition-transform duration-200" />
  //         </button>

  //         {/* Header Section */}
  //         <div className="px-12 pt-8 pb-6 text-center">
  //           <img src='/easy-withdraw-logo.png' className="text-white text-3xl font-bold mb-6 tracking-wide"/>
            
  //           <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
  //             GET <span className="inline-flex items-baseline">
  //               <DollarSign size={20} className="text-black" />
  //               500
  //             </span> CREDIT<br />
  //             LINE INSTANTLY
  //           </h2>

  //           {/* Features */}
  //           <div className="space-y-4">
  //             <div className="flex items-center justify-center text-white group">
  //               <div className="bg-yellow-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
  //                 <DollarSign size={20} className="text-black" />
  //               </div>
  //               <span className="text-lg font-medium">Instant approval</span>
  //             </div>
              
  //             <div className="flex items-center justify-center text-white group">
  //               <div className="bg-green-400 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
  //                 <Lock size={20} className="text-black" />
  //               </div>
  //               <span className="text-lg font-medium">No CIBIL required</span>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Form Section */}
  //         <div className="bg-white rounded-t-3xl px-6 pt-8 pb-6">
  //           <h3 className="text-gray-800 text-xl font-semibold text-center mb-6">
  //             Login / Signup
  //           </h3>

  //           <form onSubmit={handleSubmit} className="space-y-6">
  //             {/* Mobile Number Input with Country Selector */}
  //             <div className="relative">
  //               <div className="flex">
  //                 {/* Country Code Selector */}
  //                 <div className="relative">
  //                   <button
  //                     ref={buttonRef}
  //                     type="button"
  //                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  //                     className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-3 py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 min-w-[120px]"
  //                   >
  //                     <span className="text-xl mr-2">{getCountryFlag(selectedCountry.country)}</span>
  //                     <span className="text-gray-700 font-medium mr-2">{selectedCountry.code}</span>
  //                     <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
  //                   </button>

  //                   {/* Dropdown */}
  //                   {isDropdownOpen && (
  //                     <div 
  //                       ref={dropdownRef}
  //                       className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-2xl z-[10000] mt-1 min-w-[320px] max-h-80 overflow-hidden"
  //                     >
  //                       {/* Search Input */}
  //                       <div className="p-3 border-b border-gray-200 bg-white sticky top-0">
  //                         <div className="relative">
  //                           <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  //                           <input
  //                             type="text"
  //                             placeholder="Search countries..."
  //                             value={searchQuery}
  //                             onChange={(e) => setSearchQuery(e.target.value)}
  //                             className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
  //                             autoComplete="off"
  //                           />
  //                         </div>
  //                       </div>

  //                       {/* Countries List */}
  //                       <div className="max-h-64 overflow-y-auto">
  //                         {filteredCountries.length > 0 ? (
  //                           filteredCountries.map((country, index) => (
  //                             <button
  //                               key={`${country.country}-${country.code}-${index}`}
  //                               type="button"
  //                               onClick={() => handleCountrySelect(country)}
  //                               className="w-full flex items-center px-4 py-3 hover:bg-pink-50 cursor-pointer transition-colors duration-150 border-b border-gray-50 last:border-b-0 text-left"
  //                             >
  //                               <span className="text-xl mr-3 flex-shrink-0">{getCountryFlag(country.country)}</span>
  //                               <span className="text-gray-700 font-medium mr-3 min-w-[60px] flex-shrink-0">{country.code}</span>
  //                               <span className="text-gray-600 text-sm truncate flex-1">{country.name}</span>
  //                             </button>
  //                           ))
  //                         ) : (
  //                           <div className="px-4 py-8 text-gray-500 text-sm text-center">
  //                             No countries found
  //                           </div>
  //                         )}
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>

  //                 <input
  //                   type="tel"
  //                   value={mobileNumber}
  //                   onChange={handleMobileChange}
  //                   placeholder="Enter Mobile Number"
  //                   className="flex-1 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
  //                   maxLength={10}
  //                   required
  //                 />
  //               </div>
  //               {mobileNumber && mobileNumber.length < 10 && (
  //                 <p className="text-red-500 text-xs mt-1">Please enter a 10-digit mobile number</p>
  //               )}
  //             </div>

  //             {/* Checkbox */}
  //             <div className="flex items-start">
  //               <input
  //                 type="checkbox"
  //                 id="notify"
  //                 checked={notifyUpdates}
  //                 onChange={(e) => setNotifyUpdates(e.target.checked)}
  //                 className="mt-1 h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
  //               />
  //               <label htmlFor="notify" className="ml-3 text-gray-600 text-sm leading-relaxed cursor-pointer">
  //                 Notify me for any updates & offers
  //               </label>
  //             </div>

  //             {/* Submit Button */}
  //             <button
  //               type="submit"
  //               disabled={isSubmitting || !mobileNumber || mobileNumber.length !== 10}
  //               className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
  //             >
  //               {isSubmitting ? (
  //                 <div className="flex items-center justify-center">
  //                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
  //                   Submitting...
  //                 </div>
  //               ) : (
  //                 'Submit'
  //               )}
  //             </button>

  //             {/* Footer Text */}
  //             <p className="text-gray-500 text-xs text-center leading-relaxed">
  //               By continuing, you agree to our{' '}
  //               <button type="button" className="text-pink-500 font-medium hover:underline">
  //                 Privacy Policy
  //               </button>{' '}
  //               &{' '}
  //               <button type="button" className="text-pink-500 font-medium hover:underline">
  //                 TSC
  //               </button>
  //             </p>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default EaseWithdrawModal;



  import { useState, useRef, useEffect } from 'react';
import { X, DollarSign, Lock, Flag, ChevronDown, Search } from 'lucide-react';

const countryCodes = [
  { code: "+1", country: "US", name: "United States" },
  { code: "+1", country: "CA", name: "Canada" },
  { code: "+44", country: "GB", name: "United Kingdom" },
  { code: "+91", country: "IN", name: "India" },
  { code: "+86", country: "CN", name: "China" },
  { code: "+81", country: "JP", name: "Japan" },
  { code: "+49", country: "DE", name: "Germany" },
  { code: "+33", country: "FR", name: "France" },
  { code: "+39", country: "IT", name: "Italy" },
  { code: "+55", country: "BR", name: "Brazil" },
  { code: "+52", country: "MX", name: "Mexico" },
  { code: "+7", country: "RU", name: "Russia" },
  { code: "+61", country: "AU", name: "Australia" },
  { code: "+971", country: "AE", name: "United Arab Emirates" },
  { code: "+20", country: "EG", name: "Egypt" },
  { code: "+27", country: "ZA", name: "South Africa" },
  { code: "+82", country: "KR", name: "South Korea" },
  { code: "+66", country: "TH", name: "Thailand" },
  { code: "+65", country: "SG", name: "Singapore" },
  { code: "+60", country: "MY", name: "Malaysia" },
];

const EaseWithdrawModal = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [notifyUpdates, setNotifyUpdates] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to India
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setSearchQuery('');
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const filteredCountries = countryCodes.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery) ||
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCountryFlag = (countryCode) => {
    const flagMap = {
      'US': '🇺🇸', 'CA': '🇨🇦', 'GB': '🇬🇧', 'IN': '🇮🇳', 'CN': '🇨🇳',
      'JP': '🇯🇵', 'DE': '🇩🇪', 'FR': '🇫🇷', 'IT': '🇮🇹', 'BR': '🇧🇷',
      'MX': '🇲🇽', 'RU': '🇷🇺', 'AU': '🇦🇺', 'AE': '🇦🇪', 'EG': '🇪🇬',
      'ZA': '🇿🇦', 'KR': '🇰🇷', 'TH': '🇹🇭', 'SG': '🇸🇬', 'MY': '🇲🇾'
    };
    return flagMap[countryCode] || '🏳️';
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Handle form submission logic here
      console.log('Country Code:', selectedCountry.code, 'Mobile:', mobileNumber, 'Notify:', notifyUpdates);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Close modal after successful submission
      onClose();
      
      // You can add success notification here
      alert('Application submitted successfully!');
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
      style={{ zIndex: 99999 }}
    >
      <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md mx-auto relative overflow-visible shadow-2xl transform animate-slideUp max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200 z-10 group"
          aria-label="Close modal"
        >
          <X size={20} className="sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Header Section */}
        <div className="px-6 sm:px-12 pt-6 sm:pt-8 pb-4 sm:pb-6 text-center">
          <img src='/easy-withdraw-logo.png' alt=''/>
          
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6 leading-tight">
            GET <span className="inline-flex items-baseline">
              <DollarSign size={18} className="sm:w-5 sm:h-5 text-black" />
              500
            </span> CREDIT<br />
            LINE INSTANTLY
          </h2>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center text-white group">
              <div className="bg-yellow-400 rounded-full p-1.5 sm:p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
                <DollarSign size={16} className="sm:w-5 sm:h-5 text-black" />
              </div>
              <span className="text-base sm:text-lg font-medium">Instant approval</span>
            </div>
            
            <div className="flex items-center justify-center text-white group">
              <div className="bg-green-400 rounded-full p-1.5 sm:p-2 mr-3 group-hover:scale-110 transition-transform duration-200">
                <Lock size={16} className="sm:w-5 sm:h-5 text-black" />
              </div>
              <span className="text-base sm:text-lg font-medium">No CIBIL required</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-t-2xl sm:rounded-t-3xl px-4 sm:px-6 pt-6 sm:pt-8 pb-6">
          <h3 className="text-gray-800 text-lg sm:text-xl font-semibold text-center mb-6">
            Login / Signup
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Mobile Number Input with Country Selector */}
            <div className="relative">
              <div className="flex">
                {/* Country Code Selector */}
                <div className="relative">
                  <button
                    ref={buttonRef}
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center bg-gray-100 border border-gray-300 rounded-l-lg px-2 sm:px-3 py-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 min-w-[90px] sm:min-w-[120px]"
                  >
                    <span className="text-lg sm:text-xl mr-1 sm:mr-2">{getCountryFlag(selectedCountry.country)}</span>
                    <span className="text-gray-700 font-medium mr-1 sm:mr-2 text-sm sm:text-base">{selectedCountry.code}</span>
                    <ChevronDown size={14} className={`sm:w-4 sm:h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div 
                      ref={dropdownRef}
                      className="absolute top-full left-0 bg-white border border-gray-300 rounded-lg shadow-2xl z-[10000] mt-1 w-[280px] sm:w-[320px] max-h-72 sm:max-h-80 overflow-hidden"
                    >
                      {/* Search Input */}
                      <div className="p-3 border-b border-gray-200 bg-white sticky top-0">
                        <div className="relative">
                          <Search size={14} className="sm:w-4 sm:h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      {/* Countries List */}
                      <div className="max-h-56 sm:max-h-64 overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country, index) => (
                            <button
                              key={`${country.country}-${country.code}-${index}`}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className="w-full flex items-center px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-pink-50 cursor-pointer transition-colors duration-150 border-b border-gray-50 last:border-b-0 text-left"
                            >
                              <span className="text-lg sm:text-xl mr-2 sm:mr-3 flex-shrink-0">{getCountryFlag(country.country)}</span>
                              <span className="text-gray-700 font-medium mr-2 sm:mr-3 min-w-[50px] sm:min-w-[60px] flex-shrink-0 text-sm sm:text-base">{country.code}</span>
                              <span className="text-gray-600 text-xs sm:text-sm truncate flex-1">{country.name}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-4 py-8 text-gray-500 text-sm text-center">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                  placeholder="Enter Mobile Number"
                  className="flex-1 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-3 sm:px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base min-w-0"
                  maxLength={10}
                  required
                />
              </div>
              {mobileNumber && mobileNumber.length < 10 && (
                <p className="text-red-500 text-xs mt-1">Please enter a 10-digit mobile number</p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="notify"
                checked={notifyUpdates}
                onChange={(e) => setNotifyUpdates(e.target.checked)}
                className="mt-1 h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 focus:ring-2 flex-shrink-0"
              />
              <label htmlFor="notify" className="ml-3 text-gray-600 text-xs sm:text-sm leading-relaxed cursor-pointer">
                Notify me for any updates & offers
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !mobileNumber || mobileNumber.length !== 10}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-3 sm:py-4 rounded-xl hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Submit'
              )}
            </button>

            {/* Footer Text */}
            <p className="text-gray-500 text-xs leading-relaxed text-center px-2">
              By continuing, you agree to our{' '}
              <button type="button" className="text-pink-500 font-medium hover:underline">
                Privacy Policy
              </button>{' '}
              &{' '}
              <button type="button" className="text-pink-500 font-medium hover:underline">
                TSC
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EaseWithdrawModal;