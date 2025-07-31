/* eslint-disable react/prop-types */
import { useState } from "react"
import { FiArrowRight, FiCheck, FiChevronRight, FiCreditCard, FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"

const cards = [
  {
    bank: "CASHAPP CARDS",
    offer: "Get 10% cashback on all online purchases!",
    image: "/Frame 631 (1).png",
    features: ["No annual fee", "Instant notifications", "Virtual card option"],
  },
  {
    bank: "COINBASE CARDS",
    offer: "Earn 5x reward points on travel bookings!",
    image: "/Frame 633 (1).png",
    features: ["Crypto rewards", "No foreign transaction fees", "Metal card option"],
  },
  {
    bank: "PAYPAL CARDS",
    offer: "0% interest for the first 12 months!",
    image: "/Frame 634.png",
    features: ["Purchase protection", "Extended warranty", "Return shipping refunds"],
  },
  {
    bank: "TRUST WALLET CARDS",
    offer: "0% interest for the first 12 months!",
    image: "/Frame 635.png",
    features: ["Crypto cashback", "Worldwide acceptance", "Enhanced security"],
  },
  {
    bank: "ROBINHOOD CARDS",
    offer: "0% interest for the first 12 months!",
    image: "/Frame 636.png",
    features: ["Stock rewards", "No minimum balance", "Free ATM withdrawals"],
  },
  {
    bank: "NEXO CARDS",
    offer: "0% interest for the first 12 months!",
    image: "/Frame 632.png",
    features: ["Crypto credit line", "Zero fees", "Instant approval"],
  },
]

function CardItem({ card, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-[400px] w-full"
      style={{ perspective: "1000px" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 cursor-pointer ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.bank}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${card.gradient} opacity-60`}></div>
              <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 shadow-lg md:mt-8 mt-8">
                <div className="flex items-center gap-1">
                  <FiStar className="h-3 w-3" />
                  <span>EXCLUSIVE OFFER</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 bg-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{card.bank}</h3>
                <p className="text-gray-700 mb-4">{card.offer}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <FiCreditCard className="h-4 w-4 mr-1" />
                  <span>Tap to view details</span>
                </div>
                <FiChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`h-16 ${card.gradient} flex items-center justify-between px-6`}>
            <h3 className="text-xl font-bold text-white">{card.bank}</h3>
            <FiCreditCard className="h-6 w-6 text-white/80" />
          </div>

          <div className="p-6">
            <h4 className="font-semibold text-lg mb-4">Card Features</h4>
            <ul className="space-y-3 mb-6">
              {card.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
                <Link to="/user-dashboard">
              <button
                className={`w-full py-3 px-4 rounded-lg text-red font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow ${card.gradient}`}
              >
                Apply Now
                <FiArrowRight className="h-4 w-4" />
              </button>
              </Link>
              <p className="text-xs text-center text-gray-500 mt-4">
                Terms and conditions apply. Offer valid until December 31, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const CreditCardLayout = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Exclusive Credit Card Offers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the best credit card deals tailored for your financial needs. Compare benefits, rewards, and
            special offers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <CardItem key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default CreditCardLayout