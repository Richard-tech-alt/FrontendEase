// import React, { useState } from 'react';
// import { 
//   X, CreditCard, Smartphone, Zap, Shield, Globe, 
//   CheckCircle, Star, ArrowRight, Wallet, Bitcoin,
//   Banknote, Clock, Users, Award
// } from 'lucide-react';

// const CardInfoModal = ({ isOpen, onClose }) => {
//   const [selectedTab, setSelectedTab] = useState('virtual');

//   const cardOptions = [
//     {
//       id: "virtual",
//       name: "Virtual Card",
//       price: 100,
//       type: "Virtual",
//       color: "from-purple-600 to-blue-600",
//       borderColor: "border-purple-500",
//       bgGradient: "bg-gradient-to-br from-purple-900/20 to-blue-900/20",
//       icon: <Smartphone className="w-5 h-5" />,
//       features: [
//         "Instant activation",
//         "Get up to 2% back on all purchases, paid out in BTC or NEXO",
//         "Start spending instantly via Apple Pay & Google Pay",
//         "Borrow funds at 0% and spend while keeping your crypto",
//         "Apple/Google Pay compatible",
//         "No minimum monthly repayments or inactivity fees",
//         "Secure digital payments"
//       ],
//       highlights: [
//         { icon: <Zap className="w-4 h-4" />, text: "Instant Setup" },
//         { icon: <Bitcoin className="w-4 h-4" />, text: "2% Crypto Cashback" },
//         { icon: <Shield className="w-4 h-4" />, text: "0% Interest" }
//       ]
//     },
//     {
//       id: "physical",
//       name: "Physical Card",
//       price: 500,
//       type: "Physical",
//       color: "from-gray-800 to-gray-900",
//       borderColor: "border-blue-500",
//       bgGradient: "bg-gradient-to-br from-gray-900/20 to-blue-900/20",
//       icon: <CreditCard className="w-5 h-5" />,
//       features: [
//         "Up to 2% instant cashback, paid out in BTC or NEXO",
//         "Up to €10,000 in ATM withdrawals per month",
//         "No FX fees for up to €20,000 per month",
//         "No minimum monthly installments",
//         "No monthly, annual, or inactivity fees",
//         "Accepted by 40M+ merchants worldwide",
//         "ATM withdrawals worldwide",
//         "Free additional virtual cards",
//         "Premium benefits & rewards"
//       ],
//       highlights: [
//         { icon: <Banknote className="w-4 h-4" />, text: "ATM Access" },
//         { icon: <Globe className="w-4 h-4" />, text: "40M+ Merchants" },
//         { icon: <Award className="w-4 h-4" />, text: "Premium Benefits" }
//       ]
//     }
//   ];

//   const stats = [
//     { label: "Active Users", value: "2M+", icon: <Users className="w-4 h-4" /> },
//     { label: "Countries", value: "150+", icon: <Globe className="w-4 h-4" /> },
//     { label: "Avg Rating", value: "4.8★", icon: <Star className="w-4 h-4" /> },
//     { label: "Uptime", value: "99.9%", icon: <Shield className="w-4 h-4" /> }
//   ];

//   if (!isOpen) return null;

//   const selectedCard = cardOptions.find(card => card.id === selectedTab);

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//       <div className="bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Header */}
//         <div className="text-center pt-8 pb-6 px-6">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Card Type</span>
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Unlock the power of crypto spending with our premium card solutions
//           </p>
//         </div>

      

//         <div className="flex flex-col lg:flex-row overflow-auto max-h-[60vh]">
//           {/* Card Selection Tabs */}
//           <div className="lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-white/20">
//             <h3 className="text-xl font-semibold text-white mb-6">Select Card Type</h3>
//             <div className="space-y-4">
//               {cardOptions.map((card) => (
//                 <button
//                   key={card.id}
//                   onClick={() => setSelectedTab(card.id)}
//                   className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
//                     selectedTab === card.id
//                       ? `${card.borderColor} bg-gradient-to-r ${card.color} shadow-lg`
//                       : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center space-x-3">
//                       <div className={`p-2 rounded-lg ${selectedTab === card.id ? 'bg-white/20' : 'bg-white/10'}`}>
//                         {card.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-white">{card.name}</h4>
//                         <p className="text-sm text-gray-300">{card.type} Solution</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-lg font-bold text-white">${card.price}</div>
//                       <div className="text-xs text-gray-400">Setup Fee</div>
//                     </div>
//                   </div>

//                   {/* Quick highlights */}
//                   <div className="flex flex-wrap gap-2">
//                     {card.highlights.map((highlight, index) => (
//                       <div key={index} className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1">
//                         <span className="text-purple-300">{highlight.icon}</span>
//                         <span className="text-xs text-white">{highlight.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Card Details */}
//           <div className="lg:w-2/3 p-6">
//             <div className={`rounded-2xl ${selectedCard.bgGradient} border border-white/20 p-6 mb-6`}>
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedCard.color}`}>
//                     {selectedCard.icon}
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">{selectedCard.name}</h2>
//                     <p className="text-gray-300">Premium {selectedCard.type} Card</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-3xl font-bold text-white">${selectedCard.price}</div>
//                   <div className="text-sm text-gray-400">One-time setup</div>
//                 </div>
//               </div>

//               {/* Mock Card Visual */}
//               <div className={`relative h-48 rounded-2xl bg-gradient-to-r ${selectedCard.color} p-6 mb-6 overflow-hidden`}>
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 h-full flex flex-col justify-between text-white">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <div className="text-lg font-semibold">CRYPTO CARD</div>
//                       <div className="text-sm opacity-80">{selectedCard.type.toUpperCase()}</div>
//                     </div>
//                     <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
//                       {selectedCard.icon}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xl font-mono tracking-wider mb-2">
//                       {selectedCard.id === 'virtual' ? '•••• •••• •••• ••••' : '4532 1234 5678 9012'}
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span>YOUR NAME</span>
//                       <span>12/28</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Features List */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
//                 What's Included
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {selectedCard.features.map((feature, index) => (
//                   <div key={index} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
//                     <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
//                     <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <div className="pt-6 border-t border-white/20">
//                 <button className={`w-full bg-gradient-to-r ${selectedCard.color} text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center group`}>
//                   Get {selectedCard.name} - ${selectedCard.price}
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </button>
//                 <p className="text-center text-xs text-gray-400 mt-2">
//                   100% refundable setup fee • Instant activation
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardInfoModal;

import React, { useState } from 'react';
import { 
  X, CreditCard, Smartphone, Zap, Shield, Globe, 
  CheckCircle, Star, ArrowRight, Wallet, Bitcoin,
  Banknote, Clock, Users, Award
} from 'lucide-react';

const CardInfoModal = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('virtual');

  const cardOptions = [
    {
      id: "virtual",
      name: "Virtual Card",
      price: 100,
      type: "Virtual",
      color: "from-purple-600 to-blue-600",
      borderColor: "border-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-900/20 to-blue-900/20",
      icon: <Smartphone className="w-5 h-5" />,
      features: [
        "Instant activation",
        "Get up to 2% back on all purchases, paid out in BTC or NEXO",
        "Start spending instantly via Apple Pay & Google Pay",
        "Borrow funds at 0% and spend while keeping your crypto",
        "Apple/Google Pay compatible",
        "No minimum monthly repayments or inactivity fees",
        "Secure digital payments"
      ],
      highlights: [
        { icon: <Zap className="w-4 h-4" />, text: "Instant Setup" },
        { icon: <Bitcoin className="w-4 h-4" />, text: "2% Crypto Cashback" },
        { icon: <Shield className="w-4 h-4" />, text: "0% Interest" }
      ]
    },
    {
      id: "physical",
      name: "Physical Card",
      price: 500,
      type: "Physical",
      color: "from-gray-800 to-gray-900",
      borderColor: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-gray-900/20 to-blue-900/20",
      icon: <CreditCard className="w-5 h-5" />,
      features: [
        "Up to 2% instant cashback, paid out in BTC or NEXO",
        "Up to €10,000 in ATM withdrawals per month",
        "No FX fees for up to €20,000 per month",
        "No minimum monthly installments",
        "No monthly, annual, or inactivity fees",
        "Accepted by 40M+ merchants worldwide",
        "ATM withdrawals worldwide",
        "Free additional virtual cards",
        "Premium benefits & rewards"
      ],
      highlights: [
        { icon: <Banknote className="w-4 h-4" />, text: "ATM Access" },
        { icon: <Globe className="w-4 h-4" />, text: "40M+ Merchants" },
        { icon: <Award className="w-4 h-4" />, text: "Premium Benefits" }
      ]
    }
  ];

  const stats = [
    { label: "Active Users", value: "2M+", icon: <Users className="w-4 h-4" /> },
    { label: "Countries", value: "150+", icon: <Globe className="w-4 h-4" /> },
    { label: "Avg Rating", value: "4.8★", icon: <Star className="w-4 h-4" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-4 h-4" /> }
  ];

  if (!isOpen) return null;

  const selectedCard = cardOptions.find(card => card.id === selectedTab);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-6 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2 ml-6"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-6 px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Card Type</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Unlock the power of crypto spending with our premium card solutions
          </p>
        </div>


        <div className="flex flex-col lg:flex-row overflow-auto max-h-[60vh]">
          {/* Card Selection Tabs */}
          <div className="lg:w-1/3 p-6 border-b lg:border-b-0 lg:border-r border-white/20">
            <h3 className="text-xl font-semibold text-white mb-6">Select Card Type</h3>
            <div className="space-y-4">
              {cardOptions.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedTab(card.id)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                    selectedTab === card.id
                      ? `${card.borderColor} bg-gradient-to-r ${card.color} shadow-lg`
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${selectedTab === card.id ? 'bg-white/20' : 'bg-white/10'}`}>
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{card.name}</h4>
                        <p className="text-sm text-gray-300">{card.type} Solution</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick highlights */}
                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1">
                        <span className="text-purple-300">{highlight.icon}</span>
                        <span className="text-xs text-white">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Card Details - Features Only */}
          <div className="lg:w-2/3 p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedCard.color}`}>
                  {selectedCard.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCard.name} Benefits</h2>
                  <p className="text-gray-300">Premium {selectedCard.type} Card Features</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {selectedCard.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoModal;