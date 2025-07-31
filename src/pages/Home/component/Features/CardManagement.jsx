import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  ArrowUpRight, Banknote, Calendar, CreditCard as CardIcon, Landmark, LineChart,
  Lock, RefreshCw, PiggyBank, Gift, BarChart2, Shield, AlertTriangle, ChevronLeft,
  ChevronRight, Download, Filter, Search, Trash2, DollarSign, Clock, CheckCircle2, 
  X, ArrowLeft, Bell, Wallet, Settings, User, Home
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Card Management System - All functionality in one file
function CardManagement() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [card, setCard] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [statements, setStatements] = useState([]);
  const [payments, setPayments] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [paymentDate, setPaymentDate] = useState(getTodayDate());
  const [filterMonth, setFilterMonth] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [spendingData, setSpendingData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [confirmationAction, setConfirmationAction] = useState(null);

  // Fetch card and related data
  useEffect(() => {
    setIsLoading(true);
    // Simulate API loading delay
    setTimeout(() => {
      const storedCards = localStorage.getItem("creditCards");
      if (storedCards) {
        const cards = JSON.parse(storedCards);
        const foundCard = cards.find(c => c.id === cardId);
        
        if (foundCard) {
          setCard(foundCard);
          
          // Fetch related data
          const storedTransactions = localStorage.getItem("cardTransactions");
          const parsedTransactions = storedTransactions ? 
            JSON.parse(storedTransactions).filter(t => t.cardId === cardId) : [];
          setTransactions(parsedTransactions);
          
          const storedStatements = localStorage.getItem("cardStatements");
          const parsedStatements = storedStatements ? 
            JSON.parse(storedStatements).filter(s => s.cardId === cardId) : [];
          setStatements(parsedStatements);
          
          const storedPayments = localStorage.getItem("cardPayments");
          const parsedPayments = storedPayments ? 
            JSON.parse(storedPayments).filter(p => p.cardId === cardId) : [];
          setPayments(parsedPayments);
          
          const storedAlerts = localStorage.getItem("cardAlerts");
          const parsedAlerts = storedAlerts ? 
            JSON.parse(storedAlerts).filter(a => a.cardId === cardId) : [];
          setAlerts(parsedAlerts);
          
          // Generate spending data for charts
          generateSpendingData(parsedTransactions);
        } else {
          navigate("/card-management");
        }
      } else {
        // If no cards exist, create sample data
        generateSampleData();
      }
      
      setIsLoading(false);
    }, 1000);
  }, [cardId, navigate]);

  // Helper function to get today's date in YYYY-MM-DD format
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Generate sample data if none exists
  function generateSampleData() {
    const newCard = {
      id: "sample-card-1",
      cardNumber: "4111 1111 1111 1111",
      cardholderName: "John Doe",
      expiryDate: "05/25",
      cvv: "123",
      cardType: "visa",
      issuer: "Premier Bank",
      creditLimit: 5000,
      availableCredit: 3500,
      balance: 1500,
      dueDate: "2025-06-15",
      minimumPayment: 35,
      apr: 17.99,
      rewards: {
        cashback: 25.5,
        points: 1500,
        miles: 0
      },
      isActive: true,
      isFrozen: false,
      lastFourDigits: "1111",
      createdAt: "2023-01-15"
    };
    
    const sampleTransactions = [
      {
        id: "tx-1",
        cardId: "sample-card-1",
        date: "2025-05-20",
        merchant: "Amazon",
        amount: 49.99,
        category: "Shopping",
        status: "posted",
        description: "Amazon Prime Subscription"
      },
      {
        id: "tx-2",
        cardId: "sample-card-1",
        date: "2025-05-18",
        merchant: "Starbucks",
        amount: 5.75,
        category: "Food & Dining",
        status: "posted",
        description: "Coffee"
      },
      {
        id: "tx-3",
        cardId: "sample-card-1",
        date: "2025-05-15",
        merchant: "Netflix",
        amount: 14.99,
        category: "Entertainment",
        status: "posted",
        description: "Monthly Subscription"
      }
    ];
    
    const sampleStatements = [
      {
        id: "stmt-1",
        cardId: "sample-card-1",
        startDate: "2025-04-16",
        endDate: "2025-05-15",
        balance: 1500,
        minimumPayment: 35,
        dueDate: "2025-06-15",
        isPaid: false
      }
    ];
    
    const samplePayments = [
      {
        id: "pmt-1",
        cardId: "sample-card-1",
        amount: 50,
        date: "2025-05-10",
        method: "bank",
        status: "completed"
      }
    ];
    
    const sampleAlerts = [
      {
        id: "alert-1",
        cardId: "sample-card-1",
        type: "payment",
        message: "Your payment due date is approaching. Minimum payment of $35.00 due by June 15.",
        date: "2025-06-01",
        read: false
      }
    ];

    // Save to localStorage
    localStorage.setItem("creditCards", JSON.stringify([newCard]));
    localStorage.setItem("cardTransactions", JSON.stringify(sampleTransactions));
    localStorage.setItem("cardStatements", JSON.stringify(sampleStatements));
    localStorage.setItem("cardPayments", JSON.stringify(samplePayments));
    localStorage.setItem("cardAlerts", JSON.stringify(sampleAlerts));
    
    // Set state
    setCard(newCard);
    setTransactions(sampleTransactions);
    setStatements(sampleStatements);
    setPayments(samplePayments);
    setAlerts(sampleAlerts);
    
    // Generate spending data for charts
    generateSpendingData(sampleTransactions);
  }

  // Generate spending data for charts
  function generateSpendingData(transactions) {
    // By category
    const categorySpending = {};
    transactions.forEach(tx => {
      if (categorySpending[tx.category]) {
        categorySpending[tx.category] += tx.amount;
      } else {
        categorySpending[tx.category] = tx.amount;
      }
    });
    
    // By month
    const monthlySpending = {};
    transactions.forEach(tx => {
      const month = tx.date.substring(0, 7); // YYYY-MM
      if (monthlySpending[month]) {
        monthlySpending[month] += tx.amount;
      } else {
        monthlySpending[month] = tx.amount;
      }
    });
    
    setSpendingData({
      byCategory: categorySpending,
      byMonth: monthlySpending
    });
  }

  // Toggle card freeze status
  function toggleFreeze() {
    if (!card) return;
    
    const updatedCard = { ...card, isFrozen: !card.isFrozen };
    
    // Update localStorage
    const storedCards = localStorage.getItem("creditCards");
    if (storedCards) {
      const cards = JSON.parse(storedCards);
      const index = cards.findIndex(c => c.id === card.id);
      if (index !== -1) {
        cards[index] = updatedCard;
        localStorage.setItem("creditCards", JSON.stringify(cards));
        setCard(updatedCard);
        
        // Add an alert
        const newAlert = {
          id: crypto.randomUUID(),
          cardId: card.id,
          type: "security",
          message: `Your card has been ${updatedCard.isFrozen ? 'frozen' : 'unfrozen'}.`,
          date: new Date().toISOString(),
          read: false
        };
        
        const storedAlerts = localStorage.getItem("cardAlerts");
        const alerts = storedAlerts ? JSON.parse(storedAlerts) : [];
        alerts.push(newAlert);
        localStorage.setItem("cardAlerts", JSON.stringify(alerts));
        
        // Add the new alert to local state
        setAlerts(prevAlerts => [...prevAlerts, newAlert]);
        
        // Show confirmation
        setConfirmationMessage(`Card successfully ${updatedCard.isFrozen ? 'frozen' : 'unfrozen'}.`);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 3000);
      }
    }
  }

  // Handle making a payment
  function handleMakePayment(e) {
    e.preventDefault();
    
    if (!paymentAmount || isNaN(parseFloat(paymentAmount)) || parseFloat(paymentAmount) <= 0) {
      alert("Please enter a valid payment amount.");
      return;
    }
    
    const amount = parseFloat(paymentAmount);
    
    // Create new payment
    const newPayment = {
      id: crypto.randomUUID(),
      cardId: card.id,
      amount: amount,
      date: paymentDate,
      method: paymentMethod,
      status: "scheduled"
    };
    
    // Update localStorage
    const storedPayments = localStorage.getItem("cardPayments");
    const payments = storedPayments ? JSON.parse(storedPayments) : [];
    payments.push(newPayment);
    localStorage.setItem("cardPayments", JSON.stringify(payments));
    
    // Add the new payment to local state
    setPayments(prevPayments => [...prevPayments, newPayment]);
    
    // Reset form
    setPaymentAmount("");
    setPaymentMethod("bank");
    setPaymentDate(getTodayDate());
    setShowPaymentForm(false);
    
    // Show confirmation
    setConfirmationMessage(`Payment of $${amount.toFixed(2)} scheduled for ${formatDate(paymentDate)}.`);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  }

  // Format date for display
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Format currency
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  // Mask card number for display
  function formatCardNumber(cardNumber) {
    if (!cardNumber) return '';
    const lastFour = cardNumber.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  }

  // Filtered transactions based on search and filter month
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tx.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMonth = filterMonth === "all" || tx.date.startsWith(filterMonth);
    
    return matchesSearch && matchesMonth;
  });

  // Get color for card based on type
  function getCardGradient(cardType) {
    switch (cardType) {
      case 'visa':
        return 'from-blue-600 to-blue-900';
      case 'mastercard':
        return 'from-red-600 to-amber-600';
      case 'amex':
        return 'from-teal-600 to-cyan-900';
      case 'discover':
        return 'from-orange-500 to-amber-700';
      default:
        return 'from-gray-700 to-gray-900';
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin mb-4 h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full mx-auto"></div>
          <p className="text-gray-500">Loading card details...</p>
        </div>
      </div>
    );
  }

  // If no card found
  if (!card) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <CardIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Card Not Found</h2>
          <p className="text-gray-500 mb-6">The requested credit card could not be found.</p>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => navigate("/dashboard-for-user")}
          >
            Go to Cards
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around">
          <button 
            className={`flex flex-col items-center py-2 flex-1 ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            className={`flex flex-col items-center py-2 flex-1 ${activeTab === 'transactions' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('transactions')}
          >
            <CardIcon size={20} />
            <span className="text-xs mt-1">Transactions</span>
          </button>
          <button 
            className={`flex flex-col items-center py-2 flex-1 ${activeTab === 'payments' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('payments')}
          >
            <Wallet size={20} />
            <span className="text-xs mt-1">Payments</span>
          </button>
          <button 
            className={`flex flex-col items-center py-2 flex-1 ${activeTab === 'rewards' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('rewards')}
          >
            <Gift size={20} />
            <span className="text-xs mt-1">Rewards</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="mr-4 text-gray-700 hover:text-gray-900"
              onClick={() => navigate("/cards")}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl font-bold">{card.issuer} Card</h1>
              <p className="text-sm text-gray-500">
                {card.cardType.charAt(0).toUpperCase() + card.cardType.slice(1)} •••• {card.lastFourDigits}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 relative">
              <Bell size={20} />
              {alerts.some(alert => !alert.read) && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            
            <button 
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Desktop tab navigation */}
        <div className="border-b border-gray-200 hidden md:block">
          <div className="container mx-auto px-4">
            <nav className="flex -mb-px">
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'transactions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'payments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('payments')}
              >
                Payments
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'statements'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('statements')}
              >
                Statements
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rewards'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('rewards')}
              >
                Rewards
              </button>
              <button
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6 pb-20 md:pb-6">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Card Visual */}
            <div className="relative w-full max-w-md mx-auto h-56 my-8">
              <motion.div
                className="w-full h-full" 
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute w-full h-full rounded-xl p-6 shadow-xl 
                  ${isFlipped ? 'backface-hidden' : ''}
                  bg-gradient-to-br ${getCardGradient(card.cardType)}`}
                >
                  <div className="flex justify-between items-start text-white">
                    <div>
                      <p className="text-sm opacity-80">{card.issuer}</p>
                      <p className="mt-4 text-xl font-mono tracking-wider">
                        {formatCardNumber(card.cardNumber)}
                      </p>
                    </div>
                    <div>
                      <div className="bg-white/20 px-2 py-1 rounded-md text-xs font-medium text-white">
                        {card.cardType.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs opacity-70">CARD HOLDER</p>
                        <p className="font-medium">{card.cardholderName}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-70">EXPIRES</p>
                        <p className="font-medium">{card.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  {card.isFrozen && (
                    <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center rounded-xl">
                      <div className="bg-white/90 px-4 py-2 rounded-md transform rotate-12">
                        <p className="text-blue-900 font-bold text-xl">CARD FROZEN</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Back of card */}
                <div 
                  className="absolute w-full h-full rounded-xl shadow-xl backface-hidden bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="h-12 bg-black mt-10"></div>
                  <div className="px-6 mt-6">
                    <div className="flex justify-end mb-2">
                      <div className="bg-white/80 h-10 w-16 rounded flex items-center justify-center">
                        {showCVV ? (
                          <span className="font-mono">{card.cvv}</span>
                        ) : (
                          <span className="font-mono">***</span>
                        )}
                      </div>
                    </div>
                    <div className="bg-white/10 h-10 rounded-md"></div>
                    <div className="mt-8 text-white text-center text-xs opacity-70">
                      <p>For customer service, call the number on the front of your card.</p>
                      <p className="mt-1">This card is subject to the terms and conditions of your agreement.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button 
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <RefreshCw className="mr-1.5 h-4 w-4" />
                Flip Card
              </button>
              
              {isFlipped && (
                <button 
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                  onClick={() => setShowCVV(!showCVV)}
                >
                  {showCVV ? (
                    <>
                      <Shield className="mr-1.5 h-4 w-4" />
                      Hide CVV
                    </>
                  ) : (
                    <>
                      <Shield className="mr-1.5 h-4 w-4" />
                      Show CVV
                    </>
                  )}
                </button>
              )}
              
              <button 
                className={`px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium
                  ${card.isFrozen ? 'text-blue-600 hover:bg-blue-50' : 'text-red-600 hover:bg-red-50'}
                  flex items-center`}
                onClick={toggleFreeze}
              >
                {card.isFrozen ? (
                  <>
                    <RefreshCw className="mr-1.5 h-4 w-4" />
                    Unfreeze Card
                  </>
                ) : (
                  <>
                    <Lock className="mr-1.5 h-4 w-4" />
                    Freeze Card
                  </>
                )}
              </button>
            </div>

            {/* Card Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Current Balance</p>
                <p className="text-2xl font-bold mt-1">{formatCurrency(card.balance)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Min payment: {formatCurrency(card.minimumPayment)} due {card.dueDate}
                </p>
                
                <div className="mt-3">
                  <button 
                    className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    onClick={() => {
                      setShowPaymentForm(true);
                      setPaymentAmount(card.minimumPayment.toString());
                    }}
                  >
                    Make a Payment
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Available Credit</p>
                <p className="text-2xl font-bold mt-1">{formatCurrency(card.availableCredit)}</p>
                
                <div className="mt-2">
                  {/* Credit utilization progress bar */}
                  <div className="flex justify-between text-xs mb-1">
                    <span>Credit utilization ({Math.round((card.balance / card.creditLimit) * 100)}%)</span>
                    <span className={
                      (card.balance / card.creditLimit) < 0.3 ? 'text-green-600' :
                      (card.balance / card.creditLimit) < 0.7 ? 'text-amber-600' : 'text-red-600'
                    }>
                      {(card.balance / card.creditLimit) < 0.3 ? 'Good' :
                       (card.balance / card.creditLimit) < 0.7 ? 'Moderate' : 'High'}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        (card.balance / card.creditLimit) < 0.3 ? 'bg-green-500' :
                        (card.balance / card.creditLimit) < 0.7 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(100, (card.balance / card.creditLimit) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  Credit Limit: {formatCurrency(card.creditLimit)}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500">Rewards</p>
                
                <div className="space-y-2 mt-2">
                  {card.rewards.cashback > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm">Cashback:</span>
                      <span className="font-medium">{formatCurrency(card.rewards.cashback)}</span>
                    </div>
                  )}
                  
                  {card.rewards.points > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm">Points:</span>
                      <span className="font-medium">{card.rewards.points.toLocaleString()}</span>
                    </div>
                  )}
                  
                  {card.rewards.miles > 0 && (
                    <div className="flex justify-between">
                      <span className="text-sm">Miles:</span>
                      <span className="font-medium">{card.rewards.miles.toLocaleString()}</span>
                    </div>
                  )}
                  
                  {card.rewards.cashback === 0 && card.rewards.points === 0 && card.rewards.miles === 0 && (
                    <p className="text-sm text-gray-500">No rewards earned yet</p>
                  )}
                </div>
                
                {(card.rewards.cashback > 0 || card.rewards.points > 0 || card.rewards.miles > 0) && (
                  <div className="mt-3">
                    <button 
                      className="w-full py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200"
                      onClick={() => setActiveTab('rewards')}
                    >
                      Redeem Rewards
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-6">
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-semibold">Recent Transactions</h2>
                <button 
                  className="text-blue-600 text-sm font-medium flex items-center"
                  onClick={() => setActiveTab('transactions')}
                >
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="divide-y divide-gray-100">
                {transactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="px-4 py-3 flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <CardIcon className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.merchant}</p>
                        <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
                          {transaction.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs
                        ${transaction.status === 'pending' 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-green-100 text-green-700'}`}
                      >
                        {transaction.status === 'pending' ? 'Pending' : 'Posted'}
                      </span>
                    </div>
                  </div>
                ))}
                
                {transactions.length === 0 && (
                  <div className="px-4 py-6 text-center text-gray-500">
                    No recent transactions
                  </div>
                )}
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-6">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h2 className="font-semibold">Alerts & Notifications</h2>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`px-4 py-3 ${!alert.read ? 'bg-blue-50' : ''}`}>
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full mr-3 ${
                          alert.type === 'payment' ? 'bg-blue-100 text-blue-600' :
                          alert.type === 'security' ? 'bg-red-100 text-red-600' :
                          alert.type === 'reward' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {alert.type === 'payment' ? <Banknote className="h-4 w-4" /> :
                           alert.type === 'security' ? <AlertTriangle className="h-4 w-4" /> :
                           alert.type === 'reward' ? <Gift className="h-4 w-4" /> :
                           <Bell className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{
                              alert.type === 'payment' ? 'Payment Reminder' :
                              alert.type === 'security' ? 'Security Alert' :
                              alert.type === 'reward' ? 'Reward Update' :
                              'Special Offer'
                            }</p>
                            <p className="text-xs text-gray-500">{formatDate(alert.date)}</p>
                          </div>
                          <p className="text-sm mt-1">{alert.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold mb-3">Transactions</h2>
                
                {/* Search and filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">
                      <Search className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <select
                      className="pl-3 pr-8 py-2 border border-gray-300 rounded-md bg-white"
                      value={filterMonth}
                      onChange={(e) => setFilterMonth(e.target.value)}
                    >
                      <option value="all">All Time</option>
                      <option value="2025-05">May 2025</option>
                      <option value="2025-04">April 2025</option>
                      <option value="2025-03">March 2025</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Transaction list */}
              <div className="divide-y divide-gray-100">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <div key={transaction.id} className="px-4 py-4 flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="p-2 bg-gray-100 rounded-full mr-3">
                          <CardIcon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.merchant}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{transaction.description}</p>
                          <div className="flex items-center mt-1.5">
                            <span className="text-xs text-gray-500 mr-2">{formatDate(transaction.date)}</span>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
                              {transaction.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(transaction.amount)}</p>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs
                          ${transaction.status === 'pending' 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-green-100 text-green-700'}`}
                        >
                          {transaction.status === 'pending' ? 'Pending' : 'Posted'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <Search className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No transactions found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">Payments</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Minimum payment of {formatCurrency(card.minimumPayment)} due by {formatDate(card.dueDate)}
                  </p>
                </div>
                
                <button 
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center justify-center"
                  onClick={() => {
                    setShowPaymentForm(true);
                    setPaymentAmount(card.minimumPayment.toString());
                  }}
                >
                  <DollarSign className="h-4 w-4 mr-1.5" />
                  Make a Payment
                </button>
              </div>
              
              {/* Payment list */}
              <div className="divide-y divide-gray-100">
                {payments.length > 0 ? (
                  payments.map((payment) => (
                    <div key={payment.id} className="px-4 py-4 flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="p-2 bg-gray-100 rounded-full mr-3">
                          <Landmark className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {payment.method === 'bank' ? 'Bank Payment' : 
                             payment.method === 'debit' ? 'Debit Card Payment' : 'Other Payment'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{formatDate(payment.date)}</p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Payment {payment.status === 'completed' ? 'processed on ' : 'scheduled for '} 
                            {formatDate(payment.date)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{formatCurrency(payment.amount)}</p>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs
                          ${payment.status === 'scheduled' ? 'bg-blue-100 text-blue-700' : 
                            payment.status === 'processing' ? 'bg-amber-100 text-amber-700' : 
                            'bg-green-100 text-green-700'}`}
                        >
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <Banknote className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No payment history</h3>
                    <p className="text-gray-500">You haven't made any payments yet.</p>
                    <button 
                      className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                      onClick={() => {
                        setShowPaymentForm(true);
                        setPaymentAmount(card.minimumPayment.toString());
                      }}
                    >
                      Make Your First Payment
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Autopay setup card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Set Up Automatic Payments</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Never miss a payment. Set up autopay to automatically pay your bill every month.
                  </p>
                  <button 
                    className="mt-3 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                  >
                    Set Up Autopay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statements Tab */}
        {activeTab === 'statements' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Monthly Statements</h2>
              </div>
              
              {/* Statement list */}
              <div className="divide-y divide-gray-100">
                {statements.length > 0 ? (
                  statements.map((statement) => (
                    <div key={statement.id} className="px-4 py-4 flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="p-2 bg-gray-100 rounded-full mr-3">
                          <Calendar className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Statement Period: {formatDate(statement.startDate)} - {formatDate(statement.endDate)}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Due date: {formatDate(statement.dueDate)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(statement.balance)}</p>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs
                          ${statement.isPaid 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-amber-100 text-amber-700'}`}
                        >
                          {statement.isPaid ? 'Paid' : 'Unpaid'}
                        </span>
                        <div className="mt-2">
                          <button className="text-blue-600 text-sm flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1" />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <Calendar className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No statements available</h3>
                    <p className="text-gray-500">Your statements will appear here once generated.</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Paperless statement signup */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Go Paperless</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Receive your statements electronically and help reduce paper waste.
                  </p>
                  <button 
                    className="mt-3 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50"
                  >
                    Sign Up for Paperless
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === 'rewards' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Your Rewards</h2>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {card.rewards.cashback > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-blue-200 rounded-full mr-2">
                          <DollarSign className="h-5 w-5 text-blue-700" />
                        </div>
                        <h3 className="font-semibold text-blue-800">Cashback</h3>
                      </div>
                      <p className="text-3xl font-bold text-blue-800">{formatCurrency(card.rewards.cashback)}</p>
                      <p className="text-sm text-blue-600 mt-1">Available for redemption</p>
                      <button className="mt-3 w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                        Redeem Cashback
                      </button>
                    </div>
                  )}
                  
                  {card.rewards.points > 0 && (
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-200 rounded-full mr-2">
                          <Gift className="h-5 w-5 text-purple-700" />
                        </div>
                        <h3 className="font-semibold text-purple-800">Points</h3>
                      </div>
                      <p className="text-3xl font-bold text-purple-800">{card.rewards.points.toLocaleString()}</p>
                      <p className="text-sm text-purple-600 mt-1">Available for redemption</p>
                      <button className="mt-3 w-full py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                        Redeem Points
                      </button>
                    </div>
                  )}
                  
                  {card.rewards.miles > 0 && (
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-amber-200 rounded-full mr-2">
                          <Wallet className="h-5 w-5 text-amber-700" />
                        </div>
                        <h3 className="font-semibold text-amber-800">Travel Miles</h3>
                      </div>
                      <p className="text-3xl font-bold text-amber-800">{card.rewards.miles.toLocaleString()}</p>
                      <p className="text-sm text-amber-600 mt-1">Available for travel</p>
                      <button className="mt-3 w-full py-2 bg-amber-600 text-white text-sm font-medium rounded-md hover:bg-amber-700">
                        Book Travel
                      </button>
                    </div>
                  )}
                  
                  {card.rewards.cashback === 0 && card.rewards.points === 0 && card.rewards.miles === 0 && (
                    <div className="col-span-3 py-8 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <Gift className="h-6 w-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No rewards yet</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Start using your card for purchases to earn rewards. Your rewards will accumulate based on your spending.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Reward categories */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Reward Categories</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <PiggyBank className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">5% Cash Back on Groceries</h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Earn 5% cash back on grocery purchases up to $500 per month.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <CardIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">3% Cash Back on Gas</h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Earn 3% cash back on gas station purchases with no limit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 rounded-full mr-3">
                      <Wallet className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">1% Cash Back on Everything Else</h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Earn 1% cash back on all other purchases with no limit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special offers */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Special Offers</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 text-white">
                    <h3 className="font-bold text-lg">Limited Time Offer</h3>
                    <p className="mt-1">
                      Earn 2x points on all restaurant purchases through July 31st.
                    </p>
                    <button className="mt-3 px-4 py-2 bg-white text-purple-600 text-sm font-medium rounded-md hover:bg-gray-100">
                      Activate Offer
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-4 text-white">
                    <h3 className="font-bold text-lg">Travel Bonus</h3>
                    <p className="mt-1">
                      Book your summer vacation with your card and get $50 statement credit.
                    </p>
                    <button className="mt-3 px-4 py-2 bg-white text-teal-600 text-sm font-medium rounded-md hover:bg-gray-100">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Spending Analytics</h2>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Spending by category */}
                  <div>
                    <h3 className="font-medium mb-3">Spending by Category</h3>
                    
                    {Object.keys(spendingData.byCategory || {}).length > 0 ? (
                      <div className="space-y-3">
                        {Object.entries(spendingData.byCategory).map(([category, amount]) => (
                          <div key={category}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{category}</span>
                              <span className="font-medium">{formatCurrency(amount)}</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={
                                  category === "Shopping" ? "bg-blue-500" :
                                  category === "Food & Dining" ? "bg-green-500" :
                                  category === "Entertainment" ? "bg-purple-500" :
                                  category === "Travel" ? "bg-amber-500" :
                                  "bg-gray-500"
                                }
                                style={{ 
                                  width: `${Math.min(100, (amount / card.balance) * 100)}%`,
                                  height: '100%'
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-6 text-center text-gray-500">
                        No spending data available
                      </div>
                    )}
                  </div>
                  
                  {/* Monthly spending */}
                  <div>
                    <h3 className="font-medium mb-3">Monthly Spending</h3>
                    
                    {Object.keys(spendingData.byMonth || {}).length > 0 ? (
                      <div className="space-y-3">
                        {Object.entries(spendingData.byMonth).map(([month, amount]) => {
                          const [year, monthNum] = month.split('-');
                          const monthName = new Date(year, monthNum - 1).toLocaleString('default', { month: 'long' });
                          
                          return (
                            <div key={month}>
                              <div className="flex justify-between text-sm mb-1">
                                <span>{monthName} {year}</span>
                                <span className="font-medium">{formatCurrency(amount)}</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="bg-blue-500 h-full"
                                  style={{ 
                                    width: `${Math.min(100, (amount / card.creditLimit) * 100)}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="py-6 text-center text-gray-500">
                        No monthly data available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Credit utilization */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Credit Utilization</h2>
              </div>
              
              <div className="p-4">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current utilization: {Math.round((card.balance / card.creditLimit) * 100)}%</span>
                    <span className={
                      (card.balance / card.creditLimit) < 0.3 ? 'text-green-600 font-medium' :
                      (card.balance / card.creditLimit) < 0.7 ? 'text-amber-600 font-medium' : 
                      'text-red-600 font-medium'
                    }>
                      {(card.balance / card.creditLimit) < 0.3 ? 'Good' :
                       (card.balance / card.creditLimit) < 0.7 ? 'Moderate' : 'High'}
                    </span>
                  </div>
                  
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        (card.balance / card.creditLimit) < 0.3 ? 'bg-green-500' :
                        (card.balance / card.creditLimit) < 0.7 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(100, (card.balance / card.creditLimit) * 100)}%` }}
                    ></div>
                    
                    {/* 30% marker */}
                    <div className="absolute top-0 bottom-0 w-px bg-gray-800" style={{ left: '30%' }}></div>
                    <div className="absolute text-xs text-gray-600" style={{ left: '30%', top: '100%', transform: 'translateX(-50%)' }}>30%</div>
                    
                    {/* 70% marker */}
                    <div className="absolute top-0 bottom-0 w-px bg-gray-800" style={{ left: '70%' }}></div>
                    <div className="absolute text-xs text-gray-600" style={{ left: '70%', top: '100%', transform: 'translateX(-50%)' }}>70%</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm mt-6">
                  <h3 className="font-semibold text-blue-800 mb-1">How Credit Utilization Affects Your Score</h3>
                  <p className="text-blue-700">
                    Financial experts recommend keeping your credit utilization below 30% to maintain a good credit score. 
                    High utilization may negatively impact your credit score.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Payment history */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Payment History</h2>
              </div>
              
              <div className="p-4">
                {payments.length > 0 ? (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Last 6 Months</h3>
                      <span className="text-sm text-green-600 font-medium">Always on time</span>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      {['January', 'February', 'March', 'April', 'May', 'June'].map(month => (
                        <div key={month} className="flex-1">
                          <div className="bg-green-100 h-20 rounded-md flex items-center justify-center">
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                          </div>
                          <p className="text-xs text-center mt-1">{month}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-gray-500">
                    No payment history available
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Card Settings</h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Lock className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Freeze Card</p>
                        <p className="text-sm text-gray-500">Temporarily block card transactions</p>
                      </div>
                    </div>
                    <div>
                      <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          card.isFrozen 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                        onClick={toggleFreeze}
                      >
                        {card.isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Shield className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Update PIN</p>
                        <p className="text-sm text-gray-500">Change your card's PIN number</p>
                      </div>
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                        Update
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Notifications</p>
                        <p className="text-sm text-gray-500">Manage your alert preferences</p>
                      </div>
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                        Manage
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Calendar className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Payment Due Date</p>
                        <p className="text-sm text-gray-500">Change your monthly payment due date</p>
                      </div>
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                        Change
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Autopay</p>
                        <p className="text-sm text-gray-500">Set up automatic payments</p>
                      </div>
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200">
                        Set Up
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center">
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        <Trash2 className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Remove Card</p>
                        <p className="text-sm text-gray-500">Delete this card from your account</p>
                      </div>
                    </div>
                    <div>
                      <button 
                        className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
                        onClick={() => {
                          setConfirmationMessage("Are you sure you want to remove this card?");
                          setConfirmationAction(() => {
                            return () => {
                              // Delete the card
                              const storedCards = localStorage.getItem("creditCards");
                              if (storedCards) {
                                const cards = JSON.parse(storedCards);
                                const filteredCards = cards.filter(c => c.id !== card.id);
                                localStorage.setItem("creditCards", JSON.stringify(filteredCards));
                              }
                              
                              // Delete related data
                              ['cardTransactions', 'cardStatements', 'cardPayments', 'cardAlerts'].forEach(key => {
                                const storedItems = localStorage.getItem(key);
                                if (storedItems) {
                                  const items = JSON.parse(storedItems);
                                  const filteredItems = items.filter(item => item.cardId !== card.id);
                                  localStorage.setItem(key, JSON.stringify(filteredItems));
                                }
                              });
                              
                              // Navigate back to cards
                              navigate("/cards");
                            };
                          });
                          setShowConfirmation(true);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-4 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Card Information</h2>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Card Type</p>
                    <p className="font-medium">{card.cardType.charAt(0).toUpperCase() + card.cardType.slice(1)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issuing Bank</p>
                    <p className="font-medium">{card.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Credit Limit</p>
                    <p className="font-medium">{formatCurrency(card.creditLimit)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">APR</p>
                    <p className="font-medium">{card.apr}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Issue Date</p>
                    <p className="font-medium">{formatDate(card.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expiry Date</p>
                    <p className="font-medium">{card.expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">{card.isActive ? 'Active' : 'Inactive'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Frozen</p>
                    <p className="font-medium">{card.isFrozen ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Payment form modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Make a Payment</h2>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowPaymentForm(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleMakePayment} className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Amount</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-500">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <input 
                      type="text" 
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md" 
                      placeholder="0.00"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <button 
                      type="button" 
                      className="text-sm text-blue-600"
                      onClick={() => setPaymentAmount(card.minimumPayment.toString())}
                    >
                      Minimum ({formatCurrency(card.minimumPayment)})
                    </button>
                    <button 
                      type="button" 
                      className="text-sm text-blue-600"
                      onClick={() => setPaymentAmount(card.balance.toString())}
                    >
                      Full Balance ({formatCurrency(card.balance)})
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select
                    className="pl-3 pr-8 py-2 w-full border border-gray-300 rounded-md bg-white"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="bank">Bank Account</option>
                    <option value="debit">Debit Card</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                  <input 
                    type="date" 
                    className="pl-3 pr-4 py-2 w-full border border-gray-300 rounded-md" 
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                    min={getTodayDate()}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button 
                  type="button" 
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200"
                  onClick={() => setShowPaymentForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Schedule Payment
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      
      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4">
              <div className="text-center mb-4">
                {confirmationAction ? (
                  <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                ) : (
                  <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                )}
                <h3 className="text-lg font-medium text-gray-900">
                  {confirmationAction ? 'Confirm Action' : 'Success'}
                </h3>
                <p className="text-gray-500 mt-1">{confirmationMessage}</p>
              </div>
              
              {confirmationAction ? (
                <div className="flex gap-3">
                  <button 
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
                    onClick={() => {
                      confirmationAction();
                      setShowConfirmation(false);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              ) : (
                <button 
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                  onClick={() => setShowConfirmation(false)}
                >
                  Close
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CardManagement;