// // // // // // // // import { useState, useEffect } from 'react';
// // // // // // // // import { User, CreditCard, Home, Activity, Settings, Bell, LogOut, PlusCircle } from 'lucide-react';

// // // // // // // // export default function CreditCardDashboard() {
// // // // // // // //     const [userData, setUserData] = useState({
// // // // // // // //         username: "Sarah Johnson",
// // // // // // // //         email: "sarah.johnson@example.com",
// // // // // // // //         accountNumber: "****-****-****-1234",
// // // // // // // //         balance: "$5,432.18",
// // // // // // // //         availableCredit: "$10,567.82",
// // // // // // // //         lastPayment: "$750.00",
// // // // // // // //         paymentDue: "$350.00",
// // // // // // // //         dueDate: "May 15, 2025",
// // // // // // // //         recentTransactions: [
// // // // // // // //             { id: 1, merchant: "Amazon", date: "Apr 20, 2025", amount: "$126.35", category: "Shopping" },
// // // // // // // //             { id: 2, merchant: "Starbucks", date: "Apr 19, 2025", amount: "$8.45", category: "Food & Drink" },
// // // // // // // //             { id: 3, merchant: "Uber", date: "Apr 19, 2025", amount: "$24.50", category: "Transportation" },
// // // // // // // //             { id: 4, merchant: "Netflix", date: "Apr 18, 2025", amount: "$15.99", category: "Entertainment" },
// // // // // // // //             { id: 5, merchant: "Grocery Store", date: "Apr 17, 2025", amount: "$87.32", category: "Groceries" }
// // // // // // // //         ]
// // // // // // // //     });

// // // // // // // //     const [showCreditScoreChecker, setShowCreditScoreChecker] = useState(false);
// // // // // // // // const [cardNumberCheck, setCardNumberCheck] = useState("");
// // // // // // // // const [cardNameCheck, setCardNameCheck] = useState("");
// // // // // // // // const [expiryCheck, setExpiryCheck] = useState("");
// // // // // // // // const [cvvCheck, setCvvCheck] = useState("");
// // // // // // // // const [creditScore, setCreditScore] = useState(null);
// // // // // // // // const [loadingScore, setLoadingScore] = useState(false);
// // // // // // // // const [scoreErrors, setScoreErrors] = useState({});
// // // // // // // // const [flipCard, setFlipCard] = useState(false);

// // // // // // // //     const [activeSection, setActiveSection] = useState('dashboard');
// // // // // // // //     const [cardSettings, setCardSettings] = useState({
// // // // // // // //         cardName: "Nexus Elite",
// // // // // // // //         creditLimit: 12000,
// // // // // // // //         monthlySpendingLimit: 5000,
// // // // // // // //         onlineTransactions: true,
// // // // // // // //         internationalTransactions: true,
// // // // // // // //         contactlessPayments: true,
// // // // // // // //         atmWithdrawals: true,
// // // // // // // //         isCardFrozen: false,
// // // // // // // //         notificationsAmount: 50
// // // // // // // //     });

// // // // // // // //     // Add this handler to your component
// // // // // // // //     const handleNavClick = (section) => {
// // // // // // // //         setActiveSection(section);
// // // // // // // //     };

// // // // // // // //     // Add this function to handle card setting changes
// // // // // // // //     const handleCardSettingChange = (setting, value) => {
// // // // // // // //         setCardSettings(prev => ({
// // // // // // // //             ...prev,
// // // // // // // //             [setting]: value
// // // // // // // //         }));
// // // // // // // //     };

// // // // // // // //     const [selectedPlan, setSelectedPlan] = useState(null);

// // // // // // // //     useEffect(() => {
// // // // // // // //         // Check local storage for selectedPlan
// // // // // // // //         const storedPlan = localStorage.getItem('selectedPlan');
// // // // // // // //         if (storedPlan) {
// // // // // // // //             setSelectedPlan(JSON.parse(storedPlan));
// // // // // // // //         }
// // // // // // // //     }, []);

// // // // // // // //     const handlePurchaseCard = () => {
// // // // // // // //         // Simulate purchasing a card and storing in localStorage
// // // // // // // //         const newPlan = {
// // // // // // // //             description: "For large teams",
// // // // // // // //             price: "1000",
// // // // // // // //             title: "elite"
// // // // // // // //         };
// // // // // // // //         localStorage.setItem('selectedPlan', JSON.stringify(newPlan));
// // // // // // // //         setSelectedPlan(newPlan);
// // // // // // // //     };

// // // // // // // //     const handleRemoveCard = () => {
// // // // // // // //         // For demo purposes - remove the card
// // // // // // // //         localStorage.removeItem('selectedPlan');
// // // // // // // //         setSelectedPlan(null);
// // // // // // // //     };

// // // // // // // //     // Add these functions to your component

// // // // // // // // // Function to format card number with spaces
// // // // // // // // const formatCardNumber = (value) => {
// // // // // // // //     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
// // // // // // // //     const matches = v.match(/\d{4,16}/g);
// // // // // // // //     const match = (matches && matches[0]) || "";
// // // // // // // //     const parts = [];
// // // // // // // //     for (let i = 0; i < match.length; i += 4) {
// // // // // // // //       parts.push(match.substring(i, i + 4));
// // // // // // // //     }
// // // // // // // //     return parts.length ? parts.join(" ") : value;
// // // // // // // //   };

// // // // // // // //   const handleCardNumberChangeCheck = (e) => {
// // // // // // // //     const formattedValue = formatCardNumber(e.target.value);
// // // // // // // //     setCardNumberCheck(formattedValue);
// // // // // // // //   };

// // // // // // // //   const handleExpiryChangeCheck = (e) => {
// // // // // // // //     let { value } = e.target;
// // // // // // // //     value = value.replace(/[^\d]/g, "");
// // // // // // // //     if (value.length <= 2) {
// // // // // // // //       setExpiryCheck(value);
// // // // // // // //     } else if (value.length > 2) {
// // // // // // // //       setExpiryCheck(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const validateScoreFields = () => {
// // // // // // // //     const newErrors = {};
// // // // // // // //     if (!cardNameCheck.trim()) newErrors.cardName = "Name on card is required";
// // // // // // // //     if (!/^\d{16}$/.test(cardNumberCheck.replace(/\s/g, ""))) newErrors.cardNumber = "Card number must be 16 digits";
// // // // // // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryCheck)) newErrors.expiry = "Expiry must be in MM/YY format";
// // // // // // // //     if (!/^\d{3}$/.test(cvvCheck)) newErrors.cvv = "CVV must be 3 digits";
// // // // // // // //     setScoreErrors(newErrors);
// // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // //   };

// // // // // // // //   const handleCheckScore = (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     if (!validateScoreFields()) return;

// // // // // // // //     setLoadingScore(true);
// // // // // // // //     setCreditScore(null);

// // // // // // // //     const userKey = `${cardNameCheck.trim().toLowerCase()}|${cardNumberCheck.replace(/\s/g, "")}|${expiryCheck}`;
// // // // // // // //     const storedScore = localStorage.getItem(userKey);

// // // // // // // //     if (storedScore) {
// // // // // // // //       setTimeout(() => {
// // // // // // // //         setCreditScore(parseInt(storedScore));
// // // // // // // //         setLoadingScore(false);
// // // // // // // //       }, 1000);
// // // // // // // //     } else {
// // // // // // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// // // // // // // //       localStorage.setItem(userKey, randomScore);
// // // // // // // //       setTimeout(() => {
// // // // // // // //         setCreditScore(randomScore);
// // // // // // // //         setLoadingScore(false);
// // // // // // // //       }, 1000);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const getScoreColor = () => {
// // // // // // // //     if (!creditScore) return "text-gray-700";
// // // // // // // //     if (creditScore < 580) return "text-red-600";
// // // // // // // //     if (creditScore < 670) return "text-yellow-600";
// // // // // // // //     if (creditScore < 740) return "text-blue-600";
// // // // // // // //     return "text-green-600";
// // // // // // // //   };

// // // // // // // //   const getScoreCategory = () => {
// // // // // // // //     if (!creditScore) return "";
// // // // // // // //     if (creditScore < 580) return "Poor";
// // // // // // // //     if (creditScore < 670) return "Fair";
// // // // // // // //     if (creditScore < 740) return "Good";
// // // // // // // //     if (creditScore < 800) return "Very Good";
// // // // // // // //     return "Excellent";
// // // // // // // //   };

// // // // // // // //   const getScoreWidth = () => {
// // // // // // // //     if (!creditScore) return "0%";
// // // // // // // //     return `${((creditScore - 300) / (850 - 300)) * 100}%`;
// // // // // // // //   };

// // // // // // // //     return (
// // // // // // // //         <div className="flex h-screen bg-gray-100">
// // // // // // // //             {/* Sidebar */}
// // // // // // // //             <div className="w-64 bg-gradient-to-b from-[#550665] to-[#27012F] text-white">
// // // // // // // //                 <div className="p-6">
// // // // // // // //                     <h1 className="text-2xl font-bold">NexusCard</h1>
// // // // // // // //                 </div>
// // // // // // // //                 <nav className="mt-6">
// // // // // // // //                     <div className="px-4">
// // // // // // // //                         <div
// // // // // // // //                             className={`flex items-center py-3 px-4 ${activeSection === 'dashboard' ? 'bg-[#df57fa]' : 'hover:bg-[#df57fa]'} rounded-lg cursor-pointer`}
// // // // // // // //                             onClick={() => handleNavClick('dashboard')}
// // // // // // // //                         >
// // // // // // // //                             <Home size={20} />
// // // // // // // //                             <span className="ml-4">Dashboard</span>
// // // // // // // //                         </div>
// // // // // // // //                         <div
// // // // // // // //                             className={`flex items-center py-3 px-4 mt-2 ${activeSection === 'mycards' ? 'bg-[#df57fa]' : 'hover:bg-[#df57fa]'} rounded-lg cursor-pointer`}
// // // // // // // //                             onClick={() => handleNavClick('mycards')}
// // // // // // // //                         >
// // // // // // // //                             <CreditCard size={20} />
// // // // // // // //                             <span className="ml-4">My Cards</span>
// // // // // // // //                         </div>
// // // // // // // //                         <div
// // // // // // // //                             className={`flex items-center py-3 px-4 mt-2 ${activeSection === 'transactions' ? 'bg-[#df57fa]' : 'hover:bg-[#df57fa]'} rounded-lg cursor-pointer`}
// // // // // // // //                             onClick={() => handleNavClick('transactions')}
// // // // // // // //                         >
// // // // // // // //                             <Activity size={20} />
// // // // // // // //                             <span className="ml-4">Transactions</span>
// // // // // // // //                         </div>
// // // // // // // //                         <div
// // // // // // // //                             className={`flex items-center py-3 px-4 mt-2 ${activeSection === 'creditscore' ? 'bg-[#df57fa]' : 'hover:bg-[#df57fa]'} rounded-lg cursor-pointer`}
// // // // // // // //                             onClick={() => handleNavClick('creditscore')}
// // // // // // // //                         >
// // // // // // // //                               <Activity size={20} />
// // // // // // // //                               <span className="ml-4">Check Credit Score</span>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="flex items-center py-3 px-4 mt-2 hover:bg-[#df57fa] rounded-lg cursor-pointer">
// // // // // // // //                             <LogOut size={20} />
// // // // // // // //                             <span className="ml-4">Log Out</span>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </nav>
// // // // // // // //             </div>

// // // // // // // //             {/* Main Content */}
// // // // // // // //             <div className="flex-1 overflow-y-auto">
// // // // // // // //                 {/* Header */}
// // // // // // // //                 {/* <header className="bg-white shadow">
// // // // // // // //           <div className="px-6 py-4 flex justify-between items-center">
// // // // // // // //             <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
// // // // // // // //             <div className="flex items-center space-x-4">
// // // // // // // //               <button className="relative p-1">
// // // // // // // //                 <Bell size={24} />
// // // // // // // //                 <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
// // // // // // // //               </button>
// // // // // // // //               <div className="flex items-center">
// // // // // // // //                 <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
// // // // // // // //                   {userData.username.charAt(0)}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </header> */}

// // // // // // // //                 {/* User Info and Card Section */}
// // // // // // // //                 {activeSection === 'dashboard' ? (
// // // // // // // //                     <div className="p-6">
// // // // // // // //                     <div className="bg-white rounded-lg shadow p-6 mb-6">
// // // // // // // //                         <div className="flex justify-between items-start">
// // // // // // // //                             <div>
// // // // // // // //                                 <div className="flex items-center mb-1">
// // // // // // // //                                     <User size={20} className="text-indigo-600" />
// // // // // // // //                                     <h3 className="ml-2 text-lg font-medium">{userData.username}</h3>
// // // // // // // //                                 </div>
// // // // // // // //                                 <p className="text-gray-600 ml-7">{userData.email}</p>
// // // // // // // //                             </div>
// // // // // // // //                             <div className="text-right">
// // // // // // // //                                 <p className="text-sm text-gray-600">Account Number</p>
// // // // // // // //                                 <p className="font-medium">{userData.accountNumber}</p>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Card Section */}
// // // // // // // //                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // // // // // //                         {/* Card Display */}
// // // // // // // //                         <div className="lg:col-span-1">
// // // // // // // //                             <div className="bg-white rounded-lg shadow p-6">
// // // // // // // //                                 <h3 className="text-lg font-medium mb-4">Your Card</h3>

// // // // // // // //                                 {selectedPlan ? (
// // // // // // // //                                     <div className="space-y-4">
// // // // // // // //                                         {/* Credit Card Display */}
// // // // // // // //                                         <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-lg">
// // // // // // // //                                             <div className="absolute top-4 right-4">
// // // // // // // //                                                 <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                                                     <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.2" />
// // // // // // // //                                                     <circle cx="30" cy="30" r="15" fill="white" fillOpacity="0.4" />
// // // // // // // //                                                 </svg>
// // // // // // // //                                             </div>
// // // // // // // //                                             <div className="flex flex-col justify-between h-full">
// // // // // // // //                                                 <div>
// // // // // // // //                                                     <p className="text-sm opacity-80">Card Number</p>
// // // // // // // //                                                     <p className="font-medium tracking-widest">{userData.accountNumber}</p>
// // // // // // // //                                                 </div>
// // // // // // // //                                                 <div className="flex justify-between items-end">
// // // // // // // //                                                     <div>
// // // // // // // //                                                         <p className="text-xs opacity-80">CARDHOLDER NAME</p>
// // // // // // // //                                                         <p>{userData.username}</p>
// // // // // // // //                                                     </div>
// // // // // // // //                                                     <div>
// // // // // // // //                                                         <p className="text-xs opacity-80">VALID THRU</p>
// // // // // // // //                                                         <p>04/28</p>
// // // // // // // //                                                     </div>
// // // // // // // //                                                 </div>
// // // // // // // //                                             </div>
// // // // // // // //                                         </div>

// // // // // // // //                                         {/* Plan Details */}
// // // // // // // //                                         <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                             <div className="flex justify-between items-center mb-2">
// // // // // // // //                                                 <h4 className="font-medium capitalize">{selectedPlan.title} Plan</h4>
// // // // // // // //                                                 <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Active</span>
// // // // // // // //                                             </div>
// // // // // // // //                                             <p className="text-gray-600 text-sm mb-2">{selectedPlan.description}</p>
// // // // // // // //                                             <p className="text-lg font-semibold">${selectedPlan.price}<span className="text-sm text-gray-500 font-normal">/year</span></p>
// // // // // // // //                                             <button
// // // // // // // //                                                 onClick={handleRemoveCard}
// // // // // // // //                                                 className="mt-3 text-sm text-red-600 hover:text-red-800"
// // // // // // // //                                             >
// // // // // // // //                                                 Remove Card
// // // // // // // //                                             </button>
// // // // // // // //                                         </div>
// // // // // // // //                                     </div>
// // // // // // // //                                 ) : (
// // // // // // // //                                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
// // // // // // // //                                         <p className="text-gray-500 mb-4 text-center">No active credit card</p>
// // // // // // // //                                         <button
// // // // // // // //                                             onClick={handlePurchaseCard}
// // // // // // // //                                             className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // // // //                                         >
// // // // // // // //                                             <PlusCircle size={18} className="mr-2" />
// // // // // // // //                                             Purchase New Card
// // // // // // // //                                         </button>
// // // // // // // //                                     </div>
// // // // // // // //                                 )}
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Account Summary */}
// // // // // // // //                         <div className="lg:col-span-2">
// // // // // // // //                             <div className="bg-white rounded-lg shadow p-6">
// // // // // // // //                                 <h3 className="text-lg font-medium mb-4">Account Summary</h3>
// // // // // // // //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //                                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                         <p className="text-sm text-gray-600">Current Balance</p>
// // // // // // // //                                         <p className="text-2xl font-semibold text-indigo-600">{userData.balance}</p>
// // // // // // // //                                     </div>
// // // // // // // //                                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                         <p className="text-sm text-gray-600">Available Credit</p>
// // // // // // // //                                         <p className="text-2xl font-semibold text-green-600">{userData.availableCredit}</p>
// // // // // // // //                                     </div>
// // // // // // // //                                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                         <p className="text-sm text-gray-600">Last Payment</p>
// // // // // // // //                                         <p className="text-xl font-medium">{userData.lastPayment}</p>
// // // // // // // //                                         <p className="text-xs text-gray-500">Apr 10, 2025</p>
// // // // // // // //                                     </div>
// // // // // // // //                                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                         <p className="text-sm text-gray-600">Payment Due</p>
// // // // // // // //                                         <p className="text-xl font-medium">{userData.paymentDue}</p>
// // // // // // // //                                         <p className="text-xs text-gray-500">Due by {userData.dueDate}</p>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Recent Transactions */}
// // // // // // // //                     <div className="mt-6">
// // // // // // // //                         <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // // //                             <div className="p-6 pb-4">
// // // // // // // //                                 <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // // // //                             </div>
// // // // // // // //                             <div className="overflow-x-auto">
// // // // // // // //                                 <table className="w-full">
// // // // // // // //                                     <thead className="bg-gray-50">
// // // // // // // //                                         <tr>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
// // // // // // // //                                         </tr>
// // // // // // // //                                     </thead>
// // // // // // // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //                                         {userData.recentTransactions.map((transaction) => (
// // // // // // // //                                             <tr key={transaction.id}>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <div className="text-sm text-gray-500">{transaction.date}</div>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // // // //                                                         {transaction.category}
// // // // // // // //                                                     </span>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // // // //                                                     {transaction.amount}
// // // // // // // //                                                 </td>
// // // // // // // //                                             </tr>
// // // // // // // //                                         ))}
// // // // // // // //                                     </tbody>
// // // // // // // //                                 </table>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>
// // // // // // // //                 ) : activeSection === 'mycards' ? (
// // // // // // // //                     <div className="p-6">
// // // // // // // //                       <div className="mb-6">
// // // // // // // //                         <h2 className="text-2xl font-semibold text-gray-800">Card Management</h2>
// // // // // // // //                         <p className="text-gray-600">Manage your credit card settings and preferences</p>
// // // // // // // //                       </div>

// // // // // // // //                       {/* Card Display */}
// // // // // // // //                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
// // // // // // // //                         <div className="lg:col-span-1">
// // // // // // // //                           <div className="bg-white rounded-lg shadow p-6">
// // // // // // // //                             <h3 className="text-lg font-medium mb-4">Your Card</h3>

// // // // // // // //                             {selectedPlan ? (
// // // // // // // //                               <div className="space-y-4">
// // // // // // // //                                 <div className={`relative h-56 rounded-xl overflow-hidden ${cardSettings.isCardFrozen ? 'bg-gray-400' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} p-6 text-white shadow-lg transition-all duration-300`}>
// // // // // // // //                                   {cardSettings.isCardFrozen && (
// // // // // // // //                                     <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
// // // // // // // //                                       <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md text-gray-800 font-bold transform rotate-12">
// // // // // // // //                                         FROZEN
// // // // // // // //                                       </div>
// // // // // // // //                                     </div>
// // // // // // // //                                   )}
// // // // // // // //                                   <div className="absolute top-4 right-4">
// // // // // // // //                                     <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // // // //                                       <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.2"/>
// // // // // // // //                                       <circle cx="30" cy="30" r="15" fill="white" fillOpacity="0.4"/>
// // // // // // // //                                     </svg>
// // // // // // // //                                   </div>
// // // // // // // //                                   <div className="flex flex-col justify-between h-full">
// // // // // // // //                                     <div>
// // // // // // // //                                       <p className="text-sm opacity-80">Card Name</p>
// // // // // // // //                                       <p className="font-medium">{cardSettings.cardName}</p>
// // // // // // // //                                       <p className="text-sm opacity-80 mt-2">Card Number</p>
// // // // // // // //                                       <p className="font-medium tracking-widest">{userData.accountNumber}</p>
// // // // // // // //                                     </div>
// // // // // // // //                                     <div className="flex justify-between items-end">
// // // // // // // //                                       <div>
// // // // // // // //                                         <p className="text-xs opacity-80">CARDHOLDER NAME</p>
// // // // // // // //                                         <p>{userData.username}</p>
// // // // // // // //                                       </div>
// // // // // // // //                                       <div>
// // // // // // // //                                         <p className="text-xs opacity-80">VALID THRU</p>
// // // // // // // //                                         <p>04/28</p>
// // // // // // // //                                       </div>
// // // // // // // //                                     </div>
// // // // // // // //                                   </div>
// // // // // // // //                                 </div>

// // // // // // // //                                 <div className="flex space-x-2">
// // // // // // // //                                   <button
// // // // // // // //                                     onClick={() => handleCardSettingChange('isCardFrozen', !cardSettings.isCardFrozen)}
// // // // // // // //                                     className={`flex-1 py-2 px-4 rounded-lg text-center ${cardSettings.isCardFrozen
// // // // // // // //                                       ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
// // // // // // // //                                       : 'bg-red-600 hover:bg-red-700 text-white'}`}
// // // // // // // //                                   >
// // // // // // // //                                     {cardSettings.isCardFrozen ? 'Unfreeze Card' : 'Freeze Card'}
// // // // // // // //                                   </button>
// // // // // // // //                                   <button className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center">
// // // // // // // //                                     Report Lost
// // // // // // // //                                   </button>
// // // // // // // //                                 </div>
// // // // // // // //                               </div>
// // // // // // // //                             ) : (
// // // // // // // //                               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-56">
// // // // // // // //                                 <p className="text-gray-500 mb-4 text-center">No active credit card</p>
// // // // // // // //                                 <button
// // // // // // // //                                   onClick={handlePurchaseCard}
// // // // // // // //                                   className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // // // //                                 >
// // // // // // // //                                   <PlusCircle size={18} className="mr-2" />
// // // // // // // //                                   Purchase New Card
// // // // // // // //                                 </button>
// // // // // // // //                               </div>
// // // // // // // //                             )}
// // // // // // // //                           </div>
// // // // // // // //                         </div>

// // // // // // // //                         {/* Card Information */}
// // // // // // // //                         <div className="lg:col-span-2">
// // // // // // // //                           <div className="bg-white rounded-lg shadow p-6">
// // // // // // // //                             <h3 className="text-lg font-medium mb-4">Card Information</h3>

// // // // // // // //                             {selectedPlan ? (
// // // // // // // //                               <div className="space-y-6">
// // // // // // // //                                 {/* Card Name */}
// // // // // // // //                                 <div>
// // // // // // // //                                   <label className="block text-sm font-medium text-gray-700 mb-2">Card Name</label>
// // // // // // // //                                   <div className="relative">
// // // // // // // //                                     <input
// // // // // // // //                                       type="text"
// // // // // // // //                                       value={cardSettings.cardName}
// // // // // // // //                                       onChange={(e) => handleCardSettingChange('cardName', e.target.value)}
// // // // // // // //                                       className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // // //                                       placeholder="Card Name"
// // // // // // // //                                     />
// // // // // // // //                                   </div>
// // // // // // // //                                 </div>

// // // // // // // //                                 {/* Credit Limit Slider */}
// // // // // // // //                                 <div>
// // // // // // // //                                   <div className="flex justify-between items-center mb-2">
// // // // // // // //                                     <label className="block text-sm font-medium text-gray-700">Credit Limit</label>
// // // // // // // //                                     <span className="text-lg font-semibold text-indigo-600">${cardSettings.creditLimit.toLocaleString()}</span>
// // // // // // // //                                   </div>
// // // // // // // //                                   <input
// // // // // // // //                                     type="range"
// // // // // // // //                                     min="1000"
// // // // // // // //                                     max="25000"
// // // // // // // //                                     step="500"
// // // // // // // //                                     value={cardSettings.creditLimit}
// // // // // // // //                                     onChange={(e) => handleCardSettingChange('creditLimit', parseInt(e.target.value))}
// // // // // // // //                                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // // //                                   />
// // // // // // // //                                   <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // // //                                     <span>$1,000</span>
// // // // // // // //                                     <span>$25,000</span>
// // // // // // // //                                   </div>
// // // // // // // //                                 </div>

// // // // // // // //                                 {/* Monthly Spending Limit */}
// // // // // // // //                                 <div>
// // // // // // // //                                   <div className="flex justify-between items-center mb-2">
// // // // // // // //                                     <label className="block text-sm font-medium text-gray-700">Monthly Spending Limit</label>
// // // // // // // //                                     <span className="text-lg font-semibold text-indigo-600">${cardSettings.monthlySpendingLimit.toLocaleString()}</span>
// // // // // // // //                                   </div>
// // // // // // // //                                   <input
// // // // // // // //                                     type="range"
// // // // // // // //                                     min="500"
// // // // // // // //                                     max="10000"
// // // // // // // //                                     step="100"
// // // // // // // //                                     value={cardSettings.monthlySpendingLimit}
// // // // // // // //                                     onChange={(e) => handleCardSettingChange('monthlySpendingLimit', parseInt(e.target.value))}
// // // // // // // //                                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // // //                                   />
// // // // // // // //                                   <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // // //                                     <span>$500</span>
// // // // // // // //                                     <span>$10,000</span>
// // // // // // // //                                   </div>
// // // // // // // //                                 </div>

// // // // // // // //                                 {/* Notification Threshold */}
// // // // // // // //                                 <div>
// // // // // // // //                                   <div className="flex justify-between items-center mb-2">
// // // // // // // //                                     <label className="block text-sm font-medium text-gray-700">Transaction Notification Threshold</label>
// // // // // // // //                                     <span className="text-lg font-semibold text-indigo-600">${cardSettings.notificationsAmount}</span>
// // // // // // // //                                   </div>
// // // // // // // //                                   <input
// // // // // // // //                                     type="range"
// // // // // // // //                                     min="0"
// // // // // // // //                                     max="500"
// // // // // // // //                                     step="10"
// // // // // // // //                                     value={cardSettings.notificationsAmount}
// // // // // // // //                                     onChange={(e) => handleCardSettingChange('notificationsAmount', parseInt(e.target.value))}
// // // // // // // //                                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // // //                                   />
// // // // // // // //                                   <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // // //                                     <span>$0 (All transactions)</span>
// // // // // // // //                                     <span>$500+</span>
// // // // // // // //                                   </div>
// // // // // // // //                                 </div>
// // // // // // // //                               </div>
// // // // // // // //                             ) : (
// // // // // // // //                               <div className="text-center p-8 text-gray-500">
// // // // // // // //                                 Please activate a card to view and manage card information
// // // // // // // //                               </div>
// // // // // // // //                             )}
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </div>

// // // // // // // //                       {/* Transaction Settings */}
// // // // // // // //                       {selectedPlan && (
// // // // // // // //                         <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // // // // // // //                           <div className="p-6">
// // // // // // // //                             <h3 className="text-lg font-medium mb-4">Transaction Settings</h3>
// // // // // // // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //                               {/* Toggle Settings */}
// // // // // // // //                               <div className="space-y-4">
// // // // // // // //                                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // // //                                   <div>
// // // // // // // //                                     <h4 className="font-medium">Online Transactions</h4>
// // // // // // // //                                     <p className="text-sm text-gray-600">Allow online and e-commerce payments</p>
// // // // // // // //                                   </div>
// // // // // // // //                                   <label className="relative inline-flex items-center cursor-pointer">
// // // // // // // //                                     <input
// // // // // // // //                                       type="checkbox"
// // // // // // // //                                       checked={cardSettings.onlineTransactions}
// // // // // // // //                                       onChange={(e) => handleCardSettingChange('onlineTransactions', e.target.checked)}
// // // // // // // //                                       className="sr-only peer"
// // // // // // // //                                     />
// // // // // // // //                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // // //                                   </label>
// // // // // // // //                                 </div>

// // // // // // // //                                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // // //                                   <div>
// // // // // // // //                                     <h4 className="font-medium">International Transactions</h4>
// // // // // // // //                                     <p className="text-sm text-gray-600">Allow payments outside your country</p>
// // // // // // // //                                   </div>
// // // // // // // //                                   <label className="relative inline-flex items-center cursor-pointer">
// // // // // // // //                                     <input
// // // // // // // //                                       type="checkbox"
// // // // // // // //                                       checked={cardSettings.internationalTransactions}
// // // // // // // //                                       onChange={(e) => handleCardSettingChange('internationalTransactions', e.target.checked)}
// // // // // // // //                                       className="sr-only peer"
// // // // // // // //                                     />
// // // // // // // //                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // // //                                   </label>
// // // // // // // //                                 </div>
// // // // // // // //                               </div>

// // // // // // // //                               <div className="space-y-4">
// // // // // // // //                                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // // //                                   <div>
// // // // // // // //                                     <h4 className="font-medium">Contactless Payments</h4>
// // // // // // // //                                     <p className="text-sm text-gray-600">Enable tap-to-pay functionality</p>
// // // // // // // //                                   </div>
// // // // // // // //                                   <label className="relative inline-flex items-center cursor-pointer">
// // // // // // // //                                     <input
// // // // // // // //                                       type="checkbox"
// // // // // // // //                                       checked={cardSettings.contactlessPayments}
// // // // // // // //                                       onChange={(e) => handleCardSettingChange('contactlessPayments', e.target.checked)}
// // // // // // // //                                       className="sr-only peer"
// // // // // // // //                                     />
// // // // // // // //                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // // //                                   </label>
// // // // // // // //                                 </div>

// // // // // // // //                                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // // //                                   <div>
// // // // // // // //                                     <h4 className="font-medium">ATM Withdrawals</h4>
// // // // // // // //                                     <p className="text-sm text-gray-600">Allow cash withdrawals at ATMs</p>
// // // // // // // //                                   </div>
// // // // // // // //                                   <label className="relative inline-flex items-center cursor-pointer">
// // // // // // // //                                     <input
// // // // // // // //                                       type="checkbox"
// // // // // // // //                                       checked={cardSettings.atmWithdrawals}
// // // // // // // //                                       onChange={(e) => handleCardSettingChange('atmWithdrawals', e.target.checked)}
// // // // // // // //                                       className="sr-only peer"
// // // // // // // //                                     />
// // // // // // // //                                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // // //                                   </label>
// // // // // // // //                                 </div>
// // // // // // // //                               </div>
// // // // // // // //                             </div>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       )}

// // // // // // // //                       {/* Security Settings */}
// // // // // // // //                       {selectedPlan && (
// // // // // // // //                         <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // // //                           <div className="p-6">
// // // // // // // //                             <h3 className="text-lg font-medium mb-4">Security Settings</h3>
// // // // // // // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //                               <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                 <h4 className="font-medium mb-2">Change PIN</h4>
// // // // // // // //                                 <p className="text-sm text-gray-600 mb-4">For security reasons, you'll need to verify your identity</p>
// // // // // // // //                                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // // // //                                   Request PIN Change
// // // // // // // //                                 </button>
// // // // // // // //                               </div>

// // // // // // // //                               <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // // //                                 <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
// // // // // // // //                                 <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
// // // // // // // //                                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // // // //                                   Setup 2FA
// // // // // // // //                                 </button>
// // // // // // // //                               </div>
// // // // // // // //                             </div>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   ) : activeSection === 'transactions' ? (
// // // // // // // //                     <div className="p-6">
// // // // // // // //                       <div className="mb-6">
// // // // // // // //                         <h2 className="text-2xl font-semibold text-gray-800">Transaction History</h2>
// // // // // // // //                         <p className="text-gray-600">View and manage your recent transactions</p>
// // // // // // // //                       </div>

// // // // // // // //                       {/* Transaction content would go here */}
// // // // // // // //                       <div className="mt-6">
// // // // // // // //                         <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // // //                             <div className="p-6 pb-4">
// // // // // // // //                                 <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // // // //                             </div>
// // // // // // // //                             <div className="overflow-x-auto">
// // // // // // // //                                 <table className="w-full">
// // // // // // // //                                     <thead className="bg-gray-50">
// // // // // // // //                                         <tr>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
// // // // // // // //                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
// // // // // // // //                                         </tr>
// // // // // // // //                                     </thead>
// // // // // // // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //                                         {userData.recentTransactions.map((transaction) => (
// // // // // // // //                                             <tr key={transaction.id}>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <div className="text-sm text-gray-500">{transaction.date}</div>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // // // // // //                                                     <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // // // //                                                         {transaction.category}
// // // // // // // //                                                     </span>
// // // // // // // //                                                 </td>
// // // // // // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // // // //                                                     {transaction.amount}
// // // // // // // //                                                 </td>
// // // // // // // //                                             </tr>
// // // // // // // //                                         ))}
// // // // // // // //                                     </tbody>
// // // // // // // //                                 </table>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                     </div>
// // // // // // // //                   ) : (
// // // // // // // // <div className="bg-gray-100 flex items-center justify-center p-4 h-screen">
// // // // // // // //     <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-screen overflow-y-auto">
// // // // // // // //       <div className="p-6">
// // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // //           <h2 className="text-2xl font-bold text-gray-800">Check Your Credit Score</h2>
// // // // // // // //           <button
// // // // // // // //             onClick={() => setShowCreditScoreChecker(false)}
// // // // // // // //             className="text-gray-500 hover:text-gray-700"
// // // // // // // //           >
// // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // // //             </svg>
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         {creditScore === null ? (
// // // // // // // //           <>
// // // // // // // //             <div className={`credit-card-container relative h-56 mb-8 w-full`}>
// // // // // // // //               {/* Front of card */}
// // // // // // // //               <div className={`rounded-xl p-6 absolute w-full h-full ${flipCard ? "hidden" : "block"} bg-gradient-to-br from-indigo-900 to-indigo-700 shadow-lg`}>
// // // // // // // //                 <div className="flex justify-between items-start">
// // // // // // // //                   <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
// // // // // // // //                   <button onClick={() => setFlipCard(true)} className="text-xs underline text-gray-300 hover:text-white">
// // // // // // // //                     Flip for CVV
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="mt-6">
// // // // // // // //                   <p className="text-gray-400 text-xs mb-1">Card Number</p>
// // // // // // // //                   <p className="font-mono text-xl mb-4">{cardNumberCheck || "•••• •••• •••• ••••"}</p>
// // // // // // // //                   <div className="flex justify-between">
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-gray-400 text-xs mb-1">Card Holder</p>
// // // // // // // //                       <p className="font-semibold uppercase">{cardNameCheck || "YOUR NAME"}</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-gray-400 text-xs mb-1">Expires</p>
// // // // // // // //                       <p className="font-mono">{expiryCheck || "MM/YY"}</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Back of card */}
// // // // // // // //               <div className={`rounded-xl absolute w-full h-full ${flipCard ? "block" : "hidden"} bg-gradient-to-br from-indigo-800 to-indigo-600 shadow-lg`}>
// // // // // // // //                 <div className="w-full h-12 bg-gray-900 mt-4"></div>
// // // // // // // //                 <div className="p-6">
// // // // // // // //                   <div className="flex justify-end mb-4">
// // // // // // // //                     <button onClick={() => setFlipCard(false)} className="text-xs underline text-gray-300 hover:text-white">
// // // // // // // //                       Back to front
// // // // // // // //                     </button>
// // // // // // // //                   </div>
// // // // // // // //                   <div className="bg-white h-10 flex items-center">
// // // // // // // //                     <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
// // // // // // // //                       <p className="font-mono text-gray-800">{cvvCheck || "•••"}</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <form onSubmit={handleCheckScore} className="space-y-4">
// // // // // // // //               <div>
// // // // // // // //                 <label className="block text-sm font-medium text-gray-700">Name on Card</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="e.g. John Smith"
// // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // // //                   value={cardNameCheck}
// // // // // // // //                   onChange={(e) => setCardNameCheck(e.target.value)}
// // // // // // // //                 />
// // // // // // // //                 {scoreErrors.cardName && <p className="text-red-500 text-sm mt-1">{scoreErrors.cardName}</p>}
// // // // // // // //               </div>

// // // // // // // //               <div>
// // // // // // // //                 <label className="block text-sm font-medium text-gray-700">Card Number</label>
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="1234 5678 9012 3456"
// // // // // // // //                   className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // // //                   value={cardNumberCheck}
// // // // // // // //                   onChange={handleCardNumberChangeCheck}
// // // // // // // //                   maxLength={19}
// // // // // // // //                 />
// // // // // // // //                 {scoreErrors.cardNumber && <p className="text-red-500 text-sm mt-1">{scoreErrors.cardNumber}</p>}
// // // // // // // //               </div>

// // // // // // // //               <div className="flex space-x-4">
// // // // // // // //                 <div className="flex-1">
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
// // // // // // // //                   <input
// // // // // // // //                     type="text"
// // // // // // // //                     placeholder="MM/YY"
// // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // // //                     value={expiryCheck}
// // // // // // // //                     onChange={handleExpiryChangeCheck}
// // // // // // // //                     maxLength={5}
// // // // // // // //                   />
// // // // // // // //                   {scoreErrors.expiry && <p className="text-red-500 text-sm mt-1">{scoreErrors.expiry}</p>}
// // // // // // // //                 </div>

// // // // // // // //                 <div className="flex-1">
// // // // // // // //                   <label className="block text-sm font-medium text-gray-700">CVV</label>
// // // // // // // //                   <input
// // // // // // // //                     type="password"
// // // // // // // //                     placeholder="123"
// // // // // // // //                     className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // // //                     value={cvvCheck}
// // // // // // // //                     onChange={(e) => setCvvCheck(e.target.value.replace(/\D/g, '').slice(0, 3))}
// // // // // // // //                     maxLength={3}
// // // // // // // //                   />
// // // // // // // //                   {scoreErrors.cvv && <p className="text-red-500 text-sm mt-1">{scoreErrors.cvv}</p>}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <button
// // // // // // // //                 type="submit"
// // // // // // // //                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition-all mt-6"
// // // // // // // //                 disabled={loadingScore}
// // // // // // // //               >
// // // // // // // //                 {loadingScore ? (
// // // // // // // //                   <div className="flex items-center justify-center">
// // // // // // // //                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// // // // // // // //                     Checking...
// // // // // // // //                   </div>
// // // // // // // //                 ) : "Check Credit Score"}
// // // // // // // //               </button>
// // // // // // // //             </form>
// // // // // // // //           </>
// // // // // // // //         ) : (
// // // // // // // //           <div>
// // // // // // // //             <div className="mb-6 text-center">
// // // // // // // //               <h3 className="text-xl font-bold mb-4">Your Credit Score Result</h3>

// // // // // // // //               <div className="flex justify-between text-xs mb-1 px-2">
// // // // // // // //                 <span className="text-red-500">Poor</span>
// // // // // // // //                 <span className="text-yellow-500">Fair</span>
// // // // // // // //                 <span className="text-blue-500">Good</span>
// // // // // // // //                 <span className="text-green-500">Excellent</span>
// // // // // // // //               </div>

// // // // // // // //               <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // // // // // //                 <div
// // // // // // // //                   className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // // // // // //                   style={{ width: getScoreWidth() }}
// // // // // // // //                 ></div>
// // // // // // // //               </div>

// // // // // // // //               <div className="flex justify-between px-2">
// // // // // // // //                 <span className="text-xs text-gray-500">300</span>
// // // // // // // //                 <span className="text-xs text-gray-500">850</span>
// // // // // // // //               </div>

// // // // // // // //               <div className="mt-8">
// // // // // // // //                 <p className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>
// // // // // // // //                   {creditScore}
// // // // // // // //                 </p>
// // // // // // // //                 <p className="text-lg font-medium text-gray-700">
// // // // // // // //                   {getScoreCategory()} Credit Score
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <div className="bg-gray-50 p-4 rounded-lg mb-6">
// // // // // // // //               <h4 className="font-medium mb-2">What this means</h4>
// // // // // // // //               <p className="text-gray-600 text-sm">
// // // // // // // //                 {creditScore < 670 ?
// // // // // // // //                   "You may want to consider improving your credit score. Focus on paying bills on time, reducing debt, and limiting new credit applications." :
// // // // // // // //                   "Congratulations! Your credit score is strong. This gives you access to better interest rates and credit offers."
// // // // // // // //                 }
// // // // // // // //               </p>
// // // // // // // //             </div>

// // // // // // // //             <div className="flex space-x-4">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => {
// // // // // // // //                   setCardNumberCheck("");
// // // // // // // //                   setCardNameCheck("");
// // // // // // // //                   setExpiryCheck("");
// // // // // // // //                   setCvvCheck("");
// // // // // // // //                   setCreditScore(null);
// // // // // // // //                   setScoreErrors({});
// // // // // // // //                 }}
// // // // // // // //                 className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center font-medium"
// // // // // // // //               >
// // // // // // // //                 Check Another Card
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setShowCreditScoreChecker(false)}
// // // // // // // //                 className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-center font-medium"
// // // // // // // //               >
// // // // // // // //                 Close
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   </div>
// // // // // // // //                   )}
// // // // // // // //             </div>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // import { useState, useEffect } from "react"
// // // // // // // import { User, CreditCard, Home, Activity, LogOut, PlusCircle } from "lucide-react"

// // // // // // // export default function CreditCardDashboard() {
// // // // // // //   const [userData, setUserData] = useState({
// // // // // // //     username: "Sarah Johnson",
// // // // // // //     email: "sarah.johnson@example.com",
// // // // // // //     accountNumber: "****-****-****-1234",
// // // // // // //     balance: "$5,432.18",
// // // // // // //     availableCredit: "$10,567.82",
// // // // // // //     lastPayment: "$750.00",
// // // // // // //     paymentDue: "$350.00",
// // // // // // //     dueDate: "May 15, 2025",
// // // // // // //     recentTransactions: [
// // // // // // //       { id: 1, merchant: "Amazon", date: "Apr 20, 2025", amount: "$126.35", category: "Shopping" },
// // // // // // //       { id: 2, merchant: "Starbucks", date: "Apr 19, 2025", amount: "$8.45", category: "Food & Drink" },
// // // // // // //       { id: 3, merchant: "Uber", date: "Apr 19, 2025", amount: "$24.50", category: "Transportation" },
// // // // // // //       { id: 4, merchant: "Netflix", date: "Apr 18, 2025", amount: "$15.99", category: "Entertainment" },
// // // // // // //       { id: 5, merchant: "Grocery Store", date: "Apr 17, 2025", amount: "$87.32", category: "Groceries" },
// // // // // // //     ],
// // // // // // //   })

// // // // // // //   const [showCreditScoreChecker, setShowCreditScoreChecker] = useState(false)
// // // // // // //   const [cardNumberCheck, setCardNumberCheck] = useState("")
// // // // // // //   const [cardNameCheck, setCardNameCheck] = useState("")
// // // // // // //   const [expiryCheck, setExpiryCheck] = useState("")
// // // // // // //   const [cvvCheck, setCvvCheck] = useState("")
// // // // // // //   const [creditScore, setCreditScore] = useState(null)
// // // // // // //   const [loadingScore, setLoadingScore] = useState(false)
// // // // // // //   const [scoreErrors, setScoreErrors] = useState({})
// // // // // // //   const [flipCard, setFlipCard] = useState(false)

// // // // // // //   const [activeSection, setActiveSection] = useState("dashboard")
// // // // // // //   const [cardSettings, setCardSettings] = useState({
// // // // // // //     cardName: "Nexus Elite",
// // // // // // //     creditLimit: 12000,
// // // // // // //     monthlySpendingLimit: 5000,
// // // // // // //     onlineTransactions: true,
// // // // // // //     internationalTransactions: true,
// // // // // // //     contactlessPayments: true,
// // // // // // //     atmWithdrawals: true,
// // // // // // //     isCardFrozen: false,
// // // // // // //     notificationsAmount: 50,
// // // // // // //   })

// // // // // // //   // Add this handler to your component
// // // // // // //   const handleNavClick = (section) => {
// // // // // // //     setActiveSection(section)
// // // // // // //   }

// // // // // // //   // Add this function to handle card setting changes
// // // // // // //   const handleCardSettingChange = (setting, value) => {
// // // // // // //     setCardSettings((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [setting]: value,
// // // // // // //     }))
// // // // // // //   }

// // // // // // //   const [selectedPlan, setSelectedPlan] = useState(null)

// // // // // // //   useEffect(() => {
// // // // // // //     // Check local storage for selectedPlan
// // // // // // //     const storedPlan = localStorage.getItem("selectedPlan")
// // // // // // //     if (storedPlan) {
// // // // // // //       setSelectedPlan(JSON.parse(storedPlan))
// // // // // // //     }
// // // // // // //   }, [])

// // // // // // //   const handlePurchaseCard = () => {
// // // // // // //     // Simulate purchasing a card and storing in localStorage
// // // // // // //     const newPlan = {
// // // // // // //       description: "For large teams",
// // // // // // //       price: "1000",
// // // // // // //       title: "elite",
// // // // // // //     }
// // // // // // //     localStorage.setItem("selectedPlan", JSON.stringify(newPlan))
// // // // // // //     setSelectedPlan(newPlan)
// // // // // // //   }

// // // // // // //   const handleRemoveCard = () => {
// // // // // // //     // For demo purposes - remove the card
// // // // // // //     localStorage.removeItem("selectedPlan")
// // // // // // //     setSelectedPlan(null)
// // // // // // //   }

// // // // // // //   // Add these functions to your component

// // // // // // //   // Function to format card number with spaces
// // // // // // //   const formatCardNumber = (value) => {
// // // // // // //     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
// // // // // // //     const matches = v.match(/\d{4,16}/g)
// // // // // // //     const match = (matches && matches[0]) || ""
// // // // // // //     const parts = []
// // // // // // //     for (let i = 0; i < match.length; i += 4) {
// // // // // // //       parts.push(match.substring(i, i + 4))
// // // // // // //     }
// // // // // // //     return parts.length ? parts.join(" ") : value
// // // // // // //   }

// // // // // // //   const handleCardNumberChangeCheck = (e) => {
// // // // // // //     const formattedValue = formatCardNumber(e.target.value)
// // // // // // //     setCardNumberCheck(formattedValue)
// // // // // // //   }

// // // // // // //   const handleExpiryChangeCheck = (e) => {
// // // // // // //     let { value } = e.target
// // // // // // //     value = value.replace(/[^\d]/g, "")
// // // // // // //     if (value.length <= 2) {
// // // // // // //       setExpiryCheck(value)
// // // // // // //     } else if (value.length > 2) {
// // // // // // //       setExpiryCheck(`${value.slice(0, 2)}/${value.slice(2, 4)}`)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const validateScoreFields = () => {
// // // // // // //     const newErrors = {}
// // // // // // //     if (!cardNameCheck.trim()) newErrors.cardName = "Name on card is required"
// // // // // // //     if (!/^\d{16}$/.test(cardNumberCheck.replace(/\s/g, ""))) newErrors.cardNumber = "Card number must be 16 digits"
// // // // // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryCheck)) newErrors.expiry = "Expiry must be in MM/YY format"
// // // // // // //     if (!/^\d{3}$/.test(cvvCheck)) newErrors.cvv = "CVV must be 3 digits"
// // // // // // //     setScoreErrors(newErrors)
// // // // // // //     return Object.keys(newErrors).length === 0
// // // // // // //   }

// // // // // // //   const handleCheckScore = (e) => {
// // // // // // //     e.preventDefault()

// // // // // // //     if (!validateScoreFields()) return

// // // // // // //     setLoadingScore(true)
// // // // // // //     setCreditScore(null)

// // // // // // //     const userKey = `${cardNameCheck.trim().toLowerCase()}|${cardNumberCheck.replace(/\s/g, "")}|${expiryCheck}`
// // // // // // //     const storedScore = localStorage.getItem(userKey)

// // // // // // //     if (storedScore) {
// // // // // // //       setTimeout(() => {
// // // // // // //         setCreditScore(Number.parseInt(storedScore))
// // // // // // //         setLoadingScore(false)
// // // // // // //       }, 1000)
// // // // // // //     } else {
// // // // // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700
// // // // // // //       localStorage.setItem(userKey, randomScore)
// // // // // // //       setTimeout(() => {
// // // // // // //         setCreditScore(randomScore)
// // // // // // //         setLoadingScore(false)
// // // // // // //       }, 1000)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const getScoreColor = () => {
// // // // // // //     if (!creditScore) return "text-gray-700"
// // // // // // //     if (creditScore < 580) return "text-red-600"
// // // // // // //     if (creditScore < 670) return "text-yellow-600"
// // // // // // //     if (creditScore < 740) return "text-blue-600"
// // // // // // //     return "text-green-600"
// // // // // // //   }

// // // // // // //   const getScoreCategory = () => {
// // // // // // //     if (!creditScore) return ""
// // // // // // //     if (creditScore < 580) return "Poor"
// // // // // // //     if (creditScore < 670) return "Fair"
// // // // // // //     if (creditScore < 740) return "Good"
// // // // // // //     if (creditScore < 800) return "Very Good"
// // // // // // //     return "Excellent"
// // // // // // //   }

// // // // // // //   const getScoreWidth = () => {
// // // // // // //     if (!creditScore) return "0%"
// // // // // // //     return `${((creditScore - 300) / (850 - 300)) * 100}%`
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col md:flex-row h-screen bg-gray-100">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div className="w-full md:w-64 bg-gradient-to-b from-[#550665] to-[#27012F] text-white">
// // // // // // //         <div className="p-6">
// // // // // // //           <h1 className="text-2xl font-bold">NexusCard</h1>
// // // // // // //         </div>
// // // // // // //         <nav className="mt-6">
// // // // // // //           <div className="px-4">
// // // // // // //             <div
// // // // // // //               className={`flex items-center py-3 px-4 ${activeSection === "dashboard" ? "bg-[#df57fa]" : "hover:bg-[#df57fa]"} rounded-lg cursor-pointer`}
// // // // // // //               onClick={() => handleNavClick("dashboard")}
// // // // // // //             >
// // // // // // //               <Home size={20} />
// // // // // // //               <span className="ml-4">Dashboard</span>
// // // // // // //             </div>
// // // // // // //             <div
// // // // // // //               className={`flex items-center py-3 px-4 mt-2 ${activeSection === "mycards" ? "bg-[#df57fa]" : "hover:bg-[#df57fa]"} rounded-lg cursor-pointer`}
// // // // // // //               onClick={() => handleNavClick("mycards")}
// // // // // // //             >
// // // // // // //               <CreditCard size={20} />
// // // // // // //               <span className="ml-4">My Cards</span>
// // // // // // //             </div>
// // // // // // //             <div
// // // // // // //               className={`flex items-center py-3 px-4 mt-2 ${activeSection === "transactions" ? "bg-[#df57fa]" : "hover:bg-[#df57fa]"} rounded-lg cursor-pointer`}
// // // // // // //               onClick={() => handleNavClick("transactions")}
// // // // // // //             >
// // // // // // //               <Activity size={20} />
// // // // // // //               <span className="ml-4">Transactions</span>
// // // // // // //             </div>
// // // // // // //             <div
// // // // // // //               className={`flex items-center py-3 px-4 mt-2 ${activeSection === "creditscore" ? "bg-[#df57fa]" : "hover:bg-[#df57fa]"} rounded-lg cursor-pointer`}
// // // // // // //               onClick={() => handleNavClick("creditscore")}
// // // // // // //             >
// // // // // // //               <Activity size={20} />
// // // // // // //               <span className="ml-4">Check Credit Score</span>
// // // // // // //             </div>

// // // // // // //             <div className="flex items-center py-3 px-4 mt-2 hover:bg-[#df57fa] rounded-lg cursor-pointer">
// // // // // // //               <LogOut size={20} />
// // // // // // //               <span className="ml-4">Log Out</span>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </nav>
// // // // // // //       </div>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen">
// // // // // // //         {/* Header */}
// // // // // // //         {/* <header className="bg-white shadow">
// // // // // // //           <div className="px-6 py-4 flex justify-between items-center">
// // // // // // //             <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
// // // // // // //             <div className="flex items-center space-x-4">
// // // // // // //               <button className="relative p-1">
// // // // // // //                 <Bell size={24} />
// // // // // // //                 <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
// // // // // // //               </button>
// // // // // // //               <div className="flex items-center">
// // // // // // //                 <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
// // // // // // //                   {userData.username.charAt(0)}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </header> */}

// // // // // // //         {/* User Info and Card Section */}
// // // // // // //         {activeSection === "dashboard" ? (
// // // // // // //           <div className="p-6">
// // // // // // //             <div className="bg-white rounded-lg shadow p-6 mb-6">
// // // // // // //               <div className="flex justify-between items-start">
// // // // // // //                 <div>
// // // // // // //                   <div className="flex items-center mb-1">
// // // // // // //                     <User size={20} className="text-indigo-600" />
// // // // // // //                     <h3 className="ml-2 text-lg font-medium">{userData.username}</h3>
// // // // // // //                   </div>
// // // // // // //                   <p className="text-gray-600 ml-7">{userData.email}</p>
// // // // // // //                 </div>
// // // // // // //                 <div className="text-right">
// // // // // // //                   <p className="text-sm text-gray-600">Account Number</p>
// // // // // // //                   <p className="font-medium">{userData.accountNumber}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Card Section */}
// // // // // // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // // //               {/* Card Display */}
// // // // // // //               <div className="lg:col-span-1">
// // // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Your Card</h3>

// // // // // // //                   {selectedPlan ? (
// // // // // // //                     <div className="space-y-4">
// // // // // // //                       {/* Credit Card Display */}
// // // // // // //                       <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-lg">
// // // // // // //                         <div className="absolute top-4 right-4">
// // // // // // //                           <svg
// // // // // // //                             width="60"
// // // // // // //                             height="60"
// // // // // // //                             viewBox="0 0 60 60"
// // // // // // //                             fill="none"
// // // // // // //                             xmlns="http://www.w3.org/2000/svg"
// // // // // // //                           >
// // // // // // //                             <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.2" />
// // // // // // //                             <circle cx="30" cy="30" r="15" fill="white" fillOpacity="0.4" />
// // // // // // //                           </svg>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex flex-col justify-between h-full">
// // // // // // //                           <div>
// // // // // // //                             <p className="text-sm opacity-80">Card Number</p>
// // // // // // //                             <p className="font-medium tracking-widest">{userData.accountNumber}</p>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex justify-between items-end">
// // // // // // //                             <div>
// // // // // // //                               <p className="text-xs opacity-80">CARDHOLDER NAME</p>
// // // // // // //                               <p>{userData.username}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                               <p className="text-xs opacity-80">VALID THRU</p>
// // // // // // //                               <p>04/28</p>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       {/* Plan Details */}
// // // // // // //                       <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // // //                           <h4 className="font-medium capitalize">{selectedPlan.title} Plan</h4>
// // // // // // //                           <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
// // // // // // //                             Active
// // // // // // //                           </span>
// // // // // // //                         </div>
// // // // // // //                         <p className="text-gray-600 text-sm mb-2">{selectedPlan.description}</p>
// // // // // // //                         <p className="text-lg font-semibold">
// // // // // // //                           ${selectedPlan.price}
// // // // // // //                           <span className="text-sm text-gray-500 font-normal">/year</span>
// // // // // // //                         </p>
// // // // // // //                         <button onClick={handleRemoveCard} className="mt-3 text-sm text-red-600 hover:text-red-800">
// // // // // // //                           Remove Card
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
// // // // // // //                       <p className="text-gray-500 mb-4 text-center">No active credit card</p>
// // // // // // //                       <button
// // // // // // //                         onClick={handlePurchaseCard}
// // // // // // //                         className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // // //                       >
// // // // // // //                         <PlusCircle size={18} className="mr-2" />
// // // // // // //                         Purchase New Card
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Account Summary */}
// // // // // // //               <div className="lg:col-span-2">
// // // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Account Summary</h3>
// // // // // // //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <p className="text-sm text-gray-600">Current Balance</p>
// // // // // // //                       <p className="text-2xl font-semibold text-indigo-600">{userData.balance}</p>
// // // // // // //                     </div>
// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <p className="text-sm text-gray-600">Available Credit</p>
// // // // // // //                       <p className="text-2xl font-semibold text-green-600">{userData.availableCredit}</p>
// // // // // // //                     </div>
// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <p className="text-sm text-gray-600">Last Payment</p>
// // // // // // //                       <p className="text-xl font-medium">{userData.lastPayment}</p>
// // // // // // //                       <p className="text-xs text-gray-500">Apr 10, 2025</p>
// // // // // // //                     </div>
// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <p className="text-sm text-gray-600">Payment Due</p>
// // // // // // //                       <p className="text-xl font-medium">{userData.paymentDue}</p>
// // // // // // //                       <p className="text-xs text-gray-500">Due by {userData.dueDate}</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Recent Transactions */}
// // // // // // //             <div className="mt-6">
// // // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // //                 <div className="p-6 pb-4">
// // // // // // //                   <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // // //                 </div>
// // // // // // //                 <div className="overflow-x-auto -mx-4 sm:-mx-0">
// // // // // // //                   <table className="min-w-full divide-y divide-gray-200">
// // // // // // //                     <thead className="bg-gray-50">
// // // // // // //                       <tr>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Merchant
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Date
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Category
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Amount
// // // // // // //                         </th>
// // // // // // //                       </tr>
// // // // // // //                     </thead>
// // // // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // // //                       {userData.recentTransactions.map((transaction) => (
// // // // // // //                         <tr key={transaction.id}>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <div className="text-sm text-gray-500">{transaction.date}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // // //                               {transaction.category}
// // // // // // //                             </span>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.amount}</td>
// // // // // // //                         </tr>
// // // // // // //                       ))}
// // // // // // //                     </tbody>
// // // // // // //                   </table>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ) : activeSection === "mycards" ? (
// // // // // // //           <div className="p-6">
// // // // // // //             <div className="mb-6">
// // // // // // //               <h2 className="text-2xl font-semibold text-gray-800">Card Management</h2>
// // // // // // //               <p className="text-gray-600">Manage your credit card settings and preferences</p>
// // // // // // //             </div>

// // // // // // //             {/* Card Display */}
// // // // // // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
// // // // // // //               <div className="lg:col-span-1">
// // // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Your Card</h3>

// // // // // // //                   {selectedPlan ? (
// // // // // // //                     <div className="space-y-4">
// // // // // // //                       <div
// // // // // // //                         className={`relative h-56 rounded-xl overflow-hidden ${cardSettings.isCardFrozen ? "bg-gray-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"} p-6 text-white shadow-lg transition-all duration-300`}
// // // // // // //                       >
// // // // // // //                         {cardSettings.isCardFrozen && (
// // // // // // //                           <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
// // // // // // //                             <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md text-gray-800 font-bold transform rotate-12">
// // // // // // //                               FROZEN
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         )}
// // // // // // //                         <div className="absolute top-4 right-4">
// // // // // // //                           <svg
// // // // // // //                             width="60"
// // // // // // //                             height="60"
// // // // // // //                             viewBox="0 0 60 60"
// // // // // // //                             fill="none"
// // // // // // //                             xmlns="http://www.w3.org/2000/svg"
// // // // // // //                           >
// // // // // // //                             <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.2" />
// // // // // // //                             <circle cx="30" cy="30" r="15" fill="white" fillOpacity="0.4" />
// // // // // // //                           </svg>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex flex-col justify-between h-full">
// // // // // // //                           <div>
// // // // // // //                             <p className="text-sm opacity-80">Card Name</p>
// // // // // // //                             <p className="font-medium">{cardSettings.cardName}</p>
// // // // // // //                             <p className="text-sm opacity-80 mt-2">Card Number</p>
// // // // // // //                             <p className="font-medium tracking-widest">{userData.accountNumber}</p>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex justify-between items-end">
// // // // // // //                             <div>
// // // // // // //                               <p className="text-xs opacity-80">CARDHOLDER NAME</p>
// // // // // // //                               <p>{userData.username}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                               <p className="text-xs opacity-80">VALID THRU</p>
// // // // // // //                               <p>04/28</p>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       <div className="flex space-x-2">
// // // // // // //                         <button
// // // // // // //                           onClick={() => handleCardSettingChange("isCardFrozen", !cardSettings.isCardFrozen)}
// // // // // // //                           className={`flex-1 py-2 px-4 rounded-lg text-center ${
// // // // // // //                             cardSettings.isCardFrozen
// // // // // // //                               ? "bg-indigo-600 hover:bg-indigo-700 text-white"
// // // // // // //                               : "bg-red-600 hover:bg-red-700 text-white"
// // // // // // //                           }`}
// // // // // // //                         >
// // // // // // //                           {cardSettings.isCardFrozen ? "Unfreeze Card" : "Freeze Card"}
// // // // // // //                         </button>
// // // // // // //                         <button className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center">
// // // // // // //                           Report Lost
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-56">
// // // // // // //                       <p className="text-gray-500 mb-4 text-center">No active credit card</p>
// // // // // // //                       <button
// // // // // // //                         onClick={handlePurchaseCard}
// // // // // // //                         className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // // //                       >
// // // // // // //                         <PlusCircle size={18} className="mr-2" />
// // // // // // //                         Purchase New Card
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Card Information */}
// // // // // // //               <div className="lg:col-span-2">
// // // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Card Information</h3>

// // // // // // //                   {selectedPlan ? (
// // // // // // //                     <div className="space-y-6">
// // // // // // //                       {/* Card Name */}
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-2">Card Name</label>
// // // // // // //                         <div className="relative">
// // // // // // //                           <input
// // // // // // //                             type="text"
// // // // // // //                             value={cardSettings.cardName}
// // // // // // //                             onChange={(e) => handleCardSettingChange("cardName", e.target.value)}
// // // // // // //                             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // //                             placeholder="Card Name"
// // // // // // //                           />
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       {/* Credit Limit Slider */}
// // // // // // //                       <div>
// // // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // // //                           <label className="block text-sm font-medium text-gray-700">Credit Limit</label>
// // // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // // //                             ${cardSettings.creditLimit.toLocaleString()}
// // // // // // //                           </span>
// // // // // // //                         </div>
// // // // // // //                         <input
// // // // // // //                           type="range"
// // // // // // //                           min="1000"
// // // // // // //                           max="25000"
// // // // // // //                           step="500"
// // // // // // //                           value={cardSettings.creditLimit}
// // // // // // //                           onChange={(e) => handleCardSettingChange("creditLimit", Number.parseInt(e.target.value))}
// // // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // //                         />
// // // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // //                           <span>$1,000</span>
// // // // // // //                           <span>$25,000</span>
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       {/* Monthly Spending Limit */}
// // // // // // //                       <div>
// // // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // // //                           <label className="block text-sm font-medium text-gray-700">Monthly Spending Limit</label>
// // // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // // //                             ${cardSettings.monthlySpendingLimit.toLocaleString()}
// // // // // // //                           </span>
// // // // // // //                         </div>
// // // // // // //                         <input
// // // // // // //                           type="range"
// // // // // // //                           min="500"
// // // // // // //                           max="10000"
// // // // // // //                           step="100"
// // // // // // //                           value={cardSettings.monthlySpendingLimit}
// // // // // // //                           onChange={(e) =>
// // // // // // //                             handleCardSettingChange("monthlySpendingLimit", Number.parseInt(e.target.value))
// // // // // // //                           }
// // // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // //                         />
// // // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // //                           <span>$500</span>
// // // // // // //                           <span>$10,000</span>
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       {/* Notification Threshold */}
// // // // // // //                       <div>
// // // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // // //                           <label className="block text-sm font-medium text-gray-700">
// // // // // // //                             Transaction Notification Threshold
// // // // // // //                           </label>
// // // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // // //                             ${cardSettings.notificationsAmount}
// // // // // // //                           </span>
// // // // // // //                         </div>
// // // // // // //                         <input
// // // // // // //                           type="range"
// // // // // // //                           min="0"
// // // // // // //                           max="500"
// // // // // // //                           step="10"
// // // // // // //                           value={cardSettings.notificationsAmount}
// // // // // // //                           onChange={(e) =>
// // // // // // //                             handleCardSettingChange("notificationsAmount", Number.parseInt(e.target.value))
// // // // // // //                           }
// // // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // // //                         />
// // // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // // //                           <span>$0 (All transactions)</span>
// // // // // // //                           <span>$500+</span>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     <div className="text-center p-8 text-gray-500">
// // // // // // //                       Please activate a card to view and manage card information
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Transaction Settings */}
// // // // // // //             {selectedPlan && (
// // // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // // // // // //                 <div className="p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Transaction Settings</h3>
// // // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // // // // // //                     {/* Toggle Settings */}
// // // // // // //                     <div className="space-y-4">
// // // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // //                         <div>
// // // // // // //                           <h4 className="font-medium">Online Transactions</h4>
// // // // // // //                           <p className="text-sm text-gray-600">Allow online and e-commerce payments</p>
// // // // // // //                         </div>
// // // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // // //                           <input
// // // // // // //                             type="checkbox"
// // // // // // //                             checked={cardSettings.onlineTransactions}
// // // // // // //                             onChange={(e) => handleCardSettingChange("onlineTransactions", e.target.checked)}
// // // // // // //                             className="sr-only peer"
// // // // // // //                           />
// // // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // //                         </label>
// // // // // // //                       </div>

// // // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // //                         <div>
// // // // // // //                           <h4 className="font-medium">International Transactions</h4>
// // // // // // //                           <p className="text-sm text-gray-600">Allow payments outside your country</p>
// // // // // // //                         </div>
// // // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // // //                           <input
// // // // // // //                             type="checkbox"
// // // // // // //                             checked={cardSettings.internationalTransactions}
// // // // // // //                             onChange={(e) => handleCardSettingChange("internationalTransactions", e.target.checked)}
// // // // // // //                             className="sr-only peer"
// // // // // // //                           />
// // // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // //                         </label>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <div className="space-y-4">
// // // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // //                         <div>
// // // // // // //                           <h4 className="font-medium">Contactless Payments</h4>
// // // // // // //                           <p className="text-sm text-gray-600">Enable tap-to-pay functionality</p>
// // // // // // //                         </div>
// // // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // // //                           <input
// // // // // // //                             type="checkbox"
// // // // // // //                             checked={cardSettings.contactlessPayments}
// // // // // // //                             onChange={(e) => handleCardSettingChange("contactlessPayments", e.target.checked)}
// // // // // // //                             className="sr-only peer"
// // // // // // //                           />
// // // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // //                         </label>
// // // // // // //                       </div>

// // // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // // //                         <div>
// // // // // // //                           <h4 className="font-medium">ATM Withdrawals</h4>
// // // // // // //                           <p className="text-sm text-gray-600">Allow cash withdrawals at ATMs</p>
// // // // // // //                         </div>
// // // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // // //                           <input
// // // // // // //                             type="checkbox"
// // // // // // //                             checked={cardSettings.atmWithdrawals}
// // // // // // //                             onChange={(e) => handleCardSettingChange("atmWithdrawals", e.target.checked)}
// // // // // // //                             className="sr-only peer"
// // // // // // //                           />
// // // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // // //                         </label>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* Security Settings */}
// // // // // // //             {selectedPlan && (
// // // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // //                 <div className="p-6">
// // // // // // //                   <h3 className="text-lg font-medium mb-4">Security Settings</h3>
// // // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <h4 className="font-medium mb-2">Change PIN</h4>
// // // // // // //                       <p className="text-sm text-gray-600 mb-4">
// // // // // // //                         For security reasons, you&apos;ll need to verify your identity
// // // // // // //                       </p>
// // // // // // //                       <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // // //                         Request PIN Change
// // // // // // //                       </button>
// // // // // // //                     </div>

// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // // //                       <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
// // // // // // //                       <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
// // // // // // //                       <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // // //                         Setup 2FA
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         ) : activeSection === "transactions" ? (
// // // // // // //           <div className="p-6">
// // // // // // //             <div className="mb-6">
// // // // // // //               <h2 className="text-2xl font-semibold text-gray-800">Transaction History</h2>
// // // // // // //               <p className="text-gray-600">View and manage your recent transactions</p>
// // // // // // //             </div>

// // // // // // //             {/* Transaction content would go here */}
// // // // // // //             <div className="mt-6">
// // // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // // //                 <div className="p-6 pb-4">
// // // // // // //                   <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // // //                 </div>
// // // // // // //                 <div className="overflow-x-auto">
// // // // // // //                   <table className="w-full">
// // // // // // //                     <thead className="bg-gray-50">
// // // // // // //                       <tr>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Merchant
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Date
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Category
// // // // // // //                         </th>
// // // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // // //                           Amount
// // // // // // //                         </th>
// // // // // // //                       </tr>
// // // // // // //                     </thead>
// // // // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // // //                       {userData.recentTransactions.map((transaction) => (
// // // // // // //                         <tr key={transaction.id}>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <div className="text-sm text-gray-500">{transaction.date}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // // //                               {transaction.category}
// // // // // // //                             </span>
// // // // // // //                           </td>
// // // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.amount}</td>
// // // // // // //                         </tr>
// // // // // // //                       ))}
// // // // // // //                     </tbody>
// // // // // // //                   </table>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-4 min-h-screen">
// // // // // // //             <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
// // // // // // //               <div className="p-6">
// // // // // // //                 <div className="flex justify-between items-center mb-6">
// // // // // // //                   <h2 className="text-2xl font-bold text-gray-800">Check Your Credit Score</h2>
// // // // // // //                   <button
// // // // // // //                     onClick={() => setShowCreditScoreChecker(false)}
// // // // // // //                     className="text-gray-500 hover:text-gray-700"
// // // // // // //                   >
// // // // // // //                     <svg
// // // // // // //                       xmlns="http://www.w3.org/2000/svg"
// // // // // // //                       className="h-6 w-6"
// // // // // // //                       fill="none"
// // // // // // //                       viewBox="0 0 24 24"
// // // // // // //                       stroke="currentColor"
// // // // // // //                     >
// // // // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // // // // //                     </svg>
// // // // // // //                   </button>
// // // // // // //                 </div>

// // // // // // //                 {creditScore === null ? (
// // // // // // //                   <>
// // // // // // //                     <div className={`credit-card-container relative h-56 mb-8 w-full`}>
// // // // // // //                       {/* Front of card */}
// // // // // // //                       <div
// // // // // // //                         className={`rounded-xl p-6 absolute w-full h-full ${flipCard ? "hidden" : "block"} bg-gradient-to-br from-indigo-900 to-indigo-700 shadow-lg`}
// // // // // // //                       >
// // // // // // //                         <div className="flex justify-between items-start">
// // // // // // //                           <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
// // // // // // //                           <button
// // // // // // //                             onClick={() => setFlipCard(true)}
// // // // // // //                             className="text-xs underline text-gray-300 hover:text-white"
// // // // // // //                           >
// // // // // // //                             Flip for CVV
// // // // // // //                           </button>
// // // // // // //                         </div>
// // // // // // //                         <div className="mt-6">
// // // // // // //                           <p className="text-gray-400 text-xs mb-1">Card Number</p>
// // // // // // //                           <p className="font-mono text-xl mb-4">{cardNumberCheck || "•••• •••• •••• ••••"}</p>
// // // // // // //                           <div className="flex justify-between">
// // // // // // //                             <div>
// // // // // // //                               <p className="text-gray-400 text-xs mb-1">Card Holder</p>
// // // // // // //                               <p className="font-semibold uppercase">{cardNameCheck || "YOUR NAME"}</p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                               <p className="text-gray-400 text-xs mb-1">Expires</p>
// // // // // // //                               <p className="font-mono">{expiryCheck || "MM/YY"}</p>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       {/* Back of card */}
// // // // // // //                       <div
// // // // // // //                         className={`rounded-xl absolute w-full h-full ${flipCard ? "block" : "hidden"} bg-gradient-to-br from-indigo-800 to-indigo-600 shadow-lg`}
// // // // // // //                       >
// // // // // // //                         <div className="w-full h-12 bg-gray-900 mt-4"></div>
// // // // // // //                         <div className="p-6">
// // // // // // //                           <div className="flex justify-end mb-4">
// // // // // // //                             <button
// // // // // // //                               onClick={() => setFlipCard(false)}
// // // // // // //                               className="text-xs underline text-gray-300 hover:text-white"
// // // // // // //                             >
// // // // // // //                               Back to front
// // // // // // //                             </button>
// // // // // // //                           </div>
// // // // // // //                           <div className="bg-white h-10 flex items-center">
// // // // // // //                             <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
// // // // // // //                               <p className="font-mono text-gray-800">{cvvCheck || "•••"}</p>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                           <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <form onSubmit={handleCheckScore} className="space-y-4">
// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700">Name on Card</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           placeholder="e.g. John Smith"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // //                           value={cardNameCheck}
// // // // // // //                           onChange={(e) => setCardNameCheck(e.target.value)}
// // // // // // //                         />
// // // // // // //                         {scoreErrors.cardName && <p className="text-red-500 text-sm mt-1">{scoreErrors.cardName}</p>}
// // // // // // //                       </div>

// // // // // // //                       <div>
// // // // // // //                         <label className="block text-sm font-medium text-gray-700">Card Number</label>
// // // // // // //                         <input
// // // // // // //                           type="text"
// // // // // // //                           placeholder="1234 5678 9012 3456"
// // // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // //                           value={cardNumberCheck}
// // // // // // //                           onChange={handleCardNumberChangeCheck}
// // // // // // //                           maxLength={19}
// // // // // // //                         />
// // // // // // //                         {scoreErrors.cardNumber && (
// // // // // // //                           <p className="text-red-500 text-sm mt-1">{scoreErrors.cardNumber}</p>
// // // // // // //                         )}
// // // // // // //                       </div>

// // // // // // //                       <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
// // // // // // //                         <div className="flex-1">
// // // // // // //                           <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
// // // // // // //                           <input
// // // // // // //                             type="text"
// // // // // // //                             placeholder="MM/YY"
// // // // // // //                             className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // //                             value={expiryCheck}
// // // // // // //                             onChange={handleExpiryChangeCheck}
// // // // // // //                             maxLength={5}
// // // // // // //                           />
// // // // // // //                           {scoreErrors.expiry && <p className="text-red-500 text-sm mt-1">{scoreErrors.expiry}</p>}
// // // // // // //                         </div>

// // // // // // //                         <div className="flex-1">
// // // // // // //                           <label className="block text-sm font-medium text-gray-700">CVV</label>
// // // // // // //                           <input
// // // // // // //                             type="password"
// // // // // // //                             placeholder="123"
// // // // // // //                             className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 font-mono focus:ring-indigo-500 focus:border-indigo-500"
// // // // // // //                             value={cvvCheck}
// // // // // // //                             onChange={(e) => setCvvCheck(e.target.value.replace(/\D/g, "").slice(0, 3))}
// // // // // // //                             maxLength={3}
// // // // // // //                           />
// // // // // // //                           {scoreErrors.cvv && <p className="text-red-500 text-sm mt-1">{scoreErrors.cvv}</p>}
// // // // // // //                         </div>
// // // // // // //                       </div>

// // // // // // //                       <button
// // // // // // //                         type="submit"
// // // // // // //                         className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition-all mt-6"
// // // // // // //                         disabled={loadingScore}
// // // // // // //                       >
// // // // // // //                         {loadingScore ? (
// // // // // // //                           <div className="flex items-center justify-center">
// // // // // // //                             <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// // // // // // //                             Checking...
// // // // // // //                           </div>
// // // // // // //                         ) : (
// // // // // // //                           "Check Credit Score"
// // // // // // //                         )}
// // // // // // //                       </button>
// // // // // // //                     </form>
// // // // // // //                   </>
// // // // // // //                 ) : (
// // // // // // //                   <div>
// // // // // // //                     <div className="mb-4 sm:mb-6 text-center px-2 sm:px-4">
// // // // // // //                       <h3 className="text-xl font-bold mb-4">Your Credit Score Result</h3>

// // // // // // //                       <div className="flex justify-between text-xs mb-1 px-2">
// // // // // // //                         <span className="text-red-500">Poor</span>
// // // // // // //                         <span className="text-yellow-500">Fair</span>
// // // // // // //                         <span className="text-blue-500">Good</span>
// // // // // // //                         <span className="text-green-500">Excellent</span>
// // // // // // //                       </div>

// // // // // // //                       <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // // // // //                         <div
// // // // // // //                           className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // // // // //                           style={{ width: getScoreWidth() }}
// // // // // // //                         ></div>
// // // // // // //                       </div>

// // // // // // //                       <div className="flex justify-between px-2">
// // // // // // //                         <span className="text-xs text-gray-500">300</span>
// // // // // // //                         <span className="text-xs text-gray-500">850</span>
// // // // // // //                       </div>

// // // // // // //                       <div className="mt-8">
// // // // // // //                         <p className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>{creditScore}</p>
// // // // // // //                         <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <div className="bg-gray-50 p-4 rounded-lg mb-6">
// // // // // // //                       <h4 className="font-medium mb-2">What this means</h4>
// // // // // // //                       <p className="text-gray-600 text-sm">
// // // // // // //                         {creditScore < 670
// // // // // // //                           ? "You may want to consider improving your credit score. Focus on paying bills on time, reducing debt, and limiting new credit applications."
// // // // // // //                           : "Congratulations! Your credit score is strong. This gives you access to better interest rates and credit offers."}
// // // // // // //                       </p>
// // // // // // //                     </div>

// // // // // // //                     <div className="flex space-x-4">
// // // // // // //                       <button
// // // // // // //                         onClick={() => {
// // // // // // //                           setCardNumberCheck("")
// // // // // // //                           setCardNameCheck("")
// // // // // // //                           setExpiryCheck("")
// // // // // // //                           setCvvCheck("")
// // // // // // //                           setCreditScore(null)
// // // // // // //                           setScoreErrors({})
// // // // // // //                         }}
// // // // // // //                         className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center font-medium"
// // // // // // //                       >
// // // // // // //                         Check Another Card
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={() => setShowCreditScoreChecker(false)}
// // // // // // //                         className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-center font-medium"
// // // // // // //                       >
// // // // // // //                         Close
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }




// // // // // // import { useState, useEffect } from "react";
// // // // // // import {
// // // // // //   User,
// // // // // //   CreditCard,
// // // // // //   Home,
// // // // // //   Activity,
// // // // // //   LogOut,
// // // // // //   PlusCircle,
// // // // // // } from "lucide-react";
// // // // // // import CreditScoreChecker from "./CreditCardScoreChecker";

// // // // // // export default function CreditCardDashboard() {
// // // // // //   const [userData, setUserData] = useState({
// // // // // //     username: "Default User",
// // // // // //     email: "default@example.com",
// // // // // //     accountNumber: "****-****-****-1234",
// // // // // //     balance: "$5,432.18",
// // // // // //     availableCredit: "$10,567.82",
// // // // // //     lastPayment: "$750.00",
// // // // // //     paymentDue: "$350.00",
// // // // // //     dueDate: "May 15, 2025",
// // // // // //     recentTransactions: [
// // // // // //       {
// // // // // //         id: 1,
// // // // // //         merchant: "Amazon",
// // // // // //         date: "Apr 20, 2025",
// // // // // //         amount: "$126.35",
// // // // // //         category: "Shopping",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 2,
// // // // // //         merchant: "Starbucks",
// // // // // //         date: "Apr 19, 2025",
// // // // // //         amount: "$8.45",
// // // // // //         category: "Food & Drink",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 3,
// // // // // //         merchant: "Uber",
// // // // // //         date: "Apr 19, 2025",
// // // // // //         amount: "$24.50",
// // // // // //         category: "Transportation",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 4,
// // // // // //         merchant: "Netflix",
// // // // // //         date: "Apr 18, 2025",
// // // // // //         amount: "$15.99",
// // // // // //         category: "Entertainment",
// // // // // //       },
// // // // // //       {
// // // // // //         id: 5,
// // // // // //         merchant: "Grocery Store",
// // // // // //         date: "Apr 17, 2025",
// // // // // //         amount: "$87.32",
// // // // // //         category: "Groceries",
// // // // // //       },
// // // // // //     ],
// // // // // //   });
// // // // // //   // Add this useEffect to load user data from localStorage
// // // // // //   useEffect(() => {
// // // // // //     try {
// // // // // //       // Check if localStorage is available (for SSR compatibility)
// // // // // //       if (typeof window !== "undefined") {
// // // // // //         const storedUsername = localStorage.getItem("userData");

// // // // // //         // Update userData if values exist in localStorage
// // // // // //         if (storedUsername) {
// // // // // //           const parsedData = JSON.parse(storedUsername); // Parse the JSON string
// // // // // //           console.log(parsedData)
// // // // // //           setUserData((prevData) => ({
// // // // // //             ...prevData,
// // // // // //             username: parsedData.username || prevData.username,
// // // // // //             email: parsedData.email || prevData.email,
// // // // // //           }));
// // // // // //         }
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error accessing localStorage:", error);
// // // // // //     }
// // // // // //   }, []);

// // // // // //   const [showCreditScoreChecker, setShowCreditScoreChecker] = useState(false);
// // // // // //   const [cardNumberCheck, setCardNumberCheck] = useState("");
// // // // // //   const [cardNameCheck, setCardNameCheck] = useState("");
// // // // // //   const [expiryCheck, setExpiryCheck] = useState("");
// // // // // //   const [cvvCheck, setCvvCheck] = useState("");
// // // // // //   const [creditScore, setCreditScore] = useState(null);
// // // // // //   const [loadingScore, setLoadingScore] = useState(false);
// // // // // //   const [scoreErrors, setScoreErrors] = useState({});
// // // // // //   const [flipCard, setFlipCard] = useState(false);

// // // // // //   const [activeSection, setActiveSection] = useState("dashboard");
// // // // // //   const [cardSettings, setCardSettings] = useState({
// // // // // //     cardName: "Nexus Elite",
// // // // // //     creditLimit: 12000,
// // // // // //     monthlySpendingLimit: 5000,
// // // // // //     onlineTransactions: true,
// // // // // //     internationalTransactions: true,
// // // // // //     contactlessPayments: true,
// // // // // //     atmWithdrawals: true,
// // // // // //     isCardFrozen: false,
// // // // // //     notificationsAmount: 50,
// // // // // //   });

// // // // // //   // Add this handler to your component
// // // // // //   const handleNavClick = (section) => {
// // // // // //     setActiveSection(section);
// // // // // //   };

// // // // // //   // Add this function to handle card setting changes
// // // // // //   const handleCardSettingChange = (setting, value) => {
// // // // // //     setCardSettings((prev) => ({
// // // // // //       ...prev,
// // // // // //       [setting]: value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const [selectedPlan, setSelectedPlan] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     // Check local storage for selectedPlan
// // // // // //     const storedPlan = localStorage.getItem("selectedPlan");
// // // // // //     if (storedPlan) {
// // // // // //       setSelectedPlan(JSON.parse(storedPlan));
// // // // // //     }
// // // // // //   }, []);
// // // // // // console.log("selectedPlan is :",selectedPlan)
// // // // // //   const handlePurchaseCard = () => {
// // // // // //     // Simulate purchasing a card and storing in localStorage
// // // // // //     const newPlan = {
// // // // // //       description: "For large teams",
// // // // // //       price: "1000",
// // // // // //       title: "elite",
// // // // // //     };
// // // // // //     localStorage.setItem("selectedPlan", JSON.stringify(newPlan));
// // // // // //     setSelectedPlan(newPlan);
// // // // // //   };

// // // // // //   const handleRemoveCard = () => {
// // // // // //     // For demo purposes - remove the card
// // // // // //     localStorage.removeItem("selectedPlan");
// // // // // //     setSelectedPlan(null);
// // // // // //   };

// // // // // //   // Add these functions to your component

// // // // // //   // Function to format card number with spaces
// // // // // //   const formatCardNumber = (value) => {
// // // // // //     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
// // // // // //     const matches = v.match(/\d{4,16}/g);
// // // // // //     const match = (matches && matches[0]) || "";
// // // // // //     const parts = [];
// // // // // //     for (let i = 0; i < match.length; i += 4) {
// // // // // //       parts.push(match.substring(i, i + 4));
// // // // // //     }
// // // // // //     return parts.length ? parts.join(" ") : value;
// // // // // //   };

// // // // // //   const handleCardNumberChangeCheck = (e) => {
// // // // // //     const formattedValue = formatCardNumber(e.target.value);
// // // // // //     setCardNumberCheck(formattedValue);
// // // // // //   };

// // // // // //   const handleExpiryChangeCheck = (e) => {
// // // // // //     let { value } = e.target;
// // // // // //     value = value.replace(/[^\d]/g, "");
// // // // // //     if (value.length <= 2) {
// // // // // //       setExpiryCheck(value);
// // // // // //     } else if (value.length > 2) {
// // // // // //       setExpiryCheck(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
// // // // // //     }
// // // // // //   };

// // // // // //   const validateScoreFields = () => {
// // // // // //     const newErrors = {};
// // // // // //     if (!cardNameCheck.trim()) newErrors.cardName = "Name on card is required";
// // // // // //     if (!/^\d{16}$/.test(cardNumberCheck.replace(/\s/g, "")))
// // // // // //       newErrors.cardNumber = "Card number must be 16 digits";
// // // // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryCheck))
// // // // // //       newErrors.expiry = "Expiry must be in MM/YY format";
// // // // // //     if (!/^\d{3}$/.test(cvvCheck)) newErrors.cvv = "CVV must be 3 digits";
// // // // // //     setScoreErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleCheckScore = (e) => {
// // // // // //     e.preventDefault();

// // // // // //     if (!validateScoreFields()) return;

// // // // // //     setLoadingScore(true);
// // // // // //     setCreditScore(null);

// // // // // //     const userKey = `${cardNameCheck
// // // // // //       .trim()
// // // // // //       .toLowerCase()}|${cardNumberCheck.replace(/\s/g, "")}|${expiryCheck}`;
// // // // // //     const storedScore = localStorage.getItem(userKey);

// // // // // //     if (storedScore) {
// // // // // //       setTimeout(() => {
// // // // // //         setCreditScore(Number.parseInt(storedScore));
// // // // // //         setLoadingScore(false);
// // // // // //       }, 1000);
// // // // // //     } else {
// // // // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// // // // // //       localStorage.setItem(userKey, randomScore);
// // // // // //       setTimeout(() => {
// // // // // //         setCreditScore(randomScore);
// // // // // //         setLoadingScore(false);
// // // // // //       }, 1000);
// // // // // //     }
// // // // // //   };

// // // // // //   const getScoreColor = () => {
// // // // // //     if (!creditScore) return "text-gray-700";
// // // // // //     if (creditScore < 580) return "text-red-600";
// // // // // //     if (creditScore < 670) return "text-yellow-600";
// // // // // //     if (creditScore < 740) return "text-blue-600";
// // // // // //     return "text-green-600";
// // // // // //   };

// // // // // //   const getScoreCategory = () => {
// // // // // //     if (!creditScore) return "";
// // // // // //     if (creditScore < 580) return "Poor";
// // // // // //     if (creditScore < 670) return "Fair";
// // // // // //     if (creditScore < 740) return "Good";
// // // // // //     if (creditScore < 800) return "Very Good";
// // // // // //     return "Excellent";
// // // // // //   };

// // // // // //   const getScoreWidth = () => {
// // // // // //     if (!creditScore) return "0%";
// // // // // //     return `${((creditScore - 300) / (850 - 300)) * 100}%`;
// // // // // //   };

// // // // // //   // const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));

// // // // // //   return (
// // // // // //     <div className="flex flex-col md:flex-row h-screen bg-gray-100">
// // // // // //       {/* Sidebar */}
// // // // // //       <div className="w-full md:w-64 bg-gradient-to-b from-[#550665] to-[#27012F] text-white">
// // // // // //         <div className="p-6">
// // // // // //           <h1 className="text-2xl font-bold">{selectedPlan?.title}</h1>
// // // // // //         </div>
// // // // // //         <nav className="mt-6">
// // // // // //           <div className="px-4">
// // // // // //             <div
// // // // // //               className={`flex items-center py-3 px-4 ${
// // // // // //                 activeSection === "dashboard"
// // // // // //                   ? "bg-[#df57fa]"
// // // // // //                   : "hover:bg-[#df57fa]"
// // // // // //               } rounded-lg cursor-pointer`}
// // // // // //               onClick={() => handleNavClick("dashboard")}
// // // // // //             >
// // // // // //               <Home size={20} />
// // // // // //               <span className="ml-4">Dashboard</span>
// // // // // //             </div>
// // // // // //             <div
// // // // // //               className={`flex items-center py-3 px-4 mt-2 ${
// // // // // //                 activeSection === "mycards"
// // // // // //                   ? "bg-[#df57fa]"
// // // // // //                   : "hover:bg-[#df57fa]"
// // // // // //               } rounded-lg cursor-pointer`}
// // // // // //               onClick={() => handleNavClick("mycards")}
// // // // // //             >
// // // // // //               <CreditCard size={20} />
// // // // // //               <span className="ml-4">My Cards</span>
// // // // // //             </div>
// // // // // //             <div
// // // // // //               className={`flex items-center py-3 px-4 mt-2 ${
// // // // // //                 activeSection === "transactions"
// // // // // //                   ? "bg-[#df57fa]"
// // // // // //                   : "hover:bg-[#df57fa]"
// // // // // //               } rounded-lg cursor-pointer`}
// // // // // //               onClick={() => handleNavClick("transactions")}
// // // // // //             >
// // // // // //               <Activity size={20} />
// // // // // //               <span className="ml-4">Transactions</span>
// // // // // //             </div>
// // // // // //             <div
// // // // // //               className={`flex items-center py-3 px-4 mt-2 ${
// // // // // //                 activeSection === "creditscore"
// // // // // //                   ? "bg-[#df57fa]"
// // // // // //                   : "hover:bg-[#df57fa]"
// // // // // //               } rounded-lg cursor-pointer`}
// // // // // //               onClick={() => handleNavClick("creditscore")}
// // // // // //             >
// // // // // //               <Activity size={20} />
// // // // // //               <span className="ml-4">Check Credit Score</span>
// // // // // //             </div>

// // // // // //             <div className="flex items-center py-3 px-4 mt-2 hover:bg-[#df57fa] rounded-lg cursor-pointer">
// // // // // //               <LogOut size={20} />
// // // // // //               <span className="ml-4">Log Out</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </nav>
// // // // // //       </div>

// // // // // //       {/* Main Content */}
// // // // // //       <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen">
// // // // // //         {/* Header */}
// // // // // //         {/* <header className="bg-white shadow">
// // // // // //           <div className="px-6 py-4 flex justify-between items-center">
// // // // // //             <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
// // // // // //             <div className="flex items-center space-x-4">
// // // // // //               <button className="relative p-1">
// // // // // //                 <Bell size={24} />
// // // // // //                 <span className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></span>
// // // // // //               </button>
// // // // // //               <div className="flex items-center">
// // // // // //                 <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
// // // // // //                   {userData.username.charAt(0)}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </header> */}

// // // // // //         {/* User Info and Card Section */}
// // // // // //         {activeSection === "dashboard" ? (
// // // // // //           <div className="p-6">
// // // // // //             <div className="bg-white rounded-lg shadow p-6 mb-6">
// // // // // //               <div className="flex justify-between items-start">
// // // // // //                 <div>
// // // // // //                   <div className="flex items-center mb-1">
// // // // // //                     <User size={20} className="text-indigo-600" />
// // // // // //                     <h3 className="ml-2 text-lg font-medium">
// // // // // //                       {userData.username}
// // // // // //                     </h3>
// // // // // //                   </div>
// // // // // //                   {/* <p className="text-gray-600 ml-7">{userData.email}</p> */}
// // // // // //                 </div>
// // // // // //                 <div className="text-right">
// // // // // //                   <p className="text-sm text-gray-600">Account Number</p>
// // // // // //                   <p className="font-medium">{userData.accountNumber}</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             {/* Card Section */}
            
// // // // // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
// // // // // //               {/* Card Display */}
// // // // // //               <div className="lg:col-span-1">
// // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">Your Card</h3>
// // // // // //                   {selectedPlan ? (
// // // // // //                     <div className="space-y-4">
// // // // // //                       {/* Credit Card Display */}
// // // // // //                       <div className="relative h-48 rounded-xl overflow-hidden  p-6 text-white shadow-lg">
// // // // // //                         <div className="absolute top-4 right-4">
// // // // // //                           {selectedPlan?.image && (
// // // // // //                             <img
// // // // // //                               src={selectedPlan.image}
// // // // // //                               alt={`${selectedPlan.title} card`}
// // // // // //                               className="w-full rounded-md"
// // // // // //                             />
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </div>

// // // // // //                       {/* Plan Details */}
// // // // // //                       <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // //                           <h4 className="font-medium capitalize">
// // // // // //                             {selectedPlan.title} Plan
// // // // // //                           </h4>
// // // // // //                           <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
// // // // // //                             Active
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                         <p className="text-gray-600 text-sm mb-2">
// // // // // //                           {selectedPlan.description}
// // // // // //                         </p>
// // // // // //                         <p className="text-lg font-semibold">
// // // // // //                           ${selectedPlan?.price}
// // // // // //                           <span className="text-sm text-gray-500 font-normal">
// // // // // //                             /year
// // // // // //                           </span>
// // // // // //                         </p>
// // // // // //                         <button
// // // // // //                           onClick={handleRemoveCard}
// // // // // //                           className="mt-3 text-sm text-red-600 hover:text-red-800"
// // // // // //                         >
// // // // // //                           Remove Card
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-48">
// // // // // //                       <p className="text-gray-500 mb-4 text-center">
// // // // // //                         No active credit card
// // // // // //                       </p>
// // // // // //                       <button
// // // // // //                         onClick={handlePurchaseCard}
// // // // // //                         className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // //                       >
// // // // // //                         <PlusCircle size={18} className="mr-2" />
// // // // // //                         Purchase New Card
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Account Summary */}
// // // // // //               <div className="lg:col-span-2">
// // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">Account Summary</h3>
// // // // // //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <p className="text-sm text-gray-600">Current Balance</p>
// // // // // //                       <p className="text-2xl font-semibold text-indigo-600">
// // // // // //                         {userData.balance}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <p className="text-sm text-gray-600">Available Credit</p>
// // // // // //                       <p className="text-2xl font-semibold text-green-600">
// // // // // //                         {userData.availableCredit}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <p className="text-sm text-gray-600">Last Payment</p>
// // // // // //                       <p className="text-xl font-medium">
// // // // // //                         {userData.lastPayment}
// // // // // //                       </p>
// // // // // //                       <p className="text-xs text-gray-500">Apr 10, 2025</p>
// // // // // //                     </div>
// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <p className="text-sm text-gray-600">Payment Due</p>
// // // // // //                       <p className="text-xl font-medium">
// // // // // //                         {userData.paymentDue}
// // // // // //                       </p>
// // // // // //                       <p className="text-xs text-gray-500">
// // // // // //                         Due by {userData.dueDate}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Recent Transactions */}
// // // // // //             <div className="mt-6">
// // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // //                 <div className="p-6 pb-4">
// // // // // //                   <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // //                 </div>
// // // // // //                 <div className="overflow-x-auto -mx-4 sm:-mx-0">
// // // // // //                   <table className="min-w-full divide-y divide-gray-200">
// // // // // //                     <thead className="bg-gray-50">
// // // // // //                       <tr>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Merchant
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Date
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Category
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Amount
// // // // // //                         </th>
// // // // // //                       </tr>
// // // // // //                     </thead>
// // // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                       {userData.recentTransactions.map((transaction) => (
// // // // // //                         <tr key={transaction.id}>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <div className="text-sm font-medium text-gray-900">
// // // // // //                               {transaction.merchant}
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <div className="text-sm text-gray-500">
// // // // // //                               {transaction.date}
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // //                               {transaction.category}
// // // // // //                             </span>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                             {transaction.amount}
// // // // // //                           </td>
// // // // // //                         </tr>
// // // // // //                       ))}
// // // // // //                     </tbody>
// // // // // //                   </table>
// // // // // //                 </div>
// // // // // //               </div>  
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : activeSection === "mycards" ? (
// // // // // //           <div className="p-6">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800">
// // // // // //                 Card Management
// // // // // //               </h2>
// // // // // //               <p className="text-gray-600">
// // // // // //                 Manage your credit card settings and preferences
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Card Display */}
// // // // // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
// // // // // //               <div className="lg:col-span-1">
// // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">Your Card</h3>
// // // // // //                   {selectedPlan ? (
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div
// // // // // //                         className={`relative h-56 rounded-xl overflow-hidden ${
// // // // // //                           cardSettings.isCardFrozen
// // // // // //                             ? "bg-gray-400"
// // // // // //                             : "bg-gradient-to-r from-indigo-600 to-purple-600"
// // // // // //                         } p-6 text-white shadow-lg transition-all duration-300`}
// // // // // //                       >
// // // // // //                         {cardSettings.isCardFrozen && (
// // // // // //                           <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
// // // // // //                             <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md text-gray-800 font-bold transform rotate-12">
// // // // // //                               FROZEN
// // // // // //                             </div>
// // // // // //                           </div>
// // // // // //                         )}  
// // // // // //                          <div className="relative h-48 rounded-xl overflow-hidden  p-6 text-white shadow-lg">
// // // // // //                         <div className="absolute top-4 right-4">
// // // // // //                           {selectedPlan?.image && (
// // // // // //                             <img
// // // // // //                               src={selectedPlan.image}
// // // // // //                               alt={`${selectedPlan.title} card`}
// // // // // //                               className="w-full rounded-md"
// // // // // //                             />
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                         <div className="flex flex-col justify-between h-full">
// // // // // //                           <div>
// // // // // //                             <p className="text-sm opacity-80">Card Name</p>
// // // // // //                             <p className="font-medium">
// // // // // //                               {selectedPlan.cardName}
// // // // // //                             </p>
// // // // // //                             <p className="text-sm opacity-80 mt-2">
// // // // // //                               Card Number
// // // // // //                             </p>
// // // // // //                             <p className="font-medium tracking-widest">
// // // // // //                               {userData.accountNumber}
// // // // // //                             </p>
// // // // // //                           </div>
// // // // // //                           <div className="flex justify-between items-end">
// // // // // //                             <div>
// // // // // //                               <p className="text-xs opacity-80">
// // // // // //                                 CARDHOLDER NAME
// // // // // //                               </p>
// // // // // //                               <p>{userData.username}</p>
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                               <p className="text-xs opacity-80">VALID THRU</p>
// // // // // //                               <p>04/28</p>
// // // // // //                             </div>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                       <div className="flex space-x-2">
// // // // // //                         <button
// // // // // //                           onClick={() =>
// // // // // //                             handleCardSettingChange(
// // // // // //                               "isCardFrozen",
// // // // // //                               !cardSettings.isCardFrozen
// // // // // //                             )
// // // // // //                           }
// // // // // //                           className={`flex-1 py-2 px-4 rounded-lg text-center ${
// // // // // //                             cardSettings.isCardFrozen
// // // // // //                               ? "bg-indigo-600 hover:bg-indigo-700 text-white"
// // // // // //                               : "bg-red-600 hover:bg-red-700 text-white"
// // // // // //                           }`}
// // // // // //                         >
// // // // // //                           {cardSettings.isCardFrozen
// // // // // //                             ? "Unfreeze Card"
// // // // // //                             : "Freeze Card"}
// // // // // //                         </button>
// // // // // //                         <button className="flex-1 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-lg text-center">
// // // // // //                           Report Lost
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-56">
// // // // // //                       <p className="text-gray-500 mb-4 text-center">
// // // // // //                         No active credit card
// // // // // //                       </p>
// // // // // //                       <button
// // // // // //                         onClick={handlePurchaseCard}
// // // // // //                         className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
// // // // // //                       >
// // // // // //                         <PlusCircle size={18} className="mr-2" />
// // // // // //                         Purchase New Card
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>  
// // // // // //               </div>
// // // // // //               {/* Card Information */}
// // // // // //               <div className="lg:col-span-2">
// // // // // //                 <div className="bg-white rounded-lg shadow p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">Card Information</h3>
// // // // // //                   {selectedPlan ? (
// // // // // //                     <div className="space-y-6">
// // // // // //                       {/* Card Name */}
// // // // // //                       <div>
// // // // // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // // // // //                           Card Name
// // // // // //                         </label>
// // // // // //                         <div className="relative">
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             value={selectedPlan.cardName}
// // // // // //                             onChange={(e) =>
// // // // // //                               handleCardSettingChange(
// // // // // //                                 "cardName",
// // // // // //                                 e.target.value
// // // // // //                               )
// // // // // //                             }
// // // // // //                             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
// // // // // //                             placeholder="Card Name"
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                       {/* Credit Limit Slider */}
// // // // // //                       <div>
// // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // //                           <label className="block text-sm font-medium text-gray-700">
// // // // // //                             Credit Limit
// // // // // //                           </label>
// // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // //                             ${cardSettings.creditLimit.toLocaleString()}
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                           type="range"
// // // // // //                           min="1000"
// // // // // //                           max="25000"
// // // // // //                           step="500"
// // // // // //                           value={cardSettings.creditLimit}
// // // // // //                           onChange={(e) =>
// // // // // //                             handleCardSettingChange(
// // // // // //                               "creditLimit",
// // // // // //                               Number.parseInt(e.target.value)
// // // // // //                             )
// // // // // //                           }
// // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // //                         />
// // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // //                           <span>$1,000</span>
// // // // // //                           <span>$25,000</span>
// // // // // //                         </div>
// // // // // //                       </div>

// // // // // //                       {/* Monthly Spending Limit */}
// // // // // //                       <div>
// // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // //                           <label className="block text-sm font-medium text-gray-700">
// // // // // //                             Monthly Spending Limit
// // // // // //                           </label>
// // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // //                             $
// // // // // //                             {cardSettings.monthlySpendingLimit.toLocaleString()}
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                           type="range"
// // // // // //                           min="500"
// // // // // //                           max="10000"
// // // // // //                           step="100"
// // // // // //                           value={cardSettings.monthlySpendingLimit}
// // // // // //                           onChange={(e) =>
// // // // // //                             handleCardSettingChange(
// // // // // //                               "monthlySpendingLimit",
// // // // // //                               Number.parseInt(e.target.value)
// // // // // //                             )
// // // // // //                           }
// // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // //                         />
// // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // //                           <span>$500</span>
// // // // // //                           <span>$10,000</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                       {/* Notification Threshold */}
// // // // // //                       <div>
// // // // // //                         <div className="flex justify-between items-center mb-2">
// // // // // //                           <label className="block text-sm font-medium text-gray-700">
// // // // // //                             Transaction Notification Threshold
// // // // // //                           </label>
// // // // // //                           <span className="text-lg font-semibold text-indigo-600">
// // // // // //                             ${cardSettings.notificationsAmount}
// // // // // //                           </span>
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                           type="range"
// // // // // //                           min="0"
// // // // // //                           max="500"
// // // // // //                           step="10"
// // // // // //                           value={cardSettings.notificationsAmount}
// // // // // //                           onChange={(e) =>
// // // // // //                             handleCardSettingChange(
// // // // // //                               "notificationsAmount",
// // // // // //                               Number.parseInt(e.target.value)
// // // // // //                             )
// // // // // //                           }
// // // // // //                           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
// // // // // //                         />
// // // // // //                         <div className="flex justify-between text-xs text-gray-500 mt-1">
// // // // // //                           <span>$0 (All transactions)</span>
// // // // // //                           <span>$500+</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     <div className="text-center p-8 text-gray-500">
// // // // // //                       Please activate a card to view and manage card information
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             {/* Transaction Settings */}
// // // // // //             {selectedPlan && (
// // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
// // // // // //                 <div className="p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">
// // // // // //                     Transaction Settings
// // // // // //                   </h3>
// // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // // // // //                     {/* Toggle Settings */}
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // //                         <div>
// // // // // //                           <h4 className="font-medium">Online Transactions</h4>
// // // // // //                           <p className="text-sm text-gray-600">
// // // // // //                             Allow online and e-commerce payments
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // //                           <input
// // // // // //                             type="checkbox"
// // // // // //                             checked={cardSettings.onlineTransactions}
// // // // // //                             onChange={(e) =>
// // // // // //                               handleCardSettingChange(
// // // // // //                                 "onlineTransactions",
// // // // // //                                 e.target.checked
// // // // // //                               )
// // // // // //                             }
// // // // // //                             className="sr-only peer"
// // // // // //                           />
// // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // //                         </label>
// // // // // //                       </div>

// // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // //                         <div>
// // // // // //                           <h4 className="font-medium">
// // // // // //                             International Transactions
// // // // // //                           </h4>
// // // // // //                           <p className="text-sm text-gray-600">
// // // // // //                             Allow payments outside your country
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // //                           <input
// // // // // //                             type="checkbox"
// // // // // //                             checked={cardSettings.internationalTransactions}
// // // // // //                             onChange={(e) =>
// // // // // //                               handleCardSettingChange(
// // // // // //                                 "internationalTransactions",
// // // // // //                                 e.target.checked
// // // // // //                               )
// // // // // //                             }
// // // // // //                             className="sr-only peer"
// // // // // //                           />
// // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // //                         </label>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <div className="space-y-4">
// // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // //                         <div>
// // // // // //                           <h4 className="font-medium">Contactless Payments</h4>
// // // // // //                           <p className="text-sm text-gray-600">
// // // // // //                             Enable tap-to-pay functionality
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // //                           <input
// // // // // //                             type="checkbox"
// // // // // //                             checked={cardSettings.contactlessPayments}
// // // // // //                             onChange={(e) =>
// // // // // //                               handleCardSettingChange(
// // // // // //                                 "contactlessPayments",
// // // // // //                                 e.target.checked
// // // // // //                               )
// // // // // //                             }
// // // // // //                             className="sr-only peer"
// // // // // //                           />
// // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // //                         </label>
// // // // // //                       </div>

// // // // // //                       <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
// // // // // //                         <div>
// // // // // //                           <h4 className="font-medium">ATM Withdrawals</h4>
// // // // // //                           <p className="text-sm text-gray-600">
// // // // // //                             Allow cash withdrawals at ATMs
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                         <label className="relative inline-flex items-center cursor-pointer">
// // // // // //                           <input
// // // // // //                             type="checkbox"
// // // // // //                             checked={cardSettings.atmWithdrawals}
// // // // // //                             onChange={(e) =>
// // // // // //                               handleCardSettingChange(
// // // // // //                                 "atmWithdrawals",
// // // // // //                                 e.target.checked
// // // // // //                               )
// // // // // //                             }
// // // // // //                             className="sr-only peer"
// // // // // //                           />
// // // // // //                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
// // // // // //                         </label>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Security Settings */}
// // // // // //             {selectedPlan && (
// // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // //                 <div className="p-6">
// // // // // //                   <h3 className="text-lg font-medium mb-4">
// // // // // //                     Security Settings
// // // // // //                   </h3>
// // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <h4 className="font-medium mb-2">Change PIN</h4>
// // // // // //                       <p className="text-sm text-gray-600 mb-4">
// // // // // //                         For security reasons, you'll need to verify your
// // // // // //                         identity
// // // // // //                       </p>
// // // // // //                       <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // //                         Request PIN Change
// // // // // //                       </button>
// // // // // //                     </div>

// // // // // //                     <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                       <h4 className="font-medium mb-2">
// // // // // //                         Two-Factor Authentication
// // // // // //                       </h4>
// // // // // //                       <p className="text-sm text-gray-600 mb-4">
// // // // // //                         Add an extra layer of security to your account
// // // // // //                       </p>
// // // // // //                       <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
// // // // // //                         Setup 2FA
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ) : activeSection === "transactions" ? (
// // // // // //           <div className="p-6">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800">
// // // // // //                 Transaction History
// // // // // //               </h2>
// // // // // //               <p className="text-gray-600">
// // // // // //                 View and manage your recent transactions
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Transaction content would go here */}
// // // // // //             <div className="mt-6">
// // // // // //               <div className="bg-white rounded-lg shadow overflow-hidden">
// // // // // //                 <div className="p-6 pb-4">
// // // // // //                   <h3 className="text-lg font-medium">Recent Transactions</h3>
// // // // // //                 </div>
// // // // // //                 <div className="overflow-x-auto">
// // // // // //                   <table className="w-full">
// // // // // //                     <thead className="bg-gray-50">
// // // // // //                       <tr>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Merchant
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Date
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Category
// // // // // //                         </th>
// // // // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                           Amount
// // // // // //                         </th>
// // // // // //                       </tr>
// // // // // //                     </thead>
// // // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                       {userData.recentTransactions.map((transaction) => (
// // // // // //                         <tr key={transaction.id}>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <div className="text-sm font-medium text-gray-900">
// // // // // //                               {transaction.merchant}
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <div className="text-sm text-gray-500">
// // // // // //                               {transaction.date}
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
// // // // // //                               {transaction.category}
// // // // // //                             </span>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                             {transaction.amount}
// // // // // //                           </td>
// // // // // //                         </tr>
// // // // // //                       ))}
// // // // // //                     </tbody>
// // // // // //                   </table>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ) : (
          
// // // // // //           <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-4 min-h-screen">
// // // // // //             <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
// // // // // //               <div className="p-6">
// // // // // //                 <CreditScoreChecker/>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // } 







// // // // // // import NewCheckerCards from "@/pages/Home/component/Features/NewCheckerCard";
// // // // // // import { useState} from "react";
// // // // // // import { 
// // // // // //   BarChart, Bar, PieChart, Pie, LineChart, Line, 
// // // // // //   XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
// // // // // //   ResponsiveContainer, Cell, RadialBarChart, RadialBar 
// // // // // // } from "recharts";

// // // // // // export default function CreditCardDashboardGraphics() {
// // // // // //   // Sample data - you would replace this with your actual data
// // // // // //   const [userData] = useState({
// // // // // //     username: "Default User",
// // // // // //     creditScore: 0,
// // // // // //     accountNumber: "****-****-****-1234",
// // // // // //     balance: 0,
// // // // // //     creditLimit: 0,
// // // // // //     availableCredit: 0,
// // // // // //     utilizationPercentage: 0, // balance / creditLimit * 100
// // // // // //     recentTransactions: [
// // // // // //       { id: 1, merchant: "Amazon", date: "Apr 20, 2025", amount: 0, category: "Shopping" },
// // // // // //       { id: 2, merchant: "Starbucks", date: "Apr 19, 2025", amount: 0, category: "Food & Drink" },
// // // // // //       { id: 3, merchant: "Uber", date: "Apr 19, 2025", amount: 0, category: "Transportation" },
// // // // // //       { id: 4, merchant: "Netflix", date: "Apr 18, 2025", amount: 0, category: "Entertainment" },
// // // // // //       { id: 5, merchant: "Grocery Store", date: "Apr 17, 2025", amount: 0, category: "Groceries" },
// // // // // //     ],
// // // // // //     monthlySpending: [
// // // // // //       { month: "Nov", amount: 0 },
// // // // // //       { month: "Dec", amount: 0 },
// // // // // //       { month: "Jan", amount: 0 },
// // // // // //       { month: "Feb", amount: 0 },
// // // // // //       { month: "Mar", amount: 0 },
// // // // // //       { month: "Apr", amount: 0 },
// // // // // //     ]
// // // // // //   });

// // // // // //   // Calculate category totals for pie chart
// // // // // //   const categoryData = userData.recentTransactions.reduce((acc, transaction) => {
// // // // // //     const existingCategory = acc.find(item => item.name === transaction.category);
// // // // // //     if (existingCategory) {
// // // // // //       existingCategory.value += transaction.amount;
// // // // // //     } else {
// // // // // //       acc.push({ name: transaction.category, value: transaction.amount });
// // // // // //     }
// // // // // //     return acc;
// // // // // //   }, []);

// // // // // //   // Colors for pie chart
// // // // // //   const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

// // // // // //   // Credit utilization gauge calculation
// // // // // //   const utilizationData = [
// // // // // //     { name: 'Utilization', value: userData.utilizationPercentage, fill: getUtilizationColor(userData.utilizationPercentage) }
// // // // // //   ];

// // // // // //   function getUtilizationColor(percentage) {
// // // // // //     if (percentage < 30) return '#4ade80'; // Green for good utilization
// // // // // //     if (percentage < 70) return '#facc15'; // Yellow for moderate
// // // // // //     return '#ef4444'; // Red for high utilization
// // // // // //   }

// // // // // //   // Credit score gauge calculation
// // // // // //   const scoreRangeData = [
// // // // // //     { name: 'Poor', value: 300, fill: '#ef4444' },
// // // // // //     { name: 'Fair', value: 280, fill: '#f97316' },
// // // // // //     { name: 'Good', value: 90, fill: '#facc15' },
// // // // // //     { name: 'Very Good', value: 90, fill: '#22c55e' },
// // // // // //     { name: 'Excellent', value: 90, fill: '#10b981' }
// // // // // //   ];

// // // // // //   const scoreFill = () => {
// // // // // //     const score = userData.creditScore;
// // // // // //     if (score < 580) return '#ef4444';
// // // // // //     if (score < 670) return '#f97316';
// // // // // //     if (score < 740) return '#facc15';
// // // // // //     if (score < 800) return '#22c55e';
// // // // // //     return '#10b981';
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="w-full space-y-8">
      
// // // // // //       {/* Credit Score Visualization */}
// // // // // //       {/* <div className="bg-white rounded-lg shadow p-6">
// // // // // //         <h3 className="text-lg font-medium mb-4">Credit Score</h3>
// // // // // //         <div className="flex flex-col md:flex-row items-center">
// // // // // //           <div className="w-full md:w-1/2 h-64">
// // // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // // //               <RadialBarChart 
// // // // // //                 cx="50%" 
// // // // // //                 cy="50%" 
// // // // // //                 innerRadius="20%" 
// // // // // //                 outerRadius="90%" 
// // // // // //                 barSize={20} 
// // // // // //                 data={[{ name: 'Score', value: userData.creditScore - 300, fill: scoreFill() }]}
// // // // // //                 startAngle={180} 
// // // // // //                 endAngle={0}
// // // // // //               >
// // // // // //                 <RadialBar
// // // // // //                   background
// // // // // //                   clockWise
// // // // // //                   dataKey="value"
// // // // // //                   cornerRadius={10}
// // // // // //                   fill={scoreFill()}
// // // // // //                 />
// // // // // //                 <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold">
// // // // // //                   {userData.creditScore}
// // // // // //                 </text>
// // // // // //               </RadialBarChart>
// // // // // //             </ResponsiveContainer>
// // // // // //           </div>
// // // // // //           <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-4 md:mt-0">
// // // // // //             <h4 className="font-medium text-lg mb-2">Your Credit Score</h4>
// // // // // //             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
// // // // // //               <div 
// // // // // //                 className="h-2.5 rounded-full" 
// // // // // //                 style={{ 
// // // // // //                   width: `${((userData.creditScore - 300) / 550) * 100}%`,
// // // // // //                   backgroundColor: scoreFill()
// // // // // //                 }}
// // // // // //               ></div>
// // // // // //             </div>
// // // // // //             <div className="flex justify-between text-xs text-gray-500">
// // // // // //               <span>300</span>
// // // // // //               <span>850</span>
// // // // // //             </div>
// // // // // //             <div className="mt-4">
// // // // // //               <div className="flex items-center mb-1">
// // // // // //                 <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
// // // // // //                 <span>Poor: 300-579</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center mb-1">
// // // // // //                 <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
// // // // // //                 <span>Fair: 580-669</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center mb-1">
// // // // // //                 <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
// // // // // //                 <span>Good: 670-739</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center mb-1">
// // // // // //                 <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
// // // // // //                 <span>Very Good: 740-799</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center">
// // // // // //                 <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
// // // // // //                 <span>Excellent: 800-850</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div> */}

// // // // // // <NewCheckerCards/>
// // // // // //       {/* Credit Utilization Visualization */}
// // // // // //       <div className="bg-white rounded-lg shadow p-6">
// // // // // //         <h3 className="text-lg font-medium mb-4">Credit Utilization</h3>
// // // // // //         <div className="flex flex-col md:flex-row items-center">
// // // // // //           <div className="w-full md:w-1/3 h-48">
// // // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // // //               <RadialBarChart 
// // // // // //                 cx="50%" 
// // // // // //                 cy="50%" 
// // // // // //                 innerRadius="60%" 
// // // // // //                 outerRadius="90%" 
// // // // // //                 barSize={20} 
// // // // // //                 data={utilizationData}
// // // // // //                 startAngle={180} 
// // // // // //                 endAngle={-180}
// // // // // //               >
// // // // // //                 <RadialBar
// // // // // //                   background={{ fill: '#d1d5db' }}
// // // // // //                   clockWise
// // // // // //                   dataKey="value"
// // // // // //                   cornerRadius={10}
// // // // // //                 />
// // // // // //                 <text 
// // // // // //                   x="50%" 
// // // // // //                   y="50%" 
// // // // // //                   textAnchor="middle" 
// // // // // //                   dominantBaseline="middle" 
// // // // // //                   className="text-2xl font-bold"
// // // // // //                   fill={getUtilizationColor(userData.utilizationPercentage)}
// // // // // //                 >
// // // // // //                   {userData.utilizationPercentage}%
// // // // // //                 </text>
// // // // // //               </RadialBarChart>
// // // // // //             </ResponsiveContainer>
// // // // // //           </div>
// // // // // //           <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0">
// // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // //               <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                 <p className="text-sm text-gray-600">Current Balance</p>
// // // // // //                 <p className="text-2xl font-semibold text-indigo-600">
// // // // // //                   ${userData.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //               <div className="bg-gray-50 p-4 rounded-lg">
// // // // // //                 <p className="text-sm text-gray-600">Available Credit</p>
// // // // // //                 <p className="text-2xl font-semibold text-green-600">
// // // // // //                   ${userData.availableCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="mt-4">
// // // // // //               <p className="text-sm text-gray-600 mb-2">Credit limit: ${userData.creditLimit.toLocaleString('en-US')}</p>
// // // // // //               <div className="w-full bg-gray-200 rounded-full h-2.5">
// // // // // //                 <div 
// // // // // //                   className="h-2.5 rounded-full" 
// // // // // //                   style={{ 
// // // // // //                     width: `${userData.utilizationPercentage}%`,
// // // // // //                     backgroundColor: getUtilizationColor(userData.utilizationPercentage)
// // // // // //                   }}
// // // // // //                 ></div>
// // // // // //               </div>
// // // // // //               <p className="text-xs text-gray-500 mt-2">
// // // // // //                 Keep your credit utilization below 30% for a better credit score
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Spending Category Distribution */}
// // // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // //         <div className="bg-white rounded-lg shadow p-6">
// // // // // //           <h3 className="text-lg font-medium mb-4">Spending by Category</h3>
// // // // // //           <div className="h-64">
// // // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // // //               <PieChart>
// // // // // //                 <Pie
// // // // // //                   data={categoryData}
// // // // // //                   cx="50%"
// // // // // //                   cy="50%"
// // // // // //                   labelLine={false}
// // // // // //                   outerRadius={80}
// // // // // //                   fill="#8884d8"
// // // // // //                   dataKey="value"
// // // // // //                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
// // // // // //                 >
// // // // // //                   {categoryData.map((entry, index) => (
// // // // // //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // //                   ))}
// // // // // //                 </Pie>
// // // // // //                 <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // // //                 <Legend />
// // // // // //               </PieChart>
// // // // // //             </ResponsiveContainer>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Monthly Spending Trend */}
// // // // // //         <div className="bg-white rounded-lg shadow p-6">
// // // // // //           <h3 className="text-lg font-medium mb-4">Monthly Spending Trend</h3>
// // // // // //           <div className="h-64">
// // // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // // //               <LineChart
// // // // // //                 data={userData.monthlySpending}
// // // // // //                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // // //               >
// // // // // //                 <CartesianGrid strokeDasharray="3 3" />
// // // // // //                 <XAxis dataKey="month" />
// // // // // //                 <YAxis />
// // // // // //                 <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // // //                 <Line 
// // // // // //                   type="monotone" 
// // // // // //                   dataKey="amount" 
// // // // // //                   stroke="#8884d8" 
// // // // // //                   activeDot={{ r: 8 }} 
// // // // // //                   strokeWidth={2}
// // // // // //                 />
// // // // // //               </LineChart>
// // // // // //             </ResponsiveContainer>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Transaction Breakdown */}
// // // // // //       <div className="bg-white rounded-lg shadow p-6">
// // // // // //         <h3 className="text-lg font-medium mb-4">Recent Transactions Breakdown</h3>
// // // // // //         <div className="h-64">
// // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // //             <BarChart
// // // // // //               data={userData.recentTransactions}
// // // // // //               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // // //             >
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="merchant" />
// // // // // //               <YAxis />
// // // // // //               <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // // //               <Bar dataKey="amount" fill="#8884d8">
// // // // // //                 {userData.recentTransactions.map((entry, index) => (
// // // // // //                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // //                 ))}
// // // // // //               </Bar>
// // // // // //             </BarChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import CreditScoreDashboard from "@/pages/Home/component/Features/NewCheckerCard";
// // // // // import { useState} from "react";
// // // // // import { 
// // // // //   BarChart, Bar, PieChart, Pie, LineChart, Line, 
// // // // //   XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
// // // // //   ResponsiveContainer, Cell, RadialBarChart, RadialBar 
// // // // // } from "recharts";

// // // // // export default function CreditCardDashboardGraphics() {
// // // // //   // Sample data - you would replace this with your actual data
// // // // //   const [userData] = useState({
// // // // //     username: "Default User",
// // // // //     creditScore: 742,
// // // // //     accountNumber: "****-****-****-1234",
// // // // //     balance: 0.0,
// // // // //     creditLimit: 0.0,
// // // // //     availableCredit: 0.0,
// // // // //     utilizationPercentage: 0, // balance / creditLimit * 100
// // // // //     recentTransactions: [
// // // // //       { id: 1, merchant: "Amazon", date: "Apr 20, 2025", amount: 0.0, category: "Shopping" },
// // // // //       { id: 2, merchant: "Starbucks", date: "Apr 19, 2025", amount: 0.0, category: "Food & Drink" },
// // // // //       { id: 3, merchant: "Uber", date: "Apr 19, 2025", amount: 0.0, category: "Transportation" },
// // // // //       { id: 4, merchant: "Netflix", date: "Apr 18, 2025", amount: 0.0, category: "Entertainment" },
// // // // //       { id: 5, merchant: "Grocery Store", date: "Apr 17, 2025", amount: 0.0, category: "Groceries" },
// // // // //     ],
// // // // //     monthlySpending: [
// // // // //       { month: "Nov", amount: 0.0 },
// // // // //       { month: "Dec", amount: 0.0 },
// // // // //       { month: "Jan", amount: 0.0 },
// // // // //       { month: "Feb", amount: 0.0 },
// // // // //       { month: "Mar", amount: 0.0 },
// // // // //       { month: "Apr", amount: 0.0 },
// // // // //     ]
// // // // //   });

// // // // //   // Calculate category totals for pie chart
// // // // //   const categoryData = userData.recentTransactions.reduce((acc, transaction) => {
// // // // //     const existingCategory = acc.find(item => item.name === transaction.category);
// // // // //     if (existingCategory) {
// // // // //       existingCategory.value += transaction.amount;
// // // // //     } else {
// // // // //       acc.push({ name: transaction.category, value: transaction.amount });
// // // // //     }
// // // // //     return acc;
// // // // //   }, []);

// // // // //   // Colors for pie chart
// // // // //   const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

// // // // //   // Credit utilization gauge calculation
// // // // //   const utilizationData = [
// // // // //     { name: 'Utilization', value: userData.utilizationPercentage, fill: getUtilizationColor(userData.utilizationPercentage) }
// // // // //   ];

// // // // //   function getUtilizationColor(percentage) {
// // // // //     if (percentage < 30) return '#4ade80'; // Green for good utilization
// // // // //     if (percentage < 70) return '#facc15'; // Yellow for moderate
// // // // //     return '#ef4444'; // Red for high utilization
// // // // //   }

// // // // //   // Credit score gauge calculation
// // // // //   const scoreRangeData = [
// // // // //     { name: 'Poor', value: 300, fill: '#ef4444' },
// // // // //     { name: 'Fair', value: 280, fill: '#f97316' },
// // // // //     { name: 'Good', value: 90, fill: '#facc15' },
// // // // //     { name: 'Very Good', value: 90, fill: '#22c55e' },
// // // // //     { name: 'Excellent', value: 90, fill: '#10b981' }
// // // // //   ];

// // // // //   const scoreFill = () => {
// // // // //     const score = userData.creditScore;
// // // // //     if (score < 580) return '#ef4444';
// // // // //     if (score < 670) return '#f97316';
// // // // //     if (score < 740) return '#facc15';
// // // // //     if (score < 800) return '#22c55e';
// // // // //     return '#10b981';
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full space-y-8">
      
// // // // //       {/* Credit Score Visualization */}
// // // // //       {/* <div className="bg-white rounded-lg shadow p-6">
// // // // //         <h3 className="text-lg font-medium mb-4">Credit Score</h3>
// // // // //         <div className="flex flex-col md:flex-row items-center">
// // // // //           <div className="w-full md:w-1/2 h-64">
// // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // //               <RadialBarChart 
// // // // //                 cx="50%" 
// // // // //                 cy="50%" 
// // // // //                 innerRadius="20%" 
// // // // //                 outerRadius="90%" 
// // // // //                 barSize={20} 
// // // // //                 data={[{ name: 'Score', value: userData.creditScore - 300, fill: scoreFill() }]}
// // // // //                 startAngle={180} 
// // // // //                 endAngle={0}
// // // // //               >
// // // // //                 <RadialBar
// // // // //                   background
// // // // //                   clockWise
// // // // //                   dataKey="value"
// // // // //                   cornerRadius={10}
// // // // //                   fill={scoreFill()}
// // // // //                 />
// // // // //                 <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold">
// // // // //                   {userData.creditScore}
// // // // //                 </text>
// // // // //               </RadialBarChart>
// // // // //             </ResponsiveContainer>
// // // // //           </div>
// // // // //           <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-4 md:mt-0">
// // // // //             <h4 className="font-medium text-lg mb-2">Your Credit Score</h4>
// // // // //             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
// // // // //               <div 
// // // // //                 className="h-2.5 rounded-full" 
// // // // //                 style={{ 
// // // // //                   width: `${((userData.creditScore - 300) / 550) * 100}%`,
// // // // //                   backgroundColor: scoreFill()
// // // // //                 }}
// // // // //               ></div>
// // // // //             </div>
// // // // //             <div className="flex justify-between text-xs text-gray-500">
// // // // //               <span>300</span>
// // // // //               <span>850</span>
// // // // //             </div>
// // // // //             <div className="mt-4">
// // // // //               <div className="flex items-center mb-1">
// // // // //                 <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
// // // // //                 <span>Poor: 300-579</span>
// // // // //               </div>
// // // // //               <div className="flex items-center mb-1">
// // // // //                 <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
// // // // //                 <span>Fair: 580-669</span>
// // // // //               </div>
// // // // //               <div className="flex items-center mb-1">
// // // // //                 <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
// // // // //                 <span>Good: 670-739</span>
// // // // //               </div>
// // // // //               <div className="flex items-center mb-1">
// // // // //                 <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
// // // // //                 <span>Very Good: 740-799</span>
// // // // //               </div>
// // // // //               <div className="flex items-center">
// // // // //                 <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
// // // // //                 <span>Excellent: 800-850</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div> */}

// // // // // <CreditScoreDashboard/>
// // // // //       {/* Credit Utilization Visualization */}
// // // // //       <div className="bg-white rounded-lg shadow p-6">
// // // // //         <h3 className="text-lg font-medium mb-4">Credit Utilization</h3>
// // // // //         <div className="flex flex-col md:flex-row items-center">
// // // // //           <div className="w-full md:w-1/3 h-48">
// // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // //               <RadialBarChart 
// // // // //                 cx="50%" 
// // // // //                 cy="50%" 
// // // // //                 innerRadius="60%" 
// // // // //                 outerRadius="90%" 
// // // // //                 barSize={20} 
// // // // //                 data={utilizationData}
// // // // //                 startAngle={180} 
// // // // //                 endAngle={-180}
// // // // //               >
// // // // //                 <RadialBar
// // // // //                   background={{ fill: '#d1d5db' }}
// // // // //                   clockWise
// // // // //                   dataKey="value"
// // // // //                   cornerRadius={10}
// // // // //                 />
// // // // //                 <text 
// // // // //                   x="50%" 
// // // // //                   y="50%" 
// // // // //                   textAnchor="middle" 
// // // // //                   dominantBaseline="middle" 
// // // // //                   className="text-2xl font-bold"
// // // // //                   fill={getUtilizationColor(userData.utilizationPercentage)}
// // // // //                 >
// // // // //                   {userData.utilizationPercentage}%
// // // // //                 </text>
// // // // //               </RadialBarChart>
// // // // //             </ResponsiveContainer>
// // // // //           </div>
// // // // //           <div className="w-full md:w-2/3 pl-0 md:pl-6 mt-4 md:mt-0">
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //               <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                 <p className="text-sm text-gray-600">Current Balance</p>
// // // // //                 <p className="text-2xl font-semibold text-indigo-600">
// // // // //                   ${userData.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
// // // // //                 </p>
// // // // //               </div>
// // // // //               <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                 <p className="text-sm text-gray-600">Available Credit</p>
// // // // //                 <p className="text-2xl font-semibold text-green-600">
// // // // //                   ${userData.availableCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="mt-4">
// // // // //               <p className="text-sm text-gray-600 mb-2">Credit limit: ${userData.creditLimit.toLocaleString('en-US')}</p>
// // // // //               <div className="w-full bg-gray-200 rounded-full h-2.5">
// // // // //                 <div 
// // // // //                   className="h-2.5 rounded-full" 
// // // // //                   style={{ 
// // // // //                     width: `${userData.utilizationPercentage}%`,
// // // // //                     backgroundColor: getUtilizationColor(userData.utilizationPercentage)
// // // // //                   }}
// // // // //                 ></div>
// // // // //               </div>
// // // // //               <p className="text-xs text-gray-500 mt-2">
// // // // //                 Keep your credit utilization below 30% for a better credit score
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Spending Category Distribution */}
// // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // //         <div className="bg-white rounded-lg shadow p-6">
// // // // //           <h3 className="text-lg font-medium mb-4">Spending by Category</h3>
// // // // //           <div className="h-64">
// // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // //               <PieChart>
// // // // //                 <Pie
// // // // //                   data={categoryData}
// // // // //                   cx="50%"
// // // // //                   cy="50%"
// // // // //                   labelLine={false}
// // // // //                   outerRadius={80}
// // // // //                   fill="#8884d8"
// // // // //                   dataKey="value"
// // // // //                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
// // // // //                 >
// // // // //                   {categoryData.map((entry, index) => (
// // // // //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // //                   ))}
// // // // //                 </Pie>
// // // // //                 <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // //                 <Legend />
// // // // //               </PieChart>
// // // // //             </ResponsiveContainer>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Monthly Spending Trend */}
// // // // //         <div className="bg-white rounded-lg shadow p-6">
// // // // //           <h3 className="text-lg font-medium mb-4">Monthly Spending Trend</h3>
// // // // //           <div className="h-64">
// // // // //             <ResponsiveContainer width="100%" height="100%">
// // // // //               <LineChart
// // // // //                 data={userData.monthlySpending}
// // // // //                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // //               >
// // // // //                 <CartesianGrid strokeDasharray="3 3" />
// // // // //                 <XAxis dataKey="month" />
// // // // //                 <YAxis />
// // // // //                 <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // //                 <Line 
// // // // //                   type="monotone" 
// // // // //                   dataKey="amount" 
// // // // //                   stroke="#8884d8" 
// // // // //                   activeDot={{ r: 8 }} 
// // // // //                   strokeWidth={2}
// // // // //                 />
// // // // //               </LineChart>
// // // // //             </ResponsiveContainer>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Transaction Breakdown */}
// // // // //       <div className="bg-white rounded-lg shadow p-6">
// // // // //         <h3 className="text-lg font-medium mb-4">Recent Transactions Breakdown</h3>
// // // // //         <div className="h-64">
// // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // //             <BarChart
// // // // //               data={userData.recentTransactions}
// // // // //               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
// // // // //             >
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="merchant" />
// // // // //               <YAxis />
// // // // //               <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
// // // // //               <Bar dataKey="amount" fill="#8884d8">
// // // // //                 {userData.recentTransactions.map((entry, index) => (
// // // // //                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // //                 ))}
// // // // //               </Bar>
// // // // //             </BarChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState } from "react"
// // // // import { useAccount, useBalance, useSignMessage } from "wagmi"
// // // // import { formatEther } from "viem"
// // // // import {
// // // //   CreditCard,
// // // //   Wallet,
// // // //   Eye,
// // // //   EyeOff,
// // // //   Settings,
// // // //   TrendingUp,
// // // //   Shield,
// // // //   Pause,
// // // //   Play,
// // // //   Lock,
// // // //   Unlock,
// // // //   DollarSign,
// // // //   Activity,
// // // //   Bell,
// // // //   User,
// // // //   Copy,
// // // //   Check,
// // // // } from "lucide-react"

// // // // const CreditCardDashboard = () => {
// // // //   const { address, isConnected, isConnecting } = useAccount()
// // // //   const { data: balance } = useBalance({ address })
// // // //   const { signMessageAsync } = useSignMessage()

// // // //   // Dashboard state
// // // //   const [showBalance, setShowBalance] = useState(true)
// // // //   const [notifications, setNotifications] = useState(3)
// // // //   const [copied, setCopied] = useState(false)
// // // //   const [selectedCard, setSelectedCard] = useState(null)

// // // //   // Virtual cards data with individual states
// // // //   const [cards, setCards] = useState([
// // // //     {
// // // //       id: 1,
// // // //       name: "Coinbase",
// // // //       type: "Crypto Exchange",
// // // //       balance: 2450.75,
// // // //       isActive: true,
// // // //       isFrozen: false,
// // // //       spendingLimit: 5000,
// // // //       color: "from-blue-500 to-blue-600",
// // // //       icon: "₿",
// // // //       lastTransaction: "2 hours ago",
// // // //       cardNumber: "**** **** **** 1234",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       name: "CashApp",
// // // //       type: "Digital Wallet",
// // // //       balance: 1250.3,
// // // //       isActive: true,
// // // //       isFrozen: false,
// // // //       spendingLimit: 3000,
// // // //       color: "from-green-500 to-green-600",
// // // //       icon: "$",
// // // //       lastTransaction: "5 hours ago",
// // // //       cardNumber: "**** **** **** 5678",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       name: "PayPal",
// // // //       type: "Payment Service",
// // // //       balance: 890.45,
// // // //       isActive: false,
// // // //       isFrozen: false,
// // // //       spendingLimit: 2500,
// // // //       color: "from-blue-400 to-indigo-500",
// // // //       icon: "P",
// // // //       lastTransaction: "1 day ago",
// // // //       cardNumber: "**** **** **** 9012",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       name: "Binance",
// // // //       type: "Crypto Platform",
// // // //       balance: 3200.8,
// // // //       isActive: true,
// // // //       isFrozen: true,
// // // //       spendingLimit: 7500,
// // // //       color: "from-purple-500 to-purple-600",
// // // //       icon: "N",
// // // //       lastTransaction: "3 hours ago",
// // // //       cardNumber: "**** **** **** 3456",
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       name: "TrustWallet",
// // // //       type: "Mobile Wallet",
// // // //       balance: 1680.25,
// // // //       isActive: true,
// // // //       isFrozen: false,
// // // //       spendingLimit: 4000,
// // // //       color: "from-cyan-500 to-blue-500",
// // // //       icon: "T",
// // // //       lastTransaction: "6 hours ago",
// // // //       cardNumber: "**** **** **** 7890",
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       name: "Robinhood",
// // // //       type: "Investment App",
// // // //       balance: 5420.15,
// // // //       isActive: true,
// // // //       isFrozen: false,
// // // //       spendingLimit: 10000,
// // // //       color: "from-emerald-500 to-teal-500",
// // // //       icon: "R",
// // // //       lastTransaction: "1 hour ago",
// // // //       cardNumber: "**** **** **** 2468",
// // // //     },
// // // //   ])

// // // //   // Copy address to clipboard
// // // //   const copyAddress = async () => {
// // // //     if (address) {
// // // //       await navigator.clipboard.writeText(address)
// // // //       setCopied(true)
// // // //       setTimeout(() => setCopied(false), 2000)
// // // //     }
// // // //   }

// // // //   // Card control functions
// // // //   const toggleCardStatus = (cardId) => {
// // // //     setCards(cards.map((card) => (card.id === cardId ? { ...card, isActive: !card.isActive } : card)))
// // // //   }

// // // //   const toggleCardFreeze = (cardId) => {
// // // //     setCards(cards.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)))
// // // //   }

// // // //   const updateSpendingLimit = (cardId, newLimit) => {
// // // //     setCards(cards.map((card) => (card.id === cardId ? { ...card, spendingLimit: newLimit } : card)))
// // // //   }

// // // //   // Calculate total balance across all cards
// // // //   const totalCardBalance = cards.reduce((sum, card) => sum + card.balance, 0)

// // // //   if (!isConnected) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
// // // //         <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
// // // //           <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect Your Wallet</h2>
// // // //           <p className="text-gray-600 mb-6">Please connect your wallet to access the dashboard</p>
// // // //           <appkit-button />
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
// // // //       {/* Header */}
// // // //       <header className="bg-white shadow-sm border-b border-gray-200">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="flex justify-between items-center h-16">
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="flex items-center space-x-2">
// // // //                 <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
// // // //                   <Wallet className="w-5 h-5 text-white" />
// // // //                 </div>
// // // //                 <h1 className="text-xl font-bold text-gray-900">EaseWithdraw</h1>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex items-center space-x-4">
// // // //               <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
// // // //                 <Bell className="w-5 h-5" />
// // // //                 {notifications > 0 && (
// // // //                   <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
// // // //                     {notifications}
// // // //                   </span>
// // // //                 )}
// // // //               </button>

// // // //               <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
// // // //                 <User className="w-4 h-4 text-gray-600" />
// // // //                 <span className="text-sm font-medium text-gray-700">
// // // //                   {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not Connected"}
// // // //                 </span>
// // // //                 <button onClick={copyAddress} className="p-1 hover:bg-gray-200 rounded transition-colors">
// // // //                   {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3 text-gray-500" />}
// // // //                 </button>
// // // //               </div>

// // // //               <appkit-button />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // //         {/* Wallet Overview */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // // //           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
// // // //             <div className="flex items-center justify-between mb-4">
// // // //               <h3 className="text-sm font-medium text-gray-500">Wallet Balance</h3>
// // // //               <button
// // // //                 onClick={() => setShowBalance(!showBalance)}
// // // //                 className="p-1 hover:bg-gray-100 rounded transition-colors"
// // // //               >
// // // //                 {showBalance ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
// // // //               </button>
// // // //             </div>
// // // //             <div className="flex items-center space-x-2">
// // // //               <span className="text-2xl font-bold text-gray-900">
// // // //                 {showBalance
// // // //                   ? balance
// // // //                     ? `${Number.parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
// // // //                     : "0.0000 ETH"
// // // //                   : "••••••••"}
// // // //               </span>
// // // //             </div>
// // // //             <p className="text-xs text-gray-500 mt-1">
// // // //               {address ? `${address.slice(0, 10)}...${address.slice(-8)}` : "No address"}
// // // //             </p>
// // // //           </div>

// // // //           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
// // // //             <div className="flex items-center justify-between mb-4">
// // // //               <h3 className="text-sm font-medium text-gray-500">Total Card Balance</h3>
// // // //               <TrendingUp className="w-4 h-4 text-green-500" />
// // // //             </div>
// // // //             <div className="flex items-center space-x-2">
// // // //               <span className="text-2xl font-bold text-gray-900">
// // // //                 ${showBalance ? totalCardBalance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••••"}
// // // //               </span>
// // // //             </div>
// // // //             <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
// // // //           </div>

// // // //           <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
// // // //             <div className="flex items-center justify-between mb-4">
// // // //               <h3 className="text-sm font-medium text-gray-500">Active Cards</h3>
// // // //               <Shield className="w-4 h-4 text-blue-500" />
// // // //             </div>
// // // //             <div className="flex items-center space-x-2">
// // // //               <span className="text-2xl font-bold text-gray-900">
// // // //                 {cards.filter((card) => card.isActive).length}/{cards.length}
// // // //               </span>
// // // //             </div>
// // // //             <p className="text-xs text-gray-500 mt-1">Cards currently active</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Virtual Cards Grid */}
// // // //         <div className="mb-8">
// // // //           <div className="flex items-center justify-between mb-6">
// // // //             <h2 className="text-xl font-bold text-gray-900">Virtual Cards</h2>
// // // //             <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
// // // //               <CreditCard className="w-4 h-4" />
// // // //               <span>Add New Card</span>
// // // //             </button>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {cards.map((card) => (
// // // //               <div
// // // //                 key={card.id}
// // // //                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
// // // //               >
// // // //                 {/* Card Header */}
// // // //                 <div className={`bg-gradient-to-r ${card.color} p-6 text-white relative`}>
// // // //                   <div className="flex justify-between items-start mb-4">
// // // //                     <div>
// // // //                       <h3 className="text-lg font-bold">{card.name}</h3>
// // // //                       <p className="text-sm opacity-90">{card.type}</p>
// // // //                     </div>
// // // //                     <div className="text-2xl font-bold opacity-80">{card.icon}</div>
// // // //                   </div>

// // // //                   <div className="mb-2">
// // // //                     <p className="text-sm opacity-90">Balance</p>
// // // //                     <p className="text-xl font-bold">
// // // //                       ${showBalance ? card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••"}
// // // //                     </p>
// // // //                   </div>

// // // //                   <p className="text-sm opacity-90">{card.cardNumber}</p>

// // // //                   {/* Status indicators */}
// // // //                   <div className="absolute top-4 right-4 flex space-x-1">
// // // //                     {!card.isActive && <div className="w-2 h-2 bg-red-400 rounded-full"></div>}
// // // //                     {card.isFrozen && <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>}
// // // //                     {card.isActive && !card.isFrozen && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Card Controls */}
// // // //                 <div className="p-6">
// // // //                   <div className="flex items-center justify-between mb-4">
// // // //                     <span className="text-sm text-gray-500">Last transaction</span>
// // // //                     <span className="text-sm font-medium text-gray-700">{card.lastTransaction}</span>
// // // //                   </div>

// // // //                   <div className="space-y-3">
// // // //                     {/* Activate/Deactivate */}
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-sm font-medium text-gray-700">Status</span>
// // // //                       <button
// // // //                         onClick={() => toggleCardStatus(card.id)}
// // // //                         className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
// // // //                           card.isActive
// // // //                             ? "bg-green-100 text-green-700 hover:bg-green-200"
// // // //                             : "bg-red-100 text-red-700 hover:bg-red-200"
// // // //                         }`}
// // // //                       >
// // // //                         {card.isActive ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
// // // //                         <span>{card.isActive ? "Active" : "Inactive"}</span>
// // // //                       </button>
// // // //                     </div>

// // // //                     {/* Freeze/Unfreeze */}
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-sm font-medium text-gray-700">Security</span>
// // // //                       <button
// // // //                         onClick={() => toggleCardFreeze(card.id)}
// // // //                         className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
// // // //                           card.isFrozen
// // // //                             ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
// // // //                             : "bg-blue-100 text-blue-700 hover:bg-blue-200"
// // // //                         }`}
// // // //                       >
// // // //                         {card.isFrozen ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
// // // //                         <span>{card.isFrozen ? "Frozen" : "Active"}</span>
// // // //                       </button>
// // // //                     </div>

// // // //                     {/* Spending Limit */}
// // // //                     <div className="flex items-center justify-between">
// // // //                       <span className="text-sm font-medium text-gray-700">Limit</span>
// // // //                       <div className="flex items-center space-x-2">
// // // //                         <DollarSign className="w-3 h-3 text-gray-400" />
// // // //                         <input
// // // //                           type="number"
// // // //                           value={card.spendingLimit}
// // // //                           onChange={(e) => updateSpendingLimit(card.id, Number.parseFloat(e.target.value) || 0)}
// // // //                           className="w-20 text-xs text-right border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Card Actions */}
// // // //                   <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-100">
// // // //                     <button className="flex-1 flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
// // // //                       <Activity className="w-4 h-4" />
// // // //                       <span>History</span>
// // // //                     </button>
// // // //                     <button className="flex-1 flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
// // // //                       <Settings className="w-4 h-4" />
// // // //                       <span>Settings</span>
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Quick Actions */}
// // // //         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
// // // //           <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // // //             <button className="flex flex-col items-center space-y-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
// // // //               <CreditCard className="w-6 h-6 text-blue-600" />
// // // //               <span className="text-sm font-medium text-blue-700">Add Card</span>
// // // //             </button>
// // // //             <button className="flex flex-col items-center space-y-2 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
// // // //               <TrendingUp className="w-6 h-6 text-green-600" />
// // // //               <span className="text-sm font-medium text-green-700">View Analytics</span>
// // // //             </button>
// // // //             <button className="flex flex-col items-center space-y-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
// // // //               <Shield className="w-6 h-6 text-purple-600" />
// // // //               <span className="text-sm font-medium text-purple-700">Security</span>
// // // //             </button>
// // // //             <button className="flex flex-col items-center space-y-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
// // // //               <Settings className="w-6 h-6 text-gray-600" />
// // // //               <span className="text-sm font-medium text-gray-700">Settings</span>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default CreditCardDashboard




// // // import { useState } from "react"
// // // import { useAccount, useBalance, useSignMessage, useSendTransaction } from "wagmi"
// // // import { formatEther } from "viem"
// // // import {
// // //   CreditCard,
// // //   Wallet,
// // //   Eye,
// // //   EyeOff,
// // //   Settings,
// // //   TrendingUp,
// // //   Shield,
// // //   Lock,
// // //   Unlock,
// // //   DollarSign,
// // //   Activity,
// // //   Bell,
// // //   User,
// // //   Copy,
// // //   Check,
// // //   Plus,
// // //   Star,
// // //   Gift,
// // //   Zap,
// // //   Download,
// // //   Share2,
// // //   CheckCircle,
// // //   XCircle,
// // //   Sparkles,
// // //   Crown,
// // //   Gem,
// // //   X,
// // //   RefreshCw,
// // //   Globe,
// // //   Smartphone,
// // //   ShoppingBag,
// // //   Coffee,
// // //   Car,
// // //   Home,
// // //   Gamepad2,
// // // } from "lucide-react"

// // // const CreditCardDashboard = () => {
// // //   const { address, isConnected, isConnecting } = useAccount()
// // //   const { data: balance, refetch: refetchBalance } = useBalance({ address })
// // //   const { signMessageAsync } = useSignMessage()
// // //   const { sendTransaction } = useSendTransaction()

// // //   // Enhanced state management
// // //   const [showBalance, setShowBalance] = useState(true)
// // //   const [notifications, setNotifications] = useState([
// // //     { id: 1, type: "success", message: "Card payment successful", time: "2 min ago" },
// // //     { id: 2, type: "warning", message: "Spending limit reached on Binance card", time: "1 hour ago" },
// // //     { id: 3, type: "info", message: "New cashback reward available", time: "3 hours ago" },
// // //   ])
// // //   const [copied, setCopied] = useState(false)
// // //   const [selectedCard, setSelectedCard] = useState(null)
// // //   const [showCardModal, setShowCardModal] = useState(false)
// // //   const [showPlanModal, setShowPlanModal] = useState(false)
// // //   const [showTransactionModal, setShowTransactionModal] = useState(false)
// // //   const [activeTab, setActiveTab] = useState("overview")
// // //   const [isLoading, setIsLoading] = useState(false)
// // //   const [selectedPlan, setSelectedPlan] = useState("premium")

// // //   // Enhanced cards with more realistic data and features
// // //   const [cards, setCards] = useState([
// // //     {
// // //       id: 1,
// // //       name: "Coinbase Pro",
// // //       type: "Crypto Exchange",
// // //       balance: 2450.75,
// // //       isActive: true,
// // //       isFrozen: false,
// // //       spendingLimit: 5000,
// // //       dailySpent: 234.5,
// // //       color: "from-blue-500 via-blue-600 to-indigo-600",
// // //       icon: "₿",
// // //       lastTransaction: "2 hours ago",
// // //       cardNumber: "**** **** **** 1234",
// // //       cvv: "***",
// // //       expiry: "12/27",
// // //       cashback: 2.5,
// // //       monthlyRewards: 45.3,
// // //       plan: "Premium",
// // //       features: ["Crypto rewards", "No foreign fees", "Priority support"],
// // //       transactions: [
// // //         { id: 1, merchant: "Amazon", amount: -89.99, type: "purchase", time: "2 hours ago", category: "shopping" },
// // //         { id: 2, merchant: "Starbucks", amount: -5.5, type: "purchase", time: "5 hours ago", category: "food" },
// // //         { id: 3, merchant: "Cashback Reward", amount: +12.3, type: "reward", time: "1 day ago", category: "reward" },
// // //       ],
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "CashApp Elite",
// // //       type: "Digital Wallet",
// // //       balance: 1250.3,
// // //       isActive: true,
// // //       isFrozen: false,
// // //       spendingLimit: 3000,
// // //       dailySpent: 156.8,
// // //       color: "from-green-500 via-emerald-500 to-teal-500",
// // //       icon: "$",
// // //       lastTransaction: "5 hours ago",
// // //       cardNumber: "**** **** **** 5678",
// // //       cvv: "***",
// // //       expiry: "09/26",
// // //       cashback: 1.8,
// // //       monthlyRewards: 28.9,
// // //       plan: "Standard",
// // //       features: ["Instant transfers", "Stock investing", "Bitcoin rewards"],
// // //       transactions: [
// // //         { id: 1, merchant: "Uber", amount: -25.4, type: "purchase", time: "5 hours ago", category: "transport" },
// // //         {
// // //           id: 2,
// // //           merchant: "Netflix",
// // //           amount: -15.99,
// // //           type: "subscription",
// // //           time: "2 days ago",
// // //           category: "entertainment",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "PayPal Business",
// // //       type: "Payment Service",
// // //       balance: 890.45,
// // //       isActive: false,
// // //       isFrozen: false,
// // //       spendingLimit: 2500,
// // //       dailySpent: 0,
// // //       color: "from-blue-400 via-indigo-500 to-purple-500",
// // //       icon: "P",
// // //       lastTransaction: "1 day ago",
// // //       cardNumber: "**** **** **** 9012",
// // //       cvv: "***",
// // //       expiry: "03/28",
// // //       cashback: 1.5,
// // //       monthlyRewards: 15.6,
// // //       plan: "Business",
// // //       features: ["Buyer protection", "Global payments", "Invoice tools"],
// // //       transactions: [
// // //         {
// // //           id: 1,
// // //           merchant: "Office Supplies",
// // //           amount: -145.3,
// // //           type: "purchase",
// // //           time: "1 day ago",
// // //           category: "business",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Binance Platinum",
// // //       type: "Crypto Platform",
// // //       balance: 3200.8,
// // //       isActive: true,
// // //       isFrozen: true,
// // //       spendingLimit: 7500,
// // //       dailySpent: 450.2,
// // //       color: "from-purple-500 via-violet-600 to-purple-700",
// // //       icon: "N",
// // //       lastTransaction: "3 hours ago",
// // //       cardNumber: "**** **** **** 3456",
// // //       cvv: "***",
// // //       expiry: "06/29",
// // //       cashback: 3.0,
// // //       monthlyRewards: 89.4,
// // //       plan: "Platinum",
// // //       features: ["Crypto loans", "High yield", "Premium support"],
// // //       transactions: [
// // //         {
// // //           id: 1,
// // //           merchant: "Tesla Supercharger",
// // //           amount: -45.8,
// // //           type: "purchase",
// // //           time: "3 hours ago",
// // //           category: "transport",
// // //         },
// // //         { id: 2, merchant: "Crypto Reward", amount: +25.6, type: "reward", time: "6 hours ago", category: "reward" },
// // //       ],
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "TrustWallet Pro",
// // //       type: "Mobile Wallet",
// // //       balance: 1680.25,
// // //       isActive: true,
// // //       isFrozen: false,
// // //       spendingLimit: 4000,
// // //       dailySpent: 89.3,
// // //       color: "from-cyan-500 via-blue-500 to-indigo-500",
// // //       icon: "T",
// // //       lastTransaction: "6 hours ago",
// // //       cardNumber: "**** **** **** 7890",
// // //       cvv: "***",
// // //       expiry: "11/27",
// // //       cashback: 2.0,
// // //       monthlyRewards: 34.7,
// // //       plan: "Pro",
// // //       features: ["DeFi access", "NFT storage", "Multi-chain support"],
// // //       transactions: [
// // //         { id: 1, merchant: "Gas Station", amount: -65.4, type: "purchase", time: "6 hours ago", category: "transport" },
// // //         { id: 2, merchant: "DeFi Yield", amount: +18.9, type: "reward", time: "12 hours ago", category: "defi" },
// // //       ],
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "Robinhood Gold",
// // //       type: "Investment App",
// // //       balance: 5420.15,
// // //       isActive: true,
// // //       isFrozen: false,
// // //       spendingLimit: 10000,
// // //       dailySpent: 1250.6,
// // //       color: "from-emerald-500 via-green-500 to-teal-600",
// // //       icon: "R",
// // //       lastTransaction: "1 hour ago",
// // //       cardNumber: "**** **** **** 2468",
// // //       cvv: "***",
// // //       expiry: "08/28",
// // //       cashback: 2.2,
// // //       monthlyRewards: 156.8,
// // //       plan: "Gold",
// // //       features: ["Stock rewards", "Margin trading", "Research tools"],
// // //       transactions: [
// // //         {
// // //           id: 1,
// // //           merchant: "Apple Store",
// // //           amount: -1299.0,
// // //           type: "purchase",
// // //           time: "1 hour ago",
// // //           category: "electronics",
// // //         },
// // //         {
// // //           id: 2,
// // //           merchant: "Stock Dividend",
// // //           amount: +45.3,
// // //           type: "dividend",
// // //           time: "4 hours ago",
// // //           category: "investment",
// // //         },
// // //       ],
// // //     },
// // //   ])

// // //   // Plan options
// // //   const plans = [
// // //     {
// // //       id: "basic",
// // //       name: "Basic",
// // //       price: 0,
// // //       features: ["2 Virtual Cards", "Basic Support", "Standard Limits"],
// // //       color: "from-gray-400 to-gray-500",
// // //       popular: false,
// // //     },
// // //     {
// // //       id: "premium",
// // //       name: "Premium",
// // //       price: 9.99,
// // //       features: ["6 Virtual Cards", "Priority Support", "Higher Limits", "Cashback Rewards"],
// // //       color: "from-blue-500 to-purple-600",
// // //       popular: true,
// // //     },
// // //     {
// // //       id: "platinum",
// // //       name: "Platinum",
// // //       price: 19.99,
// // //       features: ["Unlimited Cards", "24/7 Support", "No Limits", "Premium Rewards", "Crypto Integration"],
// // //       color: "from-purple-600 to-pink-600",
// // //       popular: false,
// // //     },
// // //   ]

// // //   // Enhanced functions with wallet integration
// // //   const copyAddress = async () => {
// // //     if (address) {
// // //       await navigator.clipboard.writeText(address)
// // //       setCopied(true)
// // //       setTimeout(() => setCopied(false), 2000)
// // //       addNotification("success", "Wallet address copied to clipboard")
// // //     }
// // //   }

// // //   const addNotification = (type, message) => {
// // //     const newNotification = {
// // //       id: Date.now(),
// // //       type,
// // //       message,
// // //       time: "now",
// // //     }
// // //     setNotifications((prev) => [newNotification, ...prev.slice(0, 4)])
// // //   }

// // //   const toggleCardStatus = async (cardId) => {
// // //     setIsLoading(true)
// // //     try {
// // //       // Simulate wallet signature for security
// // //       const message = `Toggle card status for card ${cardId}`
// // //       await signMessageAsync({ message })

// // //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isActive: !card.isActive } : card)))

// // //       const card = cards.find((c) => c.id === cardId)
// // //       addNotification("success", `${card.name} ${card.isActive ? "deactivated" : "activated"} successfully`)
// // //     } catch (error) {
// // //       addNotification("error", "Failed to update card status")
// // //     }
// // //     setIsLoading(false)
// // //   }

// // //   const toggleCardFreeze = async (cardId) => {
// // //     setIsLoading(true)
// // //     try {
// // //       const message = `Freeze/unfreeze card ${cardId}`
// // //       await signMessageAsync({ message })

// // //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)))

// // //       const card = cards.find((c) => c.id === cardId)
// // //       addNotification("success", `${card.name} ${card.isFrozen ? "unfrozen" : "frozen"} successfully`)
// // //     } catch (error) {
// // //       addNotification("error", "Failed to update card security status")
// // //     }
// // //     setIsLoading(false)
// // //   }

// // //   const updateSpendingLimit = async (cardId, newLimit) => {
// // //     setIsLoading(true)
// // //     try {
// // //       const message = `Update spending limit for card ${cardId} to $${newLimit}`
// // //       await signMessageAsync({ message })

// // //       setCards(cards.map((card) => (card.id === cardId ? { ...card, spendingLimit: newLimit } : card)))

// // //       addNotification("success", "Spending limit updated successfully")
// // //     } catch (error) {
// // //       addNotification("error", "Failed to update spending limit")
// // //     }
// // //     setIsLoading(false)
// // //   }

// // //   const handleCardPayment = async (cardId, amount) => {
// // //     setIsLoading(true)
// // //     try {
// // //       const message = `Authorize payment of $${amount} using card ${cardId}`
// // //       await signMessageAsync({ message })

// // //       // Simulate payment processing
// // //       setTimeout(() => {
// // //         addNotification("success", `Payment of $${amount} processed successfully`)
// // //         setIsLoading(false)
// // //       }, 2000)
// // //     } catch (error) {
// // //       addNotification("error", "Payment authorization failed")
// // //       setIsLoading(false)
// // //     }
// // //   }

// // //   const upgradePlan = async (planId) => {
// // //     setIsLoading(true)
// // //     try {
// // //       const plan = plans.find((p) => p.id === planId)
// // //       const message = `Upgrade to ${plan.name} plan for $${plan.price}/month`
// // //       await signMessageAsync({ message })

// // //       setSelectedPlan(planId)
// // //       addNotification("success", `Successfully upgraded to ${plan.name} plan`)
// // //       setShowPlanModal(false)
// // //     } catch (error) {
// // //       addNotification("error", "Plan upgrade failed")
// // //     }
// // //     setIsLoading(false)
// // //   }

// // //   // Calculate statistics
// // //   const totalCardBalance = cards.reduce((sum, card) => sum + card.balance, 0)
// // //   const totalDailySpent = cards.reduce((sum, card) => sum + card.dailySpent, 0)
// // //   const totalMonthlyRewards = cards.reduce((sum, card) => sum + card.monthlyRewards, 0)
// // //   const activeCards = cards.filter((card) => card.isActive).length

// // //   const getCategoryIcon = (category) => {
// // //     const icons = {
// // //       shopping: ShoppingBag,
// // //       food: Coffee,
// // //       transport: Car,
// // //       entertainment: Gamepad2,
// // //       business: Home,
// // //       electronics: Smartphone,
// // //       reward: Gift,
// // //       defi: Zap,
// // //       investment: TrendingUp,
// // //       subscription: Globe,
// // //     }
// // //     return icons[category] || DollarSign
// // //   }

// // //   if (!isConnected) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
// // //         <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center max-w-md w-full border border-white/20">
// // //           <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
// // //             <Wallet className="w-10 h-10 text-white" />
// // //           </div>
// // //           <h2 className="text-3xl font-bold text-white mb-4">Welcome to EaseWithdraw</h2>
// // //           <p className="text-gray-300 mb-8">Connect your wallet to access your premium virtual card dashboard</p>
// // //           <div className="space-y-4">
// // //             <appkit-button />
// // //             <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
// // //               <div className="flex items-center space-x-1">
// // //                 <Shield className="w-4 h-4" />
// // //                 <span>Secure</span>
// // //               </div>
// // //               <div className="flex items-center space-x-1">
// // //                 <Zap className="w-4 h-4" />
// // //                 <span>Fast</span>
// // //               </div>
// // //               <div className="flex items-center space-x-1">
// // //                 <Star className="w-4 h-4" />
// // //                 <span>Premium</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // //       {/* Enhanced Header */}
// // //       <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex justify-between items-center h-16">
// // //             <div className="flex items-center space-x-4">
// // //               <div className="flex items-center space-x-3">
// // //                 <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
// // //                   <Sparkles className="w-6 h-6 text-white" />
// // //                 </div>
// // //                 <div>
// // //                   <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// // //                     EaseWithdraw
// // //                   </h1>
// // //                   <p className="text-xs text-gray-500">Premium Dashboard</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="flex items-center space-x-4">
// // //               <button
// // //                 onClick={() => setShowPlanModal(true)}
// // //                 className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
// // //               >
// // //                 <Crown className="w-4 h-4" />
// // //                 <span className="text-sm font-medium">Upgrade</span>
// // //               </button>

// // //               <div className="relative">
// // //                 <button
// // //                   onClick={() => setActiveTab(activeTab === "notifications" ? "overview" : "notifications")}
// // //                   className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
// // //                 >
// // //                   <Bell className="w-5 h-5" />
// // //                   {notifications.length > 0 && (
// // //                     <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
// // //                       {notifications.length}
// // //                     </span>
// // //                   )}
// // //                 </button>
// // //               </div>

// // //               <div className="flex items-center space-x-3 bg-gray-100/80 rounded-xl px-4 py-2 backdrop-blur-sm">
// // //                 <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
// // //                   <User className="w-4 h-4 text-white" />
// // //                 </div>
// // //                 <div className="text-sm">
// // //                   <p className="font-medium text-gray-800">
// // //                     {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not Connected"}
// // //                   </p>
// // //                   <p className="text-xs text-gray-500">Premium Member</p>
// // //                 </div>
// // //                 <button onClick={copyAddress} className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
// // //                   {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
// // //                 </button>
// // //               </div>

// // //               <appkit-button />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //         {/* Enhanced Stats Overview */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// // //             <div className="flex items-center justify-between mb-4">
// // //               <div className="flex items-center space-x-3">
// // //                 <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
// // //                   <Wallet className="w-6 h-6 text-white" />
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="text-sm font-medium text-gray-600">Wallet Balance</h3>
// // //                   <p className="text-xs text-gray-400">Connected Wallet</p>
// // //                 </div>
// // //               </div>
// // //               <button
// // //                 onClick={() => setShowBalance(!showBalance)}
// // //                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //               >
// // //                 {showBalance ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
// // //               </button>
// // //             </div>
// // //             <div className="space-y-2">
// // //               <span className="text-2xl font-bold text-gray-900">
// // //                 {showBalance
// // //                   ? balance
// // //                     ? `${Number.parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
// // //                     : "0.0000 ETH"
// // //                   : "••••••••"}
// // //               </span>
// // //               <div className="flex items-center space-x-2 text-sm">
// // //                 <span className="text-green-600 font-medium">+5.2%</span>
// // //                 <span className="text-gray-500">vs last month</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// // //             <div className="flex items-center space-x-3 mb-4">
// // //               <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
// // //                 <CreditCard className="w-6 h-6 text-white" />
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-sm font-medium text-gray-600">Total Balance</h3>
// // //                 <p className="text-xs text-gray-400">All Cards Combined</p>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-2">
// // //               <span className="text-2xl font-bold text-gray-900">
// // //                 ${showBalance ? totalCardBalance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••••"}
// // //               </span>
// // //               <div className="flex items-center space-x-2 text-sm">
// // //                 <span className="text-green-600 font-medium">+12.5%</span>
// // //                 <span className="text-gray-500">vs last month</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// // //             <div className="flex items-center space-x-3 mb-4">
// // //               <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
// // //                 <TrendingUp className="w-6 h-6 text-white" />
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-sm font-medium text-gray-600">Monthly Rewards</h3>
// // //                 <p className="text-xs text-gray-400">Cashback Earned</p>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-2">
// // //               <span className="text-2xl font-bold text-gray-900">${totalMonthlyRewards.toFixed(2)}</span>
// // //               <div className="flex items-center space-x-2 text-sm">
// // //                 <span className="text-green-600 font-medium">+8.3%</span>
// // //                 <span className="text-gray-500">vs last month</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// // //             <div className="flex items-center space-x-3 mb-4">
// // //               <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
// // //                 <Activity className="w-6 h-6 text-white" />
// // //               </div>
// // //               <div>
// // //                 <h3 className="text-sm font-medium text-gray-600">Today's Spending</h3>
// // //                 <p className="text-xs text-gray-400">Across All Cards</p>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-2">
// // //               <span className="text-2xl font-bold text-gray-900">${totalDailySpent.toFixed(2)}</span>
// // //               <div className="flex items-center space-x-2 text-sm">
// // //                 <span className="text-orange-600 font-medium">
// // //                   {activeCards}/{cards.length}
// // //                 </span>
// // //                 <span className="text-gray-500">active cards</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Enhanced Virtual Cards Grid */}
// // //         <div className="mb-8">
// // //           <div className="flex items-center justify-between mb-6">
// // //             <div>
// // //               <h2 className="text-2xl font-bold text-gray-900">Your Virtual Cards</h2>
// // //               <p className="text-gray-600">Manage your premium virtual card collection</p>
// // //             </div>
// // //             <div className="flex items-center space-x-3">
// // //               <button
// // //                 onClick={() => refetchBalance()}
// // //                 className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
// // //               >
// // //                 <RefreshCw className="w-4 h-4" />
// // //                 <span>Refresh</span>
// // //               </button>
// // //               <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
// // //                 <Plus className="w-4 h-4" />
// // //                 <span>Add New Card</span>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {cards.map((card) => (
// // //               <div
// // //                 key={card.id}
// // //                 className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
// // //               >
// // //                 {/* Enhanced Card Header */}
// // //                 <div className={`bg-gradient-to-br ${card.color} p-6 text-white relative overflow-hidden`}>
// // //                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
// // //                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

// // //                   <div className="relative z-10">
// // //                     <div className="flex justify-between items-start mb-4">
// // //                       <div>
// // //                         <h3 className="text-xl font-bold">{card.name}</h3>
// // //                         <p className="text-sm opacity-90">{card.type}</p>
// // //                         <div className="flex items-center space-x-2 mt-1">
// // //                           <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{card.plan}</span>
// // //                           <span className="text-xs">{card.cashback}% Cashback</span>
// // //                         </div>
// // //                       </div>
// // //                       <div className="text-3xl font-bold opacity-80">{card.icon}</div>
// // //                     </div>

// // //                     <div className="mb-4">
// // //                       <p className="text-sm opacity-90">Available Balance</p>
// // //                       <p className="text-2xl font-bold">
// // //                         ${showBalance ? card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••"}
// // //                       </p>
// // //                     </div>

// // //                     <div className="flex justify-between items-center text-sm">
// // //                       <span>{card.cardNumber}</span>
// // //                       <span>{card.expiry}</span>
// // //                     </div>

// // //                     {/* Status indicators */}
// // //                     <div className="absolute top-4 right-4 flex space-x-1">
// // //                       {!card.isActive && (
// // //                         <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" title="Inactive"></div>
// // //                       )}
// // //                       {card.isFrozen && (
// // //                         <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" title="Frozen"></div>
// // //                       )}
// // //                       {card.isActive && !card.isFrozen && (
// // //                         <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" title="Active"></div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Enhanced Card Body */}
// // //                 <div className="p-6 space-y-4">
// // //                   {/* Spending Progress */}
// // //                   <div>
// // //                     <div className="flex justify-between items-center mb-2">
// // //                       <span className="text-sm font-medium text-gray-700">Daily Spending</span>
// // //                       <span className="text-sm text-gray-500">
// // //                         ${card.dailySpent.toFixed(2)} / ${card.spendingLimit.toFixed(2)}
// // //                       </span>
// // //                     </div>
// // //                     <div className="w-full bg-gray-200 rounded-full h-2">
// // //                       <div
// // //                         className={`bg-gradient-to-r ${card.color} h-2 rounded-full transition-all duration-300`}
// // //                         style={{ width: `${Math.min((card.dailySpent / card.spendingLimit) * 100, 100)}%` }}
// // //                       ></div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Quick Stats */}
// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div className="text-center p-3 bg-gray-50 rounded-xl">
// // //                       <p className="text-xs text-gray-500">Monthly Rewards</p>
// // //                       <p className="text-lg font-bold text-green-600">${card.monthlyRewards}</p>
// // //                     </div>
// // //                     <div className="text-center p-3 bg-gray-50 rounded-xl">
// // //                       <p className="text-xs text-gray-500">Last Activity</p>
// // //                       <p className="text-sm font-medium text-gray-700">{card.lastTransaction}</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Card Controls */}
// // //                   <div className="space-y-3">
// // //                     <div className="flex items-center justify-between">
// // //                       <span className="text-sm font-medium text-gray-700">Card Status</span>
// // //                       <button
// // //                         onClick={() => toggleCardStatus(card.id)}
// // //                         disabled={isLoading}
// // //                         className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
// // //                           card.isActive
// // //                             ? "bg-green-100 text-green-700 hover:bg-green-200"
// // //                             : "bg-red-100 text-red-700 hover:bg-red-200"
// // //                         } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// // //                       >
// // //                         {card.isActive ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
// // //                         <span>{card.isActive ? "Active" : "Inactive"}</span>
// // //                       </button>
// // //                     </div>

// // //                     <div className="flex items-center justify-between">
// // //                       <span className="text-sm font-medium text-gray-700">Security</span>
// // //                       <button
// // //                         onClick={() => toggleCardFreeze(card.id)}
// // //                         disabled={isLoading}
// // //                         className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
// // //                           card.isFrozen
// // //                             ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
// // //                             : "bg-blue-100 text-blue-700 hover:bg-blue-200"
// // //                         } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// // //                       >
// // //                         {card.isFrozen ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
// // //                         <span>{card.isFrozen ? "Frozen" : "Active"}</span>
// // //                       </button>
// // //                     </div>

// // //                     <div className="flex items-center justify-between">
// // //                       <span className="text-sm font-medium text-gray-700">Spending Limit</span>
// // //                       <div className="flex items-center space-x-2">
// // //                         <DollarSign className="w-4 h-4 text-gray-400" />
// // //                         <input
// // //                           type="number"
// // //                           value={card.spendingLimit}
// // //                           onChange={(e) => updateSpendingLimit(card.id, Number.parseFloat(e.target.value) || 0)}
// // //                           className="w-24 text-sm text-right border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Enhanced Action Buttons */}
// // //                   <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
// // //                     <button
// // //                       onClick={() => {
// // //                         setSelectedCard(card)
// // //                         setShowTransactionModal(true)
// // //                       }}
// // //                       className="flex flex-col items-center space-y-1 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
// // //                     >
// // //                       <Activity className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
// // //                       <span className="text-xs font-medium text-gray-700">History</span>
// // //                     </button>
// // //                     <button
// // //                       onClick={() => {
// // //                         setSelectedCard(card)
// // //                         setShowCardModal(true)
// // //                       }}
// // //                       className="flex flex-col items-center space-y-1 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
// // //                     >
// // //                       <Settings className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
// // //                       <span className="text-xs font-medium text-gray-700">Settings</span>
// // //                     </button>
// // //                     <button
// // //                       onClick={() => handleCardPayment(card.id, 50)}
// // //                       disabled={!card.isActive || card.isFrozen || isLoading}
// // //                       className="flex flex-col items-center space-y-1 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
// // //                     >
// // //                       <Zap className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors" />
// // //                       <span className="text-xs font-medium text-green-700">Pay</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Enhanced Quick Actions */}
// // //         <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50">
// // //           <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
// // //             {[
// // //               { icon: Plus, label: "Add Card", color: "from-blue-500 to-cyan-500", action: () => {} },
// // //               { icon: TrendingUp, label: "Analytics", color: "from-green-500 to-emerald-500", action: () => {} },
// // //               { icon: Shield, label: "Security", color: "from-purple-500 to-violet-500", action: () => {} },
// // //               { icon: Settings, label: "Settings", color: "from-gray-500 to-slate-500", action: () => {} },
// // //               { icon: Download, label: "Export", color: "from-orange-500 to-red-500", action: () => {} },
// // //               { icon: Share2, label: "Share", color: "from-pink-500 to-rose-500", action: () => {} },
// // //             ].map((action, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={action.action}
// // //                 className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100"
// // //               >
// // //                 <div
// // //                   className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
// // //                 >
// // //                   <action.icon className="w-6 h-6 text-white" />
// // //                 </div>
// // //                 <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
// // //                   {action.label}
// // //                 </span>
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Enhanced Modals */}
// // //       {showCardModal && selectedCard && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <div className="flex items-center justify-between">
// // //                 <h3 className="text-xl font-bold text-gray-900">{selectedCard.name} Settings</h3>
// // //                 <button
// // //                   onClick={() => setShowCardModal(false)}
// // //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //                 >
// // //                   <X className="w-5 h-5 text-gray-500" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <div className="p-6 space-y-6">
// // //               <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-6 text-white`}>
// // //                 <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
// // //                 <p className="text-sm opacity-90 mb-4">{selectedCard.cardNumber}</p>
// // //                 <div className="grid grid-cols-2 gap-4">
// // //                   <div>
// // //                     <p className="text-xs opacity-75">Balance</p>
// // //                     <p className="text-lg font-bold">${selectedCard.balance.toFixed(2)}</p>
// // //                   </div>
// // //                   <div>
// // //                     <p className="text-xs opacity-75">Cashback Rate</p>
// // //                     <p className="text-lg font-bold">{selectedCard.cashback}%</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-4">
// // //                 <h5 className="font-semibold text-gray-900">Card Features</h5>
// // //                 <div className="grid gap-2">
// // //                   {selectedCard.features.map((feature, index) => (
// // //                     <div key={index} className="flex items-center space-x-2">
// // //                       <CheckCircle className="w-4 h-4 text-green-500" />
// // //                       <span className="text-sm text-gray-700">{feature}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="flex space-x-3">
// // //                 <button
// // //                   onClick={() => toggleCardStatus(selectedCard.id)}
// // //                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
// // //                     selectedCard.isActive
// // //                       ? "bg-red-100 text-red-700 hover:bg-red-200"
// // //                       : "bg-green-100 text-green-700 hover:bg-green-200"
// // //                   }`}
// // //                 >
// // //                   {selectedCard.isActive ? "Deactivate Card" : "Activate Card"}
// // //                 </button>
// // //                 <button
// // //                   onClick={() => toggleCardFreeze(selectedCard.id)}
// // //                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
// // //                     selectedCard.isFrozen
// // //                       ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
// // //                       : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
// // //                   }`}
// // //                 >
// // //                   {selectedCard.isFrozen ? "Unfreeze Card" : "Freeze Card"}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {showTransactionModal && selectedCard && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <div className="flex items-center justify-between">
// // //                 <h3 className="text-xl font-bold text-gray-900">{selectedCard.name} Transactions</h3>
// // //                 <button
// // //                   onClick={() => setShowTransactionModal(false)}
// // //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //                 >
// // //                   <X className="w-5 h-5 text-gray-500" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="space-y-4">
// // //                 {selectedCard.transactions.map((transaction) => {
// // //                   const IconComponent = getCategoryIcon(transaction.category)
// // //                   return (
// // //                     <div key={transaction.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
// // //                       <div
// // //                         className={`w-10 h-10 rounded-lg flex items-center justify-center ${
// // //                           transaction.type === "purchase"
// // //                             ? "bg-red-100"
// // //                             : transaction.type === "reward"
// // //                               ? "bg-green-100"
// // //                               : "bg-blue-100"
// // //                         }`}
// // //                       >
// // //                         <IconComponent
// // //                           className={`w-5 h-5 ${
// // //                             transaction.type === "purchase"
// // //                               ? "text-red-600"
// // //                               : transaction.type === "reward"
// // //                                 ? "text-green-600"
// // //                                 : "text-blue-600"
// // //                           }`}
// // //                         />
// // //                       </div>
// // //                       <div className="flex-1">
// // //                         <p className="font-medium text-gray-900">{transaction.merchant}</p>
// // //                         <p className="text-sm text-gray-500">{transaction.time}</p>
// // //                       </div>
// // //                       <div className="text-right">
// // //                         <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
// // //                           {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
// // //                         </p>
// // //                         <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
// // //                       </div>
// // //                     </div>
// // //                   )
// // //                 })}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {showPlanModal && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <div className="flex items-center justify-between">
// // //                 <h3 className="text-2xl font-bold text-gray-900">Choose Your Plan</h3>
// // //                 <button
// // //                   onClick={() => setShowPlanModal(false)}
// // //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// // //                 >
// // //                   <X className="w-5 h-5 text-gray-500" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                 {plans.map((plan) => (
// // //                   <div
// // //                     key={plan.id}
// // //                     className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
// // //                       plan.popular
// // //                         ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
// // //                         : "border-gray-200 bg-white hover:border-gray-300"
// // //                     } ${selectedPlan === plan.id ? "ring-4 ring-purple-200" : ""}`}
// // //                   >
// // //                     {plan.popular && (
// // //                       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
// // //                         <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
// // //                           Most Popular
// // //                         </span>
// // //                       </div>
// // //                     )}

// // //                     <div className="text-center mb-6">
// // //                       <div
// // //                         className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
// // //                       >
// // //                         {plan.id === "basic" && <Shield className="w-8 h-8 text-white" />}
// // //                         {plan.id === "premium" && <Crown className="w-8 h-8 text-white" />}
// // //                         {plan.id === "platinum" && <Gem className="w-8 h-8 text-white" />}
// // //                       </div>
// // //                       <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
// // //                       <div className="text-3xl font-bold text-gray-900">
// // //                         ${plan.price}
// // //                         <span className="text-sm font-normal text-gray-500">/month</span>
// // //                       </div>
// // //                     </div>

// // //                     <div className="space-y-3 mb-6">
// // //                       {plan.features.map((feature, index) => (
// // //                         <div key={index} className="flex items-center space-x-2">
// // //                           <CheckCircle className="w-4 h-4 text-green-500" />
// // //                           <span className="text-sm text-gray-700">{feature}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>

// // //                     <button
// // //                       onClick={() => upgradePlan(plan.id)}
// // //                       disabled={isLoading || selectedPlan === plan.id}
// // //                       className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
// // //                         selectedPlan === plan.id
// // //                           ? "bg-green-100 text-green-700 cursor-default"
// // //                           : plan.popular
// // //                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
// // //                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // //                       } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// // //                     >
// // //                       {selectedPlan === plan.id ? "Current Plan" : `Upgrade to ${plan.name}`}
// // //                     </button>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Notifications Panel */}
// // //       {activeTab === "notifications" && (
// // //         <div className="fixed top-16 right-4 w-80 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 z-40 max-h-96 overflow-y-auto">
// // //           <div className="p-4 border-b border-gray-200">
// // //             <h3 className="font-semibold text-gray-900">Notifications</h3>
// // //           </div>
// // //           <div className="p-4 space-y-3">
// // //             {notifications.map((notification) => (
// // //               <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
// // //                 <div
// // //                   className={`w-2 h-2 rounded-full mt-2 ${
// // //                     notification.type === "success"
// // //                       ? "bg-green-500"
// // //                       : notification.type === "warning"
// // //                         ? "bg-yellow-500"
// // //                         : notification.type === "error"
// // //                           ? "bg-red-500"
// // //                           : "bg-blue-500"
// // //                   }`}
// // //                 ></div>
// // //                 <div className="flex-1">
// // //                   <p className="text-sm text-gray-900">{notification.message}</p>
// // //                   <p className="text-xs text-gray-500">{notification.time}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Loading Overlay */}
// // //       {isLoading && (
// // //         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
// // //           <div className="bg-white rounded-2xl p-6 shadow-2xl">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
// // //               <span className="text-gray-700">Processing...</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default CreditCardDashboard








// // import { useState, useEffect } from "react"
// // import { useAccount, useBalance, useSignMessage, useSendTransaction } from "wagmi"
// // import { formatEther } from "viem"
// // import {
// //   CreditCard,
// //   Wallet,
// //   Eye,
// //   EyeOff,
// //   Settings,
// //   TrendingUp,
// //   Shield,
// //   Lock,
// //   Unlock,
// //   DollarSign,
// //   Activity,
// //   Bell,
// //   User,
// //   Copy,
// //   Check,
// //   Plus,
// //   Star,
// //   Gift,
// //   Zap,
// //   Download,
// //   Share2,
// //   CheckCircle,
// //   XCircle,
// //   Sparkles,
// //   Crown,
// //   Gem,
// //   X,
// //   RefreshCw,
// //   Globe,
// //   Smartphone,
// //   ShoppingBag,
// //   Coffee,
// //   Car,
// //   Home,
// //   Gamepad2,
// //   Menu,
// //   ChevronDown,
// //   ChevronUp,
// //   Filter,
// //   Search,
// //   CreditCardIcon as CardIcon,
// // } from "lucide-react"

// // const CreditCardDashboard = () => {
// //   const { address, isConnected, isConnecting } = useAccount()
// //   const { data: balance, refetch: refetchBalance } = useBalance({ address })
// //   const { signMessageAsync } = useSignMessage()
// //   const { sendTransaction } = useSendTransaction()

// //   // Enhanced responsive state management
// //   const [showBalance, setShowBalance] = useState(true)
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
// //   const [notifications, setNotifications] = useState([
// //     { id: 1, type: "success", message: "Card payment successful", time: "2 min ago", read: false },
// //     { id: 2, type: "warning", message: "Spending limit reached on Binance card", time: "1 hour ago", read: false },
// //     { id: 3, type: "info", message: "New cashback reward available", time: "3 hours ago", read: true },
// //   ])
// //   const [copied, setCopied] = useState(false)
// //   const [selectedCard, setSelectedCard] = useState(null)
// //   const [showCardModal, setShowCardModal] = useState(false)
// //   const [showPlanModal, setShowPlanModal] = useState(false)
// //   const [showTransactionModal, setShowTransactionModal] = useState(false)
// //   const [showNotificationPanel, setShowNotificationPanel] = useState(false)
// //   const [activeTab, setActiveTab] = useState("overview")
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [selectedPlan, setSelectedPlan] = useState("premium")
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [filterCategory, setFilterCategory] = useState("all")
// //   const [expandedCard, setExpandedCard] = useState(null)

// //   // Screen size detection
// //   const [screenSize, setScreenSize] = useState("desktop")

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 640) {
// //         setScreenSize("mobile")
// //       } else if (window.innerWidth < 1024) {
// //         setScreenSize("tablet")
// //       } else {
// //         setScreenSize("desktop")
// //       }
// //     }

// //     handleResize()
// //     window.addEventListener("resize", handleResize)
// //     return () => window.removeEventListener("resize", handleResize)
// //   }, [])

// //   // Enhanced cards with more realistic data and features
// //   const [cards, setCards] = useState([
// //     {
// //       id: 1,
// //       name: "Coinbase Pro",
// //       type: "Crypto Exchange",
// //       balance: 2450.75,
// //       isActive: true,
// //       isFrozen: false,
// //       spendingLimit: 5000,
// //       dailySpent: 234.5,
// //       color: "from-blue-500 via-blue-600 to-indigo-600",
// //       icon: "₿",
// //       lastTransaction: "2 hours ago",
// //       cardNumber: "**** **** **** 1234",
// //       cvv: "***",
// //       expiry: "12/27",
// //       cashback: 2.5,
// //       monthlyRewards: 45.3,
// //       plan: "Premium",
// //       features: ["Crypto rewards", "No foreign fees", "Priority support"],
// //       transactions: [
// //         { id: 1, merchant: "Amazon", amount: -89.99, type: "purchase", time: "2 hours ago", category: "shopping" },
// //         { id: 2, merchant: "Starbucks", amount: -5.5, type: "purchase", time: "5 hours ago", category: "food" },
// //         { id: 3, merchant: "Cashback Reward", amount: +12.3, type: "reward", time: "1 day ago", category: "reward" },
// //       ],
// //     },
// //     {
// //       id: 2,
// //       name: "CashApp Elite",
// //       type: "Digital Wallet",
// //       balance: 1250.3,
// //       isActive: true,
// //       isFrozen: false,
// //       spendingLimit: 3000,
// //       dailySpent: 156.8,
// //       color: "from-green-500 via-emerald-500 to-teal-500",
// //       icon: "$",
// //       lastTransaction: "5 hours ago",
// //       cardNumber: "**** **** **** 5678",
// //       cvv: "***",
// //       expiry: "09/26",
// //       cashback: 1.8,
// //       monthlyRewards: 28.9,
// //       plan: "Standard",
// //       features: ["Instant transfers", "Stock investing", "Bitcoin rewards"],
// //       transactions: [
// //         { id: 1, merchant: "Uber", amount: -25.4, type: "purchase", time: "5 hours ago", category: "transport" },
// //         {
// //           id: 2,
// //           merchant: "Netflix",
// //           amount: -15.99,
// //           type: "subscription",
// //           time: "2 days ago",
// //           category: "entertainment",
// //         },
// //       ],
// //     },
// //     {
// //       id: 3,
// //       name: "PayPal Business",
// //       type: "Payment Service",
// //       balance: 890.45,
// //       isActive: false,
// //       isFrozen: false,
// //       spendingLimit: 2500,
// //       dailySpent: 0,
// //       color: "from-blue-400 via-indigo-500 to-purple-500",
// //       icon: "P",
// //       lastTransaction: "1 day ago",
// //       cardNumber: "**** **** **** 9012",
// //       cvv: "***",
// //       expiry: "03/28",
// //       cashback: 1.5,
// //       monthlyRewards: 15.6,
// //       plan: "Business",
// //       features: ["Buyer protection", "Global payments", "Invoice tools"],
// //       transactions: [
// //         {
// //           id: 1,
// //           merchant: "Office Supplies",
// //           amount: -145.3,
// //           type: "purchase",
// //           time: "1 day ago",
// //           category: "business",
// //         },
// //       ],
// //     },
// //     {
// //       id: 4,
// //       name: "Binance Platinum",
// //       type: "Crypto Platform",
// //       balance: 3200.8,
// //       isActive: true,
// //       isFrozen: true,
// //       spendingLimit: 7500,
// //       dailySpent: 450.2,
// //       color: "from-purple-500 via-violet-600 to-purple-700",
// //       icon: "N",
// //       lastTransaction: "3 hours ago",
// //       cardNumber: "**** **** **** 3456",
// //       cvv: "***",
// //       expiry: "06/29",
// //       cashback: 3.0,
// //       monthlyRewards: 89.4,
// //       plan: "Platinum",
// //       features: ["Crypto loans", "High yield", "Premium support"],
// //       transactions: [
// //         {
// //           id: 1,
// //           merchant: "Tesla Supercharger",
// //           amount: -45.8,
// //           type: "purchase",
// //           time: "3 hours ago",
// //           category: "transport",
// //         },
// //         { id: 2, merchant: "Crypto Reward", amount: +25.6, type: "reward", time: "6 hours ago", category: "reward" },
// //       ],
// //     },
// //     {
// //       id: 5,
// //       name: "TrustWallet Pro",
// //       type: "Mobile Wallet",
// //       balance: 1680.25,
// //       isActive: true,
// //       isFrozen: false,
// //       spendingLimit: 4000,
// //       dailySpent: 89.3,
// //       color: "from-cyan-500 via-blue-500 to-indigo-500",
// //       icon: "T",
// //       lastTransaction: "6 hours ago",
// //       cardNumber: "**** **** **** 7890",
// //       cvv: "***",
// //       expiry: "11/27",
// //       cashback: 2.0,
// //       monthlyRewards: 34.7,
// //       plan: "Pro",
// //       features: ["DeFi access", "NFT storage", "Multi-chain support"],
// //       transactions: [
// //         { id: 1, merchant: "Gas Station", amount: -65.4, type: "purchase", time: "6 hours ago", category: "transport" },
// //         { id: 2, merchant: "DeFi Yield", amount: +18.9, type: "reward", time: "12 hours ago", category: "defi" },
// //       ],
// //     },
// //     {
// //       id: 6,
// //       name: "Robinhood Gold",
// //       type: "Investment App",
// //       balance: 5420.15,
// //       isActive: true,
// //       isFrozen: false,
// //       spendingLimit: 10000,
// //       dailySpent: 1250.6,
// //       color: "from-emerald-500 via-green-500 to-teal-600",
// //       icon: "R",
// //       lastTransaction: "1 hour ago",
// //       cardNumber: "**** **** **** 2468",
// //       cvv: "***",
// //       expiry: "08/28",
// //       cashback: 2.2,
// //       monthlyRewards: 156.8,
// //       plan: "Gold",
// //       features: ["Stock rewards", "Margin trading", "Research tools"],
// //       transactions: [
// //         {
// //           id: 1,
// //           merchant: "Apple Store",
// //           amount: -1299.0,
// //           type: "purchase",
// //           time: "1 hour ago",
// //           category: "electronics",
// //         },
// //         {
// //           id: 2,
// //           merchant: "Stock Dividend",
// //           amount: +45.3,
// //           type: "dividend",
// //           time: "4 hours ago",
// //           category: "investment",
// //         },
// //       ],
// //     },
// //   ])

// //   // Plan options
// //   const plans = [
// //     {
// //       id: "basic",
// //       name: "Basic",
// //       price: 0,
// //       features: ["2 Virtual Cards", "Basic Support", "Standard Limits"],
// //       color: "from-gray-400 to-gray-500",
// //       popular: false,
// //     },
// //     {
// //       id: "premium",
// //       name: "Premium",
// //       price: 9.99,
// //       features: ["6 Virtual Cards", "Priority Support", "Higher Limits", "Cashback Rewards"],
// //       color: "from-blue-500 to-purple-600",
// //       popular: true,
// //     },
// //     {
// //       id: "platinum",
// //       name: "Platinum",
// //       price: 19.99,
// //       features: ["Unlimited Cards", "24/7 Support", "No Limits", "Premium Rewards", "Crypto Integration"],
// //       color: "from-purple-600 to-pink-600",
// //       popular: false,
// //     },
// //   ]

// //   // Enhanced functions with wallet integration
// //   const copyAddress = async () => {
// //     if (address) {
// //       await navigator.clipboard.writeText(address)
// //       setCopied(true)
// //       setTimeout(() => setCopied(false), 2000)
// //       addNotification("success", "Wallet address copied to clipboard")
// //     }
// //   }

// //   const addNotification = (type, message) => {
// //     const newNotification = {
// //       id: Date.now(),
// //       type,
// //       message,
// //       time: "now",
// //       read: false,
// //     }
// //     setNotifications((prev) => [newNotification, ...prev.slice(0, 4)])
// //   }

// //   const markNotificationAsRead = (id) => {
// //     setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
// //   }

// //   const clearAllNotifications = () => {
// //     setNotifications([])
// //     setShowNotificationPanel(false)
// //   }

// //   const toggleCardStatus = async (cardId) => {
// //     setIsLoading(true)
// //     try {
// //       // Simulate wallet signature for security
// //       const message = `Toggle card status for card ${cardId}`
// //       await signMessageAsync({ message })

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isActive: !card.isActive } : card)))

// //       const card = cards.find((c) => c.id === cardId)
// //       addNotification("success", `${card.name} ${card.isActive ? "deactivated" : "activated"} successfully`)
// //     } catch (error) {
// //       addNotification("error", "Failed to update card status")
// //     }
// //     setIsLoading(false)
// //   }

// //   const toggleCardFreeze = async (cardId) => {
// //     setIsLoading(true)
// //     try {
// //       const message = `Freeze/unfreeze card ${cardId}`
// //       await signMessageAsync({ message })

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)))

// //       const card = cards.find((c) => c.id === cardId)
// //       addNotification("success", `${card.name} ${card.isFrozen ? "unfrozen" : "frozen"} successfully`)
// //     } catch (error) {
// //       addNotification("error", "Failed to update card security status")
// //     }
// //     setIsLoading(false)
// //   }

// //   const updateSpendingLimit = async (cardId, newLimit) => {
// //     if (newLimit < 0) return
// //     setIsLoading(true)
// //     try {
// //       const message = `Update spending limit for card ${cardId} to $${newLimit}`
// //       await signMessageAsync({ message })

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, spendingLimit: newLimit } : card)))

// //       addNotification("success", "Spending limit updated successfully")
// //     } catch (error) {
// //       addNotification("error", "Failed to update spending limit")
// //     }
// //     setIsLoading(false)
// //   }

// //   const handleCardPayment = async (cardId, amount) => {
// //     setIsLoading(true)
// //     try {
// //       const message = `Authorize payment of $${amount} using card ${cardId}`
// //       await signMessageAsync({ message })

// //       // Simulate payment processing
// //       setTimeout(() => {
// //         setCards((prevCards) =>
// //           prevCards.map((card) =>
// //             card.id === cardId
// //               ? {
// //                   ...card,
// //                   balance: card.balance - amount,
// //                   dailySpent: card.dailySpent + amount,
// //                   transactions: [
// //                     {
// //                       id: Date.now(),
// //                       merchant: "Quick Payment",
// //                       amount: -amount,
// //                       type: "purchase",
// //                       time: "now",
// //                       category: "payment",
// //                     },
// //                     ...card.transactions,
// //                   ],
// //                 }
// //               : card,
// //           ),
// //         )
// //         addNotification("success", `Payment of $${amount} processed successfully`)
// //         setIsLoading(false)
// //       }, 2000)
// //     } catch (error) {
// //       addNotification("error", "Payment authorization failed")
// //       setIsLoading(false)
// //     }
// //   }

// //   const upgradePlan = async (planId) => {
// //     setIsLoading(true)
// //     try {
// //       const plan = plans.find((p) => p.id === planId)
// //       const message = `Upgrade to ${plan.name} plan for $${plan.price}/month`
// //       await signMessageAsync({ message })

// //       setSelectedPlan(planId)
// //       addNotification("success", `Successfully upgraded to ${plan.name} plan`)
// //       setShowPlanModal(false)
// //     } catch (error) {
// //       addNotification("error", "Plan upgrade failed")
// //     }
// //     setIsLoading(false)
// //   }

// //   const handleRefresh = async () => {
// //     setIsLoading(true)
// //     try {
// //       await refetchBalance()
// //       addNotification("success", "Data refreshed successfully")
// //     } catch (error) {
// //       addNotification("error", "Failed to refresh data")
// //     }
// //     setIsLoading(false)
// //   }

// //   const handleExportData = () => {
// //     const data = {
// //       cards: cards.map((card) => ({
// //         name: card.name,
// //         balance: card.balance,
// //         monthlyRewards: card.monthlyRewards,
// //         transactions: card.transactions,
// //       })),
// //       totalBalance: totalCardBalance,
// //       exportDate: new Date().toISOString(),
// //     }
// //     const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
// //     const url = URL.createObjectURL(blob)
// //     const a = document.createElement("a")
// //     a.href = url
// //     a.download = "wallet-dashboard-export.json"
// //     a.click()
// //     URL.revokeObjectURL(url)
// //     addNotification("success", "Data exported successfully")
// //   }

// //   const handleShareData = async () => {
// //     if (navigator.share) {
// //       try {
// //         await navigator.share({
// //           title: "EaseWithdraw Dashboard",
// //           text: `My wallet balance: $${totalCardBalance.toFixed(2)}`,
// //           url: window.location.href,
// //         })
// //         addNotification("success", "Shared successfully")
// //       } catch (error) {
// //         addNotification("info", "Share cancelled")
// //       }
// //     } else {
// //       copyAddress()
// //     }
// //   }

// //   // Calculate statistics
// //   const totalCardBalance = cards.reduce((sum, card) => sum + card.balance, 0)
// //   const totalDailySpent = cards.reduce((sum, card) => sum + card.dailySpent, 0)
// //   const totalMonthlyRewards = cards.reduce((sum, card) => sum + card.monthlyRewards, 0)
// //   const activeCards = cards.filter((card) => card.isActive).length
// //   const unreadNotifications = notifications.filter((n) => !n.read).length

// //   const getCategoryIcon = (category) => {
// //     const icons = {
// //       shopping: ShoppingBag,
// //       food: Coffee,
// //       transport: Car,
// //       entertainment: Gamepad2,
// //       business: Home,
// //       electronics: Smartphone,
// //       reward: Gift,
// //       defi: Zap,
// //       investment: TrendingUp,
// //       subscription: Globe,
// //       payment: DollarSign,
// //     }
// //     return icons[category] || DollarSign
// //   }

// //   const filteredCards = cards.filter((card) => {
// //     const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     const matchesFilter =
// //       filterCategory === "all" ||
// //       (filterCategory === "active" && card.isActive) ||
// //       (filterCategory === "inactive" && !card.isActive) ||
// //       (filterCategory === "frozen" && card.isFrozen)
// //     return matchesSearch && matchesFilter
// //   })

// //   if (!isConnected) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
// //         <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-center max-w-sm sm:max-w-md w-full border border-white/20">
// //           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
// //             <Wallet className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
// //           </div>
// //           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Welcome to EaseWithdraw</h2>
// //           <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
// //             Connect your wallet to access your premium virtual card dashboard
// //           </p>
// //           <div className="space-y-4">
// //             <appkit-button />
// //             <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
// //               <div className="flex items-center space-x-1">
// //                 <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
// //                 <span>Secure</span>
// //               </div>
// //               <div className="flex items-center space-x-1">
// //                 <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
// //                 <span>Fast</span>
// //               </div>
// //               <div className="flex items-center space-x-1">
// //                 <Star className="w-3 h-3 sm:w-4 sm:h-4" />
// //                 <span>Premium</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       {/* Enhanced Responsive Header */}
// //       <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center h-14 sm:h-16">
// //             {/* Logo and Mobile Menu */}
// //             <div className="flex items-center space-x-3 sm:space-x-4">
// //               <button
// //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //                 className="sm:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
// //               >
// //                 <Menu className="w-5 h-5" />
// //               </button>

// //               <div className="flex items-center space-x-2 sm:space-x-3">
// //                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
// //                   <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
// //                 </div>
// //                 <div className="hidden sm:block">
// //                   <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //                     EaseWithdraw
// //                   </h1>
// //                   <p className="text-xs text-gray-500">Premium Dashboard</p>
// //                 </div>
// //                 <div className="sm:hidden">
// //                   <h1 className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //                     EaseWithdraw
// //                   </h1>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Desktop Navigation */}
// //             <div className="hidden lg:flex items-center space-x-4">
// //               <button
// //                 onClick={() => setShowPlanModal(true)}
// //                 className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
// //               >
// //                 <Crown className="w-4 h-4" />
// //                 <span className="text-sm font-medium">Upgrade</span>
// //               </button>

// //               <div className="relative">
// //                 <button
// //                   onClick={() => setShowNotificationPanel(!showNotificationPanel)}
// //                   className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
// //                 >
// //                   <Bell className="w-5 h-5" />
// //                   {unreadNotifications > 0 && (
// //                     <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
// //                       {unreadNotifications}
// //                     </span>
// //                   )}
// //                 </button>
// //               </div>

// //               <div className="flex items-center space-x-3 bg-gray-100/80 rounded-xl px-4 py-2 backdrop-blur-sm">
// //                 <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
// //                   <User className="w-4 h-4 text-white" />
// //                 </div>
// //                 <div className="text-sm">
// //                   <p className="font-medium text-gray-800">
// //                     {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not Connected"}
// //                   </p>
// //                   <p className="text-xs text-gray-500">Premium Member</p>
// //                 </div>
// //                 <button onClick={copyAddress} className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
// //                   {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
// //                 </button>
// //               </div>

// //               <appkit-button />
// //             </div>

// //             {/* Mobile Actions */}
// //             <div className="flex lg:hidden items-center space-x-2">
// //               <button
// //                 onClick={() => setShowNotificationPanel(!showNotificationPanel)}
// //                 className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
// //               >
// //                 <Bell className="w-5 h-5" />
// //                 {unreadNotifications > 0 && (
// //                   <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
// //                     {unreadNotifications}
// //                   </span>
// //                 )}
// //               </button>
// //               <appkit-button />
// //             </div>
// //           </div>

// //           {/* Mobile Menu */}
// //           {isMobileMenuOpen && (
// //             <div className="sm:hidden border-t border-gray-200 py-4 space-y-3">
// //               <div className="flex items-center space-x-3 px-2">
// //                 <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
// //                   <User className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div className="flex-1">
// //                   <p className="font-medium text-gray-800 text-sm">
// //                     {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : "Not Connected"}
// //                   </p>
// //                   <p className="text-xs text-gray-500">Premium Member</p>
// //                 </div>
// //                 <button onClick={copyAddress} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
// //                   {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
// //                 </button>
// //               </div>

// //               <button
// //                 onClick={() => {
// //                   setShowPlanModal(true)
// //                   setIsMobileMenuOpen(false)
// //                 }}
// //                 className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
// //               >
// //                 <Crown className="w-4 h-4" />
// //                 <span className="text-sm font-medium">Upgrade Plan</span>
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </header>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// //         {/* Enhanced Responsive Stats Overview */}
// //         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
// //           <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// //             <div className="flex items-center justify-between mb-3 sm:mb-4">
// //               <div className="flex items-center space-x-2 sm:space-x-3">
// //                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
// //                   <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xs sm:text-sm font-medium text-gray-600">Wallet Balance</h3>
// //                   <p className="text-xs text-gray-400 hidden sm:block">Connected Wallet</p>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => setShowBalance(!showBalance)}
// //                 className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //               >
// //                 {showBalance ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
// //               </button>
// //             </div>
// //             <div className="space-y-1 sm:space-y-2">
// //               <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
// //                 {showBalance
// //                   ? balance
// //                     ? `${Number.parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
// //                     : "0.0000 ETH"
// //                   : "••••••••"}
// //               </span>
// //               <div className="flex items-center space-x-2 text-xs sm:text-sm">
// //                 <span className="text-green-600 font-medium">+5.2%</span>
// //                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// //             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
// //               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
// //                 <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
// //               </div>
// //               <div>
// //                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Total Balance</h3>
// //                 <p className="text-xs text-gray-400 hidden sm:block">All Cards Combined</p>
// //               </div>
// //             </div>
// //             <div className="space-y-1 sm:space-y-2">
// //               <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
// //                 ${showBalance ? totalCardBalance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••••"}
// //               </span>
// //               <div className="flex items-center space-x-2 text-xs sm:text-sm">
// //                 <span className="text-green-600 font-medium">+12.5%</span>
// //                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// //             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
// //               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
// //                 <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
// //               </div>
// //               <div>
// //                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Rewards</h3>
// //                 <p className="text-xs text-gray-400 hidden sm:block">Monthly</p>
// //               </div>
// //             </div>
// //             <div className="space-y-1 sm:space-y-2">
// //               <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalMonthlyRewards.toFixed(2)}</span>
// //               <div className="flex items-center space-x-2 text-xs sm:text-sm">
// //                 <span className="text-green-600 font-medium">+8.3%</span>
// //                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
// //             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
// //               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center">
// //                 <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
// //               </div>
// //               <div>
// //                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Today</h3>
// //                 <p className="text-xs text-gray-400 hidden sm:block">Spending</p>
// //               </div>
// //             </div>
// //             <div className="space-y-1 sm:space-y-2">
// //               <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalDailySpent.toFixed(2)}</span>
// //               <div className="flex items-center space-x-2 text-xs sm:text-sm">
// //                 <span className="text-orange-600 font-medium">
// //                   {activeCards}/{cards.length}
// //                 </span>
// //                 <span className="text-gray-500 hidden sm:inline">active</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Search and Filter Bar */}
// //         <div className="mb-6 sm:mb-8">
// //           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
// //             <div>
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Virtual Cards</h2>
// //               <p className="text-sm sm:text-base text-gray-600">Manage your premium virtual card collection</p>
// //             </div>
// //             <div className="flex items-center space-x-2 sm:space-x-3">
// //               <button
// //                 onClick={handleRefresh}
// //                 disabled={isLoading}
// //                 className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
// //               >
// //                 <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
// //                 <span className="hidden sm:inline">Refresh</span>
// //               </button>
// //               <button
// //                 onClick={() => addNotification("info", "Add new card feature coming soon!")}
// //                 className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300"
// //               >
// //                 <Plus className="w-4 h-4" />
// //                 <span className="hidden sm:inline">Add New Card</span>
// //               </button>
// //             </div>
// //           </div>

// //           {/* Search and Filter Controls */}
// //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
// //             <div className="relative flex-1">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
// //               <input
// //                 type="text"
// //                 placeholder="Search cards..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
// //               />
// //             </div>
// //             <div className="relative">
// //               <select
// //                 value={filterCategory}
// //                 onChange={(e) => setFilterCategory(e.target.value)}
// //                 className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2 sm:py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //               >
// //                 <option value="all">All Cards</option>
// //                 <option value="active">Active</option>
// //                 <option value="inactive">Inactive</option>
// //                 <option value="frozen">Frozen</option>
// //               </select>
// //               <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Responsive Virtual Cards Grid */}
// //         <div className="mb-6 sm:mb-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
// //             {filteredCards.map((card) => (
// //               <div
// //                 key={card.id}
// //                 className="group bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
// //               >
// //                 {/* Enhanced Responsive Card Header */}
// //                 <div className={`bg-gradient-to-br ${card.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
// //                   <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
// //                   <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12"></div>

// //                   <div className="relative z-10">
// //                     <div className="flex justify-between items-start mb-3 sm:mb-4">
// //                       <div className="flex-1">
// //                         <h3 className="text-lg sm:text-xl font-bold truncate">{card.name}</h3>
// //                         <p className="text-sm opacity-90">{card.type}</p>
// //                         <div className="flex items-center space-x-2 mt-1">
// //                           <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{card.plan}</span>
// //                           <span className="text-xs">{card.cashback}% Cashback</span>
// //                         </div>
// //                       </div>
// //                       <div className="text-2xl sm:text-3xl font-bold opacity-80 ml-2">{card.icon}</div>
// //                     </div>

// //                     <div className="mb-3 sm:mb-4">
// //                       <p className="text-sm opacity-90">Available Balance</p>
// //                       <p className="text-xl sm:text-2xl font-bold">
// //                         ${showBalance ? card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••"}
// //                       </p>
// //                     </div>

// //                     <div className="flex justify-between items-center text-sm">
// //                       <span className="truncate">{card.cardNumber}</span>
// //                       <span>{card.expiry}</span>
// //                     </div>

// //                     {/* Status indicators */}
// //                     <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1">
// //                       {!card.isActive && (
// //                         <div
// //                           className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"
// //                           title="Inactive"
// //                         ></div>
// //                       )}
// //                       {card.isFrozen && (
// //                         <div
// //                           className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"
// //                           title="Frozen"
// //                         ></div>
// //                       )}
// //                       {card.isActive && !card.isFrozen && (
// //                         <div
// //                           className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"
// //                           title="Active"
// //                         ></div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Enhanced Responsive Card Body */}
// //                 <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
// //                   {/* Spending Progress */}
// //                   <div>
// //                     <div className="flex justify-between items-center mb-2">
// //                       <span className="text-sm font-medium text-gray-700">Daily Spending</span>
// //                       <span className="text-xs sm:text-sm text-gray-500">
// //                         ${card.dailySpent.toFixed(2)} / ${card.spendingLimit.toFixed(2)}
// //                       </span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-2">
// //                       <div
// //                         className={`bg-gradient-to-r ${card.color} h-2 rounded-full transition-all duration-300`}
// //                         style={{ width: `${Math.min((card.dailySpent / card.spendingLimit) * 100, 100)}%` }}
// //                       ></div>
// //                     </div>
// //                   </div>

// //                   {/* Quick Stats */}
// //                   <div className="grid grid-cols-2 gap-3 sm:gap-4">
// //                     <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
// //                       <p className="text-xs text-gray-500">Monthly Rewards</p>
// //                       <p className="text-sm sm:text-lg font-bold text-green-600">${card.monthlyRewards}</p>
// //                     </div>
// //                     <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
// //                       <p className="text-xs text-gray-500">Last Activity</p>
// //                       <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{card.lastTransaction}</p>
// //                     </div>
// //                   </div>

// //                   {/* Expandable Card Controls */}
// //                   <div className="space-y-3">
// //                     <button
// //                       onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
// //                       className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
// //                     >
// //                       <span className="text-sm font-medium text-gray-700">Card Controls</span>
// //                       {expandedCard === card.id ? (
// //                         <ChevronUp className="w-4 h-4 text-gray-500" />
// //                       ) : (
// //                         <ChevronDown className="w-4 h-4 text-gray-500" />
// //                       )}
// //                     </button>

// //                     {expandedCard === card.id && (
// //                       <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
// //                         <div className="flex items-center justify-between">
// //                           <span className="text-sm font-medium text-gray-700">Status</span>
// //                           <button
// //                             onClick={() => toggleCardStatus(card.id)}
// //                             disabled={isLoading}
// //                             className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
// //                               card.isActive
// //                                 ? "bg-green-100 text-green-700 hover:bg-green-200"
// //                                 : "bg-red-100 text-red-700 hover:bg-red-200"
// //                             } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// //                           >
// //                             {card.isActive ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
// //                             <span>{card.isActive ? "Active" : "Inactive"}</span>
// //                           </button>
// //                         </div>

// //                         <div className="flex items-center justify-between">
// //                           <span className="text-sm font-medium text-gray-700">Security</span>
// //                           <button
// //                             onClick={() => toggleCardFreeze(card.id)}
// //                             disabled={isLoading}
// //                             className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
// //                               card.isFrozen
// //                                 ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
// //                                 : "bg-blue-100 text-blue-700 hover:bg-blue-200"
// //                             } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// //                           >
// //                             {card.isFrozen ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
// //                             <span>{card.isFrozen ? "Frozen" : "Active"}</span>
// //                           </button>
// //                         </div>

// //                         <div className="flex items-center justify-between">
// //                           <span className="text-sm font-medium text-gray-700">Spending Limit</span>
// //                           <div className="flex items-center space-x-2">
// //                             <DollarSign className="w-3 h-3 text-gray-400" />
// //                             <input
// //                               type="number"
// //                               value={card.spendingLimit}
// //                               onChange={(e) => updateSpendingLimit(card.id, Number.parseFloat(e.target.value) || 0)}
// //                               className="w-20 text-xs text-right border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                               min="0"
// //                               step="100"
// //                             />
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </div>

// //                   {/* Enhanced Action Buttons */}
// //                   <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-gray-100">
// //                     <button
// //                       onClick={() => {
// //                         setSelectedCard(card)
// //                         setShowTransactionModal(true)
// //                       }}
// //                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group"
// //                     >
// //                       <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
// //                       <span className="text-xs font-medium text-gray-700">History</span>
// //                     </button>
// //                     <button
// //                       onClick={() => {
// //                         setSelectedCard(card)
// //                         setShowCardModal(true)
// //                       }}
// //                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group"
// //                     >
// //                       <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
// //                       <span className="text-xs font-medium text-gray-700">Settings</span>
// //                     </button>
// //                     <button
// //                       onClick={() => handleCardPayment(card.id, 50)}
// //                       disabled={!card.isActive || card.isFrozen || isLoading}
// //                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
// //                     >
// //                       <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-green-700 transition-colors" />
// //                       <span className="text-xs font-medium text-green-700">Pay $50</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {filteredCards.length === 0 && (
// //             <div className="text-center py-12">
// //               <CardIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
// //               <h3 className="text-lg font-medium text-gray-900 mb-2">No cards found</h3>
// //               <p className="text-gray-500">Try adjusting your search or filter criteria</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Enhanced Responsive Quick Actions */}
// //         <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50">
// //           <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
// //           <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
// //             {[
// //               {
// //                 icon: Plus,
// //                 label: "Add Card",
// //                 color: "from-blue-500 to-cyan-500",
// //                 action: () => addNotification("info", "Add card feature coming soon!"),
// //               },
// //               {
// //                 icon: TrendingUp,
// //                 label: "Analytics",
// //                 color: "from-green-500 to-emerald-500",
// //                 action: () => addNotification("info", "Analytics feature coming soon!"),
// //               },
// //               {
// //                 icon: Shield,
// //                 label: "Security",
// //                 color: "from-purple-500 to-violet-500",
// //                 action: () => addNotification("info", "Security settings coming soon!"),
// //               },
// //               {
// //                 icon: Settings,
// //                 label: "Settings",
// //                 color: "from-gray-500 to-slate-500",
// //                 action: () => addNotification("info", "Settings panel coming soon!"),
// //               },
// //               { icon: Download, label: "Export", color: "from-orange-500 to-red-500", action: handleExportData },
// //               { icon: Share2, label: "Share", color: "from-pink-500 to-rose-500", action: handleShareData },
// //             ].map((action, index) => (
// //               <button
// //                 key={index}
// //                 onClick={action.action}
// //                 className="flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100"
// //               >
// //                 <div
// //                   className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${action.color} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
// //                 >
// //                   <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
// //                 </div>
// //                 <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center">
// //                   {action.label}
// //                 </span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Enhanced Responsive Modals */}
// //       {showCardModal && selectedCard && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Settings</h3>
// //                 <button
// //                   onClick={() => setShowCardModal(false)}
// //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //                 >
// //                   <X className="w-5 h-5 text-gray-500" />
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
// //               <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 sm:p-6 text-white`}>
// //                 <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
// //                 <p className="text-sm opacity-90 mb-4">{selectedCard.cardNumber}</p>
// //                 <div className="grid grid-cols-2 gap-4">
// //                   <div>
// //                     <p className="text-xs opacity-75">Balance</p>
// //                     <p className="text-lg font-bold">${selectedCard.balance.toFixed(2)}</p>
// //                   </div>
// //                   <div>
// //                     <p className="text-xs opacity-75">Cashback Rate</p>
// //                     <p className="text-lg font-bold">{selectedCard.cashback}%</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="space-y-4">
// //                 <h5 className="font-semibold text-gray-900">Card Features</h5>
// //                 <div className="grid gap-2">
// //                   {selectedCard.features.map((feature, index) => (
// //                     <div key={index} className="flex items-center space-x-2">
// //                       <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
// //                       <span className="text-sm text-gray-700">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
// //                 <button
// //                   onClick={() => {
// //                     toggleCardStatus(selectedCard.id)
// //                     setShowCardModal(false)
// //                   }}
// //                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
// //                     selectedCard.isActive
// //                       ? "bg-red-100 text-red-700 hover:bg-red-200"
// //                       : "bg-green-100 text-green-700 hover:bg-green-200"
// //                   }`}
// //                 >
// //                   {selectedCard.isActive ? "Deactivate Card" : "Activate Card"}
// //                 </button>
// //                 <button
// //                   onClick={() => {
// //                     toggleCardFreeze(selectedCard.id)
// //                     setShowCardModal(false)
// //                   }}
// //                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
// //                     selectedCard.isFrozen
// //                       ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
// //                       : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
// //                   }`}
// //                 >
// //                   {selectedCard.isFrozen ? "Unfreeze Card" : "Freeze Card"}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {showTransactionModal && selectedCard && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Transactions</h3>
// //                 <button
// //                   onClick={() => setShowTransactionModal(false)}
// //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //                 >
// //                   <X className="w-5 h-5 text-gray-500" />
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="p-4 sm:p-6">
// //               <div className="space-y-3 sm:space-y-4">
// //                 {selectedCard.transactions.map((transaction) => {
// //                   const IconComponent = getCategoryIcon(transaction.category)
// //                   return (
// //                     <div
// //                       key={transaction.id}
// //                       className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl"
// //                     >
// //                       <div
// //                         className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
// //                           transaction.type === "purchase"
// //                             ? "bg-red-100"
// //                             : transaction.type === "reward"
// //                               ? "bg-green-100"
// //                               : "bg-blue-100"
// //                         }`}
// //                       >
// //                         <IconComponent
// //                           className={`w-5 h-5 ${
// //                             transaction.type === "purchase"
// //                               ? "text-red-600"
// //                               : transaction.type === "reward"
// //                                 ? "text-green-600"
// //                                 : "text-blue-600"
// //                           }`}
// //                         />
// //                       </div>
// //                       <div className="flex-1 min-w-0">
// //                         <p className="font-medium text-gray-900 truncate">{transaction.merchant}</p>
// //                         <p className="text-sm text-gray-500">{transaction.time}</p>
// //                       </div>
// //                       <div className="text-right flex-shrink-0">
// //                         <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
// //                           {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
// //                         </p>
// //                         <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
// //                       </div>
// //                     </div>
// //                   )
// //                 })}
// //                 {selectedCard.transactions.length === 0 && (
// //                   <div className="text-center py-8">
// //                     <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
// //                     <p className="text-gray-500">No transactions yet</p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {showPlanModal && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Choose Your Plan</h3>
// //                 <button
// //                   onClick={() => setShowPlanModal(false)}
// //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //                 >
// //                   <X className="w-5 h-5 text-gray-500" />
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="p-4 sm:p-6">
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
// //                 {plans.map((plan) => (
// //                   <div
// //                     key={plan.id}
// //                     className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
// //                       plan.popular
// //                         ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
// //                         : "border-gray-200 bg-white hover:border-gray-300"
// //                     } ${selectedPlan === plan.id ? "ring-4 ring-purple-200" : ""}`}
// //                   >
// //                     {plan.popular && (
// //                       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
// //                         <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
// //                           Most Popular
// //                         </span>
// //                       </div>
// //                     )}

// //                     <div className="text-center mb-4 sm:mb-6">
// //                       <div
// //                         className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${plan.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
// //                       >
// //                         {plan.id === "basic" && <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
// //                         {plan.id === "premium" && <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
// //                         {plan.id === "platinum" && <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
// //                       </div>
// //                       <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
// //                       <div className="text-2xl sm:text-3xl font-bold text-gray-900">
// //                         ${plan.price}
// //                         <span className="text-sm font-normal text-gray-500">/month</span>
// //                       </div>
// //                     </div>

// //                     <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
// //                       {plan.features.map((feature, index) => (
// //                         <div key={index} className="flex items-center space-x-2">
// //                           <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
// //                           <span className="text-sm text-gray-700">{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     <button
// //                       onClick={() => upgradePlan(plan.id)}
// //                       disabled={isLoading || selectedPlan === plan.id}
// //                       className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
// //                         selectedPlan === plan.id
// //                           ? "bg-green-100 text-green-700 cursor-default"
// //                           : plan.popular
// //                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
// //                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //                       } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
// //                     >
// //                       {selectedPlan === plan.id ? "Current Plan" : `Upgrade to ${plan.name}`}
// //                     </button>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Enhanced Responsive Notifications Panel */}
// //       {showNotificationPanel && (
// //         <div className="fixed top-14 sm:top-16 right-4 w-80 sm:w-96 bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 z-40 max-h-96 overflow-y-auto">
// //           <div className="p-4 border-b border-gray-200 flex items-center justify-between">
// //             <h3 className="font-semibold text-gray-900">Notifications</h3>
// //             <div className="flex items-center space-x-2">
// //               <button
// //                 onClick={clearAllNotifications}
// //                 className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
// //               >
// //                 Clear All
// //               </button>
// //               <button
// //                 onClick={() => setShowNotificationPanel(false)}
// //                 className="p-1 hover:bg-gray-100 rounded transition-colors"
// //               >
// //                 <X className="w-4 h-4 text-gray-500" />
// //               </button>
// //             </div>
// //           </div>
// //           <div className="p-4 space-y-3">
// //             {notifications.length === 0 ? (
// //               <div className="text-center py-8">
// //                 <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
// //                 <p className="text-gray-500 text-sm">No notifications</p>
// //               </div>
// //             ) : (
// //               notifications.map((notification) => (
// //                 <div
// //                   key={notification.id}
// //                   onClick={() => markNotificationAsRead(notification.id)}
// //                   className={`flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-colors ${
// //                     notification.read ? "bg-gray-50" : "bg-blue-50 hover:bg-blue-100"
// //                   }`}
// //                 >
// //                   <div
// //                     className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
// //                       notification.type === "success"
// //                         ? "bg-green-500"
// //                         : notification.type === "warning"
// //                           ? "bg-yellow-500"
// //                           : notification.type === "error"
// //                             ? "bg-red-500"
// //                             : "bg-blue-500"
// //                     }`}
// //                   ></div>
// //                   <div className="flex-1 min-w-0">
// //                     <p className={`text-sm ${notification.read ? "text-gray-600" : "text-gray-900 font-medium"}`}>
// //                       {notification.message}
// //                     </p>
// //                     <p className="text-xs text-gray-500">{notification.time}</p>
// //                   </div>
// //                   {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>}
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {/* Loading Overlay */}
// //       {isLoading && (
// //         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
// //           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
// //             <div className="flex items-center space-x-3">
// //               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
// //               <span className="text-gray-700 text-sm sm:text-base">Processing...</span>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default CreditCardDashboard





// import { useState, useEffect } from "react"
// import { useAccount, useBalance, useSignMessage, useSendTransaction } from "wagmi"
// import { formatEther } from "viem"
// import {
//   CreditCard,
//   Wallet,
//   Eye,
//   EyeOff,
//   Settings,
//   TrendingUp,
//   Shield,
//   Lock,
//   Unlock,
//   DollarSign,
//   Activity,
//   Bell,
//   User,
//   Copy,
//   Check,
//   Plus,
//   Star,
//   Gift,
//   Zap,
//   Download,
//   Share2,
//   CheckCircle,
//   XCircle,
//   Sparkles,
//   Crown,
//   Gem,
//   X,
//   RefreshCw,
//   Globe,
//   Smartphone,
//   ShoppingBag,
//   Coffee,
//   Car,
//   Home,
//   Gamepad2,
//   Menu,
//   ChevronDown,
//   ChevronUp,
//   Filter,
//   Search,
//   CreditCardIcon as CardIcon,
//   AlertCircle,
// } from "lucide-react"

// const CreditCardDashboard = () => {
//   const { address, isConnected, isConnecting } = useAccount()
//   const { data: balance, refetch: refetchBalance } = useBalance({ address })
//   const { signMessageAsync } = useSignMessage()
//   const { sendTransaction } = useSendTransaction()

//   // Enhanced state management with payment processing
//   const [showBalance, setShowBalance] = useState(true)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notifications, setNotifications] = useState([
//     { id: 1, type: "success", message: "Card payment successful", time: "2 min ago", read: false },
//     { id: 2, type: "warning", message: "Spending limit reached on Binance card", time: "1 hour ago", read: false },
//     { id: 3, type: "info", message: "New cashback reward available", time: "3 hours ago", read: true },
//   ])
//   const [copied, setCopied] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)
//   const [showCardModal, setShowCardModal] = useState(false)
//   const [showPlanModal, setShowPlanModal] = useState(false)
//   const [showTransactionModal, setShowTransactionModal] = useState(false)
//   const [showNotificationPanel, setShowNotificationPanel] = useState(false)
//   const [showPaymentModal, setShowPaymentModal] = useState(false)
//   const [activeTab, setActiveTab] = useState("overview")
//   const [isLoading, setIsLoading] = useState(false)
//   const [selectedPlan, setSelectedPlan] = useState("premium")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterCategory, setFilterCategory] = useState("all")
//   const [expandedCard, setExpandedCard] = useState(null)
//   const [paymentAmount, setPaymentAmount] = useState(50)
//   const [paymentMerchant, setPaymentMerchant] = useState("Quick Payment")
//   const [processingPayment, setProcessingPayment] = useState(false)

//   // Screen size detection
//   const [screenSize, setScreenSize] = useState("desktop")

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setScreenSize("mobile")
//       } else if (window.innerWidth < 1024) {
//         setScreenSize("tablet")
//       } else {
//         setScreenSize("desktop")
//       }
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Enhanced cards with more realistic data and features
//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       name: "Coinbase Pro",
//       type: "Crypto Exchange",
//       balance: 2450.75,
//       isActive: true,
//       isFrozen: false,
//       spendingLimit: 5000,
//       dailySpent: 234.5,
//       color: "from-blue-500 via-blue-600 to-indigo-600",
//       icon: "₿",
//       lastTransaction: "2 hours ago",
//       cardNumber: "**** **** **** 1234",
//       cvv: "***",
//       expiry: "12/27",
//       cashback: 2.5,
//       monthlyRewards: 45.3,
//       plan: "Premium",
//       features: ["Crypto rewards", "No foreign fees", "Priority support"],
//       transactions: [
//         { id: 1, merchant: "Amazon", amount: -89.99, type: "purchase", time: "2 hours ago", category: "shopping" },
//         { id: 2, merchant: "Starbucks", amount: -5.5, type: "purchase", time: "5 hours ago", category: "food" },
//         { id: 3, merchant: "Cashback Reward", amount: +12.3, type: "reward", time: "1 day ago", category: "reward" },
//       ],
//     },
//     {
//       id: 2,
//       name: "CashApp Elite",
//       type: "Digital Wallet",
//       balance: 1250.3,
//       isActive: true,
//       isFrozen: false,
//       spendingLimit: 3000,
//       dailySpent: 156.8,
//       color: "from-green-500 via-emerald-500 to-teal-500",
//       icon: "$",
//       lastTransaction: "5 hours ago",
//       cardNumber: "**** **** **** 5678",
//       cvv: "***",
//       expiry: "09/26",
//       cashback: 1.8,
//       monthlyRewards: 28.9,
//       plan: "Standard",
//       features: ["Instant transfers", "Stock investing", "Bitcoin rewards"],
//       transactions: [
//         { id: 1, merchant: "Uber", amount: -25.4, type: "purchase", time: "5 hours ago", category: "transport" },
//         {
//           id: 2,
//           merchant: "Netflix",
//           amount: -15.99,
//           type: "subscription",
//           time: "2 days ago",
//           category: "entertainment",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "PayPal Business",
//       type: "Payment Service",
//       balance: 890.45,
//       isActive: false,
//       isFrozen: false,
//       spendingLimit: 2500,
//       dailySpent: 0,
//       color: "from-blue-400 via-indigo-500 to-purple-500",
//       icon: "P",
//       lastTransaction: "1 day ago",
//       cardNumber: "**** **** **** 9012",
//       cvv: "***",
//       expiry: "03/28",
//       cashback: 1.5,
//       monthlyRewards: 15.6,
//       plan: "Business",
//       features: ["Buyer protection", "Global payments", "Invoice tools"],
//       transactions: [
//         {
//           id: 1,
//           merchant: "Office Supplies",
//           amount: -145.3,
//           type: "purchase",
//           time: "1 day ago",
//           category: "business",
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "Binance Platinum",
//       type: "Crypto Platform",
//       balance: 3200.8,
//       isActive: true,
//       isFrozen: true,
//       spendingLimit: 7500,
//       dailySpent: 450.2,
//       color: "from-purple-500 via-violet-600 to-purple-700",
//       icon: "N",
//       lastTransaction: "3 hours ago",
//       cardNumber: "**** **** **** 3456",
//       cvv: "***",
//       expiry: "06/29",
//       cashback: 3.0,
//       monthlyRewards: 89.4,
//       plan: "Platinum",
//       features: ["Crypto loans", "High yield", "Premium support"],
//       transactions: [
//         {
//           id: 1,
//           merchant: "Tesla Supercharger",
//           amount: -45.8,
//           type: "purchase",
//           time: "3 hours ago",
//           category: "transport",
//         },
//         { id: 2, merchant: "Crypto Reward", amount: +25.6, type: "reward", time: "6 hours ago", category: "reward" },
//       ],
//     },
//     {
//       id: 5,
//       name: "TrustWallet Pro",
//       type: "Mobile Wallet",
//       balance: 1680.25,
//       isActive: true,
//       isFrozen: false,
//       spendingLimit: 4000,
//       dailySpent: 89.3,
//       color: "from-cyan-500 via-blue-500 to-indigo-500",
//       icon: "T",
//       lastTransaction: "6 hours ago",
//       cardNumber: "**** **** **** 7890",
//       cvv: "***",
//       expiry: "11/27",
//       cashback: 2.0,
//       monthlyRewards: 34.7,
//       plan: "Pro",
//       features: ["DeFi access", "NFT storage", "Multi-chain support"],
//       transactions: [
//         { id: 1, merchant: "Gas Station", amount: -65.4, type: "purchase", time: "6 hours ago", category: "transport" },
//         { id: 2, merchant: "DeFi Yield", amount: +18.9, type: "reward", time: "12 hours ago", category: "defi" },
//       ],
//     },
//     {
//       id: 6,
//       name: "Robinhood Gold",
//       type: "Investment App",
//       balance: 5420.15,
//       isActive: true,
//       isFrozen: false,
//       spendingLimit: 10000,
//       dailySpent: 1250.6,
//       color: "from-emerald-500 via-green-500 to-teal-600",
//       icon: "R",
//       lastTransaction: "1 hour ago",
//       cardNumber: "**** **** **** 2468",
//       cvv: "***",
//       expiry: "08/28",
//       cashback: 2.2,
//       monthlyRewards: 156.8,
//       plan: "Gold",
//       features: ["Stock rewards", "Margin trading", "Research tools"],
//       transactions: [
//         {
//           id: 1,
//           merchant: "Apple Store",
//           amount: -1299.0,
//           type: "purchase",
//           time: "1 hour ago",
//           category: "electronics",
//         },
//         {
//           id: 2,
//           merchant: "Stock Dividend",
//           amount: +45.3,
//           type: "dividend",
//           time: "4 hours ago",
//           category: "investment",
//         },
//       ],
//     },
//   ])

//   // Plan options
//   const plans = [
//     {
//       id: "basic",
//       name: "Basic",
//       price: 0,
//       features: ["2 Virtual Cards", "Basic Support", "Standard Limits"],
//       color: "from-gray-400 to-gray-500",
//       popular: false,
//     },
//     {
//       id: "premium",
//       name: "Premium",
//       price: 9.99,
//       features: ["6 Virtual Cards", "Priority Support", "Higher Limits", "Cashback Rewards"],
//       color: "from-blue-500 to-purple-600",
//       popular: true,
//     },
//     {
//       id: "platinum",
//       name: "Platinum",
//       price: 19.99,
//       features: ["Unlimited Cards", "24/7 Support", "No Limits", "Premium Rewards", "Crypto Integration"],
//       color: "from-purple-600 to-pink-600",
//       popular: false,
//     },
//   ]

//   // Enhanced functions with complete payment flow
//   const copyAddress = async () => {
//     if (address) {
//       await navigator.clipboard.writeText(address)
//       setCopied(true)
//       setTimeout(() => setCopied(false), 2000)
//       addNotification("success", "Wallet address copied to clipboard")
//     }
//   }

//   const addNotification = (type, message) => {
//     const newNotification = {
//       id: Date.now(),
//       type,
//       message,
//       time: "now",
//       read: false,
//     }
//     setNotifications((prev) => [newNotification, ...prev.slice(0, 4)])
//   }

//   const markNotificationAsRead = (id) => {
//     setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
//   }

//   const clearAllNotifications = () => {
//     setNotifications([])
//     setShowNotificationPanel(false)
//   }

//   // Generate a unique nonce for each transaction
//   const generateNonce = () => {
//     return Date.now().toString() + Math.random().toString(36).substr(2, 9)
//   }

//   // Complete payment processing flow
//   const processPayment = async (cardId, amount, merchant = "Quick Payment") => {
//     if (!address) {
//       addNotification("error", "Please connect your wallet first")
//       return
//     }

//     const card = cards.find((c) => c.id === cardId)
//     if (!card) {
//       addNotification("error", "Card not found")
//       return
//     }

//     if (!card.isActive) {
//       addNotification("error", "Card is not active")
//       return
//     }

//     if (card.isFrozen) {
//       addNotification("error", "Card is frozen")
//       return
//     }

//     if (card.balance < amount) {
//       addNotification("error", "Insufficient balance")
//       return
//     }

//     if (card.dailySpent + amount > card.spendingLimit) {
//       addNotification("error", "Daily spending limit exceeded")
//       return
//     }

//     setProcessingPayment(true)
//     setIsLoading(true)

//     try {
//       // Step 1: Generate nonce and create payment request
//       const nonce = generateNonce()
//       const timestamp = Date.now()

//       // Step 2: Create message to sign
//       const message = JSON.stringify({
//         action: "payment",
//         cardId: cardId,
//         amount: amount,
//         merchant: merchant,
//         walletAddress: address,
//         nonce: nonce,
//         timestamp: timestamp,
//         chainId: 1, // Ethereum mainnet
//       })

//       addNotification("info", "Please sign the transaction in your wallet...")

//       // Step 3: Request signature from MetaMask
//       const signature = await signMessageAsync({ message })

//       addNotification("success", "Signature received, processing payment...")

//       // Step 4: Send to backend for verification and processing
//       const response = await fetch("https://back.easewithdraw.com/api/cards/process-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           signature,
//           cardId,
//           amount,
//           merchant,
//           walletAddress: address,
//           nonce,
//           timestamp,
//         }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.error || "Payment processing failed")
//       }

//       // Step 5: Update local state with successful payment
//       setCards((prevCards) =>
//         prevCards.map((card) =>
//           card.id === cardId
//             ? {
//                 ...card,
//                 balance: card.balance - amount,
//                 dailySpent: card.dailySpent + amount,
//                 transactions: [
//                   {
//                     id: result.transactionId,
//                     merchant: merchant,
//                     amount: -amount,
//                     type: "purchase",
//                     time: "now",
//                     category: "payment",
//                     status: "completed",
//                     transactionHash: result.transactionHash,
//                   },
//                   ...card.transactions,
//                 ],
//               }
//             : card,
//         ),
//       )

//       addNotification("success", `Payment of $${amount} to ${merchant} completed successfully!`)

//       // Calculate cashback
//       const cashbackAmount = (amount * card.cashback) / 100
//       if (cashbackAmount > 0) {
//         setTimeout(() => {
//           addNotification("success", `Cashback of $${cashbackAmount.toFixed(2)} earned!`)
//         }, 2000)
//       }
//     } catch (error) {
//       console.error("Payment error:", error)

//       if (error.message.includes("User rejected")) {
//         addNotification("warning", "Payment cancelled by user")
//       } else if (error.message.includes("insufficient funds")) {
//         addNotification("error", "Insufficient wallet balance")
//       } else if (error.message.includes("signature verification failed")) {
//         addNotification("error", "Signature verification failed")
//       } else if (error.message.includes("nonce already used")) {
//         addNotification("error", "Transaction already processed")
//       } else {
//         addNotification("error", error.message || "Payment processing failed")
//       }
//     } finally {
//       setProcessingPayment(false)
//       setIsLoading(false)
//       setShowPaymentModal(false)
//     }
//   }

//   const handleCardPayment = async (cardId, amount, merchant) => {
//     setSelectedCard(cards.find((c) => c.id === cardId))
//     setPaymentAmount(amount)
//     setPaymentMerchant(merchant || "Quick Payment")
//     setShowPaymentModal(true)
//   }

//   const confirmPayment = async () => {
//     if (selectedCard) {
//       await processPayment(selectedCard.id, paymentAmount, paymentMerchant)
//     }
//   }

//   const toggleCardStatus = async (cardId) => {
//     setIsLoading(true)
//     try {
//       const nonce = generateNonce()
//       const message = JSON.stringify({
//         action: "toggle_card_status",
//         cardId: cardId,
//         walletAddress: address,
//         nonce: nonce,
//         timestamp: Date.now(),
//       })

//       const signature = await signMessageAsync({ message })

//       const response = await fetch("https://back.easewithdraw.com/api/cards/toggle-status", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           signature,
//           cardId,
//           walletAddress: address,
//           nonce,
//         }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.error || "Failed to update card status")
//       }

//       setCards(cards.map((card) => (card.id === cardId ? { ...card, isActive: !card.isActive } : card)))

//       const card = cards.find((c) => c.id === cardId)
//       addNotification("success", `${card.name} ${card.isActive ? "deactivated" : "activated"} successfully`)
//     } catch (error) {
//       console.error("Toggle card status error:", error)
//       addNotification("error", error.message || "Failed to update card status")
//     }
//     setIsLoading(false)
//   }

//   const toggleCardFreeze = async (cardId) => {
//     setIsLoading(true)
//     try {
//       const nonce = generateNonce()
//       const message = JSON.stringify({
//         action: "toggle_card_freeze",
//         cardId: cardId,
//         walletAddress: address,
//         nonce: nonce,
//         timestamp: Date.now(),
//       })

//       const signature = await signMessageAsync({ message })

//       const response = await fetch("https://back.easewithdraw.com/api/cards/toggle-freeze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           signature,
//           cardId,
//           walletAddress: address,
//           nonce,
//         }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.error || "Failed to update card security status")
//       }

//       setCards(cards.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)))

//       const card = cards.find((c) => c.id === cardId)
//       addNotification("success", `${card.name} ${card.isFrozen ? "unfrozen" : "frozen"} successfully`)
//     } catch (error) {
//       console.error("Toggle card freeze error:", error)
//       addNotification("error", error.message || "Failed to update card security status")
//     }
//     setIsLoading(false)
//   }

//   const updateSpendingLimit = async (cardId, newLimit) => {
//     if (newLimit < 0) return
//     setIsLoading(true)
//     try {
//       const nonce = generateNonce()
//       const message = JSON.stringify({
//         action: "update_spending_limit",
//         cardId: cardId,
//         newLimit: newLimit,
//         walletAddress: address,
//         nonce: nonce,
//         timestamp: Date.now(),
//       })

//       const signature = await signMessageAsync({ message })

//       const response = await fetch("https://back.easewithdraw.com/api/cards/update-limit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           signature,
//           cardId,
//           newLimit,
//           walletAddress: address,
//           nonce,
//         }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.error || "Failed to update spending limit")
//       }

//       setCards(cards.map((card) => (card.id === cardId ? { ...card, spendingLimit: newLimit } : card)))

//       addNotification("success", "Spending limit updated successfully")
//     } catch (error) {
//       console.error("Update spending limit error:", error)
//       addNotification("error", error.message || "Failed to update spending limit")
//     }
//     setIsLoading(false)
//   }

//   const upgradePlan = async (planId) => {
//     setIsLoading(true)
//     try {
//       const plan = plans.find((p) => p.id === planId)
//       const nonce = generateNonce()
//       const message = JSON.stringify({
//         action: "upgrade_plan",
//         planId: planId,
//         planPrice: plan.price,
//         walletAddress: address,
//         nonce: nonce,
//         timestamp: Date.now(),
//       })

//       const signature = await signMessageAsync({ message })

//       const response = await fetch("https://back.easewithdraw.com/api/plans/upgrade", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           signature,
//           planId,
//           walletAddress: address,
//           nonce,
//         }),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.error || "Plan upgrade failed")
//       }

//       setSelectedPlan(planId)
//       addNotification("success", `Successfully upgraded to ${plan.name} plan`)
//       setShowPlanModal(false)
//     } catch (error) {
//       console.error("Plan upgrade error:", error)
//       addNotification("error", error.message || "Plan upgrade failed")
//     }
//     setIsLoading(false)
//   }

//   const handleRefresh = async () => {
//     setIsLoading(true)
//     try {
//       await refetchBalance()

//       // Fetch updated card data from backend
//       const response = await fetch(`https://back.easewithdraw.com/api/cards?walletAddress=${address}`)
//       if (response.ok) {
//         const updatedCards = await response.json()
//         setCards(updatedCards)
//       }

//       addNotification("success", "Data refreshed successfully")
//     } catch (error) {
//       console.error("Refresh error:", error)
//       addNotification("error", "Failed to refresh data")
//     }
//     setIsLoading(false)
//   }

//   const handleExportData = () => {
//     const data = {
//       cards: cards.map((card) => ({
//         name: card.name,
//         balance: card.balance,
//         monthlyRewards: card.monthlyRewards,
//         transactions: card.transactions,
//       })),
//       totalBalance: totalCardBalance,
//       exportDate: new Date().toISOString(),
//       walletAddress: address,
//     }
//     const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement("a")
//     a.href = url
//     a.download = `wallet-dashboard-export-${Date.now()}.json`
//     a.click()
//     URL.revokeObjectURL(url)
//     addNotification("success", "Data exported successfully")
//   }

//   const handleShareData = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: "EaseWithdraw Dashboard",
//           text: `My wallet balance: $${totalCardBalance.toFixed(2)}`,
//           url: window.location.href,
//         })
//         addNotification("success", "Shared successfully")
//       } catch (error) {
//         addNotification("info", "Share cancelled")
//       }
//     } else {
//       copyAddress()
//     }
//   }

//   // Calculate statistics
//   const totalCardBalance = cards.reduce((sum, card) => sum + card.balance, 0)
//   const totalDailySpent = cards.reduce((sum, card) => sum + card.dailySpent, 0)
//   const totalMonthlyRewards = cards.reduce((sum, card) => sum + card.monthlyRewards, 0)
//   const activeCards = cards.filter((card) => card.isActive).length
//   const unreadNotifications = notifications.filter((n) => !n.read).length

//   const getCategoryIcon = (category) => {
//     const icons = {
//       shopping: ShoppingBag,
//       food: Coffee,
//       transport: Car,
//       entertainment: Gamepad2,
//       business: Home,
//       electronics: Smartphone,
//       reward: Gift,
//       defi: Zap,
//       investment: TrendingUp,
//       subscription: Globe,
//       payment: DollarSign,
//     }
//     return icons[category] || DollarSign
//   }

//   const filteredCards = cards.filter((card) => {
//     const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesFilter =
//       filterCategory === "all" ||
//       (filterCategory === "active" && card.isActive) ||
//       (filterCategory === "inactive" && !card.isActive) ||
//       (filterCategory === "frozen" && card.isFrozen)
//     return matchesSearch && matchesFilter
//   })

//   if (!isConnected) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//         <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-center max-w-sm sm:max-w-md w-full border border-white/20">
//           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
//             <Wallet className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Welcome to EaseWithdraw</h2>
//           <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
//             Connect your wallet to access your premium virtual card dashboard
//           </p>
//           <div className="space-y-4">
//             {/* <appkit-button /> */}
//             <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
//               <div className="flex items-center space-x-1">
//                 <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
//                 <span>Secure</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
//                 <span>Fast</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Star className="w-3 h-3 sm:w-4 sm:h-4" />
//                 <span>Premium</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Enhanced Responsive Header */}
//       <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-14 sm:h-16">
//             {/* Logo and Mobile Menu */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="sm:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
//               >
//                 <Menu className="w-5 h-5" />
//               </button>

//               <div className="flex items-center space-x-2 sm:space-x-3">
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
//                   <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
//                 </div>
//                 <div className="hidden sm:block">
//                   <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     EaseWithdraw
//                   </h1>
//                   <p className="text-xs text-gray-500">Premium Dashboard</p>
//                 </div>
//                 <div className="sm:hidden">
//                   <h1 className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     EaseWithdraw
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <button
//                 onClick={() => setShowPlanModal(true)}
//                 className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300"
//               >
//                 <Crown className="w-4 h-4" />
//                 <span className="text-sm font-medium">Upgrade</span>
//               </button>
// {/* 
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotificationPanel(!showNotificationPanel)}
//                   className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                   <Bell className="w-5 h-5" />
//                   {unreadNotifications > 0 && (
//                     <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
//                       {unreadNotifications}
//                     </span>
//                   )}
//                 </button>
//               </div> */}

//               <div className="flex items-center space-x-3 bg-gray-100/80 rounded-xl px-4 py-2 backdrop-blur-sm">
//                 <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
//                   <User className="w-4 h-4 text-white" />
//                 </div>
//                 <div className="text-sm">
//                   <p className="font-medium text-gray-800">
//                     {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not Connected"}
//                   </p>
//                   <p className="text-xs text-gray-500">Premium Member</p>
//                 </div>
//                 <button onClick={copyAddress} className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
//                   {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
//                 </button>
//               </div>

//               {/* <appkit-button /> */}
//             </div>

//             {/* Mobile Actions */}
//             <div className="flex lg:hidden items-center space-x-2">
//               <button
//                 onClick={() => setShowNotificationPanel(!showNotificationPanel)}
//                 className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
//               >
//                 <Bell className="w-5 h-5" />
//                 {unreadNotifications > 0 && (
//                   <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
//                     {unreadNotifications}
//                   </span>
//                 )}
//               </button>
//               {/* <appkit-button /> */}
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="sm:hidden border-t border-gray-200 py-4 space-y-3">
//               <div className="flex items-center space-x-3 px-2">
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
//                   <User className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="font-medium text-gray-800 text-sm">
//                     {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : "Not Connected"}
//                   </p>
//                   <p className="text-xs text-gray-500">Premium Member</p>
//                 </div>
//                 <button onClick={copyAddress} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                   {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
//                 </button>
//               </div>

//               <button
//                 onClick={() => {
//                   setShowPlanModal(true)
//                   setIsMobileMenuOpen(false)
//                 }}
//                 className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
//               >
//                 <Crown className="w-4 h-4" />
//                 <span className="text-sm font-medium">Upgrade Plan</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         {/* Enhanced Responsive Stats Overview */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
//           <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//             <div className="flex items-center justify-between mb-3 sm:mb-4">
//               <div className="flex items-center space-x-2 sm:space-x-3">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
//                   <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs sm:text-sm font-medium text-gray-600">Wallet Balance</h3>
//                   <p className="text-xs text-gray-400 hidden sm:block">Connected Wallet</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowBalance(!showBalance)}
//                 className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 {showBalance ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
//               </button>
//             </div>
//             <div className="space-y-1 sm:space-y-2">
//               <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
//                 {showBalance
//                   ? balance
//                     ? `${Number.parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
//                     : "0.0000 ETH"
//                   : "••••••••"}
//               </span>
//               <div className="flex items-center space-x-2 text-xs sm:text-sm">
//                 <span className="text-green-600 font-medium">+5.2%</span>
//                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
//                 <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Total Balance</h3>
//                 <p className="text-xs text-gray-400 hidden sm:block">All Cards Combined</p>
//               </div>
//             </div>
//             <div className="space-y-1 sm:space-y-2">
//               <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
//                 ${showBalance ? totalCardBalance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••••"}
//               </span>
//               <div className="flex items-center space-x-2 text-xs sm:text-sm">
//                 <span className="text-green-600 font-medium">+12.5%</span>
//                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
//                 <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Rewards</h3>
//                 <p className="text-xs text-gray-400 hidden sm:block">Monthly</p>
//               </div>
//             </div>
//             <div className="space-y-1 sm:space-y-2">
//               <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalMonthlyRewards.toFixed(2)}</span>
//               <div className="flex items-center space-x-2 text-xs sm:text-sm">
//                 <span className="text-green-600 font-medium">+8.3%</span>
//                 <span className="text-gray-500 hidden sm:inline">vs last month</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//             <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center">
//                 <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xs sm:text-sm font-medium text-gray-600">Today</h3>
//                 <p className="text-xs text-gray-400 hidden sm:block">Spending</p>
//               </div>
//             </div>
//             <div className="space-y-1 sm:space-y-2">
//               <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalDailySpent.toFixed(2)}</span>
//               <div className="flex items-center space-x-2 text-xs sm:text-sm">
//                 <span className="text-orange-600 font-medium">
//                   {activeCards}/{cards.length}
//                 </span>
//                 <span className="text-gray-500 hidden sm:inline">active</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="mb-6 sm:mb-8">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
//             <div>
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Virtual Cards</h2>
//               <p className="text-sm sm:text-base text-gray-600">Manage your premium virtual card collection</p>
//             </div>
//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <button
//                 onClick={handleRefresh}
//                 disabled={isLoading}
//                 className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
//               >
//                 <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
//                 <span className="hidden sm:inline">Refresh</span>
//               </button>
//               <button
//                 onClick={() => addNotification("info", "Add new card feature coming soon!")}
//                 className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300"
//               >
//                 <Plus className="w-4 h-4" />
//                 <span className="hidden sm:inline">Add New Card</span>
//               </button>
//             </div>
//           </div>

//           {/* Search and Filter Controls */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search cards..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
//               />
//             </div>
//             <div className="relative">
//               <select
//                 value={filterCategory}
//                 onChange={(e) => setFilterCategory(e.target.value)}
//                 className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2 sm:py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Cards</option>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//                 <option value="frozen">Frozen</option>
//               </select>
//               <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Responsive Virtual Cards Grid */}
//         <div className="mb-6 sm:mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
//             {filteredCards.map((card) => (
//               <div
//                 key={card.id}
//                 className="group bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
//               >
//                 {/* Enhanced Responsive Card Header */}
//                 <div className={`bg-gradient-to-br ${card.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
//                   <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
//                   <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12"></div>

//                   <div className="relative z-10">
//                     <div className="flex justify-between items-start mb-3 sm:mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-lg sm:text-xl font-bold truncate">{card.name}</h3>
//                         <p className="text-sm opacity-90">{card.type}</p>
//                         <div className="flex items-center space-x-2 mt-1">
//                           <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{card.plan}</span>
//                           <span className="text-xs">{card.cashback}% Cashback</span>
//                         </div>
//                       </div>
//                       <div className="text-2xl sm:text-3xl font-bold opacity-80 ml-2">{card.icon}</div>
//                     </div>

//                     <div className="mb-3 sm:mb-4">
//                       <p className="text-sm opacity-90">Available Balance</p>
//                       <p className="text-xl sm:text-2xl font-bold">
//                         ${showBalance ? card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••"}
//                       </p>
//                     </div>

//                     <div className="flex justify-between items-center text-sm">
//                       <span className="truncate">{card.cardNumber}</span>
//                       <span>{card.expiry}</span>
//                     </div>

//                     {/* Status indicators */}
//                     <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1">
//                       {!card.isActive && (
//                         <div
//                           className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"
//                           title="Inactive"
//                         ></div>
//                       )}
//                       {card.isFrozen && (
//                         <div
//                           className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"
//                           title="Frozen"
//                         ></div>
//                       )}
//                       {card.isActive && !card.isFrozen && (
//                         <div
//                           className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"
//                           title="Active"
//                         ></div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Enhanced Responsive Card Body */}
//                 <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
//                   {/* Spending Progress */}
//                   <div>
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm font-medium text-gray-700">Daily Spending</span>
//                       <span className="text-xs sm:text-sm text-gray-500">
//                         ${card.dailySpent.toFixed(2)} / ${card.spendingLimit.toFixed(2)}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className={`bg-gradient-to-r ${card.color} h-2 rounded-full transition-all duration-300`}
//                         style={{ width: `${Math.min((card.dailySpent / card.spendingLimit) * 100, 100)}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Quick Stats */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                     <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
//                       <p className="text-xs text-gray-500">Monthly Rewards</p>
//                       <p className="text-sm sm:text-lg font-bold text-green-600">${card.monthlyRewards}</p>
//                     </div>
//                     <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
//                       <p className="text-xs text-gray-500">Last Activity</p>
//                       <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{card.lastTransaction}</p>
//                     </div>
//                   </div>

//                   {/* Expandable Card Controls */}
//                   <div className="space-y-3">
//                     <button
//                       onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
//                       className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                     >
//                       <span className="text-sm font-medium text-gray-700">Card Controls</span>
//                       {expandedCard === card.id ? (
//                         <ChevronUp className="w-4 h-4 text-gray-500" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4 text-gray-500" />
//                       )}
//                     </button>

//                     {expandedCard === card.id && (
//                       <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm font-medium text-gray-700">Status</span>
//                           <button
//                             onClick={() => toggleCardStatus(card.id)}
//                             disabled={isLoading}
//                             className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
//                               card.isActive
//                                 ? "bg-green-100 text-green-700 hover:bg-green-200"
//                                 : "bg-red-100 text-red-700 hover:bg-red-200"
//                             } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//                           >
//                             {card.isActive ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
//                             <span>{card.isActive ? "Active" : "Inactive"}</span>
//                           </button>
//                         </div>

//                         <div className="flex items-center justify-between">
//                           <span className="text-sm font-medium text-gray-700">Security</span>
//                           <button
//                             onClick={() => toggleCardFreeze(card.id)}
//                             disabled={isLoading}
//                             className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
//                               card.isFrozen
//                                 ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
//                                 : "bg-blue-100 text-blue-700 hover:bg-blue-200"
//                             } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//                           >
//                             {card.isFrozen ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
//                             <span>{card.isFrozen ? "Frozen" : "Active"}</span>
//                           </button>
//                         </div>

//                         <div className="flex items-center justify-between">
//                           <span className="text-sm font-medium text-gray-700">Spending Limit</span>
//                           <div className="flex items-center space-x-2">
//                             <DollarSign className="w-3 h-3 text-gray-400" />
//                             <input
//                               type="number"
//                               value={card.spendingLimit}
//                               onChange={(e) => updateSpendingLimit(card.id, Number.parseFloat(e.target.value) || 0)}
//                               className="w-20 text-xs text-right border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                               min="0"
//                               step="100"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Enhanced Action Buttons */}
//                   <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-gray-100">
//                     <button
//                       onClick={() => {
//                         setSelectedCard(card)
//                         setShowTransactionModal(true)
//                       }}
//                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group"
//                     >
//                       <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
//                       <span className="text-xs font-medium text-gray-700">History</span>
//                     </button>
//                     <button
//                       onClick={() => {
//                         setSelectedCard(card)
//                         setShowCardModal(true)
//                       }}
//                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors group"
//                     >
//                       <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
//                       <span className="text-xs font-medium text-gray-700">Settings</span>
//                     </button>
//                     <button
//                       onClick={() => handleCardPayment(card.id, 50, "Quick Payment")}
//                       disabled={!card.isActive || card.isFrozen || isLoading}
//                       className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-green-700 transition-colors" />
//                       <span className="text-xs font-medium text-green-700">Pay $50</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredCards.length === 0 && (
//             <div className="text-center py-12">
//               <CardIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No cards found</h3>
//               <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>

//         {/* Enhanced Responsive Quick Actions */}
//         <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50">
//           <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
//           <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
//             {[
//               {
//                 icon: Plus,
//                 label: "Add Card",
//                 color: "from-blue-500 to-cyan-500",
//                 action: () => addNotification("info", "Add card feature coming soon!"),
//               },
//               {
//                 icon: TrendingUp,
//                 label: "Analytics",
//                 color: "from-green-500 to-emerald-500",
//                 action: () => addNotification("info", "Analytics feature coming soon!"),
//               },
//               {
//                 icon: Shield,
//                 label: "Security",
//                 color: "from-purple-500 to-violet-500",
//                 action: () => addNotification("info", "Security settings coming soon!"),
//               },
//               {
//                 icon: Settings,
//                 label: "Settings",
//                 color: "from-gray-500 to-slate-500",
//                 action: () => addNotification("info", "Settings panel coming soon!"),
//               },
//               { icon: Download, label: "Export", color: "from-orange-500 to-red-500", action: handleExportData },
//               { icon: Share2, label: "Share", color: "from-pink-500 to-rose-500", action: handleShareData },
//             ].map((action, index) => (
//               <button
//                 key={index}
//                 onClick={action.action}
//                 className="flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100"
//               >
//                 <div
//                   className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${action.color} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                 </div>
//                 <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center">
//                   {action.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Payment Confirmation Modal */}
//       {showPaymentModal && selectedCard && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">Confirm Payment</h3>
//                 <button
//                   onClick={() => setShowPaymentModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4 sm:p-6 space-y-4">
//               <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 text-white`}>
//                 <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
//                 <p className="text-sm opacity-90">{selectedCard.cardNumber}</p>
//                 <p className="text-lg font-bold mt-2">Balance: ${selectedCard.balance.toFixed(2)}</p>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-sm font-medium text-gray-700">Merchant</span>
//                   <input
//                     type="text"
//                     value={paymentMerchant}
//                     onChange={(e) => setPaymentMerchant(e.target.value)}
//                     className="text-sm font-bold text-gray-900 bg-transparent border-none outline-none text-right"
//                     placeholder="Enter merchant name"
//                   />
//                 </div>

//                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
//                   <span className="text-sm font-medium text-gray-700">Amount</span>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-sm text-gray-500">$</span>
//                     <input
//                       type="number"
//                       value={paymentAmount}
//                       onChange={(e) => setPaymentAmount(Number.parseFloat(e.target.value) || 0)}
//                       className="text-lg font-bold text-gray-900 bg-transparent border-none outline-none text-right w-20"
//                       min="0.01"
//                       step="0.01"
//                       max={selectedCard.balance}
//                     />
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
//                   <span className="text-sm font-medium text-blue-700">Cashback ({selectedCard.cashback}%)</span>
//                   <span className="text-sm font-bold text-blue-900">
//                     +${((paymentAmount * selectedCard.cashback) / 100).toFixed(2)}
//                   </span>
//                 </div>

//                 {paymentAmount > selectedCard.balance && (
//                   <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
//                     <AlertCircle className="w-4 h-4 text-red-500" />
//                     <span className="text-sm text-red-700">Insufficient balance</span>
//                   </div>
//                 )}

//                 {selectedCard.dailySpent + paymentAmount > selectedCard.spendingLimit && (
//                   <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
//                     <AlertCircle className="w-4 h-4 text-yellow-500" />
//                     <span className="text-sm text-yellow-700">Daily limit will be exceeded</span>
//                   </div>
//                 )}
//               </div>

//               <div className="flex space-x-3 pt-4">
//                 <button
//                   onClick={() => setShowPaymentModal(false)}
//                   className="flex-1 py-3 px-4 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={confirmPayment}
//                   disabled={
//                     processingPayment ||
//                     paymentAmount <= 0 ||
//                     paymentAmount > selectedCard.balance ||
//                     !selectedCard.isActive ||
//                     selectedCard.isFrozen ||
//                     !paymentMerchant.trim()
//                   }
//                   className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {processingPayment ? "Processing..." : `Pay $${paymentAmount.toFixed(2)}`}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Responsive Modals */}
//       {showCardModal && selectedCard && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Settings</h3>
//                 <button
//                   onClick={() => setShowCardModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
//               <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 sm:p-6 text-white`}>
//                 <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
//                 <p className="text-sm opacity-90 mb-4">{selectedCard.cardNumber}</p>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-xs opacity-75">Balance</p>
//                     <p className="text-lg font-bold">${selectedCard.balance.toFixed(2)}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs opacity-75">Cashback Rate</p>
//                     <p className="text-lg font-bold">{selectedCard.cashback}%</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h5 className="font-semibold text-gray-900">Card Features</h5>
//                 <div className="grid gap-2">
//                   {selectedCard.features.map((feature, index) => (
//                     <div key={index} className="flex items-center space-x-2">
//                       <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                       <span className="text-sm text-gray-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
//                 <button
//                   onClick={() => {
//                     toggleCardStatus(selectedCard.id)
//                     setShowCardModal(false)
//                   }}
//                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
//                     selectedCard.isActive
//                       ? "bg-red-100 text-red-700 hover:bg-red-200"
//                       : "bg-green-100 text-green-700 hover:bg-green-200"
//                   }`}
//                 >
//                   {selectedCard.isActive ? "Deactivate Card" : "Activate Card"}
//                 </button>
//                 <button
//                   onClick={() => {
//                     toggleCardFreeze(selectedCard.id)
//                     setShowCardModal(false)
//                   }}
//                   className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
//                     selectedCard.isFrozen
//                       ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
//                       : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
//                   }`}
//                 >
//                   {selectedCard.isFrozen ? "Unfreeze Card" : "Freeze Card"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showTransactionModal && selectedCard && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Transactions</h3>
//                 <button
//                   onClick={() => setShowTransactionModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 {selectedCard.transactions.map((transaction) => {
//                   const IconComponent = getCategoryIcon(transaction.category)
//                   return (
//                     <div
//                       key={transaction.id}
//                       className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl"
//                     >
//                       <div
//                         className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
//                           transaction.type === "purchase"
//                             ? "bg-red-100"
//                             : transaction.type === "reward"
//                               ? "bg-green-100"
//                               : "bg-blue-100"
//                         }`}
//                       >
//                         <IconComponent
//                           className={`w-5 h-5 ${
//                             transaction.type === "purchase"
//                               ? "text-red-600"
//                               : transaction.type === "reward"
//                                 ? "text-green-600"
//                                 : "text-blue-600"
//                           }`}
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="font-medium text-gray-900 truncate">{transaction.merchant}</p>
//                         <p className="text-sm text-gray-500">{transaction.time}</p>
//                         {transaction.status && (
//                           <p className="text-xs text-green-600 capitalize">{transaction.status}</p>
//                         )}
//                       </div>
//                       <div className="text-right flex-shrink-0">
//                         <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
//                           {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
//                         </p>
//                         <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
//                       </div>
//                     </div>
//                   )
//                 })}
//                 {selectedCard.transactions.length === 0 && (
//                   <div className="text-center py-8">
//                     <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                     <p className="text-gray-500">No transactions yet</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showPlanModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Choose Your Plan</h3>
//                 <button
//                   onClick={() => setShowPlanModal(false)}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4 sm:p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
//                 {plans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
//                       plan.popular
//                         ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
//                         : "border-gray-200 bg-white hover:border-gray-300"
//                     } ${selectedPlan === plan.id ? "ring-4 ring-purple-200" : ""}`}
//                   >
//                     {plan.popular && (
//                       <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                         <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
//                           Most Popular
//                         </span>
//                       </div>
//                     )}

//                     <div className="text-center mb-4 sm:mb-6">
//                       <div
//                         className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${plan.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
//                       >
//                         {plan.id === "basic" && <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
//                         {plan.id === "premium" && <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
//                         {plan.id === "platinum" && <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
//                       </div>
//                       <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
//                       <div className="text-2xl sm:text-3xl font-bold text-gray-900">
//                         ${plan.price}
//                         <span className="text-sm font-normal text-gray-500">/month</span>
//                       </div>
//                     </div>

//                     <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
//                       {plan.features.map((feature, index) => (
//                         <div key={index} className="flex items-center space-x-2">
//                           <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                           <span className="text-sm text-gray-700">{feature}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <button
//                       onClick={() => upgradePlan(plan.id)}
//                       disabled={isLoading || selectedPlan === plan.id}
//                       className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
//                         selectedPlan === plan.id
//                           ? "bg-green-100 text-green-700 cursor-default"
//                           : plan.popular
//                             ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
//                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//                     >
//                       {selectedPlan === plan.id ? "Current Plan" : `Upgrade to ${plan.name}`}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Responsive Notifications Panel */}
//       {showNotificationPanel && (
//         <div className="fixed top-14 sm:top-16 right-4 w-80 sm:w-96 bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 z-40 max-h-96 overflow-y-auto">
//           <div className="p-4 border-b border-gray-200 flex items-center justify-between">
//             <h3 className="font-semibold text-gray-900">Notifications</h3>
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={clearAllNotifications}
//                 className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 Clear All
//               </button>
//               <button
//                 onClick={() => setShowNotificationPanel(false)}
//                 className="p-1 hover:bg-gray-100 rounded transition-colors"
//               >
//                 <X className="w-4 h-4 text-gray-500" />
//               </button>
//             </div>
//           </div>
//           <div className="p-4 space-y-3">
//             {notifications.length === 0 ? (
//               <div className="text-center py-8">
//                 <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                 <p className="text-gray-500 text-sm">No notifications</p>
//               </div>
//             ) : (
//               notifications.map((notification) => (
//                 <div
//                   key={notification.id}
//                   onClick={() => markNotificationAsRead(notification.id)}
//                   className={`flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-colors ${
//                     notification.read ? "bg-gray-50" : "bg-blue-50 hover:bg-blue-100"
//                   }`}
//                 >
//                   <div
//                     className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
//                       notification.type === "success"
//                         ? "bg-green-500"
//                         : notification.type === "warning"
//                           ? "bg-yellow-500"
//                           : notification.type === "error"
//                             ? "bg-red-500"
//                             : "bg-blue-500"
//                     }`}
//                   ></div>
//                   <div className="flex-1 min-w-0">
//                     <p className={`text-sm ${notification.read ? "text-gray-600" : "text-gray-900 font-medium"}`}>
//                       {notification.message}
//                     </p>
//                     <p className="text-xs text-gray-500">{notification.time}</p>
//                   </div>
//                   {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}

//       {/* Loading Overlay */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
//             <div className="flex items-center space-x-3">
//               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
//               <span className="text-gray-700 text-sm sm:text-base">Processing...</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CreditCardDashboard

