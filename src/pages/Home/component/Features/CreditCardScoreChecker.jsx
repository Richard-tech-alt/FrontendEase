// /* eslint-disable no-unused-vars */

// // // // // // // // import { useState } from "react";
// // // // // // // // import ReactSpeedometer from "react-d3-speedometer";

// // // // // // // // export default function CreditScoreChecker() {
// // // // // // // //   const [cardNumber, setCardNumber] = useState("");
// // // // // // // //   const [expiry, setExpiry] = useState("");
// // // // // // // //   const [cvv, setCvv] = useState("");
// // // // // // // //   const [score, setScore] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const handleCheckScore = (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     // Optional: Validate inputs here
// // // // // // // //     setLoading(true);

// // // // // // // //     setTimeout(() => {
// // // // // // // //       // Simulate fetching a score - can be replaced with real API logic
// // // // // // // //       setScore(700); // or generate random between 700-850 if needed
// // // // // // // //       setLoading(false);
// // // // // // // //     }, 2000);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
// // // // // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// // // // // // // //       <form onSubmit={handleCheckScore} className="space-y-4">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Credit Card Number"
// // // // // // // //           className="w-full p-2 border rounded-lg"
// // // // // // // //           value={cardNumber}
// // // // // // // //           onChange={(e) => setCardNumber(e.target.value)}
// // // // // // // //         />
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Expiry Date (MM/YY)"
// // // // // // // //           className="w-full p-2 border rounded-lg"
// // // // // // // //           value={expiry}
// // // // // // // //           onChange={(e) => setExpiry(e.target.value)}
// // // // // // // //         />
// // // // // // // //         <input
// // // // // // // //           type="password"
// // // // // // // //           placeholder="CVV"
// // // // // // // //           className="w-full p-2 border rounded-lg"
// // // // // // // //           value={cvv}
// // // // // // // //           onChange={(e) => setCvv(e.target.value)}
// // // // // // // //         />

// // // // // // // //         <button
// // // // // // // //           type="submit"
// // // // // // // //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// // // // // // // //         >
// // // // // // // //           {loading ? "Checking..." : "Check Score"}
// // // // // // // //         </button>
// // // // // // // //       </form>

// // // // // // // //       {score !== null && !loading && (
// // // // // // // //         <div className="mt-6">
// // // // // // // //           <ReactSpeedometer
// // // // // // // //             value={score}
// // // // // // // //             minValue={300}
// // // // // // // //             maxValue={850}
// // // // // // // //             needleColor="steelblue"
// // // // // // // //             startColor="red"
// // // // // // // //             endColor="green"
// // // // // // // //             segments={5}
// // // // // // // //             height={200}
// // // // // // // //           />
// // // // // // // //           <p className="text-center mt-2 font-semibold text-lg">
// // // // // // // //             Your Credit Score: <span className="text-green-600">{score}</span>
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }




// // // // // // // import  { useState } from "react";
// // // // // // // import ReactSpeedometer from "react-d3-speedometer";

// // // // // // // export default function CreditScoreChecker() {
// // // // // // //   const [cardNumber, setCardNumber] = useState("");
// // // // // // //   const [expiry, setExpiry] = useState("");
// // // // // // //   const [cvv, setCvv] = useState("");
// // // // // // //   const [score, setScore] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [errors, setErrors] = useState({});

// // // // // // //   const validateFields = () => {
// // // // // // //     const newErrors = {};

// // // // // // //     // Card Number - 16 digits
// // // // // // //     if (!/^\d{16}$/.test(cardNumber)) {
// // // // // // //       newErrors.cardNumber = "Card number must be 16 digits";
// // // // // // //     }

// // // // // // //     // Expiry Date - MM/YY format
// // // // // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
// // // // // // //       newErrors.expiry = "Expiry must be in MM/YY format";
// // // // // // //     }

// // // // // // //     // CVV - 3 digits
// // // // // // //     if (!/^\d{3}$/.test(cvv)) {
// // // // // // //       newErrors.cvv = "CVV must be 3 digits";
// // // // // // //     }

// // // // // // //     setErrors(newErrors);
// // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // //   };

// // // // // // //   const handleCheckScore = (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     if (!validateFields()) return;

// // // // // // //     setLoading(true);
// // // // // // //     setScore(null);

// // // // // // //     setTimeout(() => {
// // // // // // //       setScore(700); // default or dynamic
// // // // // // //       setLoading(false);
// // // // // // //     }, 2000);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10">
// // // // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// // // // // // //       <form onSubmit={handleCheckScore} className="space-y-4">
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Credit Card Number"
// // // // // // //             className="w-full p-2 border rounded-lg"
// // // // // // //             value={cardNumber}
// // // // // // //             onChange={(e) => setCardNumber(e.target.value)}
// // // // // // //           />
// // // // // // //           {errors.cardNumber && (
// // // // // // //             <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Expiry Date (MM/YY)"
// // // // // // //             className="w-full p-2 border rounded-lg"
// // // // // // //             value={expiry}
// // // // // // //             onChange={(e) => setExpiry(e.target.value)}
// // // // // // //           />
// // // // // // //           {errors.expiry && (
// // // // // // //             <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             placeholder="CVV"
// // // // // // //             className="w-full p-2 border rounded-lg"
// // // // // // //             value={cvv}
// // // // // // //             onChange={(e) => setCvv(e.target.value)}
// // // // // // //           />
// // // // // // //           {errors.cvv && (
// // // // // // //             <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         <button
// // // // // // //           type="submit"
// // // // // // //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// // // // // // //         >
// // // // // // //           {loading ? "Checking..." : "Check Score"}
// // // // // // //         </button>
// // // // // // //       </form>

// // // // // // //       {score !== null && !loading && (
// // // // // // //         <div className="mt-6">
// // // // // // //           <ReactSpeedometer
// // // // // // //             value={score}
// // // // // // //             minValue={300}
// // // // // // //             maxValue={850}
// // // // // // //             needleColor="steelblue"
// // // // // // //             startColor="red"
// // // // // // //             endColor="green"
// // // // // // //             segments={5}
// // // // // // //             height={200}
// // // // // // //           />
// // // // // // //           <p className="text-center mt-2 font-semibold text-lg">
// // // // // // //             Your Credit Score: <span className="text-green-600">{score}</span>
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // import  { useState } from "react";
// // // // // // import ReactSpeedometer from "react-d3-speedometer";

// // // // // // export default function CreditScoreChecker() {
// // // // // //   const [cardNumber, setCardNumber] = useState("");
// // // // // //   const [expiry, setExpiry] = useState("");
// // // // // //   const [cvv, setCvv] = useState("");
// // // // // //   const [score, setScore] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [errors, setErrors] = useState({});

// // // // // //   const validateFields = () => {
// // // // // //     const newErrors = {};

// // // // // //     // Card Number - 16 digits
// // // // // //     if (!/^\d{16}$/.test(cardNumber)) {
// // // // // //       newErrors.cardNumber = "Card number must be 16 digits";
// // // // // //     }

// // // // // //     // Expiry Date - MM/YY format
// // // // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
// // // // // //       newErrors.expiry = "Expiry must be in MM/YY format";
// // // // // //     }

// // // // // //     // CVV - 3 digits
// // // // // //     if (!/^\d{3}$/.test(cvv)) {
// // // // // //       newErrors.cvv = "CVV must be 3 digits";
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleCheckScore = (e) => {
// // // // // //     e.preventDefault();

// // // // // //     if (!validateFields()) return;

// // // // // //     setLoading(true);
// // // // // //     setScore(null);

// // // // // //     setTimeout(() => {
// // // // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// // // // // //       setScore(randomScore);
// // // // // //       setLoading(false);
// // // // // //     }, 2000);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500">
// // // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Check Credit Score</h2>

// // // // // //       <form onSubmit={handleCheckScore} className="space-y-4">
// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Credit Card Number"
// // // // // //             className="w-full p-2 border rounded-lg"
// // // // // //             value={cardNumber}
// // // // // //             onChange={(e) => setCardNumber(e.target.value)}
// // // // // //           />
// // // // // //           {errors.cardNumber && (
// // // // // //             <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Expiry Date (MM/YY)"
// // // // // //             className="w-full p-2 border rounded-lg"
// // // // // //             value={expiry}
// // // // // //             onChange={(e) => setExpiry(e.target.value)}
// // // // // //           />
// // // // // //           {errors.expiry && (
// // // // // //             <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             placeholder="CVV"
// // // // // //             className="w-full p-2 border rounded-lg"
// // // // // //             value={cvv}
// // // // // //             onChange={(e) => setCvv(e.target.value)}
// // // // // //           />
// // // // // //           {errors.cvv && (
// // // // // //             <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
// // // // // //         >
// // // // // //           {loading ? "Checking..." : "Check Score"}
// // // // // //         </button>
// // // // // //       </form>

// // // // // //       {score !== null && !loading && (
// // // // // //         <div className="mt-6">
// // // // // //           <ReactSpeedometer
// // // // // //             value={score}
// // // // // //             minValue={300}
// // // // // //             maxValue={850}
// // // // // //             needleColor="steelblue"
// // // // // //             startColor="red"
// // // // // //             endColor="green"
// // // // // //             segments={5}
// // // // // //             height={200}
// // // // // //             customSegmentLabels={[
// // // // // //               {
// // // // // //                 text: "Poor",
// // // // // //                 position: "INSIDE",
// // // // // //                 color: "#555",
// // // // // //               },
// // // // // //               {
// // // // // //                 text: "Fair",
// // // // // //                 position: "INSIDE",
// // // // // //                 color: "#555",
// // // // // //               },
// // // // // //               {
// // // // // //                 text: "Good",
// // // // // //                 position: "INSIDE",
// // // // // //                 color: "#555",
// // // // // //               },
// // // // // //               {
// // // // // //                 text: "Very Good",
// // // // // //                 position: "INSIDE",
// // // // // //                 color: "#555",
// // // // // //               },
// // // // // //               {
// // // // // //                 text: "Excellent",
// // // // // //                 position: "INSIDE",
// // // // // //                 color: "#555",
// // // // // //               },
// // // // // //             ]}
// // // // // //           />
// // // // // //           <p className="text-center mt-2 font-semibold text-lg">
// // // // // //             Your Credit Score: <span className="text-green-600">{score}</span>
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }






// // // // import { useState } from "react";

// // // // export default function CreditScoreChecker() {
// // // //   const [cardNumber, setCardNumber] = useState("");
// // // //   const [cardName, setCardName] = useState("");
// // // //   const [expiry, setExpiry] = useState("");
// // // //   const [cvv, setCvv] = useState("");
// // // //   const [score, setScore] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [errors, setErrors] = useState({});
// // // //   const [flip, setFlip] = useState(false);

// // // //   const validateFields = () => {
// // // //     const newErrors = {};

// // // //     if (!cardName.trim()) newErrors.cardName = "Name on card is required";
// // // //     if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, "")))
// // // //       newErrors.cardNumber = "Card number must be 16 digits";
// // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry))
// // // //       newErrors.expiry = "Expiry must be in MM/YY format";
// // // //     if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits";

// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const formatCardNumber = (value) => {
// // // //     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
// // // //     const matches = v.match(/\d{4,16}/g);
// // // //     const match = (matches && matches[0]) || "";
// // // //     const parts = [];

// // // //     for (let i = 0; i < match.length; i += 4) {
// // // //       parts.push(match.substring(i, i + 4));
// // // //     }

// // // //     return parts.length ? parts.join(" ") : value;
// // // //   };

// // // //   const handleCardNumberChange = (e) => {
// // // //     const formattedValue = formatCardNumber(e.target.value);
// // // //     setCardNumber(formattedValue);
// // // //   };

// // // //   const handleExpiryChange = (e) => {
// // // //     let { value } = e.target;
// // // //     value = value.replace(/[^\d]/g, "");

// // // //     if (value.length <= 2) {
// // // //       setExpiry(value);
// // // //     } else if (value.length > 2) {
// // // //       setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
// // // //     }
// // // //   };

// // // //   const handleCheckScore = (e) => {
// // // //     e.preventDefault();
// // // //     if (!validateFields()) return;

// // // //     setLoading(true);
// // // //     setScore(null);

// // // //     setTimeout(() => {
// // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// // // //       setScore(randomScore);
// // // //       setLoading(false);
// // // //     }, 2000);
// // // //   };

// // // //   const getScoreColor = () => {
// // // //     if (!score) return "text-gray-700";
// // // //     if (score < 580) return "text-red-600";
// // // //     if (score < 670) return "text-yellow-600";
// // // //     if (score < 740) return "text-blue-600";
// // // //     return "text-green-600";
// // // //   };

// // // //   const getScoreCategory = () => {
// // // //     if (!score) return "";
// // // //     if (score < 580) return "Poor";
// // // //     if (score < 670) return "Fair";
// // // //     if (score < 740) return "Good";
// // // //     if (score < 800) return "Very Good";
// // // //     return "Excellent";
// // // //   };

// // // //   const getScoreWidth = () => {
// // // //     if (!score) return "0%";
// // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // //   };

// // // //   return (
// // // //     <div className="max-w-md mx-auto p-4">
// // // //       <div className=" bg-gradient-to-b from-[#550665] to-[#27012F] rounded-xl shadow-lg p-6 text-white">
// // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // // //         <div className={`credit-card-container ${flip ? "flipped" : ""} relative h-56 mb-8`}>
// // // //           {/* Front */}
// // // //           <div className={`rounded-xl p-6 absolute w-full h-full backface-hidden ${flip ? "hidden" : "block"} bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg`}>
// // // //             <div className="flex justify-between items-start">
// // // //               <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
// // // //               <button onClick={() => setFlip(true)} className="text-xs underline text-gray-300 hover:text-white">
// // // //                 Flip for CVV
// // // //               </button>
// // // //             </div>
// // // //             <div className="mt-6">
// // // //               <p className="text-gray-400 text-xs mb-1">Card Number</p>
// // // //               <p className="font-mono text-xl mb-4">{cardNumber || "•••• •••• •••• ••••"}</p>
// // // //               <div className="flex justify-between">
// // // //                 <div>
// // // //                   <p className="text-gray-400 text-xs mb-1">Card Holder</p>
// // // //                   <p className="font-semibold uppercase">{cardName || "YOUR NAME"}</p>
// // // //                 </div>
// // // //                 <div>
// // // //                   <p className="text-gray-400 text-xs mb-1">Expires</p>
// // // //                   <p className="font-mono">{expiry || "MM/YY"}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           {/* Back */}
// // // //           <div className={`rounded-xl absolute w-full h-full backface-hidden ${flip ? "block" : "hidden"} bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg`}>
// // // //             <div className="w-full h-12 bg-gray-900 mt-4"></div>
// // // //             <div className="p-6">
// // // //               <div className="flex justify-end mb-4">
// // // //                 <button onClick={() => setFlip(false)} className="text-xs underline text-gray-300 hover:text-white">
// // // //                   Back to front
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-white h-10 flex items-center">
// // // //                 <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
// // // //                   <p className="font-mono text-gray-800">{cvv || "•••"}</p>
// // // //                 </div>
// // // //               </div>
// // // //               <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <form onSubmit={handleCheckScore} className="space-y-4">
// // // //           <div>
// // // //             <label className="block text-sm mb-1 text-gray-200">Name on Card</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="e.g. John Smith"
// // // //               className="w-full p-3 border rounded-lg text-gray-800"
// // // //               value={cardName}
// // // //               onChange={(e) => setCardName(e.target.value)}
// // // //             />
// // // //             {errors.cardName && <p className="text-red-300 text-sm mt-1">{errors.cardName}</p>}
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm mb-1 text-gray-200">Card Number</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="1234 5678 9012 3456"
// // // //               className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //               value={cardNumber}
// // // //               onChange={handleCardNumberChange}
// // // //               maxLength={19}
// // // //             />
// // // //             {errors.cardNumber && <p className="text-red-300 text-sm mt-1">{errors.cardNumber}</p>}
// // // //           </div>

// // // //           <div className="flex space-x-4">
// // // //             <div className="flex-1">
// // // //               <label className="block text-sm mb-1 text-gray-200">Expiry Date</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="MM/YY"
// // // //                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //                 value={expiry}
// // // //                 onChange={handleExpiryChange}
// // // //                 maxLength={5}
// // // //               />
// // // //               {errors.expiry && <p className="text-red-300 text-sm mt-1">{errors.expiry}</p>}
// // // //             </div>

// // // //             <div className="flex-1">
// // // //               <label className="block text-sm mb-1 text-gray-200">CVV</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="123"
// // // //                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //                 value={cvv}
// // // //                 onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
// // // //                 maxLength={3}
// // // //               />
// // // //               {errors.cvv && <p className="text-red-300 text-sm mt-1">{errors.cvv}</p>}
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // // //             disabled={loading}
// // // //           >
// // // //             {loading ? (
// // // //               <div className="flex items-center justify-center">
// // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // // //                 Checking...
// // // //               </div>
// // // //             ) : "Check Credit Score"}
// // // //           </button>
// // // //         </form>
// // // //       </div>

// // // //       {score !== null && !loading && (
// // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // // //           <div className="flex justify-between text-xs mb-1">
// // // //             <span>Poor</span>
// // // //             <span>Fair</span>
// // // //             <span>Good</span>
// // // //             <span>Excellent</span>
// // // //           </div>

// // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // //             <div
// // // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // //               style={{ width: getScoreWidth() }}
// // // //             ></div>
// // // //           </div>

// // // //           <div className="flex justify-between">
// // // //             <span className="text-xs">300</span>
// // // //             <span className="text-xs">850</span>
// // // //           </div>

// // // //           <div className="text-center mt-6">
// // // //             <p className={`text-4xl font-bold mb-2 transition-all ${getScoreColor()}`}>
// // // //               {score}
// // // //             </p>
// // // //             <p className="text-lg font-medium text-gray-700">{getScoreCategory()} Credit Score</p>
// // // //             <p className="mt-4 text-gray-600 text-sm">
// // // //               {score < 670
// // // //                 ? "Consider improving your credit score by paying bills on time and reducing debt."
// // // //                 : "Congratulations! You have a healthy credit score."}
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )}

    
// // // //     </div>
// // // //   );
// // // // }





// // // // import { useState } from "react";

// // // // export default function CreditScoreChecker() {
// // // //   const [cardNumber, setCardNumber] = useState("");
// // // //   const [cardName, setCardName] = useState("");
// // // //   const [expiry, setExpiry] = useState("");
// // // //   const [cvv, setCvv] = useState("");
// // // //   const [score, setScore] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [errors, setErrors] = useState({});
// // // //   const [flip, setFlip] = useState(false);

// // // //   const validateFields = () => {
// // // //     const newErrors = {};
// // // //     if (!cardName.trim()) newErrors.cardName = "Name on card is required";
// // // //     if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Card number must be 16 digits";
// // // //     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) newErrors.expiry = "Expiry must be in MM/YY format";
// // // //     if (!/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits";
// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const formatCardNumber = (value) => {
// // // //     const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
// // // //     const matches = v.match(/\d{4,16}/g);
// // // //     const match = (matches && matches[0]) || "";
// // // //     const parts = [];
// // // //     for (let i = 0; i < match.length; i += 4) {
// // // //       parts.push(match.substring(i, i + 4));
// // // //     }
// // // //     return parts.length ? parts.join(" ") : value;
// // // //   };

// // // //   const handleCardNumberChange = (e) => {
// // // //     const formattedValue = formatCardNumber(e.target.value);
// // // //     setCardNumber(formattedValue);
// // // //   };

// // // //   const handleExpiryChange = (e) => {
// // // //     let { value } = e.target;
// // // //     value = value.replace(/[^\d]/g, "");
// // // //     if (value.length <= 2) {
// // // //       setExpiry(value);
// // // //     } else if (value.length > 2) {
// // // //       setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
// // // //     }
// // // //   };

// // // //   const handleCheckScore = (e) => {
// // // //     e.preventDefault();

// // // //     if (!validateFields()) return;

// // // //     setLoading(true);
// // // //     setScore(null);

// // // //     const userKey = `${cardName.trim().toLowerCase()}|${cardNumber.replace(/\s/g, "")}|${expiry}`;
// // // //     const storedScore = localStorage.getItem(userKey);

// // // //     if (storedScore) {
// // // //       setTimeout(() => {
// // // //         setScore(parseInt(storedScore));
// // // //         setLoading(false);
// // // //       }, 1000);
// // // //     } else {
// // // //       const randomScore = Math.floor(Math.random() * (850 - 700 + 1)) + 700;
// // // //       localStorage.setItem(userKey, randomScore);
// // // //       setTimeout(() => {
// // // //         setScore(randomScore);
// // // //         setLoading(false);
// // // //       }, 1000);
// // // //     }
// // // //   };

// // // //   const getScoreColor = () => {
// // // //     if (!score) return "text-gray-700";
// // // //     if (score < 580) return "text-red-600";
// // // //     if (score < 670) return "text-yellow-600";
// // // //     if (score < 740) return "text-blue-600";
// // // //     return "text-green-600";
// // // //   };

// // // //   const getScoreCategory = () => {
// // // //     if (!score) return "";
// // // //     if (score < 580) return "Poor";
// // // //     if (score < 670) return "Fair";
// // // //     if (score < 740) return "Good";
// // // //     if (score < 800) return "Very Good";
// // // //     return "Excellent";
// // // //   };

// // // //   const getScoreWidth = () => {
// // // //     if (!score) return "0%";
// // // //     return `${((score - 300) / (850 - 300)) * 100}%`;
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen  bg-gradient-to-b from-[#550665] to-[#27012F] flex items-center justify-center p-4 ">
// // // //     <div className="max-w-md mx-auto p-4 shadow-2xl">
// // // //       {/* <div className="rounded-xl shadow-lg p-6 text-white">
// // // //         <h2 className="text-2xl font-bold mb-6 text-center">Check Your Credit Score</h2>

// // // //         <div className={`credit-card-container ${flip ? "flipped" : ""} relative h-56 mb-8`}>
// // // //           {/* Front of card */}
// // // //           <div className={`rounded-xl p-6 absolute w-full h-full backface-hidden ${flip ? "hidden" : "block"} bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg`}>
// // // //             <div className="flex justify-between items-start">
// // // //               <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-md"></div>
// // // //               <button onClick={() => setFlip(true)} className="text-xs underline text-gray-300 hover:text-white">
// // // //                 Flip for CVV
// // // //               </button>
// // // //             </div>
// // // //             <div className="mt-6">
// // // //               <p className="text-gray-400 text-xs mb-1">Card Number</p>
// // // //               <p className="font-mono text-xl mb-4">{cardNumber || "•••• •••• •••• ••••"}</p>
// // // //               <div className="flex justify-between">
// // // //                 <div>
// // // //                   <p className="text-gray-400 text-xs mb-1">Card Holder</p>
// // // //                   <p className="font-semibold uppercase">{cardName || "YOUR NAME"}</p>
// // // //                 </div>
// // // //                 <div>
// // // //                   <p className="text-gray-400 text-xs mb-1">Expires</p>
// // // //                   <p className="font-mono">{expiry || "MM/YY"}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Back of card */}
// // // //           <div className={`rounded-xl absolute w-full h-full backface-hidden ${flip ? "block" : "hidden"} bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg`}>
// // // //             <div className="w-full h-12 bg-gray-900 mt-4"></div>
// // // //             <div className="p-6">
// // // //               <div className="flex justify-end mb-4">
// // // //                 <button onClick={() => setFlip(false)} className="text-xs underline text-gray-300 hover:text-white">
// // // //                   Back to front
// // // //                 </button>
// // // //               </div>
// // // //               <div className="bg-white h-10 flex items-center">
// // // //                 <div className="bg-gray-100 w-full h-8 flex justify-end items-center pr-3">
// // // //                   <p className="font-mono text-gray-800">{cvv || "•••"}</p>
// // // //                 </div>
// // // //               </div>
// // // //               <p className="text-gray-400 text-xs mt-2 text-right">CVV</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <form onSubmit={handleCheckScore} className="space-y-4">
// // // //           <div>
// // // //             <label className="block text-sm mb-1 text-gray-200">Name on Card</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="e.g. John Smith"
// // // //               className="w-full p-3 border rounded-lg text-gray-800"
// // // //               value={cardName}
// // // //               onChange={(e) => setCardName(e.target.value)}
// // // //             />
// // // //             {errors.cardName && <p className="text-red-300 text-sm mt-1">{errors.cardName}</p>}
// // // //           </div>

// // // //           <div>
// // // //             <label className="block text-sm mb-1 text-gray-200">Card Number</label>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="1234 5678 9012 3456"
// // // //               className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //               value={cardNumber}
// // // //               onChange={handleCardNumberChange}
// // // //               maxLength={19}
// // // //             />
// // // //             {errors.cardNumber && <p className="text-red-300 text-sm mt-1">{errors.cardNumber}</p>}
// // // //           </div>

// // // //           <div className="flex space-x-4">
// // // //             <div className="flex-1">
// // // //               <label className="block text-sm mb-1 text-gray-200">Expiry Date</label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="MM/YY"
// // // //                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //                 value={expiry}
// // // //                 onChange={handleExpiryChange}
// // // //                 maxLength={5}
// // // //               />
// // // //               {errors.expiry && <p className="text-red-300 text-sm mt-1">{errors.expiry}</p>}
// // // //             </div>

// // // //             <div className="flex-1">
// // // //               <label className="block text-sm mb-1 text-gray-200">CVV</label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="123"
// // // //                 className="w-full p-3 border rounded-lg text-gray-800 font-mono"
// // // //                 value={cvv}
// // // //                 onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
// // // //                 maxLength={3}
// // // //               />
// // // //               {errors.cvv && <p className="text-red-300 text-sm mt-1">{errors.cvv}</p>}
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all mt-6"
// // // //             disabled={loading}
// // // //           >
// // // //             {loading ? (
// // // //               <div className="flex items-center justify-center">
// // // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-2"></div>
// // // //                 Checking...
// // // //               </div>
// // // //             ) : "Check Credit Score"}
// // // //           </button>
// // // //         </form>
// // // //       </div> */}

// // // //       {score !== null && !loading && (
// // // //         <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
// // // //           <h3 className="text-xl font-bold mb-4 text-center">Your Credit Score Result</h3>

// // // //           <div className="flex justify-between text-xs mb-1">
// // // //             <span>Poor</span>
// // // //             <span>Fair</span>
// // // //             <span>Good</span>
// // // //             <span>Excellent</span>
// // // //           </div>

// // // //           <div className="h-6 w-full bg-gray-200 rounded-full mb-4">
// // // //             <div 
// // // //               className="h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
// // // //               style={{ width: getScoreWidth() }}
// // // //             ></div>
// // // //           </div>

// // // //           <div className="flex justify-between">
// // // //             <span className="text-xs">300</span>
// // // //             <span className="text-xs">850</span>
// // // //           </div>

// // // //           <div className="text-center mt-6">
// // // //             <p className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
// // // //               {score}
// // // //             </p>
// // // //             <p className="text-lg font-medium text-gray-700">
// // // //               {getScoreCategory()} Credit Score
// // // //             </p>
// // // //             <p className="mt-4 text-gray-600 text-sm">
// // // //               {score < 670 ? 
// // // //                 "Consider improving your credit score by paying bills on time and reducing debt." :
// // // //                 "Congratulations! You have a healthy credit score."
// // // //               }
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       )}    
// // // //     </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import { Eye, AlertTriangle, Shield, Smartphone } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Input } from "@/components/ui/input"
// // // import { Card } from "@/components/ui/card"
// // // import { Link, useNavigate } from "react-router-dom"

// // // export default function VerificationForm() {
// // //   const navigate = useNavigate()

// // //   const handleChecker=()=>{
// // //     navigate("/new-checker")
// // //   }
// // //   return (
// // //     <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex items-center justify-center">
// // //       <div className="w-full max-w-5xl bg-white rounded-lg shadow-sm p-6 md:p-10">
// // //         <div className="space-y-6">
// // //           <div className="space-y-2">
// // //             <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome! Let&apos;s get you set up</h1>
// // //             <p className="text-lg text-gray-700">
// // //               To get started, enter some details and we&apos;ll verify you with a text message.
// // //             </p>
// // //           </div>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             <div className="md:col-span-2 space-y-6">
// // //               <div className="space-y-2">
// // //                 <div className="flex justify-between items-center">
// // //                   <label htmlFor="ssn" className="text-base font-medium">
// // //                     Last 4 of Social Security number
// // //                   </label>
// // //                   <button className="text-blue-600 hover:underline text-sm">Why do we need this?</button>
// // //                 </div>
// // //                 <div className="relative">
// // //                   <Input id="ssn" type="password" placeholder="••••" className="pr-10" />
// // //                   <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
// // //                     <Eye className="h-5 w-5" />
// // //                     <span className="sr-only">Toggle password visibility</span>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-2">
// // //                 <label htmlFor="phone" className="text-base font-medium">
// // //                   Email 
// // //                 </label>
// // //                 <div className="relative">
// // //                   <Input id="phone" type="tel" placeholder="abc@gmail.com" className="pr-10 border-red-300" />
// // //                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
// // //                     <AlertTriangle className="h-5 w-5" />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-2">
// // //                 <label htmlFor="phone" className="text-base font-medium">
// // //                   Mobile phone number
// // //                 </label>
// // //                 <div className="relative">
// // //                   <Input id="phone" type="tel" placeholder="(XXX) XXX-XXXX" className="pr-10 border-red-300" />
// // //                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
// // //                     <AlertTriangle className="h-5 w-5" />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="text-sm text-gray-600 space-y-4">
// // //                 <p>
// // //                   By clicking &quot;Get started&quot;: I accept and agree to the{" "}
// // //                   <Link to="#" className="text-blue-600 hover:underline">
// // //                     Terms of Use Agreement
// // //                   </Link>{" "}
// // //                   as well as acknowledge receipt of your{" "}
// // //                   <Link to="#" className="text-blue-600 hover:underline">
// // //                     Privacy Policy
// // //                   </Link>
// // //                   . I consent to Experian sending a one-time verification text to the phone number provided. Message and
// // //                   data rates may apply.
// // //                 </p>

// // //                 <Button className="w-full py-6 text-lg mt-4" onClick={handleChecker}>Get started</Button>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-6">
// // //               <Card className="bg-blue-600 text-white p-6 rounded-lg">
// // //                 <div className="flex flex-col items-center text-center space-y-4">
// // //                   <div className="bg-blue-500 p-3 rounded-full">
// // //                     <Smartphone className="h-8 w-8" />
// // //                   </div>
// // //                   <p className="text-xl font-medium">You&apos;ll need your mobile phone</p>
// // //                 </div>
// // //               </Card>

// // //               <Card className="bg-blue-600 text-white p-6 rounded-lg">
// // //                 <div className="flex flex-col items-center text-center space-y-4">
// // //                   <div className="bg-blue-500 p-3 rounded-full">
// // //                     <Shield className="h-8 w-8" />
// // //                   </div>
// // //                   <p className="text-xl font-medium">Your info stays secure—it&apos;s only used for verification</p>
// // //                 </div>
// // //               </Card>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // import { useState } from "react"
// // import { Eye, AlertTriangle, Shield, Smartphone } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Card } from "@/components/ui/card"
// // import { Link, useNavigate } from "react-router-dom"

// // export default function VerificationForm() {
// //   const navigate = useNavigate()

// //   const [ssn, setSsn] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [phone, setPhone] = useState("")
// //   const [errors, setErrors] = useState({ ssn: false, email: false, phone: false })

// //   const handleChecker = () => {
// //     const newErrors = {
// //       ssn: ssn.trim() === "",
// //       email: email.trim() === "",
// //       phone: phone.trim() === "",
// //     }

// //     setErrors(newErrors)

// //     const hasError = Object.values(newErrors).some(Boolean)
// //     if (!hasError) {
// //       // const userData = { email, phone, ssn };
// //       // localStorage.setItem("user-info", JSON.stringify(userData));
// //       localStorage.setItem("userEmail", email);
// //       localStorage.setItem("userPhone", phone);

// //       navigate("/new-checker", { state: { email, phone } });

// //       // navigate("/new-checker")
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex items-center justify-center">
// //       <div className="w-full max-w-5xl bg-white rounded-lg shadow-sm p-6 md:p-10">
// //         <div className="space-y-6">
// //           <div className="space-y-2">
// //             <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome! Let&apos;s get you set up</h1>
// //             <p className="text-lg text-gray-700">
// //               To get started, enter some details and we&apos;ll verify you with a text message.
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="md:col-span-2 space-y-6">
// //               {/* SSN Input */}
// //               <div className="space-y-2">
// //                 <div className="flex justify-between items-center">
// //                   <label htmlFor="ssn" className="text-base font-medium">
// //                     Last 4 of Social Security number
// //                   </label>
// //                   <button className="text-blue-600 hover:underline text-sm">Why do we need this?</button>
// //                 </div>
// //                 <div className="relative">
// //                   <Input
// //                     id="ssn"
// //                     type="password"
// //                     placeholder="••••"
// //                     className={`pr-10 ${errors.ssn ? "border-red-500" : ""}`}
// //                     value={ssn}
// //                     onChange={(e) => setSsn(e.target.value)}
// //                   />
// //                   <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
// //                     <Eye className="h-5 w-5" />
// //                     <span className="sr-only">Toggle password visibility</span>
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Email Input */}
// //               <div className="space-y-2">
// //                 <label htmlFor="email" className="text-base font-medium">Email</label>
// //                 <div className="relative">
// //                   <Input
// //                     id="email"
// //                     type="email"
// //                     placeholder="abc@gmail.com"
// //                     className={`pr-10 ${errors.email ? "border-red-500" : ""}`}
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   />
// //                   {errors.email && (
// //                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
// //                       <AlertTriangle className="h-5 w-5" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* Phone Input */}
// //               <div className="space-y-2">
// //                 <label htmlFor="phone" className="text-base font-medium">Mobile phone number</label>
// //                 <div className="relative">
// //                   <Input
// //                     id="phone"
// //                     type="tel"
// //                     placeholder="(XXX) XXX-XXXX"
// //                     className={`pr-10 ${errors.phone ? "border-red-500" : ""}`}
// //                     value={phone}
// //                     onChange={(e) => setPhone(e.target.value)}
// //                   />
// //                   {errors.phone && (
// //                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
// //                       <AlertTriangle className="h-5 w-5" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               {/* Disclaimer + Button */}
// //               <div className="text-sm text-gray-600 space-y-4">
// //                 <p>
// //                   By clicking &quot;Get started&quot;: I accept and agree to the{" "}
// //                   <Link to="#" className="text-blue-600 hover:underline">Terms of Use Agreement</Link> as well as acknowledge
// //                   receipt of your <Link to="#" className="text-blue-600 hover:underline">Privacy Policy</Link>. I consent to Experian sending a
// //                   one-time verification text to the phone number provided. Message and data rates may apply.
// //                 </p>
// //                 <Button className="w-full py-6 text-lg mt-4" onClick={handleChecker}>Get started</Button>
// //               </div>
// //             </div>
// //             {/* Right-side Cards */}
// //             <div className="space-y-6">
// //               <Card className="bg-blue-600 text-white p-6 rounded-lg">
// //                 <div className="flex flex-col items-center text-center space-y-4">
// //                   <div className="bg-blue-500 p-3 rounded-full">
// //                     <Smartphone className="h-8 w-8" />
// //                   </div>
// //                   <p className="text-xl font-medium">You&apos;ll need your mobile phone</p>
// //                 </div>
// //               </Card>

// //               <Card className="bg-blue-600 text-white p-6 rounded-lg">
// //                 <div className="flex flex-col items-center text-center space-y-4">
// //                   <div className="bg-blue-500 p-3 rounded-full">
// //                     <Shield className="h-8 w-8" />
// //                   </div>
// //                   <p className="text-xl font-medium">Your info stays secure—it&apos;s only used for verification</p>
// //                 </div>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }




// import { useState } from "react"
// import { Eye, AlertTriangle, Shield, Smartphone } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card } from "@/components/ui/card"
// import { useRouter } from "next/navigation"
// import { useAuth } from "./auth-context"
// import { useToast } from "@/components/ui/use-toast"

// export default function VerificationForm() {
//   const router = useRouter()
//   const { isAuthenticated } = useAuth()
//   const { toast } = useToast()

//   const [ssn, setSsn] = useState("")
//   const [email, setEmail] = useState("")
//   const [phone, setPhone] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [errors, setErrors] = useState({ ssn: false, email: false, phone: false })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email)
//   }

//   const validatePhone = (phone) => {
//     return /^\d{10}$/.test(phone.replace(/\D/g, ''))
//   }

//   const validateSSN = (ssn) => {
//     return /^\d{4}$/.test(ssn)
//   }

//   const handleChecker = async () => {
//     // Validate inputs
//     const newErrors = {
//       ssn: !validateSSN(ssn),
//       email: !validateEmail(email),
//       phone: !validatePhone(phone)
//     }

//     setErrors(newErrors)

//     const hasError = Object.values(newErrors).some(Boolean)
//     if (hasError) {
//       toast({
//         title: "Please fix the errors",
//         description: "All fields must be filled correctly to continue.",
//         variant: "destructive"
//       })
//       return
//     }

//     setIsSubmitting(true)

//     try {
//       // Store verification data in localStorage
//       localStorage.setItem("userEmail", email)
//       localStorage.setItem("userPhone", phone)
//       localStorage.setItem("verificationData", JSON.stringify({ email, phone, ssn: ssn.slice(-4) }))

//       // Check if user is authenticated
//       if (isAuthenticated) {
//         // User is logged in, redirect to credit score page
//         router.push("/new-checker")
//       } else {
//         // User is not logged in, redirect to login page
//         router.push("/login")
//       }
//     } catch (error) {
//       console.error("Error during verification")
//       toast({
//         title: "Something went wrong",
//         description: "Please try again later.",
//         variant: "destructive"
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex items-center justify-center">
//       <div className="w-full max-w-5xl bg-white rounded-lg shadow-sm p-6 md:p-10">
//         <div className="space-y-6">
//           <div className="space-y-2">
//             <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome! Let&apos;s get you set up</h1>
//             <p className="text-lg text-gray-700">
//               To get started, enter some details and we&apos;ll verify you with a text message.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="md:col-span-2 space-y-6">
//               {/* SSN Input */}
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <label htmlFor="ssn" className="text-base font-medium">
//                     Last 4 of Social Security number
//                   </label>
//                   <button 
//                     type="button"
//                     className="text-blue-600 hover:underline text-sm"
//                     onClick={() => toast({
//                       title: "Why we need your SSN",
//                       description: "We use the last 4 digits of your SSN to verify your identity and ensure the security of your credit information."
//                     })}
//                   >
//                     Why do we need this?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="ssn"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••"
//                     maxLength={4}
//                     className={`pr-10 ${errors.ssn ? "border-red-500" : ""}`}
//                     value={ssn}
//                     onChange={(e) => {
//                       const value = e.target.value.replace(/\D/g, '')
//                       setSsn(value)
//                     }}
//                   />
//                   <button 
//                     type="button"
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     <Eye className="h-5 w-5" />
//                     <span className="sr-only">Toggle password visibility</span>
//                   </button>
//                 </div>
//                 {errors.ssn && (
//                   <p className="text-sm text-red-500">Please enter the last 4 digits of your SSN</p>
//                 )}
//               </div>

//               {/* Email Input */}
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-base font-medium">Email</label>
//                 <div className="relative">
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="abc@gmail.com"
//                     className={`pr-10 ${errors.email ? "border-red-500" : ""}`}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   {errors.email && (
//                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
//                       <AlertTriangle className="h-5 w-5" />
//                     </div>
//                   )}
//                 </div>
//                 {errors.email && (
//                   <p className="text-sm text-red-500">Please enter a valid email address</p>
//                 )}
//               </div>

//               {/* Phone Input */}
//               <div className="space-y-2">
//                 <label htmlFor="phone" className="text-base font-medium">Mobile phone number</label>
//                 <div className="relative">
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="(XXX) XXX-XXXX"
//                     className={`pr-10 ${errors.phone ? "border-red-500" : ""}`}
//                     value={phone}
//                     onChange={(e) => {
//                       const value = e.target.value.replace(/\D/g, '')
//                       // Format phone number as (XXX) XXX-XXXX
//                       let formattedValue = ''
//                       if (value.length > 0) {
//                         formattedValue += `(${value.slice(0, 3)}`
//                         if (value.length > 3) {
//                           formattedValue += `) ${value.slice(3, 6)}`
//                           if (value.length > 6) {
//                             formattedValue += `-${value.slice(6, 10)}`
//                           }
//                         }
//                       }
//                       setPhone(value.length > 0 ? formattedValue : value)
//                     }}
//                   />
//                   {errors.phone && (
//                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
//                       <AlertTriangle className="h-5 w-5" />
//                     </div>
//                   )}
//                 </div>
//                 {errors.phone && (
//                   <p className="text-sm text-red-500">Please enter a valid 10-digit phone number</p>
//                 )}
//               </div>
//               {/* Disclaimer + Button */}
//               <div className="text-sm text-gray-600 space-y-4">
//                 <p>
//                   By clicking &quot;Get started&quot;: I accept and agree to the{" "}
//                   <button type="button" className="text-blue-600 hover:underline">Terms of Use Agreement</button> as well as acknowledge
//                   receipt of your <button type="button" className="text-blue-600 hover:underline">Privacy Policy</button>. I consent to sending a
//                   one-time verification text to the phone number provided. Message and data rates may apply.
//                 </p>
//                 <Button 
//                   className="w-full py-6 text-lg mt-4" 
//                   onClick={handleChecker}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Processing..." : "Get started"}
//                 </Button>
//               </div>
//             </div>
//             {/* Right-side Cards */}
//             <div className="space-y-6">
//               <Card className="bg-blue-600 text-white p-6 rounded-lg">
//                 <div className="flex flex-col items-center text-center space-y-4">
//                   <div className="bg-blue-500 p-3 rounded-full">
//                     <Smartphone className="h-8 w-8" />
//                   </div>
//                   <p className="text-xl font-medium">You&apos;ll need your mobile phone</p>
//                 </div>
//               </Card>

//               <Card className="bg-blue-600 text-white p-6 rounded-lg">
//                 <div className="flex flex-col items-center text-center space-y-4">
//                   <div className="bg-blue-500 p-3 rounded-full">
//                     <Shield className="h-8 w-8" />
//                   </div>
//                   <p className="text-xl font-medium">Your info stays secure—it&apos;s only used for verification</p>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Eye, AlertTriangle, Shield, Smartphone } from "lucide-react"

const VerificationForm = () => {
  const navigate = useNavigate()
  const [ssn, setSsn] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({ ssn: false, email: false, phone: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token")
    if (token) {
      // User is already authenticated, check if they have verification data
      const verificationData = localStorage.getItem("verificationData")
      if (verificationData) {
        // User has already verified, go directly to credit score
        navigate("/new-checker")
      }
    }
  }, [navigate])

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone.replace(/\D/g, ""))
  }

  const validateSSN = (ssn) => {
    return /^\d{4}$/.test(ssn)
  }

  const handleChecker = async (e) => {
    e.preventDefault()

    // Validate inputs
    const newErrors = {
      ssn: !validateSSN(ssn),
      email: !validateEmail(email),
      phone: !validatePhone(phone.replace(/\D/g, "")),
    }

    setErrors(newErrors)

    const hasError = Object.values(newErrors).some(Boolean)
    if (hasError) {
      toast.error("Please fill the fields before continuing")
      return
    }

    setIsSubmitting(true)

    try {
      // Store verification data in localStorage
      const phoneNumberFormatted = phone.replace(/\D/g, "")
      const verificationData = {
        email,
        phoneNumber: Number.parseInt(phoneNumberFormatted, 10),
        ssn: ssn.slice(-4),
      }

      localStorage.setItem("verificationData", JSON.stringify(verificationData))

      // Check if user is authenticated
      const token = localStorage.getItem("token")
      if (token) {
        // User is logged in, redirect to credit score page
        navigate("/credit-score")
      } else {
        // User is not logged in, redirect to login page
        toast.info("Please log in to view your credit score")
        navigate("/login")
      }
    } catch (error) {
      console.error("Error during verification:", error)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(255,146,240,1)] via-[rgb(178,150,250,1)] via-[rgb(177,153,245,1)] to-[rgb(255,151,196,1)] p-4 md:p-8 flex items-center justify-center">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
        closeButton={true}
      />

      <div className="w-full max-w-5xl bg-white rounded-lg shadow-sm p-6 md:p-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome! Let&apos;s get you set up</h1>
            <p className="text-lg text-gray-700">
              To get started, enter some details and we&apos;ll verify you with a text message.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <form onSubmit={handleChecker}>
                {/* SSN Input */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <label htmlFor="ssn" className="text-base font-medium">
                      Last 4 of Social Security number
                    </label>
                    <button
                      type="button"
                      className="text-[rgb(72,0,74)] hover:underline text-sm"
                      onClick={() =>
                        toast.info(
                          "We use the last 4 digits of your SSN to verify your identity and ensure the security of your credit information.",
                        )
                      }
                    >
                      Why do we need this?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="ssn"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••"
                      maxLength={4}
                      className={`w-full px-4 py-3 rounded-full border ${errors.ssn ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm`}
                      value={ssn}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        setSsn(value)
                      }}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Eye className="h-5 w-5" />
                      <span className="sr-only">Toggle password visibility</span>
                    </button>
                  </div>
                  {errors.ssn && <p className="text-sm text-red-500">Please enter the last 4 digits of your SSN</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-2 mb-6">
                  <label htmlFor="email" className="text-base font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="abc@gmail.com"
                      className={`w-full px-4 py-3 rounded-full border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="text-sm text-red-500">Please enter a valid email address</p>}
                </div>

                {/* Phone Input */}
                <div className="space-y-2 mb-6">
                  <label htmlFor="phone" className="text-base font-medium">
                    Mobile phone number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      className={`w-full px-4 py-3 rounded-full border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm`}
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        // Format phone number as (XXX) XXX-XXXX
                        let formattedValue = ""
                        if (value.length > 0) {
                          formattedValue += `(${value.slice(0, 3)}`
                          if (value.length > 3) {
                            formattedValue += `) ${value.slice(3, 6)}`
                            if (value.length > 6) {
                              formattedValue += `-${value.slice(6, 10)}`
                            }
                          }
                        }
                        setPhone(value.length > 0 ? formattedValue : value)
                      }}
                    />
                    {errors.phone && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.phone && <p className="text-sm text-red-500">Please enter a valid 10-digit phone number</p>}
                </div>

                {/* Disclaimer + Button */}
                <div className="text-sm text-gray-600 space-y-4">
                  <p>
                    By clicking &quot;Get started&quot;: I accept and agree to the{" "}
                    <button type="button" className="text-[rgb(72,0,74)] hover:underline">
                      Terms of Use Agreement
                    </button>{" "}
                    as well as acknowledge receipt of your{" "}
                    <button type="button" className="text-[rgb(72,0,74)] hover:underline">
                      Privacy Policy
                    </button>
                    . I consent to sending a one-time verification text to the phone number provided. Message and data
                    rates may apply.
                  </p>
                  <button
                    type="submit"
                    className="w-full py-6 text-lg mt-4 bg-[rgb(72,0,74)] text-white rounded-full transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Get started"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right-side Cards */}
            <div className="space-y-6">
              <div className="bg-[rgb(72,0,74)] text-white p-6 rounded-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-[rgba(255,255,255,0.2)] p-3 rounded-full">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <p className="text-xl font-medium">You&apos;ll need your mobile phone</p>
                </div>
              </div>

              <div className="bg-[rgb(72,0,74)] text-white p-6 rounded-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-[rgba(255,255,255,0.2)] p-3 rounded-full">
                    <Shield className="h-8 w-8" />
                  </div>
                  <p className="text-xl font-medium">Your info stays secure—it&apos;s only used for verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationForm
