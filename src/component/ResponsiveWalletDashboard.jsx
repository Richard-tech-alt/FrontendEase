/* eslint-disable no-unused-vars */

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
// //   AlertCircle,
// // } from "lucide-react"

// // const ResponsiveWalletDashboard = () => {
// //   const { address, isConnected, isConnecting } = useAccount()
// //   const { data: balance, refetch: refetchBalance } = useBalance({ address })
// //   const { signMessageAsync } = useSignMessage()
// //   const { sendTransaction } = useSendTransaction()

// //   // Backend URL configuration - UPDATE THIS TO YOUR BACKEND URL
// // //   const API_BASE_URL =
// // //     process.env.NODE_ENV === "production"
// // //       ? "https://wallentcardwithauthentication.onrender.com"
// // //       : "http://localhost:3000" // Change this to your local backend port

// //   // Enhanced state management with payment processing
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
// //   const [showPaymentModal, setShowPaymentModal] = useState(false)
// //   const [activeTab, setActiveTab] = useState("overview")
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [selectedPlan, setSelectedPlan] = useState("premium")
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [filterCategory, setFilterCategory] = useState("all")
// //   const [expandedCard, setExpandedCard] = useState(null)
// //   const [paymentAmount, setPaymentAmount] = useState(50)
// //   const [paymentMerchant, setPaymentMerchant] = useState("Quick Payment")
// //   const [processingPayment, setProcessingPayment] = useState(false)

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

// //   // Enhanced cards with more realistic data and features - FIXED with ObjectId strings
// //   const [cards, setCards] = useState([
// //     {
// //       id: "507f1f77bcf86cd799439011", // MongoDB ObjectId format
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
// //       id: "507f1f77bcf86cd799439012", // MongoDB ObjectId format
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
// //       id: "507f1f77bcf86cd799439013", // MongoDB ObjectId format
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
// //       id: "507f1f77bcf86cd799439014", // MongoDB ObjectId format
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
// //       id: "507f1f77bcf86cd799439015", // MongoDB ObjectId format
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
// //       id: "507f1f77bcf86cd799439016", // MongoDB ObjectId format
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

// //   // Enhanced functions with complete payment flow
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

// //   // Generate a unique nonce for each transaction
// //   const generateNonce = () => {
// //     return Date.now().toString() + Math.random().toString(36).substr(2, 9)
// //   }

// //   // Complete payment processing flow
// //   const processPayment = async (cardId, amount, merchant = "Quick Payment") => {
// //     if (!address) {
// //       addNotification("error", "Please connect your wallet first")
// //       return
// //     }

// //     const card = cards.find((c) => c.id === cardId)
// //     if (!card) {
// //       addNotification("error", "Card not found")
// //       return
// //     }

// //     if (!card.isActive) {
// //       addNotification("error", "Card is not active")
// //       return
// //     }

// //     if (card.isFrozen) {
// //       addNotification("error", "Card is frozen")
// //       return
// //     }

// //     if (card.balance < amount) {
// //       addNotification("error", "Insufficient balance")
// //       return
// //     }

// //     if (card.dailySpent + amount > card.spendingLimit) {
// //       addNotification("error", "Daily spending limit exceeded")
// //       return
// //     }

// //     setProcessingPayment(true)
// //     setIsLoading(true)

// //     try {
// //       // Step 1: Generate nonce and create payment request
// //       const nonce = generateNonce()
// //       const timestamp = Date.now()

// //       // Step 2: Create message to sign
// //       const message = JSON.stringify({
// //         action: "payment",
// //         cardId: cardId,
// //         amount: amount,
// //         merchant: merchant,
// //         walletAddress: address,
// //         nonce: nonce,
// //         timestamp: timestamp,
// //         chainId: 1, // Ethereum mainnet
// //       })

// //       addNotification("info", "Please sign the transaction in your wallet...")  

// //       // Step 3: Request signature from MetaMask
// //       const signature = await signMessageAsync({ message })

// //       addNotification("success", "Signature received, processing payment...")

// //       // Step 4: Send to backend for verification and processing - FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/process-payment`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           message,
// //           signature,
// //           cardId,
// //           amount,
// //           merchant,
// //           walletAddress: address,
// //           nonce,
// //           timestamp,
// //         }),
// //       })

// //       if (!response.ok) {
// //         const errorText = await response.text()
// //         let errorMessage = "Payment processing failed"

// //         try {
// //           const errorData = JSON.parse(errorText)
// //           errorMessage = errorData.error || errorMessage
// //         } catch (e) {
// //           errorMessage = errorText || errorMessage
// //         }

// //         throw new Error(errorMessage)
// //       }

// //       const result = await response.json()

// //       // Step 5: Update local state with successful payment
// //       setCards((prevCards) =>
// //         prevCards.map((card) =>
// //           card.id === cardId
// //             ? {
// //                 ...card,
// //                 balance: card.balance - amount,
// //                 dailySpent: card.dailySpent + amount,
// //                 transactions: [
// //                   {
// //                     id: result.transactionId,
// //                     merchant: merchant,
// //                     amount: -amount,
// //                     type: "purchase",
// //                     time: "now",
// //                     category: "payment",
// //                     status: "completed",
// //                     transactionHash: result.transactionHash,
// //                   },
// //                   ...card.transactions,
// //                 ],
// //               }
// //             : card,
// //         ),
// //       )

// //       addNotification("success", `Payment of $${amount} to ${merchant} completed successfully!`)

// //       // Calculate cashback
// //       const cashbackAmount = (amount * card.cashback) / 100
// //       if (cashbackAmount > 0) {
// //         setTimeout(() => {
// //           addNotification("success", `Cashback of $${cashbackAmount.toFixed(2)} earned!`)
// //         }, 2000)
// //       }
// //     } catch (error) {
// //       console.error("Payment error:", error)

// //       if (error.message.includes("User rejected")) {
// //         addNotification("warning", "Payment cancelled by user")
// //       } else if (error.message.includes("insufficient funds")) {
// //         addNotification("error", "Insufficient wallet balance")
// //       } else if (error.message.includes("signature verification failed")) {
// //         addNotification("error", "Signature verification failed")
// //       } else if (error.message.includes("nonce already used")) {
// //         addNotification("error", "Transaction already processed")
// //       } else {
// //         addNotification("error", error.message || "Payment processing failed")
// //       }
// //     } finally {
// //       setProcessingPayment(false)
// //       setIsLoading(false)
// //       setShowPaymentModal(false)
// //     }
// //   }

// //   const handleCardPayment = async (cardId, amount, merchant) => {
// //     setSelectedCard(cards.find((c) => c.id === cardId))
// //     setPaymentAmount(amount)
// //     setPaymentMerchant(merchant || "Quick Payment")
// //     setShowPaymentModal(true)
// //   }

// //   const confirmPayment = async () => {
// //     if (selectedCard) {
// //       await processPayment(selectedCard.id, paymentAmount, paymentMerchant)
// //     }
// //   }

// //   const toggleCardStatus = async (cardId) => {
// //     setIsLoading(true)
// //     try {
// //       const nonce = generateNonce()
// //       const message = JSON.stringify({
// //         action: "toggle_card_status",
// //         cardId: cardId,
// //         walletAddress: address,
// //         nonce: nonce,
// //         timestamp: Date.now(),
// //       })

// //       const signature = await signMessageAsync({ message })

// //       // FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/toggle-status`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           message,
// //           signature,
// //           cardId,
// //           walletAddress: address,
// //           nonce,
// //         }),
// //       })

// //       if (!response.ok) {
// //         const errorText = await response.text()
// //         let errorMessage = "Failed to update card status"

// //         try {
// //           const errorData = JSON.parse(errorText)
// //           errorMessage = errorData.error || errorMessage
// //         } catch (e) {
// //           errorMessage = errorText || errorMessage
// //         }

// //         throw new Error(errorMessage)
// //       }

// //       const result = await response.json()

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isActive: !card.isActive } : card)))

// //       const card = cards.find((c) => c.id === cardId)
// //       addNotification("success", `${card.name} ${card.isActive ? "deactivated" : "activated"} successfully`)
// //     } catch (error) {
// //       console.error("Toggle card status error:", error)
// //       addNotification("error", error.message || "Failed to update card status")
// //     }
// //     setIsLoading(false)
// //   }

// //   const toggleCardFreeze = async (cardId) => {
// //     setIsLoading(true)
// //     try {
// //       const nonce = generateNonce()
// //       const message = JSON.stringify({
// //         action: "toggle_card_freeze",
// //         cardId: cardId,
// //         walletAddress: address,
// //         nonce: nonce,
// //         timestamp: Date.now(),
// //       })

// //       const signature = await signMessageAsync({ message })

// //       // FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/toggle-freeze`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           message,
// //           signature,
// //           cardId,
// //           walletAddress: address,
// //           nonce,
// //         }),
// //       })

// //       if (!response.ok) {
// //         const errorText = await response.text()
// //         let errorMessage = "Failed to update card security status"

// //         try {
// //           const errorData = JSON.parse(errorText)
// //           errorMessage = errorData.error || errorMessage
// //         } catch (e) {
// //           errorMessage = errorText || errorMessage
// //         }

// //         throw new Error(errorMessage)
// //       }

// //       const result = await response.json()

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card)))

// //       const card = cards.find((c) => c.id === cardId)
// //       addNotification("success", `${card.name} ${card.isFrozen ? "unfrozen" : "frozen"} successfully`)
// //     } catch (error) {
// //       console.error("Toggle card freeze error:", error)
// //       addNotification("error", error.message || "Failed to update card security status")
// //     }
// //     setIsLoading(false)
// //   }

// //   const updateSpendingLimit = async (cardId, newLimit) => {
// //     if (newLimit < 0) return
// //     setIsLoading(true)
// //     try {
// //       const nonce = generateNonce()
// //       const message = JSON.stringify({
// //         action: "update_spending_limit",
// //         cardId: cardId,
// //         newLimit: newLimit,
// //         walletAddress: address,
// //         nonce: nonce,
// //         timestamp: Date.now(),
// //       })

// //       const signature = await signMessageAsync({ message })

// //       // FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/update-limit`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           message,
// //           signature,
// //           cardId,
// //           newLimit,
// //           walletAddress: address,
// //           nonce,
// //         }),
// //       })

// //       if (!response.ok) {
// //         const errorText = await response.text()
// //         let errorMessage = "Failed to update spending limit"

// //         try {
// //           const errorData = JSON.parse(errorText)
// //           errorMessage = errorData.error || errorMessage
// //         } catch (e) {
// //           errorMessage = errorText || errorMessage
// //         }

// //         throw new Error(errorMessage)
// //       }

// //       const result = await response.json()

// //       setCards(cards.map((card) => (card.id === cardId ? { ...card, spendingLimit: newLimit } : card)))

// //       addNotification("success", "Spending limit updated successfully")
// //     } catch (error) {
// //       console.error("Update spending limit error:", error)
// //       addNotification("error", error.message || "Failed to update spending limit")
// //     }
// //     setIsLoading(false)
// //   }

// //   const upgradePlan = async (planId) => {
// //     setIsLoading(true)
// //     try {
// //       const plan = plans.find((p) => p.id === planId)
// //       const nonce = generateNonce()
// //       const message = JSON.stringify({
// //         action: "upgrade_plan",
// //         planId: planId,
// //         planPrice: plan.price,
// //         walletAddress: address,
// //         nonce: nonce,
// //         timestamp: Date.now(),
// //       })

// //       const signature = await signMessageAsync({ message })

// //       // FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/plans/upgrade`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           message,
// //           signature,
// //           planId,
// //           walletAddress: address,
// //           nonce,
// //         }),
// //       })

// //       if (!response.ok) {
// //         const errorText = await response.text()
// //         let errorMessage = "Plan upgrade failed"

// //         try {
// //           const errorData = JSON.parse(errorText)
// //           errorMessage = errorData.error || errorMessage
// //         } catch (e) {
// //           errorMessage = errorText || errorMessage
// //         }

// //         throw new Error(errorMessage)
// //       }

// //       const result = await response.json()

// //       setSelectedPlan(planId)
// //       addNotification("success", `Successfully upgraded to ${plan.name} plan`)
// //       setShowPlanModal(false)
// //     } catch (error) {
// //       console.error("Plan upgrade error:", error)
// //       addNotification("error", error.message || "Plan upgrade failed")
// //     }
// //     setIsLoading(false)
// //   }

// //   const handleRefresh = async () => {
// //     setIsLoading(true)
// //     try {
// //       await refetchBalance()

// //       // Fetch updated card data from backend - FIXED ENDPOINT WITH CORRECT URL
// //       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards?walletAddress=${address}`)
// //       if (response.ok) {
// //         const updatedCards = await response.json()
// //         setCards(updatedCards)
// //       }

// //       addNotification("success", "Data refreshed successfully")
// //     } catch (error) {
// //       console.error("Refresh error:", error)
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
// //       walletAddress: address,
// //     }
// //     const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
// //     const url = URL.createObjectURL(blob)
// //     const a = document.createElement("a")
// //     a.href = url
// //     a.download = `wallet-dashboard-export-${Date.now()}.json`
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
// //                       onClick={() => handleCardPayment(card.id, 50, "Quick Payment")}
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

// //       {/* Enhanced Payment Confirmation Modal */}
// //       {showPaymentModal && selectedCard && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">Confirm Payment</h3>
// //                 <button
// //                   onClick={() => setShowPaymentModal(false)}
// //                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
// //                 >
// //                   <X className="w-5 h-5 text-gray-500" />
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="p-4 sm:p-6 space-y-4">
// //               <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 text-white`}>
// //                 <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
// //                 <p className="text-sm opacity-90">{selectedCard.cardNumber}</p>
// //                 <p className="text-lg font-bold mt-2">Balance: ${selectedCard.balance.toFixed(2)}</p>
// //               </div>

// //               <div className="space-y-3">
// //                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
// //                   <span className="text-sm font-medium text-gray-700">Merchant</span>
// //                   <input
// //                     type="text"
// //                     value={paymentMerchant}
// //                     onChange={(e) => setPaymentMerchant(e.target.value)}
// //                     className="text-sm font-bold text-gray-900 bg-transparent border-none outline-none text-right"
// //                     placeholder="Enter merchant name"
// //                   />
// //                 </div>

// //                 <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
// //                   <span className="text-sm font-medium text-gray-700">Amount</span>
// //                   <div className="flex items-center space-x-2">
// //                     <span className="text-sm text-gray-500">$</span>
// //                     <input
// //                       type="number"
// //                       value={paymentAmount}
// //                       onChange={(e) => setPaymentAmount(Number.parseFloat(e.target.value) || 0)}
// //                       className="text-lg font-bold text-gray-900 bg-transparent border-none outline-none text-right w-20"
// //                       min="0.01"
// //                       step="0.01"
// //                       max={selectedCard.balance}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
// //                   <span className="text-sm font-medium text-blue-700">Cashback ({selectedCard.cashback}%)</span>
// //                   <span className="text-sm font-bold text-blue-900">
// //                     +${((paymentAmount * selectedCard.cashback) / 100).toFixed(2)}
// //                   </span>
// //                 </div>

// //                 {paymentAmount > selectedCard.balance && (
// //                   <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
// //                     <AlertCircle className="w-4 h-4 text-red-500" />
// //                     <span className="text-sm text-red-700">Insufficient balance</span>
// //                   </div>
// //                 )}

// //                 {selectedCard.dailySpent + paymentAmount > selectedCard.spendingLimit && (
// //                   <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
// //                     <AlertCircle className="w-4 h-4 text-yellow-500" />
// //                     <span className="text-sm text-yellow-700">Daily limit will be exceeded</span>
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="flex space-x-3 pt-4">
// //                 <button
// //                   onClick={() => setShowPaymentModal(false)}
// //                   className="flex-1 py-3 px-4 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   onClick={confirmPayment}
// //                   disabled={
// //                     processingPayment ||
// //                     paymentAmount <= 0 ||
// //                     paymentAmount > selectedCard.balance ||
// //                     !selectedCard.isActive ||
// //                     selectedCard.isFrozen ||
// //                     !paymentMerchant.trim()
// //                   }
// //                   className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
// //                 >
// //                   {processingPayment ? "Processing..." : `Pay $${paymentAmount.toFixed(2)}`}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

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
// //                         {transaction.status && (
// //                           <p className="text-xs text-green-600 capitalize">{transaction.status}</p>
// //                         )}
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

// // export default ResponsiveWalletDashboard



// "use client"

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
//   Database,
// } from "lucide-react"

// const ResponsiveWalletDashboard = () => {
//   const { address, isConnected, isConnecting } = useAccount()
//   const { data: balance, refetch: refetchBalance } = useBalance({ address })
//   const { signMessageAsync } = useSignMessage()
//   const { sendTransaction } = useSendTransaction()

//   // Backend URL configuration
//   const API_BASE_URL =
//     process.env.NODE_ENV === "production"
//       ? "https://wallentcardwithauthentication.onrender.com"
//       : "https://wallentcardwithauthentication.onrender.com"

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
//   const [cards, setCards] = useState([]) // Start with empty array, load from backend

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

//   // Load cards from backend when wallet connects
//   useEffect(() => {
//     if (address) {
//       loadCardsFromBackend()
//     }
//   }, [address])

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

//   // Load cards from backend
//   const loadCardsFromBackend = async () => {
//     if (!address) return

//     try {
//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards?walletAddress=${address}`)
//       if (response.ok) {
//         const backendCards = await response.json()
//         if (backendCards.length > 0) {
//           setCards(backendCards)
//         } else {
//           // No cards found, show option to seed database
//           addNotification("info", "No cards found. Click 'Seed Database' to create sample cards.")
//         }
//       }
//     } catch (error) {
//       console.error("Failed to load cards:", error)
//       addNotification("error", "Failed to load cards from backend")
//     }
//   }

//   // Seed database with sample cards
//   const seedDatabase = async () => {
//     if (!address) {
//       addNotification("error", "Please connect your wallet first")
//       return
//     }

//     setIsLoading(true)
//     try {
//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/seed`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           walletAddress: address,
//         }),
//       })

//       if (response.ok) {
//         const result = await response.json()
//         setCards(result.cards)
//         addNotification("success", `${result.cards.length} sample cards created successfully!`)
//       } else {
//         const errorData = await response.json()
//         throw new Error(errorData.error || "Failed to seed database")
//       }
//     } catch (error) {
//       console.error("Seed database error:", error)
//       addNotification("error", error.message || "Failed to seed database")
//     }
//     setIsLoading(false)
//   }

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

//     const card = cards.find((c) => c._id === cardId)
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
//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/process-payment`, {
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

//       if (!response.ok) {
//         const errorText = await response.text()
//         let errorMessage = "Payment processing failed"

//         try {
//           const errorData = JSON.parse(errorText)
//           errorMessage = errorData.error || errorMessage
//         } catch (e) {
//           errorMessage = errorText || errorMessage
//         }

//         throw new Error(errorMessage)
//       }

//       const result = await response.json()

//       // Step 5: Update local state with successful payment
//       setCards((prevCards) =>
//         prevCards.map((card) =>
//           card._id === cardId
//             ? {
//                 ...card,
//                 balance: result.newBalance,
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
//       if (result.cashbackAmount > 0) {
//         setTimeout(() => {
//           addNotification("success", `Cashback of $${result.cashbackAmount.toFixed(2)} earned!`)
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
//     setSelectedCard(cards.find((c) => c._id === cardId))
//     setPaymentAmount(amount)
//     setPaymentMerchant(merchant || "Quick Payment")
//     setShowPaymentModal(true)
//   }

//   const confirmPayment = async () => {
//     if (selectedCard) {
//       await processPayment(selectedCard._id, paymentAmount, paymentMerchant)
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

//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/toggle-status`, {
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

//       if (!response.ok) {
//         const errorText = await response.text()
//         let errorMessage = "Failed to update card status"

//         try {
//           const errorData = JSON.parse(errorText)
//           errorMessage = errorData.error || errorMessage
//         } catch (e) {
//           errorMessage = errorText || errorMessage
//         }

//         throw new Error(errorMessage)
//       }

//       const result = await response.json()

//       setCards(cards.map((card) => (card._id === cardId ? { ...card, isActive: result.newStatus } : card)))

//       const card = cards.find((c) => c._id === cardId)
//       addNotification("success", `${card.name} ${result.newStatus ? "activated" : "deactivated"} successfully`)
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

//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/toggle-freeze`, {
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

//       if (!response.ok) {
//         const errorText = await response.text()
//         let errorMessage = "Failed to update card security status"

//         try {
//           const errorData = JSON.parse(errorText)
//           errorMessage = errorData.error || errorMessage
//         } catch (e) {
//           errorMessage = errorText || errorMessage
//         }

//         throw new Error(errorMessage)
//       }

//       const result = await response.json()

//       setCards(cards.map((card) => (card._id === cardId ? { ...card, isFrozen: result.newFreezeStatus } : card)))

//       const card = cards.find((c) => c._id === cardId)
//       addNotification("success", `${card.name} ${result.newFreezeStatus ? "frozen" : "unfrozen"} successfully`)
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

//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/cards/update-limit`, {
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

//       if (!response.ok) {
//         const errorText = await response.text()
//         let errorMessage = "Failed to update spending limit"

//         try {
//           const errorData = JSON.parse(errorText)
//           errorMessage = errorData.error || errorMessage
//         } catch (e) {
//           errorMessage = errorText || errorMessage
//         }

//         throw new Error(errorMessage)
//       }

//       const result = await response.json()

//       setCards(cards.map((card) => (card._id === cardId ? { ...card, spendingLimit: newLimit } : card)))

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

//       const response = await fetch(`https://wallentcardwithauthentication.onrender.com/api/plans/upgrade`, {
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

//       if (!response.ok) {
//         const errorText = await response.text()
//         let errorMessage = "Plan upgrade failed"

//         try {
//           const errorData = JSON.parse(errorText)
//           errorMessage = errorData.error || errorMessage
//         } catch (e) {
//           errorMessage = errorText || errorMessage
//         }

//         throw new Error(errorMessage)
//       }

//       const result = await response.json()

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
//       await loadCardsFromBackend()
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
//             <appkit-button />
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
//               </div>

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

//               <appkit-button />
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
//               <appkit-button />
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
//               {cards.length === 0 && (
//                 <button
//                   onClick={seedDatabase}
//                   disabled={isLoading}
//                   className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
//                 >
//                   <Database className="w-4 h-4" />
//                   <span className="hidden sm:inline">Seed Database</span>
//                 </button>
//               )}
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
//                 key={card._id}
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
//                       onClick={() => setExpandedCard(expandedCard === card._id ? null : card._id)}
//                       className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                     >
//                       <span className="text-sm font-medium text-gray-700">Card Controls</span>
//                       {expandedCard === card._id ? (
//                         <ChevronUp className="w-4 h-4 text-gray-500" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4 text-gray-500" />
//                       )}
//                     </button>

//                     {expandedCard === card._id && (
//                       <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm font-medium text-gray-700">Status</span>
//                           <button
//                             onClick={() => toggleCardStatus(card._id)}
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
//                             onClick={() => toggleCardFreeze(card._id)}
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
//                               onChange={(e) => updateSpendingLimit(card._id, Number.parseFloat(e.target.value) || 0)}
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
//                       onClick={() => handleCardPayment(card._id, 50, "Quick Payment")}
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
//               <p className="text-gray-500 mb-4">
//                 {cards.length === 0
//                   ? "Connect your wallet and click 'Seed Database' to create sample cards"
//                   : "Try adjusting your search or filter criteria"}
//               </p>
//               {cards.length === 0 && (
//                 <button
//                   onClick={seedDatabase}
//                   disabled={isLoading}
//                   className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 mx-auto"
//                 >
//                   <Database className="w-5 h-5" />
//                   <span>Seed Database</span>
//                 </button>
//               )}
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
//                     toggleCardStatus(selectedCard._id)
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
//                     toggleCardFreeze(selectedCard._id)
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

// export default ResponsiveWalletDashboard




  import { useState, useEffect } from "react"
  import { useAccount, useBalance, useSignMessage, useSendTransaction } from "wagmi"
  import { formatEther } from "viem"
  import {
    CreditCard,
    Wallet,
    Eye,
    EyeOff,
    Settings,
    TrendingUp,
    Shield,
    Lock,
    Unlock,
    DollarSign,
    Activity,
    Bell,
    User,
    Copy,
    Check,
    Plus,
    Star,
    Gift,
    Zap,
    Download,
    Share2,
    CheckCircle,
    XCircle,
    Sparkles,
    Crown,
    Gem,
    X,
    RefreshCw,
    Globe,
    Smartphone,
    ShoppingBag,
    Coffee,
    Car,
    Home,
    Gamepad2,
    Menu,
    ChevronDown,
    ChevronUp,
    Filter,
    Search,
    CreditCardIcon as CardIcon,
    AlertCircle,
    Database,
  } from "lucide-react"

  import { useNavigate } from "react-router-dom";
import { getCardSlugByName } from "./GetCardSlugByName";



  const ResponsiveWalletDashboard = () => {
    const { address, isConnected, isConnecting } = useAccount()
    const { data: balance, refetch: refetchBalance } = useBalance({ address })
    const { signMessageAsync } = useSignMessage()
    const { sendTransaction } = useSendTransaction()
    const [showDepositModal, setShowDepositModal] = useState(false);
const [selectedSlug, setSelectedSlug] = useState("");
    const navigate = useNavigate();

    // Backend URL configuration
    const API_BASE_URL =
      process.env.NODE_ENV === "production"
        ? "https://sub.easewithdraw.com"
        : "https://sub.easewithdraw.com"

    // Enhanced state management with payment processing
    const [showBalance, setShowBalance] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [notifications, setNotifications] = useState([
      { id: 1, type: "success", message: "Card payment successful", time: "2 min ago", read: false },
      { id: 2, type: "warning", message: "Spending limit reached on Binance card", time: "1 hour ago", read: false },
      { id: 3, type: "info", message: "New cashback reward available", time: "3 hours ago", read: true },
    ])
    const [copied, setCopied] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [showCardModal, setShowCardModal] = useState(false)
    const [showPlanModal, setShowPlanModal] = useState(false)
    const [showTransactionModal, setShowTransactionModal] = useState(false)
    const [showNotificationPanel, setShowNotificationPanel] = useState(false)
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const [activeTab, setActiveTab] = useState("overview")
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState("premium")
    const [searchTerm, setSearchTerm] = useState("")
    const [filterCategory, setFilterCategory] = useState("all")
    const [expandedCard, setExpandedCard] = useState(null)
    const [paymentAmount, setPaymentAmount] = useState(50)
    const [paymentMerchant, setPaymentMerchant] = useState("Quick Payment")
    const [processingPayment, setProcessingPayment] = useState(false)
    const [cards, setCards] = useState([]) // Start with empty array, load from backend
    const [showCardCreationModal, setShowCardCreationModal] = useState(false)
    const [showAnalyticsModal, setShowAnalyticsModal] = useState(false)
    const [showSecurityModal, setShowSecurityModal] = useState(false)
    const [showSettingsModal, setShowSettingsModal] = useState(false)

    // Screen size detection
    const [screenSize, setScreenSize] = useState("desktop")


    const [unlockedCards, setUnlockedCards] = useState(new Set());
const [showUnlockModal, setShowUnlockModal] = useState(false);
const [selectedCardForUnlock, setSelectedCardForUnlock] = useState(null);


console.log("selectedSlug for dashboard",selectedSlug)

// Add this function to handle card unlock clicks
const handleCardUnlock = (card) => {
  setSelectedCardForUnlock(card);
  setShowUnlockModal(true);
};

// Add this function to unlock a card
const unlockCard = () => {
  if (selectedCardForUnlock) {
    setUnlockedCards(prev => new Set([...prev, selectedCardForUnlock._id]));
    setShowUnlockModal(false);
    setSelectedCardForUnlock(null);
  }
};

// Check if card is unlocked
const isCardUnlocked = (cardId) => unlockedCards.has(cardId);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setScreenSize("mobile")
        } else if (window.innerWidth < 1024) {
          setScreenSize("tablet")
        } else {
          setScreenSize("desktop")
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Load cards from backend when wallet connects
    useEffect(() => {
      if (address) {
        loadCardsFromBackend()
      }
    }, [address])

    // Plan options
    const plans = [
      {
        id: "basic",
        name: "Basic",
        price: 0,
        features: ["2 Virtual Cards", "Basic Support", "Standard Limits"],
        color: "from-gray-400 to-gray-500",
        popular: false,
      },
      {
        id: "premium",
        name: "Premium",
        price: 9.99,
        features: ["6 Virtual Cards", "Priority Support", "Higher Limits", "Cashback Rewards"],
        color: "from-blue-500 to-purple-600",
        popular: true,
      },
      {
        id: "platinum",
        name: "Platinum",
        price: 19.99,
        features: ["Unlimited Cards", "24/7 Support", "No Limits", "Premium Rewards", "Crypto Integration"],
        color: "from-purple-600 to-pink-600",
        popular: false,
      },
    ]

    // Load cards from backend
    const loadCardsFromBackend = async () => {
      if (!address) return

      try {
        const response = await fetch(`${API_BASE_URL}/api/cards?walletAddress=${address}`)
        if (response.ok) {
          const backendCards = await response.json()
          if (backendCards.length > 0) {
            setCards(backendCards)
          } else {
            // No cards found, show option to seed database
            addNotification("info", "No cards found. Click 'Seed Database' to create sample cards.")
          }
        }
      } catch (error) {
        console.error("Failed to load cards:", error)
        addNotification("error", "Failed to load cards from backend")
      }
    }

    // Seed database with sample cards
    const seedDatabase = async () => {
      if (!address) {
        addNotification("error", "Please connect your wallet first")
        return
      }

      setIsLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/api/cards/seed`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletAddress: address,
          }),
        })

        if (response.ok) {
          const result = await response.json()
          setCards(result.cards)
          addNotification("success", `${result.cards.length} sample cards created successfully!`)
        } else {
          const errorData = await response.json()
          throw new Error(errorData.error || "Failed to seed database")
        }
      } catch (error) {
        console.error("Seed database error:", error)
        addNotification("error", error.message || "Failed to seed database")
      }
      setIsLoading(false)
    }

    // Enhanced functions with complete payment flow
    const copyAddress = async () => {
      if (address) {
        await navigator.clipboard.writeText(address)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        addNotification("success", "Wallet address copied to clipboard")
      }
    }

    const addNotification = (type, message) => {
      const newNotification = {
        id: Date.now(),
        type,
        message,
        time: "now",
        read: false,
      }
      setNotifications((prev) => [newNotification, ...prev.slice(0, 4)])
    }

    const markNotificationAsRead = (id) => {
      setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
    }

    const clearAllNotifications = () => {
      setNotifications([])
      setShowNotificationPanel(false)
    }

    // Generate a unique nonce for each transaction
    const generateNonce = () => {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9)
    }

    // Complete payment processing flow
    const processPayment = async (cardId, amount, merchant = "Quick Payment") => {
      if (!address) {
        addNotification("error", "Please connect your wallet first")
        return
      }

      const card = cards.find((c) => c._id === cardId)
      if (!card) {
        addNotification("error", "Card not found")
        return
      }

      if (!card.isActive) {
        addNotification("error", "Card is not active")
        return
      }

      if (card.isFrozen) {
        addNotification("error", "Card is frozen")
        return
      }

      if (card.balance < amount) {
        addNotification("error", "Insufficient balance")
        return
      }

      if (card.dailySpent + amount > card.spendingLimit) {
        addNotification("error", "Daily spending limit exceeded")
        return
      }

      setProcessingPayment(true)
      setIsLoading(true)

      try {
        // Step 1: Generate nonce and create payment request
        const nonce = generateNonce()
        const timestamp = Date.now()

        // Step 2: Create message to sign
        const message = JSON.stringify({
          action: "payment",
          cardId: cardId,
          amount: amount,
          merchant: merchant,
          walletAddress: address,
          nonce: nonce,
          timestamp: timestamp,
          chainId: 1, // Ethereum mainnet
        })

        addNotification("info", "Please sign the transaction in your wallet...")

        // Step 3: Request signature from MetaMask
        const signature = await signMessageAsync({ message })

        addNotification("success", "Signature received, processing payment...")

        // Step 4: Send to backend for verification and processing
        const response = await fetch(`${API_BASE_URL}/api/cards/process-payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            signature,
            cardId,
            amount,
            merchant,
            walletAddress: address,
            nonce,
            timestamp,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = "Payment processing failed"

          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch (e) {
            errorMessage = errorText || errorMessage
          }

          throw new Error(errorMessage)
        }

        const result = await response.json()

        // Step 5: Update local state with successful payment
        setCards((prevCards) =>
          prevCards.map((card) =>
            card._id === cardId
              ? {
                  ...card,
                  balance: result.newBalance,
                  dailySpent: card.dailySpent + amount,
                  transactions: [
                    {
                      id: result.transactionId,
                      merchant: merchant,
                      amount: -amount,
                      type: "purchase",
                      time: "now",
                      category: "payment",
                      status: "completed",
                      transactionHash: result.transactionHash,
                    },
                    ...card.transactions,
                  ],
                }
              : card,
          ),
        )

        addNotification("success", `Payment of $${amount} to ${merchant} completed successfully!`)

        // Calculate cashback
        if (result.cashbackAmount > 0) {
          setTimeout(() => {
            addNotification("success", `Cashback of $${result.cashbackAmount.toFixed(2)} earned!`)
          }, 2000)
        }
      } catch (error) {
        console.error("Payment error:", error)

        if (error.message.includes("User rejected")) {
          addNotification("warning", "Payment cancelled by user")
        } else if (error.message.includes("insufficient funds")) {
          addNotification("error", "Insufficient wallet balance")
        } else if (error.message.includes("signature verification failed")) {
          addNotification("error", "Signature verification failed")
        } else if (error.message.includes("nonce already used")) {
          addNotification("error", "Transaction already processed")
        } else {
          addNotification("error", error.message || "Payment processing failed")
        }
      } finally {
        setProcessingPayment(false)
        setIsLoading(false)
        setShowPaymentModal(false)
      }
    }

    const handleCardPayment = async (cardId, amount, merchant) => {
      setSelectedCard(cards.find((c) => c._id === cardId))
      setPaymentAmount(amount)
      setPaymentMerchant(merchant || "Quick Payment")
      setShowPaymentModal(true)
    }

    const confirmPayment = async () => {
      if (selectedCard) {
        await processPayment(selectedCard._id, paymentAmount, paymentMerchant)
      }
    }

    const toggleCardStatus = async (cardId) => {
      setIsLoading(true)
      try {
        const nonce = generateNonce()
        const message = JSON.stringify({
          action: "toggle_card_status",
          cardId: cardId,
          walletAddress: address,
          nonce: nonce,
          timestamp: Date.now(),
        })

        const signature = await signMessageAsync({ message })

        const response = await fetch(`${API_BASE_URL}/api/cards/toggle-status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            signature,
            cardId,
            walletAddress: address,
            nonce,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = "Failed to update card status"

          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch (e) {
            errorMessage = errorText || errorMessage
          }

          throw new Error(errorMessage)
        }

        const result = await response.json()

        setCards(cards.map((card) => (card._id === cardId ? { ...card, isActive: result.newStatus } : card)))

        const card = cards.find((c) => c._id === cardId)
        addNotification("success", `${card.name} ${result.newStatus ? "activated" : "deactivated"} successfully`)
      } catch (error) {
        console.error("Toggle card status error:", error)
        addNotification("error", error.message || "Failed to update card status")
      }
      setIsLoading(false)
    }

    const toggleCardFreeze = async (cardId) => {
      setIsLoading(true)
      try {
        const nonce = generateNonce()
        const message = JSON.stringify({
          action: "toggle_card_freeze",
          cardId: cardId,
          walletAddress: address,
          nonce: nonce,
          timestamp: Date.now(),
        })

        const signature = await signMessageAsync({ message })

        const response = await fetch(`${API_BASE_URL}/api/cards/toggle-freeze`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            signature,
            cardId,
            walletAddress: address,
            nonce,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = "Failed to update card security status"

          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch (e) {
            errorMessage = errorText || errorMessage
          }

          throw new Error(errorMessage)
        }

        const result = await response.json()

        setCards(cards.map((card) => (card._id === cardId ? { ...card, isFrozen: result.newFreezeStatus } : card)))

        const card = cards.find((c) => c._id === cardId)
        addNotification("success", `${card.name} ${result.newFreezeStatus ? "frozen" : "unfrozen"} successfully`)
      } catch (error) {
        console.error("Toggle card freeze error:", error)
        addNotification("error", error.message || "Failed to update card security status")
      }
      setIsLoading(false)
    }

    const updateSpendingLimit = async (cardId, newLimit) => {
      if (newLimit < 0) return
      setIsLoading(true)
      try {
        const nonce = generateNonce()
        const message = JSON.stringify({
          action: "update_spending_limit",
          cardId: cardId,
          newLimit: newLimit,
          walletAddress: address,
          nonce: nonce,
          timestamp: Date.now(),
        })

        const signature = await signMessageAsync({ message })

        const response = await fetch(`${API_BASE_URL}/api/cards/update-limit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            signature,
            cardId,
            newLimit,
            walletAddress: address,
            nonce,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = "Failed to update spending limit"

          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch (e) {
            errorMessage = errorText || errorMessage
          }

          throw new Error(errorMessage)
        }

        const result = await response.json()

        setCards(cards.map((card) => (card._id === cardId ? { ...card, spendingLimit: newLimit } : card)))

        addNotification("success", "Spending limit updated successfully")
      } catch (error) {
        console.error("Update spending limit error:", error)
        addNotification("error", error.message || "Failed to update spending limit")
      }
      setIsLoading(false)
    }

    const upgradePlan = async (planId) => {
      setIsLoading(true)
      try {
        const plan = plans.find((p) => p.id === planId)
        const nonce = generateNonce()
        const message = JSON.stringify({
          action: "upgrade_plan",
          planId: planId,
          planPrice: plan.price,
          walletAddress: address,
          nonce: nonce,
          timestamp: Date.now(),
        })

        const signature = await signMessageAsync({ message })

        const response = await fetch(`${API_BASE_URL}/api/plans/upgrade`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            signature,
            planId,
            walletAddress: address,
            nonce,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          let errorMessage = "Plan upgrade failed"

          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch (e) {
            errorMessage = errorText || errorMessage
          }

          throw new Error(errorMessage)
        }

        const result = await response.json()

        setSelectedPlan(planId)
        addNotification("success", `Successfully upgraded to ${plan.name} plan`)
        setShowPlanModal(false)
      } catch (error) {
        console.error("Plan upgrade error:", error)
        addNotification("error", error.message || "Plan upgrade failed")
      }
      setIsLoading(false)
    }

    const handleRefresh = async () => {
      setIsLoading(true)
      try {
        await refetchBalance()
        await loadCardsFromBackend()
        addNotification("success", "Data refreshed successfully")
      } catch (error) {
        console.error("Refresh error:", error)
        addNotification("error", "Failed to refresh data")
      }
      setIsLoading(false)
    }

    const handleExportData = () => {
      const data = {
        cards: cards.map((card) => ({
          name: card.name,
          balance: card.balance,
          monthlyRewards: card.monthlyRewards,
          transactions: card.transactions,
        })),
        totalBalance: totalCardBalance,
        exportDate: new Date().toISOString(),
        walletAddress: address,
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `wallet-dashboard-export-${Date.now()}.json`
      a.click()
      URL.revokeObjectURL(url)
      addNotification("success", "Data exported successfully")
    }

    const handleShareData = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "EaseWithdraw Dashboard",
            text: `My wallet balance: $${totalCardBalance.toFixed(2)}`,
            url: window.location.href,
          })
          addNotification("success", "Shared successfully")
        } catch (error) {
          addNotification("info", "Share cancelled")
        }
      } else {
        copyAddress()
      }
    }

    // Calculate statistics
    const totalCardBalance = cards.reduce((sum, card) => sum + card.balance, 0)
    const totalDailySpent = cards.reduce((sum, card) => sum + card.dailySpent, 0)
    const totalMonthlyRewards = cards.reduce((sum, card) => sum + card.monthlyRewards, 0)
    const activeCards = cards.filter((card) => card.isActive).length
    const unreadNotifications = notifications.filter((n) => !n.read).length

    const getCategoryIcon = (category) => {
      const icons = {
        shopping: ShoppingBag,
        food: Coffee,
        transport: Car,
        entertainment: Gamepad2,
        business: Home,
        electronics: Smartphone,
        reward: Gift,
        defi: Zap,
        investment: TrendingUp,
        subscription: Globe,
        payment: DollarSign,
      }
      return icons[category] || DollarSign
    }

    const filteredCards = cards.filter((card) => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter =
        filterCategory === "all" ||
        (filterCategory === "active" && card.isActive) ||
        (filterCategory === "inactive" && !card.isActive) ||
        (filterCategory === "frozen" && card.isFrozen)
      return matchesSearch && matchesFilter
    })

    if (!isConnected) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-center max-w-sm sm:max-w-md w-full border border-white/20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Wallet className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Welcome to EaseWithdraw</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Connect your wallet to access your premium virtual card dashboard
            </p>
            <div className="space-y-4">
              <appkit-button/>
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Fast</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) 
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Responsive Header */}

      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
    <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16 md:h-18">
      {/* Logo and Mobile Menu */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100/50"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          
          {/* Desktop Logo Text */}
          <div className="hidden sm:block">
            <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              EaseWithdraw
            </h1>
            <p className="text-xs md:text-sm text-gray-500 leading-none">Premium Dashboard</p>
          </div>
          
          {/* Mobile Logo Text */}
          <div className="sm:hidden">
            <h1 className="text-sm xs:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EaseWithdraw
            </h1>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        <button
          onClick={() => setShowPlanModal(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 lg:px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium"
        >
          <Crown className="w-4 h-4" />
          <span className="hidden lg:inline">Upgrade</span>
          <span className="lg:hidden">Pro</span>
        </button>

        <div className="flex items-center space-x-2 lg:space-x-3 bg-gray-100/80 rounded-xl px-3 lg:px-4 py-2 backdrop-blur-sm">
          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
          </div>
          <div className="text-sm min-w-0">
            <p className="font-medium text-gray-800 truncate">
              {address ? `${address.slice(0, 4)}...${address.slice(-3)}` : "Not Connected"}
            </p>
            <p className="text-xs text-gray-500 truncate">Premium</p>
          </div>
          <button 
            onClick={copyAddress} 
            className="p-1 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
            aria-label="Copy address"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
          </button>
        </div>

        <div className="flex-shrink-0">
          <appkit-button />
        </div>
      </div>

      {/* Tablet Navigation (sm to md) */}
      <div className="hidden sm:flex md:hidden items-center space-x-2">
        <button
          onClick={() => setShowPlanModal(true)}
          className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-xl hover:shadow-lg transition-all duration-300 text-sm"
        >
          <Crown className="w-4 h-4" />
          <span>Pro</span>
        </button>

        <button
          onClick={() => setShowNotificationPanel(!showNotificationPanel)}
          className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100/50"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadNotifications > 9 ? '9+' : unreadNotifications}
            </span>
          )}
        </button>
        
        <appkit-button />
      </div>

      {/* Mobile Actions */}
      <div className="flex sm:hidden items-center space-x-1">
        <button
          onClick={() => setShowNotificationPanel(!showNotificationPanel)}
          className="relative p-1.5 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100/50"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadNotifications > 9 ? '9' : unreadNotifications}
            </span>
          )}
        </button>
        
        <div className="scale-90">
          <appkit-button />
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden border-t border-gray-200 py-3 sm:py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-800 text-sm truncate">
              {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : "Not Connected"}
            </p>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
          <button 
            onClick={copyAddress} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Copy address"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-500" />}
          </button>
        </div>

        <button
          onClick={() => {
            setShowPlanModal(true)
            setIsMobileMenuOpen(false)
          }}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 mx-2"
        >
          <Crown className="w-4 h-4" />
          <span className="text-sm font-medium">Upgrade Plan</span>
        </button>
      </div>
    )}
  </div>
</header>
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Enhanced Responsive Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-600">Wallet Balance</h3>
                  <p className="text-xs text-gray-400 hidden sm:block">Connected Wallet</p>
                </div>
              </div>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {showBalance ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
              </button>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
                {showBalance
                  ? balance
                    ? `${Number.parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
                    : "0.0000 ETH"
                  : "••••••••"}
              </span>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-green-600 font-medium">+5.2%</span>
                <span className="text-gray-500 hidden sm:inline">vs last month</span>
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Total Balance</h3>
                <p className="text-xs text-gray-400 hidden sm:block">All Cards Combined</p>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <span className="text-lg sm:text-2xl font-bold text-gray-900 block">
                ${showBalance ? totalCardBalance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••••"}
              </span>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-green-600 font-medium">+12.5%</span>
                <span className="text-gray-500 hidden sm:inline">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Rewards</h3>
                <p className="text-xs text-gray-400 hidden sm:block">Monthly</p>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalMonthlyRewards.toFixed(2)}</span>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-green-600 font-medium">+8.3%</span>
                <span className="text-gray-500 hidden sm:inline">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-gray-600">Today</h3>
                <p className="text-xs text-gray-400 hidden sm:block">Spending</p>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <span className="text-lg sm:text-2xl font-bold text-gray-900">${totalDailySpent.toFixed(2)}</span>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-orange-600 font-medium">
                  {activeCards}/{cards.length}
                </span>
                <span className="text-gray-500 hidden sm:inline">active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Your Virtual Cards</h2>
              <p className="text-sm sm:text-base text-gray-600">Manage your premium virtual card collection</p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              {cards.length === 0 && (
                <button
                  onClick={seedDatabase}
                  disabled={isLoading}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  <Database className="w-4 h-4" />
                  <span className="hidden sm:inline">Seed Database</span>
                </button>
              )}
              {/* <button
                onClick={() => addNotification("info", "Add new card feature coming soon!")}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add New Card</span>
              </button> */}
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>
            <div className="relative">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl px-4 py-2 sm:py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Cards</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="frozen">Frozen</option>
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>



        <div className="mb-6 sm:mb-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
    {filteredCards.map((card) => (
      <div
        key={card._id}
        className="group bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative"
      >
        {/* Enhanced Responsive Card Header */}
        <div className={`bg-gradient-to-br ${card.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold truncate">{card.name}</h3>
                <p className="text-sm opacity-90">{card.type}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{card.plan}</span>
                  <span className="text-xs">{card.cashback}% Cashback</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold opacity-80 ml-2">{card.icon}</div>
            </div>

            <div className="mb-3 sm:mb-4">
              <p className="text-sm opacity-90">Available Balance</p>
              <p className={`text-xl sm:text-2xl font-bold ${!isCardUnlocked(card._id) ? 'blur-sm' : ''}`}>
                ${showBalance && isCardUnlocked(card._id) ? card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 }) : "••••••"}
              </p>
            </div>

            <div className={`flex justify-between items-center text-sm ${!isCardUnlocked(card._id) ? 'blur-sm' : ''}`}>
              <span className="truncate">{isCardUnlocked(card._id) ? card.cardNumber : "**** **** **** ••••"}</span>
              <span>{isCardUnlocked(card._id) ? card.expiry : "••/••"}</span>
            </div>

            {/* Status indicators */}
            {isCardUnlocked(card._id) && (
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1">
                {!card.isActive && (
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"
                    title="Inactive"
                  ></div>
                )}
                {card.isFrozen && (
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"
                    title="Frozen"
                  ></div>
                )}
                {card.isActive && !card.isFrozen && (
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"
                    title="Active"
                  ></div>
                )}
              </div>
            )}
          </div>

          {/* Lock Overlay for Locked Cards */}
          {!isCardUnlocked(card._id) && (
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300 z-20"
              onClick={() => handleCardUnlock(card)}
            >
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-2 animate-pulse" />
                <p className="text-white font-semibold text-sm sm:text-base">Click to Unlock</p>
                <p className="text-white/80 text-xs mt-1">Security deposit required</p>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Responsive Card Body */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {isCardUnlocked(card._id) ? (
            <>
              {/* Spending Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Daily Spending</span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    ${card.dailySpent.toFixed(2)} / ${card.spendingLimit.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${card.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min((card.dailySpent / card.spendingLimit) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-xs text-gray-500">Monthly Rewards</p>
                  <p className="text-sm sm:text-lg font-bold text-green-600">${card.monthlyRewards}</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-xs text-gray-500">Last Activity</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">{card.lastTransaction}</p>
                </div>
              </div>

              {/* Expandable Card Controls */}
              <div className="space-y-3">
                <button
                  onClick={() => setExpandedCard(expandedCard === card._id ? null : card._id)}
                  className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">Card Controls</span>
                  {expandedCard === card._id ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>

                {expandedCard === card._id && (
                  <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Status</span>
                      <button
                        onClick={() => toggleCardStatus(card._id)}
                        disabled={isLoading}
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          card.isActive
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-red-100 text-red-700 hover:bg-red-200"
                        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {card.isActive ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                        <span>{card.isActive ? "Active" : "Inactive"}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Security</span>
                      <button
                        onClick={() => toggleCardFreeze(card._id)}
                        disabled={isLoading}
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          card.isFrozen
                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {card.isFrozen ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                        <span>{card.isFrozen ? "Frozen" : "Active"}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Spending Limit</span>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-3 h-3 text-gray-400" />
                        <input
                          type="number"
                          value={card.spendingLimit}
                          onChange={(e) => updateSpendingLimit(card._id, Number.parseFloat(e.target.value) || 0)}
                          className="w-20 text-xs text-right border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min="0"
                          step="100"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons - Only visible when unlocked */}
              <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedSlug(getCardSlugByName(card.name));
                    setShowDepositModal(true);
                  }}
                  className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all group"
                >
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">Activity</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedSlug(getCardSlugByName(card.name));
                    setShowDepositModal(true);
                  }}
                  className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all group"
                >
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-xs font-medium text-purple-700">Settings</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedSlug(getCardSlugByName(card.name));
                    setShowDepositModal(true);
                  }}
                  className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl hover:from-green-100 hover:to-green-200 transition-all group"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="text-xs font-medium text-green-700">Rewards</span>
                </button>
              </div>
            </>
          ) : (
            /* Locked Card Content */
            <div className="space-y-4 opacity-40">
              {/* Blurred/Locked Spending Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 blur-sm">Daily Spending</span>
                  <span className="text-xs sm:text-sm text-gray-500 blur-sm">••• / •••</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 blur-sm">
                  <div className="bg-gray-400 h-2 rounded-full w-1/3"></div>
                </div>
              </div>

              {/* Locked Quick Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl blur-sm">
                  <p className="text-xs text-gray-500">Monthly Rewards</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-600">$•••</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl blur-sm">
                  <p className="text-xs text-gray-500">Last Activity</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">••••••</p>
                </div>
              </div>

              {/* Locked Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-gray-100">
                {[Activity, Settings, Zap].map((Icon, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-1 p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl cursor-not-allowed"
                  >
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">Locked</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Unlock Status Badge */}
        {isCardUnlocked(card._id) && (
          <div className="absolute top-2 right-2 bg-green-500 text-white p-1.5 rounded-full shadow-lg z-10">
            <Unlock className="w-3 h-3" />
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Enhanced Unlock Modal */}
  {showUnlockModal && selectedCardForUnlock && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform transition-all">
        <button
          onClick={() => setShowUnlockModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Deposit Required</h2>
          <p className="text-gray-600">
            Unlock your <span className="font-semibold text-gray-900">{selectedCardForUnlock.name}</span> card
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 font-medium">Security Deposit</span>
            <span className="text-3xl font-bold text-gray-900">
              ${selectedCardForUnlock.type === 'Physical' ? '500' : '100'}
            </span>
          </div>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% refundable after activation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Instant card activation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Full access to premium features</span>
            </div>
          </div>
        </div>

        <button
          onClick={unlockCard}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Unlock Now - ${selectedCardForUnlock.type === 'Physical' ? '500' : '100'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure payment • SSL encrypted • Money-back guarantee
        </p>
      </div>
    </div>
  )}

  {/* Your existing deposit modal */}
  {showDepositModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl relative">
        <button
          onClick={() => setShowDepositModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Security Deposit Required</h2>
        <p className="text-sm text-gray-600 mb-4">
          To unlock and use this card, you need to pay a security deposit:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
          <li>$100 for virtual cards</li>
          <li>$500 for physical cards</li>
          {/* <li>Fully refundable after activation</li> */}
        </ul>
        <button
          onClick={() => {
            navigate("/call-to-action", { state: { cardSlug: selectedSlug } });
          }}
          className="w-full bg-[#0d0011] text-white px-6 py-2 rounded-xl hover:bg-[#1a001f] transition"
        >
          Unlock Now
        </button>
      </div>
    </div>
  )}

  {filteredCards.length === 0 && (
    <div className="text-center py-12">
      <CardIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No cards found</h3>
      <p className="text-gray-500 mb-4">
        {cards.length === 0
          ? "Connect your wallet and click 'Seed Database' to create sample cards"
          : "Try adjusting your search or filter criteria"}
      </p>
      {cards.length === 0 && (
        <button
          onClick={seedDatabase}
          disabled={isLoading}
          className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 mx-auto"
        >
          <Database className="w-5 h-5" />
          <span>Seed Database</span>
        </button>
      )}
    </div>
  )}
</div>


        {/* Enhanced Dynamic Quick Actions */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Quick Actions</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              {
                icon: Plus,
                label: "Add Card",
                color: "from-blue-500 to-cyan-500",
                description: "Create new virtual card",
                badge: "New",
                badgeColor: "bg-blue-500",
                action: () => {
                  setShowCardCreationModal(true)
                  addNotification("info", "Opening card creation wizard...")
                },
                enabled: true,
                stats: `${cards.length}/10 cards`,
              },
              {
                icon: TrendingUp,
                label: "Analytics",
                color: "from-green-500 to-emerald-500",
                description: "View spending insights",
                badge: totalDailySpent > 0 ? `$${totalDailySpent.toFixed(0)}` : "0",
                badgeColor: "bg-green-500",
                action: () => {
                  setShowAnalyticsModal(true)
                  addNotification("success", "Loading analytics dashboard...")
                },
                enabled: cards.length > 0,
                stats: `${cards.filter((c) => c.transactions.length > 0).length} active`,
              },
              {
                icon: Shield,
                label: "Security",
                color: "from-purple-500 to-violet-500",
                description: "Manage card security",
                badge:
                  cards.filter((c) => c.isFrozen).length > 0 ? `${cards.filter((c) => c.isFrozen).length}` : "Safe",
                badgeColor: cards.filter((c) => c.isFrozen).length > 0 ? "bg-yellow-500" : "bg-green-500",
                action: () => {
                  setShowSecurityModal(true)
                  addNotification("info", "Opening security center...")
                },
                enabled: cards.length > 0,
                stats: `${cards.filter((c) => c.isActive).length}/${cards.length} active`,
              },
              {
                icon: Settings,
                label: "Settings",
                color: "from-gray-500 to-slate-500",
                description: "Account preferences",
                badge: "Config",
                badgeColor: "bg-gray-500",
                action: () => {
                  setShowSettingsModal(true)
                  addNotification("info", "Opening settings panel...")
                },
                enabled: true,
                stats: selectedPlan,
              },
              {
                icon: Download,
                label: "Export",
                color: "from-orange-500 to-red-500",
                description: "Download transaction data",
                badge: "JSON",
                badgeColor: "bg-orange-500",
                action: handleExportData,
                enabled: cards.length > 0,
                stats: `${cards.reduce((sum, card) => sum + card.transactions.length, 0)} txns`,
              },
              {
                icon: Share2,
                label: "Share",
                color: "from-pink-500 to-rose-500",
                description: "Share dashboard stats",
                badge: "Social",
                badgeColor: "bg-pink-500",
                action: handleShareData,
                enabled: true,
                stats: `$${totalCardBalance.toFixed(0)} total`,
              },
            ].map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                disabled={!action.enabled}
                className={`relative flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-100 transition-all duration-300 group ${
                  action.enabled ? "hover:shadow-lg hover:scale-[1.02] cursor-pointer" : "opacity-50 cursor-not-allowed"
                }`}
                title={action.description}
              >
                {/* Badge */}
                <div
                  className={`absolute -top-2 -right-2 ${action.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg`}
                >
                  {action.badge}
                </div>

                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${action.color} rounded-lg sm:rounded-xl flex items-center justify-center transition-transform duration-300 ${
                    action.enabled ? "group-hover:scale-110 group-hover:rotate-3" : ""
                  }`}
                >
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Label */}
                <span
                  className={`text-xs sm:text-sm font-medium text-center transition-colors ${
                    action.enabled ? "text-gray-700 group-hover:text-gray-900" : "text-gray-400"
                  }`}
                >
                  {action.label}
                </span>

                {/* Stats */}
                <span className="text-xs text-gray-500 text-center font-mono">{action.stats}</span>

                {/* Hover Effect */}
                {action.enabled && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* Quick Stats Bar */}
          <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Total Cards</p>
                <p className="text-lg font-bold text-gray-900">{cards.length}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Active Cards</p>
                <p className="text-lg font-bold text-green-600">{activeCards}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Today's Spending</p>
                <p className="text-lg font-bold text-orange-600">${totalDailySpent.toFixed(2)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Monthly Rewards</p>
                <p className="text-lg font-bold text-purple-600">${totalMonthlyRewards.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Payment Confirmation Modal */}
      {showPaymentModal && selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Confirm Payment</h3>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 text-white`}>
                <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
                <p className="text-sm opacity-90">{selectedCard.cardNumber}</p>
                <p className="text-lg font-bold mt-2">Balance: ${selectedCard.balance.toFixed(2)}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Merchant</span>
                  <input
                    type="text"
                    value={paymentMerchant}
                    onChange={(e) => setPaymentMerchant(e.target.value)}
                    className="text-sm font-bold text-gray-900 bg-transparent border-none outline-none text-right"
                    placeholder="Enter merchant name"
                  />
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Amount</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">$</span>
                    <input
                      type="number"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(Number.parseFloat(e.target.value) || 0)}
                      className="text-lg font-bold text-gray-900 bg-transparent border-none outline-none text-right w-20"
                      min="0.01"
                      step="0.01"
                      max={selectedCard.balance}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-700">Cashback ({selectedCard.cashback}%)</span>
                  <span className="text-sm font-bold text-blue-900">
                    +${((paymentAmount * selectedCard.cashback) / 100).toFixed(2)}
                  </span>
                </div>

                {paymentAmount > selectedCard.balance && (
                  <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-700">Insufficient balance</span>
                  </div>
                )}

                {selectedCard.dailySpent + paymentAmount > selectedCard.spendingLimit && (
                  <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-yellow-700">Daily limit will be exceeded</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmPayment}
                  disabled={
                    processingPayment ||
                    paymentAmount <= 0 ||
                    paymentAmount > selectedCard.balance ||
                    !selectedCard.isActive ||
                    selectedCard.isFrozen ||
                    !paymentMerchant.trim()
                  }
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processingPayment ? "Processing..." : `Pay $${paymentAmount.toFixed(2)}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Responsive Modals */}
      {showCardModal && selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Settings</h3>
                <button
                  onClick={() => setShowCardModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className={`bg-gradient-to-r ${selectedCard.color} rounded-xl p-4 sm:p-6 text-white`}>
                <h4 className="text-lg font-bold mb-2">{selectedCard.name}</h4>
                <p className="text-sm opacity-90 mb-4">{selectedCard.cardNumber}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs opacity-75">Balance</p>
                    <p className="text-lg font-bold">${selectedCard.balance.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-75">Cashback Rate</p>
                    <p className="text-lg font-bold">{selectedCard.cashback}%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900">Card Features</h5>
                <div className="grid gap-2">
                  {selectedCard.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => {
                    toggleCardStatus(selectedCard._id)
                    setShowCardModal(false)
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
                    selectedCard.isActive
                      ? "bg-red-100 text-red-700 hover:bg-red-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {selectedCard.isActive ? "Deactivate Card" : "Activate Card"}
                </button>
                <button
                  onClick={() => {
                    toggleCardFreeze(selectedCard._id)
                    setShowCardModal(false)
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
                    selectedCard.isFrozen
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  }`}
                >
                  {selectedCard.isFrozen ? "Unfreeze Card" : "Freeze Card"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTransactionModal && selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedCard.name} Transactions</h3>
                <button
                  onClick={() => setShowTransactionModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {selectedCard.transactions.map((transaction) => {
                  const IconComponent = getCategoryIcon(transaction.category)
                  return (
                    <div
                      key={transaction.id}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          transaction.type === "purchase"
                            ? "bg-red-100"
                            : transaction.type === "reward"
                              ? "bg-green-100"
                              : "bg-blue-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-5 h-5 ${
                            transaction.type === "purchase"
                              ? "text-red-600"
                              : transaction.type === "reward"
                                ? "text-green-600"
                                : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{transaction.merchant}</p>
                        <p className="text-sm text-gray-500">{transaction.time}</p>
                        {transaction.status && (
                          <p className="text-xs text-green-600 capitalize">{transaction.status}</p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-gray-900"}`}>
                          {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
                      </div>
                    </div>
                  )
                })}
                {selectedCard.transactions.length === 0 && (
                  <div className="text-center py-8">
                    <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No transactions yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showPlanModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Choose Your Plan</h3>
                <button
                  onClick={() => setShowPlanModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                      plan.popular
                        ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    } ${selectedPlan === plan.id ? "ring-4 ring-purple-200" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-4 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${plan.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                      >
                        {plan.id === "basic" && <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                        {plan.id === "premium" && <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                        {plan.id === "platinum" && <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                        ${plan.price}
                        <span className="text-sm font-normal text-gray-500">/month</span>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => upgradePlan(plan.id)}
                      disabled={isLoading || selectedPlan === plan.id}
                      className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? "bg-green-100 text-green-700 cursor-default"
                          : plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {selectedPlan === plan.id ? "Current Plan" : `Upgrade to ${plan.name}`}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Responsive Notifications Panel */}
      {showNotificationPanel && (
        <div className="fixed top-14 sm:top-16 right-4 w-80 sm:w-96 bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 z-40 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearAllNotifications}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowNotificationPanel(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {notifications.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">No notifications</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markNotificationAsRead(notification.id)}
                  className={`flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    notification.read ? "bg-gray-50" : "bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      notification.type === "success"
                        ? "bg-green-500"
                        : notification.type === "warning"
                          ? "bg-yellow-500"
                          : notification.type === "error"
                            ? "bg-red-500"
                            : "bg-blue-500"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${notification.read ? "text-gray-600" : "text-gray-900 font-medium"}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <span className="text-gray-700 text-sm sm:text-base">Processing...</span>
            </div>
          </div>
        </div>
      )}

      {/* Card Creation Modal */}
      {showCardCreationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Create New Card</h3>
                <button
                  onClick={() => setShowCardCreationModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Card Creation Wizard</h4>
              <p className="text-gray-600 mb-6">
                This feature will allow you to create custom virtual cards with personalized settings.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Custom card names and designs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Configurable spending limits</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Multiple cashback rates</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowCardCreationModal(false)
                  addNotification("info", "Card creation feature coming soon!")
                }}
                className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Spending Analytics</h3>
                <button
                  onClick={() => setShowAnalyticsModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Total Spending</h4>
                  <p className="text-2xl font-bold text-green-900">${totalDailySpent.toFixed(2)}</p>
                  <p className="text-sm text-green-600">Today</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-2">Rewards Earned</h4>
                  <p className="text-2xl font-bold text-purple-900">${totalMonthlyRewards.toFixed(2)}</p>
                  <p className="text-sm text-purple-600">This month</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900">Card Performance</h5>
                {cards.map((card) => (
                  <div key={card._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{card.name}</p>
                        <p className="text-sm text-gray-500">{card.transactions.length} transactions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${card.dailySpent.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">spent today</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Security Center</h3>
                <button
                  onClick={() => setShowSecurityModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Active Cards</span>
                </div>
                <span className="text-green-900 font-bold">{activeCards}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Frozen Cards</span>
                </div>
                <span className="text-yellow-900 font-bold">{cards.filter((c) => c.isFrozen).length}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-800">Inactive Cards</span>
                </div>
                <span className="text-red-900 font-bold">{cards.filter((c) => !c.isActive).length}</span>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-3">Quick Security Actions</h5>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      cards.forEach((card) => {
                        if (card.isActive && !card.isFrozen) {
                          toggleCardFreeze(card._id)
                        }
                      })
                      setShowSecurityModal(false)
                      addNotification("warning", "All active cards have been frozen for security")
                    }}
                    className="w-full py-2 px-4 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
                  >
                    Freeze All Active Cards
                  </button>
                  <button
                    onClick={() => {
                      setShowSecurityModal(false)
                      addNotification("info", "Security audit feature coming soon!")
                    }}
                    className="w-full py-2 px-4 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    Run Security Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Settings</h3>
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Show Balance</span>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className={`w-12 h-6 rounded-full transition-colors ${showBalance ? "bg-green-500" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${showBalance ? "translate-x-6" : "translate-x-1"}`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Current Plan</span>
                <button
                  onClick={() => {
                    setShowSettingsModal(false)
                    setShowPlanModal(true)
                  }}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  {selectedPlan}
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-3">Account Actions</h5>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleRefresh()
                      setShowSettingsModal(false)
                    }}
                    className="w-full py-2 px-4 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh Data</span>
                  </button>
                  <button
                    onClick={() => {
                      handleExportData()
                      setShowSettingsModal(false)
                    }}
                    className="w-full py-2 px-4 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Data</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResponsiveWalletDashboard
