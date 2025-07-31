const cards = [
  {
    bank: 'Horizon Bank',
    offer: 'Get 10% cashback on all online purchases!',
    bgColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
  },
  {
    bank: 'Summit Finance',
    offer: 'Earn 5x reward points on travel bookings!',
    bgColor: 'bg-gradient-to-r from-pink-500 to-red-500',
  },
  {
    bank: 'Metro Card Co.',
    offer: '0% interest for the first 12 months!',
    bgColor: 'bg-gradient-to-r from-green-400 to-emerald-600',
  },
];

const CreditCardLayout = () => {
  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Exclusive Credit Card Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-white shadow-xl transform transition hover:scale-105 ${card.bgColor}`}
          >
            <h3 className="text-xl font-semibold mb-2">{card.bank}</h3>
            <p className="text-sm mb-4">{card.offer}</p>
            <div className="flex justify-between items-center text-sm">
              <span>Credit Limit: ₹2,00,000</span>
              <span>Annual Fee: ₹499</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCardLayout;
