import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  FileText, 
  Send, 
  Sparkles,
  ArrowRight,
  Building,
  Check
} from 'lucide-react';
import RadialGlowButton from './ui/radial-glow-button';

export default function BuyerGuide({ onBack, onInquire }) {
  const steps = [
    {
      num: 'Step 1',
      title: 'Initial Enquiry and Introduction',
      desc: [
        'The process begins when a prospective buyer contacts Savera Tex Solution LLP.',
        'During the initial conversation, we also understand how the buyer came to know about Savera, helping us understand our business connections and enquiry sources.'
      ]
    },
    {
      num: 'Step 2',
      title: "Understanding the Buyer's Business",
      desc: [
        'We collect the basic business details of the buyer and understand the nature of their business.',
        'This helps us understand their market, customer requirements, purchasing preferences and the type of textile products they are interested in sourcing.'
      ]
    },
    {
      num: 'Step 3',
      title: 'Requirement Assessment and Budget Planning',
      desc: [
        "After understanding the business, we discuss the buyer's actual product requirements.",
        'The buyer determines the budget they are comfortable allocating for the purchase. Product categories, expected quantity and other preferences are considered while understanding the proposed buying plan.',
        "The budget is therefore based on the buyer's own purchasing decision and requirements."
      ]
    },
    {
      num: 'Step 4',
      title: 'Product Discussion and Mutual Understanding',
      desc: [
        'Savera and the buyer discuss which products can be considered within the agreed budget.',
        'This discussion may cover product categories, designs, quality expectations, approximate quantities and available sourcing possibilities.',
        'The objective is to establish a clear understanding of what the buyer intends to purchase before moving towards manufacturer selection.'
      ]
    },
    {
      num: 'Step 5',
      title: 'Manufacturer and Product Selection',
      desc: [
        "Based on the buyer's requirements and agreed budget, Savera identifies suitable manufacturers and relevant product options through its sourcing network.",
        'The product selection and proposed sourcing arrangement are discussed with the buyer before proceeding.',
        'The manufacturer responsible for supplying the selected products is identified as part of this process.'
      ]
    },
    {
      num: 'Step 6',
      title: 'Advance Payment Directly to the Manufacturer',
      desc: [
        'Once the buyer and the relevant manufacturer have agreed on the product and commercial terms, the buyer pays the required advance amount directly to the concerned manufacturer.',
        'The advance amount and applicable conditions are communicated and agreed upon before payment.',
        'Savera facilitates the sourcing discussion, while the product payment is made directly between the buyer and the manufacturer under the agreed arrangement.'
      ]
    },
    {
      num: 'Step 7',
      title: 'Balance Payment Before Dispatch',
      desc: [
        'Before the goods are dispatched, the buyer pays the remaining agreed amount directly to the concerned manufacturer.',
        'The applicable product details, outstanding payment and dispatch arrangements should be confirmed with the manufacturer before completing the payment.'
      ]
    },
    {
      num: 'Step 8',
      title: 'Dispatch Coordination and Communication',
      desc: [
        'Once the payment requirements have been fulfilled, the manufacturer proceeds with the agreed dispatch arrangements.',
        'Savera facilitates communication between the buyer and the manufacturer regarding the sourcing and order coordination process.'
      ]
    }
  ];

  const agentChecks = [
    {
      num: '01',
      title: 'Verify the Business Identity',
      desc: "Ask for the firm's business name, contact information and relevant business details. Understand which business entity you are dealing with and check any applicable registration information. The details should be clear before you proceed with a transaction."
    },
    {
      num: '02',
      title: 'Understand the Business Background and Experience',
      desc: 'Learn how long the agent has been involved in the textile trade and which product categories or markets they work with. Review the available business information and ask questions about their experience in handling buyer and supplier requirements.'
    },
    {
      num: '03',
      title: 'Check Communication and Responsible Contacts',
      desc: 'Identify the person who will handle your enquiry and coordinate discussions. Make sure you have an established contact for communication and understand who is authorised to discuss product selection, pricing and changes to the proposed order.'
    },
    {
      num: '04',
      title: 'Understand the Sourcing Network and Supplier Connections',
      desc: 'Ask which textile markets or sourcing centres the agent works with and whether the proposed products can be sourced from suitable manufacturers or suppliers. Understand how the agent identifies product options according to your requirements, preferred quality and budget.'
    },
    {
      num: '05',
      title: "Clarify the Agent's Role and Commercial Responsibilities",
      desc: "Establish who will manufacture or supply the goods, who will issue the invoice, who will receive payment and who will coordinate dispatch. Also clarify the agent's responsibilities and whether a commission or agency fee applies, including who pays it and when."
    },
    {
      num: '06',
      title: 'Confirm Payment Arrangements',
      desc: 'Before transferring money, verify the identity of the payment recipient and ensure the payment instructions match the agreed transaction. If payment details change, confirm the change through an established contact rather than relying only on an unfamiliar message or phone number.'
    },
    {
      num: '07',
      title: 'Discuss Advance and Balance Payment Terms',
      desc: 'Understand whether an advance payment is required, how much is payable and when the remaining amount must be paid. Confirm the payment schedule and other applicable conditions with the concerned manufacturer or seller before making a commitment.'
    },
    {
      num: '08',
      title: 'Review Business References and Keep Written Records',
      desc: 'Where possible, seek feedback from buyers or suppliers who have previously deal with the agent. Keep written records of product specifications, prices, commission arrangements, payment terms and the responsibilities agreed between the parties. Do not rely only on verbal assurances for important commercial matters.'
    }
  ];

  const comparisonRows = [
    {
      area: 'Finding the Right Manufacturer',
      direct: 'You independently search for manufacturers and identify suitable suppliers for your product requirements.',
      savera: 'We help you discover suitable manufacturers through our textile industry contacts and sourcing network.'
    },
    {
      area: 'Coordination',
      direct: 'You handle discussions, communication and follow-ups with each manufacturer on your own.',
      savera: 'We assist in coordinating discussions and facilitate communication between you and the concerned manufacturers.'
    },
    {
      area: 'Price',
      direct: 'Prices depend on the manufacturer, product specifications, order quantity and your ability to compare market offers.',
      savera: 'Our industry experience and manufacturer connections can help you explore competitive offers. Actual prices depend on the product, quantity and manufacturer\'s terms; better pricing is not guaranteed.'
    },
    {
      area: 'Credit',
      direct: 'Credit availability depends on the manufacturer\'s policies and your business relationship. You need to confirm the terms directly with the supplier.',
      savera: 'Credit terms, if offered, are determined by the manufacturer and depend on the buyer and transaction. Savera can help communicate the available terms but does not itself provide credit.'
    }
  ];

  const briefPoints = [
    {
      num: '1',
      title: 'Business Details',
      desc: 'Share your firm name, business location and the nature of your business so we can understand your purchasing requirements.'
    },
    {
      num: '2',
      title: 'Product Requirements',
      desc: 'Specify the categories you wish to source, such as sarees, salwar suits, lehengas, Indo-Western wear or fabrics.'
    },
    {
      num: '3',
      title: 'Budget and Price Expectations',
      desc: 'Mention your approximate budget or expected price range per piece or per metre, as applicable.'
    },
    {
      num: '4',
      title: 'Design and Quality Preferences',
      desc: 'Explain your preferred designs, fabric types, colours, patterns and quality. Product photographs or references can also help communicate your expectations.'
    },
    {
      num: '5',
      title: 'Approximate Quantity',
      desc: 'Share the estimated quantity you are looking to purchase, including any category-wise or design-wise requirements.'
    },
    {
      num: '6',
      title: 'Sourcing Preferences',
      desc: 'Mention any preferred manufacturing location, if you have one, or let us explore suitable sourcing centres based on your requirements.'
    },
    {
      num: '7',
      title: 'Purchasing Timeline',
      desc: 'Let us know when you expect to make your purchase so we can understand your sourcing schedule.'
    }
  ];

  return (
    <article className="min-h-screen bg-[#FAF8F5] text-[#0F1318] pb-16">
      
      {/* ── TOP STICKY / HERO ACTION BAR ── */}
      <div className="bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/60 pt-6 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Back Button */}
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-800 text-xs sm:text-sm font-bold border border-[#fbd7b4] shadow-xs hover:border-[#f16701] hover:text-[#f16701] transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#f16701]" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Guide Header Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-playfair tracking-tight text-[#0F1318]">
              Buyer's Guide &amp; Sourcing Handbook
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
              Essential guidance for retailers, wholesalers, and commercial buyers trading in Indian textiles through Savera Tex Solution LLP.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 pt-10">

        {/* ══════════════════════════════════════════════════════════
            PART 1: HOW WE WORK WITH NEW BUYERS
        ══════════════════════════════════════════════════════════ */}
        <section id="how-we-work-guide" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#fbd7b4]/50 pb-4">
            <span className="text-[11px] font-black text-[#f16701] uppercase tracking-widest block mb-1">
              Part 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-playfair text-[#0F1318]">
              How We Work with New Buyers
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#fbd7b4]/70 shadow-xs space-y-3">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              At Savera Tex Solution LLP, every new business relationship begins with understanding the buyer's business and purchasing requirements.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              We follow a structured approach to understand the buyer's expectations, establish a suitable purchasing budget, identify relevant products and connect with appropriate manufacturers.
            </p>
            <p className="text-sm sm:text-base text-neutral-800 font-semibold leading-relaxed pt-1">
              Our process is based on clear communication, direct payment to the concerned manufacturer and transparency at every stage.
            </p>
          </div>

          {/* 8 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {steps.map((st, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white border border-[#fbd7b4]/60 shadow-xs hover:border-[#f16701]/60 transition flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF8F5] text-[#f16701] border border-[#f8b47d]/40">
                      {st.num}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-[#f16701] transition">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1318] group-hover:text-[#f16701] transition">
                    {st.title}
                  </h3>
                  <div className="space-y-2 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {st.desc.map((d, dIdx) => (
                      <p key={dIdx}>{d}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 1 Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#FFF8F0] to-[#FAF8F5] border-2 border-[#fbd7b4] shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-[#0F1318]">
              Begin Your Sourcing Journey with Savera
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Whether you are looking for sarees, salwar suits, lehengas, Indo-Western wear or fabrics, Savera Tex Solution LLP welcomes enquiries from retailers, wholesalers and textile businesses.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed font-semibold">
              Share your business requirements with us and begin a discussion about suitable sourcing possibilities.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PART 2: HOW TO CHECK A TEXTILE COMMISSION AGENT BEFORE YOU TRADE
        ══════════════════════════════════════════════════════════ */}
        <section id="agent-checks" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#fbd7b4]/50 pb-4">
            <span className="text-[11px] font-black text-[#f16701] uppercase tracking-widest block mb-1">
              Part 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-playfair text-[#0F1318]">
              How to Check a Textile Commission Agent Before You Trade
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#fbd7b4]/70 shadow-xs space-y-3">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Choosing the right commission agent is an important step when sourcing textile products. Before beginning a business transaction, understand the agent's business background, industry experience, supplier connections and role in the buying process.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              It is equally important to know who will supply the products, who will issue the invoice, where payments must be made and how the commercial terms are agreed. These checks can help you make an informed decision before placing an order.
            </p>
          </div>

          {/* Role of a Commission Agent */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#fbd7b4]/60 space-y-2.5">
            <h3 className="text-lg font-bold text-[#0F1318] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f16701]" />
              <span>Understand the Role of a Commission Agent</span>
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              A textile commission agent acts as a link between buyers and manufacturers or suppliers. The agent helps buyers explore sourcing options, identify suitable products and establish communication with relevant manufacturers.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              However, a commission agent is not necessarily the manufacturer or seller of the goods. Each party may have separate responsibilities for product supply, invoicing, payment and dispatch. Understanding these responsibilities before trading helps avoid confusion during a transaction.
            </p>
          </div>

          {/* Eight Important Checks Before You Trade */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#0F1318]">
                Eight Important Checks Before You Trade
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Before working with a commission agent, consider the following points:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agentChecks.map((chk, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-5 rounded-2xl bg-white border border-[#fbd7b4]/60 shadow-xs hover:border-[#f16701]/60 transition space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FFF3E8] text-[#f16701] font-mono font-bold text-xs flex items-center justify-center border border-[#f8b47d]/40">
                        {chk.num}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F1318]">
                        {chk.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-8">
                      {chk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Savera Tex Solution LLP Works Callout */}
          <div className="p-6 rounded-2xl bg-white border border-[#fbd7b4] shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-[#0F1318] flex items-center gap-2">
              <Building className="w-5 h-5 text-[#f16701]" />
              <span>How Savera Tex Solution LLP Works</span>
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Savera Tex Solution LLP operates as a textile commission agent, connecting retailers, wholesalers and other buyers with manufacturers and suppliers. Our sourcing network includes major textile centres such as Surat, Jaipur, Kolkata, Ahmedabad, Bhagalpur and Varanasi.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              We deal in a range of textile and ethnic-wear categories, including sarees, salwar suits, lehengas, Indo-Western wear and fabrics. Our role is to understand the buyer's requirements, discuss suitable product options within the buyer's budget and identify relevant manufacturers or suppliers.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Once the buyer and manufacturer agree on the products and commercial terms, the buyer makes the agreed advance and remaining payment directly to the concerned manufacturer. Savera facilitates communication and coordination between the parties throughout the process.
            </p>
            <div className="pt-2 border-t border-[#fbd7b4]/40">
              <p className="text-xs sm:text-sm font-semibold text-[#f16701] italic">
                "At Savera Tex Solution LLP, we believe that clear communication, transparent commercial arrangements and a proper understanding of responsibilities are important foundations for a business relationship."
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PART 3: BUYING DIRECTLY OR THROUGH SAVERA TEX SOLUTION LLP?
        ══════════════════════════════════════════════════════════ */}
        <section id="comparison" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#fbd7b4]/50 pb-4">
            <span className="text-[11px] font-black text-[#f16701] uppercase tracking-widest block mb-1">
              Part 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-playfair text-[#0F1318]">
              Buying Directly or Through Savera Tex Solution LLP?
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#fbd7b4]/70 shadow-xs space-y-3">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Textile sourcing involves finding the right manufacturers, exploring products, understanding market prices and managing supplier communication. Buyers can handle these activities independently or take assistance from a commission agent.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Savera Tex Solution LLP connects buyers with textile manufacturers and suppliers, helping them navigate the sourcing process according to their business requirements.
            </p>
          </div>

          {/* Comparing Both Approaches Table */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#0F1318] flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#f16701]" />
              <span>Comparing Both Approaches</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-[#fbd7b4] shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-[#fbd7b4]">
                    <th className="py-3.5 px-4 sm:px-6 font-extrabold text-[#0F1318] uppercase tracking-wider w-1/4">
                      Key Area
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-neutral-600 uppercase tracking-wider w-3/8">
                      Buying Directly
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[#f16701] uppercase tracking-wider w-3/8 bg-[#FFF8F0]">
                      Through Savera Tex Solution LLP
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#fbd7b4]/40">
                  {comparisonRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#FFFDFB] transition">
                      <td className="py-4 px-4 sm:px-6 font-bold text-[#0F1318] align-top">
                        {row.area}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-neutral-600 leading-relaxed align-top">
                        {row.direct}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-neutral-800 font-medium leading-relaxed align-top bg-[#FFFDF9]">
                        {row.savera}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Working with Savera */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#fbd7b4]/60 space-y-2">
            <h3 className="text-lg font-bold text-[#0F1318]">
              Working with Savera
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Savera Tex Solution LLP works as a commission agent, connecting buyers with manufacturers and suppliers across major textile centres, including Surat, Jaipur, Kolkata, Ahmedabad, Bhagalpur and Varanasi.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Our role is to help buyers identify relevant manufacturing sources, explore product options and facilitate communication throughout the sourcing process.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PART 4: PREPARE YOUR BUYING BRIEF
        ══════════════════════════════════════════════════════════ */}
        <section id="buying-brief" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#fbd7b4]/50 pb-4">
            <span className="text-[11px] font-black text-[#f16701] uppercase tracking-widest block mb-1">
              Part 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-playfair text-[#0F1318]">
              Prepare Your Buying Brief
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#fbd7b4]/70 shadow-xs space-y-3">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              A well-defined buying requirement helps make the textile sourcing process more organised. Before approaching Savera Tex Solution LLP, consider the products you need, your preferred quality, approximate quantity and purchasing budget.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Sharing these details helps us understand your expectations and explore suitable manufacturing sources.
            </p>
          </div>

          {/* Information to Share */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0F1318] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#f16701]" />
              <span>Information to Share</span>
            </h3>

            <div className="space-y-3">
              {briefPoints.map((pt, pIdx) => (
                <div 
                  key={pIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#fbd7b4]/60 shadow-xs hover:border-[#f16701]/60 transition flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {pt.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#0F1318]">
                      {pt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Happens Next? */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#fbd7b4]/60 space-y-2">
            <h3 className="text-lg font-bold text-[#0F1318]">
              What Happens Next?
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Once you share your requirements, Savera reviews your brief, discusses suitable product options and budget with you, and identifies relevant manufacturers for further discussion.
            </p>
          </div>

          {/* Ready to Begin Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#ff832b] via-[#f16701] to-[#c74500] text-white shadow-xl space-y-5 text-center">
            <div className="max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black font-playfair tracking-tight">
                Ready to begin?
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                Fill out the enquiry form available on our website and share your buying requirements with Savera Tex Solution LLP to start your textile sourcing discussion.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onInquire}
                className="px-6 py-3 rounded-full bg-white text-[#f16701] hover:bg-[#FFF8F0] font-bold text-sm shadow-md transition transform hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Fill Out Enquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBack}
                className="px-5 py-3 rounded-full bg-black/20 hover:bg-black/30 text-white font-semibold text-sm border border-white/30 backdrop-blur-xs transition cursor-pointer"
              >
                Back to Main Website
              </button>
            </div>
          </div>

        </section>

      </div>
    </article>
  );
}
