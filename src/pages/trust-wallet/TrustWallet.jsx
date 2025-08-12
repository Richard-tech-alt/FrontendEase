import CallToAction from "../cashApp/components/CallToAction";
import CardSet from "./component/CardSet";
import CoreFeatures from "./component/CoreFearutes";
import CryptoCardShowcase from "./component/CryptoCardShowCase";
import FAQ from "./component/FAQ";
import HeroSection from "./component/HeroSection";
import Robinhood from "../../assets/images/cards/robinhood.png";
import trust from "../../assets/images/cards/trustwalletcard-removebg-preview.png";
import CardLandingPage from "../../components/ui/Hero_for_Cards";

const TrustWallet = () => {
  return (
    <div>
      <CardLandingPage
        brandName="Trustwallet Crypto Card"
        brandIcon="default"
        headline={["Earn Bitcoin", "on every purchase"]}
        cardImage={trust}
        description="Get up to 3% back in crypto rewards instantly."
        buttonText="Apply Now"
        onButtonClick={() => alert("Navigating to application...")}
        termsText="Crypto rewards may fluctuate in value."
        backgroundColor="linear-gradient(180deg, #ffffff 0%, #f0f4ff 25%, #e6f7ff 50%, #fff2d9 75%, #fff7b9 100%)"
        textColor="text-gray-800"
        descriptionColor="text-gray-600"
        specs={[
          { label: "Network", value: "Mastercard" },
          { label: "Metal", value: "Titanium" },
          { label: "Crypto Rewards", value: "3%" },
        ]}
      />
      <HeroSection />
      <CoreFeatures />
      <CardSet />
      <CryptoCardShowcase />
      <FAQ />
      {/* <CallToAction /> */}
    </div>
  );
};

export default TrustWallet;
