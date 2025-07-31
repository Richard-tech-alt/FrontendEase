import CallToAction from "../cashApp/components/CallToAction"
import CircleOfBalls from "./component/AnimatedCoinSection"
import CryptoCards from "./component/CryptoCardSection"
import FAQ from "./component/FAQ"
import FeatureCards from "./component/FeaturesCard"
import HeroSection from "./component/HeroSection"
import coinbase from "../../assets/images/cards/coinbase.png";
import CardLandingPage from "@/components/ui/Hero_for_Cards"
const Coinbase = () => {
  return (
    <div>
  <CardLandingPage
        brandName="Coinbase Crypto Card"
        brandIcon="default"
        headline={["Earn Bitcoin", "on every purchase"]}
        cardImage= {coinbase}
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
      
      <HeroSection/>
      <CircleOfBalls/>
      {/* <PricingCards/> */}
      {/* <CryptoCards/> */}
      <FeatureCards/>
      <CryptoCards/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}

export default Coinbase