// // // // import { Check, Bell, CreditCard, Shield, Zap, Globe, Gift } from 'lucide-react';
// // // // import { Link, useLocation } from 'react-router-dom';

// // // // export default function CashAppCardLayout() {
// // // //     const location = useLocation();
// // // //   // Pull cardName out of the router state.images (fall back to a default)
// // // //   const imageData = (location.state && location.state.images) || {};
// // // //   const cardName = imageData.cardName || 'Your Card';
// // // //   const benefits = [
// // // //     {
// // // //       icon: <Zap className="w-5 h-5" />,
// // // //       title: "Up to 2% instant cashback",
// // // //       subtitle: "paid out in BTC or NEXO",
// // // //       highlight: true
// // // //     },
// // // //     {
// // // //       icon: <CreditCard className="w-5 h-5" />,
// // // //       title: "Up to €10,000 in ATM withdrawals",
// // // //       subtitle: "per month",
// // // //       highlight: true
// // // //     },
// // // //     {
// // // //       icon: <Shield className="w-5 h-5" />,
// // // //       title: "No FX fees for up to €20,000",
// // // //       subtitle: "per month",
// // // //       highlight: true
// // // //     },
// // // //     {
// // // //       icon: <Check className="w-5 h-5" />,
// // // //       title: "No minimum monthly installments",
// // // //       subtitle: "",
// // // //       highlight: false
// // // //     },
// // // //     {
// // // //       icon: <Check className="w-5 h-5" />,
// // // //       title: "No monthly, annual, or inactivity fees",
// // // //       subtitle: "",
// // // //       highlight: false
// // // //     },
// // // //     {
// // // //       icon: <Globe className="w-5 h-5" />,
// // // //       title: "Accepted by 40M+ merchants",
// // // //       subtitle: "worldwide",
// // // //       highlight: true
// // // //     },
// // // //     {
// // // //       icon: <Gift className="w-5 h-5" />,
// // // //       title: "Free additional virtual cards",
// // // //       subtitle: "",
// // // //       highlight: false
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
// // // //       {/* Header with glassmorphism effect */}
// // // //       <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
// // // //         <div className="relative">
// // // //           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
// // // //             <span className="text-white text-sm font-bold">G</span>
// // // //           </div>
// // // //           <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
// // // //         </div>
        
// // // //         <div className="flex items-center justify-center">
// // // //           <img 
// // // //             src="/path/to/your/nexo-logo.png" 
// // // //             alt="Nexo Logo" 
// // // //             className="h-8 w-auto object-contain"
// // // //           />
// // // //         </div>
        
// // // //         <div className="relative">
// // // //           <Bell className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" />
// // // //           <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="p-4 space-y-6">
// // // //         {/* Your Custom Card Image */}
// // // //         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
// // // //           <img 
// // // //             src="/path/to/your/card-image.png" 
// // // //             alt="Nexo Card" 
// // // //             className="w-full h-auto object-cover rounded-2xl"
// // // //           />
// // // //         </div>

// // // //         {/* Benefits List with enhanced styling */}
// // // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// // // //           <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
// // // //             <Zap className="w-5 h-5 text-blue-600 mr-2" />
// // // //             Premium Benefits
// // // //           </h3>
          
// // // //           <div className="space-y-4">
// // // //             {benefits.map((benefit, index) => (
// // // //               <div 
// // // //                 key={index}
// // // //                 className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
// // // //                   benefit.highlight ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
// // // //                 }`}
// // // //               >
// // // //                 <div className={`p-2 rounded-xl ${
// // // //                   benefit.highlight 
// // // //                     ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
// // // //                     : 'bg-green-100 text-green-600'
// // // //                 } group-hover:scale-110 transition-transform duration-200`}>
// // // //                   {benefit.icon}
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <div className={`font-semibold text-gray-800 ${benefit.highlight ? 'text-base' : 'text-sm'}`}>
// // // //                     {benefit.title}
// // // //                   </div>
// // // //                   {benefit.subtitle && (
// // // //                     <div className="text-gray-600 text-sm mt-1">{benefit.subtitle}</div>
// // // //                   )}
// // // //                 </div>
// // // //                 {benefit.highlight && (
// // // //                   <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
// // // //                     HOT
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* How to access section with enhanced styling */}
// // // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// // // //           <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
// // // //             <Shield className="w-5 h-5 text-green-600 mr-2" />
// // // //             Unlock Your Physical Card
// // // //           </h3>
          
// // // //           <div className="space-y-4">
// // // //             <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
// // // //               <div className="p-2 bg-green-500 rounded-xl">
// // // //                 <Check className="w-4 h-4 text-white" />
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <div className="text-gray-800 font-medium text-sm">
// // // //                   Portfolio balance of at least $500
// // // //                 </div>
// // // //                 <div className="text-green-600 text-xs font-medium">✓ Ready to verify</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
// // // //               <div className="p-2 bg-green-500 rounded-xl">
// // // //                 <Check className="w-4 h-4 text-white" />
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <div className="text-gray-800 font-medium text-sm">
// // // //                   Upgrade your account to Platinum
// // // //                 </div>
// // // //                 <div className="text-green-600 text-xs font-medium">✓ Upgrade available</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Enhanced Order Button */}
// // // //         <div className="relative">
// // // //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
// // // //           <button className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border-4 border-red-500 shadow-xl">
// // // //             <div className="flex items-center justify-center space-x-2">
// // // //               <CreditCard className="w-5 h-5" />
// // // //               <Link to="/card-list">
// // // //               <span className="text-lg">Order Nexo Card</span>
// // // //               </Link>
// // // //             </div>
// // // //             <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>
// // // //           </button>
// // // //         </div>

// // // //         {/* Additional info card */}
// // // //         <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
// // // //           <div className="flex items-start space-x-3">
// // // //             <div className="p-2 bg-amber-500 rounded-xl">
// // // //               <Zap className="w-4 h-4 text-white" />
// // // //             </div>
// // // //             <div>
// // // //               <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
// // // //               <div className="text-amber-700 text-xs mt-1">Get your first month with 3% cashback on all purchases!</div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { useLocation, Link } from 'react-router-dom';
// // // import { Check, Bell, CreditCard, Shield, Zap, Globe, Gift } from 'lucide-react';

// // // export default function CashAppCardLayout() {
// // //   const location = useLocation();
// // // const imageData = (location.state && location.state.images) || {};
// // // const cardName = imageData.cardName || "Your Card";

// // // // debug log
// // // console.log("cardName is:", cardName);

// // //   const benefits = [
// // //     {
// // //       icon: <Zap className="w-5 h-5" />,
// // //       title: "Up to 2% instant cashback",
// // //       subtitle: "paid out in BTC or NEXO",
// // //       highlight: true
// // //     },
// // //     {
// // //       icon: <CreditCard className="w-5 h-5" />,
// // //       title: "Up to €10,000 in ATM withdrawals",
// // //       subtitle: "per month",
// // //       highlight: true
// // //     },
// // //     {
// // //       icon: <Shield className="w-5 h-5" />,
// // //       title: "No FX fees for up to €20,000",
// // //       subtitle: "per month",
// // //       highlight: true
// // //     },
// // //     {
// // //       icon: <Check className="w-5 h-5" />,
// // //       title: "No minimum monthly installments",
// // //       subtitle: "",
// // //       highlight: false
// // //     },
// // //     {
// // //       icon: <Check className="w-5 h-5" />,
// // //       title: "No monthly, annual, or inactivity fees",
// // //       subtitle: "",
// // //       highlight: false
// // //     },
// // //     {
// // //       icon: <Globe className="w-5 h-5" />,
// // //       title: "Accepted by 40M+ merchants",
// // //       subtitle: "worldwide",
// // //       highlight: true
// // //     },
// // //     {
// // //       icon: <Gift className="w-5 h-5" />,
// // //       title: "Free additional virtual cards",
// // //       subtitle: "",
// // //       highlight: false
// // //     }
// // //   ];

// // //   return (
// // //     <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
// // //       {/* Header */}
// // //       <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
// // //         <div className="relative">
// // //           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
// // //             <span className="text-white text-sm font-bold">G</span>
// // //           </div>
// // //           <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
// // //         </div>
// // //         <div>
// // //           <img
// // //             src="/path/to/your/nexo-logo.png"
// // //             alt="Nexo Logo"
// // //             className="h-8 object-contain"
// // //           />
// // //         </div>
// // //         <div className="relative">
// // //           <Bell className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
// // //           <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
// // //         </div>
// // //       </div>

// // //       {/* Card Name */}
// // //       <div className="text-center mt-6">
// // //         <h2 className="text-2xl font-bold text-gray-800">{cardName}</h2>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="p-4 space-y-6">
// // //         {/* Card Image */}
// // //         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
// // //           <img
// // //             src="/path/to/your/card-image.png"
// // //             alt={cardName}
// // //             className="w-full object-cover rounded-2xl"
// // //           />
// // //         </div>

// // //         {/* Benefits */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// // //           <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
// // //             <Zap className="w-5 h-5 text-blue-600 mr-2" />
// // //             Premium Benefits
// // //           </h3>
// // //           <div className="space-y-4">
// // //             {benefits.map((b, i) => (
// // //               <div
// // //                 key={i}
// // //                 className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
// // //                   b.highlight ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
// // //                 }`}
// // //               >
// // //                 <div
// // //                   className={`p-2 rounded-xl ${
// // //                     b.highlight
// // //                       ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
// // //                       : 'bg-green-100 text-green-600'
// // //                   } group-hover:scale-110 transition-transform duration-200`}
// // //                 >
// // //                   {b.icon}
// // //                 </div>
// // //                 <div className="flex-1">
// // //                   <div className={`font-semibold text-gray-800 ${b.highlight ? 'text-base' : 'text-sm'}`}>
// // //                     {b.title}
// // //                   </div>
// // //                   {b.subtitle && (
// // //                     <div className="text-gray-600 text-sm mt-1">{b.subtitle}</div>
// // //                   )}
// // //                 </div>
// // //                 {b.highlight && (
// // //                   <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
// // //                     HOT
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Unlock Section */}
// // //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// // //           <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
// // //             <Shield className="w-5 h-5 text-green-600 mr-2" />
// // //             Unlock Your Physical Card
// // //           </h3>
// // //           {/* …additional steps… */}
// // //         </div>

// // //         {/* Order Button */}
// // //         <div className="relative">
// // //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
// // //           <button className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-5 px-6 rounded-2xl transition transform hover:scale-105 hover:shadow-2xl border-4 border-red-500 shadow-xl">
// // //             <div className="flex items-center justify-center space-x-2">
// // //               <CreditCard className="w-5 h-5" />
// // //               <Link to="/card-list">
// // //                 <span className="text-lg">Order {cardName}</span>
// // //               </Link>
// // //             </div>
// // //             <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>
// // //           </button>
// // //         </div>

// // //         {/* Extra Info */}
// // //         <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
// // //           <div className="flex items-start space-x-3">
// // //             <div className="p-2 bg-amber-500 rounded-xl">
// // //               <Zap className="w-4 h-4 text-white" />
// // //             </div>
// // //             <div>
// // //               <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
// // //               <div className="text-amber-700 text-xs mt-1">Get your first month with 3% cashback on all purchases!</div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useLocation, Link } from 'react-router-dom';
// // import { Check, Bell, CreditCard, Shield, Zap, Globe, Gift } from 'lucide-react';

// // export default function CashAppCardLayout() {
// //   const location = useLocation();

// //   // 1) Try to pull from router state:
// //   const imagesData = (location.state && location.state.images) || {};
// //   console.log('imagesData is:', imagesData.image);
// //   // 2) Try to pull from localStorage:
// //   const storedPlan = JSON.parse(localStorage.getItem('selectedPlan') || '{}');
// //   // 3) Final fallback:
// //   const cardName = imagesData.cardName || storedPlan.name || 'Your Card';

// //   console.log('cardName is:', cardName);

// //   const benefits = [
// //     {
// //       icon: <Zap className="w-5 h-5" />,
// //       title: "Up to 2% instant cashback",
// //       subtitle: "paid out in BTC or NEXO",
// //       highlight: true
// //     },
// //     {
// //       icon: <CreditCard className="w-5 h-5" />,
// //       title: "Up to €10,000 in ATM withdrawals",
// //       subtitle: "per month",
// //       highlight: true
// //     },
// //     {
// //       icon: <Shield className="w-5 h-5" />,
// //       title: "No FX fees for up to €20,000",
// //       subtitle: "per month",
// //       highlight: true
// //     },
// //     {
// //       icon: <Check className="w-5 h-5" />,
// //       title: "No minimum monthly installments",
// //       subtitle: "",
// //       highlight: false
// //     },
// //     {
// //       icon: <Check className="w-5 h-5" />,
// //       title: "No monthly, annual, or inactivity fees",
// //       subtitle: "",
// //       highlight: false
// //     },
// //     {
// //       icon: <Globe className="w-5 h-5" />,
// //       title: "Accepted by 40M+ merchants",
// //       subtitle: "worldwide",
// //       highlight: true
// //     },
// //     {
// //       icon: <Gift className="w-5 h-5" />,
// //       title: "Free additional virtual cards",
// //       subtitle: "",
// //       highlight: false
// //     }
// //   ];

// //   return (
// //     <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
// //       {/* Header with glassmorphism */}
// //       <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
// //         <div className="relative">
// //           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
// //             <span className="text-white text-sm font-bold">G</span>
// //           </div>
// //           <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
// //         </div>
// //         <div>
// //           <img
// //             src="/path/to/your/nexo-logo.png"
// //             alt="Logo"
// //             className="h-8 object-contain"
// //           />
// //         </div>
// //         <div className="relative">
// //           <Bell className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
// //           <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
// //         </div>
// //       </div>

// //       {/* Card Name */}
// //       <div className="text-center mt-6">
// //         <h2 className="text-2xl font-bold text-gray-800">{cardName}</h2>
// //       </div>

// //       {/* Main Content */}
// //       <div className="p-4 space-y-6">
// //         {/* Card Image */}
// //         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
// //           <img
// //             src="/path/to/your/card-image.png"
// //             alt={cardName}
// //             className="w-full object-cover rounded-2xl"
// //           />
// //         </div>

// //         {/* Benefits List */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// //           <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
// //             <Zap className="w-5 h-5 text-blue-600 mr-2" />
// //             Premium Benefits
// //           </h3>
// //           <div className="space-y-4">
// //             {benefits.map((b, i) => (
// //               <div
// //                 key={i}
// //                 className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
// //                   b.highlight ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
// //                 }`}
// //               >
// //                 <div
// //                   className={`p-2 rounded-xl ${
// //                     b.highlight
// //                       ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
// //                       : 'bg-green-100 text-green-600'
// //                   } group-hover:scale-110 transition-transform duration-200`}
// //                 >
// //                   {b.icon}
// //                 </div>
// //                 <div className="flex-1">
// //                   <div className={`font-semibold text-gray-800 ${b.highlight ? 'text-base' : 'text-sm'}`}>
// //                     {b.title}
// //                   </div>
// //                   {b.subtitle && (
// //                     <div className="text-gray-600 text-sm mt-1">{b.subtitle}</div>
// //                   )}
// //                 </div>
// //                 {b.highlight && (
// //                   <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
// //                     HOT
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Unlock Section */}
// //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
// //           <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
// //             <Shield className="w-5 h-5 text-green-600 mr-2" />
// //             Unlock Your Physical Card
// //           </h3>
// //           {/* …additional unlock steps here… */}
// //         </div>

// //         {/* Order Button */}
// //         <div className="relative">
// //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
// //           <button className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-5 px-6 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-red-500 shadow-xl">
// //             <div className="flex items-center justify-center space-x-2">
// //               <CreditCard className="w-5 h-5" />
// //               <Link to="/card-list">
// //                 <span className="text-lg">Order {cardName}</span>
// //               </Link>
// //             </div>
// //             <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>
// //           </button>
// //         </div>

// //         {/* Extra Info */}
// //         <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
// //           <div className="flex items-start space-x-3">
// //             <div className="p-2 bg-amber-500 rounded-xl">
// //               <Zap className="w-4 h-4 text-white" />
// //             </div>
// //             <div>
// //               <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
// //               <div className="text-amber-700 text-xs mt-1">
// //                 Get your first month with 3% cashback on all purchases!
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




//   // import { useLocation, Link } from 'react-router-dom';
//   // import { Check, Bell, CreditCard, Shield, Zap, Globe, Gift } from 'lucide-react';

//   // export default function CashAppCardLayout() {
//   //   const location = useLocation();

//   //   // 1) Try to pull from router state:
//   //   const imagesData = (location.state && location.state.images) || {};
//   //   // 2) Try to pull from localStorage:
//   //   const storedPlan = JSON.parse(localStorage.getItem('selectedPlan') || '{}');
//   //   // 3) Final fallbacks:
//   //   const cardName = imagesData.cardName || storedPlan.name || 'Your Card';
//   //   const imageSrc = imagesData.image  || storedPlan.image || '/path/to/your/card-image.png';

//   //   console.log('cardName is:', cardName, 'imageSrc is:', imageSrc);

//   //   const benefits = [
//   //     {
//   //       icon: <Zap className="w-5 h-5" />,
//   //       title: "Up to 2% instant cashback",
//   //       subtitle: "paid out in BTC or NEXO",
//   //       highlight: true
//   //     },
//   //     {
//   //       icon: <CreditCard className="w-5 h-5" />,
//   //       title: "Up to €10,000 in ATM withdrawals",
//   //       subtitle: "per month",
//   //       highlight: true
//   //     },
//   //     {
//   //       icon: <Shield className="w-5 h-5" />,
//   //       title: "No FX fees for up to €20,000",
//   //       subtitle: "per month",
//   //       highlight: true
//   //     },
//   //     {
//   //       icon: <Check className="w-5 h-5" />,
//   //       title: "No minimum monthly installments",
//   //       subtitle: "",
//   //       highlight: false
//   //     },
//   //     {
//   //       icon: <Check className="w-5 h-5" />,
//   //       title: "No monthly, annual, or inactivity fees",
//   //       subtitle: "",
//   //       highlight: false
//   //     },
//   //     {
//   //       icon: <Globe className="w-5 h-5" />,
//   //       title: "Accepted by 40M+ merchants",
//   //       subtitle: "worldwide",
//   //       highlight: true
//   //     },
//   //     {
//   //       icon: <Gift className="w-5 h-5" />,
//   //       title: "Free additional virtual cards",
//   //       subtitle: "",
//   //       highlight: false
//   //     }
//   //   ];

//   //   return (
//   //     <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
//   //       {/* Header with glassmorphism */}
      

//   //       {/* Card Name */}
//   //       <div className="text-center mt-6">
//   //         <h2 className="text-2xl font-bold text-gray-800">{cardName}</h2>
//   //       </div>

//   //       {/* Main Content */}
//   //       <div className="p-4 space-y-6">
//   //         {/* Dynamic Card Image */}
//   //         <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//   //           <img
//   //             src={imageSrc}
//   //             alt={cardName}
//   //             className="w-full object-cover rounded-2xl"
//   //           />
//   //         </div>

//   //         {/* Benefits List */}
//   //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
//   //           <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
//   //             <Zap className="w-5 h-5 text-blue-600 mr-2" />
//   //             Premium Benefits
//   //           </h3>
//   //           <div className="space-y-4">
//   //             {benefits.map((b, i) => (
//   //               <div
//   //                 key={i}
//   //                 className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
//   //                   b.highlight ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
//   //                 }`}
//   //               >
//   //                 <div
//   //                   className={`p-2 rounded-xl ${
//   //                     b.highlight
//   //                       ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
//   //                       : 'bg-green-100 text-green-600'
//   //                   } group-hover:scale-110 transition-transform duration-200`}
//   //                 >
//   //                   {b.icon}
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <div className={`font-semibold text-gray-800 ${b.highlight ? 'text-base' : 'text-sm'}`}>
//   //                     {b.title}
//   //                   </div>
//   //                   {b.subtitle && (
//   //                     <div className="text-gray-600 text-sm mt-1">{b.subtitle}</div>
//   //                   )}
//   //                 </div>
//   //                 {b.highlight && (
//   //                   <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
//   //                     HOT
//   //                   </div>
//   //                 )}
//   //               </div>
//   //             ))}
//   //           </div>
//   //         </div>

//   //         {/* Unlock Section */}
//   //         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
//   //           <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
//   //             <Shield className="w-5 h-5 text-green-600 mr-2" />
//   //             Unlock Your Physical Card
//   //           </h3>
//   //           {/* …additional unlock steps here… */}
//   //         </div>

//   //         {/* Order Button */}
//   //         <div className="relative">
//   //           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
//   //           <button className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-5 px-6 rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-red-500 shadow-xl">
//   //             <div className="flex items-center justify-center space-x-2">
//   //               <CreditCard className="w-5 h-5" />
//   //               <Link to="/card-list">
//   //                 <span className="text-lg">Order {cardName}</span>
//   //               </Link>
//   //             </div>
//   //             <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>
//   //           </button>
//   //         </div>

//   //         {/* Extra Info */}
//   //         <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
//   //           <div className="flex items-start space-x-3">
//   //             <div className="p-2 bg-amber-500 rounded-xl">
//   //               <Zap className="w-4 h-4 text-white" />
//   //             </div>
//   //             <div>
//   //               <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
//   //               <div className="text-amber-700 text-xs mt-1">
//   //                 Get your first month with 3% cashback on all purchases!
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }




// "use client"

// import { useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import { Check, CreditCard, Shield, Zap, Globe, Gift, Smartphone } from "lucide-react"

// export default function CashAppCardLayout() {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [selectedCard, setSelectedCard] = useState(null)

//   // 1) Try to pull from router state:
//   const imagesData = (location.state && location.state.images) || {}
//   // 2) Try to pull from localStorage:
//   const storedPlan = JSON.parse(localStorage.getItem("selectedPlan") || "{}")
//   // 3) Final fallbacks:
//   const cardName = imagesData.cardName || storedPlan.name || "CashApp Card"
//   const imageSrc = imagesData.image || storedPlan.image || "/path/to/your/card-image.png"

//   console.log("cardName is:", cardName, "imageSrc is:", imageSrc)

//   const cardOptions = [
//     {
//       id: "virtual",
//       name: "Virtual CashApp Card",
//       price: 100,
//       type: "Virtual",
//       color: "from-purple-600 to-blue-600",
//       borderColor: "border-purple-500",
//       bgColor: "bg-purple-50",
//       features: [
//         { icon: <CreditCard className="w-4 h-4" />, text: "Get up to 2% back on all purchases" },
//         { icon: <Smartphone className="w-4 h-4" />, text: "Start spending instantly via Apple Pay & Google Pay" },
//         { icon: <Shield className="w-4 h-4" />, text: "Secure digital transactions" },
//         { icon: <Zap className="w-4 h-4" />, text: "Instant activation" },
//       ],
//     },
//     {
//       id: "physical",
//       name: "Physical CashApp Card",
//       price: 500,
//       type: "Physical",
//       color: "from-gray-800 to-gray-900",
//       borderColor: "border-blue-500",
//       bgColor: "bg-blue-50",
//       features: [
//         { icon: <CreditCard className="w-4 h-4" />, text: "Up to 2% instant cashback in BTC" },
//         { icon: <Shield className="w-4 h-4" />, text: "Up to €10,000 in ATM withdrawals per month" },
//         { icon: <Globe className="w-4 h-4" />, text: "Accepted by 40M+ merchants worldwide" },
//         { icon: <Gift className="w-4 h-4" />, text: "No monthly or annual fees" },
//       ],
//     },
//   ]

//   const benefits = [
//     {
//       icon: <Zap className="w-5 h-5" />,
//       title: "Up to 2% instant cashback",
//       subtitle: "paid out in BTC or NEXO",
//       highlight: true,
//     },
//     {
//       icon: <CreditCard className="w-5 h-5" />,
//       title: "Up to €10,000 in ATM withdrawals",
//       subtitle: "per month",
//       highlight: true,
//     },
//     {
//       icon: <Shield className="w-5 h-5" />,
//       title: "No FX fees for up to €20,000",
//       subtitle: "per month",
//       highlight: true,
//     },
//     {
//       icon: <Check className="w-5 h-5" />,
//       title: "No minimum monthly installments",
//       subtitle: "",
//       highlight: false,
//     },
//     {
//       icon: <Check className="w-5 h-5" />,
//       title: "No monthly, annual, or inactivity fees",
//       subtitle: "",
//       highlight: false,
//     },
//     {
//       icon: <Globe className="w-5 h-5" />,
//       title: "Accepted by 40M+ merchants",
//       subtitle: "worldwide",
//       highlight: true,
//     },
//     {
//       icon: <Gift className="w-5 h-5" />,
//       title: "Free additional virtual cards",
//       subtitle: "",
//       highlight: false,
//     },
//   ]

//   const handleCardSelect = (card) => {
//     setSelectedCard(card)
//     // Store selected card info in localStorage
//     const cardInfo = {
//       type: card.id,
//       price: card.price,
//       name: card.name,
//     }
//     localStorage.setItem("selectedCardInfo", JSON.stringify(cardInfo))
//   }

//   const handleOrderCard = () => {
//     if (selectedCard) {
//       navigate("/payment-method")
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
//       {/* Header with glassmorphism */}

//       {/* Card Name */}
//       <div className="text-center mt-6">
//         <h2 className="text-2xl font-bold text-gray-800">Choose Your {cardName}</h2>
//         <p className="text-gray-600 mt-2">Select the perfect card for your needs</p>
//       </div>

//       {/* Main Content */}
//       <div className="p-4 space-y-6">
//         {/* Card Selection */}
//         <div className="space-y-4">
//           {cardOptions.map((card) => (
//             <div
//               key={card.id}
//               className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
//                 selectedCard?.id === card.id
//                   ? `${card.borderColor} shadow-2xl`
//                   : "border-white/50 hover:border-gray-300"
//               }`}
//               onClick={() => handleCardSelect(card)}
//             >
//               {/* Card Preview */}
//               <div className="relative mb-4">
//                 <div
//                   className={`w-full h-32 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center relative overflow-hidden`}
//                 >
//                   <div className="absolute top-3 right-3">
//                     <div className="flex space-x-1">
//                       <div className="w-6 h-6 bg-red-500 rounded-full opacity-80"></div>
//                       <div className="w-6 h-6 bg-yellow-500 rounded-full opacity-80 -ml-1"></div>
//                     </div>
//                   </div>
//                   <div className="text-white text-sm font-semibold">{card.type.toUpperCase()}</div>
//                   <div className="absolute bottom-3 left-3 text-white/60 text-xs">
//                     **** **** **** {card.id === "virtual" ? "5678" : "1234"}
//                   </div>
//                 </div>
//                 {selectedCard?.id === card.id && (
//                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                     <Check className="w-4 h-4 text-white" />
//                   </div>
//                 )}
//               </div>

//               {/* Card Info */}
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-lg font-bold text-gray-800">{card.name}</h3>
//                 <div className="text-xl font-bold text-blue-600">${card.price}</div>
//               </div>

//               {/* Card Features */}
//               <div className="space-y-2">
//                 {card.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <div className={`text-${card.id === "virtual" ? "purple" : "blue"}-500`}>{feature.icon}</div>
//                     <span className="text-gray-700 text-sm">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Selection Indicator */}
//               {selectedCard?.id === card.id && (
//                 <div className="mt-3 p-2 bg-green-50 rounded-lg border border-green-200">
//                   <div className="flex items-center gap-2">
//                     <Check className="w-4 h-4 text-green-600" />
//                     <span className="text-green-700 text-sm font-medium">Selected</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Benefits List */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
//           <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
//             <Zap className="w-5 h-5 text-blue-600 mr-2" />
//             Premium Benefits
//           </h3>
//           <div className="space-y-4">
//             {benefits.map((b, i) => (
//               <div
//                 key={i}
//                 className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
//                   b.highlight ? "bg-gradient-to-r from-blue-50/50 to-purple-50/50" : ""
//                 }`}
//               >
//                 <div
//                   className={`p-2 rounded-xl ${
//                     b.highlight
//                       ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
//                       : "bg-green-100 text-green-600"
//                   } group-hover:scale-110 transition-transform duration-200`}
//                 >
//                   {b.icon}
//                 </div>
//                 <div className="flex-1">
//                   <div className={`font-semibold text-gray-800 ${b.highlight ? "text-base" : "text-sm"}`}>
//                     {b.title}
//                   </div>
//                   {b.subtitle && <div className="text-gray-600 text-sm mt-1">{b.subtitle}</div>}
//                 </div>
//                 {b.highlight && (
//                   <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
//                     HOT
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Order Button */}
//         <div className="relative">
//           <div
//             className={`absolute inset-0 ${selectedCard ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-400"} rounded-2xl blur-lg opacity-50`}
//           ></div>
//           <button
//             onClick={handleOrderCard}
//             disabled={!selectedCard}
//             className={`relative w-full font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform border-4 shadow-xl ${
//               selectedCard
//                 ? "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white hover:scale-105 hover:shadow-2xl border-blue-500"
//                 : "bg-gray-400 text-gray-200 cursor-not-allowed border-gray-300"
//             }`}
//           >
//             <div className="flex items-center justify-center space-x-2">
//               <CreditCard className="w-5 h-5" />
//               <span className="text-lg">
//                 {selectedCard ? `Order ${selectedCard.name} - $${selectedCard.price}` : "Select a Card to Continue"}
//               </span>
//             </div>
//             {selectedCard && <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>}
//           </button>
//         </div>

//         {/* Selection Status */}
//         {selectedCard && (
//           <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
//             <div className="flex items-start space-x-3">
//               <div className="p-2 bg-green-500 rounded-xl">
//                 <Check className="w-4 h-4 text-white" />
//               </div>
//               <div>
//                 <div className="text-green-800 font-semibold text-sm">Card Selected</div>
//                 <div className="text-green-700 text-xs mt-1">
//                   You've selected the {selectedCard.name} for ${selectedCard.price}. Ready to proceed to payment!
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Extra Info */}
//         <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
//           <div className="flex items-start space-x-3">
//             <div className="p-2 bg-amber-500 rounded-xl">
//               <Zap className="w-4 h-4 text-white" />
//             </div>
//             <div>
//               <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
//               <div className="text-amber-700 text-xs mt-1">Get your first month with 3% cashback on all purchases!</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )

// }






import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Check, CreditCard, Shield, Zap, Globe, Gift, Smartphone } from "lucide-react"

export default function CashAppCardLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedCard, setSelectedCard] = useState(null)

  // 1) Try to pull from router state:
  const imagesData = (location.state && location.state.images) || {}
  // 2) Try to pull from localStorage:
  const storedPlan = JSON.parse(localStorage.getItem("selectedPlan") || "{}")
  // 3) Final fallbacks:
  const cardName = imagesData.cardName || storedPlan.name || "CashApp Card"

  const cardOptions = [
    {
      id: "virtual",
      name: "Virtual Card",
      // price: 100,
      type: "Virtual",
      color: "from-purple-600 to-blue-600",
      borderColor: "border-purple-500",
      icon: <Smartphone className="w-5 h-5" />,
      features: ["Instant activation","Get up to 2% back on all purchases, paid out in BTC or NEXO","Start spending instantly via Apple Pay & Google Pay","Borrow funds at 0% and spend while keeping your crypto", "Apple/Google Pay","No minimum monthly repayments or inactivity fees", "Secure digital payments"],
    },
    {
      id: "physical",
      name: "Physical Card",
      // price: 500,
      type: "Physical",
      color: "from-gray-800 to-gray-900",
      borderColor: "border-blue-500",
      icon: <CreditCard className="w-5 h-5" />,
      features: ["Up to 2% instant cashback, paid out in BTC or NEXO","Up to €10,000 in ATM withdrawals per month","No FX fees for up to €20,000 per month","No minimum monthly installments","No minimum monthly installments","No monthly, annual, or inactivity fees","Accepted by 40M+ merchants worldwide","ATM withdrawals", "Worldwide acceptance","Free additional virtual cards","Premium benefits"],
    },
  ]

  const quickBenefits = [
    { icon: <Zap className="w-4 h-4" />, text: "2% cashback" },
    { icon: <Shield className="w-4 h-4" />, text: "No fees" },
    { icon: <Globe className="w-4 h-4" />, text: "40M+ merchants" },
    { icon: <Gift className="w-4 h-4" />, text: "Gift cards" },
  ]

  const handleCardSelect = (card) => {
    setSelectedCard(card)
    const cardInfo = {
      type: card.id,
      price: card.price,
      name: card.name,
    }
    localStorage.setItem("selectedCardInfo", JSON.stringify(cardInfo))
  }

  const handleOrderCard = () => {
    if (selectedCard) {
      navigate("/payment-method")
    }
  }

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen md:mt-16 mt-10 flex flex-col">
      {/* Header */}
      <div className="text-center py-4 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Choose Your {cardName}</h1>
        <p className="text-gray-600 text-sm md:text-xl md:mt-10 mt-8">Select the perfect card for your needs</p>
      </div>

      {/* Main Content - Single Screen Layout */}
      <div className="flex-1 px-4 pb-4 md:mt-10 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
          {/* Card Selection - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {cardOptions.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 flex flex-col ${
                    selectedCard?.id === card.id
                      ? `${card.borderColor} shadow-xl`
                      : "border-white/50 hover:border-gray-300"
                  }`}
                  onClick={() => handleCardSelect(card)}
                >
                  {/* Card Preview */}
                  <div className="relative mb-3">
                    <div
                      className={`w-full h-24 md:h-28 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute top-2 right-2">
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 -ml-1"></div>
                        </div>
                      </div>
                      <div className="text-white text-sm font-semibold">{card.type.toUpperCase()}</div>
                      <div className="absolute bottom-2 left-2 text-white/60 text-xs">
                        **** {card.id === "virtual" ? "5678" : "1234"}
                      </div>
                    </div>
                    {selectedCard?.id === card.id && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`text-${card.id === "virtual" ? "purple" : "blue"}-600`}>{card.icon}</div>
                        <h3 className="text-lg font-bold text-gray-800">{card.name}</h3>
                      </div>
                      {/* <div className="text-xl font-bold text-blue-600">{card.price}</div> */}
                    </div>

                    {/* Card Features */}
                    <div className="space-y-1 flex-1">
                      {card.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Selection Indicator */}
                    {selectedCard?.id === card.id && (
                      <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-700 text-xs font-medium">Selected</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Benefits & Action */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Quick Benefits */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
              <h3 className="text-gray-800 font-bold text-base mb-3 flex items-center">
                <Zap className="w-4 h-4 text-blue-600 mr-2" />
                Key Benefits
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50"
                  >
                    <div className="text-blue-600">{benefit.icon}</div>
                    <span className="text-gray-700 text-xs font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Status */}
            {selectedCard && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-green-500 rounded-lg">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="text-green-800 font-semibold text-sm">{selectedCard.name} Selected</div>
                    <div className="text-green-700 text-xs">{selectedCard.price}  Ready to proceed!</div>
                  </div>
                </div>
              </div>
            )}

            {/* Order Button */}
            <div className="relative flex-1 flex items-end">
              <div
                className={`absolute inset-0 ${selectedCard ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-400"} rounded-xl blur-lg opacity-50`}
              ></div>
              <button
                onClick={handleOrderCard}
                disabled={!selectedCard}
                className={`relative w-full font-bold py-4 px-4 rounded-xl transition-all duration-300 transform border-2 shadow-lg ${
                  selectedCard
                    ? "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white hover:scale-105 hover:shadow-xl border-blue-500"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed border-gray-300"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm">{selectedCard ? `Continue to ${selectedCard.name}` : "Select a Card"}</span>
                </div>
                {selectedCard && <div className="text-xs mt-1 opacity-90">{selectedCard.price}</div>}
              </button>
            </div>

            {/* Promo */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-amber-500 rounded-lg">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-amber-800 font-semibold text-xs">Limited Offer</div>
                  <div className="text-amber-700 text-xs">3% cashback first month!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
