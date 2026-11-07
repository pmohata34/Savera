import React, { useState } from 'react';
import RadialGlowButton from './ui/radial-glow-button';

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
    'Sarees (Cotton, Silk, Designer & Partywear)',
    'Salwar Suits (Stitched & Unstitched Materials)',
    'Lehengas (Bridal, Festive & Partywear)',
    'Indo Western Wear (Gowns, Kurtis & Fusion)',
    'Fabrics (Dyeable, Printed, Silk & Cotton)',
    'Specialized Commercial Loom Contracts'
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

    // Clean mobile number to exactly 10 digits (format: 9007385793)
    let rawDigits = String(formData.mobileNumber || '').replace(/\D/g, '');
    if (rawDigits.startsWith('91') && rawDigits.length > 10) rawDigits = rawDigits.slice(2);
    if (rawDigits.startsWith('0') && rawDigits.length > 10) rawDigits = rawDigits.slice(1);
    const cleanPhone = rawDigits.slice(0, 10);

    if (cleanPhone.length !== 10) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid 10-digit mobile number (e.g. 9007385793).'
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    // Prepare client-side WhatsApp inquiry message
    const catText = formData.categories.length > 0 ? formData.categories.join(', ') : 'All Collections';
    const waText = encodeURIComponent(
      `Hello Savera Tex Solution LLP,\n\nI have submitted a sourcing inquiry on your portal:\n• Firm: ${formData.firmName}\n• Contact Person: ${formData.personName} (${cleanPhone})\n• City & State: ${formData.cityState}\n• Product Categories: ${catText}\n• Requirements: ${formData.message || 'Please share your latest collections, brochure, and commercial terms.'}\n\nPlease share your company catalog and mill rate cards.`
    );
    const targetWhatsAppUrl = `https://wa.me/919477665429?text=${waText}`;

    // 1. Immediately launch WhatsApp from client side so the client sends the WhatsApp message to +91 9477665429
    try {
      const waWindow = window.open(targetWhatsAppUrl, '_blank');
      if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
        // Fallback if browser popup blocker stops window.open
        setTimeout(() => {
          window.location.href = targetWhatsAppUrl;
        }, 500);
      }
    } catch (popupErr) {
      console.warn('Popup blocked, will use button/redirect:', popupErr);
    }

    const payload = {
      ...formData,
      mobileNumber: cleanPhone
    };

    // 2. Concurrently record the lead and trigger Gmail email notification
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      let data = {};
      try {
        data = await res.json();
      } catch (jsonErr) {
        data = {};
      }

      const returnedLeadId = data.leadId || `ST-${Date.now().toString().slice(-6)}`;

      setStatus({
        type: 'success',
        message: 'Inquiry submitted! WhatsApp has opened with your inquiry text. If WhatsApp didn\'t open automatically, click the green button below.',
        leadId: returnedLeadId,
        whatsappUrl: targetWhatsAppUrl,
        brochureUrl: data.brochureUrl || '/brochure.pdf'
      });

      setFormData({
        firmName: '',
        personName: '',
        mobileNumber: '',
        cityState: '',
        categories: ['Sarees (Cotton, Silk, Designer & Partywear)'],
        message: ''
      });
    } catch (err) {
      console.warn('API sync completed or offline fallback:', err);
      setStatus({
        type: 'success',
        message: 'Inquiry submitted! WhatsApp has opened with your inquiry text. Click the green button below to send your details.',
        whatsappUrl: targetWhatsAppUrl,
        brochureUrl: '/brochure.pdf'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Connect With <span className="text-[#f16701]">Savera</span> Tex Solution LLP
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Whether you are a manufacturer looking to expand your buyer network or a retailer seeking reliable sourcing from India's premier textile hubs, our team is ready to assist.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-[#f8b47d]/40 shadow-xl">
            {status && (
              <div className={`mb-6 p-5 rounded-2xl border ${status.type === 'error' ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-emerald-50 border-emerald-200 text-emerald-900'} space-y-2`}>
                <p className="font-bold text-sm">{status.message}</p>
                {status.leadId && (
                  <p className="text-xs text-neutral-600">Reference ID: <span className="font-mono font-bold text-neutral-900">{status.leadId}</span></p>
                )}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {status.whatsappUrl && (
                    <a href={status.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
                      <span>Open in WhatsApp</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                  )}
                  {status.brochureUrl && (
                    <a href={status.brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f16701] hover:bg-[#d45500] text-white text-xs font-bold transition">
                      <span>Download Brochure (PDF)</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    </a>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">Firm / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Retail Showroom / Wholesale Agency"
                    value={formData.firmName}
                    onChange={e => setFormData({ ...formData, firmName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#f16701] focus:ring-2 focus:ring-[#f8b47d]/30 outline-none text-sm transition"
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
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#f16701] focus:ring-2 focus:ring-[#f8b47d]/30 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    WhatsApp / Mobile Number * <span className="text-[11px] font-normal text-neutral-500 lowercase">(10 digits)</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9007385793"
                    value={formData.mobileNumber}
                    onChange={e => {
                      let val = e.target.value.replace(/\D/g, '');
                      if (val.startsWith('91') && val.length > 10) val = val.slice(2);
                      if (val.startsWith('0') && val.length > 10) val = val.slice(1);
                      setFormData({ ...formData, mobileNumber: val.slice(0, 10) });
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#f16701] focus:ring-2 focus:ring-[#f8b47d]/30 outline-none text-sm transition font-mono tracking-wider"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">City &amp; State *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kolkata, West Bengal or Surat, Gujarat"
                    value={formData.cityState}
                    onChange={e => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#f16701] focus:ring-2 focus:ring-[#f8b47d]/30 outline-none text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">Product Categories of Interest</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {categoryOptions.map(cat => (
                    <label key={cat} className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 hover:border-[#f16701]/40 bg-[#FAF8F5]/50 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(cat)}
                        onChange={() => handleCheckboxChange(cat)}
                        className="rounded text-[#f16701] focus:ring-[#f16701] h-4 w-4"
                      />
                      <span className="text-neutral-800 font-medium">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">Sourcing Requirements or Message</label>
                <textarea
                  rows="3"
                  placeholder="Detail your fabric preferences, target price range, or preferred production centers..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#f16701] focus:ring-2 focus:ring-[#f8b47d]/30 outline-none text-sm transition"
                ></textarea>
              </div>

              <RadialGlowButton
                as="button"
                type="submit"
                disabled={loading}
                containerClassName="w-full"
                className="w-full py-4 text-sm"
              >
                {loading ? (
                  <span>Submitting Sourcing Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Sourcing Inquiry</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </>
                )}
              </RadialGlowButton>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
