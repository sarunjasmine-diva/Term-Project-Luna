import React, { useState } from 'react';
import { CardItem } from '../types';

interface CardDetailsModalProps {
  card: CardItem | null;
  onClose: () => void;
  onApplySuccess?: (cardName: string) => void;
}

export const CardDetailsModal: React.FC<CardDetailsModalProps> = ({
  card,
  onClose,
  onApplySuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'apply'>('benefits');
  const [fullName, setFullName] = useState('');
  const [nric, setNric] = useState('');
  const [phone, setPhone] = useState('');
  const [incomeRange, setIncomeRange] = useState('30k_50k');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!card) return null;

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const refNum = `LUNA-APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedRef(refNum);
      if (onApplySuccess) {
        onApplySuccess(card.name);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full border border-[#E5E7EB] shadow-2xl relative my-8">
        {/* Top Header */}
        <div className="bg-[#1A1A1A] text-white p-5 flex items-center justify-between border-b border-neutral-800">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#D91B24] uppercase">
              Official Card Information
            </span>
            <h3 className="font-serif text-xl">{card.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl p-1 w-8 h-8 flex items-center justify-center rounded cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-[#E5E7EB] bg-gray-50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`flex-1 py-3 px-4 text-center border-b-2 cursor-pointer transition ${
              activeTab === 'benefits'
                ? 'border-[#D91B24] text-[#D91B24] bg-white font-bold'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Privileges & Key Details
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`flex-1 py-3 px-4 text-center border-b-2 cursor-pointer transition ${
              activeTab === 'apply'
                ? 'border-[#D91B24] text-[#D91B24] bg-white font-bold'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {card.id === 'cash-loyalty' ? 'Application Guide' : 'Fast-Track Online Application'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto text-xs text-gray-700 space-y-6">
          {activeTab === 'benefits' ? (
            <>
              {/* Card Summary Banner */}
              <div className="flex flex-col sm:flex-row gap-5 items-center bg-gray-50 p-4 border border-[#E5E7EB]">
                {/* Visual Card Representation */}
                <div
                  className={`w-40 aspect-[1.58/1] rounded-lg bg-gradient-to-tr ${card.cardDesign.gradient} p-2.5 ${card.cardDesign.textColor} flex flex-col justify-between shadow-md shrink-0 border border-black/10`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-bold tracking-wider">LUNA</span>
                    <span className="text-[8px] font-bold">{card.cardDesign.networkLogo}</span>
                  </div>
                  <div className="text-[7px] text-center font-mono opacity-80">
                    {card.cardDesign.tierLabel}
                  </div>
                  <div className="text-[7px] font-mono">{card.cardDesign.cardSampleNumber}</div>
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="text-[11px] text-gray-500 uppercase font-semibold">Welcome Gift</div>
                  <div className="font-bold text-sm text-[#D91B24]">{card.welcomeOffer}</div>
                  <div className="text-[11px] text-gray-600">
                    <strong>Annual Fee:</strong> {card.annualFee}
                  </div>
                  <div className="text-[11px] text-gray-600">
                    <strong>Eligibility:</strong> {card.eligibility}
                  </div>
                </div>
              </div>

              {/* Privilege Features List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pb-1 border-b border-gray-200 mb-3">
                  Card Highlights & Exclusive Privileges
                </h4>
                <ul className="space-y-2">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D91B24] text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-gray-800 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Earning Rates Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pb-1 border-b border-gray-200 mb-2">
                  Bonus Point Multipliers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-[#E5E7EB]">
                    <div className="text-gray-500 text-[11px]">Luna Department Store:</div>
                    <div className="font-bold text-sm text-[#1A1A1A] mt-0.5">
                      {card.deptStoreSpend.rate} {card.deptStoreSpend.points}
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#E5E7EB]">
                    <div className="text-gray-500 text-[11px]">Shopping Centre Specialty Stores:</div>
                    <div className="font-bold text-sm text-[#1A1A1A] mt-0.5">
                      {card.specialtyStoresSpend || 'Not applicable'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setActiveTab('apply')}
                  className="flex-1 bg-[#D91B24] hover:bg-[#B01018] text-white py-2.5 px-4 font-bold uppercase tracking-wider text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {card.id === 'cash-loyalty' ? 'View Application Instructions' : 'Apply Online Now'}
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              {card.id === 'cash-loyalty' ? (
                /* Cash Loyalty In-Person Instructions */
                <div className="space-y-4">
                  <div className="bg-red-50/70 p-4 border border-red-200 text-xs">
                    <h4 className="font-bold text-[#D91B24] uppercase mb-1">
                      In-Person Customer Service Centre Application
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Luna Cash Loyalty Cards are issued directly on-site at our Customer Service
                      Centre located at Level 3 of Luna Department Store.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-900 uppercase text-[11px] mb-2">
                      Required Documents to Bring:
                    </h5>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                      <li>One (1) recent colour passport-sized photograph</li>
                      <li>Original National ID card or resident pass showing permanent address</li>
                      <li>Age qualification: 18 years and above</li>
                      <li>Issuance fee: S$15 (inclusive of GST), payable via Cash or direct payment</li>
                    </ul>
                  </div>

                  <div className="border border-[#E5E7EB] p-4 bg-gray-50">
                    <h5 className="font-bold text-gray-900 uppercase text-[11px] mb-1">
                      Operating Hours & Counter Location:
                    </h5>
                    <p className="text-gray-600">
                      Luna Department Store, Level 3 (adjacent to the Children's Department).
                      <br />
                      Counter opens daily from 10:00am to 9:30pm.
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('benefits')}
                    className="w-full bg-[#1A1A1A] hover:bg-black text-white py-2.5 px-4 font-bold uppercase tracking-wider text-xs transition cursor-pointer"
                  >
                    Back to Card Privileges
                  </button>
                </div>
              ) : submittedRef ? (
                /* Application Success State */
                <div className="p-6 text-center space-y-4 bg-emerald-50/50 border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900">Application Submitted!</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Thank you for applying for the <strong>{card.name}</strong>.
                    </p>
                  </div>

                  <div className="bg-white p-3 border border-emerald-200 font-mono text-xs text-gray-800">
                    Reference Number: <strong className="text-emerald-700">{submittedRef}</strong>
                  </div>

                  <p className="text-[11px] text-gray-500 max-w-md mx-auto">
                    Your digital application has been received. Our verification team will review your
                    application. Upon approval, your Luna card will arrive within 3 to 5 business days.
                  </p>

                  <button
                    onClick={onClose}
                    className="bg-[#D91B24] hover:bg-[#B01018] text-white py-2.5 px-6 font-bold uppercase text-xs transition cursor-pointer"
                  >
                    Done & Return to Table
                  </button>
                </div>
              ) : (
                /* Fast-Track Digital Form */
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div className="bg-gray-50 p-3 border border-[#E5E7EB] text-[11px] text-gray-600 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-gray-500">lock</span>
                    <span>
                      256-bit SSL encrypted fast application for Luna Department Store membership.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rachel Lim"
                      className="w-full border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-[#D91B24]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Identification Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={nric}
                        onChange={(e) => setNric(e.target.value)}
                        placeholder="e.g. S••••123A"
                        className="w-full border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-[#D91B24]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +65 9123 4567"
                        className="w-full border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-[#D91B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Annual Income Bracket *
                    </label>
                    <select
                      value={incomeRange}
                      onChange={(e) => setIncomeRange(e.target.value)}
                      className="w-full border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-[#D91B24] bg-white"
                    >
                      <option value="under_30k">Under S$30,000</option>
                      <option value="30k_50k">S$30,000 – S$50,000 (Meets Credit Criteria)</option>
                      <option value="50k_80k">S$50,000 – S$80,000</option>
                      <option value="above_80k">Above S$80,000</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-gray-600">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-0.5 accent-[#D91B24]"
                      required
                    />
                    <span>
                      I declare that I meet the age qualification ({card.eligibility}) and agree to Luna
                      Department Store Terms & Conditions and Privacy Policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting || !agreeTerms}
                    className="w-full bg-[#D91B24] hover:bg-[#B01018] disabled:bg-gray-400 text-white py-3 px-4 font-bold uppercase tracking-wider text-xs transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <span>Submit Application for {card.name}</span>
                    )}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
