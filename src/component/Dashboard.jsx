// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   Crown,
// //   CreditCard,
// //   Zap,
// //   Shield,
// //   ArrowLeft,
// //   QrCode,
// // } from "lucide-react";
// // import { Link, useNavigate } from "react-router-dom";

// // // import { Link } from "react-router-dom";

// // const Dashboard = () => {
// //   const [showPayment, setShowPayment] = useState(false);
// //   const [selectedPlan, setSelectedPlan] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   const plans = [
// //     {
// //       title: "core",
// //       price: "$300",
// //       period: "month",
// //       description: "Perfect for starters",
// //       features: "/cashcore.png",
// //       icon: <Shield className="w-8 h-8 text-blue-500" />,
// //       color: "bg-blue-50",
// //       borderColor: "border-blue-200",
      
// //     },
// //     {
// //       title: "Plus",
// //       price: "$500",
// //       period: "month",
// //       description: "Most popular choice",
// //       features: "/cashappplus.png",
// //       icon: <Zap className="w-8 h-8 text-purple-500" />,
// //       color: "bg-purple-50",
// //       borderColor: "border-purple-200",
// //       popular: true,
// //     },
// //     {
// //       title: "Elite",
// //       price: "$1000",
// //       period: "month",
// //       description: "For large teams",
// //       features: "/cashappelite.png",
// //       icon: <Crown className="w-8 h-8 text-amber-500" />,
// //       color: "bg-amber-50",
// //       borderColor: "border-amber-200",
// //     },
// //   ];

// //   const handleSelectPlan = (plan) => {
// //     setSelectedPlan(plan);
// //     navigate("/card-list", { state: { selectedPlan: plan } });
// //     // setShowPayment(true);
// //   };

// //   const PaymentPage = () => (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="w-full max-w-2xl mx-auto p-6"
// //     >
// //       <Button
// //         variant="ghost"
// //         onClick={() => setShowPayment(false)}
// //         className="mb-6"
// //       >
// //         <ArrowLeft className="mr-2 h-4 w-4" />
// //         Back to Plans
// //       </Button>

// //       <Card className="w-full">
// //         <CardHeader>
// //           <CardTitle className="flex items-center justify-between">
// //             Payment Details
// //             <Badge variant="secondary" className="text-sm">
// //               {selectedPlan?.title} Plan
// //             </Badge>
// //           </CardTitle>
// //           <CardDescription>
// //             Complete your subscription to {selectedPlan?.title} plan
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-6">
// //           <div className="border rounded-lg p-6 bg-muted/50">
// //             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// //             <div className="flex justify-between mb-2">
// //               <span>Plan Price</span>
// //               <span>{selectedPlan?.price}/month</span>
// //             </div>
// //             <div className="flex justify-between mb-2">
// //               <span>Tax</span>
// //               <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
// //             </div>
// //             <div className="border-t pt-2 mt-2">
// //               <div className="flex justify-between font-semibold">
// //                 <span>Total</span>
// //                 <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="border rounded-lg p-6 bg-muted/50">
// //             <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
// //             <div className="flex flex-col items-center space-y-4">
// //               <QrCode className="w-48 h-48" />
// //               <p className="text-sm text-muted-foreground text-center">
// //                 Scan this QR code with your preferred payment app to complete
// //                 the transaction
// //               </p>
// //             </div>
// //           </div>
// //         </CardContent>
// //         <CardFooter className="flex flex-col space-y-4">
// //           <Button className="w-full" size="lg">
// //             <CreditCard className="mr-2 h-4 w-4" />
// //             Confirm Payment
// //           </Button>
// //           <p className="text-xs text-center text-muted-foreground">
// //             By confirming payment, you agree to our Terms of Service and Privacy
// //             Policy
// //           </p>
// //         </CardFooter>
// //       </Card>
// //     </motion.div>
// //   );

// //   const PlanCards = () => (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
// //     >
// //       {plans.map((plan, index) => (
// //         <motion.div
// //           key={plan.title}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: index * 0.1 }}
// //         >
// //           <Card
// //             className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
// //           >
// //             {plan.popular && (
// //               <Badge
// //                 className="absolute -top-2 -right-2 bg-purple-500"
// //                 variant="secondary"
// //               >
// //                 Most Popular
// //               </Badge>
// //             )}
// //             <CardHeader>
// //               <div className="flex items-center justify-between mb-2">
// //                 {plan.icon}
// //                 <span className="text-2xl font-bold">{plan.price}</span>
// //               </div>
// //               <CardTitle>{plan.title}</CardTitle>
// //               <CardDescription>{plan.description}</CardDescription>
// //             </CardHeader>
// //             <CardContent>
// //               <div className="flex justify-center my-4">
// //                 <img
// //                   src={plan.features}
// //                   alt={plan.title}
// //                   className="w-full rounded-lg"
// //                 />
// //               </div>
// //             </CardContent>
// //             <CardFooter>
// //               <Link to="/card-list">
// //               <Button
// //                 className="w-full"
// //                 variant={plan.popular ? "default" : "outline"}
// //                 onClick={() => handleSelectPlan(plan)}
// //               >
// //                 Select {plan.title}
// //               </Button>
// //               </Link>
// //             </CardFooter>
// //           </Card>
// //         </motion.div>
// //       ))}
// //     </motion.div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
// //       <div className="container mx-auto px-4">
// //         {!showPayment ? (
// //           <>
// //             <div className="text-center mb-12">
// //               <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
// //               <p className="text-muted-foreground">
// //                 Select the perfect plan for your needs. Upgrade or downgrade at
// //                 any time.
// //               </p>
// //             </div>
// //             <PlanCards />
// //           </>
// //         ) : (
// //           <PaymentPage />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Dashboard;
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Crown,
//   CreditCard,
//   Zap,
//   Shield,
//   ArrowLeft,
//   QrCode,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [showPayment, setShowPayment] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const plans = [
//     {
//       title: "core",
//       price: "$300",
//       period: "month",
//       description: "Perfect for starters",
//       features: "/cashcore.png",
//       icon: <Shield className="w-8 h-8 text-blue-500" />,
//       color: "bg-blue-50",
//       borderColor: "border-blue-200",
//       limit: "$10,000 credit limit"
      
//     },
//     {
//       title: "Plus",
//       price: "$500",
//       period: "month",
//       description: "Most popular choice",
//       features: "/cashappplus.png",
//       icon: <Zap className="w-8 h-8 text-purple-500" />,
//       color: "bg-purple-50",
//       borderColor: "border-purple-200",
//       popular: true,
//       limit: "$20,000 credit limit"
//     },
//     {
//       title: "Elite",
//       price: "$1000",
//       period: "month",
//       description: "For large teams",
//       features: "/cashappelite.png",
//       icon: <Crown className="w-8 h-8 text-amber-500" />,
//       color: "bg-amber-50",
//       borderColor: "border-amber-200",
//       limit: "$30,000 credit limit"
//     },
//   ];

//   const handleSelectPlan = (plan) => {
//     setSelectedPlan(plan);
//     navigate("/card-list", { state: { selectedPlan: plan } });
//     // setShowPayment(true);
//   };

//   const PaymentPage = () => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl mx-auto p-6"
//     >
//       <Button
//         variant="ghost"
//         onClick={() => setShowPayment(false)}
//         className="mb-6"
//       >
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Plans
//       </Button>

//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             Payment Details
//             <Badge variant="secondary" className="text-sm">
//               {selectedPlan?.title} Plan
//             </Badge>
//           </CardTitle>
//           <CardDescription>
//             Complete your subscription to {selectedPlan?.title} plan
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="border rounded-lg p-6 bg-muted/50">
//             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//             <div className="flex justify-between mb-2">
//               <span>Plan Price</span>
//               <span>{selectedPlan?.price}/month</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Tax</span>
//               <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
//             </div>
//             <div className="border-t pt-2 mt-2">
//               <div className="flex justify-between font-semibold">
//                 <span>Total</span>
//                 <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
//               </div>
//             </div>
//           </div>

//           <div className="border rounded-lg p-6 bg-muted/50">
//             <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
//             <div className="flex flex-col items-center space-y-4">
//               <QrCode className="w-48 h-48" />
//               <p className="text-sm text-muted-foreground text-center">
//                 Scan this QR code with your preferred payment app to complete
//                 the transaction
//               </p>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4">
//           <Button className="w-full" size="lg">
//             <CreditCard className="mr-2 h-4 w-4" />
//             Confirm Payment
//           </Button>
//           <p className="text-xs text-center text-muted-foreground">
//             By confirming payment, you agree to our Terms of Service and Privacy
//             Policy
//           </p>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );

//   const PlanCards = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
//     >
//       {plans.map((plan, index) => (
//         <motion.div
//           key={plan.title}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         >
//           <Card
//             className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
//           >
//             {plan.popular && (
//               <Badge
//                 className="absolute -top-2 -right-2 bg-purple-500"
//                 variant="secondary"
//               >
//                 Most Popular
//               </Badge>
//             )}
//             <CardHeader>
//               <div className="flex items-center justify-between mb-2">
//                 {plan.icon}
//                 <div className="text-end">
//                 <span className="text-2xl font-bold">{plan.price}</span>
//                 <br />
//                 <span className="text-sm text-muted-foreground">{plan.limit}</span>
//                 </div>
//               </div>
//               <CardTitle>{plan.title}</CardTitle>
//               <CardDescription>{plan.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex justify-center my-4">
//                 <img
//                   src={plan.features}
//                   alt={plan.title}
//                   className="w-full rounded-lg"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Link to="/card-list">
//               <Button
//                 className="w-full"
//                 variant={plan.popular ? "default" : "outline"}
//                 onClick={() => handleSelectPlan(plan)}
//               >
//                 Select {plan.title}
//               </Button>
//               </Link>
//             </CardFooter>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
//       <div className="container mx-auto px-4">
//         {!showPayment ? (
//           <>
//             <div className="text-center mb-12">
//               <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
//               <p className="text-muted-foreground">
//                 Select the perfect plan for your needs. Upgrade or downgrade at
//                 any time.
//               </p>
//             </div>
//             <PlanCards />
//           </>
//         ) : (
//           <PaymentPage />
//         )}
//       </div>
//     </div>
//   );
// };
// export default Dashboard;





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  CreditCard,
  Zap,
  Shield,
  ArrowLeft,
  QrCode,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const imageData = location.state?.images || [];

  const cardName = imageData.cardName || "";

  const selectedCardImage = location.state?.selectedCardImage || "";
// const selectedCardName = location.state?.selectedCardName || "";

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const plans = [
  {
    title: "core",
    price: "300",
    description: "Perfect for everyday users who want a simple, secure, and affordable debit card",
    subtitle: "The Essentials",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    limit: "$10,000 credit limit",
    imageKey: "core",
    emoji: "🟢",
    perfectFor: "Everyday users who want a simple, secure, and affordable debit card",
    maintenanceCharge: "$300/year",
    features: [
      "Physical & Virtual Visa Card",
      "Use anywhere Visa is accepted",
      "1 Active Boost at a time",
      "ATM withdrawals (fee applies unless direct deposit over $300)",
      "Apple Pay & Google Pay compatible",
      "Real-time alerts & freeze option",
      "Direct deposit support",
      "Standard card design"
    ]
  },
  {
    title: "plus",
    price: "500",
    description: "Users who want more benefits, more spending insights, and better support",
    subtitle: "More Rewards, More Control",
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    popular: true,
    limit: "$20,000 credit limit",
    imageKey: "plus",
    emoji: "🟠",
    perfectFor: "Users who want more benefits, more spending insights, and better support",
    maintenanceCharge: "$700/year",
    features: [
      // All Core features included
      "Physical & Virtual Visa Card",
      "Use anywhere Visa is accepted",
      "Apple Pay & Google Pay compatible",
      "Real-time alerts & freeze option",
      "Direct deposit support",
      // Plus exclusive features
      "Hold up to 3 Boosts at a time",
      "Priority support access",
      "Lower ATM withdrawal fees",
      "Early direct deposit (2 days faster)",
      "Premium card designs",
      "Spending insights & analytics",
      "1.5% cashback at select categories (groceries, fuel)",
      "$500/day withdrawal limit"
    ],
    plusFeatures: [
      "Hold up to 3 Boosts at a time",
      "Priority support access",
      "Lower ATM withdrawal fees",
      "Early direct deposit (2 days faster)",
      "Premium card designs",
      "Spending insights & analytics",
      "1.5% cashback at select categories (groceries, fuel)",
      "$500/day withdrawal limit"
    ]
  },
  {
    title: "elite",
    price: "1000",
    description: "High-volume users, entrepreneurs, and financial-savvy individuals who want VIP features",
    subtitle: "The Ultimate Cash Experience",
    icon: <Crown className="w-8 h-8 text-amber-500" />,
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    limit: "$30,000 credit limit",
    imageKey: "elite",
    emoji: "🔵",
    perfectFor: "High-volume users, entrepreneurs, and financial-savvy individuals who want VIP features",
    maintenanceCharge: "$1000/year",
    features: [
      // All Plus features included
      "Physical & Virtual Visa Card",
      "Use anywhere Visa is accepted",
      "Apple Pay & Google Pay compatible",
      "Real-time alerts & freeze option",
      "Direct deposit support",
      "Hold up to 3 Boosts at a time",
      "Priority support access",
      "Lower ATM withdrawal fees",
      "Early direct deposit (2 days faster)",
      "Premium card designs",
      "Spending insights & analytics",
      "1.5% cashback at select categories (groceries, fuel)",
      // Elite exclusive features
      "Unlimited Boosts (rotate anytime)",
      "3% cashback at major U.S. merchants (Netflix, Target, etc.)",
      "No ATM withdrawal fees nationwide",
      "Free wire transfers",
      "$10,000/day spending limit",
      "Premium metal card with gold accents",
      "Full fraud and chargeback protection",
      "Business tools access (reports, tags)",
      "Free replacement card",
      "Early access to app features",
      "Travel benefits (airport lounge access in progress)"
    ],
    eliteFeatures: [
      "Unlimited Boosts (rotate anytime)",
      "3% cashback at major U.S. merchants (Netflix, Target, etc.)",
      "No ATM withdrawal fees nationwide",
      "Free wire transfers",
      "$10,000/day spending limit",
      "Premium metal card with gold accents",
      "Full fraud and chargeback protection",
      "Business tools access (reports, tags)",
      "Free replacement card",
      "Early access to app features",
      "Travel benefits (airport lounge access in progress)"
    ]
  },
];

// Updated handleSelectPlan function to include new data
const handleSelectPlan = (plan) => {
  setSelectedPlan(plan);
  const selectedImage = imageData?.[plan.imageKey];

  let planData = {
    title: plan.title,
    price: plan.price,
    period: plan.period,
    description: plan.description,
    subtitle: plan.subtitle,
    perfectFor: plan.perfectFor,
    maintenanceCharge: plan.maintenanceCharge,
    features: plan.features,
    plusFeatures: plan.plusFeatures || null,
    eliteFeatures: plan.eliteFeatures || null,
    emoji: plan.emoji,
    image: selectedImage,
    name: cardName
  }

  localStorage.setItem("selectedPlan", JSON.stringify(planData));

  console.log(plan);
  
  navigate("/CashAppCardLayout", {
    state: {
      images: {
        core: imageData.core,
        plus: imageData.plus,
        elite: imageData.elite,
        cardName,
      }
    }
  });
};

  const PaymentPage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <Button
        variant="ghost"
        onClick={() => setShowPayment(false)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Plans
      </Button>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Payment Details
            <Badge variant="secondary" className="text-sm">
              {selectedPlan?.title} Plan
            </Badge>
          </CardTitle>
          <CardDescription>
            Complete your subscription to {selectedPlan?.title} plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Plan Price</span>
              <span>{selectedPlan?.price}/month</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>₹{parseInt(selectedPlan?.price) * 0.18}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{parseInt(selectedPlan?.price) * 1.18}</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6 bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Scan to Pay</h3>
            <div className="flex flex-col items-center space-y-4">
              <QrCode className="w-48 h-48" />
              <p className="text-sm text-muted-foreground text-center">
                Scan this QR code with your preferred payment app to complete
                the transaction
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" size="lg">
            <CreditCard className="mr-2 h-4 w-4" />
            Confirm Payment
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By confirming payment, you agree to our Terms of Service and Privacy
            Policy
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );


  const PlanCards = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
  >
    {plans.map((plan, index) => (
      <motion.div
        key={plan.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className={`relative h-full border-2 ${plan.borderColor} ${plan.color} hover:shadow-lg transition-shadow duration-300`}
        >
          {plan.popular && (
            <Badge
              className="absolute -top-2 -right-2 bg-purple-500"
              variant="secondary"
            >
              Most Popular
            </Badge>
          )}
          
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              {plan.icon}
              <div className="text-end">
                <span className="text-2xl font-bold">${plan.price}</span>
                <br />
                <span className="text-sm text-muted-foreground">/year</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{plan.emoji}</span>
              <CardTitle className="capitalize">{plan.title}</CardTitle>
            </div>
            
            <div className="mb-2">
              <p className="text-sm font-medium text-gray-600">{plan.subtitle}</p>
            </div>
            
            <CardDescription className="text-sm">{plan.perfectFor}</CardDescription>
            
            <div className="mt-2 p-2 bg-gray-50 rounded-md">
              <p className="text-sm font-semibold text-gray-700">
                Annual Maintenance: {plan.maintenanceCharge}
              </p>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* {imageData?.[plan.imageKey] && (
              <img
                src={imageData[plan.imageKey]}
                alt={`${plan.title} image`}
                className="w-full rounded-lg"
              />
            )} */}


        {(imageData?.[plan.imageKey] || selectedCardImage) && (
  <img
    src={imageData[plan.imageKey] || selectedCardImage}
    alt={`${plan.title} image`}
    className="w-full rounded-lg"
  />
)}

            
            {/* Key Features Section */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-700">Key Features:</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {plan.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.features.length > 4 && (
                  <li className="text-xs text-gray-500 italic">
                    +{plan.features.length - 4} more features
                  </li>
                )}
              </ul>
            </div>
            
            {/* Exclusive Features for Plus and Elite */}
            {plan.plusFeatures && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-purple-700">Plus Exclusive:</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  {plan.plusFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">★</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.plusFeatures.length > 3 && (
                    <li className="text-xs text-gray-500 italic">
                      +{plan.plusFeatures.length - 3} more exclusive features
                    </li>
                  )}
                </ul>
              </div>
            )}
            
            {plan.eliteFeatures && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-amber-700">Elite Exclusive:</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  {plan.eliteFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">♦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.eliteFeatures.length > 3 && (
                    <li className="text-xs text-gray-500 italic">
                      +{plan.eliteFeatures.length - 3} more VIP features
                    </li>
                  )}
                </ul>
              </div>
            )}
          </CardContent>
          
          <CardFooter>
            <Link to="/CashAppCardLayout" className="w-full">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSelectPlan(plan)}
              >
                Select {plan.title} Card
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

// Alternative Minimal Version (if you prefer less details on cards)
const PlanCardsMinimal = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
  >
    {plans.map((plan, index) => (
      <motion.div
        key={plan.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card
          className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
        >
          {plan.popular && (
            <Badge
              className="absolute -top-2 -right-2 bg-purple-500"
              variant="secondary"
            >
              Most Popular
            </Badge>
          )}
          
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              {plan.icon}
              <div className="text-end">
                <span className="text-2xl font-bold">${plan.price}</span>
                <br />
                <span className="text-sm text-muted-foreground">/year</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-lg">{plan.emoji}</span>
              <CardTitle className="capitalize">{plan.title}</CardTitle>
            </div>
            
            <CardDescription>{plan.subtitle}</CardDescription>
            
            <div className="mt-2">
              <p className="text-sm text-gray-600">{plan.perfectFor}</p>
            </div>
          </CardHeader>
          
          <CardContent>
            {imageData?.[plan.imageKey] && (
              <img
                src={imageData[plan.imageKey]}
                alt={`${plan.title} image`}
                className="w-full rounded-lg mb-3"
              />
            )}
            
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">
                {plan.maintenanceCharge}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {plan.features.length} features included
              </p>
            </div>
          </CardContent>
          
          <CardFooter>
            <Link to="/CashAppCardLayout" className="w-full">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleSelectPlan(plan)}
              >
                Select {plan.title}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);



  // const PlanCards = () => (
  //   <motion.div
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto"
  //   >
  //     {plans.map((plan, index) => (
  //       <motion.div
  //         key={plan.title}
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: index * 0.1 }}
  //       >
  //         <Card
  //           className={`relative h-full border-2 ${plan.borderColor} ${plan.color}`}
  //         >
  //           {plan.popular && (
  //             <Badge
  //               className="absolute -top-2 -right-2 bg-purple-500"
  //               variant="secondary"
  //             >
  //               Most Popular
  //             </Badge>
  //           )}
  //           <CardHeader>
  //             <div className="flex items-center justify-between mb-2">
  //               {plan.icon}
  //               <div className="text-end">
  //               {/* <span className="text-2xl font-bold">${plan.price}</span> */}
  //               <br />
  //               {/* <span className="text-sm text-muted-foreground">{plan.limit}</span> */}
  //               </div>
  //             </div>
  //             <CardTitle>{plan.title}</CardTitle>
  //               {/* <h1 className="text-lg font-medium">{cardName}</h1> */}
  //             <CardDescription>{plan.description}</CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //           {imageData?.[plan.imageKey] && (
  //   <img
  //     src={imageData[plan.imageKey]} // ✅ CORRECT usage
  //     alt={`${plan.title} image`}
  //     className="w-full rounded-lg"
  //   />
  // )}
   
  //           </CardContent>
  //           <CardFooter>
             
  //             <Link to="/CashAppCardLayout">
  //             <Button
  //               className="w-full"
  //               variant={plan.popular ? "default" : "outline"}
  //               onClick={() => handleSelectPlan(plan)}
  //             >
  //               Select {plan.title}
  //             </Button>
  //             </Link>
  //           </CardFooter>
  //         </Card>
  //       </motion.div>
  //     ))}
  //   </motion.div>
  // );
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        {!showPayment ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Choose Your <span>{cardName}</span> Plan</h1>
              <p className="text-muted-foreground">
                Select the perfect plan for your needs. Upgrade or downgrade at
                any time.
              </p>
            </div>
            <PlanCards />
          </>
        ) : (
          <PaymentPage />
        )}
      </div>
    </div>
  );
};
export default Dashboard;






























// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Crown,
//   CreditCard,
//   Zap,
//   Shield,
//   ArrowLeft,
//   QrCode,
//   Star,
//   Sparkles,
//   Diamond,
//   CheckCircle,
//   Gift,
//   Users,
//   TrendingUp
// } from "lucide-react";

// // Mock useLocation for demonstration - replace with actual import
// const useLocation = () => ({
//   state: {
//     images: {
//       cardName: "Premium Cash Card",
//       core: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop&crop=center",
//       plus: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop&crop=center",
//       elite: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop&crop=center"
//     },
//     selectedCardImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop&crop=center"
//   }
// });

// const Dashboard = () => {
//   const [showPayment, setShowPayment] = useState(false);
//   // Mock data for demonstration
//   const imageData = {
//     cardName: "Premium Cash Card",
//     selectedCardImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop&crop=center"
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const planData = {
//     price: 799,
//     annualPrice: 799,
//     monthlyPrice: 67
//   };

//   const allFeatures = [
//     { icon: <CreditCard className="w-5 h-5" />, text: "Physical & Virtual Visa Card" },
//     { icon: <Shield className="w-5 h-5" />, text: "Use anywhere Visa is accepted globally" },
//     { icon: <CheckCircle className="w-5 h-5" />, text: "Apple Pay & Google Pay compatible" },
//     { icon: <Zap className="w-5 h-5" />, text: "Real-time alerts & instant freeze option" },
//     { icon: <TrendingUp className="w-5 h-5" />, text: "Direct deposit support" },
//     { icon: <Gift className="w-5 h-5" />, text: "Unlimited Boosts (rotate anytime)" },
//     { icon: <Users className="w-5 h-5" />, text: "Premium card designs collection" },
//     { icon: <Star className="w-5 h-5" />, text: "Priority customer support access" },
//     { icon: <Diamond className="w-5 h-5" />, text: "No ATM withdrawal fees nationwide" },
//     { icon: <Sparkles className="w-5 h-5" />, text: "Early direct deposit (2 days faster)" },
//     { icon: <CheckCircle className="w-5 h-5" />, text: "Advanced spending insights & analytics" },
//     { icon: <Star className="w-5 h-5" />, text: "3% cashback at major U.S. merchants" },
//     { icon: <Gift className="w-5 h-5" />, text: "Free wire transfers" },
//     { icon: <Crown className="w-5 h-5" />, text: "Premium metal card with gold accents" },
//     { icon: <Shield className="w-5 h-5" />, text: "Full fraud and chargeback protection" },
//     { icon: <TrendingUp className="w-5 h-5" />, text: "Business tools access (reports, tags)" },
//     { icon: <Sparkles className="w-5 h-5" />, text: "1.5% cashback at select categories" },
//     { icon: <Star className="w-5 h-5" />, text: "Early access to new app features" }
//   ];

//   // Use your original handleSelectPlan logic
//   const handleSelectPlan = () => {
//     const selectedImage = imageData?.core || imageData?.plus || imageData?.elite || selectedCardImage;

//     let planDataToSend = {
//       title: "premium",
//       price: "799",
//       period: "year",
//       description: "Complete premium card experience with all features included",
//       subtitle: "All Premium Features",
//       perfectFor: "Everyone who wants the complete cash card experience",
//       maintenanceCharge: "$799/year",
//       features: allFeatures,
//       emoji: "🔥",
//       image: selectedImage,
//       name: cardName
//     };

//     localStorage.setItem("selectedPlan", JSON.stringify(planDataToSend));

//     console.log("Selected plan:", planDataToSend);
    
//     // Navigate to CashAppCardLayout with state
//     window.location.href = "/CashAppCardLayout";
//   };

//   const PaymentPage = () => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="w-full max-w-2xl mx-auto p-6"
//     >
//       <Button
//         variant="ghost"
//         onClick={() => setShowPayment(false)}
//         className="mb-6 hover:bg-gray-100"
//       >
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Plan
//       </Button>

//       <Card className="w-full shadow-xl border-0">
//         <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
//           <CardTitle className="flex items-center justify-between text-xl">
//             Payment Details
//             <Badge variant="secondary" className="bg-white text-purple-600">
//               ${tiers[selectedTier].price}/year
//             </Badge>
//           </CardTitle>
//           <CardDescription className="text-purple-100">
//             Complete your subscription to unlock all premium features
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6 p-6">
//           <div className="border rounded-xl p-6 bg-gradient-to-br from-gray-50 to-gray-100">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Plan Price</span>
//                 <span className="font-medium">${planData.price}/year</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Tax (18%)</span>
//                 <span className="font-medium">${Math.round(planData.price * 0.18)}</span>
//               </div>
//               <div className="border-t pt-3 mt-3">
//                 <div className="flex justify-between text-lg font-bold text-gray-800">
//                   <span>Total Amount</span>
//                   <span>${Math.round(planData.price * 1.18)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border rounded-xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50 text-center">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Scan to Pay</h3>
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-white rounded-lg shadow-md">
//                 <QrCode className="w-32 h-32 text-gray-600" />
//               </div>
//               <p className="text-sm text-gray-600 max-w-xs">
//                 Scan this QR code with your preferred payment app to complete the transaction securely
//               </p>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4 p-6">
//           <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" size="lg">
//             <CreditCard className="mr-2 h-4 w-4" />
//             Confirm Payment
//           </Button>
//           <p className="text-xs text-center text-gray-500">
//             By confirming payment, you agree to our Terms of Service and Privacy Policy
//           </p>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );

//   const PlanCard = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="flex justify-center p-6 w-full"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-4xl"
//       >
//         <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-purple-50">
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
//           <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
          
//           <CardHeader className="text-center pb-8 relative z-10">
//             <div className="flex justify-center mb-4">
//               <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
//                 <Crown className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
//               Premium Cash Card Experience
//             </CardTitle>
//             <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Get access to all premium features with one comprehensive card solution
//             </CardDescription>
//           </CardHeader>
          
//           <CardContent className="space-y-8 px-8 relative z-10">
//             {/* Card Image - using your original logic */}
//             {(imageData?.core || imageData?.plus || imageData?.elite || selectedCardImage) && (
//               <div className="flex justify-center">
//                 <motion.img
//                   whileHover={{ scale: 1.05, rotateY: 10 }}
//                   transition={{ duration: 0.3 }}
//                   src={imageData?.core || imageData?.plus || imageData?.elite || selectedCardImage}
//                   alt={`${cardName} Premium Card`}
//                   className="w-80 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
//                 />
//               </div>
//             )}

//             {/* Features Grid */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-center text-gray-800">
//                 All Premium Features Included
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {allFeatures.map((feature, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.05 }}
//                     className="p-4 rounded-xl border bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="mt-1 text-purple-600">
//                         {feature.icon}
//                       </div>
//                       <span className="text-sm text-gray-700 leading-relaxed">
//                         {feature.text}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Pricing Summary */}
//             <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-6 text-center">
//               <div className="text-lg mb-2">Annual Subscription</div>
//               <div className="text-4xl font-bold mb-2">${planData.annualPrice}</div>
//               <div className="text-purple-100">
//                 That's just ${planData.monthlyPrice}/month
//               </div>
//             </div>
//           </CardContent>
          
//           <CardFooter className="px-8 pb-8 relative z-10">
//             <div className="w-full space-y-4">
//               <Button
//                 className="w-full h-14 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
//                 onClick={handleSelectPlan}
//               >
//                 <Crown className="mr-2 h-5 w-5" />
//                 Get Started Now
//               </Button>
//               <p className="text-center text-sm text-gray-500">
//                 30-day money-back guarantee • Cancel anytime • Instant activation
//               </p>
//             </div>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
//       <div className="container mx-auto px-4 py-12">
//         {!showPayment ? (
//           <>
//             <div className="text-center mb-8">
//               <motion.h1 
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
//               >
//                 Choose Your <span className="text-gray-800">{cardName}</span>
//               </motion.h1>
//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-xl text-gray-600 max-w-2xl mx-auto"
//               >
//                 One powerful card with all premium features included. No tiers, no confusion - just everything you need.
//               </motion.p>
//             </div>
//             <PlanCard />
//           </>
//         ) : (
//           <PaymentPage />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;