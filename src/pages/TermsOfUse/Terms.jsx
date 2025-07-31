// Terms of use


import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const AccordionItem = ({ 
  title, 
  content, 
  isOpen, 
  toggleAccordion 
}) => {
  return (
    <div className="border-b border-purple-300/20 last:border-b-0">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <span className="text-purple-200 transition-transform duration-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300  ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-purple-100/90 text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

const TermsOfUse = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: '1. Eligibility',
      content: (
        <div>
          <p className="mb-4">To use the Platform, you must:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Be at least 18 years old</li>
            <li>Reside in the United States or a supported jurisdiction</li>
            <li>Have full legal capacity to enter into a binding agreement</li>
            <li>Comply with all applicable U.S. federal and state laws, including anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2. Our Services',
      content: (
        <div>
          <p className="mb-4">EaseWithdraw enables users to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Convert supported cryptocurrencies (e.g., BTC, ETH, USDT) into U.S. Dollars (USD) or other fiat currencies</li>
            <li>Withdraw fiat to verified U.S. bank accounts via ACH, wire, or other supported methods</li>
            <li>Manage transactions via a secure dashboard or mobile application</li>
          </ul>
          <p>EaseWithdraw does not provide cryptocurrency exchange services.</p>
        </div>
      ),
    },
    {
      title: '3. Account Registration and Identity Verification',
      content: (
        <div>
          <p className="mb-4">You agree to provide accurate and complete information during registration and KYC verification. This may include:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Full legal name</li>
            <li>Date of birth</li>
            <li>Government-issued ID (e.g., driver's license, passport)</li>
            <li>Proof of address (e.g., utility bill)</li>
            <li>SSN or other tax identification number (as required)</li>
          </ul>
          <p>We reserve the right to refuse or terminate any account for non-compliance or suspected illegal activity.</p>
        </div>
      ),
    },
    {
      title: '5. User Responsibilities and Acceptable Use',
      content: (
        <div>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Use the Platform for any unlawful activity, including money laundering, fraud, or terrorist financing</li>
            <li>Circumvent geolocation restrictions or account verifications</li>
            <li>Attempt to access accounts not owned by you</li>
            <li>Disrupt, harm, or impair the Platform or its users</li>
          </ul>
          <p>Violation may result in immediate termination and reporting to law enforcement.</p>
        </div>
      ),
    },
    {
      title: '6. Risks and Disclaimers',
      content: (
        <div>
          <p className="mb-4">By using EaseWithdraw, you acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Cryptocurrency values are volatile, and market prices may fluctuate rapidly</li>
            <li>Withdrawals may be delayed due to blockchain congestion or third-party banking issues</li>
            <li>EaseWithdraw is not a bank and does not offer FDIC insurance</li>
            <li>You are solely responsible for all financial decisions made on the Platform</li>
          </ul>
        </div>
      ),
    },
    {
      title: '7. Termination',
      content: (
        <div>
          <p className="mb-4">We may suspend or terminate your access:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>For breach of these Terms</li>
            <li>For any suspicious activity</li>
            <li>At our sole discretion with or without prior notice</li>
          </ul>
          <p>You may terminate your account at any time by contacting support@easewithdraw.com.</p>
        </div>
      ),
    },
    {
      title: '8. Intellectual Property',
      content: (
        <p>All content, trademarks, and technology on the Platform belong to EaseWithdraw or its licensors. You may not reproduce, modify, or distribute any content without written permission.</p>
      ),
    },
    {
      title: '9. Dispute Resolution & Arbitration',
      content: (
        <div>
          <p className="mb-4">Any dispute arising under these Terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA) in the state of Delaware, unless otherwise agreed.</p>
          <p>You waive the right to a class action lawsuit or jury trial.</p>
        </div>
      ),
    },
    {
      title: '10. Limitation of Liability',
      content: (
        <div>
          <p className="mb-4">To the fullest extent permitted by law, EaseWithdraw is not liable for:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Indirect, incidental, or consequential damages</li>
            <li>Losses due to delays, errors, or failed transactions</li>
            <li>Damages exceeding the amount of fees paid by you in the last 3 months</li>
          </ul>
        </div>
      ),
    },
    {
      title: '11. Governing Law',
      content: (
        <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.</p>
      ),
    },
    {
      title: '12. Amendments',
      content: (
        <p>We may revise these Terms at any time. Continued use of the Platform after changes are posted constitutes acceptance.</p>
      ),
    },
    {
      title: '13. Contact Us',
      content: (
        <div>
          <p className="mb-4">If you have questions or concerns, please contact:</p>
          <p className="mb-2">EaseWithdraw Inc.</p>
          <p className="mb-2">Email: <a href="mailto:support@easewithdraw.com" className="text-purple-200 hover:text-white transition-colors duration-200">support@easewithdraw.com</a></p>
          <p>Website: <a href="https://www.easewithdraw.com" className="text-purple-200 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">www.easewithdraw.com</a></p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b min-h-screen from-[#27012F] to-[#550665] text-white py-8 shadow-xl overflow-hidden mx-auto ">
      <div className="p-6 border-b border-purple-300/20">
        <h2 className="text-2xl font-bold">EaseWithdraw – Terms of Use (United States)</h2>
        <div className="mt-2 text-purple-200 flex flex-col sm:flex-row sm:space-x-8">
          <p>Effective Date: 01-Jan-2025</p>
          <p>Last Updated: 01-Jan-2025</p>
        </div>
      </div>
      
      <div className="p-6 text-purple-100/90 leading-relaxed">
        <p>Please read these Terms of Use ("Terms") carefully before using the services provided by 
        EaseWithdraw Inc. ("EaseWithdraw", "we", "us", or "our"). These Terms govern your use of 
        our website, mobile application, APIs, and any related services (collectively, the "Platform"). 
        By creating an account or using the Platform, you agree to be bound by these Terms and our 
        Privacy Policy. If you do not agree, do not access or use the Platform.</p>
      </div>
      
      <div className="divide-y divide-purple-300/10">
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.content}
            isOpen={openSection === index}
            toggleAccordion={() => toggleSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TermsOfUse;