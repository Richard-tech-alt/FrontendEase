import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <style jsx>{`
        @keyframes bounceEffect {
          0% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-20px) translateX(-50%);
          }
          75% {
            transform: translateY(-10px) translateX(-50%);
          }
          100% {
            transform: translateY(0) translateX(-50%);
          }
        }

        .card-image {
          position: absolute;
          top: -6rem;
          left: 50%;
          transform: translateX(-50%);
          width: 20rem;
          border-radius: 1.5rem;
          animation: bounceEffect 2s ease infinite;
        }

        .card-image-1 {
          animation-delay: 0s;
        }

        .card-image-2 {
          animation-delay: 0s;
        }

        .card-image-3 {
          animation-delay: 0s;
        }
      `}</style>

      <section className="bg-white py-16 px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-32 mb-30">
          Borrow{" "}
          <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
            Smarter
          </span>
          . Spend{" "}
          <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
            Freer
          </span>
          . Stay{" "}
          <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
            Invested
          </span>
          .
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-44 md:gap-10">
          {/* Binance Classic Card */}
          <div className="relative bg-[#F3EBFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl">
            <img
              src="/Flip Hor.png"
              alt="Binance Classic Card"
              className="card-image card-image-1"
            />
            <h3 className="bg-gradient-to-b from-[#734DD9] to-[#0B021B] text-transparent bg-clip-text text-2xl font-bold mb-1">
              Binance Classic Card
            </h3>
            <p className="font-medium mb-4">
              Built for Everyday Crypto Spending
            </p>
            <p className="text-gray-600 text-sm">
              The Binance Classic Card is the simplest way to enter the world of
              crypto-powered finance. It lets you spend your digital assets like
              traditional money, with zero annual fees, instant crypto-to-fiat
              conversion, and seamless Visa support in over 60 million locations
              globally.
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-sm text-gray-700 space-y-1 text-left">
              <li>• No monthly, issuance, or FX fees</li>
              <li>• Instant spending from Binance Wallet</li>
              <li>• Up to 2% cashback in BNB on all purchases</li>
              <li>• Real-time transaction tracking via Binance App</li>
              <li>• Accepted worldwide wherever Visa is supported</li>
            </ul>
            <Link to="/login">
              <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                Get Started
              </button>
            </Link>
          </div>

          {/* Binance Premium Card */}
          <div className="relative bg-[#EAFFDA] rounded-xl w-full max-w-sm pt-32 pb-24 px-6 text-center mt-12 md:mt-36">
            <img
              src="/Premium.svg"
              alt="Binance Premium Card"
              className="card-image card-image-2"
            />
            <h3 className="bg-gradient-to-b from-[#5EBE17] to-[#1D1A1A] text-transparent bg-clip-text text-2xl font-bold mb-1">
              Binance Premium Card
            </h3>
            <p className="font-medium mb-4">
              Enhanced Control & Bigger Rewards
            </p>
            <p className="text-gray-600 text-sm">
              The Premium Card is for power users who value control,
              flexibility, and financial leverage. With higher spending limits,
              optional crypto credit line integration, and enhanced BNB rewards,
              this card puts your digital assets to real-world use with maximum
              efficiency.
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-sm text-gray-700 space-y-1 text-left">
              <li>• Up to 5% BNB cashback based on loyalty tier</li>
              <li>• Priority app-based customer support</li>
              <li>• Flexible payment routing: Fiat or Crypto fallback</li>
              <li>• Enhanced security with biometric app verification</li>
              <li>• Increased daily spending and withdrawal limits</li>
            </ul>
            <Link to="/login">
              <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                Get Started
              </button>
            </Link>
          </div>

          {/* Binance Infinite Card */}
          <div className="relative bg-[#DBFCFF] rounded-3xl w-full max-w-sm pt-32 pb-24 px-10 text-center shadow-2xl">
            <img
              src="/infinite.svg"
              alt="Binance Infinite Card"
              className="card-image card-image-3"
            />
            <h3 className="bg-gradient-to-b from-[#025E67] to-[#1D1A1A] text-transparent bg-clip-text text-2xl font-bold mb-1">
              Binance Infinite Card
            </h3>
            <p className="font-medium mb-4">
              Elite Utility for High-Volume Users
            </p>
            <p className="text-gray-600 text-sm">
              The Infinite Card is Binance's flagship offering, designed for
              high-net-worth individuals, traders, and institutional crypto
              investors. It delivers elite perks, unmatched cashback, concierge
              support, and deep integration with Binance VIP services.
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-sm text-gray-700 space-y-1 text-left">
              <li>• Up to 8% BNB cashback on all eligible spends</li>
              <li>• Personalized spending limits & credit terms</li>
              <li>• Dedicated VIP manager & live support access</li>
              <li>• Free airport lounge access & lifestyle concierge</li>
              <li>• Access to Binance Private & Institutional Services</li>
            </ul>
            <Link to="/login">
              <button className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#150443] text-white px-8 py-3 rounded-full text-base shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cards;