// // // // // // import { Link } from 'react-router-dom'

// // // // // // const CallToAction = () => {
// // // // // //   return (
// // // // // //     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
// // // // // //       {/* Main Heading */}
// // // // // //       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
// // // // // //         Apply Now, Build Credit. Stack Crypto.
// // // // // //       </h1>

// // // // // //       {/* Supporting paragraph */}
// // // // // //       <p className="text-lg text-gray-700 mb-4 max-w-xl">
// // // // // //         Cashapp isn’t just a card—it’s your full-access pass to credit + crypto power
// // // // // //       </p>

// // // // // //       {/* Bold subheading */}
// // // // // //       <p className="text-xl font-semibold text-black mb-8">
// // // // // //         Join the new economy. Spend smarter. Stack harder.
// // // // // //       </p>

// // // // // //       {/* Apply Button */}
// // // // // //       <Link to="/login">
// // // // // //       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition">
// // // // // //         Apply Now
// // // // // //       </button>
// // // // // //       </Link>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default CallToAction




// // // // // import {  useNavigate } from 'react-router-dom'
// // // // // // import Feature1 from "../../../assets/";
// // // // // const CallToAction = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const handleApplyNow = () => {
// // // // //     navigate("/dashboard-for-user", {
// // // // //       state: {
// // // // //         images: {
// // // // //           core: "/Cashapp.png",
// // // // //           plus: "/cashappcore.png",
// // // // //           elite: "/cashappplus.png",
// // // // //         },
// // // // //       },
// // // // //     });
// // // // //   };
// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
// // // // //       {/* Main Heading */}
// // // // //       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
// // // // //         Apply Now, Build Credit. Stack Crypto.
// // // // //       </h1>

// // // // //       {/* Supporting paragraph */}
// // // // //       <p className="text-lg text-gray-700 mb-4 max-w-xl">
// // // // //         Cashapp isn’t just a card—it’s your full-access pass to credit + crypto power
// // // // //       </p>

// // // // //       {/* Bold subheading */}
// // // // //       <p className="text-xl font-semibold text-black mb-8">
// // // // //         Join the new economy. Spend smarter. Stack harder.
// // // // //       </p>

// // // // //       {/* Apply Button */}
// // // // //       {/* <Link to="/login"> */}
// // // // //       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition
// // // // //       "
// // // // //       onClick={handleApplyNow}
// // // // //       >
// // // // //         Apply Now
// // // // //       </button>
// // // // //       {/* </Link> */}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default CallToAction




// // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // import Card1 from '../../../assets/nexon-card1.png'
// // // // import Card2 from '../../../assets/nexon-card2.png'
// // // // import Card3 from '../../../assets/nexon-card3.png'
// // // // import CashCard1 from '../../../assets/cash-app-card1.png'
// // // // import CashCard2 from '../../../assets/cash-app-card2.png'
// // // // import CashCard3 from '../../../assets/cash-app-card3.png'
// // // // import PayPalCard1 from '../../../assets/paypal-card1.png'
// // // // import PayPalCard2 from '../../../assets/paypal-card2.png'
// // // // import PayPalCard3 from '../../../assets/paypal-card3.png'

// // // // const CallToAction = () => {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   // map route => image set
// // // //   const imageMap = {
// // // //     "/cash-app": {
// // // //       core: CashCard1,
// // // //       plus: CashCard2,
// // // //       elite: CashCard3,
// // // //     },
// // // //     "/nexon": {
// // // //       core: Card1,
// // // //       plus: Card2,
// // // //       elite: Card3,
// // // //     },
// // // //     "/paypal": {
// // // //       core: PayPalCard1,
// // // //       plus: PayPalCard2,
// // // //       elite: PayPalCard3,
// // // //     },
// // // //     "/coinbase": {
// // // //       core: "/coinbase-removebg-preview.png",
// // // //       plus: "/coinbase-removebg-preview.png",
// // // //       elite: "/coinbase-removebg-preview.png",
// // // //     },
// // // //     "/robinhood": {
// // // //       core: "/robinhood-hero.png",
// // // //       plus: "/robinhood-hero.png",
// // // //       elite: "/robinhood-hero.png",
// // // //     },
// // // //     "/trustwallet": {
// // // //       core: "/newimage-removebg-preview.png",
// // // //       plus: "/newimage-removebg-preview.png",
// // // //       elite: "/newimage-removebg-preview.png",
// // // //     },
// // // //   };

// // // //   const handleApplyNow = () => {
// // // //     const currentImages = imageMap[location.pathname] || {}; // fallback if not found
// // // //     navigate("/dashboard-for-user", {
// // // //       state: {
// // // //         images: currentImages,
// // // //       },
// // // //     });
// // // //   };

// // // //   // const handleApplyNow = () => {
// // // //   //   const currentImages = imageMap[location.pathname] || {};
  
// // // //   //   navigate("/login", {
// // // //   //     state: {
// // // //   //       from: "/dashboard-for-user",
// // // //   //       images: currentImages,
// // // //   //     },
// // // //   //   });
// // // //   // };


// // // //   // const handleApplyNow = () => {
// // // //   //   // const currentImages = imageMap[location.pathname] || {};
  
// // // //   //   navigate("/login", {
// // // //   //     state: {
// // // //   //       from: "/dashboard-for-user",
// // // //   //       images: imageMap[location.pathname] || {},
// // // //   //     },
// // // //   //   });
// // // //   // };
  

// // // //   // const handleApplyNow = () => {
// // // //   //   const currentImages = imageMap[location.pathname] || {}; // You already have this logic
  
// // // //   //   navigate("/login", {
// // // //   //     state: {
// // // //   //       from: "/dashboard-for-user", // 🔁 we remember where the user was trying to go
// // // //   //       images: currentImages,       // 📦 passing images as additional data
// // // //   //     },
// // // //   //   });
// // // //   // };


// // // //   return (
// // // //         <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
// // // //       {/* Main Heading */}
// // // //       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
// // // //         Apply Now, Build Credit. Stack Crypto.
// // // //       </h1>

// // // //       {/* Supporting paragraph */}
// // // //       <p className="text-lg text-gray-700 mb-4 max-w-xl">
// // // //         It isn’t just a card—it’s your full-access pass to credit + crypto power
// // // //       </p>

// // // //       {/* Bold subheading */}
// // // //       <p className="text-xl font-semibold text-black mb-8">
// // // //         Join the new economy. Spend smarter. Stack harder.
// // // //       </p>

// // // //       {/* Apply Button */}
// // // //       {/* <Link to="/login"> */}
// // // //       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition
// // // //       "
// // // //       onClick={handleApplyNow}
// // // //       >
// // // //         Apply Now
// // // //       </button>
// // // //       {/* </Link> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CallToAction;





// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import CashCard1 from '../../../assets/cash-app-card1.png'
// // // import CashCard2 from '../../../assets/cash-app-card2.png'
// // // import CashCard3 from '../../../assets/cash-app-card3.png'

// // // const CallToAction = () => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // map route => image set
// // //   const imageMap = {
// // //     "/cash-app": {
// // //       core: CashCard1,
// // //       plus: CashCard2,
// // //       elite: CashCard3,
// // //     },
// // //     "/nexon": {
// // //       core: "/Flip Hor.png",
// // //       plus: "/Premium.svg",
// // //       elite: "/infinite.svg",
// // //     },
// // //     "/paypal": {
// // //       core: "/Credit card mockup (3).png",
// // //       plus: "/Credit carPaypal mockup.svg",
// // //       elite: "/Credit card mockup.svg",
// // //     },
// // //     "/coinbase": {
// // //       core: "/coinbase-removebg-preview.png",
// // //       plus: "/coinbase-removebg-preview.png",
// // //       elite: "/coinbase-removebg-preview.png",
// // //     },
// // //     "/robinhood": {
// // //       core: "/RH start.svg",
// // //       plus: "/RH Grow.svg",
// // //       elite: "/Prime.svg"
// // //     },
// // //     "/trustwallet": {
// // //       core: "/newimage-removebg-preview.png",
// // //       plus: "/newimage-removebg-preview.png",
// // //       elite: "/newimage-removebg-preview.png",
// // //     },
// // //   };

// // //   const handleApplyNow = () => {
// // //     const currentImages = imageMap[location.pathname] || {}; // fallback if not found
// // //     navigate("/dashboard-for-user", {
// // //       state: {
// // //         images: currentImages,
// // //       },
// // //     });
// // //   };

// // //   // const handleApplyNow = () => {
// // //   //   const currentImages = imageMap[location.pathname] || {};
  
// // //   //   navigate("/login", {
// // //   //     state: {
// // //   //       from: "/dashboard-for-user",
// // //   //       images: currentImages,
// // //   //     },
// // //   //   });
// // //   // };


// // //   // const handleApplyNow = () => {
// // //   //   // const currentImages = imageMap[location.pathname] || {};
  
// // //   //   navigate("/login", {
// // //   //     state: {
// // //   //       from: "/dashboard-for-user",
// // //   //       images: imageMap[location.pathname] || {},
// // //   //     },
// // //   //   });
// // //   // };
  

// // //   // const handleApplyNow = () => {
// // //   //   const currentImages = imageMap[location.pathname] || {}; // You already have this logic
  
// // //   //   navigate("/login", {
// // //   //     state: {
// // //   //       from: "/dashboard-for-user", // 🔁 we remember where the user was trying to go
// // //   //       images: currentImages,       // 📦 passing images as additional data
// // //   //     },
// // //   //   });
// // //   // };


// // //   return (
// // //         <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
// // //       {/* Main Heading */}
// // //       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
// // //         Apply Now, Build Credit. Stack Crypto.
// // //       </h1>

// // //       {/* Supporting paragraph */}
// // //       <p className="text-lg text-gray-700 mb-4 max-w-xl">
// // //         It isn’t just a card—it’s your full-access pass to credit + crypto power
// // //       </p>

// // //       {/* Bold subheading */}
// // //       <p className="text-xl font-semibold text-black mb-8">
// // //         Join the new economy. Spend smarter. Stack harder.
// // //       </p>

// // //       {/* Apply Button */}
// // //       {/* <Link to="/login"> */}
// // //       <button className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition
// // //       "
// // //       onClick={handleApplyNow}
// // //       >
// // //         Apply Now
// // //       </button>
// // //       {/* </Link> */}
// // //     </div>
// // //   );
// // // };
// // // export default CallToAction;



import { useNavigate, useLocation } from "react-router-dom";
import CashCard1 from "../../../assets/cash-app-card1.png";
import CashCard2 from "../../../assets/cash-app-card2.png";
import CashCard3 from "../../../assets/cash-app-card3.png";
import DownloadModal from "./DownloadModelCashapp";
import { useState } from "react";
import { Download } from "lucide-react";

const imageMap = {
  "/cash-app": {
    core: CashCard1,
    plus: CashCard2,  
    elite: CashCard3,
    cardName : "CashApp Card",
     qrCode: "/cardsDownload/My_QR_Code_1-1024.jpeg"
  },
  "/binance": {
    core: "/Flip Hor.png",
    plus: "/Premium.svg",
    elite: "/infinite.svg",
    cardName : "binance Card",
     qrCode: "/cardsDownload/My_QR_Code_2-1024.jpeg"
  },
  "/paypal": {
    core: "/Credit card mockup (3).png",
    plus: "/Credit carPaypal mockup.svg",
    elite: "/Credit card mockup.svg",
    cardName : "Paypal Card",
     qrCode: "/cardsDownload/My_QR_Code_3-1024.jpeg"
  },
  "/coinbase": {
    core: "/coinbase-removebg-preview.png",
    plus: "/coinbase-removebg-preview.png",
    elite: "/coinbase-removebg-preview.png",
    cardName : "Coinbase Card",
     qrCode: "/cardsDownload/My_QR_Code_4-1024.jpeg"
  },
  "/robinhood": {
    core: "/RH start.svg",
    plus: "/RH Grow.svg",
    elite: "/Prime.svg",
    cardName : "robinhood Card",
     qrCode: "/cardsDownload/My_QR_Code_5-1024.jpeg"
  },
  "/trustwallet": {
    core: "/newimage-removebg-preview.png",
    plus: "/newimage-removebg-preview.png",
    elite: "/newimage-removebg-preview.png",
    cardName : "TrustWallet Card",
     qrCode: "/cardsDownload/My_QR_Code_6-1024.jpeg"
  },
};

const CallToAction = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check login by presence of userData in localStorage
  const isLoggedIn = Boolean(localStorage.getItem("userData"));

  const selectedCard = JSON.parse(localStorage.getItem("selectedCard")) || {};

   const [showDownload, setShowDownload] = useState(false);
  

  const handleApplyNow = () => {
    const currentImages = imageMap[location.pathname] || {
      core: "",
      plus: "",
      elite: "",
      cardName : ""
    };
    if (!isLoggedIn) {
      // Not logged in → send to login, remember where and what
      navigate("/login", {
        state: {
          from: location.pathname,
          images: currentImages,
        },
      });
    } else {
      // Already logged in → go straight to dashboard
      navigate("/dashboard-for-user", {
        state: { images: currentImages,
           selectedCardImage: selectedCard.image,
    selectedCardName: selectedCard.name,
        },
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">
        Apply Now, Build Credit. Stack Crypto.
      </h1>
      <p className="text-lg text-gray-700 mb-4 max-w-xl">
        It isn’t just a card—it’s your full-access pass to credit + crypto power
      </p>
      <p className="text-xl font-semibold text-black mb-8">
        Join the new economy. Spend smarter. Stack harder.
      </p>
      <button
        onClick={handleApplyNow}
        className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition"
      >
        Apply Now
      </button>
        <button 
                onClick={() => setShowDownload(true)}
                className="bg-[#0d0011] text-white px-8 py-4 rounded-full text-lg font-medium  transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-10"
              >
                <Download size={20} />
                Download App
              </button>
              {/* <DownloadModal 
        isOpen={showDownload} 
        onClose={() => setShowDownload(false)}
      /> */}
      <DownloadModal 
  isOpen={showDownload} 
  onClose={() => setShowDownload(false)}
  appName={imageMap[location.pathname]?.cardName || "Our App"}
  qrCode={imageMap[location.pathname]?.qrCode}
/>

    </div>
  );
};
export default CallToAction;





// import { useNavigate, useLocation } from "react-router-dom";
// import CashCard1 from "../../../assets/cash-app-card1.png";
// import CashCard2 from "../../../assets/cash-app-card2.png";
// import CashCard3 from "../../../assets/cash-app-card3.png";
// import { getCardSlugByName } from "@/component/GetCardSlugByName";

// const imageMap = {
//   "cash-app": {
//     core: CashCard1,
//     plus: CashCard2,
//     elite: CashCard3,
//     cardName: "CashApp Card"
//   },
//   "binance": {
//     core: "/Flip Hor.png",
//     plus: "/Premium.svg",
//     elite: "/infinite.svg",
//     cardName: "Binance Card"
//   },
//   "paypal": {
//     core: "/Credit card mockup (3).png",
//     plus: "/Credit carPaypal mockup.svg",
//     elite: "/Credit card mockup.svg",
//     cardName: "Paypal Card"
//   },
//   "coinbase": {
//     core: "/coinbase-removebg-preview.png",
//     plus: "/coinbase-removebg-preview.png",
//     elite: "/coinbase-removebg-preview.png",
//     cardName: "Coinbase Card"
//   },
//   "robinhood": {
//     core: "/RH start.svg",
//     plus: "/RH Grow.svg",
//     elite: "/Prime.svg",
//     cardName: "Robinhood Card"
//   },
//   "trustwallet": {
//     core: "/newimage-removebg-preview.png",
//     plus: "/newimage-removebg-preview.png",
//     elite: "/newimage-removebg-preview.png",
//     cardName: "TrustWallet Card"
//   },
// };

// const CallToAction = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Check login by presence of userData in localStorage
//   const isLoggedIn = Boolean(localStorage.getItem("userData"));
  
//   // Get cardName from location state (passed from dashboard)
//   const cardName = location.state?.cardName || "";
  
//   // Get card slug using your utility function
//   const cardSlug = getCardSlugByName(cardName);
//   console.log(cardSlug,"final hain bhai")
//   // Get card images based on the selected card
//   const cardImages = cardSlug ? imageMap[cardSlug] : null;
  
//   const handleApplyNow = () => {
//     if (!isLoggedIn) {
//       // Not logged in → send to login, remember where and what
//       navigate("/login", {
//         state: {
//           from: location.pathname,
//           images: cardImages,
//           cardName: cardName
//         },
//       });
//     } else {
//       // Already logged in → go straight to dashboard
//       navigate("/dashboard-for-user", {
//         state: { 
//           images: cardImages,
//           cardName: cardName
//         },
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
//       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
//         Apply Now, Build Credit. Stack Crypto.
//       </h1>
//       <p className="text-lg text-gray-700 mb-4 max-w-xl">
//         It isn't just a card—it's your full-access pass to credit + crypto power
//       </p>
//       <p className="text-xl font-semibold text-black mb-8">
//         Join the new economy. Spend smarter. Stack harder.
//       </p>
      
//       {/* Display selected card name and image */}
//       {cardImages && (
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             {cardImages.cardName}
//           </h2>
//           <div className="flex gap-4 justify-center items-center">
//             <div className="text-center">
//               <img 
//                 src={cardImages.core} 
//                 alt={`${cardImages.cardName} Core`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Core</p>
//             </div>
//             <div className="text-center">
//               <img 
//                 src={cardImages.plus} 
//                 alt={`${cardImages.cardName} Plus`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Plus</p>
//             </div>
//             <div className="text-center">
//               <img 
//                 src={cardImages.elite} 
//                 alt={`${cardImages.cardName} Elite`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Elite</p>
//             </div>
//           </div>
//         </div>
//       )}
      
//       <button
//         onClick={handleApplyNow}
//         className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition"
//       >
//         Apply Now
//       </button>
//     </div>
//   );
// };

// export default CallToAction;


// import { useNavigate, useLocation } from "react-router-dom";
// import CashCard1 from "../../../assets/cash-app-card1.png";
// import CashCard2 from "../../../assets/cash-app-card2.png";
// import CashCard3 from "../../../assets/cash-app-card3.png";
// import { getCardSlugByName } from "@/component/GetCardSlugByName";

// const imageMap = {
//   "cash-app": {
//     core: CashCard1,
//     plus: CashCard2,
//     elite: CashCard3,
//     cardName: "CashApp Card"
//   },
//   "binance": {
//     core: "/Flip Hor.png",
//     plus: "/Premium.svg",
//     elite: "/infinite.svg",
//     cardName: "Binance Card"
//   },
//   "paypal": {
//     core: "/Credit card mockup (3).png",
//     plus: "/Credit carPaypal mockup.svg",
//     elite: "/Credit card mockup.svg",
//     cardName: "Paypal Card"
//   },
//   "coinbase": {
//     core: "/coinbase-removebg-preview.png",
//     plus: "/coinbase-removebg-preview.png",
//     elite: "/coinbase-removebg-preview.png",
//     cardName: "Coinbase Card"
//   },
//   "robinhood": {
//     core: "/RH start.svg",
//     plus: "/RH Grow.svg",
//     elite: "/Prime.svg",
//     cardName: "Robinhood Card"
//   },
//   "trustwallet": {
//     core: "/newimage-removebg-preview.png",
//     plus: "/newimage-removebg-preview.png",
//     elite: "/newimage-removebg-preview.png",
//     cardName: "TrustWallet Card"
//   },
// };

// const CallToAction = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Check login by presence of userData in localStorage
//   const isLoggedIn = Boolean(localStorage.getItem("userData"));
  
//   // Get cardName from various possible sources
//   const cardName = location.state?.cardName 
  
//   // Debug: Log what we're getting
//   // console.log("Location state:", location.state);
//   console.log("CardName from various sources:", cardName);
//   // console.log("Full location object:", location);
  
//   // Get card slug using your utility function
//   const cardSlug = getCardSlugByName(cardName);
//   console.log(cardSlug,"card slug hain")
  
//   // Get card images based on the selected card
//   const cardImages = cardSlug ? imageMap[cardSlug] : null;
  
//   const handleApplyNow = () => {
//     if (!isLoggedIn) {
//       // Not logged in → send to login, remember where and what
//       navigate("/login", {
//         state: {
//           from: location.pathname,
//           images: cardImages,
//           cardName: cardName
//         },
//       });
//     } else {
//       // Already logged in → go straight to dashboard
//       navigate("/dashboard-for-user", {
//         state: { 
//           images: cardImages,
//           cardName: cardName
//         },
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center text-center py-16 px-6 h-[60vh]">
//       <h1 className="text-3xl md:text-5xl font-semibold mb-6">
//         Apply Now, Build Credit. Stack Crypto.
//       </h1>
//       <p className="text-lg text-gray-700 mb-4 max-w-xl">
//         It isn't just a card—it's your full-access pass to credit + crypto power
//       </p>
//       <p className="text-xl font-semibold text-black mb-8">
//         Join the new economy. Spend smarter. Stack harder.
//       </p>
      
//       {/* Display selected card name and image */}
//       {cardImages && (
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             {cardImages.cardName}
//           </h2>
//           <div className="flex gap-4 justify-center items-center">
//             <div className="text-center">
//               <img 
//                 src={cardImages.core} 
//                 alt={`${cardImages.cardName} Core`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Core</p>
//             </div>
//             <div className="text-center">
//               <img 
//                 src={cardImages.plus} 
//                 alt={`${cardImages.cardName} Plus`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Plus</p>
//             </div>
//             <div className="text-center">
//               <img 
//                 src={cardImages.elite} 
//                 alt={`${cardImages.cardName} Elite`}
//                 className="w-32 h-20 object-contain mx-auto mb-2"
//               />
//               <p className="text-sm text-gray-600">Elite</p>
//             </div>
//           </div>
//         </div>
//       )}
      
//       <button
//         onClick={handleApplyNow}
//         className="bg-[#0d0011] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1a001f] transition"
//       >
//         Apply Now
//       </button>
//     </div>
//   );
// };

// export default CallToAction;