/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Robinhood from "../../assets/images/cards/robinhood.png";

import CallToAction from "@/pages/cashApp/components/CallToAction";

const CardLandingPage = ({
  brandName = "Robinhood Gold Card",
  brandIcon = "default",
  headline = ["3% cash back", "across the board"],
  cardImage = {Robinhood},
  cardAlt = "Card",
  description = "That's right—earn 3% cash back on all categories.",
  buttonText = "Apply Now",
  onButtonClick = () => {},
  termsText = "Terms apply",
  showTerms = true,
  specs = [
    { label: "Material", value: "Stainless steel" },
    { label: "Weight", value: "17 grams" },
    { label: "Visa", value: "Signature" },
  ],
  showSpecs = true,
  backgroundColor = "linear-gradient(180deg, #ffffff 0%, #f0f4ff 25%, #e6f7ff 50%, #fff2d9 75%, #fff7b9 100%)",
  textColor = "text-black",
  descriptionColor = "text-black/80",
  termsColor = "text-black/60",
  specsLabelColor = "text-black/50",
  specsValueColor = "text-black",
  className = "",
  cardClassName = "",
  buttonClassName = "",
  enableHover = true,
  cardRotation = "perspective(1000px) rotateX(8deg) rotateY(-3deg)",
}) => {
  const renderBrandIcon = () => {
    if (brandIcon === "default") {
      return (
        <div className="w-4 h-4 bg-black/90 rounded-sm flex items-center justify-center backdrop-blur-sm">
          <div className="w-2 h-2 bg-white rounded-sm transform rotate-45"></div>
        </div>
      );
    }
    if (typeof brandIcon === "string") {
      return <img src={brandIcon} alt="Brand Icon" className="w-4 h-4" />;
    }
    return brandIcon;
  };

  const animationStyles = `
    @keyframes floatUp {
      0%, 100% { transform: translateY(0px) rotate(12deg); }
      50% { transform: translateY(-20px) rotate(12deg); }
    }
    @keyframes floatDown {
      0%, 100% { transform: translateY(0px) rotate(-6deg); }
      50% { transform: translateY(20px) rotate(-6deg); }
    }
    @keyframes slideRight {
      0% { transform: translateX(-100px); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100vw); opacity: 0; }
    }
    @keyframes slideLeft {
      0% { transform: translateX(100px); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(-100vw); opacity: 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float-up {
      animation: floatUp 8s ease-in-out infinite;
    }
    .animate-float-down {
      animation: floatDown 10s ease-in-out infinite;
    }
    .animate-slide-right {
      animation: slideRight 15s linear infinite;
    }
    .animate-slide-left {
      animation: slideLeft 18s linear infinite;
    }
    .animate-pulse-custom {
      animation: pulse 4s ease-in-out infinite;
    }
    .animate-bounce-custom {
      animation: bounce 6s ease-in-out infinite;
    }
  `;


  return (
    <div
      className={`h-auto relative overflow-hidden flex flex-col items-center justify-center px-6 py-8 ${className}`}
      style={{ background: backgroundColor }}
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full blur-xl backdrop-blur-3xl animate-pulse-custom"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-[#fff7b9]/30 rounded-full blur-2xl backdrop-blur-2xl animate-bounce-custom"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl backdrop-blur-3xl animate-pulse-custom"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 bg-pink-200/30 rounded-full blur-xl backdrop-blur-2xl animate-bounce-custom"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent animate-slide-right opacity-30"></div>
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-slide-left opacity-40"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-100/10 backdrop-blur-sm"></div>
      </div>

      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-10">
          {brandName && (
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
              <span
                className={`${textColor} text-2xl  sm:text-xl font-bold tracking-wide`}
              >
                {brandName}
              </span>
              {brandIcon && renderBrandIcon()}
            </div>
          )}
          {headline && (
            <h1
              className={`${textColor} font-light leading-none tracking-tight`}
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                lineHeight: "0.9",
              }}
            >
              {Array.isArray(headline)
                ? headline.map((line, index) => (
                    <span key={index} className="block mb-2">
                      {line}
                    </span>
                  ))
                : headline}
            </h1>
          )}
        </div>

        <div className="relative mb-16 sm:mb-20 md:mb-24">
          <div className="relative group">
            <img
              src={cardImage}
              alt={cardAlt}
              className={`w-[300px] sm:w-[360px] md:w-[400px] lg:w-[440px] h-[190px] sm:h-[228px] md:h-[254px] lg:h-[280px] rounded-2xl object-cover transition-all duration-700 ease-out ${
                enableHover ? "group-hover:scale-105" : ""
              } ${cardClassName}`}
              style={{
                transform: cardRotation,
                filter:
                  "drop-shadow(0 30px 40px rgba(0,0,0,0.1)) drop-shadow(0 10px 20px rgba(0,0,0,0.05))",
              }}
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-16 bg-gradient-to-r from-transparent via-black/10 to-transparent blur-2xl rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-8 bg-black/5 blur-xl rounded-full"></div>
          </div>
        </div>

        {description && (
          <div className="text-center mb-6 sm:mb-12 max-w-2xl px-4">
            <p
              className={`${descriptionColor} text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed`}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
            >
              {description}
            </p>
          </div>
        )}

        <CallToAction/>

        {/* {showTerms && termsText && (
          <div className="mb-12 sm:mb-16">
            <div className={`flex items-center justify-center gap-3 ${termsColor}`}>
              <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base font-medium">{termsText}</span>
            </div>
          </div>
        )} */}

        {/* {showSpecs && specs && specs.length > 0 && (
          <div className="w-full max-w-lg">
            <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-8"></div>
            <div className={`grid gap-8 sm:gap-12 text-center`} style={{ gridTemplateColumns: `repeat(${specs.length}, 1fr)` }}>
              {specs.map((spec, index) => (
                <div key={index} className="group">
                  <div className={`${specsLabelColor} text-xs sm:text-sm uppercase tracking-wider mb-2 font-medium transition-colors group-hover:text-black/70`}>
                    {spec.label}
                  </div>
                  <div className={`${specsValueColor} text-sm sm:text-base font-medium transition-colors group-hover:text-black`}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default CardLandingPage;
