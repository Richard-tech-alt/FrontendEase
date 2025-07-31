// /* eslint-disable react/prop-types */
// import  { useState } from 'react';
// import { Check, CreditCard, Smartphone, Shield, Zap, Globe, Gift, ArrowLeft, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const BinanceCardSelection = ({ onBack, onClose }) => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const navigate = useNavigate();

//   const physicalCardFeatures = [
//     { icon: <CreditCard className="w-5 h-5" />, text: "Up to 2% instant cashback, paid out in BTC or Binance" },
//     { icon: <Shield className="w-5 h-5" />, text: "Up to €10,000 in ATM withdrawals per month" },
//     { icon: <Zap className="w-5 h-5" />, text: "No FX fees for up to €20,000 per month" },
//     { icon: <Globe className="w-5 h-5" />, text: "No minimum monthly installments" },
//     { icon: <Gift className="w-5 h-5" />, text: "No monthly, annual, or inactivity fees" },
//     { icon: <Check className="w-5 h-5" />, text: "Accepted by 40M+ merchants worldwide" },
//     { icon: <CreditCard className="w-5 h-5" />, text: "Free additional virtual cards" }
//   ];

//   const virtualCardFeatures = [
//     { icon: <CreditCard className="w-5 h-5" />, text: "Get up to 2% back on all purchases, paid out in BTC or Binance" },
//     { icon: <Smartphone className="w-5 h-5" />, text: "Start spending instantly via Apple Pay & Google Pay" },
//     { icon: <Shield className="w-5 h-5" />, text: "Borrow funds at 0% and spend while keeping your crypto" },
//     { icon: <Zap className="w-5 h-5" />, text: "No minimum monthly repayments or inactivity fees" }
//   ];

//   const physicalRequirements = [
//     "Have a portfolio balance of at least $500",
//     "Upgrade your account to Platinum"
//   ];

//   const virtualRequirements = [
//     "Have a portfolio balance of at least $50",
//     "Complete your Identity Verification"
//   ];

//   const handleCardSelect = (cardType) => {
//     setSelectedCard(cardType);
//   };

//   const handleGetCard = () => {

//       const user = JSON.parse(localStorage.getItem("user"));

//   if (!user) {
//     // Not logged in → redirect to login page
//     navigate("/login");

//   }


   
//   };

//   return (
//     <div className="min-h-screen text-black p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Navigation Header */}
//         {(onBack || onClose) && (
//           <div className="flex justify-between items-center mb-8">
//             {onBack && (
//               <button 
//                 onClick={onBack}
//                 className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span>Back</span>
//               </button>
//             )}
//             {onClose && (
//               <button 
//                 onClick={onClose}
//                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors ml-auto"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//         )}
//         {/* Header */}
//         <div className="text-center mb-12">
//           {/* <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
//               <span className="text-white font-bold text-xl">N</span>
//             </div>
//             <span className="text-4xl font-bold text-white">Binance</span>
//           </div> */}
//           <h1 className="text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//             Choose Your Binance Card
//           </h1>
//           <p className="text-xl text-black max-w-2xl mx-auto">
//             Select the perfect card for your crypto lifestyle. Both cards offer incredible benefits and rewards.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
//           {/* Physical Card */}
//           <div 
//             className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
//               selectedCard === 'physical' 
//                 ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
//                 : 'border-transparent hover:border-blue-300 shadow-xl'
//             }`}
//             onClick={() => handleCardSelect('physical')}
//           >
//             {/* Card Preview */}
//             <div className="relative mb-8">
//               <div className="w-full h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute top-4 right-4">
//                   <div className="flex space-x-1">
//                     <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
//                     <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
//                   </div>
//                 </div>
//                 <div className="text-white text-lg font-semibold">PHYSICAL</div>
//                 <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 1234</div>
//               </div>
//               {selectedCard === 'physical' && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                   <Check className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Physical Binance Card</h3>
            
//             {/* Features */}
//             <div className="space-y-4 mb-8">
//               {physicalCardFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="text-blue-500 mt-1 flex-shrink-0">{feature.icon}</div>
//                   <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Requirements */}
//             <div className="bg-blue-50 rounded-xl p-4 mb-6">
//               <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to access the Physical card</h4>
//               {physicalRequirements.map((req, index) => (
//                 <div key={index} className="flex items-center gap-2 mb-2">
//                   <Check className="w-4 h-4 text-green-500" />
//                   <span className="text-gray-700 text-sm">{req}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Virtual Card */}
//           <div 
//             className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
//               selectedCard === 'virtual' 
//                 ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
//                 : 'border-transparent hover:border-purple-300 shadow-xl'
//             }`}
//             onClick={() => handleCardSelect('virtual')}
//           >
//             {/* Card Preview */}
//             <div className="relative mb-8">
//               <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute top-4 right-4">
//                   <div className="flex space-x-1">
//                     <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
//                     <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
//                   </div>
//                 </div>
//                 <div className="text-white text-lg font-semibold">VIRTUAL</div>
//                 <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 5678</div>
//               </div>
//               {selectedCard === 'virtual' && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
//                   <Check className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Virtual Binance Card</h3>
            
//             {/* Features */}
//             <div className="space-y-4 mb-8">
//               {virtualCardFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="text-purple-500 mt-1 flex-shrink-0">{feature.icon}</div>
//                   <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Requirements */}
//             <div className="bg-purple-50 rounded-xl p-4 mb-6">
//               <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to Get Your Virtual Card</h4>
//               {virtualRequirements.map((req, index) => (
//                 <div key={index} className="flex items-center gap-2 mb-2">
//                   <Check className="w-4 h-4 text-green-500" />
//                   <span className="text-gray-700 text-sm">{req}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Action Button */}
//         <div className="text-center">
//           <button 
//             onClick={handleGetCard}
//             disabled={!selectedCard}
//             className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ${
//               selectedCard 
//                 ? `${selectedCard === 'physical' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-purple-500 hover:bg-purple-600'} text-white shadow-2xl hover:scale-105 hover:shadow-3xl`
//                 : 'bg-black text-white cursor-not-allowed'
//             }`}
//           >
//             {selectedCard ? `Get ${selectedCard === 'physical' ? 'Physical' : 'Virtual'} Card` : 'Select a Card Type'}
//           </button>
          
//           {selectedCard && (
//             <p className="text-white/80 mt-4 text-sm">
//               Ready to get your {selectedCard} Binance card with amazing benefits!
//             </p>
//           )}
//         </div>
//         {/* Comparison Note */}
//         <div className="mt-12 text-center">
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
//             <h4 className="text-white font-semibold mb-2">Why Choose Binance?</h4>
//             <p className="text-blue-100 text-sm">
//               Both cards offer industry-leading cashback rates, zero fees, and seamless crypto integration. 
//               Choose virtual for instant access or physical for worldwide acceptance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BinanceCardSelection;



/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { Check, CreditCard, Smartphone, Shield, Zap, Globe, Gift, ArrowLeft, X } from "lucide-react"
// import { useNavigate } from "react-router-dom"

// const BinanceCardSelection = ({ onBack, onClose }) => {
//   const [selectedCard, setSelectedCard] = useState(null)
//   const navigate = useNavigate()

//   const physicalCardFeatures = [
//     { icon: <CreditCard className="w-5 h-5" />, text: "Up to 2% instant cashback, paid out in BTC or Binance" },
//     { icon: <Shield className="w-5 h-5" />, text: "Up to €10,000 in ATM withdrawals per month" },
//     { icon: <Zap className="w-5 h-5" />, text: "No FX fees for up to €20,000 per month" },
//     { icon: <Globe className="w-5 h-5" />, text: "No minimum monthly installments" },
//     { icon: <Gift className="w-5 h-5" />, text: "No monthly, annual, or inactivity fees" },
//     { icon: <Check className="w-5 h-5" />, text: "Accepted by 40M+ merchants worldwide" },
//     { icon: <CreditCard className="w-5 h-5" />, text: "Free additional virtual cards" },
//   ]

//   const virtualCardFeatures = [
//     { icon: <CreditCard className="w-5 h-5" />, text: "Get up to 2% back on all purchases, paid out in BTC or Binance" },
//     { icon: <Smartphone className="w-5 h-5" />, text: "Start spending instantly via Apple Pay & Google Pay" },
//     { icon: <Shield className="w-5 h-5" />, text: "Borrow funds at 0% and spend while keeping your crypto" },
//     { icon: <Zap className="w-5 h-5" />, text: "No minimum monthly repayments or inactivity fees" },
//   ]

//   const physicalRequirements = ["Have a portfolio balance of at least $500", "Upgrade your account to Platinum"]

//   const virtualRequirements = ["Have a portfolio balance of at least $50", "Complete your Identity Verification"]

//   const handleCardSelect = (cardType) => {
//     setSelectedCard(cardType)
//   }

//   const handleGetCard = () => {
//     const user = JSON.parse(localStorage.getItem("userData"))

//     if (!user) {
//       // Not logged in → redirect to login page
//       console.log("User is logged in");
//       navigate("/login")
//     } else {
//       console.log("User is not logged in");
//       // User is already logged in → redirect to card-list page
//       navigate("/card-list")
//     }
//   }

//   return (
//     <div className="min-h-screen text-black p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Navigation Header */}
//         {(onBack || onClose) && (
//           <div className="flex justify-between items-center mb-8">
//             {onBack && (
//               <button
//                 onClick={onBack}
//                 className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span>Back</span>
//               </button>
//             )}
//             {onClose && (
//               <button
//                 onClick={onClose}
//                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors ml-auto"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//         )}
//         {/* Header */}
//         <div className="text-center mb-12">
//           {/* <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
//               <span className="text-white font-bold text-xl">N</span>
//             </div>
//             <span className="text-4xl font-bold text-white">Binance</span>
//           </div> */}
//           <h1 className="text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//             Choose Your Binance Card
//           </h1>
//           <p className="text-xl text-black max-w-2xl mx-auto">
//             Select the perfect card for your crypto lifestyle. Both cards offer incredible benefits and rewards.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {/* Physical Card */}
//           <div
//             className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
//               selectedCard === "physical"
//                 ? "border-blue-500 shadow-2xl shadow-blue-500/25"
//                 : "border-transparent hover:border-blue-300 shadow-xl"
//             }`}
//             onClick={() => handleCardSelect("physical")}
//           >
//             {/* Card Preview */}
//             <div className="relative mb-8">
//               <div className="w-full h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute top-4 right-4">
//                   <div className="flex space-x-1">
//                     <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
//                     <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
//                   </div>
//                 </div>
//                 <div className="text-white text-lg font-semibold">PHYSICAL</div>
//                 <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 1234</div>
//               </div>
//               {selectedCard === "physical" && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//                   <Check className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Physical Binance Card</h3>

//             {/* Features */}
//             <div className="space-y-4 mb-8">
//               {physicalCardFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="text-blue-500 mt-1 flex-shrink-0">{feature.icon}</div>
//                   <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Requirements */}
//             <div className="bg-blue-50 rounded-xl p-4 mb-6">
//               <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to access the Physical card</h4>
//               {physicalRequirements.map((req, index) => (
//                 <div key={index} className="flex items-center gap-2 mb-2">
//                   <Check className="w-4 h-4 text-green-500" />
//                   <span className="text-gray-700 text-sm">{req}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Virtual Card */}
//           <div
//             className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
//               selectedCard === "virtual"
//                 ? "border-purple-500 shadow-2xl shadow-purple-500/25"
//                 : "border-transparent hover:border-purple-300 shadow-xl"
//             }`}
//             onClick={() => handleCardSelect("virtual")}
//           >
//             {/* Card Preview */}
//             <div className="relative mb-8">
//               <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute top-4 right-4">
//                   <div className="flex space-x-1">
//                     <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
//                     <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
//                   </div>
//                 </div>
//                 <div className="text-white text-lg font-semibold">VIRTUAL</div>
//                 <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 5678</div>
//               </div>
//               {selectedCard === "virtual" && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
//                   <Check className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Virtual Binance Card</h3>

//             {/* Features */}
//             <div className="space-y-4 mb-8">
//               {virtualCardFeatures.map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="text-purple-500 mt-1 flex-shrink-0">{feature.icon}</div>
//                   <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Requirements */}
//             <div className="bg-purple-50 rounded-xl p-4 mb-6">
//               <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to Get Your Virtual Card</h4>
//               {virtualRequirements.map((req, index) => (
//                 <div key={index} className="flex items-center gap-2 mb-2">
//                   <Check className="w-4 h-4 text-green-500" />
//                   <span className="text-gray-700 text-sm">{req}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Action Button */}
//         <div className="text-center">
//           <button
//             onClick={handleGetCard}
//             disabled={!selectedCard}
//             className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ${
//               selectedCard
//                 ? `${selectedCard === "physical" ? "bg-blue-500 hover:bg-blue-600" : "bg-purple-500 hover:bg-purple-600"} text-white shadow-2xl hover:scale-105 hover:shadow-3xl`
//                 : "bg-black text-white cursor-not-allowed"
//             }`}
//           >
//             {selectedCard ? `Get ${selectedCard === "physical" ? "Physical" : "Virtual"} Card` : "Select a Card Type"}
//           </button>

//           {selectedCard && (
//             <p className="text-white/80 mt-4 text-sm">
//               Ready to get your {selectedCard} Binance card with amazing benefits!
//             </p>
//           )}
//         </div>
//         {/* Comparison Note */}
//         <div className="mt-12 text-center">
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
//             <h4 className="text-white font-semibold mb-2">Why Choose Binance?</h4>
//             <p className="text-blue-100 text-sm">
//               Both cards offer industry-leading cashback rates, zero fees, and seamless crypto integration. Choose
//               virtual for instant access or physical for worldwide acceptance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BinanceCardSelection


















"use client"

import { useState } from "react"
import { Check, CreditCard, Smartphone, Shield, Zap, Globe, Gift, ArrowLeft, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BinanceCardSelection = ({ onBack, onClose }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  const navigate = useNavigate()

  const physicalCardFeatures = [
    { icon: <CreditCard className="w-5 h-5" />, text: "Up to 2% instant cashback, paid out in BTC or Binance" },
    { icon: <Shield className="w-5 h-5" />, text: "Up to €10,000 in ATM withdrawals per month" },
    { icon: <Zap className="w-5 h-5" />, text: "No FX fees for up to €20,000 per month" },
    { icon: <Globe className="w-5 h-5" />, text: "No minimum monthly installments" },
    { icon: <Gift className="w-5 h-5" />, text: "No monthly, annual, or inactivity fees" },
    { icon: <Check className="w-5 h-5" />, text: "Accepted by 40M+ merchants worldwide" },
    { icon: <CreditCard className="w-5 h-5" />, text: "Free additional virtual cards" },
  ]

  const virtualCardFeatures = [
    { icon: <CreditCard className="w-5 h-5" />, text: "Get up to 2% back on all purchases, paid out in BTC or Binance" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Start spending instantly via Apple Pay & Google Pay" },
    { icon: <Shield className="w-5 h-5" />, text: "Borrow funds at 0% and spend while keeping your crypto" },
    { icon: <Zap className="w-5 h-5" />, text: "No minimum monthly repayments or inactivity fees" },
  ]

  const physicalRequirements = ["Have a portfolio balance of at least $500", "Upgrade your account to Platinum"]

  const virtualRequirements = ["Have a portfolio balance of at least $100", "Complete your Identity Verification"]

  function handleCardSelect(cardType) {
    setSelectedCard(cardType)
    // Store card price in localStorage for payment page
    const cardPrice = cardType === "physical" ? 500 : 100
    const cardInfo = {
      type: cardType,
      price: cardPrice,
      name: cardType === "physical" ? "Physical Card" : "Virtual Card",
    }
    localStorage.setItem("selectedCardInfo", JSON.stringify(cardInfo))
  }

  const handleGetCard = () => {
    const user = JSON.parse(localStorage.getItem("userData"))

    if (!user) {
      // Not logged in → redirect to login page
      console.log("User is not logged in")
      navigate("/login")
    } else {
      console.log("User is logged in")
      // User is already logged in → redirect to card-list page
      navigate("/payment-method")
    }
  }

  return (
    <div className="min-h-screen text-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Header */}
        {(onBack || onClose) && (
          <div className="flex justify-between items-center mb-8">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors ml-auto"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-4xl font-bold text-white">Binance</span>
          </div> */}
          <h1 className="text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Choose Your Binance Card
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Select the perfect card for your crypto lifestyle. Both cards offer incredible benefits and rewards.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Physical Card */}
          <div
            className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
              selectedCard === "physical"
                ? "border-blue-500 shadow-2xl shadow-blue-500/25"
                : "border-transparent hover:border-blue-300 shadow-xl"
            }`}
            onClick={() => handleCardSelect("physical")}
          >
            {/* Card Preview */}
            <div className="relative mb-8">
              <div className="w-full h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
                  </div>
                </div>
                <div className="text-white text-lg font-semibold">PHYSICAL</div>
                <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 1234</div>
              </div>
              {selectedCard === "physical" && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Physical Card</h3>
            <div className="text-xl font-bold text-blue-600 mb-4">$500</div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {physicalCardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-blue-500 mt-1 flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to access the Physical card</h4>
              {physicalRequirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Card */}
          <div
            className={`bg-white/95 backdrop-blur-lg rounded-3xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 border-4 ${
              selectedCard === "virtual"
                ? "border-purple-500 shadow-2xl shadow-purple-500/25"
                : "border-transparent hover:border-purple-300 shadow-xl"
            }`}
            onClick={() => handleCardSelect("virtual")}
          >
            {/* Card Preview */}
            <div className="relative mb-8">
              <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
                  </div>
                </div>
                <div className="text-white text-lg font-semibold">VIRTUAL</div>
                <div className="absolute bottom-4 left-4 text-white/60 text-sm">**** **** **** 5678</div>
              </div>
              {selectedCard === "virtual" && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Virtual Card</h3>
            <div className="text-xl font-bold text-purple-600 mb-4">$100</div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {virtualCardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-purple-500 mt-1 flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-purple-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">How to Get Your Virtual Card</h4>
              {virtualRequirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={handleGetCard}
            disabled={!selectedCard}
            className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ${
              selectedCard
                ? `${selectedCard === "physical" ? "bg-blue-500 hover:bg-blue-600" : "bg-purple-500 hover:bg-purple-600"} text-white shadow-2xl hover:scale-105 hover:shadow-3xl`
                : "bg-black text-white cursor-not-allowed"
            }`}
          >
            {selectedCard
              ? `Get ${selectedCard === "physical" ? "Physical ($500)" : "Virtual ($100)"} Card`
              : "Select a Card Type"}
          </button>

          {selectedCard && (
            <p className="text-white/80 mt-4 text-sm">
              Ready to get your {selectedCard} Binance card with amazing benefits!
            </p>
          )}
        </div>
        {/* Comparison Note */}
        {/* <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-black font-semibold mb-2">Why Choose Binance?</h4>
            <p className="text-blue-100 text-sm">
              Both cards offer industry-leading cashback rates, zero fees, and seamless crypto integration. Choose
              virtual for instant access or physical for worldwide acceptance.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BinanceCardSelection
