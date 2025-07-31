import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState([]);


  const faqItems = [
    {
      id: 0,
      question: "What is the Binance Card?",
      answer:
        "The Binance Card is a crypto debit card that allows users to spend their cryptocurrency holdings in real-time at over 60 million merchants worldwide that accept Visa. It offers seamless crypto-to-fiat conversion at the point of sale."
    },
    {
      id: 1,
      question: "How do I apply for a Binance Card?",
      answer:
        "To apply for a Binance Card, you must have a verified Binance account. Simply navigate to the Card section on the Binance platform, complete KYC if required, and submit your request."
    },
    {
      id: 2,
      question: "Which cryptocurrencies can I use with my Binance Card?",
      answer:
        "You can spend a wide variety of cryptocurrencies such as BNB, BTC, ETH, and USDT. The order of spending can be customized within your Binance Card dashboard."
    },
    {
      id: 3,
      question: "Does Binance Card support cashback?",
      answer:
        "Yes, Binance Card offers up to 8% cashback in BNB on eligible purchases, depending on your account's BNB holdings and card tier."
    },
    {
      id: 4,
      question: "Are there any fees associated with the Binance Card?",
      answer:
        "The Binance Card has no issuance, monthly, or foreign exchange fees. However, third-party ATM providers may charge additional withdrawal fees."
    },
    {
      id: 5,
      question: "Is the Binance Card available globally?",
      answer:
        "The Binance Card is currently available in select regions, including the EEA and certain parts of Asia. Expansion to more countries is underway."
    },
    {
      id: 6,
      question: "Can I freeze or disable my card instantly?",
      answer:
        "Yes, Binance offers full control via its mobile and web app. You can freeze, unfreeze, or reorder the card instantly through your account dashboard."
    },
    {
      id: 7,
      question: "How is crypto converted at the point of sale?",
      answer:
        "When you make a purchase, Binance automatically converts your selected crypto asset into fiat using real-time exchange rates, ensuring fast and secure transactions."
    },
    {
      id: 8,
      question: "Is two-factor authentication required?",
      answer:
        "Yes, Binance Card usage is protected with 2FA and biometric options for enhanced account security."
    },
    {
      id: 9,
      question: "Can I use the Binance Card for ATM withdrawals?",
      answer:
        "Yes, you can use your Binance Card at supported ATMs to withdraw fiat. Limits and fees may apply depending on your region."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div
      className="w-[90%] mx-auto rounded-2xl p-8 md:p-12 font-popins"
      style={{ background: 'linear-gradient(to top, #F2EFEF, #F8F3FF)' }}
    >
      <h2 className="text-black text-center text-3xl md:text-4xl font-semibold mb-10 md:mb-16">
        Frequently Asked Questions about <span className="text-[#1C1C1C]">Binance Card</span>
      </h2>

      {faqItems.map((item) => (
        <div key={item.id} className="flex justify-center mb-5">
          <div className="w-full md:w-[70%] bg-white border border-[#E0DBFA] rounded-2xl shadow-sm transition duration-300">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center py-5 px-6 text-left"
              aria-expanded={openItems.includes(item.id)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {item.question}
              </h3>
              <div className="bg-[#0A4000] bg-opacity-80 rounded-full p-2">
                {openItems.includes(item.id) ? (
                  <ChevronUp size={20} color="#ffffff" />
                ) : (
                  <ChevronDown size={20} color="#ffffff" />
                )}
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-6 pt-0 pb-5 text-gray-700 text-sm md:text-base leading-relaxed overflow-hidden ${
                openItems.includes(item.id)
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}