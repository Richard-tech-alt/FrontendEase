/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */




// // // import CountUp from "react-countup";

// import WalletLoginButton from "@/component/wallet"

// // // import telegram from "../../assets/images/telegram.jpeg";
// // // import starbucks from "../../assets/images/starbucks.jpeg";

// // // import paypal from "../../assets/images/Sixmembers/paypal.png"
// // // import coinbase from "../../assets/images/Sixmembers/coinbase.png"
// // // import Binance from "../../assets/images/Sixmembers/Binance.png"
// // // import cashapp from "../../assets/images/Sixmembers/cashapp.png"
// // // import robinhood from "../../assets/images/Sixmembers/robinhood.png"
// // // import trustwallet from "../../assets/images/Sixmembers/truswallet.png"


// // // import HeroVideo from "../../assets/Video/HeroVideo.mp4";
// // // import { Link } from "react-router-dom";

// // // export default function CryptoLandingPage() {
// // //   const brandLogos = [
// // //     { name: "cashapp", logo: cashapp },
// // //     { name: "coinbase", logo: coinbase },
// // //     { name: "Binance", logo: Binance },
// // //     { name: "robinhood", logo: robinhood },
// // //     { name: "trustwallet", logo: trustwallet },
// // //     { name: "PayPal", logo: paypal },
// // //     { name: "cashapp", logo: cashapp },
// // //     { name: "coinbase", logo: coinbase },
// // //     { name: "Binance", logo: Binance },
// // //     { name: "robinhood", logo: robinhood },
// // //     { name: "trustwallet", logo: trustwallet },
// // //     { name: "PayPal", logo: paypal },
// // //     { name: "cashapp", logo: cashapp },
// // //     { name: "coinbase", logo: coinbase },
// // //     { name: "Binance", logo: Binance },
// // //     { name: "robinhood", logo: robinhood },
// // //     { name: "trustwallet", logo: trustwallet },
// // //     { name: "PayPal", logo: paypal },
   
// // //   ];

// // //   const transactions = [
// // //     { service: "Telegram", amount: -0.0 },
// // //     { service: "Starbucks Coffee", amount: -0.0 },
// // //   ];

// // //   return (
// // //     <div className="relative w-full h-auto overflow-hidden pt-6 sm:pt-4 md:pt-8 ">
// // //       {/* Background Video with Overlay */}
// // //       <video
// // //         className="absolute inset-0 w-full h-full object-cover z-0"
// // //         autoPlay
// // //         loop
// // //         muted
// // //         playsInline
// // //       >
// // //         <source src={HeroVideo} type="video/mp4" />
// // //         Your browser does not support the video tag.
// // //       </video>
// // //       <div className="absolute inset-0 bg-black/60 z-0" />

// // //       {/* Content Container */}
// // //       <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-2 md:px-12">
// // //         <div className="flex-1 w-full h-auto flex flex-col md:flex-col  lg:flex-row justify-between items-start md:py-16">
// // //           {/* Left Section */}
// // //           <div className="w-full md:w-3/4 pt-10">
// // //             <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
// // //               SPEND CRYPTO LIKE FIAT
// // //             </h1>
// // //             <ul className="space-y-1">
// // //               <li className="text-white text-sm sm:text-base md:text-lg font-medium">
// // //                 Seamless blockchain payments with your crypto
// // //               </li>
// // //               <li className="text-white text-sm sm:text-base md:text-lg font-medium">
// // //                 Trusted by 3.5+ Million Globally
// // //               </li>
// // //               <li className="text-white text-sm sm:text-base md:text-lg font-medium">
// // //                 Supports BTC, ETH, USDC, USDT, and more
// // //               </li>
// // //               <li className="text-white text-sm sm:text-base md:text-lg font-medium">
// // //                 Deposit via Bitcoin, Ethereum, Solana, BSC, Polygon, Tron ,Arbitrum, and others
// // //               </li>
// // //             </ul>
// // //            <Link to="/check">
// // //               <button className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-b from-[#550665] to-[#27012F] text-white rounded-full font-semibold text-sm sm:text-base  ">
// // //                 Get Started
// // //               </button>
// // //         </Link>
// // //           </div>

// // //           {/* Right Section */}
// // //           <div className="w-full md:w-1/3 bg-transparent text-white">
// // //             <div className=" mt-4 lg:mt-60 lg:mr-45 ">
// // //               <p className="text-xs sm:text-sm mb-1">Total Balance</p>
// // //               <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2">
// // //                 <CountUp end={0.0} prefix="$ " decimals={2} duration={3} />
// // //               </h2>
// // //             </div>

// // //             {/* Recent Transactions */}
// // //             <div className="space-y-4">
// // //               {transactions.map((tx, index) => (
// // //                 <div key={index} className="flex justify-between items-center">
// // //                   <div className="flex items-center">
// // //                     <img
// // //                       src={tx.service === "Telegram" ? telegram : starbucks}
// // //                       alt={tx.service}
// // //                       className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3"
// // //                     />
// // //                     <span className="text-sm sm:text-base">{tx.service}</span>
// // //                   </div>
// // //                   <span className="text-sm sm:text-base text-white-400 font-bold lg:mr-16">
// // //                     <CountUp
// // //                       end={Math.abs(tx.amount)}
// // //                       prefix="- $ "
// // //                       decimals={2}
// // //                       duration={2}
// // //                     />
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom Section */}
// // //         <div className="w-full mt-auto pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10">
// // //           <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6 sm:ml-4 md:ml-2 lg:ml-4">
// // //             Accepted by 130M+ merchants worldwide
// // //           </p>
// // //           <div className="overflow-hidden w-full">
// // //             <div className="flex animate-marquee gap-14">
// // //               {[...brandLogos, ...brandLogos].map((brand, index) => (
// // //                 <div key={index} className="flex-shrink-0">
// // //                   <img
// // //                     src={brand.logo}
// // //                     alt={brand.name}
// // //                     className="h-6 sm:h-2 md:h-6 lg:h-10 object-contain"
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }










// const index = () => {
//   return (
//     <div>
//       <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
//   <div className="max-w-6xl mx-auto">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//       Unlock Powerful Crypto Credit in Seconds
//     </h1>
//     <p className="text-lg text-gray-600 mb-8">
//       Your crypto isn’t just a store of value — it’s your credit. Connect your wallet, get a virtual or physical card, and unlock up to <span className="font-semibold text-blue-600">$20,000</span> in instant credit.
//     </p>

//     <div className="grid md:grid-cols-2 gap-10 mb-12">
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
//         <ul className="space-y-4">
//           <li><strong>1. Connect Your Crypto Wallet:</strong> MetaMask, Coinbase Wallet, Trust Wallet, and WalletConnect supported.</li>
//           <li><strong>2. Choose Your Card Type:</strong> Instantly get a virtual card or request a physical one.</li>
//           <li><strong>3. Unlock Your Credit Limit:</strong> $2,000 to $20,000 based on your wallet’s activity.</li>
//           <li><strong>4. Start Spending:</strong> Use your card anywhere Visa/Mastercard is accepted.</li>
//         </ul>
//       </div>

//       <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Exclusive Perks You'll Love</h3>
//         <ul className="list-disc list-inside space-y-2 text-sm">
//           <li><strong>$100 Welcome Bonus</strong> on card activation</li>
//           <li>1–5% Crypto Cashback</li>
//           <li>No Annual Fee for First 12 Months</li>
//           <li>Spend in 180+ Countries</li>
//           <li>Auto Top-Up from Stablecoins</li>
//           <li>Security Alerts & Smart Insights</li>
//           <li>Access Airdrops, Rewards, & NFT Perks</li>
//         </ul>
//       </div>
//     </div>

//     <div className="bg-blue-50 p-6 rounded-md border border-blue-100 mb-12">
//       <h3 className="text-lg font-semibold text-blue-800 mb-2">100% Secure. 100% Non-Custodial.</h3>
//       <p className="text-sm text-blue-700">
//         We don’t hold your funds. Your wallet stays in your control.  
//         Credit is assessed through your on-chain data — safely and transparently.
//       </p>
//     </div>

//     <div className="text-center">
//       {/* <a href="#" className="inline-block bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded hover:bg-blue-800 transition">
//         Connect Wallet & Get Card Now
//       </a> */}
//        <appkit-button />
//       <p className="text-sm text-gray-500 mt-2">No paperwork. No collateral. Just crypto-powered credit.</p>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default index


// // import { ConnectButton } from '@rainbow-me/rainbowkit';

// // const index = () => {
// //   return (
// //     <div>
// //       <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
// //         <div className="max-w-6xl mx-auto">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">
// //             Unlock Powerful Crypto Credit in Seconds
// //           </h1>
// //           <p className="text-lg text-gray-600 mb-8">
// //             Your crypto isn’t just a store of value — it’s your credit. Connect your wallet, get a virtual or physical card, and unlock up to <span className="font-semibold text-blue-600">$20,000</span> in instant credit.
// //           </p>

// //           {/* ...rest of content stays same... */}

// //           <div className="text-center mt-10">
// //             {/* 👇 Connect Wallet Button */}
// //             <appkit-button />
// //             <WalletLoginButton/>
// //             <p className="text-sm text-gray-500 mt-2">
// //               No paperwork. No collateral. Just crypto-powered credit.
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default index;


// // function index() {
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-xl font-bold mb-4">EaseWithdraw</h1>

// //       {/* Show wallet connect button */}
// //       <appkit-button />

// //       {/* Trigger login after wallet is connected */}
// //       <WalletLoginButton/>
// //     </div>
// //   )
// // }

// // export default index








import { useState, useEffect } from "react"
// import { useAccount } from "wagmi"

import {
  CreditCard,
  Shield,
  Zap,
  Gift,
  Globe,
  TrendingUp,
  ArrowRight,
  Users,
  Award,
  Crown,
  Banknote,
  Building,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import CustomConnectButton from "@/CustomConnectButton"

const MainHero = () => {
  // const {  isConnected } = useAccount()
  const [setCurrentTestimonial] = useState(0)
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])


   useEffect(() => {
    // Example: check login status
    const user = localStorage.getItem("userData");
    setIsLoggedIn(!!user); // true if logged in
  }, []);

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };


  const handleButton=()=>{
    navigate("/login")
  }


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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      image: "/placeholder.svg?height=60&width=60",
      content: "Finally, a way to use my crypto without selling it. The instant credit line changed everything!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Nomad",
      image: "/placeholder.svg?height=60&width=60",
      content: "ATM withdrawals worldwide with 2% cashback? This card is a game-changer for travelers.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=60&width=60",
      content: "No credit score needed was perfect for me. Now I'm building credit while earning rewards.",
      rating: 5,
    },
  ]



  const stats = [
    { number: "50K+", label: "Active Users", icon: Users },
    { number: "$100M+", label: "Crypto Secured", icon: Shield },
    { number: "180+", label: "Countries", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Add this style tag at the top of the component */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#550665] to-[#27012F]"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#550665]/30 to-[#27012F]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-[#27012F]/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#550665]/20 to-[#27012F]/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Enhanced Logo Badge */}
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white/90 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">E</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold">EaseWithdraw</span>
                  <span className="text-xs text-white/70">Revolutionary Crypto Credit</span>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Turn Your{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Crypto
                  </span>{" "}
                  into a passive{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Money
                  </span>{" "}
                
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl">
                Let your crypto work for you - unlock a second income stream effortlessly.
                  {/* Withdraw cash, earn rewards, and boost your credit score — all with one powerful crypto card. */}
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
                {[
                  { icon: Banknote, text: "Withdraw from Any ATM" },
                  // { icon: Banknote, text: "Double the Profits" },

                  { icon: Gift, text: "2% Cashback on Every Transaction" },

                  { icon: Zap, text: "Instant Credit Line with No Credit Score Needed" },
                  { icon: Shield, text: "Use Crypto as Collateral, Not as Payment" },
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start mt-6">
                <button   onClick={handleClick} className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-base sm:text-lg lg:text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 transform">
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700"></div>
                 
                  {/* <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                 
                    <button className="whitespace-nowrap" >Apply Now</button>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span> */}

                  <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
          <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="whitespace-nowrap">
            {isLoggedIn ? <CustomConnectButton/> : "Apply Now"}
          </span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
 
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </button>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2 text-white/70">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Bank-Level Security</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">FDIC Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">Global Acceptance</span>
                </div>
              </div>
            </div>

            {/* Right Content - Card Mockup */}
            <div className="relative">
              <div className="relative z-10 max-w-md mx-auto lg:max-w-lg">
                {/* Main Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 backdrop-blur-lg">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-12">
                      <div>
                        <h3 className="text-white font-bold text-lg">EaseWithdraw</h3>
                        <p className="text-gray-400 text-sm">Crypto Credit Card</p>
                      </div>
                      <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="mb-8">
                      <div className="flex space-x-4 text-white font-mono text-lg tracking-wider">
                        <span>5432</span>
                        <span>1098</span>
                        <span>7654</span>
                        <span>3210</span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">Cardholder</p>
                        <p className="text-white font-semibold">Your Name Here</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-xs uppercase tracking-wide">Expires</p>
                        <p className="text-white font-semibold">12/28</p>
                      </div>
                    </div>

                    {/* Chip */}
                    <div className="absolute top-20 left-8 w-10 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-80"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  2% Cashback
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce delay-500">
                  No Credit Check
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crypto Credit Card?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of finance with features designed for the modern crypto user.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

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
  )
}

export default MainHero
