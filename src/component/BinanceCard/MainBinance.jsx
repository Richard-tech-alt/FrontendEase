import Hero from "./HeroBinance";
import platformImage from "../../assets/nexon-mock1.png";
import MochUP2 from "../../assets/nexon-mock2.png";
import MochUP3 from "../../assets/nexon-mock3.png";
import Cards from "./CardBinance";
import FAQAccordion from "./FAQBinance";
import CardLandingPage from "@/components/ui/Hero_for_Cards";
import nexo from "../../assets/images/cards/nexo (1).png";
import CallToAction from "@/pages/cashApp/components/CallToAction";
import { Link } from "react-router-dom";
const Binance = () => {
  return (
    <div>
      <CardLandingPage
        brandName="Binance Visa Card"
        brandIcon="default"
        headline={["Use Crypto Like Cash", "Anywhere, Instantly"]}
        cardImage="/binance_card-removebg-preview.png" // Replace with actual Binance card image import
        description="Convert crypto to fiat in real time and shop at 60M+ merchants worldwide with the Binance Visa Card."
        buttonText="Get Started"
        onButtonClick={() =>
          alert("Redirecting to Binance Visa Card enrollment page...")
        }
        backgroundColor="linear-gradient(180deg, #ffffff 0%, #eaf3ff 25%, #dff5fc 50%, #fff4de 75%, #fff1b8 100%)"
        textColor="text-gray-900"
        descriptionColor="text-gray-700"
        specs={[
          { label: "Card Network", value: "Visa – Global acceptance" },
          { label: "Availability", value: "EU/EEA region (more coming soon)" },
          { label: "Reward Rate", value: "Up to 8% cashback (paid in BNB)" },
          { label: "Conversion", value: "Real-time crypto to fiat settlement" },
          { label: "Account Control", value: "Manage via Binance App" },
        ]}
      />

      <Hero />
      <section className="m-6 md:m-12 px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="md:w-[40%] text-center md:text-left">
          <h2
            className="text-3xl md:text-5xl font-medium leading-snug mb-6 font-popins"
            style={{ lineHeight: "1.4" }}
          >
            Your Gateway to <br />
            <span className="text-black">Global Crypto Finance</span>
          </h2>

          <p className="text-gray-700 text-xl" style={{ lineHeight: "1.5" }}>
            Binance empowers you to trade, spend, and grow <br />
            your crypto with confidence. Whether you're a <br />
            beginner or a seasoned investor, our platform offers <br />
            cutting-edge tools, deep liquidity, and unmatched access <br />
            to global markets — all backed by industry-leading security.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[60%] flex justify-center">
          <img
            src={platformImage}
            alt="Tablet with Binance platform interface"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="bg-[#f6f1fb] px-6 md:px-12 py-10 md:py-20">
        <div className="max-w-full m-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Binance Card Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={MochUP2} // Replace with actual Binance Card image
              alt="Binance Visa Card Mockup"
              className="rounded-xl w-full max-w-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="">
            <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6 font-popins">
              More Than Just a Card —
              <br className="hidden md:block" />
              It's Your Gateway to Financial Freedom
            </h2>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              The <strong>Binance Visa Card</strong> is a modern financial tool
              that seamlessly blends the freedom of crypto with the convenience
              of fiat. Whether you're a frequent traveler, a long-term HODLer,
              or someone who simply wants to make crypto a part of everyday
              life, this card transforms your Binance balance into real-world
              purchasing power.
            </p>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              With zero annual fees, up to 8% cashback in BNB, and compatibility
              across more than 60 million merchants globally, the Binance Card
              removes the friction between digital assets and daily payments.
              Shop online, swipe in-store, or manage subscriptions — all funded
              from your crypto wallet in real time.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Fully integrated into the Binance ecosystem, your card comes with
              advanced app-level control, transparent fee tracking, instant
              currency conversion, and institutional-grade security. It’s not
              just a payment method — it’s a bridge between the decentralized
              future and everyday convenience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
              <div className="space-y-4">
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Real-time crypto-to-fiat conversion at checkout
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Earn up to 8% cashback in BNB on eligible purchases
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Instantly spend from your Binance Funding Wallet
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Intuitive in-app card controls: freeze, track, adjust limits
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Works anywhere Visa is accepted — 60M+ merchants globally
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  No annual or maintenance fees — 100% user-focused
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Bank-grade security with 2FA and risk monitoring
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 w-4 h-4">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    </span>
                  </span>
                  Physical and virtual versions available for flexible use
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-12">
        {/* Title & Subtitle */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A Credit Line Backed by Your{" "}
            <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
              Binance Assets
            </span>
            .
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Put your crypto portfolio to work without selling a single coin.
            <br className="hidden md:block" />
            Instantly borrow, spend, and earn using your existing assets as
            collateral.
          </p>
        </div>

        {/* Card Features */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f7f0ed] hover:bg-[#FCE7C7] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300">
            <img
              src="/bitcoin_16866014 2 (4).png"
              alt="Binance Credit"
              className="mx-auto mb-4 w-24 h-24 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">
              Borrow Without Selling Your Crypto
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Instantly access funds by leveraging your Binance wallet balance
              as collateral. Enjoy competitive interest rates and avoid capital
              gains tax by holding your crypto.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7f0ed] hover:bg-[#FCE7C7] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300">
            <img
              src="/coins_18670279 2 (1).png"
              alt="Binance Rewards"
              className="mx-auto mb-4 w-24 h-24 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Earn BNB Cashback</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Earn up to 8% cashback in BNB every time you use your Binance Visa
              Card. Rewards are automatically credited based on your tier and
              activity level.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f0ed] hover:bg-[#FCE7C7] rounded-xl p-6 text-center shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-none transition-shadow duration-300">
            <img
              src="/cashflow_18818466 2.png"
              alt="Repayment Flexibility"
              className="mx-auto mb-4 w-24 h-24 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">
              Repay at Your Own Pace
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              No fixed repayment schedule. Maintain full control by repaying
              your credit as per your cash flow, with auto-repayment options and
              transparent tracking in-app.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore the Latest{" "}
            <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
              Binance Card Lineup
            </span>
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            Designed for Your Digital Lifestyle, Powered by Binance.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The Binance Card lineup redefines how you spend and earn using
            crypto. With seamless integration into your Binance account, these
            cards empower you to convert crypto to fiat instantly at the point
            of sale—no manual exchange needed. Whether you're making everyday
            purchases, booking flights, or shopping online, the Binance Card
            ensures your crypto is always ready to use, anywhere Visa is
            accepted.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
            Each card is tailored to a different type of user—from beginners to
            high-volume traders. Enjoy up to 8% cashback in BNB, dynamic
            spending limits based on your holdings, virtual and physical card
            options, and access to advanced features like real-time transaction
            alerts and secure 2FA-enabled management. With no annual fees,
            built-in fraud protection, and deep liquidity from the world’s
            largest crypto exchange, the Binance Card is your passport to true
            financial freedom in a digital-first world.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Introducing the New{" "}
            <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text">
              Binance Card Series
            </span>
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            One Wallet. Three Cards. Unlimited Flexibility.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The new Binance Card lineup is designed to bring freedom, security,
            and control to every crypto spender. Whether you're new to digital
            assets or a seasoned trader, there's a Binance card tailored to fit
            your lifestyle and financial needs.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
            All cards are directly integrated with your Binance Funding Wallet,
            enabling you to make purchases, withdraw cash, and earn up to 8% BNB
            cashback—without ever needing to convert your crypto manually. Enjoy
            seamless transactions with Visa support in over 60 million locations
            worldwide.
          </p>
        </div>
      </section>

      <Cards />

      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span>Available Worldwide</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock True Financial Freedom with the
                  <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    {" "}
                    Binance Card
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your bridge between digital wealth and everyday life
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    60M+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Merchants Worldwide
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    8%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Cashback in BNB
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    $0
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Monthly Fees</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The <strong className="text-gray-900">Binance Card</strong> is
                  more than just a debit card — it's your bridge between digital
                  wealth and everyday life. Designed for both new and seasoned
                  crypto users, it enables you to spend your cryptocurrencies
                  instantly while keeping control of your assets at all times.
                </p>
                <p>
                  Linked directly to your Binance account, the card lets you pay
                  with crypto at over{" "}
                  <strong className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    60 million merchants worldwide
                  </strong>{" "}
                  that accept Visa. Every transaction is processed in real-time,
                  converting your selected crypto asset into fiat at the point
                  of sale — so you never need to pre-convert your holdings.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200/50 hover:bg-white/90 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center bg-gradient-to-b from-[#5AEF38] to-[#155C05]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Real-time transaction alerts
                    </h4>
                    <p className="text-sm text-gray-600">
                      Monitor every purchase instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200/50 hover:bg-white/90 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center bg-gradient-to-b from-[#5AEF38] to-[#155C05]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Flexible funding options
                    </h4>
                    <p className="text-sm text-gray-600">
                      Prioritize BNB, BTC, ETH, or stablecoins
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200/50 hover:bg-white/90 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center bg-gradient-to-b from-[#5AEF38] to-[#155C05]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Enhanced security
                    </h4>
                    <p className="text-sm text-gray-600">
                      Two-factor authentication and biometric access
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-green-200/50 hover:bg-white/90 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center bg-gradient-to-b from-[#5AEF38] to-[#155C05]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Instant card control
                    </h4>
                    <p className="text-sm text-gray-600">
                      Freeze/unfreeze card instantly from the app
                    </p>
                  </div>
                </div>
              </div>

              {/* Final paragraph */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-green-200/50">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you&apos;re buying coffee, booking a flight, or paying
                  bills, the Binance Card makes it seamless, secure, and
                  efficient. With up to{" "}
                  <strong className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent">
                    8% cashback in BNB
                  </strong>{" "}
                  on eligible purchases, you earn rewards while spending your
                  crypto — instead of losing it to conversion or liquidation
                  fees.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/login">
                <button className="group bg-gradient-to-b from-[#5AEF38] to-[#155C05] hover:from-[#4DD62F] hover:to-[#114A04] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3">
                  Get Your Binance Card Today
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="w-full flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src={MochUP3}
                    alt="Binance Crypto Cards"
                    className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain relative z-10 drop-shadow-2xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300/40 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-green-200/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span>Accepted worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 bg-gradient-to-b from-[#5AEF38] to-[#155C05] bg-clip-text text-transparent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Instant transactions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-gradient-to-br from-green-50 to-green-100 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start gap-8">

          <div className="text-center md:text-center max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
              Take Control of Your Crypto Future
            </h2>
            <p className="text-gray-700 text-lg">
              The Nexo Card Series isn’t just about spending—it’s about evolving the way you use, grow, and protect your digital wealth. With full access to your credit line, seamless integration across the Nexo platform, and tailored options for every lifestyle, you’re not just getting a card—you’re unlocking a smarter financial future.
            </p>
          </div>

          <div className="w-full flex justify-start">
            <img
              src={MochUP3} 
              alt="Crypto Cards"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </section> */}
     <section className="bg-[#F8F3FF] py-20 px-6 md:px-12 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#5AEF38]/10 to-transparent rounded-full blur-2xl"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#155C05]/10 to-transparent rounded-full blur-2xl"></div>

  <div className="max-w-5xl mx-auto text-center space-y-12">
    {/* Heading & Subheading */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-popins">
        The Future of <br />
        <span className="bg-gradient-to-b from-[#5AEF38] to-[#155C05] text-transparent bg-clip-text animate-gradient">
          Everyday Finance
        </span>{" "}
        Starts Here
      </h2>

      <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        The Binance Card isn’t just another way to spend — it’s a way to live financially free. It empowers you to bridge the gap between the crypto economy and everyday purchases, without sacrificing speed, trust, or convenience.
      </p>
    </div>

    {/* Expanded Storytelling */}
    <div className="text-gray-800 text-base md:text-lg leading-relaxed max-w-4xl mx-auto space-y-5">
      <p>
        In a world where traditional banking is slow and full of hidden fees, crypto is offering something radically different — *control, transparency, and global reach*. The Binance Card brings all of this into your wallet, making your crypto instantly spendable anywhere Visa is accepted.
      </p>
      <p>
        With real-time conversions, you don’t need to manually swap currencies before you pay. Simply swipe your card, and your crypto is automatically converted to fiat at the moment of transaction — *no delay, no confusion*.
      </p>
      <p>
        Whether you're a seasoned trader or just starting your crypto journey, Binance Card is built to scale with your financial lifestyle. From cashback rewards to seamless integration with your Binance dashboard, every feature is designed with you in mind.
      </p>
    </div>

    {/* Feature List */}
    <div className="space-y-6 pt-8">
      <h3 className="text-2xl font-semibold text-gray-900">Why Users Love the Binance Card</h3>
      <div className="grid gap-5">
        {[
          "Real-time crypto-to-fiat conversion with zero latency at POS terminals.",
          "Works globally across 60M+ Visa merchants with no monthly fees or FX markups.",
          "Earn automatic BNB cashback rewards based on your usage and card tier.",
          "Track spending, rewards, and balances directly from your Binance dashboard or app.",
          "High-level security with 2FA, transaction locks, and real-time alerts.",
          "Supports multiple cryptocurrencies and flexible funding options."
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-4 group justify-center hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 flex items-center justify-center border-2 border-[#5AEF38] rounded-full bg-white group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-b from-[#5AEF38] to-[#155C05] rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-800 text-left text-base md:text-lg leading-relaxed max-w-2xl">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Optional CTA */}
    {/* <div className="pt-12">
      <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5AEF38] to-[#155C05] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group">
        Get Your Binance Card
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div> */}
  </div>
</section>

      <div className="flex justify-center my-32 ">
        <FAQAccordion />
      </div>
      {/* <CallToAction/> */}
    </div>
  );
};

export default Binance;