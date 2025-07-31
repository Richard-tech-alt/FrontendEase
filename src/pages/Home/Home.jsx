import BusinessPartners from "@/components4/BussinessPartners"
import OurMainCardsMarquee from "@/components4/CardScroll"
import EaseWithDrawScroller from "@/components4/Courausal"
import CryptoToFiatBanner from "@/components4/CryptoTransfer"
import FAQ from "@/components4/FAQ"
import MainHero from "@/components4/hero/MainHero"
import CryptoSocialComponent from "@/components4/SocialSharing"
import CryptoTabs from "@/components4/tabsection"

const Home = () => {
  return (
    <>
      <MainHero/>
      <OurMainCardsMarquee/>
      <EaseWithDrawScroller/>
      <CryptoTabs/>
      <CryptoSocialComponent/>
      <CryptoToFiatBanner/>
      <BusinessPartners/>
      <FAQ/>
    </>
  )
}

export default Home
