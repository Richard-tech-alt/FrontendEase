
import React, { useState } from 'react';
import { 
  CreditCard, Zap, Shield, TrendingUp, Wallet, DollarSign, X,
  Star, CheckCircle, ArrowRight, 
  Banknote,
  Gift,
  Building,
  Crown,
  User
} from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import CardInfoModal from './CardInfoModel';

const financeCards = [
  {
    id: 1,
    name: 'Coinbase',
    icon: <CreditCard className="w-8 h-8" />,
    image: '/coinbase.png',
    benefits: ['Secure crypto trading', 'Low transaction fees', 'Advanced portfolio tracking', 'Real-time market data'],
    deposit: 50,
    rating: 4.8,
    users: '100M+'
  },
  {
    id: 2,
    name: 'CashApp',
    icon: <DollarSign className="w-8 h-8" />,
    image: '/cashapp (1).png',
    benefits: ['Instant money transfers', 'Bitcoin investment', 'Cash Card rewards', 'Stock trading'],
    deposit: 25,
    rating: 4.7,
    users: '50M+'
  },
  {
    id: 3,
    name: 'PayPal',
    icon: <Wallet className="w-8 h-8" />,
    image: '/paypal@2x.png',
    benefits: ['Global payment solution', 'Buyer protection', 'Business tools', 'Multiple currency support'],
    deposit: 30,
    rating: 4.6,
    users: '400M+'
  },
  {
    id: 4,
    name: 'TrustWallet',
    icon: <Shield className="w-8 h-8" />,
    image: '/trustwalletcard-removebg-preview.png',
    benefits: ['Multi-cryptocurrency wallet', 'DeFi access', 'NFT support', 'Enhanced security'],
    deposit: 40,
    rating: 4.5,
    users: '25M+'
  },
  {
    id: 5,
    name: 'Binance',
    icon: <TrendingUp className="w-8 h-8" />,
    image: '/binance_card-removebg-preview.png',
    benefits: ['Largest crypto exchange', 'Advanced trading tools', 'Staking rewards', 'Low fees'],
    deposit: 75,
    rating: 4.4,
    users: '120M+'
  },
  {
    id: 6,
    name: 'Robinhood',
    icon: <Zap className="w-8 h-8" />,
    image: '/robinhood.png',
    benefits: ['Commission-free trading', 'Stock & crypto access', 'Easy-to-use interface', 'Real-time market data'],
    deposit: 35,
    rating: 4.3,
    users: '23M+'
  }
];

const stats = [
  { label: 'Total Users', value: '750M+', icon: <User className="w-6 h-6" />, color: 'text-blue-400' },
  { label: 'Platforms', value: '6', icon: <CreditCard className="w-6 h-6" />, color: 'text-green-400' },
  { label: 'Avg Rating', value: '4.6★', icon: <Star className="w-6 h-6" />, color: 'text-yellow-400' },
  { label: 'Success Rate', value: '99.9%', icon: <CheckCircle className="w-6 h-6" />, color: 'text-purple-400' }
];


  const features = [
    {
      icon: Zap,
      title: "Instant Credit Access",
      description: "No waiting. No paperwork. Apply in minutes and get approved instantly.",
      color: "from-yellow-500 to-orange-500",
      highlight: "Instant",
    },
    {
      icon: Banknote,
      title: "ATM Withdrawals",
      description: "Convert your crypto to cash and withdraw from any ATM, worldwide.",
      color: "from-green-500 to-emerald-500",
      highlight: "Worldwide",
    },
    {
      icon: Gift,
      title: "2% Cashback on All Spends",
      description: "Whether you shop online or swipe offline, get rewarded every time.",
      color: "from-purple-500 to-pink-500",
      highlight: "2% Back",
    },
    {
      icon: TrendingUp,
      title: "No Credit Score Needed",
      description: "We don't judge. We help you grow your credit while you use your crypto.",
      color: "from-blue-500 to-cyan-500",
      highlight: "No Score",
    },
    {
      icon: Shield,
      title: "Fully Secured & Insured",
      description: "Your assets are protected with industry-leading security protocols.",
      color: "from-indigo-500 to-purple-500",
      highlight: "Protected",
    },
    {
      icon: Building,
      title: "Insurance on Credit Line/Loan",
      description: "Peace of mind comes standard with every card.",
      color: "from-teal-500 to-green-500",
      highlight: "Insured",
    },
  ]


function ResponsiveWalletDashboard() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showModalCard, setShowModalCard] = useState(false);
  const navigate = useNavigate()

    // const [cardType, setCardType] = useState("virtual")
const [cardTypes, setCardTypes] = useState({})

  // const cardPrice = cardType === "virtual" ? 100 : 500

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  // const handleAccessCard = () => {
  //   alert(`Redirecting to payment for ${selectedCard.name} - $${selectedCard.deposit} refundable deposit`);
  //   closeModal();
  // };

  const handleAccessCard = () => {
  const cardType = cardTypes[selectedCard.id] || "virtual";
  const cardPrice = cardType === "physical" ? 500 : 100;

  const cardData = {
    name: selectedCard.name,
    image: selectedCard.image,
    type: cardType,
    price: cardPrice,
  };

  // Save to localStorage
  localStorage.setItem("selectedCard", JSON.stringify(cardData));

  // alert(`Redirecting to payment for ${selectedCard.name} - $${cardPrice} refundable deposit`);
  navigate("/call-to-action")
  closeModal();
};


  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#550665] to-[#27012F]">

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TURN YOUR CRYPTO INTO A PASSIVE,
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MONEY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {/* Access premium financial tools and platforms. Choose your preferred service and unlock exclusive benefits with our secure, refundable deposit system. */}
            Let your crypto work for you - unlock a second income stream effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button    onClick={() => setShowModalCard(true)}     className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600">
              Learn More about virtual & physical card
            </button>
          </div>
          <CardInfoModal   
        isOpen={showModalCard} 
        onClose={() => setShowModalCard(false)} 
      />
        </div>

        

        {/* Main Cards Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Platform
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Select from our curated list of premium financial platforms. Each comes with exclusive benefits and secure access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {financeCards.map((card) => (
              <div
                key={card.id}
               
                className="group relative  backdrop-blur-lg rounded-2xl p-6 cursor-pointer transform transition-all duration-700  hover:bg-white/20 border border-white/20"
              >
                {/* Card Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full md:h-52"
                  />
                 
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{card.name}</h3>
                    <span className="text-gray-400 text-sm">{card.users}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Benefits</h4>
                    <ul className="space-y-1">
                      {card.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Access Fee</span>
                      <span className="text-green-400 font-semibold">${card.deposit} (Refundable)</span>
                    </div>
                  </div> */}



                  <div className="pt-4 border-t border-white/20">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor="cardType" className="text-gray-300 text-sm">
          Card Type
        </label>
        <select
  value={cardTypes[card.id] || "virtual"}
  onChange={(e) =>
    setCardTypes((prev) => ({
      ...prev,
      [card.id]: e.target.value
    }))
  }
  className="bg-transparent border border-white/30 text-sm text-white px-2 py-1 rounded focus:outline-none"
>
  <option value="virtual" className="text-black">Virtual Card</option>
  <option value="physical" className="text-black">Physical Card</option>
</select>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-300 text-sm">Card Price</span>
        {/* <span className="text-green-400 font-semibold">${cardPrice}</span> */}

        <span className="text-green-400 font-semibold">
  ${cardTypes[card.id] === "physical" ? 500 : 100}
</span>

      </div>
    </div>

                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg flex items-center justify-center group"  onClick={() => handleCardClick(card)}>
                    Access Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

       <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crypto Credit Card?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
              Experience the future of finance with features designed for the modern crypto user.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                ></div>

                {/* Highlight Badge */}
                <div
                  className={`absolute -top-3 -right-3 bg-gradient-to-r ${feature.color} text-white px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {feature.highlight}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.description}</p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Highlight */}
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 mb-4">
                <Crown className="w-4 h-4 text-yellow-300" />
                <span className="text-white font-medium">Combine Power</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Get up to 3 Credit Lines/Loans with one profile
              </h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Maximize your financial flexibility with multiple credit lines backed by your crypto portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      </div>

      {/* Modal */}
      {showModal && selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-in fade-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${selectedCard.color} flex items-center justify-center text-white`}>
                {selectedCard.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Access {selectedCard.name}({cardTypes[selectedCard.id] === "physical" ? "Physical Card" : "Virtual Card"})
              </h2>
              <p className="text-gray-600">
                Unlock premium features and exclusive benefits
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">What you'll get:</h3>
                <ul className="space-y-1">
                  {selectedCard.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  {/* <span className="font-semibold text-gray-900">Deposit Amount</span> */}
                  <span className="font-semibold text-gray-900">
  Deposit Amount ({cardTypes[selectedCard.id] === "physical" ? "Physical Card" : "Virtual Card"})
</span>

                  {/* <span className="text-2xl font-bold text-blue-600">${selectedCard.deposit}</span> */}
                  <span className="text-2xl font-bold text-blue-600 mt-10">
  ${cardTypes[selectedCard.id] === "physical" ? 500 : 100}
</span>

                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-green-600">100% Refundable</span> - This deposit will be returned to your account after verification
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleAccessCard}
                className={`w-full bg-gradient-to-r ${selectedCard.color} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
              >
                Pay & Access Now
                {/* Pay  <span className="text-2xl font-bold text-blue-600">
                  
  ${cardTypes[selectedCard.id] === "physical" ? 500 : 100}
</span> & Access Now */}
              </button>
              <button
                onClick={closeModal}
                className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors hover:bg-gray-300"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResponsiveWalletDashboard;