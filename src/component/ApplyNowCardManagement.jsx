// // import { useState, useEffect } from 'react';
// // import { CreditCard, Power, SnowflakeIcon, DollarSign, Lock, Eye, EyeOff, ShieldCheck, Settings, AlertTriangle, ChevronDown, ChevronUp, Clock, CheckCircle2, XCircle, BarChart4, RefreshCw } from 'lucide-react';

// // function ApplyCardManagement() {
// //   // Initial state with a sample credit card
// //   const [selectedCard, setSelectedCard] = useState({
// //     id: 'card1',
// //     name: 'Platinum Rewards',
// //     number: '4111 •••• •••• 1234',
// //     expiry: '12/25',
// //     cvv: '***',
// //     active: true,
// //     frozen: false,
// //     limit: 10000,
// //     balance: 2340.56,
// //     image: ' https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// //     color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
// //     textColor: 'text-white',
// //     type: 'Visa',
// //     transactions: [
// //       { id: 't1', merchant: 'Amazon', amount: 129.99, date: '2025-05-01', status: 'completed' },
// //       { id: 't2', merchant: 'Netflix', amount: 14.99, date: '2025-04-28', status: 'completed' },
// //       { id: 't3', merchant: 'Uber', amount: 24.50, date: '2025-04-25', status: 'pending' },
// //       { id: 't4', merchant: 'Starbucks', amount: 6.75, date: '2025-04-23', status: 'completed' },
// //       { id: 't5', merchant: 'Target', amount: 87.32, date: '2025-04-20', status: 'declined' }
// //     ],
// //     availableLimit: 7659.44
// //   });

// //   // State for showing/hiding sensitive information
// //   const [showCardNumber, setShowCardNumber] = useState(false);
// //   const [showCVV, setShowCVV] = useState(false);
  
// //   // State for credit limit adjustment
// //   const [newLimit, setNewLimit] = useState(selectedCard.limit);
// //   const [limitChangeRequested, setLimitChangeRequested] = useState(false);
  
// //   // State for tabs
// //   const [activeTab, setActiveTab] = useState('overview');

// //   // State for pin management
// //   const [showPinControls, setShowPinControls] = useState(false);
// //   const [pinAction, setPinAction] = useState('');

// //   // Update available limit whenever balance or limit changes
// //   useEffect(() => {
// //     setSelectedCard(prev => ({
// //       ...prev,
// //       availableLimit: prev.limit - prev.balance
// //     }));
// //   }, [selectedCard.balance, selectedCard.limit]);

// //   // Toggle card active status
// //   const toggleActive = () => {
// //     setSelectedCard(prev => ({
// //       ...prev,
// //       active: !prev.active
// //     }));
// //   };

// //   // Toggle card frozen status
// //   const toggleFrozen = () => {
// //     setSelectedCard(prev => ({
// //       ...prev,
// //       frozen: !prev.frozen
// //     }));
// //   };

// //   // Handle credit limit change
// //   const handleLimitChange = (e) => {
// //     setNewLimit(Number(e.target.value));
// //   };

// //   // Submit limit change request
// //   const requestLimitChange = () => {
// //     setLimitChangeRequested(true);
// //     // In a real app, this would call an API
// //     setTimeout(() => {
// //       setSelectedCard(prev => ({
// //         ...prev,
// //         limit: newLimit
// //       }));
// //       setLimitChangeRequested(false);
// //     }, 1500);
// //   };

// //   // Format currency
// //   const formatCurrency = (amount) => {
// //     return new Intl.NumberFormat('en-US', {
// //       style: 'currency',
// //       currency: 'USD'
// //     }).format(amount);
// //   };

// //   // Format date
// //   const formatDate = (dateString) => {
// //     const options = { year: 'numeric', month: 'short', day: 'numeric' };
// //     return new Date(dateString).toLocaleDateString(undefined, options);
// //   };

// //   // Get transaction status icon and color
// //   const getTransactionStatus = (status) => {
// //     switch(status) {
// //       case 'completed':
// //         return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
// //       case 'pending':
// //         return { icon: <Clock className="w-4 h-4 text-amber-500" />, text: 'text-amber-500' };
// //       case 'declined':
// //         return { icon: <XCircle className="w-4 h-4 text-red-500" />, text: 'text-red-500' };
// //       default:
// //         return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
// //     }
// //   };

// //   // Generate a virtual card number
// //   const generateVirtualNumber = () => {
// //     setSelectedCard(prev => ({
// //       ...prev,
// //       virtualNumber: '4111 2222 3333 4444',
// //       virtualExpiry: '06/25',
// //       virtualCVV: '123'
// //     }));
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="max-w-5xl mx-auto p-4">
// //         <h1 className="text-2xl font-bold mb-6 text-gray-800">
// //           <CreditCard className="inline-block mr-2 mb-1" /> Card Management Dashboard
// //         </h1>

// //         {/* Card Display */}
// //         <div className="mb-8 p-6 rounded-xl bg-white shadow-lg">
// //           <div className="flex flex-col md:flex-row gap-6">
// //             {/* Card Image Side */}
// //             <div className="w-full md:w-1/2">
// //               <div className={`relative aspect-[1.58/1] rounded-xl overflow-hidden shadow-xl ${selectedCard.color} transition-all duration-300 transform hover:scale-105`}>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                
// //                 {selectedCard.image && (
// //                   <img 
// //                     src={selectedCard.image} 
// //                     alt="Card background" 
// //                     className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
// //                   />
// //                 )}
                
// //                 <div className="absolute inset-0 p-6 flex flex-col justify-between">
// //                   <div className="flex justify-between items-start">
// //                     <div className={`${selectedCard.textColor}`}>
// //                       <h3 className="font-bold text-xl">{selectedCard.name}</h3>
// //                       <p className="opacity-80 text-sm">{selectedCard.type}</p>
// //                     </div>
// //                     <div className="flex gap-2">
// //                       {selectedCard.active ? (
// //                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
// //                       ) : (
// //                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Inactive</span>
// //                       )}
                      
// //                       {selectedCard.frozen && (
// //                         <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Frozen</span>
// //                       )}
// //                     </div>
// //                   </div>
                  
// //                   <div className={`${selectedCard.textColor}`}>
// //                     <div className="flex items-center mb-2">
// //                       <p className="text-lg font-mono">
// //                         {showCardNumber ? selectedCard.number : selectedCard.number}
// //                       </p>
// //                       <button 
// //                         onClick={() => setShowCardNumber(!showCardNumber)}
// //                         className="ml-2 opacity-70 hover:opacity-100"
// //                       >
// //                         {showCardNumber ? <EyeOff size={16} /> : <Eye size={16} />}
// //                       </button>
// //                     </div>
                    
// //                     <div className="flex justify-between">
// //                       <div>
// //                         <p className="text-xs opacity-70">Expires</p>
// //                         <p>{selectedCard.expiry}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-xs opacity-70">CVV</p>
// //                         <div className="flex items-center">
// //                           <p>{showCVV ? '123' : '***'}</p>
// //                           <button 
// //                             onClick={() => setShowCVV(!showCVV)}
// //                             className="ml-2 opacity-70 hover:opacity-100"
// //                           >
// //                             {showCVV ? <EyeOff size={16} /> : <Eye size={16} />}
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Card Details Side */}
// //             <div className="w-full md:w-1/2">
// //               <div className="h-full flex flex-col">
// //                 <h2 className="text-xl font-semibold mb-4">Card Details</h2>
                
// //                 {/* Status Controls */}
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
// //                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                     <div className="flex justify-between items-center mb-2">
// //                       <span className="text-gray-700 font-medium flex items-center">
// //                         <Power className="w-4 h-4 mr-2 text-gray-600" /> Card Status
// //                       </span>
// //                       <button 
// //                         onClick={toggleActive}
// //                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.active ? 'bg-green-500' : 'bg-gray-300'}`}
// //                       >
// //                         <span 
// //                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.active ? 'translate-x-6' : 'translate-x-1'}`} 
// //                         />
// //                       </button>
// //                     </div>
// //                     <p className="text-xs text-gray-500">
// //                       {selectedCard.active 
// //                         ? "Your card is active and can be used for transactions." 
// //                         : "Your card is inactive and cannot be used for transactions."}
// //                     </p>
// //                   </div>
                  
// //                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                     <div className="flex justify-between items-center mb-2">
// //                       <span className="text-gray-700 font-medium flex items-center">
// //                         <SnowflakeIcon className="w-4 h-4 mr-2 text-gray-600" /> Freeze Card
// //                       </span>
// //                       <button 
// //                         onClick={toggleFrozen}
// //                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.frozen ? 'bg-blue-500' : 'bg-gray-300'}`}
// //                         disabled={!selectedCard.active}
// //                       >
// //                         <span 
// //                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.frozen ? 'translate-x-6' : 'translate-x-1'}`} 
// //                         />
// //                       </button>
// //                     </div>
// //                     <p className="text-xs text-gray-500">
// //                       {selectedCard.frozen 
// //                         ? "Card is temporarily frozen. No new transactions will be approved." 
// //                         : "Temporarily freeze your card to prevent new transactions."}
// //                     </p>
// //                   </div>
// //                 </div>
                
// //                 {/* Credit Limit Section */}
// //                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">
// //                   <div className="flex justify-between items-center mb-2">
// //                     <span className="text-gray-700 font-medium flex items-center">
// //                       <DollarSign className="w-4 h-4 mr-2 text-gray-600" /> Credit Limit
// //                     </span>
// //                     <span className="text-lg font-bold text-gray-800">
// //                       {formatCurrency(selectedCard.limit)}
// //                     </span>
// //                   </div>
                  
// //                   <div className="mb-4">
// //                     <div className="flex justify-between text-sm text-gray-600 mb-1">
// //                       <span>Available Credit</span>
// //                       <span>{formatCurrency(selectedCard.availableLimit)}</span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-2.5">
// //                       <div 
// //                         className="bg-blue-600 h-2.5 rounded-full" 
// //                         style={{ width: `${(selectedCard.availableLimit / selectedCard.limit) * 100}%` }}
// //                       ></div>
// //                     </div>
// //                   </div>
                  
// //                   <div className="mb-4">
// //                     <label htmlFor="limitSlider" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Adjust Credit Limit:
// //                     </label>
// //                     <input
// //                       type="range"
// //                       id="limitSlider"
// //                       min={5000}
// //                       max={30000}
// //                       step={500}
// //                       value={newLimit}
// //                       onChange={handleLimitChange}
// //                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
// //                     />
// //                     <div className="flex justify-between items-center mt-2">
// //                       <input
// //                         type="number"
// //                         value={newLimit}
// //                         onChange={handleLimitChange}
// //                         min={5000}
// //                         max={30000}
// //                         step={500}
// //                         className="block w-24 px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                       />
// //                       <button
// //                         onClick={requestLimitChange}
// //                         disabled={newLimit === selectedCard.limit || limitChangeRequested}
// //                         className={`px-4 py-1.5 text-sm font-medium rounded-md ${
// //                           newLimit === selectedCard.limit || limitChangeRequested
// //                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
// //                             : 'bg-blue-600 text-white hover:bg-blue-700'
// //                         }`}
// //                       >
// //                         {limitChangeRequested ? 'Processing...' : 'Update Limit'}
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
                
// //                 {/* Card Balance */}
// //                 <div className="px-4 py-3 bg-indigo-50 rounded-lg border border-indigo-100 mb-6">
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-gray-700 font-medium">Current Balance</span>
// //                     <span className="text-lg font-bold text-indigo-700">{formatCurrency(selectedCard.balance)}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Tabs Navigation */}
// //         <div className="border-b border-gray-200 mb-6">
// //           <div className="flex flex-wrap -mb-px">
// //             <button
// //               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
// //                 activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
// //               }`}
// //               onClick={() => setActiveTab('overview')}
// //             >
// //               <BarChart4 className="w-4 h-4 mr-2" />
// //               Overview
// //             </button>
// //             <button
// //               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
// //                 activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
// //               }`}
// //               onClick={() => setActiveTab('transactions')}
// //             >
// //               <Clock className="w-4 h-4 mr-2" />
// //               Transactions
// //             </button>
// //             <button
// //               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
// //                 activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
// //               }`}
// //               onClick={() => setActiveTab('security')}
// //             >
// //               <ShieldCheck className="w-4 h-4 mr-2" />
// //               Security
// //             </button>
// //           </div>
// //         </div>

// //         {/* Tab Content */}
// //         {activeTab === 'overview' && (
// //           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
// //             <h2 className="text-xl font-semibold mb-4">Card Overview</h2>
            
// //             {/* Usage Stats */}
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <h3 className="text-sm font-medium text-gray-500 mb-1">Monthly Spending</h3>
// //                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(3245.89)}</p>
// //                 <div className="mt-2 text-xs text-green-600">+12% from last month</div>
// //               </div>
              
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Due</h3>
// //                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(selectedCard.balance)}</p>
// //                 <div className="mt-2 text-xs text-gray-600">Due on May 15, 2025</div>
// //               </div>
              
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <h3 className="text-sm font-medium text-gray-500 mb-1">Rewards Balance</h3>
// //                 <p className="text-2xl font-bold text-gray-800">15,240 pts</p>
// //                 <div className="mt-2 text-xs text-gray-600">Worth {formatCurrency(152.40)}</div>
// //               </div>
// //             </div>
            
// //             {/* Spending Categories */}
// //             <h3 className="font-medium text-gray-700 mb-3">Spending By Category</h3>
// //             <div className="space-y-3 mb-6">
// //               <div>
// //                 <div className="flex justify-between text-sm mb-1">
// //                   <span>Shopping</span>
// //                   <span>32%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <div className="flex justify-between text-sm mb-1">
// //                   <span>Dining</span>
// //                   <span>24%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <div className="flex justify-between text-sm mb-1">
// //                   <span>Travel</span>
// //                   <span>18%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <div className="flex justify-between text-sm mb-1">
// //                   <span>Entertainment</span>
// //                   <span>15%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
// //                 </div>
// //               </div>
              
// //               <div>
// //                 <div className="flex justify-between text-sm mb-1">
// //                   <span>Other</span>
// //                   <span>11%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                   <div className="bg-gray-500 h-2 rounded-full" style={{ width: '11%' }}></div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Quick Actions */}
// //             <h3 className="font-medium text-gray-700 mb-3">Quick Actions</h3>
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
// //                 <DollarSign className="w-6 h-6 text-blue-600 mb-1" />
// //                 <span className="text-sm">Make a Payment</span>
// //               </button>
              
// //               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
// //                 <RefreshCw className="w-6 h-6 text-green-600 mb-1" />
// //                 <span className="text-sm">Set Up Autopay</span>
// //               </button>
              
// //               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
// //                 <CreditCard className="w-6 h-6 text-purple-600 mb-1" />
// //                 <span className="text-sm">Request New Card</span>
// //               </button>
              
// //               <button 
// //                 className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center"
// //                 onClick={() => setActiveTab('security')}
// //               >
// //                 <Settings className="w-6 h-6 text-gray-600 mb-1" />
// //                 <span className="text-sm">Manage Settings</span>
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === 'transactions' && (
// //           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-xl font-semibold">Recent Transactions</h2>
// //               <div className="text-sm text-gray-500">Last 30 days</div>
// //             </div>
            
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-gray-50">
// //                   <tr>
// //                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Merchant
// //                     </th>
// //                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Date
// //                     </th>
// //                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Amount
// //                     </th>
// //                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                       Status
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {selectedCard.transactions.map((transaction) => {
// //                     const status = getTransactionStatus(transaction.status);
// //                     return (
// //                       <tr key={transaction.id} className="hover:bg-gray-50 transition">
// //                         <td className="px-4 py-3 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
// //                         </td>
// //                         <td className="px-4 py-3 whitespace-nowrap">
// //                           <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
// //                         </td>
// //                         <td className="px-4 py-3 whitespace-nowrap">
// //                           <div className="text-sm font-medium text-gray-900">
// //                             {formatCurrency(transaction.amount)}
// //                           </div>
// //                         </td>
// //                         <td className="px-4 py-3 whitespace-nowrap">
// //                           <div className={`text-sm ${status.text} flex items-center`}>
// //                             {status.icon}
// //                             <span className="ml-1 capitalize">{transaction.status}</span>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     );
// //                   })}
// //                 </tbody>
// //               </table>
// //             </div>
            
// //             <div className="mt-6 text-center">
// //               <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
// //                 View All Transactions
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === 'security' && (
// //           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
// //             <h2 className="text-xl font-semibold mb-4">Security & Settings</h2>
            
// //             <div className="space-y-6">
// //               {/* PIN Management */}
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <div className="flex items-center justify-between mb-2">
// //                   <h3 className="font-medium flex items-center">
// //                     <Lock className="w-4 h-4 mr-2 text-gray-600" /> PIN Management
// //                   </h3>
// //                   <button
// //                     onClick={() => setShowPinControls(!showPinControls)}
// //                     className="text-blue-600 text-sm flex items-center"
// //                   >
// //                     {showPinControls ? (
// //                       <>
// //                         <ChevronUp className="w-4 h-4 mr-1" /> Hide
// //                       </>
// //                     ) : (
// //                       <>
// //                         <ChevronDown className="w-4 h-4 mr-1" /> Manage
// //                       </>
// //                     )}
// //                   </button>
// //                 </div>
                
// //                 {showPinControls && (
// //                   <div className="mt-4 space-y-4">
// //                     <div className="grid grid-cols-2 gap-4">
// //                       <button
// //                         onClick={() => setPinAction('view')}
// //                         className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
// //                       >
// //                         <Eye className="w-5 h-5 text-gray-600 mb-1" />
// //                         <span className="text-sm">View Current PIN</span>
// //                       </button>
                      
// //                       <button
// //                         onClick={() => setPinAction('change')}
// //                         className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
// //                       >
// //                         <RefreshCw className="w-5 h-5 text-blue-600 mb-1" />
// //                         <span className="text-sm">Change PIN</span>
// //                       </button>
// //                     </div>
                    
// //                     {pinAction === 'view' && (
// //                       <div className="bg-white p-3 rounded-lg border border-gray-200">
// //                         <p className="text-sm text-gray-600 mb-2">For security reasons, we'll send a verification code to your registered phone number.</p>
// //                         <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
// //                           Request PIN
// //                         </button>
// //                       </div>
// //                     )}
                    
// //                     {pinAction === 'change' && (
// //                       <div className="bg-white p-3 rounded-lg border border-gray-200">
// //                         <p className="text-sm text-gray-600 mb-2">To change your PIN, you will be redirected to our secure portal.</p>
// //                         <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
// //                           Change PIN
// //                         </button>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
              
// //               {/* Virtual Card */}
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <h3 className="font-medium flex items-center mb-3">
// //                   <CreditCard className="w-4 h-4 mr-2 text-gray-600" /> Virtual Card
// //                 </h3>
                
// //                 <p className="text-sm text-gray-600 mb-3">
// //                   Generate a virtual card number for secure online shopping. Virtual card numbers can be used for one-time or recurring payments.
// //                 </p>
                
// //                 {selectedCard.virtualNumber ? (
// //                   <div className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div>
// //                         <p className="text-xs text-gray-500 mb-1">Card Number</p>
// //                         <p className="font-mono">{selectedCard.virtualNumber}</p>
// //                       </div>
// //                       <div>
// //                         <p className="text-xs text-gray-500 mb-1">Expiry & CVV</p>
// //                         <p className="font-mono">{selectedCard.virtualExpiry} | {selectedCard.virtualCVV}</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <button
// //                     onClick={generateVirtualNumber}
// //                     className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
// //                   >
// //                     Generate Virtual Card
// //                   </button>
// //                 )}
// //               </div>
              
// //               {/* Transaction Alerts */}
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <h3 className="font-medium flex items-center mb-3">
// //                   <AlertTriangle className="w-4 h-4 mr-2 text-gray-600" /> Transaction Alerts
// //                 </h3>
                
// //                 <div className="space-y-3">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <p className="text-sm font-medium">Email Alerts</p>
// //                       <p className="text-xs text-gray-500">Receive email notifications for all transactions</p>
// //                     </div>
// //                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
// //                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
// //                     </button>
// //                   </div>
                  
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <p className="text-sm font-medium">SMS Alerts</p>
// //                       <p className="text-xs text-gray-500">Receive text notifications for transactions over $100</p>
// //                     </div>
// //                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
// //                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
// //                     </button>
// //                   </div>
                  
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <p className="text-sm font-medium">Push Notifications</p>
// //                       <p className="text-xs text-gray-500">Receive mobile app notifications for all activities</p>
// //                     </div>
// //                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
// //                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               {/* Location-Based Security */}
// //               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <div className="flex items-center justify-between mb-3">
// //                   <h3 className="font-medium flex items-center">
// //                     <ShieldCheck className="w-4 h-4 mr-2 text-gray-600" /> Location-Based Security
// //                   </h3>
// //                   <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
// //                     <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
// //                   </button>
// //                 </div>
                
// //                 <p className="text-sm text-gray-600">
// //                   We'll monitor your card usage locations to help prevent fraud. Transactions made far from your usual locations may require additional verification.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ApplyCardManagement;





import { useState, useEffect } from 'react';
import { CreditCard, Power, SnowflakeIcon, DollarSign, Lock, Eye, EyeOff, ShieldCheck, Settings, AlertTriangle, ChevronDown, ChevronUp, Clock, CheckCircle2, XCircle, BarChart4, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function ApplyCardManagement() {
  // Get selected plan from localStorage
  const selectedPlanData = JSON.parse(localStorage.getItem('selectedPlan') || '{}');

  // Initial state with selected plan data
  const [selectedCard, setSelectedCard] = useState({
    id: 'card1',
    // name: selectedPlanData.title || 'Core',
    // number: '4111 •••• •••• 1234',
    // expiry: '12/25',
    // cvv: '***',
    active: true,
    frozen: false,
    type: selectedPlanData.title,
    balance: 0,
    image: selectedPlanData.image || 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name : selectedPlanData.name || 'Card Name',
    transactions: [
      { id: 't1', merchant: 'Amazon', amount: 0, date: '2025-05-01', status: 'completed' },
      { id: 't2', merchant: 'Netflix', amount: 0, date: '2025-04-28', status: 'completed' },
      { id: 't3', merchant: 'Uber', amount: 0, date: '2025-04-25', status: 'pending' },
      { id: 't4', merchant: 'Starbucks', amount: 0, date: '2025-04-23', status: 'completed' },
      { id: 't5', merchant: 'Target', amount: 0, date: '2025-04-20', status: 'declined' }
    ],
    availableLimit: 0
  });

  // State for showing/hiding sensitive information
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  
  // State for credit limit adjustment
  const [newLimit, setNewLimit] = useState(selectedCard.limit);
  const [limitChangeRequested, setLimitChangeRequested] = useState(false);
  
  // State for tabs
  const [activeTab, setActiveTab] = useState('overview');

  // State for pin management
  const [showPinControls, setShowPinControls] = useState(false);
  const [pinAction, setPinAction] = useState('');

  // Update available limit whenever balance or limit changes
  useEffect(() => {
    setSelectedCard(prev => ({
      ...prev,
      availableLimit: prev.limit - prev.balance
    }));
  }, [selectedCard.balance, selectedCard.limit]);

  // Toggle card active status
  const toggleActive = () => {
    setSelectedCard(prev => ({
      ...prev,
      active: !prev.active
    }));
  };

  // Toggle card frozen status
  const toggleFrozen = () => {
    setSelectedCard(prev => ({
      ...prev,
      frozen: !prev.frozen
    }));
  };

  // Handle credit limit change
  const handleLimitChange = (e) => {
    setNewLimit(Number(e.target.value));
  };

  // Submit limit change request
  const requestLimitChange = () => {
    setLimitChangeRequested(true);
    // In a real app, this would call an API
    setTimeout(() => {
      setSelectedCard(prev => ({
        ...prev,
        limit: newLimit
      }));
      setLimitChangeRequested(false);
    }, 1500);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get transaction status icon and color
  const getTransactionStatus = (status) => {
    switch(status) {
      case 'completed':
        return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
      case 'pending':
        return { icon: <Clock className="w-4 h-4 text-amber-500" />, text: 'text-amber-500' };
      case 'declined':
        return { icon: <XCircle className="w-4 h-4 text-red-500" />, text: 'text-red-500' };
      default:
        return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
    }
  };

  // Generate a virtual card number
  const generateVirtualNumber = () => {
    setSelectedCard(prev => ({
      ...prev,
      virtualNumber: '4111 2222 3333 4444',
      virtualExpiry: '06/25',
      virtualCVV: '123'
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          <CreditCard className="inline-block mr-2 mb-1" /> Card Management Dashboard
        </h1>

        {/* Card Display */}
        <div className="mb-8 p-6 rounded-xl  shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Card Image Side */}
            <div className="w-full md:w-1/2">
              <div className={`relative aspect-[1.58/1] rounded-xl overflow-hidden  transition-all duration-300 transform hover:scale-105`}>
                <div className="absolute inset-0"></div>
                
                {selectedCard.image && (
                  <img 
                    src={selectedCard.image} 
                    alt="Card background" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay "
                  />
                )}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`${selectedCard.textColor}`}>
                      {/* <h3 className="font-bold text-xl text-gray-800">{selectedCard.name}</h3> */}
                      <p className="opacity-80 text-sm">{selectedCard.type}</p>
                    </div>
                    <div className="flex gap-2">
                      {selectedCard.active ? (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
                      ) : (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Inactive</span>
                      )}
                      
                      {selectedCard.frozen && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Frozen</span>
                      )}
                    </div>
                  </div>
                  
                  
                  {/* <div className={`${selectedCard.textColor}`}>
                    <div className="flex items-center mb-2">
                      <p className="text-lg font-mono">
                        {showCardNumber ? selectedCard.number : selectedCard.number}
                      </p>
                      <button 
                        onClick={() => setShowCardNumber(!showCardNumber)}
                        className="ml-2 opacity-70 hover:opacity-100"
                      >
                        {showCardNumber ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs opacity-70">Expires</p>
                        <p>{selectedCard.expiry}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs opacity-70">CVV</p>
                        <div className="flex items-center">
                          <p>{showCVV ? '123' : '***'}</p>
                          <button 
                            onClick={() => setShowCVV(!showCVV)}
                            className="ml-2 opacity-70 hover:opacity-100"
                          >
                            {showCVV ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mt-8 md:mt-10 max-w-md md:max-w-xl mx-auto bg-blue-50 border border-blue-200 text-blue-900 px-6 py-4 rounded-xl shadow-sm text-sm md:text-base leading-relaxed text-center">
  Your <span className="font-semibold">{selectedCard.name}{" "}{selectedCard.type}</span> will be activated soon.
  Please check your email for more info.
</div>

             {/* <Button
  className="md:mt-10 md:w-72 mt-8 px-4 py-3 text-sm md:text-base text-center leading-snug break-words whitespace-normal"
>
  Your {selectedCard.name} will be activated soon. Please check your email for more info.
</Button> */}

            </div>
            
            {/* Card Details Side */}
            <div className="w-full md:w-1/2">
              <div className="h-full flex flex-col">
                <h2 className="text-xl font-semibold mb-4">Card Details</h2>
                 <h3 className="font-bold text-xl text-black">{selectedCard.name}</h3>
                 <h3 className="font-bold text-xl text-black">{selectedCard.type}</h3>

                {/* Status Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium flex items-center">
                        <Power className="w-4 h-4 mr-2 text-gray-600" /> Card Status
                      </span>
                      <button 
                        onClick={toggleActive}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.active ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <span 
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.active ? 'translate-x-6' : 'translate-x-1'}`} 
                        />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {selectedCard.active 
                        ? "Your card is active and can be used for transactions." 
                        : "Your card is inactive and cannot be used for transactions."}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium flex items-center">
                        <SnowflakeIcon className="w-4 h-4 mr-2 text-gray-600" /> Freeze Card
                      </span>
                      <button 
                        onClick={toggleFrozen}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.frozen ? 'bg-blue-500' : 'bg-gray-300'}`}
                        disabled={!selectedCard.active}
                      >
                        <span 
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.frozen ? 'translate-x-6' : 'translate-x-1'}`} 
                        />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {selectedCard.frozen 
                        ? "Card is temporarily frozen. No new transactions will be approved." 
                        : "Temporarily freeze your card to prevent new transactions."}
                    </p>
                  </div>
                </div>
                
                {/* Credit Limit Section */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-600" /> Credit Limit
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                      {formatCurrency(selectedCard.limit)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Available Credit</span>
                      <span>{formatCurrency(selectedCard.availableLimit)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${(selectedCard.availableLimit / selectedCard.limit) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="limitSlider" className="block text-sm font-medium text-gray-700 mb-1">
                      Adjust Credit Limit:
                    </label>
                    <input
                      type="range"
                      id="limitSlider"
                      min={5000}
                      max={30000}
                      step={500}
                      value={newLimit}
                      onChange={handleLimitChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <input
                        type="number"
                        value={newLimit}
                        onChange={handleLimitChange}
                        min={5000}
                        max={30000}
                        step={500}
                        className="block w-24 px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        onClick={requestLimitChange}
                        disabled={newLimit === selectedCard.limit || limitChangeRequested}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md ${
                          newLimit === selectedCard.limit || limitChangeRequested
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {limitChangeRequested ? 'Processing...' : 'Update Limit'}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Card Balance */}
                <div className="px-4 py-3 bg-indigo-50 rounded-lg border border-indigo-100 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Current Balance</span>
                    <span className="text-lg font-bold text-indigo-700">{formatCurrency(selectedCard.balance)}</span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-yellow-50 rounded-lg border border-yellow-100 mb-6">
      <div className="flex justify-between items-center mb-2">
        {/* <span className="text-gray-700 font-medium flex items-center">
          <DollarSign className="w-4 h-4 mr-2 text-yellow-600" /> Security Deposit
        </span> */}
       
      </div>
      <Link to="/payment-method" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md">
      {!selectedCard.depositPaid && (
        <>
          {/* <p className="text-sm text-gray-600 mb-2">
            A refundable deposit of <strong>${selectedCard.depositAmount}</strong> is required to activate this card.
          </p> */}
          <button
            onClick=""
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md"
          >
          <h1>Deposit</h1>
          </button>
        </>
      )}
      </Link>
      {selectedCard.depositPaid && (
        <p className="text-sm text-gray-600">
          Your deposit has been received. It will be refunded after card deactivation.
        </p>
      )}
    </div>
              </div>
              
            </div>
          </div>
          
        </div>
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
                activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart4 className="w-4 h-4 mr-2" />
              Overview
            </button>
            <button
              className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
                activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('transactions')}
            >
              <Clock className="w-4 h-4 mr-2" />
              Transactions
            </button>
            <button
              className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
                activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('security')}
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Security
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">Card Overview</h2>
            
            {/* Usage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Monthly Spending</h3>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(0)}</p>
                <div className="mt-2 text-xs text-green-600">+0% from last month</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Due</h3>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(selectedCard.balance)}</p>
                <div className="mt-2 text-xs text-gray-600"></div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Rewards Balance</h3>
                <p className="text-2xl font-bold text-gray-800">0 pts</p>
                <div className="mt-2 text-xs text-gray-600">Worth {formatCurrency(0)}</div>
              </div>
            </div>
            
            {/* Spending Categories */}
            <h3 className="font-medium text-gray-700 mb-3">Spending By Category</h3>
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shopping</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Dining</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Travel</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Entertainment</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Other</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <h3 className="font-medium text-gray-700 mb-3">Quick Actions</h3>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
                <DollarSign className="w-6 h-6 text-blue-600 mb-1" />
                <span className="text-sm">Make a Payment</span>
              </button>
              
              <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
                <RefreshCw className="w-6 h-6 text-green-600 mb-1" />
                <span className="text-sm">Set Up Autopay</span>
              </button>
              
              <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
                <CreditCard className="w-6 h-6 text-purple-600 mb-1" />
                <span className="text-sm">Request New Card</span>
              </button>
              
              <button 
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center"
                onClick={() => setActiveTab('security')}
              >
                <Settings className="w-6 h-6 text-gray-600 mb-1" />
                <span className="text-sm">Manage Settings</span>
              </button>
            </div> */}
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <div className="text-sm text-gray-500">Last 30 days</div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Merchant
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedCard.transactions.map((transaction) => {
                    const status = getTransactionStatus(transaction.status);
                    return (
                      <tr key={transaction.id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {formatCurrency(transaction.amount)}
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className={`text-sm ${status.text} flex items-center`}>
                            {status.icon}
                            <span className="ml-1 capitalize">{transaction.status}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Transactions
              </button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">Security & Settings</h2>
            
            <div className="space-y-6">
              {/* PIN Management */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-gray-600" /> PIN Management
                  </h3>
                  <button
                    onClick={() => setShowPinControls(!showPinControls)}
                    className="text-blue-600 text-sm flex items-center"
                  >
                    {showPinControls ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" /> Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" /> Manage
                      </>
                    )}
                  </button>
                </div>
                
                {showPinControls && (
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setPinAction('view')}
                        className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
                      >
                        <Eye className="w-5 h-5 text-gray-600 mb-1" />
                        <span className="text-sm">View Current PIN</span>
                      </button>
                      
                      <button
                        onClick={() => setPinAction('change')}
                        className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
                      >
                        <RefreshCw className="w-5 h-5 text-blue-600 mb-1" />
                        <span className="text-sm">Change PIN</span>
                      </button>
                    </div>
                    
                    {pinAction === 'view' && (
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">For security reasons, we'll send a verification code to your registered phone number.</p>
                        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
                          Request PIN
                        </button>
                      </div>
                    )}
                    
                    {pinAction === 'change' && (
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">To change your PIN, you will be redirected to our secure portal.</p>
                        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
                          Change PIN
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Virtual Card */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-medium flex items-center mb-3">
                  <CreditCard className="w-4 h-4 mr-2 text-gray-600" /> Virtual Card
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  Generate a virtual card number for secure online shopping. Virtual card numbers can be used for one-time or recurring payments.
                </p>
                
                {selectedCard.virtualNumber ? (
                  <div className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Card Number</p>
                        <p className="font-mono">{selectedCard.virtualNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Expiry & CVV</p>
                        <p className="font-mono">{selectedCard.virtualExpiry} | {selectedCard.virtualCVV}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={generateVirtualNumber}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
                  >
                    Generate Virtual Card
                  </button>
                )}
              </div>
              
              {/* Transaction Alerts */}
              {/* <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-medium flex items-center mb-3">
                  <AlertTriangle className="w-4 h-4 mr-2 text-gray-600" /> Transaction Alerts
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Email Alerts</p>
                      <p className="text-xs text-gray-500">Receive email notifications for all transactions</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">SMS Alerts</p>
                      <p className="text-xs text-gray-500">Receive text notifications for transactions over $100</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Push Notifications</p>
                      <p className="text-xs text-gray-500">Receive mobile app notifications for all activities</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
               */}


               
              {/* Location-Based Security */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2 text-gray-600" /> Location-Based Security
                  </h3>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-600">
                  We&apos;ll monitor your card usage locations to help prevent fraud. Transactions made far from your usual locations may require additional verification.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ApplyCardManagement;





// import { useState, useEffect } from 'react';
// import { CreditCard, Power, SnowflakeIcon, DollarSign, Lock, Eye, EyeOff, ShieldCheck, Settings, AlertTriangle, ChevronDown, ChevronUp, Clock, CheckCircle2, XCircle, BarChart4, RefreshCw, Plus, X } from 'lucide-react';

// function ApplyCardManagement() {
//   // Get selected plan from localStorage
//   const selectedPlanData = JSON.parse(localStorage.getItem('selectedPlan') || '{}');

//   // State for managing multiple cards
//   const [cards, setCards] = useState([{
//     id: 'card1',
//     name: selectedPlanData.title || 'Core',
//     number: '4111 •••• •••• 1234',
//     expiry: '12/25',
//     cvv: '***',
//     active: true,
//     frozen: false,
//     limit: selectedPlanData.title === 'elite' ? 30000 : selectedPlanData.title === 'plus' ? 20000 : 10000,
//     balance: 2340.56,
//     image: selectedPlanData.image || 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     color: selectedPlanData.title === 'elite' ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 
//            selectedPlanData.title === 'plus' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 
//            'bg-gradient-to-r from-blue-500 to-blue-600',
//     textColor: 'text-white',
//     type: selectedPlanData.title === 'elite' ? 'Elite Visa' : 
//           selectedPlanData.title === 'plus' ? 'Plus Visa' : 
//           'Core Visa',
//     transactions: [
//       { id: 't1', merchant: 'Amazon', amount: 129.99, date: '2025-05-01', status: 'completed' },
//       { id: 't2', merchant: 'Netflix', amount: 14.99, date: '2025-04-28', status: 'completed' },
//       { id: 't3', merchant: 'Uber', amount: 24.50, date: '2025-04-25', status: 'pending' },
//       { id: 't4', merchant: 'Starbucks', amount: 6.75, date: '2025-04-23', status: 'completed' },
//       { id: 't5', merchant: 'Target', amount: 87.32, date: '2025-04-20', status: 'declined' }
//     ],
//     availableLimit: 7659.44
//   }]);

//   const [selectedCard, setSelectedCard] = useState(cards[0]);
//   const [showAddCard, setShowAddCard] = useState(false);
//   const [newCard, setNewCard] = useState({
//     name: '',
//     type: 'Core',
//     number: '',
//     expiry: '',
//     cvv: ''
//   });

//   // State for showing/hiding sensitive information
//   const [showCardNumber, setShowCardNumber] = useState(false);
//   const [showCVV, setShowCVV] = useState(false);
  
//   // State for credit limit adjustment
//   const [newLimit, setNewLimit] = useState(selectedCard.limit);
//   const [limitChangeRequested, setLimitChangeRequested] = useState(false);
  
//   // State for tabs
//   const [activeTab, setActiveTab] = useState('overview');

//   // State for pin management
//   const [showPinControls, setShowPinControls] = useState(false);
//   const [pinAction, setPinAction] = useState('');

//   // Update available limit whenever balance or limit changes
//   useEffect(() => {
//     const updatedCard = {
//       ...selectedCard,
//       availableLimit: selectedCard.limit - selectedCard.balance
//     };
//     setSelectedCard(updatedCard);
//     setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
//   }, [selectedCard.balance, selectedCard.limit]);

//   // Handle adding a new card
//   const handleAddCard = (e) => {
//     e.preventDefault();
//     const cardId = `card${cards.length + 1}`;
//     const newCardData = {
//       ...newCard,
//       id: cardId,
//       active: true,
//       frozen: false,
//       limit: selectedPlanData.title === 'elite' ? 30000 : selectedPlanData.title === 'plus' ? 20000 : 10000,
//       balance: 0,
//       image: selectedPlanData.image || 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       color: selectedPlanData.title === 'elite' ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 
//              selectedPlanData.title === 'plus' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 
//              'bg-gradient-to-r from-blue-500 to-blue-600',
//       textColor: 'text-white',
//       transactions: [],
//       availableLimit: selectedPlanData.title === 'elite' ? 30000 : selectedPlanData.title === 'plus' ? 20000 : 10000
//     };
    
//     setCards([...cards, newCardData]);
//     setSelectedCard(newCardData);
//     setShowAddCard(false);
//     setNewCard({
//       name: '',
//       type: 'Core',
//       number: '',
//       expiry: '',
//       cvv: ''
//     });
//   };

//   // Toggle card active status
//   const toggleActive = () => {
//     const updatedCard = {
//       ...selectedCard,
//       active: !selectedCard.active
//     };
//     setSelectedCard(updatedCard);
//     setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
//   };

//   // Toggle card frozen status
//   const toggleFrozen = () => {
//     const updatedCard = {
//       ...selectedCard,
//       frozen: !selectedCard.frozen
//     };
//     setSelectedCard(updatedCard);
//     setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
//   };

//   // Handle credit limit change
//   const handleLimitChange = (e) => {
//     setNewLimit(Number(e.target.value));
//   };

//   // Submit limit change request
//   const requestLimitChange = () => {
//     setLimitChangeRequested(true);
//     setTimeout(() => {
//       const updatedCard = {
//         ...selectedCard,
//         limit: newLimit
//       };
//       setSelectedCard(updatedCard);
//       setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
//       setLimitChangeRequested(false);
//     }, 1500);
//   };

//   // Format currency
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(amount);
//   };

//   // Format date
//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   // Get transaction status icon and color
//   const getTransactionStatus = (status) => {
//     switch(status) {
//       case 'completed':
//         return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
//       case 'pending':
//         return { icon: <Clock className="w-4 h-4 text-amber-500" />, text: 'text-amber-500' };
//       case 'declined':
//         return { icon: <XCircle className="w-4 h-4 text-red-500" />, text: 'text-red-500' };
//       default:
//         return { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, text: 'text-green-500' };
//     }
//   };

//   // Generate a virtual card number
//   const generateVirtualNumber = () => {
//     const updatedCard = {
//       ...selectedCard,
//       virtualNumber: '4111 2222 3333 4444',
//       virtualExpiry: '06/25',
//       virtualCVV: '123'
//     };
//     setSelectedCard(updatedCard);
//     setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto p-4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             <CreditCard className="inline-block mr-2 mb-1" /> Card Management Dashboard
//           </h1>
//           <button
//             onClick={() => setShowAddCard(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
//           >
//             <Plus className="w-4 h-4 mr-2" /> Add New Card
//           </button>
//         </div>

//         {/* Card Selector */}
//         <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               onClick={() => setSelectedCard(card)}
//               className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
//                 selectedCard.id === card.id ? 'ring-2 ring-blue-500' : ''
//               }`}
//             >
//               <div className={`relative aspect-[1.58/1] rounded-xl overflow-hidden shadow-xl ${card.color}`}>
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
//                 <img 
//                   src={card.image}
//                   alt="Card background"
//                   className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
//                 />
//                 <div className="absolute inset-0 p-4 flex flex-col justify-between">
//                   <div className="flex justify-between items-start">
//                     <div className={card.textColor}>
//                       <h3 className="font-bold text-lg">{card.name}</h3>
//                       <p className="opacity-80 text-sm">{card.type}</p>
//                     </div>
//                     <div className="flex gap-2">
//                       {card.active ? (
//                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
//                       ) : (
//                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Inactive</span>
//                       )}
//                       {card.frozen && (
//                         <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Frozen</span>
//                       )}
//                     </div>
//                   </div>
//                   <div className={card.textColor}>
//                     <p className="text-lg font-mono">{card.number}</p>
//                     <div className="flex justify-between mt-2">
//                       <div>
//                         <p className="text-xs opacity-70">Expires</p>
//                         <p>{card.expiry}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs opacity-70">Available</p>
//                         <p>{formatCurrency(card.availableLimit)}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Add Card Modal */}
//         {showAddCard && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Add New Card</h2>
//                 <button
//                   onClick={() => setShowAddCard(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <form onSubmit={handleAddCard} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Card Name
//                   </label>
//                   <input
//                     type="text"
//                     value={newCard.name}
//                     onChange={(e) => setNewCard({...newCard, name: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Card Number
//                   </label>
//                   <input
//                     type="text"
//                     value={newCard.number}
//                     onChange={(e) => setNewCard({...newCard, number: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     required
//                     pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
//                     placeholder="1234 5678 9012 3456"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Expiry Date
//                     </label>
//                     <input
//                       type="text"
//                       value={newCard.expiry}
//                       onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                       required
//                       pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
//                       placeholder="MM/YY"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       CVV
//                     </label>
//                     <input
//                       type="text"
//                       value={newCard.cvv}
//                       onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                       required
//                       pattern="[0-9]{3,4}"
//                       placeholder="123"
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//                 >
//                   Add Card
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Card Display */}
//         <div className="mb-8 p-6 rounded-xl bg-white shadow-lg">
//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Card Image Side */}
//             <div className="w-full md:w-1/2">
//               <div className={`relative aspect-[1.58/1] rounded-xl overflow-hidden shadow-xl ${selectedCard.color} transition-all duration-300 transform hover:scale-105`}>
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                
//                 {selectedCard.image && (
//                   <img 
//                     src={selectedCard.image} 
//                     alt="Card background" 
//                     className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
//                   />
//                 )}
                
//                 <div className="absolute inset-0 p-6 flex flex-col justify-between">
//                   <div className="flex justify-between items-start">
//                     <div className={`${selectedCard.textColor}`}>
//                       <h3 className="font-bold text-xl">{selectedCard.name}</h3>
//                       <p className="opacity-80 text-sm">{selectedCard.type}</p>
//                     </div>
//                     <div className="flex gap-2">
//                       {selectedCard.active ? (
//                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
//                       ) : (
//                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Inactive</span>
//                       )}
                      
//                       {selectedCard.frozen && (
//                         <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Frozen</span>
//                       )}
//                     </div>
//                   </div>
                  
//                   <div className={`${selectedCard.textColor}`}>
//                     <div className="flex items-center mb-2">
//                       <p className="text-lg font-mono">
//                         {showCardNumber ? selectedCard.number : selectedCard.number}
//                       </p>
//                       <button 
//                         onClick={() => setShowCardNumber(!showCardNumber)}
//                         className="ml-2 opacity-70 hover:opacity-100"
//                       >
//                         {showCardNumber ? <EyeOff size={16} /> : <Eye size={16} />}
//                       </button>
//                     </div>
                    
//                     <div className="flex justify-between">
//                       <div>
//                         <p className="text-xs opacity-70">Expires</p>
//                         <p>{selectedCard.expiry}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-xs opacity-70">CVV</p>
//                         <div className="flex items-center">
//                           <p>{showCVV ? '123' : '***'}</p>
//                           <button 
//                             onClick={() => setShowCVV(!showCVV)}
//                             className="ml-2 opacity-70 hover:opacity-100"
//                           >
//                             {showCVV ? <EyeOff size={16} /> : <Eye size={16} />}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Card Details Side */}
//             <div className="w-full md:w-1/2">
//               <div className="h-full flex flex-col">
//                 <h2 className="text-xl font-semibold mb-4">Card Details</h2>
                
//                 {/* Status Controls */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium flex items-center">
//                         <Power className="w-4 h-4 mr-2 text-gray-600" /> Card Status
//                       </span>
//                       <button 
//                         onClick={toggleActive}
//                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.active ? 'bg-green-500' : 'bg-gray-300'}`}
//                       >
//                         <span 
//                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.active ? 'translate-x-6' : 'translate-x-1'}`} 
//                         />
//                       </button>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       {selectedCard.active 
//                         ? "Your card is active and can be used for transactions." 
//                         : "Your card is inactive and cannot be used for transactions."}
//                     </p>
//                   </div>
                  
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 font-medium flex items-center">
//                         <SnowflakeIcon className="w-4 h-4 mr-2 text-gray-600" /> Freeze Card
//                       </span>
//                       <button 
//                         onClick={toggleFrozen}
//                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${selectedCard.frozen ? 'bg-blue-500' : 'bg-gray-300'}`}
//                         disabled={!selectedCard.active}
//                       >
//                         <span 
//                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${selectedCard.frozen ? 'translate-x-6' : 'translate-x-1'}`} 
//                         />
//                       </button>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       {selectedCard.frozen 
//                         ? "Card is temporarily frozen. No new transactions will be approved." 
//                         : "Temporarily freeze your card to prevent new transactions."}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Credit Limit Section */}
//                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-gray-700 font-medium flex items-center">
//                       <DollarSign className="w-4 h-4 mr-2 text-gray-600" /> Credit Limit
//                     </span>
//                     <span className="text-lg font-bold text-gray-800">
//                       {formatCurrency(selectedCard.limit)}
//                     </span>
//                   </div>
                  
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>Available Credit</span>
//                       <span>{formatCurrency(selectedCard.availableLimit)}</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div 
//                         className="bg-blue-600 h-2.5 rounded-full" 
//                         style={{ width: `${(selectedCard.availableLimit / selectedCard.limit) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
                  
//                   <div className="mb-4">
//                     <label htmlFor="limitSlider" className="block text-sm font-medium text-gray-700 mb-1">
//                       Adjust Credit Limit:
//                     </label>
//                     <input
//                       type="range"
//                       id="limitSlider"
//                       min={5000}
//                       max={30000}
//                       step={500}
//                       value={newLimit}
//                       onChange={handleLimitChange}
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                     />
//                     <div className="flex justify-between items-center mt-2">
//                       <input
//                         type="number"
//                         value={newLimit}
//                         onChange={handleLimitChange}
//                         min={5000}
//                         max={30000}
//                         step={500}
//                         className="block w-24 px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                       <button
//                         onClick={requestLimitChange}
//                         disabled={newLimit === selectedCard.limit || limitChangeRequested}
//                         className={`px-4 py-1.5 text-sm font-medium rounded-md ${
//                           newLimit === selectedCard.limit || limitChangeRequested
//                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                             : 'bg-blue-600 text-white hover:bg-blue-700'
//                         }`}
//                       >
//                         {limitChangeRequested ? 'Processing...' : 'Update Limit'}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Card Balance */}
//                 <div className="px-4 py-3 bg-indigo-50 rounded-lg border border-indigo-100 mb-6">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700 font-medium">Current Balance</span>
//                     <span className="text-lg font-bold text-indigo-700">{formatCurrency(selectedCard.balance)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tabs Navigation */}
//         <div className="border-b border-gray-200 mb-6">
//           <div className="flex flex-wrap -mb-px">
//             <button
//               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
//                 activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
//               }`}
//               onClick={() => setActiveTab('overview')}
//             >
//               <BarChart4 className="w-4 h-4 mr-2" />
//               Overview
//             </button>
//             <button
//               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
//                 activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
//               }`}
//               onClick={() => setActiveTab('transactions')}
//             >
//               <Clock className="w-4 h-4 mr-2" />
//               Transactions
//             </button>
//             <button
//               className={`inline-flex items-center px-4 py-2 mr-2 text-sm font-medium ${
//                 activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'
//               }`}
//               onClick={() => setActiveTab('security')}
//             >
//               <ShieldCheck className="w-4 h-4 mr-2" />
//               Security
//             </button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === 'overview' && (
//           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
//             <h2 className="text-xl font-semibold mb-4">Card Overview</h2>
            
//             {/* Usage Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <h3 className="text-sm font-medium text-gray-500 mb-1">Monthly Spending</h3>
//                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(3245.89)}</p>
//                 <div className="mt-2 text-xs text-green-600">+12% from last month</div>
//               </div>
              
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Due</h3>
//                 <p className="text-2xl font-bold text-gray-800">{formatCurrency(selectedCard.balance)}</p>
//                 <div className="mt-2 text-xs text-gray-600">Due on May 15, 2025</div>
//               </div>
              
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <h3 className="text-sm font-medium text-gray-500 mb-1">Rewards Balance</h3>
//                 <p className="text-2xl font-bold text-gray-800">15,240 pts</p>
//                 <div className="mt-2 text-xs text-gray-600">Worth {formatCurrency(152.40)}</div>
//               </div>
//             </div>
            
//             {/* Spending Categories */}
//             <h3 className="font-medium text-gray-700 mb-3">Spending By Category</h3>
//             <div className="space-y-3 mb-6">
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Shopping</span>
//                   <span>32%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32%' }}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Dining</span>
//                   <span>24%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Travel</span>
//                   <span>18%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>Entertainment</span>
//                   <span>15%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between text-sm mb-1">
                  
//                   <span>Other</span>
//                   <span>11%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-gray-500 h-2 rounded-full" style={{ width: '11%' }}></div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Quick Actions */}
//             <h3 className="font-medium text-gray-700 mb-3">Quick Actions</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
//                 <DollarSign className="w-6 h-6 text-blue-600 mb-1" />
//                 <span className="text-sm">Make a Payment</span>
//               </button>
              
//               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
//                 <RefreshCw className="w-6 h-6 text-green-600 mb-1" />
//                 <span className="text-sm">Set Up Autopay</span>
//               </button>
              
//               <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center">
//                 <CreditCard className="w-6 h-6 text-purple-600 mb-1" />
//                 <span className="text-sm">Request New Card</span>
//               </button>
              
//               <button 
//                 className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-100 transition flex flex-col items-center justify-center text-center"
//                 onClick={() => setActiveTab('security')}
//               >
//                 <Settings className="w-6 h-6 text-gray-600 mb-1" />
//                 <span className="text-sm">Manage Settings</span>
//               </button>
//             </div>
//           </div>
//         )}

//         {activeTab === 'transactions' && (
//           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Recent Transactions</h2>
//               <div className="text-sm text-gray-500">Last 30 days</div>
//             </div>
            
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Merchant
//                     </th>
//                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Amount
//                     </th>
//                     <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {selectedCard.transactions.map((transaction) => {
//                     const status = getTransactionStatus(transaction.status);
//                     return (
//                       <tr key={transaction.id} className="hover:bg-gray-50 transition">
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">{transaction.merchant}</div>
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">
//                             {formatCurrency(transaction.amount)}
//                           </div>
//                         </td>
//                         <td className="px-4 py-3 whitespace-nowrap">
//                           <div className={`text-sm ${status.text} flex items-center`}>
//                             {status.icon}
//                             <span className="ml-1 capitalize">{transaction.status}</span>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
            
//             <div className="mt-6 text-center">
//               <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                 View All Transactions
//               </button>
//             </div>
//           </div>
//         )}

//         {activeTab === 'security' && (
//           <div className="bg-white rounded-xl shadow p-6 animate-fadeIn">
//             <h2 className="text-xl font-semibold mb-4">Security & Settings</h2>
            
//             <div className="space-y-6">
//               {/* PIN Management */}
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="font-medium flex items-center">
//                     <Lock className="w-4 h-4 mr-2 text-gray-600" /> PIN Management
//                   </h3>
//                   <button
//                     onClick={() => setShowPinControls(!showPinControls)}
//                     className="text-blue-600 text-sm flex items-center"
//                   >
//                     {showPinControls ? (
//                       <>
//                         <ChevronUp className="w-4 h-4 mr-1" /> Hide
//                       </>
//                     ) : (
//                       <>
//                         <ChevronDown className="w-4 h-4 mr-1" /> Manage
//                       </>
//                     )}
//                   </button>
//                 </div>
                
//                 {showPinControls && (
//                   <div className="mt-4 space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <button
//                         onClick={() => setPinAction('view')}
//                         className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
//                       >
//                         <Eye className="w-5 h-5 text-gray-600 mb-1" />
//                         <span className="text-sm">View Current PIN</span>
//                       </button>
                      
//                       <button
//                         onClick={() => setPinAction('change')}
//                         className="p-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 transition flex flex-col items-center justify-center text-center"
//                       >
//                         <RefreshCw className="w-5 h-5 text-blue-600 mb-1" />
//                         <span className="text-sm">Change PIN</span>
//                       </button>
//                     </div>
                    
//                     {pinAction === 'view' && (
//                       <div className="bg-white p-3 rounded-lg border border-gray-200">
//                         <p className="text-sm text-gray-600 mb-2">For security reasons, we'll send a verification code to your registered phone number.</p>
//                         <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
//                           Request PIN
//                         </button>
//                       </div>
//                     )}
                    
//                     {pinAction === 'change' && (
//                       <div className="bg-white p-3 rounded-lg border border-gray-200">
//                         <p className="text-sm text-gray-600 mb-2">To change your PIN, you will be redirected to our secure portal.</p>
//                         <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
//                           Change PIN
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
              
//               {/* Virtual Card */}
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <h3 className="font-medium flex items-center mb-3">
//                   <CreditCard className="w-4 h-4 mr-2 text-gray-600" /> Virtual Card
//                 </h3>
                
//                 <p className="text-sm text-gray-600 mb-3">
//                   Generate a virtual card number for secure online shopping. Virtual card numbers can be used for one-time or recurring payments.
//                 </p>
                
//                 {selectedCard.virtualNumber ? (
//                   <div className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-xs text-gray-500 mb-1">Card Number</p>
//                         <p className="font-mono">{selectedCard.virtualNumber}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-500 mb-1">Expiry & CVV</p>
//                         <p className="font-mono">{selectedCard.virtualExpiry} | {selectedCard.virtualCVV}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={generateVirtualNumber}
//                     className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
//                   >
//                     Generate Virtual Card
//                   </button>
//                 )}
//               </div>
              
//               {/* Transaction Alerts */}
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <h3 className="font-medium flex items-center mb-3">
//                   <AlertTriangle className="w-4 h-4 mr-2 text-gray-600" /> Transaction Alerts
//                 </h3>
                
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">Email Alerts</p>
//                       <p className="text-xs text-gray-500">Receive email notifications for all transactions</p>
//                     </div>
//                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
//                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
//                     </button>
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">SMS Alerts</p>
//                       <p className="text-xs text-gray-500">Receive text notifications for transactions over $100</p>
//                     </div>
//                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
//                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
//                     </button>
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">Push Notifications</p>
//                       <p className="text-xs text-gray-500">Receive mobile app notifications for all activities</p>
//                     </div>
//                     <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
//                       <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Location-Based Security */}
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-medium flex items-center">
//                     <ShieldCheck className="w-4 h-4 mr-2 text-gray-600" /> Location-Based Security
//                   </h3>
//                   <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
//                     <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
//                   </button>
//                 </div>
                
//                 <p className="text-sm text-gray-600">
//                   We'll monitor your card usage locations to help prevent fraud. Transactions made far from your usual locations may require additional verification.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ApplyCardManagement;