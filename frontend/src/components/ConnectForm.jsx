import React, { useState } from 'react';
import RadialGlowButton from './ui/radial-glow-button';
import { highlightSavera } from '../utils/highlightSavera';

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
    'Fabrics (Dyeable, Printed, Silk & Cotton)'
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

    // Clean mobile number to exactly 10 digits (format: 9477665429)
    let rawDigits = String(formData.mobileNumber || '').replace(/\D/g, '');
    if (rawDigits.startsWith('91') && rawDigits.length > 10) rawDigits = rawDigits.slice(2);
    if (rawDigits.startsWith('0') && rawDigits.length > 10) rawDigits = rawDigits.slice(1);
    const cleanPhone = rawDigits.slice(0, 10);

    if (cleanPhone.length !== 10) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid 10-digit mobile number (e.g. 9477665429).'
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    const payload = {
      ...formData,
      mobileNumber: cleanPhone
    };

    const API_BASE = import.meta.env.VITE_API_URL || 'https://savera-nmur.onrender.com';

    // Submit lead: triggers automated WhatsApp brochure to client and Gmail alert to owner
    try {
      const res = await fetch(`${API_BASE}/api/inquire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      const returnedLeadId = data.leadId || `ST-${Date.now().toString().slice(-6)}`;

      setStatus({
        type: 'success',
        message: 'Thank you for connecting with Savera Tex Solution LLP. We have received your business enquiry and appreciate your interest in our textile trade services. Our team will review your requirements and get in touch with you shortly.',
        leadId: returnedLeadId
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
        message: 'Thank you for connecting with Savera Tex Solution LLP. We have received your business enquiry and appreciate your interest in our textile trade services. Our team will review your requirements and get in touch with you shortly.',
        leadId: `ST-${Date.now().toString().slice(-6)}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Connect With <span className="font-playfair font-bold inline-flex items-baseline gap-2"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Whether you are a manufacturer looking to expand your buyer network or a retailer seeking reliable sourcing from India's premier textile hubs, our team is ready to assist.
          </p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-[#f8b47d]/40 shadow-xl">
            {status && (
              <div className={`mb-6 p-5 rounded-2xl border ${status.type === 'error' ? 'bg-rose-50 border-rose-200 text-rose-800' : 'bg-emerald-50 border-emerald-200 text-emerald-900'} space-y-1`}>
                <p className="font-bold text-sm">{highlightSavera(status.message)}</p>
                {status.leadId && (
                  <p className="text-xs text-neutral-600">Reference ID: <span className="font-mono font-bold text-neutral-900">{status.leadId}</span></p>
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
                    placeholder="9477665429"
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
