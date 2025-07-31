import React from 'react';
import { Check, Bell, CreditCard, Shield, Zap, Globe, Gift } from 'lucide-react';

export default function RobinhoodCardLayout() {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Up to 2% instant cashback",
      subtitle: "paid out in BTC or NEXO",
      highlight: true
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Up to €10,000 in ATM withdrawals",
      subtitle: "per month",
      highlight: true
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "No FX fees for up to €20,000",
      subtitle: "per month",
      highlight: true
    },
    {
      icon: <Check className="w-5 h-5" />,
      title: "No minimum monthly installments",
      subtitle: "",
      highlight: false
    },
    {
      icon: <Check className="w-5 h-5" />,
      title: "No monthly, annual, or inactivity fees",
      subtitle: "",
      highlight: false
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Accepted by 40M+ merchants",
      subtitle: "worldwide",
      highlight: true
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Free additional virtual cards",
      subtitle: "",
      highlight: false
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header with glassmorphism effect */}
      <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="flex items-center justify-center">
          <img 
            src="/path/to/your/nexo-logo.png" 
            alt="Nexo Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
        
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Your Custom Card Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="/path/to/your/card-image.png" 
            alt="Nexo Card" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Benefits List with enhanced styling */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
          <h3 className="text-gray-800 font-bold text-lg mb-6 flex items-center">
            <Zap className="w-5 h-5 text-blue-600 mr-2" />
            Premium Benefits
          </h3>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group flex items-start space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md cursor-pointer ${
                  benefit.highlight ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  benefit.highlight 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                    : 'bg-green-100 text-green-600'
                } group-hover:scale-110 transition-transform duration-200`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-gray-800 ${benefit.highlight ? 'text-base' : 'text-sm'}`}>
                    {benefit.title}
                  </div>
                  {benefit.subtitle && (
                    <div className="text-gray-600 text-sm mt-1">{benefit.subtitle}</div>
                  )}
                </div>
                {benefit.highlight && (
                  <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                    HOT
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How to access section with enhanced styling */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
          <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            Unlock Your Physical Card
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="p-2 bg-green-500 rounded-xl">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-gray-800 font-medium text-sm">
                  Portfolio balance of at least $500
                </div>
                <div className="text-green-600 text-xs font-medium">✓ Ready to verify</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="p-2 bg-green-500 rounded-xl">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-gray-800 font-medium text-sm">
                  Upgrade your account to Platinum
                </div>
                <div className="text-green-600 text-xs font-medium">✓ Upgrade available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Order Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
          <button className="relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl border-4 border-red-500 shadow-xl">
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span className="text-lg">Order Nexo Card</span>
            </div>
            <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-full"></div>
          </button>
        </div>

        {/* Additional info card */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-amber-500 rounded-xl">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-amber-800 font-semibold text-sm">Limited Time Offer</div>
              <div className="text-amber-700 text-xs mt-1">Get your first month with 3% cashback on all purchases!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}