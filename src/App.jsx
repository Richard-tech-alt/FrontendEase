
// // import { Suspense, lazy } from "react";
// // import { Route, Routes } from "react-router-dom";
// // import Navbar from "./component/Navbar";
// // import Footer from "./component/Footer";
// // import ScrollToTop from "./component/ScrollToTop";
// // import TawkToChat from "./component/TawkToChat";
// // import ErrorBoundary from "./component/ErrorBoundary"; // 👈 import error boundary
// // import CashAppCardLayout from "./pages/OrderCardPage/CashApp"; 
// // import NexoCardSelection from "./components4/cards/NexoCardSelection";
// // import SeparateCardList from "./component/SeparateCardList";
// // import ResponsiveWalletDashboard from "./component/ResponsiveWalletDashboard";
// // import CallToAction from "./pages/cashApp/components/CallToAction";
// // // import Nexon from "./pages/Nexon/Nexon";



// // // Lazy loaded pages/components
// // const Home = lazy(() => import("./pages/Home/Home"));
// // const CashApp = lazy(() => import("./pages/cashApp/CashApp"));
// // const Binance = lazy(() => import("./component/BinanceCard/MainBinance"));
// // const Coinbase = lazy(() => import("./pages/coinbase/Coinbase"));
// // // const Nexo = lazy(() => import("./pages/Nexon/Nexon"));

// // const Paypal = lazy(() => import("./pages/Paypal/Paypal"));
// // const TrustWallet = lazy(() => import("./pages/trust-wallet/TrustWallet"));
// // const Robinhood = lazy(() => import("./pages/Robinhood/Robinhood"));
// // const Dashboard = lazy(() => import("./component/Dashboard"));
// // const CardDashboard = lazy(() => import("./component/CardList"));
// // const PaymentConfirmation = lazy(() => import("./component/Payment-Confirmation"));
// // const Login = lazy(() => import("./LoginAndSignup/pages/login"));
// // const Signup = lazy(() => import("./LoginAndSignup/pages/register"));
// // const CreditScoreChecker = lazy(() => import("./pages/Home/component/Features/CreditCardScoreChecker"));
// // // const UserDashboard = lazy(() => import("./component/UserDashboard"));
// // const NewCheckerCards = lazy(() => import("./pages/Home/component/Features/NewCheckerCard"));
// // const CardManagement = lazy(() => import("./pages/Home/component/Features/CardManagement"));
// // const ApplyCardManagement = lazy(() => import("./component/ApplyNowCardManagement"));
// // const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/privacy"));
// // const TermsOfUse = lazy(() => import("./pages/TermsOfUse/terms"));
// // const AboutUsFooter = lazy(() => import("./pages/About/About"));
// // const CardLimitations = lazy(() => import("./pages/HelpCenter/HelpCenter"));



// // const App = () => {
// //   return (
// //     <div>
// //       <ScrollToTop />
// //       <Navbar />   
// //       <ErrorBoundary>

// //         <Suspense fallback={<div className="text-center py-10 text-lg font-semibold text-gray-700">Loading...</div>}>
// //           <Routes>
             
// //             <Route path="/" element={<Home/>}/>
// //             <Route path="/cash-app" element={<CashApp/>}/>
// //             <Route path="/binance" element={<Binance/>}/>
// //             <Route path="/coinbase" element={<Coinbase/>} />
// //             <Route path="/paypal" element={<Paypal/>}/>
// //             <Route path="/trustwallet" element={<TrustWallet />} />
// //             <Route path="/robinhood" element={<Robinhood />} />
// //             <Route path="/dashboard-for-user" element={<Dashboard />} />
// //             <Route path="/card-list" element={<CardDashboard />} />
// //             <Route path="/payment-confirmation" element={<PaymentConfirmation />}/>
// //             <Route path="/login" element={<Login/>}/>
// //             <Route path="/signup" element={<Signup/>}/>
// //             <Route path="/check" element={<CreditScoreChecker/>} />
// //             {/* <Route path="/user-dashboard" element={<UserDashboard/>} /> */}
// //             <Route path="/user-dashboard" element={<ResponsiveWalletDashboard/>} />

// //             <Route path="/new-checker" element={<NewCheckerCards/>}/>
// //             <Route path="/card-management" element={<CardManagement />}/>
// //             <Route path="/apply-card" element={<ApplyCardManagement />} />
// //             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// //             <Route path="/about-us" element={<AboutUsFooter />} />
// //             <Route path="/terms-of-use" element={<TermsOfUse />} />
// //             <Route path="/help-center" element={<CardLimitations />} />
// //             <Route path="/CashAppCardLayout" element={<CashAppCardLayout/>} />
// //             <Route path="/card-selection" element={<NexoCardSelection/>} />
// //             <Route path="/payment-method" element={<SeparateCardList/>} />
// //             <Route path="/call-to-action" element={<CallToAction/>} />
// //           </Routes>
// //         </Suspense>
// //       </ErrorBoundary>
// //       <TawkToChat />
    
// //       <Footer />
// //     </div>
// //   );
// // };
// // export default App;



// import { Suspense, lazy, useState, useEffect } from "react";
// /* eslint-disable react/prop-types */
// import { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
// import ScrollToTop from "./component/ScrollToTop";
// import TawkToChat from "./component/TawkToChat";
// import ErrorBoundary from "./component/ErrorBoundary";
// import CashAppCardLayout from "./pages/OrderCardPage/CashApp"; 
// import NexoCardSelection from "./components4/cards/NexoCardSelection";
// import SeparateCardList from "./component/SeparateCardList";
// import ResponsiveWalletDashboard from "./component/ResponsiveWalletDashboard";
// import CallToAction from "./pages/cashApp/components/CallToAction";
// import EaseWithdrawModal from "./component/EaseWithdrawModal";

// import ErrorBoundary from "./component/ErrorBoundary"; // 👈 import error boundary

// // Lazy loaded pages/components
// const Home = lazy(() => import("./pages/Home/Home"));
// const CashApp = lazy(() => import("./pages/cashApp/CashApp"));
// const Binance = lazy(() => import("./component/BinanceCard/MainBinance"));
// const Nexon = lazy(() => import("./pages/Nexon/Nexon"));
// const Coinbase = lazy(() => import("./pages/coinbase/Coinbase"));
// const Paypal = lazy(() => import("./pages/Paypal/Paypal"));
// const TrustWallet = lazy(() => import("./pages/trust-wallet/TrustWallet"));
// const Robinhood = lazy(() => import("./pages/Robinhood/Robinhood"));
// const Dashboard = lazy(() => import("./component/Dashboard"));
// const CardDashboard = lazy(() => import("./component/CardList"));
// const PaymentConfirmation = lazy(() => import("./component/Payment-Confirmation"));
// const Login = lazy(() => import("./LoginAndSignup/pages/login"));
// const Signup = lazy(() => import("./LoginAndSignup/pages/register"));
// const CreditScoreChecker = lazy(() => import("./pages/Home/component/Features/CreditCardScoreChecker"));
// const NewCheckerCards = lazy(() => import("./pages/Home/component/Features/NewCheckerCard"));
// const CardManagement = lazy(() => import("./pages/Home/component/Features/CardManagement"));
// const ApplyCardManagement = lazy(() => import("./component/ApplyNowCardManagement"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/privacy"));
// const TermsOfUse = lazy(() => import("./pages/TermsOfUse/terms"));
// const UserDashboard = lazy(() => import("./component/Userdashboard"));
// const NewCheckerCards = lazy(() => import("./pages/Home/component/Features/NewCheckerCard"));
// const CardManagement = lazy(() => import("./pages/Home/component/Features/CardManagement"));
// const ApplyCardManagement = lazy(() => import("./component/ApplyNowCardManagement"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/Privacy"));
// const TermsOfUse = lazy(() => import("./pages/TermsOfUse/Terms"));
// const AboutUsFooter = lazy(() => import("./pages/About/About"));
// const CardLimitations = lazy(() => import("./pages/HelpCenter/HelpCenter"));

// const App = () => {
//   const [showEaseWithdrawModal, setShowEaseWithdrawModal] = useState(false);

//   useEffect(() => {
//     // Show the EaseWithdraw modal after 5 seconds
//     const timer = setTimeout(() => {
//       setShowEaseWithdrawModal(true);
//     }, 5000);

//     // Cleanup timer on component unmount
//     return () => clearTimeout(timer);
//   }, []);

//   const handleCloseModal = () => {
//     setShowEaseWithdrawModal(false);
//   };

//   return (
//     <div>
//       <ScrollToTop />
//       <Navbar />   
//       <ErrorBoundary>
//         <Suspense fallback={<div className="text-center py-10 text-lg font-semibold text-gray-700">Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/cash-app" element={<CashApp/>}/>
//             <Route path="/binance" element={<Binance/>}/>
//             <Route path="/coinbase" element={<Coinbase/>} />
//             <Route path="/paypal" element={<Paypal/>}/>
//   return (
//     <div>
//       <ScrollToTop />
//       <Navbar />
//       <ErrorBoundary>
//         <Suspense fallback={<div className="text-center py-10 text-lg font-semibold text-gray-700">Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cash-app" element={<CashApp />} />
//             <Route path="/nexon" element={<Nexon />} />
//             <Route path="/coinbase" element={<Coinbase />} />
//             <Route path="/paypal" element={<Paypal />} />
//             <Route path="/trustwallet" element={<TrustWallet />} />
//             <Route path="/robinhood" element={<Robinhood />} />
//             <Route path="/dashboard-for-user" element={<Dashboard />} />
//             <Route path="/card-list" element={<CardDashboard />} />
//             <Route path="/payment-confirmation" element={<PaymentConfirmation />}/>
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/signup" element={<Signup/>}/>
//             <Route path="/check" element={<CreditScoreChecker/>} />
//             <Route path="/user-dashboard" element={<ResponsiveWalletDashboard/>} />
//             <Route path="/new-checker" element={<NewCheckerCards/>}/>
//             <Route path="/card-management" element={<CardManagement />}/>
//             <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/check" element={<CreditScoreChecker />} />
//             <Route path="/user-dashboard" element={<UserDashboard />} />
//             <Route path="/new-checker" element={<NewCheckerCards />} />
//             <Route path="/card-management" element={<CardManagement />} />
//             <Route path="/apply-card" element={<ApplyCardManagement />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/about-us" element={<AboutUsFooter />} />
//             <Route path="/terms-of-use" element={<TermsOfUse />} />
//             <Route path="/help-center" element={<CardLimitations />} />
//             <Route path="/CashAppCardLayout" element={<CashAppCardLayout/>} />
//             <Route path="/card-selection" element={<NexoCardSelection/>} />
//             <Route path="/payment-method" element={<SeparateCardList/>} />
//             <Route path="/call-to-action" element={<CallToAction/>} />
//           </Routes>
//         </Suspense>
//       </ErrorBoundary>
      
//       {/* EaseWithdraw Modal - appears after 5 seconds */}
//       <EaseWithdrawModal 
//         isOpen={showEaseWithdrawModal} 
//         onClose={handleCloseModal} 
//       />
      
//           </Routes>
//         </Suspense>
//       </ErrorBoundary>
//       <TawkToChat />
//       <Footer />
//     </div>
//   );
// };

// export default App;




import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import TawkToChat from "./component/TawkToChat";
import ErrorBoundary from "./component/ErrorBoundary";
import CashAppCardLayout from "./pages/OrderCardPage/CashApp"; 
import NexoCardSelection from "./components4/cards/NexoCardSelection";
import SeparateCardList from "./component/SeparateCardList";
import ResponsiveWalletDashboard from "./component/ResponsiveWalletDashboard";
import CallToAction from "./pages/cashApp/components/CallToAction";
import EaseWithdrawModal from "./component/EaseWithdrawModal";
import CookiesPopup from "./CookiesPopUp";

// Lazy loaded pages/components
const Home = lazy(() => import("./pages/Home/Home"));
const CashApp = lazy(() => import("./pages/cashApp/CashApp"));
const Binance = lazy(() => import("./component/BinanceCard/MainBinance"));
const Coinbase = lazy(() => import("./pages/coinbase/Coinbase"));
const Paypal = lazy(() => import("./pages/Paypal/Paypal"));
const TrustWallet = lazy(() => import("./pages/trust-wallet/TrustWallet"));
const Robinhood = lazy(() => import("./pages/Robinhood/Robinhood"));
const Dashboard = lazy(() => import("./component/Dashboard"));
const CardDashboard = lazy(() => import("./component/CardList"));
const PaymentConfirmation = lazy(() => import("./component/Payment-Confirmation"));
const Login = lazy(() => import("./LoginAndSignup/pages/login"));
const Signup = lazy(() => import("./LoginAndSignup/pages/register"));
const CreditScoreChecker = lazy(() => import("./pages/Home/component/Features/CreditCardScoreChecker"));
const NewCheckerCards = lazy(() => import("./pages/Home/component/Features/NewCheckerCard"));
const CardManagement = lazy(() => import("./pages/Home/component/Features/CardManagement"));
const ApplyCardManagement = lazy(() => import("./component/ApplyNowCardManagement"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/privacy"));
// const TermsOfUse = lazy(() => import("./pages/TermsOfUse/terms"));
const AboutUsFooter = lazy(() => import("./pages/About/About"));
const CardLimitations = lazy(() => import("./pages/HelpCenter/HelpCenter"));

const App = () => {
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showEaseWithdrawModal, setShowEaseWithdrawModal] = useState(false);

  useEffect(() => {
    const cookiesStatus = localStorage.getItem('cookiesAccepted');
    if (cookiesStatus === 'true') {
      setCookiesAccepted(true);
      const easeWithdrawTimer = setTimeout(() => {
        setShowEaseWithdrawModal(true);
      }, 5000);
      return () => clearTimeout(easeWithdrawTimer);
    } else {
      const cookiesTimer = setTimeout(() => {
        setShowCookiesPopup(true);
      }, 2000);
      return () => clearTimeout(cookiesTimer);
    }
  }, []);


  useEffect(() => {
  const shouldBlockScroll = showCookiesPopup || showEaseWithdrawModal;
  document.body.classList.toggle("no-scroll", shouldBlockScroll);
  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [showCookiesPopup, showEaseWithdrawModal]);


  useEffect(() => {
    if (cookiesAccepted && !showCookiesPopup) {
      const timer = setTimeout(() => {
        setShowEaseWithdrawModal(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cookiesAccepted, showCookiesPopup]);

  const handleCookiesAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    setShowCookiesPopup(false);
  };

  const handleCookiesDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookiesPopup(false);
    const timer = setTimeout(() => {
      setShowEaseWithdrawModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleCookiesClose = () => {
    setShowCookiesPopup(false);
    const timer = setTimeout(() => {
      setShowEaseWithdrawModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleCloseModal = () => {
    setShowEaseWithdrawModal(false);
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />   
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center py-10 text-lg font-semibold text-gray-700">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cash-app" element={<CashApp/>}/>
            <Route path="/binance" element={<Binance/>}/>
            <Route path="/coinbase" element={<Coinbase/>} />
            <Route path="/paypal" element={<Paypal/>}/>
            <Route path="/trustwallet" element={<TrustWallet />} />
            <Route path="/robinhood" element={<Robinhood />} />
            <Route path="/dashboard-for-user" element={<Dashboard />} />
            <Route path="/card-list" element={<CardDashboard />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/check" element={<CreditScoreChecker/>} />
            <Route path="/user-dashboard" element={<ResponsiveWalletDashboard/>} />
            <Route path="/new-checker" element={<NewCheckerCards/>}/>
            <Route path="/card-management" element={<CardManagement />}/>
            <Route path="/apply-card" element={<ApplyCardManagement />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-us" element={<AboutUsFooter />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/help-center" element={<CardLimitations />} />
            <Route path="/CashAppCardLayout" element={<CashAppCardLayout/>} />
            <Route path="/card-selection" element={<NexoCardSelection/>} />
            <Route path="/payment-method" element={<SeparateCardList/>} />
            <Route path="/call-to-action" element={<CallToAction/>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <CookiesPopup 
        isOpen={showCookiesPopup}
        onAccept={handleCookiesAccept}
        onDecline={handleCookiesDecline}
        onClose={handleCookiesClose}
      />
      
      <EaseWithdrawModal 
        isOpen={showEaseWithdrawModal} 
        onClose={handleCloseModal}
      />

      <TawkToChat />
      <Footer />
    </div>
  );
};

export default App;











// const cards = [
//   {
//     bank: 'CASHAPP CARDS',
//     offer: 'Get 10% cashback on all online purchases!',
//     image: '/Frame 631 (1).png',
//   },
//   {
//     bank: 'COINBASE CARDS',
//     offer: 'Earn 5x reward points on travel bookings!',
//     image: '/Frame 633 (1).png',
//   },
//   {
//     bank: 'PAYPAL CARDS',
//     offer: '0% interest for the first 12 months!',
//     image: '/Frame 634.png',
//   },
//   {
//     bank: 'TRUST WALLET CARDS',
//     offer: '0% interest for the first 12 months!',
//     image: '/Frame 635.png',
//   },
//   {
//     bank: 'ROBINHOOD CARDS',
//     offer: '0% interest for the first 12 months!',
//     image: '/Frame 636.png',
//   },
//   {
//     bank: 'NEXO CARDS',
//     offer: '0% interest for the first 12 months!',
//     image: '/Frame 632.png',
//   },
// ];

// const CreditCardLayout = () => {
//   // const navigate = useNavigate();
//     // const location = useLocation();
//     // const imageData = location.state?.images || [];
//   return (
//     <div className="py-12 px-4 sm:px-8 lg:px-16">
//       <h2 className="text-3xl font-bold text-center mb-12">Top Credit Card Offers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="shadow-lg overflow-hidden hover:shadow-2xl transition"
//           >
//             <img
//               src={card.image}
//               alt={card.bank}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold mb-2">{card.bank}</h3>
//               <p className="text-gray-700">{card.offer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CreditCardLayout;

// import { useState } from "react"
// import { FiArrowRight, FiCheck, FiChevronRight, FiCreditCard, FiStar } from "react-icons/fi"

// const cards = [
//   {
//     bank: "CASHAPP CARDS",
//     offer: "Get 10% cashback on all online purchases!",
//     image: "/Frame 631 (1).png",
//     features: ["No annual fee", "Instant notifications", "Virtual card option"],
//   },
//   {
//     bank: "COINBASE CARDS",
//     offer: "Earn 5x reward points on travel bookings!",
//     image: "/Frame 633 (1).png",
//     features: ["Crypto rewards", "No foreign transaction fees", "Metal card option"],
//   },
//   {
//     bank: "PAYPAL CARDS",
//     offer: "0% interest for the first 12 months!",
//     image: "/Frame 634.png",
//     features: ["Purchase protection", "Extended warranty", "Return shipping refunds"],
//   },
//   {
//     bank: "TRUST WALLET CARDS",
//     offer: "0% interest for the first 12 months!",
//     image: "/Frame 635.png",
//     features: ["Crypto cashback", "Worldwide acceptance", "Enhanced security"],
//   },
//   {
//     bank: "ROBINHOOD CARDS",
//     offer: "0% interest for the first 12 months!",
//     image: "/Frame 636.png",
//     features: ["Stock rewards", "No minimum balance", "Free ATM withdrawals"],
//   },
//   {
//     bank: "NEXO CARDS",
//     offer: "0% interest for the first 12 months!",
//     image: "/Frame 632.png",
//     features: ["Crypto credit line", "Zero fees", "Instant approval"],
//   },
// ]

// function CardItem({ card, index }) {
//   const [isFlipped, setIsFlipped] = useState(false)

//   return (
//     <div
//       className="group h-[400px] w-full"
//       style={{ perspective: "1000px" }}
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//     >
//       <div
//         className={`relative w-full h-full transition-all duration-500 cursor-pointer ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
//         style={{ transformStyle: "preserve-3d" }}
//         onClick={() => setIsFlipped(!isFlipped)}
//       >
//         {/* Front of card */}
//         <div
//           className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <div className="relative h-full flex flex-col">
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={card.image || "/placeholder.svg"}
//                 alt={card.bank}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className={`absolute inset-0 ${card.gradient} opacity-60`}></div>
//               <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 shadow-lg md:mt-8 mt-8">
//                 <div className="flex items-center gap-1">
//                   <FiStar className="h-3 w-3" />
//                   <span>EXCLUSIVE OFFER</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 p-6 bg-white flex flex-col justify-between">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">{card.bank}</h3>
//                 <p className="text-gray-700 mb-4">{card.offer}</p>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div className="flex items-center text-sm text-gray-500">
//                   <FiCreditCard className="h-4 w-4 mr-1" />
//                   <span>Tap to view details</span>
//                 </div>
//                 <FiChevronRight className="h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Back of card */}
//         <div
//           className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white [transform:rotateY(180deg)]"
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <div className={`h-16 ${card.gradient} flex items-center justify-between px-6`}>
//             <h3 className="text-xl font-bold text-white">{card.bank}</h3>
//             <FiCreditCard className="h-6 w-6 text-white/80" />
//           </div>

//           <div className="p-6">
//             <h4 className="font-semibold text-lg mb-4">Card Features</h4>
//             <ul className="space-y-3 mb-6">
//               {card.features?.map((feature, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <FiCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-auto">
//               <button
//                 className={`w-full py-3 px-4 rounded-lg text-red font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow ${card.gradient}`}
//               >
//                 Apply Now
//                 <FiArrowRight className="h-4 w-4" />
//               </button>

//               <p className="text-xs text-center text-gray-500 mt-4">
//                 Terms and conditions apply. Offer valid until December 31, 2025.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// const CreditCardLayout = () => {
//   return (
//     <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl  font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//             Exclusive Credit Card Offers
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             Discover the best credit card deals tailored for your financial needs. Compare benefits, rewards, and
//             special offers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <CardItem key={index} card={card} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
// export default CreditCardLayout










// /* eslint-disable react/prop-types */
// import { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar.jsx";
// import Footer from "./component/Footer.jsx";
// import ScrollToTop from "./component/ScrollToTop.jsx";
// import TawkToChat from "./component/TawkToChat.jsx";
// import ErrorBoundary from "./component/ErrorBoundary.jsx";

// // Lazy loaded pages/components with catch blocks
// const Home = lazy(() => import("./pages/Home/Home.jsx").catch(e => { console.error("Home load error:", e); throw e; }));
// const CashApp = lazy(() => import("./pages/cashApp/CashApp.jsx").catch(e => { console.error("CashApp load error:", e); throw e; }));
// const Nexon = lazy(() => import("./pages/Nexon/Nexon.jsx").catch(e => { console.error("Nexon load error:", e); throw e; }));
// const Coinbase = lazy(() => import("./pages/coinbase/Coinbase.jsx").catch(e => { console.error("Coinbase load error:", e); throw e; }));
// const Paypal = lazy(() => import("./pages/Paypal/Paypal.jsx").catch(e => { console.error("Paypal load error:", e); throw e; }));
// const TrustWallet = lazy(() => import("./pages/trust-wallet/TrustWallet.jsx").catch(e => { console.error("TrustWallet load error:", e); throw e; }));
// const Robinhood = lazy(() => import("./pages/Robinhood/Robinhood.jsx").catch(e => { console.error("Robinhood load error:", e); throw e; }));
// const Dashboard = lazy(() => import("./component/Dashboard.jsx").catch(e => { console.error("Dashboard load error:", e); throw e; }));
// const CardDashboard = lazy(() => import("./component/CardList.jsx").catch(e => { console.error("CardList load error:", e); throw e; }));
// const PaymentConfirmation = lazy(() => import("./component/Payment-Confirmation.jsx").catch(e => { console.error("PaymentConfirmation load error:", e); throw e; }));
// const Login = lazy(() => import("./LoginAndSignup/pages/login.jsx").catch(e => { console.error("Login load error:", e); throw e; }));
// const Signup = lazy(() => import("./LoginAndSignup/pages/register.jsx").catch(e => { console.error("Signup load error:", e); throw e; }));
// const CreditScoreChecker = lazy(() => import("./pages/Home/component/Features/CreditCardScoreChecker.jsx").catch(e => { console.error("CreditCardScoreChecker load error:", e); throw e; }));
// const UserDashboard = lazy(() => import("./component/Userdashboard.jsx").catch(e => { console.error("Userdashboard load error:", e); throw e; }));
// const NewCheckerCards = lazy(() => import("./pages/Home/component/Features/NewCheckerCard.jsx").catch(e => { console.error("NewCheckerCard load error:", e); throw e; }));
// const CardManagement = lazy(() => import("./pages/Home/component/Features/CardManagement.jsx").catch(e => { console.error("CardManagement load error:", e); throw e; }));
// const ApplyCardManagement = lazy(() => import("./component/ApplyNowCardManagement.jsx").catch(e => { console.error("ApplyNowCardManagement load error:", e); throw e; }));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/Privacy.jsx").catch(e => { console.error("PrivacyPolicy load error:", e); throw e; }));
// const TermsOfUse = lazy(() => import("./pages/TermsOfUse/Terms.jsx").catch(e => { console.error("Terms load error:", e); throw e; }));
// const AboutUsFooter = lazy(() => import("./pages/About/About.jsx").catch(e => { console.error("AboutUs load error:", e); throw e; }));
// const CardLimitations = lazy(() => import("./pages/HelpCenter/HelpCenter.jsx").catch(e => { console.error("HelpCenter load error:", e); throw e; }));

// export default function App()  {
//   return (
//     <div>
//       <ScrollToTop />
//       <Navbar />
//       <ErrorBoundary>
//         <Suspense fallback={<div className="text-center py-10 text-lg font-semibold text-gray-700">Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cash-app" element={<CashApp />} />
//             <Route path="/nexon" element={<Nexon />} />
//             <Route path="/coinbase" element={<Coinbase />} />
//             <Route path="/paypal" element={<Paypal />} />
//             <Route path="/trustwallet" element={<TrustWallet />} />
//             <Route path="/robinhood" element={<Robinhood />} />
//             <Route path="/dashboard-for-user" element={<Dashboard />} />
//             <Route path="/card-list" element={<CardDashboard />} />
//             <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/check" element={<CreditScoreChecker />} />
//             <Route path="/user-dashboard" element={<UserDashboard />} />
//             <Route path="/new-checker" element={<NewCheckerCards />} />
//             <Route path="/card-management" element={<CardManagement />} />
//             <Route path="/apply-card" element={<ApplyCardManagement />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/about-us" element={<AboutUsFooter />} />
//             <Route path="/terms-of-use" element={<TermsOfUse />} />
//             <Route path="/help-center" element={<CardLimitations />} />
//           </Routes>
//         </Suspense>
//       </ErrorBoundary>
//       <TawkToChat />
//       <Footer />
//     </div>
//   );
// };

