/* eslint-disable react/prop-types */
// // /* eslint-disable react/prop-types */
// // // // // // // import { useState } from "react";

// // // // // // // export default function NewCheckerCards() {
// // // // // // //   const [score] = useState(null);
// // // // // // //   const [loading] = useState(false);



// // // // // // //   const getScoreColor = () => {
// // // // // // //     if (!score) return "text-gray-700";
// // // // // // //     if (score < 580) return "text-red-600";
// // // // // // //     if (score < 670) return "text-yellow-600";
// // // // // // //     if (score < 740) return "text-blue-600";
// // // // // // //     return "text-green-600";
// // // // // // //   };

// // // // // // //   const getScoreCategory = () => {
// // // // // // //     if (!score) return "";
// // // // // // //     if (score < 580) return "Poor";
// // // // // // //     if (score < 670) return "Fair";
// // // // // // //     if (score < 740) return "Good";
// // // // // // //     if (score < 800) return "Very Good";
// // // // // // //     return "Excellent";
// // // // // // //   };

// // // // // // //   const getScoreWidth = () => {
// // // // // // //     if (!score) return "0%";
// // // // // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="max-w-md mx-auto p-4">
// // // // // // //       <div className=" bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // // // // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>


// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // // // // // //             disabled={loading}
// // // // // // //           >
// // // // // // //             {loading ? (
// // // // // // //               <div className="flex items-center justify-center">
// // // // // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // // // // // //                 Checking...
// // // // // // //               </div>
// // // // // // //             ) : "Check Credit Score"}
// // // // // // //           </button>
    
// // // // // // //       </div>

// // // // // // //       {score !== null && !loading && (
// // // // // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // // // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // // // // // //           <div className="flex justify-between text-xs mb-1">
// // // // // // //             <span>Poor</span>
// // // // // // //             <span>Fair</span>
// // // // // // //             <span>Good</span>
// // // // // // //             <span>Excellent</span>
// // // // // // //           </div>

// // // // // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // // // // //             <div
// // // // // // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // // // // //               style={{ width: getScoreWidth() }}
// // // // // // //             ></div>
// // // // // // //           </div>

// // // // // // //           <div className="flex justify-between">
// // // // // // //             <span className="text-xs">300</span>
// // // // // // //             <span className="text-xs">850</span>
// // // // // // //           </div>

// // // // // // //           <div className="text-center mt-6">
// // // // // // //             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // // // // // //               {score}
// // // // // // //             </p>
// // // // // // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // // // // // //             <p className="mt-4 text-gray-600 text-sm">
// // // // // // //               {score < 670
// // // // // // //                 ? "Consider improving your credit score by paying bills on time and reducing debt."
// // // // // // //                 : "Congratulations! You have a healthy credit score."}
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }





// // // // // // import { useState } from "react";

// // // // // // export default function NewCheckerCards() {
// // // // // //   const [score, setScore] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const handleCheckScore = () => {
// // // // // //     setLoading(true);

// // // // // //     // Simulate API call delay
// // // // // //     setTimeout(() => {
// // // // // //       const randomScore = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
// // // // // //       setScore(randomScore);
// // // // // //       setLoading(false);
// // // // // //     }, 1500);
// // // // // //   };

// // // // // //   const getScoreColor = () => {
// // // // // //     if (!score) return "text-gray-700";
// // // // // //     if (score < 580) return "text-red-600";
// // // // // //     if (score < 670) return "text-yellow-600";
// // // // // //     if (score < 740) return "text-blue-600";
// // // // // //     return "text-green-600";
// // // // // //   };

// // // // // //   const getScoreCategory = () => {
// // // // // //     if (!score) return "";
// // // // // //     if (score < 580) return "Poor";
// // // // // //     if (score < 670) return "Fair";
// // // // // //     if (score < 740) return "Good";
// // // // // //     if (score < 800) return "Very Good";
// // // // // //     return "Excellent";
// // // // // //   };

// // // // // //   const getScoreWidth = () => {
// // // // // //     if (!score) return "0%";
// // // // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-md mx-auto p-4">
// // // // // //       <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // // // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // // // // //         <button
// // // // // //           onClick={handleCheckScore}
// // // // // //           className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // // // // //           disabled={loading}
// // // // // //         >
// // // // // //           {loading ? (
// // // // // //             <div className="flex items-center justify-center">
// // // // // //               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // // // // //               Checking...
// // // // // //             </div>
// // // // // //           ) : "Check Credit Score"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {score !== null && !loading && (
// // // // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // // // // //           <div className="flex justify-between text-xs mb-1">
// // // // // //             <span>Poor</span>
// // // // // //             <span>Fair</span>
// // // // // //             <span>Good</span>
// // // // // //             <span>Excellent</span>
// // // // // //           </div>

// // // // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // // // //             <div
// // // // // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // // // //               style={{ width: getScoreWidth() }}
// // // // // //             ></div>
// // // // // //           </div>

// // // // // //           <div className="flex justify-between">
// // // // // //             <span className="text-xs">300</span>
// // // // // //             <span className="text-xs">850</span>
// // // // // //           </div>

// // // // // //           <div className="text-center mt-6">
// // // // // //             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // // // // //               {score}
// // // // // //             </p>
// // // // // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // // // // //             <p className="mt-4 text-gray-600 text-sm">
// // // // // //               {score < 670
// // // // // //                 ? "Consider improving your credit score by paying bills on time and reducing debt."
// // // // // //                 : "Congratulations! You have a healthy credit score."}
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // import { useState, useEffect } from "react";

// // // // // export default function NewCheckerCards() {
// // // // //   const [score, setScore] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const storedScore = localStorage.getItem("userCreditScore");
// // // // //     if (storedScore) {
// // // // //       setScore(Number(storedScore));
// // // // //     }
// // // // //   }, []);

// // // // //   const handleCheckScore = () => {
// // // // //     if (score !== null) return; // Already has a score, no need to fetch again

// // // // //     setLoading(true);

// // // // //     setTimeout(() => {
// // // // //       const randomScore = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
// // // // //       localStorage.setItem("userCreditScore", randomScore); // Save to localStorage
// // // // //       setScore(randomScore);
// // // // //       setLoading(false);
// // // // //     }, 1500);
// // // // //   };

// // // // //   const getScoreColor = () => {
// // // // //     if (!score) return "text-gray-700";
// // // // //     if (score < 580) return "text-red-600";
// // // // //     if (score < 670) return "text-yellow-600";
// // // // //     if (score < 740) return "text-blue-600";
// // // // //     return "text-green-600";
// // // // //   };

// // // // //   const getScoreCategory = () => {
// // // // //     if (!score) return "";
// // // // //     if (score < 580) return "Poor";
// // // // //     if (score < 670) return "Fair";
// // // // //     if (score < 740) return "Good";
// // // // //     if (score < 800) return "Very Good";
// // // // //     return "Excellent";
// // // // //   };

// // // // //   const getScoreWidth = () => {
// // // // //     if (!score) return "0%";
// // // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-md mx-auto p-4">
// // // // //       <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // // // //         <button
// // // // //           onClick={handleCheckScore}
// // // // //           className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // // // //           disabled={loading}
// // // // //         >
// // // // //           {loading ? (
// // // // //             <div className="flex items-center justify-center">
// // // // //               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // // // //               Checking...
// // // // //             </div>
// // // // //           ) : score !== null ? "Score Checked" : "Check Credit Score"}
// // // // //         </button>
// // // // //       </div>

// // // // //       {score !== null && !loading && (
// // // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // // // //           <div className="flex justify-between text-xs mb-1">
// // // // //             <span>Poor</span>
// // // // //             <span>Fair</span>
// // // // //             <span>Good</span>
// // // // //             <span>Excellent</span>
// // // // //           </div>
// // // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // // //             <div
// // // // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // // //               style={{ width: getScoreWidth() }}
// // // // //             ></div>
// // // // //           </div>
// // // // //           <div className="flex justify-between">
// // // // //             <span className="text-xs">300</span>
// // // // //             <span className="text-xs">850</span>
// // // // //           </div>
// // // // //           <div className="text-center mt-6">
// // // // //             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // // // //               {score}
// // // // //             </p>
// // // // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // // // //             <p className="mt-4 text-gray-600 text-sm">
// // // // //               {score < 670
// // // // //                 ? "Consider improving your credit score by paying bills on time and reducing debt."
// // // // //                 : "Congratulations! You have a healthy credit score."}
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import { useState } from "react";

// // // // export default function CreditScoreChecker() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [phone, setPhone] = useState("");
// // // //   const [score, setScore] = useState(null);
// // // //   const [loading, setLoading] = useState(false);

// // // //   const generateScore = (key) => {
// // // //     // Simple hash to get consistent number between 700-850
// // // //     let hash = 0;
// // // //     for (let i = 0; i < key.length; i++) {
// // // //       hash = key.charCodeAt(i) + ((hash << 5) - hash);
// // // //     }
// // // //     const normalized = Math.abs(hash % 151); // 850 - 700 = 150, so 0–150
// // // //     return 700 + normalized;
// // // //   };

// // // //   const handleCheckScore = () => {
// // // //     if (!email || !phone) {
// // // //       alert("Please enter both email and phone number");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     setTimeout(() => {
// // // //       const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`;
// // // //       const stored = localStorage.getItem(`score-${userKey}`);

// // // //       if (stored) {
// // // //         setScore(Number(stored));
// // // //       } else {
// // // //         const newScore = generateScore(userKey);
// // // //         localStorage.setItem(`score-${userKey}`, newScore);
// // // //         setScore(newScore);
// // // //       }

// // // //       setLoading(false);
// // // //     }, 1000);
// // // //   };

// // // //   const getScoreColor = () => {
// // // //     if (!score) return "text-gray-700";
// // // //     if (score < 740) return "text-blue-600";
// // // //     if (score < 800) return "text-green-600";
// // // //     return "text-emerald-600";
// // // //   };
// // // //   const getScoreWidth = () => {
// // // //     if (!score) return "0%";
// // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // //   };
// // // //   return (
// // // //     <div className="max-w-md mx-auto p-4">
// // // //       <div className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-xl shadow-lg p-6 text-white">
// // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Enter your email"
// // // //           className="w-full mb-4 p-3 rounded text-black"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter your phone number"
// // // //           className="w-full mb-4 p-3 rounded text-black"
// // // //           value={phone}
// // // //           onChange={(e) => setPhone(e.target.value)}
// // // //         />
// // // //         <button
// // // //           onClick={handleCheckScore}
// // // //           className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
// // // //           disabled={loading}
// // // //         >
// // // //           {loading ? "Checking..." : "Check Credit Score"}
// // // //         </button>
// // // //       </div>
// // // //       {score && (
// // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score</h3>
// // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // //             <div
// // // //               className="h-6 rounded-full bg-gradient-to-r from-blue-400 to-green-500"
// // // //               style={{ width: getScoreWidth() }}
// // // //             ></div>
// // // //           </div>
// // // //           <p className={`text-4xl font-bold text-center ${getScoreColor()}`}>
// // // //             {score}
// // // //           </p>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
  









// // // import { useLocation } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import CreditCardLayout from "./CardsOffers";


// // // export default function NewCheckerCards() {
// // //   const location = useLocation();
// // // //   const { email, phone } = location.state || {};

// // //   const [score, setScore] = useState(null);
// // //   const [loading, setLoading] = useState(false);

// // //   const [email, setEmail] = useState("");
// // //   const [phone, setPhone] = useState("");   


// // //   useEffect(() => {
// // //     const locEmail = location.state?.email;
// // //     const locPhone = location.state?.phone;

// // //     const storedEmail = localStorage.getItem("userEmail");
// // //     const storedPhone = localStorage.getItem("userPhone");

// // //     const finalEmail = locEmail || storedEmail || "";
// // //     const finalPhone = locPhone || storedPhone || "";

// // //     setEmail(finalEmail);
// // //     setPhone(finalPhone);
// // //   }, [location.state]);

// // //   useEffect(() => {
// // //     if (email && phone) handleCheckScore();
// // //   }, [email, phone]);


// // //   const generateScore = (key) => {
// // //     let hash = 0;
// // //     for (let i = 0; i < key.length; i++) {
// // //       hash = key.charCodeAt(i) + ((hash << 5) - hash);
// // //     }
// // //     const normalized = Math.abs(hash % 151);
// // //     return 700 + normalized; // score will be between 700 and 850
// // //   };

// // //   const getUserScore = () => {
// // //     if (!email || !phone) return;

// // //     const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`;
// // //     const stored = localStorage.getItem(`score-${userKey}`);

// // //     if (stored) {
// // //       setScore(Number(stored));
// // //     } else {
// // //       const newScore = generateScore(userKey);
// // //       localStorage.setItem(`score-${userKey}`, newScore);
// // //       setScore(newScore);
// // //     }
// // //   };

// // //   const handleCheckScore = () => {
// // //     setLoading(true);
// // //     setTimeout(() => {
// // //       getUserScore();
// // //       setLoading(false);
// // //     }, 1000);
// // //   };

// // //   const getScoreColor = () => {
// // //     if (!score) return "text-gray-700";
// // //     if (score < 580) return "text-red-600";
// // //     if (score < 670) return "text-yellow-600";
// // //     if (score < 740) return "text-blue-600";
// // //     return "text-green-600";
// // //   };

// // //   const getScoreCategory = () => {
// // //     if (!score) return "";
// // //     if (score < 580) return "Poor";
// // //     if (score < 670) return "Fair";
// // //     if (score < 740) return "Good";
// // //     if (score < 800) return "Very Good";
// // //     return "Excellent";
// // //   };

// // //   const getScoreWidth = () => {
// // //     if (!score) return "0%";
// // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // //   };

// // //   useEffect(() => {
// // //     if (email && phone) handleCheckScore();
// // //   }, []);

// // //   return (
// // //     <>
// // //     <div className="max-w-md mx-auto p-4">
// // //       <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // //         <button
// // //           type="button"
// // //           className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // //           disabled={loading}
// // //           onClick={handleCheckScore}
// // //         >
// // //           {loading ? (
// // //             <div className="flex items-center justify-center">
// // //               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // //               Checking...
// // //             </div>
// // //           ) : "Check Credit Score"}
// // //         </button>
// // //       </div>

// // //       {score !== null && !loading && (
// // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // //           <div className="flex justify-between text-xs mb-1">
// // //             <span>Poor</span>
// // //             <span>Fair</span>
// // //             <span>Good</span>
// // //             <span>Excellent</span>
// // //           </div>

// // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // //             <div
// // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // //               style={{ width: getScoreWidth() }}
// // //             ></div>
// // //           </div>

// // //           <div className="flex justify-between">
// // //             <span className="text-xs">300</span>
// // //             <span className="text-xs">850</span>
// // //           </div>

// // //           <div className="text-center mt-6">
// // //             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // //               {score}
// // //             </p>
// // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // //             <p className="mt-4 text-gray-600 text-sm">
// // //               {score < 670
// // //                 ? "Consider improving your credit score by paying bills on time and reducing debt."
// // //                 : "Congratulations! You have a healthy credit score."}
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //     <CreditCardLayout/>
// // //     </>
// // //   );
// // // }



// // // import { useLocation } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import CreditCardLayout from "./CardsOffers";

// // // export default function NewCheckerCards() {
// // //   const location = useLocation();
// // //   const [score, setScore] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [email, setEmail] = useState("");
// // //   const [phone, setPhone] = useState("");   

// // //   useEffect(() => {
// // //     const locEmail = location.state?.email;
// // //     const locPhone = location.state?.phone;

// // //     const storedEmail = localStorage.getItem("userEmail");
// // //     const storedPhone = localStorage.getItem("userPhone");

// // //     const finalEmail = locEmail || storedEmail || "";
// // //     const finalPhone = locPhone || storedPhone || "";

// // //     setEmail(finalEmail);
// // //     setPhone(finalPhone);
// // //   }, [location.state]);

// // //   useEffect(() => {
// // //     if (email && phone) handleCheckScore();
// // //   }, [email, phone]);

// // //   const generateScore = (key) => {
// // //     let hash = 0;
// // //     for (let i = 0; i < key.length; i++) {
// // //       hash = key.charCodeAt(i) + ((hash << 5) - hash);
// // //     }
// // //     const normalized = Math.abs(hash % 151);
// // //     return 700 + normalized; // score will be between 700 and 850
// // //   };

// // //   const getUserScore = () => {
// // //     if (!email || !phone) return;

// // //     const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`;
// // //     const stored = localStorage.getItem(`score-${userKey}`);

// // //     if (stored) {
// // //       setScore(Number(stored));
// // //     } else {
// // //       const newScore = generateScore(userKey);
// // //       localStorage.setItem(`score-${userKey}`, newScore);
// // //       setScore(newScore);
// // //     }
// // //   };

// // //   const handleCheckScore = () => {
// // //     setLoading(true);
// // //     setTimeout(() => {
// // //       getUserScore();
// // //       setLoading(false);
// // //     }, 1000);
// // //   };

// // //   const getScoreColor = () => {
// // //     if (!score) return "text-gray-700";
// // //     if (score < 580) return "text-red-600";
// // //     if (score < 670) return "text-yellow-600";
// // //     if (score < 740) return "text-blue-600";
// // //     return "text-green-600";
// // //   };

// // //   const getScoreCategory = () => {
// // //     if (!score) return "";
// // //     if (score < 580) return "Poor";
// // //     if (score < 670) return "Fair";
// // //     if (score < 740) return "Good";
// // //     if (score < 800) return "Very Good";
// // //     return "Excellent";
// // //   };

// // //   // Calculate the rotation angle for the needle based on the score
// // //   const getNeedleRotation = () => {
// // //     if (!score) return 0;
// // //     // Maps score from 300-850 to -90 to 90 degrees (180 degree arc)
// // //     const minScore = 300;
// // //     const maxScore = 850;
// // //     const scoreRange = maxScore - minScore;
// // //     const percentage = (score - minScore) / scoreRange;
// // //     return -90 + (percentage * 180);
// // //   };

// // //   useEffect(() => {
// // //     if (email && phone) handleCheckScore();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div className="max-w-md mx-auto p-4">
// // //         <div className="bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // //           <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // //           <button
// // //             type="button"
// // //             className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // //             disabled={loading}
// // //             onClick={handleCheckScore}
// // //           >
// // //             {loading ? (
// // //               <div className="flex items-center justify-center">
// // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // //                 Checking...
// // //               </div>
// // //             ) : "Check Credit Score"}
// // //           </button>
// // //         </div>

// // //         {score !== null && !loading && (
// // //           <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // //             <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>
            
// // //             {/* Speedometer Container */}
// // //             <div className="relative w-full h-48 mb-4">
// // //               {/* Speedometer Arc Background */}
// // //               <div className="absolute w-full h-48 overflow-hidden">
// // //                 <div className="w-full h-full relative">
// // //                   {/* Semicircle Background */}
// // //                   <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-t-full"></div>
                  
// // //                   {/* White Center Circle */}
// // //                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-white rounded-t-full"></div>
// // //                 </div>
// // //               </div>
              
// // //               {/* Score Labels */}
// // //               <div className="absolute top-4 left-2 text-xs font-bold text-white">Poor</div>
// // //               <div className="absolute top-1 left-1/4 text-xs font-bold text-white">Fair</div>
// // //               <div className="absolute top-1 right-1/4 text-xs font-bold text-white">Good</div>
// // //               <div className="absolute top-4 right-2 text-xs font-bold text-white">Excellent</div>
              
// // //               {/* Score Range */}
// // //               <div className="absolute bottom-0 left-2 text-xs">300</div>
// // //               <div className="absolute bottom-0 right-2 text-xs">850</div>
              
// // //               {/* Needle */}
// // //               <div 
// // //                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom"
// // //                 style={{ 
// // //                   transform: `translateX(-50%) rotate(${getNeedleRotation()}deg)`,
// // //                   transition: 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
// // //                 }}
// // //               >
// // //                 <div className="w-1 h-32 bg-gray-800 rounded-t-full"></div>
// // //                 <div className="w-4 h-4 rounded-full bg-gray-800 relative -top-1 -left-1.5"></div>
// // //               </div>
// // //             </div>

// // //             <div className="text-center mt-8">
// // //               <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // //                 {score}
// // //               </p>
// // //               <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // //               <p className="mt-4 text-gray-600 text-sm">
// // //                 {score < 670
// // //                   ? "Consider improving your credit score by paying bills on time and reducing debt."
// // //                   : "Congratulations! You have a healthy credit score."}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //       <CreditCardLayout/>
// // //     </>
// // //   );
// // // } 




// // // import  { useState, useEffect } from 'react';
// // // import { ArrowUp } from 'lucide-react';
// // // import CreditCardLayout from './CardsOffers';



// // // const CreditScoreGauge = ({ score, loading }) => {
// // //   const getNeedleRotation = () => {
// // //     if (!score) return 0;
// // //     const minScore = 300;
// // //     const maxScore = 850;
// // //     const scoreRange = maxScore - minScore;
// // //     const percentage = (score - minScore) / scoreRange;
// // //     return -120 + (percentage * 240);
// // //   };

// // //   const getScoreCategory = () => {
// // //     if (!score) return "";
// // //     if (score < 580) return "Poor";
// // //     if (score < 670) return "Fair";
// // //     if (score < 740) return "Good";
// // //     if (score < 800) return "Very Good";
// // //     return "Excellent";
// // //   };

// // //   const getScoreColor = () => {
// // //     if (!score) return "text-gray-700";
// // //     if (score < 580) return "text-red-600";
// // //     if (score < 670) return "text-yellow-600";
// // //     if (score < 740) return "text-blue-600";
// // //     return "text-green-600";
// // //   };

// // //   const getGaugeGradient = () => {
// // //     if (loading || !score) return "from-gray-300 via-gray-300 to-gray-300";
// // //     return "from-red-500 via-yellow-400 to-green-500";
// // //   };

// // //   return (
// // //     <div className="relative w-full flex flex-col items-center">
// // //       <div className="relative w-64 h-32 mt-4 mb-8">
// // //         <div className="absolute w-full h-full overflow-hidden">
// // //           <div className={`absolute w-full h-64 -top-32 rounded-full bg-gradient-to-r ${getGaugeGradient()} shadow-inner`}>
// // //             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[95%] bg-white rounded-full"/>
// // //           </div>
// // //         </div>

// // //         <div className="absolute w-full h-full">
// // //           {[...Array(9)].map((_, i) => (
// // //             <div 
// // //               key={i} 
// // //               className="absolute w-1 h-4 bg-gray-400 bottom-0 left-1/2 origin-bottom" 
// // //               style={{ transform: `translateX(-50%) rotate(${-120 + i * 30}deg) translateY(-60px)` }}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="absolute w-full h-full text-[10px] font-medium text-gray-700">
// // //           <div className="absolute bottom-2 left-3">300</div>
// // //           <div className="absolute bottom-6 left-1 transform -rotate-45">Poor</div>
// // //           <div className="absolute top-10 left-6 transform -rotate-30">Fair</div>
// // //           <div className="absolute top-1 left-1/2 transform -translate-x-1/2">Good</div>
// // //           <div className="absolute top-10 right-6 transform rotate-30">Very Good</div>
// // //           <div className="absolute bottom-6 right-1 transform rotate-45">Excellent</div>
// // //           <div className="absolute bottom-2 right-3">850</div>
// // //         </div>

// // //         <div className="absolute w-full h-full">
// // //           <div 
// // //             className={`absolute bottom-0 left-1/2 w-[2px] h-[90px] bg-gray-800 origin-bottom transition-transform duration-1000 ease-bounce ${loading ? 'opacity-0' : 'opacity-100'}`}
// // //             style={{ transform: `translateX(-50%) rotate(${getNeedleRotation()}deg)` }}
// // //           >
// // //             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-gray-800">
// // //               <ArrowUp size={16} />
// // //             </div>
// // //           </div>
          
// // //           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 border-2 border-white shadow-md z-10"/>
// // //         </div>
// // //       </div>
      
// // //       {score && !loading && (
// // //         <div className="text-center mt-2 transition-all duration-500 ease-in-out">
// // //           <div className="flex flex-col items-center justify-center">
// // //             <p className={`text-5xl font-bold mb-1 transition-all ${getScoreColor()}`}>
// // //               {score}
// // //             </p>
// // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // //           </div>
// // //         </div>
// // //       )}
      
// // //       {loading && (
// // //         <div className="text-center mt-4">
// // //           <div className="animate-pulse flex flex-col items-center justify-center">
// // //             <div className="h-10 w-24 bg-gray-200 rounded mb-2"></div>
// // //             <div className="h-5 w-40 bg-gray-200 rounded"></div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };




// // // const CreditScoreResult = ({ score, loading }) => {
// // //   const getScoreMessage = () => {
// // //     if (!score) return "";
    
// // //     if (score < 580) {
// // //       return "Your score falls in the Poor range. Consider working with a credit counselor to improve your credit health.";
// // //     } else if (score < 670) {
// // //       return "Your score is Fair. Focus on paying bills on time and reducing credit card balances to improve your score.";
// // //     } else if (score < 740) {
// // //       return "You have a Good credit score. Continue your positive credit habits to maintain or improve your score.";
// // //     } else if (score < 800) {
// // //       return "Very Good! Your score is above average. You likely qualify for favorable rates on loans and credit cards.";
// // //     } else {
// // //       return "Excellent! Your exceptional credit score indicates responsible credit management. You'll likely qualify for the best rates.";
// // //     }
// // //   };
  
// // //   return (
// // //     <div className="mt-8 bg-white rounded-xl shadow-lg p-6 transition-all duration-300">
// // //       <h3 className="text-xl font-bold mb-6 text-center">Your Credit Score Result</h3>
// // //       <CreditScoreGauge score={score} loading={loading} />
      
// // //       {score !== null && !loading && (
// // //         <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
// // //           <p className="text-gray-700 text-sm leading-relaxed">
// // //             {getScoreMessage()}
// // //           </p>
// // //         </div>
// // //       )}
      
// // //       {score !== null && !loading && (
// // //         <div className="mt-4 text-xs text-gray-500">
// // //           <p className="mt-2 text-center italic">
// // //             Updated {new Date().toLocaleDateString()}
// // //           </p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // // Main App Component
// // // function NewCheckerCards() {
// // //   const [score, setScore] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [email, setEmail] = useState("");
// // //   const [phone, setPhone] = useState("");

// // //   useEffect(() => {
// // //     const storedEmail = localStorage.getItem("userEmail");
// // //     const storedPhone = localStorage.getItem("userPhone");

// // //     setEmail(storedEmail || "");
// // //     setPhone(storedPhone || "");
// // //   }, []);

// // //   const generateScore = (key) => {
// // //     let hash = 0;
// // //     for (let i = 0; i < key.length; i++) {
// // //       hash = key.charCodeAt(i) + ((hash << 5) - hash);
// // //     }
// // //     const normalized = Math.abs(hash % 151);
// // //     return 700 + normalized;
// // //   };

// // //   const getUserScore = () => {
// // //     if (!email || !phone) return;

// // //     const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`;
// // //     const stored = localStorage.getItem(`score-${userKey}`);

// // //     if (stored) {
// // //       setScore(Number(stored));
// // //     } else {
// // //       const newScore = generateScore(userKey);
// // //       localStorage.setItem(`score-${userKey}`, String(newScore));
// // //       setScore(newScore);
// // //     }
// // //   };

// // //   const handleCheckScore = () => {
// // //     setLoading(true);
// // //     setTimeout(() => {
// // //       getUserScore();
// // //       setLoading(false);
// // //     }, 1500);
// // //   };

// // //   useEffect(() => {
// // //     if (email && phone) handleCheckScore();
// // //   }, [email, phone]);

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-8">
// // //       <div className="max-w-md mx-auto p-4">
// // //         <div className="bg-gradient-to-br from-[#550665] to-[#27012F] rounded-xl shadow-xl p-6 text-white">
// // //           <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>
// // //           <button
// // //             type="button"
// // //             className="w-full bg-white text-[#550665] py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-md"
// // //             disabled={loading}
// // //             onClick={handleCheckScore}
// // //           >
// // //             {loading ? (
// // //               <div className="flex items-center justify-center">
// // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#550665] mr-2"></div>
// // //                 Analyzing Your Credit...
// // //               </div>
// // //             ) : "Check Credit Score"}
// // //           </button>
// // //         </div>

// // //         {(score !== null || loading) && (
// // //           <CreditScoreResult score={score} loading={loading} />
// // //         )}
// // //       </div>
// // //       <CreditCardLayout/>
// // //     </div>
// // //   );
// // // }
// // // export default NewCheckerCards;





// // import { useState, useEffect } from "react"
// // import { ArrowUp, CreditCard, RefreshCw, Info, ChevronRight, AlertCircle, CheckCircle, Shield } from "lucide-react"
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Progress } from "@/components/ui/progress"
// // import { Separator } from "@/components/ui/separator"
// // import { Badge } from "@/components/ui/badge"
// // import { Link } from "react-router-dom"

// // const CreditScoreGauge = ({ score, loading }) => {
// //   const getNeedleRotation = () => {
// //     if (!score) return 0
// //     const minScore = 300
// //     const maxScore = 850
// //     const scoreRange = maxScore - minScore
// //     const percentage = (score - minScore) / scoreRange
// //     return -120 + percentage * 240
// //   }

// //   const getScoreCategory = () => {
// //     if (!score) return ""
// //     if (score < 580) return "Poor"
// //     if (score < 670) return "Fair"
// //     if (score < 740) return "Good"
// //     if (score < 800) return "Very Good"
// //     return "Excellent"
// //   }

// //   const getScoreColor = () => {
// //     if (!score) return "text-gray-700"
// //     if (score < 580) return "text-red-600 dark:text-red-500"
// //     if (score < 670) return "text-amber-600 dark:text-amber-500"
// //     if (score < 740) return "text-blue-600 dark:text-blue-500"
// //     if (score < 800) return "text-emerald-600 dark:text-emerald-500"
// //     return "text-green-600 dark:text-green-500"
// //   }

// //   const getGaugeGradient = () => {
// //     if (loading || !score)
// //       return "from-gray-300 via-gray-300 to-gray-300 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700"
// //     return "from-red-500 via-amber-400 to-green-500"
// //   }

// //   return (
// //     <div className="relative w-full flex flex-col items-center">
// //       <div className="relative w-full max-w-[280px] h-40 mt-4 mb-8">
// //         <div className="absolute w-full h-full overflow-hidden">
// //           <div
// //             className={`absolute w-full h-80 -top-40 rounded-full bg-gradient-to-r ${getGaugeGradient()} shadow-inner`}
// //           >
// //             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[95%] bg-card rounded-full" />
// //           </div>
// //         </div>

// //         <div className="absolute w-full h-full">
// //           {[...Array(9)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute w-1 h-4 bg-gray-400 dark:bg-gray-600 bottom-0 left-1/2 origin-bottom"
// //               style={{ transform: `translateX(-50%) rotate(${-120 + i * 30}deg) translateY(-75px)` }}
// //             />
// //           ))}
// //         </div>

// //         <div className="absolute w-full h-full text-[10px] font-medium text-gray-700 dark:text-gray-300">
// //           <div className="absolute bottom-2 left-5">300</div>
// //           <div className="absolute bottom-8 left-2 transform -rotate-45">Poor</div>
// //           <div className="absolute top-12 left-8 transform -rotate-30">Fair</div>
// //           <div className="absolute top-2 left-1/2 transform -translate-x-1/2">Good</div>
// //           <div className="absolute top-12 right-8 transform rotate-30">Very Good</div>
// //           <div className="absolute bottom-8 right-2 transform rotate-45">Excellent</div>
// //           <div className="absolute bottom-2 right-5">850</div>
// //         </div>

// //         <div className="absolute w-full h-full">
// //           <div
// //             className={`absolute bottom-0 left-1/2 w-[2px] h-[110px] bg-gray-800 dark:bg-gray-200 origin-bottom transition-transform duration-1000 ease-bounce ${loading ? "opacity-0" : "opacity-100"}`}
// //             style={{ transform: `translateX(-50%) rotate(${getNeedleRotation()}deg)` }}
// //           >
// //             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-gray-800 dark:text-gray-200">
// //               <ArrowUp size={16} />
// //             </div>
// //           </div>

// //           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200 border-2 border-card shadow-md z-10" />
// //         </div>
// //       </div>

// //       {score && !loading && (
// //         <div className="text-center mt-2 transition-all duration-500 ease-in-out">
// //           <div className="flex flex-col items-center justify-center">
// //             <p className={`text-5xl font-bold mb-1 transition-all ${getScoreColor()}`}>{score}</p>
// //             <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{getScoreCategory()} Credit Score</p>
// //           </div>
// //         </div>
// //       )}

// //       {loading && (
// //         <div className="text-center mt-4">
// //           <div className="animate-pulse flex flex-col items-center justify-center">
// //             <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
// //             <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // const CreditScoreResult = ({ score, loading }) => {
// //   const getScoreMessage = () => {
// //     if (!score) return ""

// //     if (score < 580) {
// //       return "Your score falls in the Poor range. Consider working with a credit counselor to improve your credit health."
// //     } else if (score < 670) {
// //       return "Your score is Fair. Focus on paying bills on time and reducing credit card balances to improve your score."
// //     } else if (score < 740) {
// //       return "You have a Good credit score. Continue your positive credit habits to maintain or improve your score."
// //     } else if (score < 800) {
// //       return "Very Good! Your score is above average. You likely qualify for favorable rates on loans and credit cards."
// //     } else {
// //       return "Excellent! Your exceptional credit score indicates responsible credit management. You'll likely qualify for the best rates."
// //     }
// //   }

// //   const getScoreIcon = () => {
// //     if (!score) return <Info className="h-5 w-5" />

// //     if (score < 580) {
// //       return <AlertCircle className="h-5 w-5 text-red-500" />
// //     } else if (score < 670) {
// //       return <Info className="h-5 w-5 text-amber-500" />
// //     } else if (score < 740) {
// //       return <CheckCircle className="h-5 w-5 text-blue-500" />
// //     } else {
// //       return <CheckCircle className="h-5 w-5 text-green-500" />
// //     }
// //   }

// //   return (
// //     <Card className="border-0 shadow-md bg-card">
// //       <CardHeader className="pb-2">
// //         <CardTitle className="text-xl font-bold text-center">Your Credit Score Result</CardTitle>
// //       </CardHeader>
// //       <CardContent>
// //         <CreditScoreGauge score={score} loading={loading} />

// //         {score !== null && !loading && (
// //           <div className="mt-6 p-4 bg-muted rounded-lg">
// //             <div className="flex items-start gap-3">
// //               {getScoreIcon()}
// //               <p className="text-sm leading-relaxed">{getScoreMessage()}</p>
// //             </div>
// //           </div>
// //         )}
// //       </CardContent>

// //       {/* {score !== null && !loading && (
// //         <CardFooter className="text-xs text-muted-foreground justify-center">
// //           <p className="italic">Updated {new Date().toLocaleDateString()}</p>
// //         </CardFooter>
// //       )} */}
// //     </Card>
// //   )
// // }

// // const CreditFactors = ({ score }) => {
// //   // Mock data for credit factors
// //   const factors = [
// //     {
// //       name: "Payment History",
// //       percentage: 35,
// //       value: score ? (score > 700 ? "Excellent" : score > 650 ? "Good" : "Needs Work") : "-",
// //       impact: score ? (score > 700 ? "positive" : score > 650 ? "neutral" : "negative") : "neutral",
// //     },
// //     {
// //       name: "Credit Utilization",
// //       percentage: 30,
// //       value: score ? (score > 720 ? "Low (Good)" : score > 670 ? "Medium" : "High (Poor)") : "-",
// //       impact: score ? (score > 720 ? "positive" : score > 670 ? "neutral" : "negative") : "neutral",
// //     },
// //     {
// //       name: "Length of Credit",
// //       percentage: 15,
// //       value: score ? (score > 750 ? "Long History" : "Building History") : "-",
// //       impact: score ? (score > 750 ? "positive" : "neutral") : "neutral",
// //     },
// //     {
// //       name: "Credit Mix",
// //       percentage: 10,
// //       value: score ? (score > 730 ? "Diverse" : "Limited") : "-",
// //       impact: score ? (score > 730 ? "positive" : "neutral") : "neutral",
// //     },
// //     {
// //       name: "New Credit",
// //       percentage: 10,
// //       value: score ? (score > 710 ? "Few Inquiries" : "Recent Inquiries") : "-",
// //       impact: score ? (score > 710 ? "positive" : "neutral") : "neutral",
// //     },
// //   ]

// //   return (
// //     <Card className="border-0 shadow-md bg-card">
// //       <CardHeader>
// //         <CardTitle className="text-lg font-bold">Credit Score Factors</CardTitle>
// //         <CardDescription>What's impacting your score</CardDescription>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="space-y-4">
// //           {factors.map((factor) => (
// //             <div key={factor.name} className="space-y-1">
// //               <div className="flex justify-between items-center">
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-sm font-medium">{factor.name}</span>
// //                   <Badge variant="outline" className="text-xs">
// //                     {factor.percentage}%
// //                   </Badge>
// //                 </div>
// //                 <span
// //                   className={`text-sm font-medium ${
// //                     factor.impact === "positive"
// //                       ? "text-green-500"
// //                       : factor.impact === "negative"
// //                         ? "text-red-500"
// //                         : "text-gray-500"
// //                   }`}
// //                 >
// //                   {factor.value}
// //                 </span>
// //               </div>
// //               <Progress value={factor.percentage} className="h-1.5" />
// //             </div>
// //           ))}
// //         </div>
// //       </CardContent>
// //     </Card>
// //   )
// // }



// // const RecommendedCards = () => {
// //   // Mock data for recommended cards
// //   const cards = [
// //     {
// //       name: "Cashapp Card",
// //       issuer: "Premier Bank",
// //       benefits: "5% cash back on all purchases",
// //       annualFee: "$0",
// //       apr: "14.99% - 24.99%",
// //       recommendedScore: 720,
// //       image: "/Frame 631 (1).png", 
// //     },
// //     {
// //       name: "Nexo Card",
// //       issuer: "Global Credit",
// //       benefits: "3x points on travel, no foreign transaction fees",
// //       annualFee: "$95",
// //       apr: "16.99% - 23.99%",
// //       recommendedScore: 740,
// //       image: "/Frame 632.png", 
// //     },
// //     {
// //       name: "Coinbase Card",
// //       issuer: "Credit First",
// //       benefits: "Build credit with responsible use",
// //       annualFee: "$0",
// //       apr: "19.99%",
// //       recommendedScore: 580,
// //       image: "/Frame 633 (1).png", 
// //     },
// //     {
// //       name: "Paypal Card",
// //       issuer: "Credit First",
// //       benefits: "Build credit with responsible use",
// //       annualFee: "$0",
// //       apr: "19.99%",
// //       recommendedScore: 580,
// //       image: "/Frame 634.png", 
// //     },
// //     {
// //       name: "Trust wallet Card",
// //       issuer: "Credit First",
// //       benefits: "Build credit with responsible use",
// //       annualFee: "$0",
// //       apr: "19.99%",
// //       recommendedScore: 580,
// //       image: "/Frame 635.png", 
// //     },
// //     {
// //       name: "Robinhood Card",
// //       issuer: "Credit First",
// //       benefits: "Build credit with responsible use",
// //       annualFee: "$0",
// //       apr: "19.99%",
// //       recommendedScore: 580,
// //       image: "/Frame 636.png", 
// //     },
// //   ]

// //   return (
// //     <Card className="border-0 shadow-md bg-card">
// //       <CardHeader>
// //         <CardTitle className="text-lg font-bold">Recommended Credit Cards</CardTitle>
// //         <CardDescription>Based on your credit profile</CardDescription>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="space-y-4">
// //           {cards.map((card) => (
// //             <Card key={card.name} className="overflow-hidden">
// //               <div className="flex flex-col sm:flex-row">
// //               <div className="p-4 sm:p-6 flex items-center justify-center sm:w-1/4">
// //                   <img src={card.image} alt={card.name} className="h-32  object-contain" />
// //                 </div>
// //                 <CardContent className="p-4 sm:w-3/4">
// //                   <div className="flex justify-between items-start">
// //                     <div>
// //                       <h3 className="font-bold">{card.name}</h3>
// //                       <p className="text-sm text-muted-foreground">{card.issuer}</p>
// //                     </div>
// //                     <Badge variant="outline">{card.recommendedScore}+ Score</Badge>
// //                   </div>
// //                   <p className="text-sm mt-2">{card.benefits}</p>
// //                   <div className="flex justify-between mt-3 text-xs text-muted-foreground">
// //                     <span>Annual Fee: {card.annualFee}</span>
// //                     <span>APR: {card.apr}</span>
// //                   </div>
// //                   {/* <Link to="/card-management"> */}
// //                   <Button variant="link" className="p-0 h-auto mt-2 text-sm" size="sm">
// //                     Learn more <ChevronRight className="h-3 w-3 ml-1" />
// //                   </Button>
// //                   {/* </Link> */}
// //                 </CardContent>
// //               </div>
// //             </Card>
// //           ))}
// //         </div>
// //       </CardContent>
// //     </Card>
// //   )
// // }

// // function CreditScoreDashboard() {
// //   const [score, setScore] = useState(null)
// //   const [loading, setLoading] = useState(false)
// //   const [email, setEmail] = useState("")
// //   const [phone, setPhone] = useState("")
// //   const [lastChecked, setLastChecked] = useState(null)

// //   useEffect(() => {
// //     const storedEmail = localStorage.getItem("userEmail")
// //     const storedPhone = localStorage.getItem("userPhone")
// //     const lastCheckedDate = localStorage.getItem("lastCheckedDate")

// //     setEmail(storedEmail || "")
// //     setPhone(storedPhone || "")
// //     setLastChecked(lastCheckedDate ? new Date(lastCheckedDate) : null)
// //   }, [])

// //   const generateScore = (key) => {
// //     let hash = 0
// //     for (let i = 0; i < key.length; i++) {
// //       hash = key.charCodeAt(i) + ((hash << 5) - hash)
// //     }
// //     const normalized = Math.abs(hash % 151)
// //     return 700 + normalized
// //   }

// //   const getUserScore = () => {
// //     if (!email || !phone) return

// //     const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`
// //     const stored = localStorage.getItem(`score-${userKey}`)

// //     if (stored) {
// //       setScore(Number(stored))
// //     } else {
// //       const newScore = generateScore(userKey)
// //       localStorage.setItem(`score-${userKey}`, String(newScore))
// //       setScore(newScore)
// //     }

// //     const now = new Date()
// //     localStorage.setItem("lastCheckedDate", now.toISOString())
// //     setLastChecked(now)
// //   }

// //   const handleCheckScore = () => {
// //     setLoading(true)
// //     setTimeout(() => {
// //       getUserScore()
// //       setLoading(false)
// //     }, 1500)
// //   }

// //   useEffect(() => {
// //     if (email && phone) handleCheckScore()
// //   }, [email, phone])

// //   return (
// //     <div className="min-h-screen bg-background">
// //       <div className="container mx-auto p-4 lg:p-6">
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-bold">Credit Score Dashboard</h1>
// //           <div className="flex items-center text-muted-foreground mt-1">
// //             <Shield className="h-4 w-4 mr-1" />
// //             <span className="text-sm">Your information is secure and encrypted</span>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //           <div className="lg:col-span-2">
// //             <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-xl shadow-xl p-6 text-white mb-6">
// //               <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
// //                 <div>
// //                   <h2 className="text-2xl font-bold">Check Your Credit Score</h2>
// //                   <p className="text-purple-200 mt-1">Free and won't affect your score</p>
// //                 </div>
// //                 {lastChecked && (
// //                   <div className="mt-2 sm:mt-0 text-sm text-purple-200 flex items-center">
// //                     <span>Last checked: {lastChecked.toLocaleDateString()}</span>
// //                   </div>
// //                 )}
// //               </div>
// //               <Button
// //                 className="w-full bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 shadow-md"
// //                 disabled={loading}
// //                 onClick={handleCheckScore}
// //                 size="lg"
// //               >
// //                 {loading ? (
// //                   <div className="flex items-center justify-center">
// //                     <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
// //                     Analyzing Your Credit...
// //                   </div>
// //                 ) : (
// //                   <div className="flex items-center justify-center">
// //                     <RefreshCw className="h-4 w-4 mr-2" />
// //                     Check Credit Score
// //                   </div>
// //                 )}
// //               </Button>
// //             </div>

// //             <Tabs defaultValue="score" className="w-full">
// //               <TabsList className="grid grid-cols-3 mb-6">
// //                 <TabsTrigger value="score">Score Details</TabsTrigger>
// //                 <TabsTrigger value="factors">Credit Factors</TabsTrigger>
// //                 <TabsTrigger value="offers">Card Offers</TabsTrigger>
// //               </TabsList>
// //               <TabsContent value="score" className="mt-0">
// //                 {(score !== null || loading) && <CreditScoreResult score={score} loading={loading} />}
// //               </TabsContent>
// //               <TabsContent value="factors" className="mt-0">
// //                 <CreditFactors score={score} />
// //               </TabsContent>
// //               <TabsContent value="offers" className="mt-0">
// //                 <RecommendedCards />
// //               </TabsContent>
// //             </Tabs>
// //           </div>

// //           <div className="space-y-6">
// //             <Card className="border-0 shadow-md bg-card">
// //               <CardHeader>
// //                 <CardTitle className="text-lg font-bold">Credit Score Tips</CardTitle>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="space-y-4">
// //                   <div className="flex gap-3">
// //                     <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
// //                       1
// //                     </div>
// //                     <div>
// //                       <h3 className="font-medium">Pay bills on time</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Payment history is the most important factor in your credit score.
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <Separator />
// //                   <div className="flex gap-3">
// //                     <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
// //                       2
// //                     </div>
// //                     <div>
// //                       <h3 className="font-medium">Keep balances low</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Try to keep your credit utilization below 30% of your available credit.
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <Separator />
// //                   <div className="flex gap-3">
// //                     <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
// //                       3
// //                     </div>
// //                     <div>
// //                       <h3 className="font-medium">Limit new applications</h3>
// //                       <p className="text-sm text-muted-foreground">
// //                         Each application can temporarily lower your score.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             <Card className="border-0 shadow-md bg-card">
// //               <CardHeader>
// //                 <CardTitle className="text-lg font-bold">Credit Score Timeline</CardTitle>
// //                 <CardDescription>How your score has changed</CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="h-[200px] flex items-center justify-center text-muted-foreground text-sm">
// //                   Check your score to see your timeline
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CreditScoreDashboard



// import { useState, useEffect } from "react"
// import { ArrowUp, CreditCard, RefreshCw, Info, ChevronRight, AlertCircle, CheckCircle, Shield } from "lucide-react"

// const CreditScoreGauge = ({ score, loading }) => {
//   const getNeedleRotation = () => {
//     if (!score) return 0
//     const minScore = 300
//     const maxScore = 850
//     const scoreRange = maxScore - minScore
//     const percentage = (score - minScore) / scoreRange
//     return -120 + percentage * 240
//   }

//   const getScoreCategory = () => {
//     if (!score) return ""
//     if (score < 580) return "Poor"
//     if (score < 670) return "Fair"
//     if (score < 740) return "Good"
//     if (score < 800) return "Very Good"
//     return "Excellent"
//   }

//   const getScoreColor = () => {
//     if (!score) return "text-gray-700"
//     if (score < 580) return "text-red-600 dark:text-red-500"
//     if (score < 670) return "text-amber-600 dark:text-amber-500"
//     if (score < 740) return "text-blue-600 dark:text-blue-500"
//     if (score < 800) return "text-emerald-600 dark:text-emerald-500"
//     return "text-green-600 dark:text-green-500"
//   }

//   const getGaugeGradient = () => {
//     if (loading || !score)
//       return "from-gray-300 via-gray-300 to-gray-300 dark:from-gray-700 dark:via-gray-700 dark:to-gray-700"
//     return "from-red-500 via-amber-400 to-green-500"
//   }

//   return (
//     <div className="relative w-full flex flex-col items-center">
//       <div className="relative w-full max-w-[280px] h-40 mt-4 mb-8">
//         <div className="absolute w-full h-full overflow-hidden">
//           <div
//             className={`absolute w-full h-80 -top-40 rounded-full bg-gradient-to-r ${getGaugeGradient()} shadow-inner`}
//           >
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[95%] bg-white rounded-full" />
//           </div>
//         </div>

//         <div className="absolute w-full h-full">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-4 bg-gray-400 dark:bg-gray-600 bottom-0 left-1/2 origin-bottom"
//               style={{ transform: `translateX(-50%) rotate(${-120 + i * 30}deg) translateY(-75px)` }}
//             />
//           ))}
//         </div>

//         <div className="absolute w-full h-full text-[10px] font-medium text-gray-700 dark:text-gray-300">
//           <div className="absolute bottom-2 left-5">300</div>
//           <div className="absolute bottom-8 left-2 transform -rotate-45">Poor</div>
//           <div className="absolute top-12 left-8 transform -rotate-30">Fair</div>
//           <div className="absolute top-2 left-1/2 transform -translate-x-1/2">Good</div>
//           <div className="absolute top-12 right-8 transform rotate-30">Very Good</div>
//           <div className="absolute bottom-8 right-2 transform rotate-45">Excellent</div>
//           <div className="absolute bottom-2 right-5">850</div>
//         </div>

//         <div className="absolute w-full h-full">
//           <div
//             className={`absolute bottom-0 left-1/2 w-[2px] h-[110px] bg-gray-800 dark:bg-gray-200 origin-bottom transition-transform duration-1000 ease-out ${loading ? "opacity-0" : "opacity-100"}`}
//             style={{ transform: `translateX(-50%) rotate(${getNeedleRotation()}deg)` }}
//           >
//             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-gray-800 dark:text-gray-200">
//               <ArrowUp size={16} />
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200 border-2 border-white shadow-md z-10" />
//         </div>
//       </div>

//       {score && !loading && (
//         <div className="text-center mt-2 transition-all duration-500 ease-in-out">
//           <div className="flex flex-col items-center justify-center">
//             <p className={`text-5xl font-bold mb-1 transition-all ${getScoreColor()}`}>{score}</p>
//             <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{getScoreCategory()} Credit Score</p>
//           </div>
//         </div>
//       )}

//       {loading && (
//         <div className="text-center mt-4">
//           <div className="animate-pulse flex flex-col items-center justify-center">
//             <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
//             <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// const CreditScoreResult = ({ score, loading }) => {
//   const getScoreMessage = () => {
//     if (!score) return ""

//     if (score < 580) {
//       return "Your score falls in the Poor range. Consider working with a credit counselor to improve your credit health."
//     } else if (score < 670) {
//       return "Your score is Fair. Focus on paying bills on time and reducing credit card balances to improve your score."
//     } else if (score < 740) {
//       return "You have a Good credit score. Continue your positive credit habits to maintain or improve your score."
//     } else if (score < 800) {
//       return "Very Good! Your score is above average. You likely qualify for favorable rates on loans and credit cards."
//     } else {
//       return "Excellent! Your exceptional credit score indicates responsible credit management. You'll likely qualify for the best rates."
//     }
//   }

//   const getScoreIcon = () => {
//     if (!score) return <Info className="h-5 w-5" />

//     if (score < 580) {
//       return <AlertCircle className="h-5 w-5 text-red-500" />
//     } else if (score < 670) {
//       return <Info className="h-5 w-5 text-amber-500" />
//     } else if (score < 740) {
//       return <CheckCircle className="h-5 w-5 text-blue-500" />
//     } else {
//       return <CheckCircle className="h-5 w-5 text-green-500" />
//     }
//   }

//   return (
//     <div className="border border-gray-200 rounded-lg shadow-md bg-white">
//       <div className="p-6 pb-2">
//         <h2 className="text-xl font-bold text-center">Your Credit Score Result</h2>
//       </div>
//       <div className="p-6">
//         <CreditScoreGauge score={score} loading={loading} />

//         {score !== null && !loading && (
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//             <div className="flex items-start gap-3">
//               {getScoreIcon()}
//               <p className="text-sm leading-relaxed">{getScoreMessage()}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// const CreditFactors = ({ score }) => {
//   const factors = [
//     {
//       name: "Payment History",
//       percentage: 35,
//       value: score ? (score > 700 ? "Excellent" : score > 650 ? "Good" : "Needs Work") : "-",
//       impact: score ? (score > 700 ? "positive" : score > 650 ? "neutral" : "negative") : "neutral",
//     },
//     {
//       name: "Credit Utilization",
//       percentage: 30,
//       value: score ? (score > 720 ? "Low (Good)" : score > 670 ? "Medium" : "High (Poor)") : "-",
//       impact: score ? (score > 720 ? "positive" : score > 670 ? "neutral" : "negative") : "neutral",
//     },
//     {
//       name: "Length of Credit",
//       percentage: 15,
//       value: score ? (score > 750 ? "Long History" : "Building History") : "-",
//       impact: score ? (score > 750 ? "positive" : "neutral") : "neutral",
//     },
//     {
//       name: "Credit Mix",
//       percentage: 10,
//       value: score ? (score > 730 ? "Diverse" : "Limited") : "-",
//       impact: score ? (score > 730 ? "positive" : "neutral") : "neutral",
//     },
//     {
//       name: "New Credit",
//       percentage: 10,
//       value: score ? (score > 710 ? "Few Inquiries" : "Recent Inquiries") : "-",
//       impact: score ? (score > 710 ? "positive" : "neutral") : "neutral",
//     },
//   ]

//   return (
//     <div className="border border-gray-200 rounded-lg shadow-md bg-white">
//       <div className="p-6">
//         <h2 className="text-lg font-bold">Credit Score Factors</h2>
//         <p className="text-gray-600 text-sm mt-1">What's impacting your score</p>
//       </div>
//       <div className="p-6 pt-0">
//         <div className="space-y-4">
//           {factors.map((factor) => (
//             <div key={factor.name} className="space-y-1">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium">{factor.name}</span>
//                   <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border">
//                     {factor.percentage}%
//                   </span>
//                 </div>
//                 <span
//                   className={`text-sm font-medium ${
//                     factor.impact === "positive"
//                       ? "text-green-500"
//                       : factor.impact === "negative"
//                         ? "text-red-500"
//                         : "text-gray-500"
//                   }`}
//                 >
//                   {factor.value}
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-1.5">
//                 <div 
//                   className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
//                   style={{ width: `${factor.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// const RecommendedCards = () => {
//   const cards = [
//     {
//       name: "Cashapp Card",
//       issuer: "Premier Bank",
//       benefits: "5% cash back on all purchases",
//       annualFee: "$0",
//       apr: "14.99% - 24.99%",
//       recommendedScore: 720,
//       color: "bg-gradient-to-r from-green-400 to-green-600"
//     },
//     {
//       name: "Nexo Card",
//       issuer: "Global Credit",
//       benefits: "3x points on travel, no foreign transaction fees",
//       annualFee: "$95",
//       apr: "16.99% - 23.99%",
//       recommendedScore: 740,
//       color: "bg-gradient-to-r from-blue-400 to-blue-600"
//     },
//     {
//       name: "Coinbase Card",
//       issuer: "Credit First",
//       benefits: "Build credit with responsible use",
//       annualFee: "$0",
//       apr: "19.99%",
//       recommendedScore: 580,
//       color: "bg-gradient-to-r from-orange-400 to-orange-600"
//     },
//     {
//       name: "Paypal Card",
//       issuer: "Credit First",
//       benefits: "Build credit with responsible use",
//       annualFee: "$0",
//       apr: "19.99%",
//       recommendedScore: 580,
//       color: "bg-gradient-to-r from-blue-500 to-indigo-600"
//     },
//     {
//       name: "Trust Wallet Card",
//       issuer: "Credit First",
//       benefits: "Build credit with responsible use",
//       annualFee: "$0",
//       apr: "19.99%",
//       recommendedScore: 580,
//       color: "bg-gradient-to-r from-purple-400 to-purple-600"
//     },
//     {
//       name: "Robinhood Card",
//       issuer: "Credit First",
//       benefits: "Build credit with responsible use",
//       annualFee: "$0",
//       apr: "19.99%",
//       recommendedScore: 580,
//       color: "bg-gradient-to-r from-emerald-400 to-emerald-600"
//     },
//   ]

//   return (
//     <div className="border border-gray-200 rounded-lg shadow-md bg-white">
//       <div className="p-6">
//         <h2 className="text-lg font-bold">Recommended Credit Cards</h2>
//         <p className="text-gray-600 text-sm mt-1">Based on your credit profile</p>
//       </div>
//       <div className="p-6 pt-0">
//         <div className="space-y-4">
//           {cards.map((card) => (
//             <div key={card.name} className="border border-gray-200 rounded-lg overflow-hidden">
//               <div className="flex flex-col sm:flex-row">
//                 <div className="p-4 sm:p-6 flex items-center justify-center sm:w-1/4">
//                   <div className={`h-24 w-36 ${card.color} rounded-lg flex items-center justify-center text-white font-bold shadow-lg`}>
//                     <CreditCard size={32} />
//                   </div>
//                 </div>
//                 <div className="p-4 sm:w-3/4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-bold">{card.name}</h3>
//                       <p className="text-sm text-gray-600">{card.issuer}</p>
//                     </div>
//                     <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border">
//                       {card.recommendedScore}+ Score
//                     </span>
//                   </div>
//                   <p className="text-sm mt-2">{card.benefits}</p>
//                   <div className="flex justify-between mt-3 text-xs text-gray-600">
//                     <span>Annual Fee: {card.annualFee}</span>
//                     <span>APR: {card.apr}</span>
//                   </div>
//                   <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center">
//                     Learn more <ChevronRight className="h-3 w-3 ml-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function CreditScoreDashboard() {
//   const [score, setScore] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [email, setEmail] = useState("user@example.com") // Default email for demo
//   const [phone, setPhone] = useState("123-456-7890") // Default phone for demo
//   const [lastChecked, setLastChecked] = useState(null)
//   const [activeTab, setActiveTab] = useState("score")

//   const generateScore = (key) => {
//     let hash = 0
//     for (let i = 0; i < key.length; i++) {
//       hash = key.charCodeAt(i) + ((hash << 5) - hash)
//     }
//     const normalized = Math.abs(hash % 151)
//     return 700 + normalized
//   }

//   const getUserScore = () => {
//     if (!email || !phone) return

//     const userKey = `${email.trim().toLowerCase()}-${phone.trim()}`
//     const newScore = generateScore(userKey)
//     setScore(newScore)

//     const now = new Date()
//     setLastChecked(now)
//   }

//   const handleCheckScore = () => {
//     setLoading(true)
//     setTimeout(() => {
//       getUserScore()
//       setLoading(false)
//     }, 1500)
//   }

//   useEffect(() => {
//     if (email && phone) handleCheckScore()
//   }, [])

//   const TabButton = ({ value, children, active, onClick }) => (
//     <button
//       onClick={() => onClick(value)}
//       className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//         active === value
//           ? 'bg-blue-600 text-white'
//           : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//       }`}
//     >
//       {children}
//     </button>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto p-4 lg:p-6 max-w-7xl">
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900">Credit Score Dashboard</h1>
//           <div className="flex items-center text-gray-600 mt-1">
//             <Shield className="h-4 w-4 mr-1" />
//             <span className="text-sm">Your information is secure and encrypted</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-xl shadow-xl p-6 text-white mb-6">
//               <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold">Check Your Credit Score</h2>
//                   <p className="text-purple-200 mt-1">Free and won't affect your score</p>
//                 </div>
//                 {lastChecked && (
//                   <div className="mt-2 sm:mt-0 text-sm text-purple-200 flex items-center">
//                     <span>Last checked: {lastChecked.toLocaleDateString()}</span>
//                   </div>
//                 )}
//               </div>
//               <button
//                 className="w-full bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 shadow-md py-3 px-6 rounded-lg font-medium flex items-center justify-center disabled:opacity-75"
//                 disabled={loading}
//                 onClick={handleCheckScore}
//               >
//                 {loading ? (
//                   <div className="flex items-center justify-center">
//                     <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
//                     Analyzing Your Credit...
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center">
//                     <RefreshCw className="h-4 w-4 mr-2" />
//                     Check Credit Score
//                   </div>
//                 )}
//               </button>
//             </div>

//             <div className="w-full">
//               <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
//                 <TabButton value="score" active={activeTab} onClick={setActiveTab}>Score Details</TabButton>
//                 <TabButton value="factors" active={activeTab} onClick={setActiveTab}>Credit Factors</TabButton>
//                 <TabButton value="offers" active={activeTab} onClick={setActiveTab}>Card Offers</TabButton>
//               </div>
              
//               {activeTab === "score" && (score !== null || loading) && (
//                 <CreditScoreResult score={score} loading={loading} />
//               )}
//               {activeTab === "factors" && <CreditFactors score={score} />}
//               {activeTab === "offers" && <RecommendedCards />}
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="border border-gray-200 rounded-lg shadow-md bg-white">
//               <div className="p-6">
//                 <h2 className="text-lg font-bold">Credit Score Tips</h2>
//               </div>
//               <div className="p-6 pt-0">
//                 <div className="space-y-4">
//                   <div className="flex gap-3">
//                     <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 text-sm font-bold">
//                       1
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Pay bills on time</h3>
//                       <p className="text-sm text-gray-600">
//                         Payment history is the most important factor in your credit score.
//                       </p>
//                     </div>
//                   </div>
//                   <hr className="border-gray-200" />
//                   <div className="flex gap-3">
//                     <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 text-sm font-bold">
//                       2
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Keep balances low</h3>
//                       <p className="text-sm text-gray-600">
//                         Try to keep your credit utilization below 30% of your available credit.
//                       </p>
//                     </div>
//                   </div>
//                   <hr className="border-gray-200" />
//                   <div className="flex gap-3">
//                     <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 text-sm font-bold">
//                       3
//                     </div>
//                     <div>
//                       <h3 className="font-medium">Limit new applications</h3>
//                       <p className="text-sm text-gray-600">
//                         Each application can temporarily lower your score.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border border-gray-200 rounded-lg shadow-md bg-white">
//               <div className="p-6">
//                 <h2 className="text-lg font-bold">Credit Score Timeline</h2>
//                 <p className="text-gray-600 text-sm mt-1">How your score has changed</p>
//               </div>
//               <div className="p-6 pt-0">
//                 <div className="h-[200px] flex items-center justify-center text-gray-500 text-sm">
//                   Check your score to see your timeline
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreditScoreDashboard





import { useState, useEffect } from "react"
import { ArrowUp, RefreshCw, ChevronRight, AlertCircle, CheckCircle, Shield, CreditCard, Calendar, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Simplified Credit Score Gauge Component
const CreditScoreGauge = ({ score, loading }) => {
  const getColor = () => {
    if (!score) return "text-gray-700"
    if (score < 580) return "text-red-600"
    if (score < 670) return "text-amber-600"
    if (score < 740) return "text-blue-600"
    return "text-green-600"
  }

  const getCategory = () => {
    if (!score) return ""
    if (score < 580) return "Poor"
    if (score < 670) return "Fair"
    if (score < 740) return "Good"
    if (score < 800) return "Very Good"
    return "Excellent"
  }

  const getGradient = () => {
    if (loading || !score) return "from-gray-300 to-gray-300"
    return "from-red-500 via-amber-400 to-green-500"
  }

  // Calculate needle rotation based on score
  const getNeedleRotation = () => {
    if (!score) return 0
    return -120 + ((score - 300) / (850 - 300)) * 240
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Simplified gauge display */}
      <div className="relative w-full max-w-[280px] h-40 mt-4 mb-8">
        <div className="absolute w-full h-full overflow-hidden">
          <div className={`absolute w-full h-80 -top-40 rounded-full bg-gradient-to-r ${getGradient()} shadow-inner`}>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[95%] bg-card rounded-full" />
          </div>
        </div>

        {/* Score gauge markings */}
        <div className="absolute w-full h-full text-xs font-medium text-gray-700">
          <div className="absolute bottom-2 left-5">300</div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">Good</div>
          <div className="absolute bottom-2 right-5">850</div>
        </div>

        {/* Gauge needle */}
        <div className="absolute w-full h-full">
          <div
            className={`absolute bottom-0 left-1/2 w-[2px] h-[110px] bg-gray-800 origin-bottom transition-transform duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
            style={{ transform: `translateX(-50%) rotate(${getNeedleRotation()}deg)` }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-gray-800">
              <ArrowUp size={16} />
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gray-800 border-2 border-card shadow-md z-10" />
        </div>
      </div>

      {/* Score display */}
      {score !== null && !loading && (
        <div className="text-center mt-2">
          <div className="flex flex-col items-center justify-center">
            <p className={`text-5xl font-bold mb-1 ${getColor()}`}>{score}</p>
            <p className="text-lg font-medium text-gray-700">{getCategory()} Credit Score</p>
          </div>
        </div>
      )}
      {/* Loading state */}
      {loading && (
        <div className="text-center mt-4">
          <div className="animate-pulse flex flex-col items-center justify-center">
            <div className="h-10 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-5 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      )}
    </div>
  )
} 

// Main Credit Score Dashboard Component
function CreditScoreDashboard() {
  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [lastChecked, setLastChecked] = useState(null)


  const [selectedCard, setSelectedCard] = useState(null);
  
  // Handle card click to open mini dashboard
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  
  // Handle Apply Now button click
  const handleApplyNow = (cardId) => {
    console.log(`Applying for card ${cardId}`);
    // In a real app, this would navigate to the card list page
    window.location.href = "/card-list";
  };
  
  // Close the mini dashboard
  const closeDashboard = () => {
    setSelectedCard(null);
  };

  // Load saved score from localStorage on component mount
  useEffect(() => {
    try {
      // Try to get the saved score from localStorage
      const savedScore = localStorage.getItem("userCreditScore")
      const savedLastChecked = localStorage.getItem("lastCreditCheck")

      if (savedScore) {
        setScore(Number.parseInt(savedScore, 10))
      }

      if (savedLastChecked) {
        setLastChecked(new Date(savedLastChecked))
      }
    } catch (err) {
      console.error("Error accessing localStorage:", err)
      // If localStorage is not available, we'll just continue without it
    }
  }, [])

  // Generate a pseudorandom but deterministic score based on user identifier
  const generateScore = () => {
    try {
      // Check if we already have a stored score
      const savedScore = localStorage.getItem("userCreditScore")

      if (savedScore) {
        // Return the existing score if we have one
        return Number.parseInt(savedScore, 10)
      }

      // Generate a new score if we don't have one
      // Use a more deterministic approach - generate a score between 580-850
      const newScore = Math.floor(580 + Math.random() * 270)

      // Save the new score to localStorage
      localStorage.setItem("userCreditScore", newScore.toString())

      return newScore
    } catch (err) {
      console.error("Error with localStorage:", err)
      // Fallback to just returning a random score if localStorage fails
      return Math.floor(580 + Math.random() * 270)
    }
  }

  const handleCheckScore = () => {
    setLoading(true)
    setError(null)

    // Simple timeout to simulate API call
    const timeoutId = setTimeout(() => {
      try {
        const userScore = generateScore()
        console.log("User credit score:", userScore)
        setScore(userScore)

        // Update last checked timestamp
        const now = new Date()
        setLastChecked(now)
        try {
          localStorage.setItem("lastCreditCheck", now.toISOString())
        } catch (err) {
          console.error("Error saving to localStorage:", err)
        }
      } catch (err) {
        console.error("Error generating score:", err)
        setError("Failed to generate score. Please try again.")
      } finally {
        setLoading(false)
      }
    }, 1500)

    return () => clearTimeout(timeoutId)
  }

  // Format the last checked date
  const formatLastChecked = (date) => {
    if (!date) return null

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Credit factors component simplified
  const CreditFactors = () => {
    const factors = [
      { name: "Payment History", percentage: 0 },
      { name: "Credit Utilization", percentage: 0 },
      { name: "Length of Credit", percentage: 0 },
      { name: "Credit Mix", percentage: 0 },
      { name: "New Credit", percentage: 0 },
    ]

    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Credit Score Factors</CardTitle>
          <CardDescription>What's impacting your score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {factors.map((factor) => (
              <div key={factor.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{factor.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {factor.percentage}%
                    </Badge>
                  </div>
                </div>
                <Progress value={factor.percentage} className="h-1.5" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Card recommendations component simplified
  const RecommendedCards = () => {
    // const cards = [
    //   {
    //     name: "Cashapp Card",
    //     issuer: "Premier Bank",
    //     benefits: "5% cash back on purchases",
    //     annualFee: "$0",
    //   },
    //   {
    //     name: "Nexo Card",
    //     issuer: "Global Credit",
    //     benefits: "3x points on travel",
    //     annualFee: "$95",
    //   },
    // ]

    const cards = [
      {
        name: "Cashapp Card",
        issuer: "Premier Bank",
        benefits: "5% cash back on all purchases",
        annualFee: "$0",
        apr: "14.99% - 24.99%",
        recommendedScore: 720,
        image: "/cashapp (1).png",
        details: {
          intro: "0% intro APR for 15 months",
          rewards: "50,000 bonus points after spending $4,000 in first 3 months",
          foreign: "No foreign transaction fees",
          perks: ["Travel insurance", "Purchase protection", "Extended warranty"]
        }
      },
      {
        name: "Nexo Card",
        issuer: "Global Credit",
        benefits: "3x points on travel, no foreign transaction fees",
        annualFee: "$95",
        apr: "16.99% - 23.99%",
        recommendedScore: 740,
        image: "/nexo (1).png",
        details: {
          intro: "0% intro APR for 12 months",
          rewards: "$200 bonus after spending $1,000 in first 3 months",
          foreign: "3% foreign transaction fee",
          perks: ["Free credit score", "Zero liability protection", "Mobile wallet compatibility"]
        }
    
      },
      {
        name: "Coinbase Card",
        issuer: "Credit First",
        benefits: "Build credit with responsible use",
        annualFee: "$0",
        apr: "19.99%",
        recommendedScore: 580,
        image: "/coinbase.png",
        details: {
          intro: "No intro APR offer",
          rewards: "60,000 points after spending $4,000 in first 3 months",
          foreign: "No foreign transaction fees",
          perks: ["Priority boarding", "Lounge access", "$100 travel credit annually"]
        }
      },
      {
        name: "Paypal Card",
        issuer: "Credit First",
        benefits: "Build credit with responsible use",
        annualFee: "$0",
        apr: "19.99%",
        recommendedScore: 580,
        image: "/paypal@2x.png",
        details: {
          intro: "0% intro APR for 6 months",
          rewards: "$50 bonus after first purchase",
          foreign: "2% foreign transaction fee",
          perks: ["Statement credit for good grades", "Free FICO score", "Fraud alerts"]
        }
      },
      {
        name: "Trust wallet Card",
        issuer: "Credit First",
        benefits: "Build credit with responsible use",
        annualFee: "$0",
        apr: "19.99%",
        recommendedScore: 580,
        image: "/trustwalletcard-removebg-preview.png",
        details: {
          intro: "0% intro APR for 12 months",
          rewards: "$200 bonus after spending $1,000 in first 3 months",
          foreign: "3% foreign transaction fee",
          perks: ["Free credit score", "Zero liability protection", "Mobile wallet compatibility"]
        }
      },
      {
        name: "Robinhood Card",
        issuer: "Credit First",
        benefits: "Build credit with responsible use",
        annualFee: "$0",
        apr: "19.99%",
        recommendedScore: 580,
        image: "/robinhood.png",
        details: {
          intro: "No intro APR offer",
          rewards: "60,000 points after spending $4,000 in first 3 months",
          foreign: "No foreign transaction fees",
          perks: ["Priority boarding", "Lounge access", "$100 travel credit annually"]
        }
      },
    ];

    return (
      <div className="relative p-4 max-w-6xl mx-auto">
      <div className="shadow-md rounded-lg border bg-white">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">Recommended Cards</h2>
          <p className="text-sm text-gray-500">Based on your credit score</p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCardClick(card)}
              >
                <div className="p-4 flex flex-col">
                  {/* Image */}
                  <div className="w-full h-36 flex items-center justify-center mb-4 rounded-md overflow-hidden bg-gray-50">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{card.name}</h3>
                      <p className="text-sm text-gray-500">{card.issuer}</p>
                    </div>
                    <p className="text-sm mt-2">{card.benefits}</p>

                    <div className="mt-3 text-xs text-gray-500 space-y-1">
                      <p>Annual Fee: {card.annualFee}</p>
                      <p>APR: {card.apr}</p>
                      <p>Recommended Score: {card.recommendedScore}+</p>
                    </div>

                    <button className="flex items-center text-blue-600 p-0 h-auto mt-3 text-sm">
                      Learn more <ChevronRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Card Management Dashboard */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{selectedCard.name}</h2>
              <button 
                onClick={closeDashboard}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Card Details */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Card Image */}
                <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.name}
                      className="h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Card Information */}
                <div className="w-full md:w-2/3">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{selectedCard.issuer}</h3>
                    <div className="flex items-center mt-1">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        <Check className="mr-1 h-3 w-3" />
                        Recommended for your profile
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Features */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">BENEFITS</h4>
                      <p className="mt-1">{selectedCard.benefits}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ANNUAL FEE</h4>
                        <p className="mt-1">{selectedCard.annualFee}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">APR</h4>
                        <p className="mt-1">{selectedCard.apr}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">INTRO OFFER</h4>
                      <p className="mt-1">{selectedCard.details.intro}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">SIGN-UP BONUS</h4>
                      <p className="mt-1">{selectedCard.details.rewards}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">TOP PERKS</h4>
                      <ul className="mt-1 space-y-1">
                        {selectedCard.details.perks.map((perk, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Important Card Information */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Important Information</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      This card requires a credit score of {selectedCard.recommendedScore}+. Applying for this card will result in a hard inquiry on your credit report.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card Tools */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 border rounded-lg flex items-center">
                  <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm">Pre-qualify</span>
                </div>
                <div className="p-3 border rounded-lg flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm">Calculate rewards</span>
                </div>
                <div className="p-3 border rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm">Compare cards</span>
                </div>
              </div>
              
              {/* Apply Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => handleApplyNow(selectedCard.id)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    //   <Card className="shadow-md">
    //   <CardHeader>
    //     <CardTitle className="text-lg font-bold">Recommended Cards</CardTitle>
    //     <CardDescription>Based on your credit score</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       {cards.map((card) => (
    //         <Card key={card.name} className="overflow-hidden shadow-sm border">
    //           <CardContent className="p-4 flex flex-col">
    //             {/* Image */}
    //             <div className="w-full h-36 flex items-center justify-center mb-4 rounded-md overflow-hidden">
    //               <img
    //                 src={card.image}
    //                 alt={card.name}
    //                 className="h-full object-contain"
    //               />
    //             </div>

    //             {/* Card Info */}
    //             <div className="flex-1 flex flex-col justify-between">
    //               <div>
    //                 <h3 className="text-lg font-bold">{card.name}</h3>
    //                 <p className="text-sm text-muted-foreground">{card.issuer}</p>
    //               </div>
    //               <p className="text-sm mt-2">{card.benefits}</p>

    //               <div className="mt-3 text-xs text-muted-foreground space-y-1">
    //                 <p>Annual Fee: {card.annualFee}</p>
    //                 <p>APR: {card.apr}</p>
    //                 <p>Recommended Score: {card.recommendedScore}+</p>
    //               </div>

    //               <Button variant="link" className="p-0 h-auto mt-3 text-sm" size="sm">
    //                 Learn more <ChevronRight className="h-3 w-3 ml-1" />
    //               </Button>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </CardContent>
    // </Card>


      // <Card className="shadow-md">
      //   <CardHeader>
      //     <CardTitle className="text-lg font-bold">Recommended Cards</CardTitle>
      //     <CardDescription>Based on your profile</CardDescription>
      //   </CardHeader>
      //   <CardContent>
      //     <div className="space-y-4">
      //       {cards.map((card) => (
      //         <Card key={card.name} className="overflow-hidden">
      //           <div className="flex flex-col">
      //             <CardContent className="p-4">
      //               <div>
      //                 <h3 className="font-bold">{card.name}</h3>
      //                 <p className="text-sm text-muted-foreground">{card.issuer}</p>
      //               </div>
      //               <p className="text-sm mt-2">{card.benefits}</p>
      //               <div className="mt-3 text-xs text-muted-foreground">
      //                 <span>Annual Fee: {card.annualFee}</span>
      //               </div>
      //               <Button variant="link" className="p-0 h-auto mt-2 text-sm" size="sm">
      //                 Learn more <ChevronRight className="h-3 w-3 ml-1" />
      //               </Button>
      //             </CardContent>
      //           </div>
      //         </Card>
      //       ))}
      //     </div>
      //   </CardContent>
      // </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 lg:p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Credit Score Dashboard</h1>
          <div className="flex items-center text-muted-foreground mt-1">
            <Shield className="h-4 w-4 mr-1" />
            <span className="text-sm">Your information is secure and encrypted</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Main action button */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-900 rounded-xl shadow-xl p-6 text-white mb-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Check Your Credit Score</h2>
                  <p className="text-purple-200 mt-1">Free and won't affect your score</p>
                </div>
              </div>
              <Button
                className="w-full bg-white text-purple-900 hover:bg-gray-100 transition-all duration-300 shadow-md"
                disabled={loading}
                onClick={handleCheckScore}
                size="lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing Your Credit...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    {score === null ? "Check Credit Score" : "Refresh Credit Score"}
                  </div>
                )}
              </Button>

              {/* {lastChecked && score !== null && (
                <div className="mt-3 text-xs text-purple-200 text-center">
                  Last checked: {formatLastChecked(lastChecked)}
                </div>
              )} */}

              {error && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </div>
              )}
            </div>

            {/* Tab panels */}
            <Tabs defaultValue="score" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="score">Score Details</TabsTrigger>
                <TabsTrigger value="factors">Credit Factors</TabsTrigger>
                <TabsTrigger value="offers">Card Offers</TabsTrigger>
              </TabsList>
              <TabsContent value="score" className="mt-0">
                <Card className="shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-center">Your Credit Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CreditScoreGauge score={score} loading={loading} />

                    {score !== null && !loading && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <p className="text-sm leading-relaxed">
                            Your score indicates good credit health. Continue making payments on time.
                          </p>
                        </div>
                      </div>
                    )}

                    {score === null && !loading && !error && (
                      <div className="p-8 text-center text-muted-foreground">
                        Click "Check Credit Score" to view your score details
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="factors" className="mt-0">
                <CreditFactors />
              </TabsContent>
              <TabsContent value="offers" className="mt-0">
                <RecommendedCards />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Credit Score Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Pay bills on time</h3>
                      <p className="text-sm text-muted-foreground">
                        Payment history is the most important factor in your credit score.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <div className="bg-purple-100 text-purple-700 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Keep balances low</h3>
                      <p className="text-sm text-muted-foreground">
                        Try to keep your credit utilization below 30% of your available credit.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditScoreDashboard
