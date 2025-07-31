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


//   const plans = [
//     {
//       title: "core",
//       price: "300",
//       description: "Perfect for starters",
//       icon: <Shield className="w-8 h-8 text-blue-500" />,
//       color: "bg-blue-50",
//       borderColor: "border-blue-200",
//       limit: "$10,000 credit limit",
//       imageKey: "core",
//     },
//     {
//       title: "plus",
//       price: "500",
//       description: "Most popular choice",
//       icon: <Zap className="w-8 h-8 text-purple-500" />,
//       color: "bg-purple-50",
//       borderColor: "border-purple-200",
//       popular: true,
//       limit: "$20,000 credit limit",
//       imageKey: "plus",
//     },
//     {
//       title: "elite",
//       price: "1000",
//       description: "For large teams",
//       icon: <Crown className="w-8 h-8 text-amber-500" />,
//       color: "bg-amber-50",
//       borderColor: "border-amber-200",
//       limit: "$30,000 credit limit",
//       imageKey: "elite",
//     },
//   ];

//   const handleSelectPlan = (plan) => {
//     setSelectedPlan(plan);
//      const selectedImage = imageData?.[plan.imageKey];

//     let planData = {
//       title: plan.title,
//       price: plan.price,
//       period: plan.period,
//       description: plan.description,
//       image: selectedImage,
//       name : cardName
//     }

//     localStorage.setItem("selectedPlan", JSON.stringify(planData));

//     console.log(plan);
//     // navigate(`/apply-card`);
//     // setShowPayment(true);

//     navigate("/CashAppCardLayout", {
//   state: {
//     images: {
//       core:   imageData.core,
//       plus:   imageData.plus,
//       elite:  imageData.elite,
//       cardName,            // ← make sure this is here
//     }
//   }
// });

//   };

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
            {imageData?.[plan.imageKey] && (
              <img
                src={imageData[plan.imageKey]}
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