// About us

import { useState } from "react"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from "react-router-dom"

export default function AboutUsFooter() {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "offerings", label: "Our Offerings" },
    { id: "values", label: "Our Values" },
    { id: "difference", label: "How We're Different" },
    { id: "contact", label: "Contact Us" },
  ]

  const offerings = [
    {
      title: "Crypto-Backed Credit Card",
      details: [
        "Allows users to spend their crypto without selling it",
        "Built-in cashback rewards and global usage support",
        "Eliminates the need to liquidate assets during market dips",
      ],
    },
    {
      title: "Instant Credit Lines",
      details: [
        "Collateralize your digital assets to unlock credit in minutes",
        "No traditional credit checks or lengthy approval processes",
        "Ideal for freelancers, small business owners, and underbanked individuals",
      ],
    },
    {
      title: "Investment Tools",
      details: [
        "Unified dashboard for investing in cryptocurrencies and traditional stocks",
        "Real-time asset tracking and portfolio management",
        "Designed to give users a 360-degree view of their financial health",
      ],
    },
    {
      title: "Integrated Mobile Experience",
      details: [
        "A single, secure, mobile-first platform to manage all financial activities",
        "Wallet integration, spending insights, credit management, and more",
      ],
    },
  ]

  const values = [
    {
      title: "Accessibility",
      description: "Financial tools should be available to anyone, regardless of income, background, or geography.",
    },
    {
      title: "Transparency",
      description: "No hidden fees, complex terms, or fine print.",
    },
    {
      title: "Security",
      description: "We use bank-grade encryption and smart contract infrastructure to protect user assets.",
    },
    {
      title: "Innovation",
      description: "We continuously evolve to stay ahead of financial and technological trends.",
    },
    {
      title: "Trust",
      description: "As a regulated NBFI, we operate with full legal compliance and integrity.",
    },
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-[#27012F] to-[#550665] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h2 className="mb-2 text-3xl font-bold">Ease Withdraw</h2>
          <p className="text-xl font-light italic">Finance. Without the Bank.</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base",
                activeTab === tab.id ? "bg-white text-[#550665]" : "bg-[#550665]/30 text-white hover:bg-[#550665]/50",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {/* About Us Tab */}
          <div className={cn("space-y-6", activeTab === "about" ? "block" : "hidden")}>
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-2xl font-bold">Our Purpose</h3>
              <p className="mb-6 text-lg leading-relaxed">
                At its core, Ease Withdraw exists to democratize access to credit and investment tools by removing
                outdated barriers like credit scores, paperwork, and geographical limitations. We believe that in the
                age of decentralization, users should be empowered to use their assets, including crypto, as leverage to
                unlock opportunities in the financial world.
              </p>

              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="mb-6 text-lg leading-relaxed">
                We believe in a future where financial systems are more open, accessible, and user-driven. In that
                future, crypto is not just an investment — it's a gateway to everyday financial empowerment. At Ease
                Withdraw, we're building that future — one transaction at a time.
              </p>

              <h3 className="mb-4 text-2xl font-bold">Our Team</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Ease Withdraw is founded by a team of experts in fintech, blockchain development, compliance, and 
consumer finance. Our leadership brings experience from top financial institutions, crypto platforms, 
and digital startups. We're supported by a network of advisors specializing in legal, security, and 
innovation. 
              </p>

              <h3 className="mb-4 text-2xl font-bold">Who We Serve</h3>
              <ul className="mb-6 list-none space-y-2 text-lg">
                <li className="transition-all duration-300 hover:translate-x-1">
                  ✦ Crypto Enthusiasts who want to leverage their holdings without liquidating them
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  ✦ Freelancers & Creators who need fast access to credit without a conventional financial footprint.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  ✦ Gig Workers & Remote Professionals who value flexibility and digital-first solutions.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  ✦ Underbanked Individuals seeking secure and modern alternatives to banks.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  ✦ Young Investors looking for unified financial platforms that reflect their financial behaviours and expectations.
                </li>
              </ul> 
            </div>
          </div>

          {/* Offerings Tab */}
          <div className={cn("", activeTab === "offerings" ? "block" : "hidden")}>
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-6 text-center text-2xl font-bold">What We Offer</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                  >
                    <h4 className="mb-4 text-xl font-bold">{offering.title}</h4>
                    <ul className="space-y-2">
                      {offering.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-purple-300">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Tab */}
          <div className={cn("", activeTab === "values" ? "block" : "hidden")}>
            <div className="mx-auto max-w-4xl">
              <h3 className="mb-6 text-center text-2xl font-bold">Our Values</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:transform hover:scale-105"
                  >
                    <h4 className="mb-2 text-xl font-bold">{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How We're Different Tab */}
          <div className={cn("", activeTab === "difference" ? "block" : "hidden")}>
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-6 text-center text-2xl font-bold">How We're Different</h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/20">
                  <AccordionTrigger className="text-lg font-medium">Alternative Credit Access</AccordionTrigger>
                  <AccordionContent>
                    Use digital assets as collateral without giving them up.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-white/20">
                  <AccordionTrigger className="text-lg font-medium">Faster Approval</AccordionTrigger>
                  <AccordionContent>
                    credit lines in minutes, not days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-white/20">
                  <AccordionTrigger className="text-lg font-medium">Smarter Spending</AccordionTrigger>
                  <AccordionContent>
                    Spend crypto just like cash, while preserving your portfolio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-white/20">
                  <AccordionTrigger className="text-lg font-medium">Unified Financial Control</AccordionTrigger>
                  <AccordionContent>
                    Invest, borrow, and spend — all from one intuitive platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-white/20">
                  <AccordionTrigger className="text-lg font-medium">
                    The Technology Behind Ease Withdraw
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>
                        • Secure Wallet Connectivity: Compatible with major wallets like MetaMask, Coinbase Wallet, and
                        others.
                      </li>
                      <li>
                        • On-Chain Collateral Management: Smart contracts lock collateral and manage risk in real-time.
                      </li>
                      <li>• Automated Credit Evaluation: Algorithms assess the value of user collateral instantly.</li>
                      <li>• Integrated Compliance: Our platform meets U.S. regulations for financial institutions.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Contact Tab */}
          <div className={cn("", activeTab === "contact" ? "block" : "hidden")}>
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-6 text-center text-2xl font-bold">Contact Us</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h4 className="mb-4 text-xl font-bold">Get In Touch</h4>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-purple-300" />
                      <a href="mailto:info@easewithdraw.com" className="hover:underline">
                        info@easewithdraw.com
                      </a>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-purple-300" />
                      <span>United States</span>
                    </div>

                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-purple-300" />
                      <span>Contact support via website</span>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <a
                      href="https://facebook.com/easewithdraw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-all duration-300 hover:bg-white/30"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/easewithdraw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 transition-all duration-300 hover:bg-white/30"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <h4 className="mb-4 text-xl font-bold">Join Our Community</h4>
                  <p className="mb-4">
                     Whether you're a user, a partner, or an investor, there’s a place for you in the Ease Withdraw 
ecosystem. Join our waitlist, explore our services, or reach out to our team. Let’s make finance more 
inclusive, innovative, and easy — together. 
                  </p>

                  <form className="space-y-4">
                    {/* <div>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-purple-300 focus:outline-none"
                        required
                      />
                    </div> */}
                    <Link to="/login">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-white px-4 py-2 font-medium text-[#550665] transition-all duration-300 hover:bg-opacity-90"
                    >
                      Join Waitlist
                    </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm">© {new Date().getFullYear()} Ease Withdraw. All rights reserved.</p>
              <p className="text-xs text-white/70">
                Ease Withdraw is a U.S.-based Non-Bank Financial Institution (NBFI)
              </p>
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-purple-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-300 hover:underline">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}