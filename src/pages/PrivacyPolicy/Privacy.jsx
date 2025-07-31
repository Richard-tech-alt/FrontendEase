// Privacy Policy

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronRight,
  
  FileText,
  Eye,
  Users,
  Settings,
  Mail,
 
 
 
  ExternalLink,
  MapPin,
  BabyIcon as Child,
} from "lucide-react"

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedSections, setExpandedSections] = useState([0])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showTableOfContents, setShowTableOfContents] = useState(false)

  useEffect(() => {
    if (searchTerm.length > 2) {
      const results = sections
        .map((section, index) => ({
          index,
          matches:
            section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            section.content.toLowerCase().includes(searchTerm.toLowerCase()),
        }))
        .filter((item) => item.matches)
        .map((item) => item.index)

      setSearchResults(results)

      // Expand sections that match the search
      if (results.length > 0) {
        setExpandedSections((prev) => {
          const newExpanded = [...prev]
          results.forEach((index) => {
            if (!newExpanded.includes(index)) {
              newExpanded.push(index)
            }
          })
          return newExpanded
        })
      }
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index))
    } else {
      setExpandedSections([...expandedSections, index])
    }
  }

  const tabs = [
    { name: "Privacy Policy", icon: <FileText className="h-5 w-5" /> },
    { name: "Information Collection", icon: <Eye className="h-5 w-5" /> },
    { name: "Information Usage", icon: <Users className="h-5 w-5" /> },
    { name: "Information Sharing", icon: <Users className="h-5 w-5" /> },
    { name: "Your Choices", icon: <Settings className="h-5 w-5" /> },
    { name: "Children's Privacy", icon: <Child className="h-5 w-5" /> },
    { name: "Third Parties", icon: <ExternalLink className="h-5 w-5" /> },
    { name: "California Rights", icon: <MapPin className="h-5 w-5" /> },
    { name: "Contact Us", icon: <Mail className="h-5 w-5" /> },
  ]

  const sections = [
    {
      title: "1. Ease Withdraw U.S. Privacy Policy",
      content: `Along with our affiliates and subsidiaries, we take your privacy seriously. This Policy describes the 
      types of personal information we collect from you, how we use your information, how we share your 
      information, and the choices you have regarding our use of your information. In this Policy, we also 
      describe measures we take to protect the security of your information and how you can contact us 
      about our privacy practices.`,
    },
    {
      title: "Scope of Policy",
      content: `If you are the user of our remittance service, holder of an account, debit card account or prepaid 
      card account (together, "Account") offered by Ease (NA) Inc. dba Ease Withdraw ("Ease Withdraw", 
      "Company," "we" or "us") as a licensed money transmitter or as agent and service provider of a U.S. 
      federally or state chartered financial institution (the "Bank") via a non-affiliated third party brand 
      name ("Brand Assignor"), this Policy applies to you. The principal privacy policy, however, may 
      belong to the issuing Bank of your Account where your funds are held. If the privacy policy of the 
      Bank applies, it has been provided to you. This privacy notice is distributed annually to each Account 
      holder customer as required by applicable law; they are also available online. Ease Withdraw is not 
      responsible for the privacy policy of the Bank or the Brand Assignor so you should review those 
      policies carefully.`,
    },
    {
      title: "Website and App Usage",
      content: `When visiting or using our website ("Website") or using the Brand Assignor's website or mobile 
      application (the "App") to access your Account or use the services of your Account, communicating 
      with us electronically, including through social media or through ad content, this Policy applies to you 
      and explains how information that directly identifies you or contains personal identifiers including, 
      but not limited to, name, social security number, date of birth, postal and email address, and phone 
      number ("Personal Information") is collected, stored, used, shared and disclosed by Ease Withdraw 
      in connection with the remittance or financial services provided to you (the "Services") through the 
      App. The Policy also may describe some of our practices regarding information we collect or obtain 
      that does not directly identify you or your identity.`,
    },
    {
      title: "Agreement to Terms",
      content: `By downloading, using, or accessing our Website, 
      Brand Assignor's website or the App, you indicate that you have read, understood and agree to our 
      collection, storage, use, sharing and disclosure of your Personal Information as described in this 
      Policy and our other Terms and Conditions. When it comes to how your Personal Information is 
      collected, stored, used, shared, and disclosed you have certain rights and choices. If you do not agree 
      with our Policy, you should notify us and discontinue your use of our Website, Brand Assignor's 
      website and the App.`,
    },
    {
      title: "Financial Privacy Rights",
      content: `Please note that if you apply for or use our Services or those services of the Bank, the Gramm-Leach
      Bliley Act and similar state financial privacy laws govern your financial privacy rights.`,
    },
    {
      title: "Information We Collect, and How We Collect It",
      content: `You may choose to limit the Personal Information you provide when you use our Services. However, 
      please understand that in order to provide you with the best possible Service experience and in 
      order to comply with certain legal requirements that apply to us, we must directly collect certain 
      information, including, but not limited to Personal Information, when you use our Website, Brand 
      Assignor's website or the App, typically in connection with a potential application submission for 
      Services and when you complete and submit online forms or fields available on our Website, Brand 
      Assignor's website or the App.  
      
      When you visit our Website, Brand Assignor's website or use the App, we may also collect 
      anonymous information that does not directly identify you. This collection includes information that 
      you provide in connection with the App, our Website or the Brand Assignor's website, information 
      we may receive about you from third party data suppliers, and information that is collected 
      automatically through the use of cookies and other digital tracking technologies. Such information 
      described herein may be collected by Ease Withdraw from third parties or through Software 
      Development Kits (SDK's) owned by Ease Withdraw that are installed in the Apps of the Brand 
      Assignors.`,
    },
    {
      title: "A. Information That You Provide Directly",
      content: `Registration Information. We collect Personal Information that you provide when you register for an 
      Account through Brand Assignor's website, the App or at any other point during your relationship 
      with us, to verify and protect your identity and to verify your Financial Information (as defined 
      below) and the privacy of your financial transactions. This information may include your full name, 
      email, mobile phone number, date of birth, physical address, social security number, a government 
      issued photo ID ("Registration Information"), and certain biometric information such as face 
      geometry, voice prints or fingerprints ("Biometric Information"). We will not sell, share or trade any 
      of your Registration Information, Biometric Information, or any other Personal Information or 
      Financial Information collected by us, for any purpose whatsoever, except as required by applicable 
      law or as required for the normal operation of the App, the Brand Assignor's website or our Website 
      and to manage and mitigate risk to protect you and us. Ease Withdraw may, however, share your 
      Registration Information, Biometric Information or Financial Information it collects with the Bank and 
      Brand Assignors except as prohibited by applicable law. When you are no longer our customer, we 
      may continue to share your information as described in this notice. However, you can contact us at 
      any time to limit or opt-out of our sharing. See Notice of Opt-in/Opt-out Rights section below.`,
    },
    {
      title: "B. Financial Information",
      content: `In order to provide you the Services, we collect information about your external financial accounts 
      that you choose to enable with our Website, the App or through Brand Assignor's website, which 
      may include debit card accounts or bank accounts ("External Financial Accounts"). This information 
      may include, but not be limited to, financial institution names, account names, non-account number 
      account identifiers, account balance, transactional information and debit or credit card information. 
      Information about your External Financial Accounts, as described above, and information about your 
      Account and Account transactions make up your Financial Information ("Financial Information"). We 
      may share your Financial Information with third parties except as prohibited under applicable law, 
      including the Bank and Brand Assignors. However, with regard to our sharing of Financial Information 
      with Brand Assignors, you can contact us at any time to limit or opt-out of our sharing. See Notice of 
      Opt-in/Opt-out Rights section below.`,
    },
    {
      title: "C. Information That You Permit Us To Collect",
      content: `Location Information. In order to enable and provide the basic services of the App or Website, we 
      may need to obtain your location through GPS, WIFI, or wireless network triangulation. We maintain 
      location information as long as reasonably necessary to enable the basic service of the App and to 
      protect you and us from any risk. We will delete this data in accordance with applicable law. Please 
      see "Data Retention" below to learn more. 
      
      We will not sell, trade, share nor provide access to any of your Location Information, for any purpose 
      whatsoever, except as required by applicable law or to manage and mitigate risk to protect you and 
      us. 
      
      If you would like to opt-out of the collection of your location data, you can do so by adjusting your 
      settings through your device to limit the App's access to your location data, however, this may affect 
      your use of certain features and limit the functionality available through the App. Please see "Control 
      Over Your Personal Information" below to learn more.`,
    },
    {
      title: "D. Information from Third Party Partners",
      content: `We also collect and receive information about you from third parties directly related to the Services, 
      such as companies providing identity verification, fraud prevention and similar services, and combine 
      that with information we collect through the Website and the App. This information may include 
      information from Brand Assignors or from financial institutions to verify your External Financial 
      Account, to verify availability of funds in your External Financial Account, or information related to 
      your Account or the financial transaction you request or initiate in connection with the Website and 
      the App. We may also collect information about you from public records or that is otherwise publicly 
      available. The data we receive from these third-party partner services is dependent upon that third 
      party's policies and your privacy settings for those third-party partner services. 
      
      We use Plaid Technologies ("Plaid") to gather certain information from financial institutions for 
      identity verification purposes, as well as to manage and mitigate risk to protect you and us and to 
      comply with legal requirements that apply to your use of the Website and the App. By using our 
      Service, you grant us and Plaid the right, power, and authority to act on your behalf to collect and 
      verify your Personal Information and Financial Information from the relevant financial institution. You 
      agree to your Personal Information and Financial Information being transferred, stored, and 
      processed by Plaid in accordance with its Privacy Policy.`,
    },
    {
      title: "E. Information That Is Automatically Collected",
      content: `Like most websites and online services, we automatically collect certain types of usage information 
      when you visit our Website, use the App, read our emails, or otherwise engage with us. We typically 
      collect this information through a variety of tracking technologies, including cookies, web beacons, 
      Flash cookies (locally stored objects), embedded scripts, location-identifying technologies, and 
      similar technology (collectively, "Tracking Technologies"). Information that is automatically collected 
      through Tracking Technologies as covered in this section does not directly identify you.  
      
      These Tracking Technologies only collect anonymized information about how you use the App or 
      Website (e.g., the pages you view, the links you click, and other actions you take on the App), 
      information about your browser and online usage patterns (e.g., IP address, browser type, browser 
      language, referring / exit pages and URLs, pages viewed, whether you opened an email or clicked 
      links), and information about the device(s) you use to access the App or Website (e.g., mobile device 
      identifier, mobile carrier, device type, model and manufacturer, mobile device operating system 
      brand and model, and depending on your mobile device settings, your geographical location data 
      (which could include GPS coordinates (e.g. latitude and/or longitude) or similar information 
      regarding the location of your mobile device), or we may be able to approximate a device's location 
      by analysing other information, like an IP address.  
      
      We may also collect analytics data, or use third party analytics tools, to help us measure traffic and 
      usage trends for the App. Although we do our best to honor the privacy preferences of our visitors, 
      we are not able to respond to Do Not Track signals from your browser at this time. 
      
      We use or may use the data collected through Tracking Technologies to: (a) recognize and/or contact 
      you across multiple devices; (b) provide and monitor the effectiveness of our Website; (c) monitor 
      aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on our 
      Website; (d) diagnose or fix technology problems; (e) manage and mitigate risk to protect you and 
      us; (f) ensure your security and privacy when visiting our Website or the App; (g) evaluate our 
      Website and App's advertising and promotional effectiveness; and, (h) otherwise to plan for and 
      enhance our Website. We may use both our own and our third-party partner's cookies to support all 
      of the above Tracking Technology activities.
      
      If you would prefer not to accept cookies when visiting our Website, most browsers will allow you to: 
      (i) change your browser settings to notify you when you receive a cookie, which lets you choose 
      whether or not to accept it; (ii) disable existing cookies; or (iii) set your browser to automatically 
      reject cookies. Please note that doing so may negatively impact your experience using the Website. 
      Depending on your mobile device and operating system, you may not be able to delete or block all 
      cookies. You may also set your email options to prevent the automatic downloading of images that 
      may contain technologies that would allow us to know whether you have accessed the email we sent 
      to you and performed certain functions with it.  
      
      Deleting cookies does not delete Local Storage Objects (LSOs). If you choose to delete LSOs from our 
      sites, then you may not be able to access and use all or part of the sites or benefit from the 
      information and services offered. While you may disable the usage of cookies through your browser 
      settings, we do not change our practices in response to a Do Not Track signal in the HTTP header 
      from your browser or the App. We track your activities if you click on advertisements for Ease 
      Withdraw services on third party platforms such as search engines and social networks and may use 
      analytics to track what you do in response to those advertisements. We may also use web beacons 
      and tracking URLs in our messages to you to determine whether you have opened a certain message 
      or accessed a certain link. 
      
      We and our third-party partners may use cookies and tracking technologies for advertising purposes. 
      For more information about tracking technologies, please see "Third Party Tracking and Online 
      Advertising" below.`,
    },
    {
      title: "2. How We Use Your Personal Information",
      content: `We collect, use, process, combine, retain and store personal information that we collect or receive 
      for a variety of purposes, including the following: 
      
      • To verify your identity and age and to guard against potential fraud; 
      • To provide you with the features and functionalities of the App or Website; 
      • To process and respond to your transaction requests or inquiries initiated through 
      the App or Website; 
      • To provide customer service and to send regular communications regarding your 
      Account; 
      • To market additional products and services to you; 
      • To enforce agreements with you; 
      • To comply with a court order, legal process, or applicable law, including retaining 
      Personal Information or responding to governmental or regulatory requests; and, 
      • For any other lawful purpose, or any other purpose for which you provide your 
      consent.
      
      We also may use information that does not directly identify you, or aggregate information, for the 
      purposes noted in this Policy.`,
    },
    {
      title: "3. Sharing of Personal Information",
      content: `We may also share Personal Information with third party partners for everyday business purposes, 
      including: 
      
      • Third-party vendors and other service providers, including the Brand Assignor, that 
      perform services on our behalf, as needed to carry out their work for us, which may 
      include fraud detection, identity verification, identifying and serving targeted 
      advertisements, payment processing, and providing analytics services. For example, 
      we may provide your Personal Information to financial institutions to process fund 
      transfers and store funds that are associated with your Account, provide the App 
      features and functionality, and review potentially suspicious or fraudulent activity on 
      the App; 
      • The Bank in order to comply with Bank requirements and Applicable Law; 
      • Government officials, including law enforcement, when we are subject to subpoena, 
      court order or similar legal procedure or we need to do so to comply with applicable 
      law; 
      • The Brand Assignor to perform services on our behalf and/or for marketing and 
      advertising. 
      
      We will limit sharing of your information in accordance with the choices you have provided us in 
      response to this Policy. However, with regard to the sharing of Personal Information with Brand 
      Assignors, you can contact us at any time to limit or opt-out of our sharing. See Notice of Opt-in/Opt
      out Rights section below.`,
    },
    {
      title: "4. Control Over Your Personal Information",
      content: `Modifying or deleting your information. If you have registered for an Account, we may provide you 
      with the ability to access, review and change certain information by logging into the App, visiting 
      your Account, and using the features and functionalities available there. You are responsible for 
      keeping your contact information and External Financial Account information up to date. 
      Modifications to your information may require further validation before being accepted. 
      
      If you would like to request access to, stop or opt-out of the sale of, or request correction or deletion 
      of Personal Information, you may send your request to us at info@easewithdraw.com. We may not 
      be able to modify or delete your information in all circumstances. If you have any questions about 
      reviewing, modifying, or deleting your information, or if you want to remove your name or 
      comments from publicly displayed content, you can contact us directly at info@easewithdraw.com. 
      We will try to respond to your request within 30 days but response time may vary depending on the 
      laws and regulations applicable to your request, and we may be entitled to extend this period in 
      certain circumstances. We will comply with your request to the extent required by applicable law.`,
    },
        {
      title: "5. Social Media Marketing and Third Party Tracking",
      content: `We do not share, nor do we permit third party online advertising networks, social media companies and other third-party services that we partner with, to collect information about your use of our Website or the App.
      
      We may share information collected through Tracking Technologies. However, this information is 
shared only for purposes of our own analytics and related marketing initiatives, and is not to be used 
by third parties in furtherance of any separate marketing. As noted above, depending on your 
browser or mobile device, you may be able to manage your settings to delete or notify you of cookies 
and other tracking technology.`,
    },
        {
      title: "6. How We Store and Protect Your Information ",
      content: `Data storage and transfer. Your information collected through our Website or the App may be stored 
and processed in the United States or any other country in which Ease Withdraw or our service 
providers maintain facilities. 
Keeping your information safe. We are committed to protecting your Personal Information in a 
secure and private manner and against accidental, unlawful or unauthorized destruction, loss, 
alteration, access, disclosure or use. We will employ physical, administrative, and technological 
safeguards designed to preserve the integrity and security of all information collected through our 
App and our Website. SSL encryption also is used on our Website and the App when you are asked to 
enter confidential information as part of your registration. You can tell you have entered a secure, 
encrypted session by looking for an unbroken key, a locked padlock, or similar icon on your browser 
screen. In addition, you are in an encrypted session when your session changes from “http” to 
“https.” 
In the event that any information entrusted to us is compromised as a result of a breach of security, 
we will take reasonable steps to investigate the incident and, where appropriate, notify those 
individuals whose information may have been compromised and take other steps, in accordance with 
applicable law.`,
    },
    {
    title : "7. Data Retention" ,
    content : `We intend to only keep personal and transactional information for as long as we deem it necessary 
    for our own business purposes, or as otherwise required to operate the App or Website, comply with 
    your requests, or to otherwise comply with applicable law.`,
    },
    {
      title: "8. Information from Children",
      content: `The App does not allow users under the age of 18 without the verifiable consent from their parents. 
      As such, our Website and the App is not directed to children under the age of 18, and we do not 
      knowingly collect Personal Information from children under the age of 18 without appropriate parent 
      consent. In the event that we learn that we have inadvertently collected Personal Information from a 
      child under age 18 without parent consent, we will delete that information as quickly as possible. 
      
      In accordance with the Children's Online Privacy Protection Act ("COPPA"), we do not knowingly 
      collect, store or process the information of a child under the age of 13. If you believe that we might 
      have any information from a child under the age of 13, please contact us immediately 
      at info@easewithdraw.com. 
      
      We are not responsible for the data collection and use practices of non-affiliated third parties to 
      which our Website or the App may link.`,
    },
    {
      title: "9. Third Party Websites",
      content: `The App or our Website may contain links to and from third party websites of our business partners, 
      advertisers, and social media sites. If you follow a link to any of these websites, please note that 
      these websites have their own privacy policies and that we do not accept any responsibility or 
      liability for their policies. We cannot guarantee how these third parties use cookies or whether they 
      place cookies on your computer that may identify you personally. We strongly recommend that you 
      read their privacy policies and terms and conditions of use to understand how they collect, use, store 
      and share information before you provide them with any personal information. We are not 
      responsible for the privacy practices or the content on the websites of third parties.`,
    },
    {
      title: "10. Transfer or Sale Event",
      content: `We reserve the right to transfer any personal information we have about you in the event we sell or 
      transfer all or a portion of our business or assets (including in the event of a merger, acquisition, joint 
      venture, reorganization, divestiture, dissolution or liquidation).`,
    },
    {
      title: "A. Updates to This Policy",
      content: `We may modify or update this Policy from time to time as we deem necessary in our sole discretion. 
      If there are material changes to this Privacy Policy, we will provide notice where, and in the manner 
      required by applicable law, including but not limited to, through our Website and the App by 
      changing the effective date at the bottom of this Policy notice. Your continued use of our Website 
      and the Services after an updated Policy is posted constitutes your consent to be bound by any such 
      changes. We will, however, seek your consent for future modifications to the extent we are required 
      by applicable law. If you object to any changes, you may request to close your Account.`,
    },
    {
      title: "11. Contacting Us/ Limiting Our Sharing",
      content: `If you have questions about this Policy or our privacy practices or to opt-in or opt-out of information 
      sharing, please contact us at info@easewithdraw.com. You may also be able to change your privacy 
      preferences in the settings section/tab of the App, if such functionality is available. Limiting our 
      sharing of your information may require the closure of your Account and will be limited to our ability 
      of doing so in accordance with Applicable Law. Note: Disclosures not subject to an opt-out choice 
      include: disclosures necessary to effect, administer or enforce a transaction you request; disclosures 
      to our authorized service providers; disclosures permitted or required by law or disclosures to 
      prevent fraud or other illegal activities. 
      
      Inquiries and Feedback. If you contact us, we will collect the information that you provide us, such as 
      your contact information and the contents of your communication with us. 
      
      NOTICE OF OPT-IN/OPT-OUT RIGHTS 
      
      If you prefer that we expand or limit sharing with affiliates or non-affiliated third parties as described 
      herein, you may opt-in (for California, North Dakota, and Vermont consumers only, see below) or opt
      out of that information sharing by any of the following methods: 
      
      • Email info@easewithdraw.com 
      • Mail to: Attn: Ease Withdraw Privacy Dept. 
      
      You may also be able to change your privacy preferences in the settings section/tab of the App, if 
      such functionality is available.`,
    },
    {
      title: "12. Texas Complaint Notice: T.A.C Title 7, Part 2, §33.51",
      content: `If you have a complaint, first contact the consumer assistance division of Ease (NA), Inc. dba Ease 
      Withdraw at (Need to include Ease Withdraw consumer assistance telephone number here), if you 
      still have an unresolved complaint regarding the company's money transmission or currency 
      exchange activity, please direct your complaint to: Texas Department of Banking.`,
    },
    {
      title: "13. FOR CALIFORNIA, NORTH DAKOTA AND VERMONT CONSUMERS",
      content: `In accordance with California, North Dakota and Vermont law, we will not share information we 
      collect about you with companies outside of Ease Withdraw except as required or permitted by law. 
      We will not disclose information about your creditworthiness to our affiliates and will not disclose 
      your personal information or financial information to non-affiliated third parties to market to you, 
      other than as permitted by California, North Dakota, and Vermont law, which may entail obtaining 
      your consent prior to disclosing such information. 
      
      We will disclose financial information about consumers with a California, North Dakota, or Vermont 
      mailing address only with your written authorization ("consent'), unless otherwise permitted or 
      required by law. Written authorizations from North Dakota and Vermont consumers may be 
      delivered to us at the email or mailing address above and must contain your name, address, 
      signature and your consent.  
      
      You may revoke your consent at any time by writing or emailing us at the same addresses above. You 
      may also be able to change your privacy preferences in the settings section/tab of the App, if such 
      functionality is available. California consumers should contact us at the mailing address below for 
      instructions on how to deliver their consent.`,
    },
    {
      title: "14. Your California Privacy Rights",
      content: `The California Consumer Protection Act (CCPA) gives California residents rights to receive certain 
      disclosures regarding the collection, use, and sharing of Personal Information, as well as the right to 
      control this information. While we do not share your information with third parties for their own 
      direct marketing purposes, if you are a California resident, the CCPA permits you to request 
      information regarding the disclosure of Personal Information to third parties for their direct 
      marketing purposes during the immediately preceding calendar year. You may make two requests 
      each year by contacting us at: 
      
      • Email info@easewithdraw.com 
      • Mail to: Attn: Ease Withdraw Privacy Dept.`,
    },
    {
      title: "15. NOTICE AT COLLECTION: California Privacy Statement for California Consumers",
      content: `This California Privacy Statement ("Privacy Statement") supplements the Policy and applies only to 
      consumers residing in California. 
      
      The CCPA excludes Personal Information already covered by financial services privacy laws such as 
      the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (CFIPA). As a 
      result, the disclosures and rights granted by the CCPA do not apply to Personal Information related to 
      a financial account. If you are a customer or holder of an Account, please consult the Policy portions 
      above for information about our practices and your privacy rights. 
      
      This Statement uses certain terms that have the meaning given to them in the California Consumer 
      Privacy Act of 2018 and its implementing regulations (the "CCPA"). Under the CCPA, California 
      consumers may be entitled to notices and disclosures regarding the collection and use of their 
      Personal Information under the CCPA. This disclosure and the information below are intended to 
      provide the Notice at Collection required under the CCPA.`,
    },
    {
      title: "A. Collection of Personal Information",
      content: `In the 12 months prior to the effective date of the Policy, Ease Withdraw may have collected the 
      below Categories of Personal Information from the indicated Categories of Sources; this information 
      may have been shared with the described Categories of Third Parties for the specified Business 
      Purposes.  
      
      Categories of Sources, Categories of Third Parties, Commercial Purposes and Business Purposes are 
      further defined below. 
      
      Categories of Sources: in the 12 months prior to the effective date of the Policy, Ease Withdraw may 
      have collected Personal Information about you from the following Categories of Sources: 
      
      • You: we may collect information directly from you, for example, through transaction 
      forms and your interactions with us or through providing customer support or 
      consultation, including using email, postal mail, customer service call centres or live 
      chat; we may also collect information to verify your identity to help prevent fraud. 
      • Your Use of Our Website: we may collect information from you or your device 
      through your use of our Website for online Services we offer or through automated 
      means such as communications protocols, e-mail communications and cookies or 
      similar Tracking Technologies as described in the Policy above; 
      • Affiliates, Subsidiaries or Vendors: we may collect information about you from our 
      affiliates, subsidiaries, or vendors who provide services on our behalf; 
      • Your Use of Mobile Applications: we may collect information from you or your device 
      through your use of mobile applications, including the App; 
      • Social Media Networks or Publicly Available Sources: we may collect information 
      about you from social media or other public data sources; and 
      • Advertising Networks: we may collect information about you from advertising 
      networks so we can serve you with advertisements we believe may be of interest to 
      you.`,
    },
    {
      title: "Business Purposes",
      content: `In the 12 months prior to the effective date of the Policy, Ease Withdraw may 
      have shared your Personal Information for the following Business Purposes: 
      
      • Auditing: related to our interactions with you and any concurrent transactions, 
      including, but not limited to, counting ad impressions, verifying positioning and 
      quality of ad impressions, and auditing compliance with applicable standards; 
      • Security Purposes: detecting security incidents, protecting against malicious, 
      deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that 
      activity; 
      • Debugging: debugging to identify and repair errors that impair the intended 
      functionality of our systems; 
      • Short-term use: short term, transient use, including, but not limited to, the 
      contextual customization of ads shown as part of your interactions with us; 
      • Performing the Services: in addition to the purposes described in the Policy, 
      maintaining or servicing accounts, providing customer service, processing or fulfilling 
      orders and transactions, verifying your information, processing payments, providing 
      financing, providing advertising or marketing services, providing analytic services, or 
      providing similar services; 
      • Internal R&D: undertaking internal research for technological development and 
      demonstration; and 
      • Quality Purposes: undertaking activities to verify or maintain the quality or safety of 
      the Services and to improve, upgrade, or enhance the Services.`,
    },
    {
      title: "Categories of Third Parties",
      content: `In the 12 months prior to the effective date of the Privacy 
      Statement, Ease Withdraw may have shared your Personal Information with the following 
      Categories of Third Parties: 
      
      • Government entities: government entities including law 
      enforcement agencies through a valid subpoena or court order or 
      similar administrative process, or as required by applicable law; 
      • Professional services organizations: professional services 
      organizations, such as law firms and independent auditors; 
      • Advertising and social networks: advertising and social networks 
      (who may combine your personal information with their own 
      records, and records available from other sources for their own 
      marketing purposes); 
      • Internet service providers; 
      • Data analytics providers; 
      • Operating systems and platforms; 
      • The Bank; 
      • Brand Assignors; 
      • Other Service Providers as needed to provide the Services; and, 
      • Our affiliates and subsidiaries.`,
    },
    {
      title: "Sale Of Personal Information",
      content: `Ease Withdraw does not sell your personal information to third parties in exchange for money. 
      However, Ease Withdraw does participate in advertising, marketing and analytic programs from 
      which we and third parties with whom we contract may derive value; such exchanges may constitute 
      a "sale" under applicable law.  
      
      While participating in the above programs, in the 12 months prior to the effective date of the Policy, 
      Ease Withdraw may have "sold" your personal information to a Brand Assignor or the Bank, 
      including: 
      
      • Personal Information: Information that identifies you, including 
      Biometric Information. 
      • Financial Information: Transactional information about your 
      Account.`,
    },
    {
      title: "California Resident Rights",
      content: `California residents have the right to request that their personal information not be sold to third 
      parties. To exercise your right to opt-out of the sale of your personal information, please submit a 
      personal information request as described above in the section of our Policy Statement entitled 
      "Control Over Your Personal Information". 
      
      In addition, if you are a California resident, you may have the right to request, twice in a 12-month 
      period, the categories of personal information we have collected about you during the past 12 
      months and, for each category of personal information, the following information: 
      
      • the categories of sources from which we collected that 
      information; 
      • our business or commercial purpose(s) for collecting that 
      information; 
      • the categories of third parties to whom that information was 
      sold or disclosed for a business purpose; and 
      • the business or commercial purpose(s) for which we sold or 
      disclosed that information. 
      
      You also may have the right to request the deletion of the personal information we have collected 
      from you. Once you have confirmed you are a California resident, you may submit a personal 
      information request in accordance with the Policy section entitled "Control Over Your Personal 
      Information" twice in any 12-month period. Upon receiving a request, we will confirm receipt of the 
      request within 10 business days and will provide information on how we will verify your identity and 
      process your request.  
      
      We may require you to provide any of the following information: your name, date of birth, your 
      Social Security or Tax ID number, and the email and physical addresses associated with your Account. 
      We may also ask you for one or more of your recent transactions or the card number associated with 
      your Account. We will then respond to and comply with your deletion request within 45 days. 
      
      You may also designate an authorized agent to make a personal information request on your behalf. 
      If you choose to designate an agent, you may be required to provide the authorized agent with 
      written permission to make your request and verify your own identity directly with us. We may deny 
      a request from an agent that does not submit proof that they have been authorized by you to act on 
      your behalf. 
      
      You have the right not to be discriminated against because you exercise any right described in the 
      Policy or this Statement.`,
    },
    {
      title: "16. Contact",
      content: `Contact for More Information: for questions or concerns about our Policy or the Privacy Statement, 
      please contact us as specified in the "Contacting Us" section of the Policy above.`,
    },
    {
      title: "17. Last Revision Date",
      content: `This Policy was last revised on February 5, 2025`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27012F] to-[#550665] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Cookie Consent Banner */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-[#27012F]/90 backdrop-blur-lg border-t border-white/20 p-4 z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-white/80">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                Cookie Settings
              </button>
              <button className="px-4 py-2 bg-white text-[#27012F] hover:bg-white/90 rounded-lg text-sm font-medium transition-colors">
                Accept All
              </button>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row gap-8">
          {/* <div className="md:w-1/4">
            <div className="sticky top-8 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-6 w-6" />
                <h2 className="text-xl font-bold">Privacy Policy</h2>
              </div>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search policy..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                {searchResults.length > 0 && searchTerm.length > 2 && (
                  <div className="mt-2 text-sm text-white/70">
                    Found {searchResults.length} {searchResults.length === 1 ? "result" : "results"}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 p-2 bg-white/10 rounded-lg">
                  <Globe className="h-4 w-4 text-white/70" />
                  <select className="bg-transparent text-white border-none focus:outline-none text-sm w-full appearance-none">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4 gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-md flex-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  Print
                </button>
                <button className="flex items-center gap-1 text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-md flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  PDF
                </button>
              </div>
              <div className="text-sm text-white/70 mb-4">Last Updated: February 5, 2025</div>
              <nav>
                <ul className="space-y-2">
                  {tabs.map((tab, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setActiveTab(index)}
                        className={`w-full flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
                          activeTab === index ? "bg-white/20 text-white" : "hover:bg-white/10 text-white/70"
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="md:w-full py-2 px-4 md:px-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl"
            >
              <h1 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4">{tabs[activeTab].name}</h1>

              <div className="space-y-4">
                {sections.map((section, index) => (
                  <div
                    id={`section-${index}`}
                    key={index}
                    className={`border ${
                      searchResults.includes(index) && searchTerm.length > 2
                        ? "border-white/50 bg-white/5"
                        : "border-white/20"
                    } rounded-lg overflow-hidden`}
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className={`w-full flex items-center justify-between p-4 ${
                        searchResults.includes(index) && searchTerm.length > 2 ? "bg-white/10" : "hover:bg-white/10"
                      } transition-colors duration-200`}
                    >
                      <h3 className="text-lg font-medium">{section.title}</h3>
                      {expandedSections.includes(index) ? (
                        <ChevronDown className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-5 w-5 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedSections.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-white/80 leading-relaxed whitespace-pre-line">{section.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Version History */}
              {/* <div className="mt-8 pt-6 border-t border-white/20">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Version History
                </h2>
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">February 5, 2025</div>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded">Current</span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                      Updated California Privacy Rights section and added CCPA compliance information.
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">October 12, 2024</div>
                      <button className="text-xs text-white/70 underline">View</button>
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                      Updated information collection practices and third-party sharing policies.
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">May 30, 2024</div>
                      <button className="text-xs text-white/70 underline">View</button>
                    </div>
                    <p className="text-sm text-white/70 mt-1">Initial privacy policy publication.</p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
        {/* Floating Table of Contents Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <FileText className="h-6 w-6" />
          </button>

          {/* Table of Contents Panel */}
          <AnimatePresence>
            {showTableOfContents && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 w-72 bg-[#27012F]/90 backdrop-blur-lg rounded-lg shadow-xl p-4 border border-white/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Table of Contents</h3>
                  <button onClick={() => setShowTableOfContents(false)} className="text-white/70 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto pr-2 space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTab(0) // Set to overview tab
                        if (!expandedSections.includes(index)) {
                          toggleSection(index)
                        }
                        // Scroll to the section
                        document.getElementById(`section-${index}`)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                        setShowTableOfContents(false)
                      }}
                      className="w-full text-left text-sm py-1 px-2 rounded hover:bg-white/10 transition-colors"
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}