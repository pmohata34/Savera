import React, { useState } from 'react';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    firmName: '',
    personName: '',
    mobileNumber: '',
    cityState: '',
    categories: ['Sarees (Surat & Banaras)', 'Salwar Suits & Dress Materials'],
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const categoryOptions = [
    'Sarees (Surat & Banaras)',
    'Salwar Suits & Dress Materials',
    'Bridal & Designer Lehengas',
    'Indo-Western & Ready-to-Wear',
    'Kurti Pant Sets & Tunics',
    'Bed Sheets & Home Textiles'
  ];

  const handleCheckboxChange = (cat) => {
    setFormData(prev => {
      const exists = prev.categories.includes(cat);
      if (exists) {
        return { ...prev, categories: prev.categories.filter(c => c !== cat) };
      } else {
        return { ...prev, categories: [...prev.categories, cat] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message,
          leadId: data.leadId,
          whatsappUrl: data.whatsappUrl
        });
        // reset form
        setFormData({
          firmName: '',
          personName: '',
          mobileNumber: '',
          cityState: '',
          categories: ['Sarees (Surat & Banaras)'],
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Unable to register inquiry. Please try again or connect directly via WhatsApp.'
        });
      }
    } catch (err) {
      console.error(err);
      // Fallback: direct WhatsApp link
      const fallbackUrl = `https://wa.me/919830504850?text=${encodeURIComponent(
        `Hello Savera Tex Solution LLP, I would like to inquire about textile sourcing for ${formData.firmName || 'my business'} in ${formData.cityState || 'India'}.`
      )}`;
      setStatus({
        type: 'success',
        message: 'Inquiry registered! You can connect with our team directly on WhatsApp.',
        whatsappUrl: fallbackUrl
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="py-24 px-12 bg-[#FAF8F5] border-b border-[#E8E3DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF5722]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest font-mono">Institutional Inquiries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
            Connect With <span className="text-[#FF5722]">Savera</span> Tex Solution LLP
          </h2>
          <p className="text-base text-neutral-600">
            Whether you are a manufacturer looking to expand your buyer network or a retailer seeking reliable sourcing from India's premier hubs, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#E8E3DA] shadow-xl">
            {status && (
              <div className={`mb-6 p-5 rounded-2xl border ${status.type === 'error' ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-emerald-50 border-emerald-200 text-emerald-900'} space-y-2`}>
                <p className="font-bold text-sm">{status.message}</p>
                {status.leadId && (
                  <p className="text-xs text-neutral-600">Reference ID: <span className="font-mono font-bold text-neutral-900">{status.leadId}</span></p>
                )}
                {status.whatsappUrl && (
                  <a href={status.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
                    <span>Open in WhatsApp</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">Firm / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Taparia Creations / Retail Showroom"
                    value={formData.firmName}
                    onChange={e => setFormData({ ...formData, firmName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5722] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.personName}
                    onChange={e => setFormData({ ...formData, personName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5722] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="98765 43210"
                    value={formData.mobileNumber}
                    onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5722] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">City & State *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kolkata, West Bengal or Surat, Gujarat"
                    value={formData.cityState}
                    onChange={e => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5722] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">Product Categories of Interest</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {categoryOptions.map(cat => (
                    <label key={cat} className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-orange-300 bg-neutral-50/50 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(cat)}
                        onChange={() => handleCheckboxChange(cat)}
                        className="rounded text-[#FF5722] focus:ring-orange-400"
                      />
                      <span className="font-medium text-neutral-800">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">Requirement Details / Sourcing Volumes (Optional)</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the fabric tiers, price segments, or specific collections you are looking to source..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5722] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-amber-500 hover:from-[#E64A19] hover:to-amber-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg glow-orange transition transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Submitting Sourcing Inquiry...' : 'Submit Sourcing Inquiry'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>

          {/* Right Information Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0E14] text-white p-8 rounded-3xl border border-neutral-800 shadow-2xl space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase">Official Commission Agency</span>
                <h3 className="text-2xl font-bold font-royal text-white mt-1">
                  <span className="text-[#FF5722]">SAVERA</span> TEX SOLUTION LLP
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Connecting textile manufacturers with retailers and wholesalers across India and international markets since 1995.
                </p>
              </div>

              <div className="space-y-4 text-xs border-t border-neutral-800 pt-6">
                <div>
                  <span className="block text-neutral-500 font-bold uppercase tracking-wider text-[10px]">Headquarters & Operations</span>
                  <p className="text-neutral-200 mt-0.5">Kolkata - 700007, West Bengal, India</p>
                </div>
                <div>
                  <span className="block text-neutral-500 font-bold uppercase tracking-wider text-[10px]">Mobile & WhatsApp Direct</span>
                  <a href="tel:+919830504850" className="text-neutral-200 hover:text-amber-400 transition font-mono mt-0.5 block">+91 98305 04850</a>
                </div>
                <div>
                  <span className="block text-neutral-500 font-bold uppercase tracking-wider text-[10px]">Email Communications</span>
                  <a href="mailto:saveratexsolutionllp@gmail.com" className="text-neutral-200 hover:text-amber-400 transition font-mono mt-0.5 block">saveratexsolutionllp@gmail.com</a>
                </div>
                <div>
                  <span className="block text-neutral-500 font-bold uppercase tracking-wider text-[10px]">Sourcing Hubs Active</span>
                  <p className="text-neutral-300 mt-0.5">Surat, Varanasi (Banaras), Jaipur, Ahmedabad, Bhagalpur, Kolkata</p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="https://wa.me/919830504850?text=Hello%20Savera%20Tex%20Solution%20LLP,%20I%20would%20like%20to%20connect%20regarding%20textile%20sourcing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
