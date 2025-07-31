// // // // // import { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Signup = () => {
// // // // //   const [username, setUsername] = useState("");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [phoneNumber, setPhoneNumber] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //    const navigate = useNavigate()


// // // // //    useEffect(() => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     const userData = localStorage.getItem("userData");
  
// // // // //     if (token && userData) {
// // // // //       // User is already logged in, redirect them
// // // // //       navigate("/");
// // // // //     }
// // // // //   }, []);

// // // // //   const handleSignup = async (e) => {
// // // // //     e.preventDefault();
// // // // //     const data = { username, email, phoneNumber, password };

// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         "https://wallentcardwithauthentication.onrender.com/auth/register",
// // // // //         {
// // // // //           method: "POST",
// // // // //           headers: { "Content-Type": "application/json" },
// // // // //           body: JSON.stringify(data),
// // // // //         }
// // // // //       );

// // // // //       const result = await response.json();
// // // // //       console.log(result);

// // // // //       if (response.ok) {
// // // // //         localStorage.setItem("token", result.token);
// // // // //         localStorage.setItem("userData", JSON.stringify(result.user));
// // // // //         alert("Signup successful!");
// // // // //         navigate("/")
// // // // //       } else {
// // // // //         alert(result.message || "Signup failed.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Signup Error:", error);
// // // // //     }
// // // // //     finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div
// // // // //       className="min-h-screen flex items-center justify-center px-4 py-16"
// // // // //       style={{
// // // // //         background:
// // // // //           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// // // // //       }}
// // // // //     >
// // // // //       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
// // // // //         {/* Left side visual */}
// // // // //         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
// // // // //           {/* Stars */}
// // // // //           <img
// // // // //             src="../star.png"
// // // // //             alt="Star"
// // // // //             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
// // // // //           />

// // // // //           {/* Heading */}
// // // // //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
// // // // //             Smarter Credit
// // // // //             <br />
// // // // //             Starts Here
// // // // //           </h2>
// // // // //           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
// // // // //             Log in to explore personalized consulting, easy access to financial
// // // // //             solutions, and expert advice.
// // // // //           </p>

// // // // //           {/* Arrow */}
// // // // //           <img
// // // // //             src="../arrow.png"
// // // // //             alt="Arrow"
// // // // //             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
// // // // //           />

// // // // //           {/* Cards Image */}
// // // // //           <div className="mt-16 sm:mt-20 z-10">
// // // // //             <img
// // // // //               src="../cards.png"
// // // // //               alt="Credit cards illustration"
// // // // //               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //         {/* Right side form */}
// // // // //         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
// // // // //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
// // // // //             Register
// // // // //           </h2>
// // // // //           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

// // // // //           <form
// // // // //             className="flex flex-col space-y-4 sm:space-y-6"
// // // // //             onSubmit={handleSignup}
// // // // //           >
// // // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // // //               <label className="text-sm font-medium text-gray-700">
// // // // //                 Username
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Enter your username"
// // // // //                 value={username}
// // // // //                 onChange={(e) => setUsername(e.target.value)}
// // // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // // //               <label className="text-sm font-medium text-gray-700">
// // // // //                 Email address
// // // // //               </label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 placeholder="Enter your email"
// // // // //                 value={email}
// // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // // //               <label className="text-sm font-medium text-gray-700">
// // // // //                 Phone number
// // // // //               </label>
// // // // //               <input
// // // // //                 type="tel"
// // // // //                 placeholder="Enter your phone number"
// // // // //                 value={phoneNumber}
// // // // //                 onChange={(e) => setPhoneNumber(e.target.value)}
// // // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // // //               <label className="text-sm font-medium text-gray-700">
// // // // //                 Create Password
// // // // //               </label>
// // // // //               <input
// // // // //                 type="password"
// // // // //                 placeholder="Enter your password"
// // // // //                 value={password}
// // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <label className="flex items-center text-sm text-gray-600 mt-1">
// // // // //               <input type="checkbox" className="mr-2" required />I agree with
// // // // //               the{" "}
// // // // //               <span className="text-purple-600 ml-1 cursor-pointer">
// // // // //                 Terms & Conditions
// // // // //               </span>
// // // // //             </label>

// // // // //             {/* <button
// // // // //               type="submit"
// // // // //               className="bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium mt-2"
// // // // //             >
// // // // //               Sign Up
// // // // //             </button> */}

// // // // //             <button
// // // // //               type="submit"
// // // // //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
// // // // //               disabled={loading}
// // // // //             >
// // // // //               {loading ? (
// // // // //                 <>
// // // // //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                   </svg>
// // // // //                   Loading...
// // // // //                 </>
// // // // //               ) : (
// // // // //                 "Log in"
// // // // //               )}
// // // // //             </button>
// // // // //             <p className="text-sm text-gray-600 text-center mt-4">
// // // // //               Already have an account?{" "}
// // // // //               <a
// // // // //                 href="/login"
// // // // //                 className="text-purple-600 font-semibold hover:underline"
// // // // //               >
// // // // //                 Log in
// // // // //               </a>
// // // // //             </p>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // export default Signup;



// // // // import { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // const Signup = () => {
// // // //   const [username, setUsername] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [phoneNumber, setPhoneNumber] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     const userData = localStorage.getItem("userData");
  
// // // //     if (token && userData) {
// // // //       // User is already logged in, redirect them
// // // //       navigate("/");
// // // //     }
// // // //   }, [navigate]);

// // // //   const handleSignup = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true); // Set loading to true when form submits
    
// // // //     const data = { username, email, phoneNumber, password };

// // // //     try {
// // // //       const response = await fetch(
// // // //         "https://wallentcardwithauthentication.onrender.com/auth/register",
// // // //         {
// // // //           method: "POST", 
// // // //           headers: { "Content-Type": "application/json" },
// // // //           body: JSON.stringify(data),
// // // //         }
// // // //       );
// // // //       const result = await response.json();
// // // //       console.log(result);
// // // //       if (response.ok) {
// // // //         localStorage.setItem("token", result.token);
// // // //         localStorage.setItem("userData", JSON.stringify(result.user));
        
// // // //         // Dispatch event to update navbar
// // // //         window.dispatchEvent(new Event("authStateChanged"));
        
// // // //         // Show success toast instead of alert
        
// // // //         // Navigate after a short delay to allow toast to be seen
// // // //         setTimeout(() => {
// // // //           navigate("/");
// // // //         }, 2000);
// // // //       } else {
// // // //         toast.error(result.message || "Signup failed.");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Signup Error:", error);
// // // //       toast.error("An error occurred during signup. Please try again later.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };
// // // //   return (
// // // //     <div
// // // //       className="min-h-screen flex items-center justify-center px-4 py-16"
// // // //       style={{
// // // //         background:
// // // //           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// // // //       }}
// // // //     >
// // // // <ToastContainer 
// // // //   position="top-right" 
// // // //   autoClose={3000} 
// // // //   hideProgressBar={false}
// // // //   newestOnTop={true}
// // // //   closeOnClick={true}
// // // //   rtl={false}
// // // //   pauseOnFocusLoss={false}
// // // //   draggable={true}
// // // //   pauseOnHover={true}
// // // //   theme="colored"
// // // //   closeButton={true}
// // // // />
// // // //       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
// // // //         {/* Left side visual */}
// // // //         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
// // // //           {/* Stars */}
// // // //           <img
// // // //             src="../star.png"
// // // //             alt="Star"
// // // //             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
// // // //           />

// // // //           {/* Heading */}
// // // //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
// // // //             Smarter Credit
// // // //             <br />
// // // //             Starts Here
// // // //           </h2>
// // // //           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
// // // //             Sign up to explore personalized consulting, easy access to financial
// // // //             solutions, and expert advice.
// // // //           </p>

// // // //           {/* Arrow */}
// // // //           <img
// // // //             src="../arrow.png"
// // // //             alt="Arrow"
// // // //             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
// // // //           />

// // // //           {/* Cards Image */}
// // // //           <div className="mt-16 sm:mt-20 z-10">
// // // //             <img
// // // //               src="../cards.png"
// // // //               alt="Credit cards illustration"
// // // //               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //         {/* Right side form */}
// // // //         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
// // // //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
// // // //             Register
// // // //           </h2>
// // // //           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

// // // //           <form
// // // //             className="flex flex-col space-y-4 sm:space-y-6"
// // // //             onSubmit={handleSignup}
// // // //           >
// // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // //               <label className="text-sm font-medium text-gray-700">
// // // //                 Username
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Enter your username"
// // // //                 value={username}
// // // //                 onChange={(e) => setUsername(e.target.value)}
// // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // //               <label className="text-sm font-medium text-gray-700">
// // // //                 Email address
// // // //               </label>
// // // //               <input
// // // //                 type="email"
// // // //                 placeholder="Enter your email"
// // // //                 value={email}
// // // //                 onChange={(e) => setEmail(e.target.value)}
// // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // //               <label className="text-sm font-medium text-gray-700">
// // // //                 Phone number
// // // //               </label>
// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="Enter your phone number"
// // // //                 value={phoneNumber}
// // // //                 onChange={(e) => setPhoneNumber(e.target.value)}
// // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // // //               <label className="text-sm font-medium text-gray-700">
// // // //                 Create Password
// // // //               </label>
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Enter your password"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <label className="flex items-center text-sm text-gray-600 mt-1">
// // // //               <input type="checkbox" className="mr-2" required />I agree with
// // // //               the{" "}
// // // //               <span className="text-purple-600 ml-1 cursor-pointer">
// // // //                 Terms & Conditions
// // // //               </span>
// // // //             </label>

// // // //             <button
// // // //               type="submit"
// // // //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
// // // //               disabled={loading}
// // // //             >
// // // //               {loading ? (
// // // //                 <>
// // // //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                   </svg>
// // // //                   Loading...
// // // //                 </>
// // // //               ) : (
// // // //                 "Sign Up" // Fixed button text from "Log in" to "Sign Up"
// // // //               )}
// // // //             </button>
// // // //             <p className="text-sm text-gray-600 text-center mt-4">
// // // //               Already have an account?{" "}
// // // //               <a
// // // //                 href="/login"
// // // //                 className="text-purple-600 font-semibold hover:underline"
// // // //               >
// // // //                 Log in
// // // //               </a>
// // // //             </p>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // // export default Signup;


// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const Signup = () => {
// // //   const [username, setUsername] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [phoneNumber, setPhoneNumber] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [showOtpVerification, setShowOtpVerification] = useState(false);
// // //   const [otp, setOtp] = useState("");
// // //   const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     const userData = localStorage.getItem("userData");
  
// // //     if (token && userData) {
// // //       // User is already logged in, redirect them
// // //       navigate("/");
// // //     }
// // //   }, [navigate]);


// // //   const handleSignup = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true); // Set loading to true when form submits
    
// // //     const data = { username, email, phoneNumber, password };
// // //     try {
// // //             const response = await fetch(
// // //               "https://wallentcardwithauthentication.onrender.com/auth/register",
// // //               {
// // //                 method: "POST", 
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify(data),
// // //               }
// // //             );
// // //             const result = await response.json();

// // //     // try {
// // //     //   const response = await fetch(
// // //     //     "https://wallentcardwithauthentication.onrender.com/auth/register",
// // //     //     {
// // //     //       method: "POST", 
// // //     //       headers: { "Content-Type": "application/json" },
// // //     //       body: JSON.stringify(data),
// // //     //     }
// // //     //   );
// // //     //   const result = await response.json();
// // //       console.log(result);
// // //       if (response.ok) {
// // //         // Store token and user data temporarily
// // //         localStorage.setItem("tempToken", result.token);
// // //         localStorage.setItem("tempUserData", JSON.stringify(result.user));
        
// // //         // Show OTP verification form instead of redirecting
// // //         setRegisteredPhoneNumber(phoneNumber);
// // //         setShowOtpVerification(true);
// // //         toast.success("Registration successful! Please verify your OTP.");
// // //       } else {
// // //         toast.error(result.message || "Signup failed.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Signup Error:", error);
// // //       toast.error("An error occurred during signup. Please try again later.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleVerifyOtp = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       const response = await fetch(
// // //         "https://wallentcardwithauthentication.onrender.com/auth/verify-otp",
// // //         {
// // //           method: "POST",
// // //           headers: { "Content-Type": "application/json" },
// // //           body: JSON.stringify({ phoneNumber: registeredPhoneNumber, otp }),
// // //         }
// // //       );
// // //       const result = await response.json();
      
// // //       if (response.ok) {
// // //         // Move temp data to actual storage after verification
// // //         const tempToken = localStorage.getItem("tempToken");
// // //         const tempUserData = localStorage.getItem("tempUserData");
        
// // //         localStorage.setItem("token", tempToken);
// // //         localStorage.setItem("userData", tempUserData);
        
// // //         // Clean up temp data
// // //         localStorage.removeItem("tempToken");
// // //         localStorage.removeItem("tempUserData");
        
// // //         // Dispatch event to update navbar
// // //         window.dispatchEvent(new Event("authStateChanged"));
        
// // //         toast.success("OTP verified successfully!");
        
// // //         // Navigate after a short delay to allow toast to be seen
// // //         setTimeout(() => {
// // //           navigate("/");
// // //         }, 2000);
// // //       } else {
// // //         toast.error(result.message || "OTP verification failed.");
// // //       }
// // //     } catch (error) {
// // //       console.error("OTP Verification Error:", error);
// // //       toast.error("An error occurred during OTP verification. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // OTP input change handler with auto-focus to next input
// // //   const handleOtpChange = (e) => {
// // //     const value = e.target.value;
// // //     if (value.length <= 6 && /^\d*$/.test(value)) {
// // //       setOtp(value);
// // //     }
// // //   };

// // //   // Render OTP verification form
// // //   if (showOtpVerification) {
// // //     return (
// // //       <div
// // //         className="min-h-screen flex items-center justify-center px-4 py-16"
// // //         style={{
// // //           background:
// // //             "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// // //         }}
// // //       >
// // //         <ToastContainer 
// // //           position="top-right" 
// // //           autoClose={3000} 
// // //           hideProgressBar={false}
// // //           newestOnTop={true}
// // //           closeOnClick={true}
// // //           rtl={false}
// // //           pauseOnFocusLoss={false}
// // //           draggable={true}
// // //           pauseOnHover={true}
// // //           theme="colored"
// // //           closeButton={true}
// // //         />

// // //         <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden p-8">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Verify OTP</h2>
// // //           <p className="text-gray-500 mb-6 text-center">
// // //             Enter the OTP sent to your phone and email
// // //           </p>

// // //           <form className="flex flex-col space-y-6" onSubmit={handleVerifyOtp}>
// // //             <div className="flex flex-col space-y-2">
// // //               <label className="text-sm font-medium text-gray-700">
// // //                 Enter OTP
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 value={otp}
// // //                 onChange={handleOtpChange}
// // //                 placeholder="Enter 6-digit OTP"
// // //                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm text-center tracking-widest"
// // //                 maxLength={6}
// // //                 required
// // //               />
// // //             </div>

// // //             <button
// // //               type="submit"
// // //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 rounded-full transition text-sm font-medium flex items-center justify-center"
// // //               disabled={loading}
// // //             >
// // //               {loading ? (
// // //                 <>
// // //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                   </svg>
// // //                   Verifying...
// // //                 </>
// // //               ) : (
// // //                 "Verify OTP"
// // //               )}
// // //             </button>
            
// // //             <div className="text-center text-sm text-gray-600">
// // //               <p>Didn't receive the OTP?</p>
// // //               <button 
// // //                 type="button"
// // //                 className="text-purple-600 font-semibold hover:underline mt-1"
// // //                 onClick={() => {
// // //                   // Handle resend OTP functionality here
// // //                   toast.info("Resending OTP...");
// // //                 }}
// // //               >
// // //                 Resend OTP
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   // Regular signup form
// // //   return (
// // //     <div
// // //       className="min-h-screen flex items-center justify-center px-4 py-16"
// // //       style={{
// // //         background:
// // //           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// // //       }}
// // //     >
// // //       <ToastContainer 
// // //         position="top-right" 
// // //         autoClose={3000} 
// // //         hideProgressBar={false}
// // //         newestOnTop={true}
// // //         closeOnClick={true}
// // //         rtl={false}
// // //         pauseOnFocusLoss={false}
// // //         draggable={true}
// // //         pauseOnHover={true}
// // //         theme="colored"
// // //         closeButton={true}
// // //       />
// // //       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
// // //         {/* Left side visual */}
// // //         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
// // //           {/* Stars */}
// // //           <img
// // //             src="../star.png"
// // //             alt="Star"
// // //             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
// // //           />

// // //           {/* Heading */}
// // //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
// // //             Smarter Credit
// // //             <br />
// // //             Starts Here
// // //           </h2>
// // //           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
// // //             Sign up to explore personalized consulting, easy access to financial
// // //             solutions, and expert advice.
// // //           </p>

// // //           {/* Arrow */}
// // //           <img
// // //             src="../arrow.png"
// // //             alt="Arrow"
// // //             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
// // //           />

// // //           {/* Cards Image */}
// // //           <div className="mt-16 sm:mt-20 z-10">
// // //             <img
// // //               src="../cards.png"
// // //               alt="Credit cards illustration"
// // //               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
// // //             />
// // //           </div>
// // //         </div>
// // //         {/* Right side form */}
// // //         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
// // //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
// // //             Register
// // //           </h2>
// // //           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

// // //           <form
// // //             className="flex flex-col space-y-4 sm:space-y-6"
// // //             onSubmit={handleSignup}
// // //           >
// // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // //               <label className="text-sm font-medium text-gray-700">
// // //                 Username
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter your username"
// // //                 value={username}
// // //                 onChange={(e) => setUsername(e.target.value)}
// // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // //               <label className="text-sm font-medium text-gray-700">
// // //                 Email address
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 placeholder="Enter your email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // //               <label className="text-sm font-medium text-gray-700">
// // //                 Phone number
// // //               </label>
// // //               <input
// // //                 type="tel"
// // //                 placeholder="Enter your phone number"
// // //                 value={phoneNumber}
// // //                 onChange={(e) => setPhoneNumber(e.target.value)}
// // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="flex flex-col space-y-1 sm:space-y-2">
// // //               <label className="text-sm font-medium text-gray-700">
// // //                 Create Password
// // //               </label>
// // //               <input
// // //                 type="password"
// // //                 placeholder="Enter your password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// // //                 required
// // //               />
// // //             </div>

// // //             <label className="flex items-center text-sm text-gray-600 mt-1">
// // //               <input type="checkbox" className="mr-2" required />I agree with
// // //               the{" "}
// // //               <span className="text-purple-600 ml-1 cursor-pointer">
// // //                 Terms & Conditions
// // //               </span>
// // //             </label>

// // //             <button
// // //               type="submit"
// // //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
// // //               disabled={loading}
// // //             >
// // //               {loading ? (
// // //                 <>
// // //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //                   </svg>
// // //                   Loading...
// // //                 </>
// // //               ) : (
// // //                 "Sign Up" 
// // //               )}
// // //             </button>
// // //             <p className="text-sm text-gray-600 text-center mt-4">
// // //               Already have an account?{" "}
// // //               <a
// // //                 href="/login"
// // //                 className="text-purple-600 font-semibold hover:underline"
// // //               >
// // //                 Log in
// // //               </a>
// // //             </p>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;



// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Signup = () => {
// //   const [username, setUsername] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showOtpVerification, setShowOtpVerification] = useState(false);
// //   const [otp, setOtp] = useState("");
// //   const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState("");
// //   // const [userId, setUserId] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const userData = localStorage.getItem("userData");
  
// //     if (token && userData) {
// //       // User is already logged in, redirect them
// //       navigate("/");
// //     }
// //   }, [navigate]);

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     setLoading(true); // Set loading to true when form submits
    
// //     // Convert phoneNumber to number to match backend expected type
// //     const phoneNumberAsNumber = parseInt(phoneNumber, 10);
// //     if (isNaN(phoneNumberAsNumber)) {
// //       toast.error("Please enter a valid phone number");
// //       setLoading(false);
// //       return;
// //     }
    
// //     const data = { 
// //       username, 
// //       email, 
// //       phoneNumber: phoneNumberAsNumber, // Send as number
// //       password 
// //     };

// //     try {
// //       const response = await fetch(
// //         "https://api.easewithdraw.com/auth/register",
// //         {
// //           method: "POST", 
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(data),
// //         }
// //       );
// //       const result = await response.json();
// //       console.log("Registration result:", result);
      
// //       if (response.ok) {
// //         // Store token and user data temporarily
// //         localStorage.setItem("tempToken", result.token);
// //         localStorage.setItem("tempUserData", JSON.stringify(result.user));
        
// //         // Show OTP verification form instead of redirecting
// //         setRegisteredPhoneNumber(phoneNumberAsNumber);
// //         setShowOtpVerification(true);
        
// //         // For debugging - show the OTP value if available in response
// //         if (process.env.NODE_ENV === 'development') {
// //           console.log("Please check your email for OTP verification code");
// //         }
        
// //         toast.success("Registration successful! Please verify the OTP sent to your email.");
// //       } else {
// //         toast.error(result.message || "Signup failed.");
// //       }
// //     } catch (error) {
// //       console.error("Signup Error:", error);
// //       toast.error("An error occurred during signup. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleVerifyOtp = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       // Make sure the OTP is sent as a string, since your backend is comparing strings
// //       const verifyData = { 
// //         email: email,  // Use the email from registration
// //         otp: otp.toString() 
// //       };
      
// //       console.log("Sending OTP verification data:", verifyData);
      
// //       const response = await fetch(
// //         "https://api.easewithdraw.com/auth/verify-otp",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(verifyData),
// //         }
// //       );
// //       const result = await response.json();
// //       console.log("OTP verification result:", result);
      
// //       if (response.ok) {
// //         // Move temp data to actual storage after verification
// //         const tempToken = localStorage.getItem("tempToken");
// //         const tempUserData = localStorage.getItem("tempUserData");
        
// //         localStorage.setItem("token", tempToken);
// //         localStorage.setItem("userData", tempUserData);
        
// //         // Clean up temp data
// //         localStorage.removeItem("tempToken");
// //         localStorage.removeItem("tempUserData");
        
// //         // Dispatch event to update navbar
// //         window.dispatchEvent(new Event("authStateChanged"));
        
// //         toast.success("OTP verified successfully!");
        
// //         // Navigate after a short delay to allow toast to be seen
// //         setTimeout(() => {
// //           navigate("/");
// //         }, 2000);
// //       } else {
// //         toast.error(result.message || "OTP verification failed.");
// //       }
// //     } catch (error) {
// //       console.error("OTP Verification Error:", error);
// //       toast.error("An error occurred during OTP verification. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleResendOtp = async () => {
// //     setLoading(true);
// //     try {
// //       // Implement the resend OTP functionality
// //       // You'll need to create this endpoint on your backend
// //       const response = await fetch(
// //         "https://api.easewithdraw.com/auth/resend-otp",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({ 
// //             email: email  // You might need to store this after registration
// //           }),
// //         }
// //       );
      
// //       const result = await response.json();
      
// //       if (response.ok) {
// //         toast.success("OTP resent successfully! Please check your email and phone.");
// //       } else {
// //         toast.error(result.message || "Failed to resend OTP.");
// //       }
// //     } catch (error) {
// //       console.error("Resend OTP Error:", error);
// //       toast.error("An error occurred while resending OTP.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // OTP input change handler
// //   const handleOtpChange = (e) => {
// //     const value = e.target.value;
// //     if (value.length <= 6 && /^\d*$/.test(value)) {
// //       setOtp(value);
// //     }
// //   };

// //   // Render OTP verification form
// //   if (showOtpVerification) {
// //     return (
// //       <div
// //         className="min-h-screen flex items-center justify-center px-4 py-16"
// //         style={{
// //           background:
// //             "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// //         }}
// //       >
// //         <ToastContainer 
// //           position="top-right" 
// //           autoClose={3000} 
// //           hideProgressBar={false}
// //           newestOnTop={true}
// //           closeOnClick={true}
// //           rtl={false}
// //           pauseOnFocusLoss={false}
// //           draggable={true}
// //           pauseOnHover={true}
// //           theme="colored"
// //           closeButton={true}
// //         />

// //         <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden p-8">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Verify OTP</h2>
// //           <p className="text-gray-500 mb-6 text-center">
// //             Enter the OTP sent to your email
// //           </p>

// //           <form className="flex flex-col space-y-6" onSubmit={handleVerifyOtp}>
// //             <div className="flex flex-col space-y-2">
// //               <label className="text-sm font-medium text-gray-700">
// //                 Enter OTP
// //               </label>
// //               <input
// //                 type="text"
// //                 value={otp}
// //                 onChange={handleOtpChange}
// //                 placeholder="Enter 6-digit OTP"
// //                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm text-center tracking-widest"
// //                 maxLength={6}
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 rounded-full transition text-sm font-medium flex items-center justify-center"
// //               disabled={loading}
// //             >
// //               {loading ? (
// //                 <>
// //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                   </svg>
// //                   Verifying...
// //                 </>
// //               ) : (
// //                 "Verify OTP"
// //               )}
// //             </button>
            
// //             <div className="text-center text-sm text-gray-600">
// //               <p>Didn't receive the OTP?</p>
// //               <button 
// //                 type="button"
// //                 className="text-purple-600 font-semibold hover:underline mt-1"
// //                 onClick={handleResendOtp}
// //                 disabled={loading}
// //               >
// //                 Resend OTP
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Regular signup form
// //   return (
// //     <div
// //       className="min-h-screen flex items-center justify-center px-4 py-16"
// //       style={{
// //         background:
// //           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
// //       }}
// //     >
// //       <ToastContainer 
// //         position="top-right" 
// //         autoClose={3000} 
// //         hideProgressBar={false}
// //         newestOnTop={true}
// //         closeOnClick={true}
// //         rtl={false}
// //         pauseOnFocusLoss={false}
// //         draggable={true}
// //         pauseOnHover={true}
// //         theme="colored"
// //         closeButton={true}
// //       />
// //       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
// //         {/* Left side visual */}
// //         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
// //           {/* Stars */}
// //           <img
// //             src="../star.png"
// //             alt="Star"
// //             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
// //           />

// //           {/* Heading */}
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
// //             Smarter Credit
// //             <br />
// //             Starts Here
// //           </h2>
// //           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
// //             Sign up to explore personalized consulting, easy access to financial
// //             solutions, and expert advice.
// //           </p>

// //           {/* Arrow */}
// //           <img
// //             src="../arrow.png"
// //             alt="Arrow"
// //             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
// //           />

// //           {/* Cards Image */}
// //           <div className="mt-16 sm:mt-20 z-10">
// //             <img
// //               src="../cards.png"
// //               alt="Credit cards illustration"
// //               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
// //             />
// //           </div>
// //         </div>
// //         {/* Right side form */}
// //         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
// //             Register
// //           </h2>
// //           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

// //           <form
// //             className="flex flex-col space-y-4 sm:space-y-6"
// //             onSubmit={handleSignup}
// //           >
// //             <div className="flex flex-col space-y-1 sm:space-y-2">
// //               <label className="text-sm font-medium text-gray-700">
// //                 Username
// //               </label>
// //               <input
// //                 type="text"
// //                 placeholder="Enter your username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// //                 required
// //               />
// //             </div>

// //             <div className="flex flex-col space-y-1 sm:space-y-2">
// //               <label className="text-sm font-medium text-gray-700">
// //                 Email address
// //               </label>
// //               <input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// //                 required
// //               />
// //             </div>

// //             <div className="flex flex-col space-y-1 sm:space-y-2">
// //               <label className="text-sm font-medium text-gray-700">
// //                 Phone number
// //               </label>
// //               <input
// //                 type="tel"
// //                 placeholder="Enter your phone number"
// //                 value={phoneNumber}
// //                 onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} // Only allow digits
// //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// //                 required
// //               />
// //             </div>

// //             <div className="flex flex-col space-y-1 sm:space-y-2">
// //               <label className="text-sm font-medium text-gray-700">
// //                 Create Password
// //               </label>
// //               <input
// //                 type="password"
// //                 placeholder="Enter your password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
// //                 required
// //               />
// //             </div>

// //             <label className="flex items-center text-sm text-gray-600 mt-1">
// //               <input type="checkbox" className="mr-2" required />I agree with
// //               the{" "}
// //               <span className="text-purple-600 ml-1 cursor-pointer">
// //                 Terms & Conditions
// //               </span>
// //             </label>

// //             <button
// //               type="submit"
// //               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
// //               disabled={loading}
// //             >
// //               {loading ? (
// //                 <>
// //                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                   </svg>
// //                   Loading...
// //                 </>
// //               ) : (
// //                 "Sign Up" 
// //               )}
// //             </button>
// //             <p className="text-sm text-gray-600 text-center mt-4">
// //               Already have an account?{" "}
// //               <a
// //                 href="/login"
// //                 className="text-purple-600 font-semibold hover:underline"
// //               >
// //                 Log in
// //               </a>
// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOtpVerification, setShowOtpVerification] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState("");
//   // const [userId, setUserId] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("userData");
  
//     if (token && userData) {
//       // User is already logged in, redirect them
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when form submits
    
//     // Convert phoneNumber to number to match backend expected type
//     const phoneNumberAsNumber = parseInt(phoneNumber, 10);
//     if (isNaN(phoneNumberAsNumber)) {
//       toast.error("Please enter a valid phone number");
//       setLoading(false);
//       return;
//     }
    
//     const data = { 
//       username, 
//       email, 
//       phoneNumber: phoneNumberAsNumber, // Send as number
//       password 
//     };

//     try {
//       const response = await fetch(
//         "https://sub.easewithdraw.com/auth/register",
//         {
//           method: "POST", 
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         }
//       );
//       const result = await response.json();
//       console.log("Registration result:", result);
      
//       if (response.ok) {
//         // Store token and user data temporarily
//         localStorage.setItem("tempToken", result.token);
//         localStorage.setItem("tempUserData", JSON.stringify(result.user));
        
//         // Show OTP verification form instead of redirecting
//         setRegisteredPhoneNumber(phoneNumberAsNumber);
//         setShowOtpVerification(true);
        
//         // For debugging - show the OTP value if available in response
//         if (process.env.NODE_ENV === 'development') {
//           console.log("Please check your email for OTP verification code");
//         }
        
//         toast.success("Registration successful! Please verify the OTP sent to your email.");
//       } else {
//         toast.error(result.message || "Signup failed.");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//       toast.error("An error occurred during signup. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Make sure the OTP is sent as a string, since your backend is comparing strings
//       const verifyData = { 
//         email: email,  // Use the email from registration
//         otp: otp.toString() 
//       };
      
//       console.log("Sending OTP verification data:", verifyData);
      
//       const response = await fetch(
//         "https://sub.easewithdraw.com/auth/verify-otp",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(verifyData),
//         }
//       );
//       const result = await response.json();
//       console.log("OTP verification result:", result);
      
//       if (response.ok) {
//         // Move temp data to actual storage after verification
//         const tempToken = localStorage.getItem("tempToken");
//         const tempUserData = localStorage.getItem("tempUserData");
        
//         localStorage.setItem("token", tempToken);
//         localStorage.setItem("userData", tempUserData);
        
//         // Clean up temp data
//         localStorage.removeItem("tempToken");
//         localStorage.removeItem("tempUserData");
        
//         // Dispatch event to update navbar
//         window.dispatchEvent(new Event("authStateChanged"));
        
//         toast.success("OTP verified successfully!");
        
//         // Navigate after a short delay to allow toast to be seen
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         toast.error(result.message || "OTP verification failed.");
//       }
//     } catch (error) {
//       console.error("OTP Verification Error:", error);
//       toast.error("An error occurred during OTP verification. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setLoading(true);
//     try {
//       // Implement the resend OTP functionality
//       // You'll need to create this endpoint on your backend
//       const response = await fetch(
//         "https://sub.easewithdraw.com/auth/resend-otp",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ 
//             email: email  // You might need to store this after registration
//           }),
//         }
//       );
      
//       const result = await response.json();
      
//       if (response.ok) {
//         toast.success("OTP resent successfully! Please check your email and phone.");
//       } else {
//         toast.error(result.message || "Failed to resend OTP.");
//       }
//     } catch (error) {
//       console.error("Resend OTP Error:", error);
//       toast.error("An error occurred while resending OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // OTP input change handler
//   const handleOtpChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= 6 && /^\d*$/.test(value)) {
//       setOtp(value);
//     }
//   };

//   // Render OTP verification form
//   if (showOtpVerification) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center px-4 py-16"
//         style={{
//           background:
//             "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
//         }}
//       >
//         <ToastContainer 
//           position="top-right" 
//           autoClose={3000} 
//           hideProgressBar={false}
//           newestOnTop={true}
//           closeOnClick={true}
//           rtl={false}
//           pauseOnFocusLoss={false}
//           draggable={true}
//           pauseOnHover={true}
//           theme="colored"
//           closeButton={true}
//         />

//         <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Verify OTP</h2>
//           <p className="text-gray-500 mb-6 text-center">
//             Enter the OTP sent to your email
//           </p>

//           <form className="flex flex-col space-y-6" onSubmit={handleVerifyOtp}>
//             <div className="flex flex-col space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Enter OTP
//               </label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={handleOtpChange}
//                 placeholder="Enter 6-digit OTP"
//                 className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm text-center tracking-widest"
//                 maxLength={6}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 rounded-full transition text-sm font-medium flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Verifying...
//                 </>
//               ) : (
//                 "Verify OTP"
//               )}
//             </button>
            
//             <div className="text-center text-sm text-gray-600">
//               <p>Didn't receive the OTP?</p>
//               <button 
//                 type="button"
//                 className="text-purple-600 font-semibold hover:underline mt-1"
//                 onClick={handleResendOtp}
//                 disabled={loading}
//               >
//                 Resend OTP
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   // Regular signup form
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 py-16"
//       style={{
//         background:
//           "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
//       }}
//     >
//       <ToastContainer 
//         position="top-right" 
//         autoClose={3000} 
//         hideProgressBar={false}
//         newestOnTop={true}
//         closeOnClick={true}
//         rtl={false}
//         pauseOnFocusLoss={false}
//         draggable={true}
//         pauseOnHover={true}
//         theme="colored"
//         closeButton={true}
//       />
//       <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//         {/* Left side visual */}
//         <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
//           {/* Stars */}
//           <img
//             src="../star.png"
//             alt="Star"
//             className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
//           />

//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
//             Smarter Credit
//             <br />
//             Starts Here
//           </h2>
//           <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
//             Sign up to explore personalized consulting, easy access to financial
//             solutions, and expert advice.
//           </p>

//           {/* Arrow */}
//           <img
//             src="../arrow.png"
//             alt="Arrow"
//             className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
//           />

//           {/* Cards Image */}
//           <div className="mt-16 sm:mt-20 z-10">
//             <img
//               src="../cards.png"
//               alt="Credit cards illustration"
//               className="w-[80%] sm:w-[90%] mx-auto rounded-lg"
//             />
//           </div>
//         </div>
//         {/* Right side form */}
//         <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//             Register
//           </h2>
//           <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

//           <form
//             className="flex flex-col space-y-4 sm:space-y-6"
//             onSubmit={handleSignup}
//           >
//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Phone number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} // Only allow digits
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <div className="flex flex-col space-y-1 sm:space-y-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Create Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
//                 required
//               />
//             </div>

//             <label className="flex items-center text-sm text-gray-600 mt-1">
//               <input type="checkbox" className="mr-2" required />I agree with
//               the{" "}
//               <span className="text-purple-600 ml-1 cursor-pointer">
//                 Terms & Conditions
//               </span>
//             </label>

//             <button
//               type="submit"
//               className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Loading...
//                 </>
//               ) : (
//                 "Sign Up" 
//               )}
//             </button>
//             <p className="text-sm text-gray-600 text-center mt-4">
//               Already have an account?{" "}
//               <a
//                 href="/login"
//                 className="text-purple-600 font-semibold hover:underline"
//               >
//                 Log in
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Signup;




import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+1") // Default to USA
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [otp, setOtp] = useState("")
  const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState("")
  
  // Validation states
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  // Common country codes
  const countryCodes = [
    { code: "+1", country: "US", name: "United States" },
    { code: "+1", country: "CA", name: "Canada" },
    { code: "+44", country: "GB", name: "United Kingdom" },
    { code: "+91", country: "IN", name: "India" },
    { code: "+86", country: "CN", name: "China" },
    { code: "+81", country: "JP", name: "Japan" },
    { code: "+49", country: "DE", name: "Germany" },
    { code: "+33", country: "FR", name: "France" },
    { code: "+39", country: "IT", name: "Italy" },
    { code: "+55", country: "BR", name: "Brazil" },
    { code: "+52", country: "MX", name: "Mexico" },
    { code: "+7", country: "RU", name: "Russia" },
    { code: "+61", country: "AU", name: "Australia" },
    { code: "+971", country: "AE", name: "United Arab Emirates" },
  ]

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("userData")

    if (token && userData) {
      navigate("/")
    }
  }, [navigate])

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Password validation function
  const validatePassword = (password) => {
    const minLength = password.length >= 8
    const hasLetter = /[a-zA-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecial = /[^a-zA-Z0-9]/.test(password)

    return {
      isValid: minLength && hasLetter && hasNumber && hasSpecial,
      errors: {
        minLength,
        hasLetter,
        hasNumber,
        hasSpecial,
      },
    }
  }

  // Phone number validation - Updated to handle different country code lengths
  const validatePhoneNumber = (phone) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, "")
    // Most phone numbers are between 7-15 digits (excluding country code)
    return cleanPhone.length >= 10 && cleanPhone.length <= 10
  }

  // Name validation
  const validateName = (name) => {
    return name.trim().length >= 2 && name.trim().length <= 50 && /^[a-zA-Z\s]+$/.test(name.trim())
  }

  // Real-time validation
  const handleEmailChange = (e) => {
    const emailValue = e.target.value
    setEmail(emailValue)

    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.email
      return newErrors
    })

    if (emailValue && !validateEmail(emailValue)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }))
    }
  }

  const handleFirstNameChange = (e) => {
    const firstNameValue = e.target.value
    setFirstName(firstNameValue)

    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.firstName
      return newErrors
    })

    if (firstNameValue && !validateName(firstNameValue)) {
      setErrors((prev) => ({
        ...prev,
        firstName: "First name must be 2-50 characters long and contain only letters",
      }))
    }
  }

  const handleLastNameChange = (e) => {
    const lastNameValue = e.target.value
    setLastName(lastNameValue)

    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.lastName
      return newErrors
    })

    if (lastNameValue && !validateName(lastNameValue)) {
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name must be 2-50 characters long and contain only letters",
      }))
    }
  }

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value
    setPassword(passwordValue)

    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.password
      return newErrors
    })

    if (passwordValue) {
      const validation = validatePassword(passwordValue)
      if (!validation.isValid) {
        const errorMessages = []
        if (!validation.errors.minLength) errorMessages.push("at least 8 characters")
        if (!validation.errors.hasLetter) errorMessages.push("at least one letter")
        if (!validation.errors.hasNumber) errorMessages.push("at least one number")
        if (!validation.errors.hasSpecial) errorMessages.push("at least one special character")

        setErrors((prev) => ({
          ...prev,
          password: `Password must contain ${errorMessages.join(", ")}`,
        }))
      }
    }
  }

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, "")
    setPhoneNumber(phoneValue)

    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.phoneNumber
      return newErrors
    })

    if (phoneValue && !validatePhoneNumber(phoneValue)) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number",
      }))
    }
  }

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value)
    // Clear phone number errors when country code changes
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors.phoneNumber
      return newErrors
    })
  }

  // Form validation before submission
  const validateForm = () => {
    const newErrors = {}

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (!validateName(firstName)) {
      newErrors.firstName = "First name must be 2-50 characters long and contain only letters"
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (!validateName(lastName)) {
      newErrors.lastName = "Last name must be 2-50 characters long and contain only letters"
    }

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else {
      const validation = validatePassword(password)
      if (!validation.isValid) {
        const errorMessages = []
        if (!validation.errors.minLength) errorMessages.push("at least 8 characters")
        if (!validation.errors.hasLetter) errorMessages.push("at least one letter")
        if (!validation.errors.hasNumber) errorMessages.push("at least one number")
        if (!validation.errors.hasSpecial) errorMessages.push("at least one special character")

        newErrors.password = `Password must contain ${errorMessages.join(", ")}`
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setLoading(true)

    // Combine country code and phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`
    
    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email,
      phoneNumber: fullPhoneNumber,
      password,
    }

    try {
      const response = await fetch("https://sub.easewithdraw.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      if (response.ok) {
        localStorage.setItem("tempToken", result.token)
        localStorage.setItem("tempUserData", JSON.stringify(result.user))

        setRegisteredPhoneNumber(fullPhoneNumber)
        setShowOtpVerification(true)

        if (process.env.NODE_ENV === "development") {
          console.log("Please check your email for OTP verification code")
        }

        toast.success("Registration successful! Please verify the OTP sent to your email.")
      } else {
        if (result.message && result.message.toLowerCase().includes("email")) {
          if (result.message.toLowerCase().includes("already") || result.message.toLowerCase().includes("exists")) {
            setErrors((prev) => ({
              ...prev,
              email: "This email is already registered. Please use a different email or try logging in.",
            }))
            toast.error("Email already exists. Please use a different email.")
          } else {
            toast.error(result.message)
          }
        } else if (result.message && result.message.toLowerCase().includes("phone")) {
          setErrors((prev) => ({
            ...prev,
            phoneNumber: "This phone number is already registered.",
          }))
          toast.error("Phone number already exists. Please use a different number.")
        } else {
          toast.error(result.message || "Registration failed. Please try again.")
        }
      }
    } catch (error) {
      console.error("Signup Error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP")
      return
    }

    setLoading(true)

    try {
      const verifyData = {
        email: email,
        otp: otp.toString(),
      }

      const response = await fetch("https://sub.easewithdraw.com/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(verifyData),
      })
      const result = await response.json()

      if (response.ok) {
        const tempToken = localStorage.getItem("tempToken")
        const tempUserData = localStorage.getItem("tempUserData")

        localStorage.setItem("token", tempToken)
        localStorage.setItem("userData", tempUserData)

        localStorage.removeItem("tempToken")
        localStorage.removeItem("tempUserData")

        window.dispatchEvent(new Event("authStateChanged"))

        toast.success("Account verified successfully!")

        setTimeout(() => {
          navigate("/")
        }, 2000)
      } else {
        if (result.message && result.message.toLowerCase().includes("expired")) {
          toast.error("OTP has expired. Please request a new one.")
        } else if (result.message && result.message.toLowerCase().includes("invalid")) {
          toast.error("Invalid OTP. Please check and try again.")
        } else {
          toast.error(result.message || "OTP verification failed. Please try again.")
        }
      }
    } catch (error) {
      console.error("OTP Verification Error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleResendOtp = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://sub.easewithdraw.com/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("New OTP sent successfully! Please check your email.")
        setOtp("")
      } else {
        toast.error(result.message || "Failed to resend OTP. Please try again.")
      }
    } catch (error) {
      console.error("Resend OTP Error:", error)
      toast.error("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleOtpChange = (e) => {
    const value = e.target.value
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setOtp(value)
    }
  }

  // Helper function to get input border color based on validation state
  const getInputBorderClass = (fieldName) => {
    if (errors[fieldName]) {
      return "border-red-500 focus:ring-red-400"
    }
    if (fieldName === "email" && email && !errors.email) {
      return "border-green-500 focus:ring-green-400"
    }
    if (fieldName === "firstName" && firstName && !errors.firstName) {
      return "border-green-500 focus:ring-green-400"
    }
    if (fieldName === "lastName" && lastName && !errors.lastName) {
      return "border-green-500 focus:ring-green-400"
    }
    return "border-gray-300 focus:ring-purple-400"
  }

  // OTP verification form
  if (showOtpVerification) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{
          background:
            "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
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

        <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Verify OTP</h2>
          <p className="text-gray-500 mb-6 text-center">
            Enter the 6-digit code sent to <br />
            <span className="font-semibold text-gray-700">{email}</span>
          </p>

          <form className="flex flex-col space-y-6" onSubmit={handleVerifyOtp}>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="000000"
                className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm text-center tracking-widest font-mono text-lg"
                maxLength={6}
                required
              />
              <p className="text-xs text-gray-500 text-center">{6 - otp.length} digits remaining</p>
            </div>

            <button
              type="submit"
              className="mt-2 bg-[rgb(72,0,74)] text-white py-3 rounded-full transition text-sm font-medium flex items-center justify-center disabled:opacity-50"
              disabled={loading || otp.length !== 6}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </button>

            <div className="text-center text-sm text-gray-600">
              <p>Didn&apos;t receive the code?</p>
              <button
                type="button"
                className="text-purple-600 font-semibold hover:underline mt-1 disabled:opacity-50"
                onClick={handleResendOtp}
                disabled={loading}
              >
                Resend OTP
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowOtpVerification(false)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              ← Back to registration
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Main signup form
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background:
          "linear-gradient(to right, rgb(255, 151, 196,1), rgb(178, 150, 250,1), rgb(177, 153, 245,1), rgb(255, 146, 240,1))",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side visual */}
        <div className="bg-[rgb(72,0,74)] px-4 sm:px-8 lg:px-16 text-white w-full md:w-1/2 py-10 flex flex-col justify-center relative rounded-br-[1rem] overflow-hidden">
          <img
            src="../star.png"
            alt="Star"
            className="absolute top-2 left-2 sm:top-8 sm:left-6 w-8 sm:w-12 h-auto z-0 opacity-100 sm:opacity-100"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 z-10 px-4 sm:px-12 relative">
            Smarter Credit
            <br />
            Starts Here
          </h2>
          <p className="text-sm sm:text-base mb-6 opacity-80 z-10 px-4 sm:px-12 relative">
            Sign up to explore personalized consulting, easy access to financial solutions, and expert advice.
          </p>

          <img
            src="../arrow.png"
            alt="Arrow"
            className="absolute top-42 sm:top-64 left-2 sm:left-4 w-24 sm:w-32 h-auto z-0 opacity-100 sm:opacity-100"
          />

          <div className="mt-16 sm:mt-20 z-10">
            <img src="../cards.png" alt="Credit cards illustration" className="w-[80%] sm:w-[90%] mx-auto rounded-lg" />
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Register</h2>
          <p className="text-gray-500 mb-6 sm:mb-8">Create a new account</p>

          <form className="flex flex-col space-y-4 sm:space-y-6" onSubmit={handleSignup}>
            {/* First Name and Last Name Fields */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col space-y-1 sm:space-y-2 flex-1">
                <label className="text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className={`px-4 py-2 sm:py-3 rounded-full border focus:outline-none focus:ring-2 text-sm ${getInputBorderClass("firstName")}`}
                  required
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div className="flex flex-col space-y-1 sm:space-y-2 flex-1">
                <label className="text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className={`px-4 py-2 sm:py-3 rounded-full border focus:outline-none focus:ring-2 text-sm ${getInputBorderClass("lastName")}`}
                  required
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">Email address *</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`px-4 py-2 sm:py-3 rounded-full border focus:outline-none focus:ring-2 text-sm w-full ${getInputBorderClass("email")}`}
                  required
                />
                {email && !errors.email && validateEmail(email) && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number Field with Country Code */}
            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone number *</label>
              <div className="flex space-x-2">
                <select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  className="px-3 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm bg-white min-w-[100px]"
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`flex-1 px-4 py-2 sm:py-3 rounded-full border focus:outline-none focus:ring-2 text-sm ${getInputBorderClass("phoneNumber")}`}
                  required
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">Create Password *</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className={`px-4 py-2 sm:py-3 rounded-full border focus:outline-none focus:ring-2 text-sm ${getInputBorderClass("password")}`}
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              {password && !errors.password && (
                <div className="text-xs text-green-600 mt-1">✓ Password meets all requirements</div>
              )}
            </div>


          

            <label className="flex items-start text-sm text-gray-600 mt-1">
              <input type="checkbox" className="mr-2 mt-0.5" required />
              <span>
                I agree with the{" "}
                <span className="text-purple-600 cursor-pointer hover:underline">Terms & Conditions</span>
              </span>
            </label>

            <button
              type="submit"
              className="mt-2 bg-[rgb(72,0,74)] text-white py-3 w-32 rounded-full transition text-sm font-medium flex items-center justify-center disabled:opacity-50 hover:bg-[rgb(92,20,94)]"
              // eslint-disable-next-line no-undef
              disabled={loading    || Object.keys(errors).length > 0}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                  Creating...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 font-semibold hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
