import React from 'react';

interface PrestigeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrestigeModal: React.FC<PrestigeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full border border-[#E5E7EB] shadow-2xl relative my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-black text-white p-6 border-b border-amber-600/30">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-amber-300 uppercase">
                BY INVITATION ONLY
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-normal mt-1 text-white">
                Luna Prestige Programme
              </h2>
              <p className="text-gray-300 text-xs mt-1 max-w-md">
                An exceptional tier of refined hospitality, bespoke privileges, and elevated rewards.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl p-1 cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Prestige Card Visual */}
        <div className="p-6 space-y-6 text-xs text-gray-700 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-neutral-900 text-white p-6 rounded-none border border-neutral-700">
            {/* Prestige Black / Gold Card Graphic */}
            <div className="w-52 aspect-[1.58/1] rounded-lg bg-gradient-to-tr from-black via-neutral-900 to-neutral-800 p-3.5 text-white flex flex-col justify-between shadow-2xl border border-amber-500/40 shrink-0 relative overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="font-serif text-[10px] tracking-widest text-amber-300">
                  LUNA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-amber-400 font-bold">
                  PRESTIGE
                </span>
              </div>
              <div className="z-10 text-center py-1">
                <span className="font-serif italic text-xs tracking-wider text-amber-200">
                  VIP Privileges
                </span>
              </div>
              <div className="flex justify-between items-end text-[8px] font-mono text-gray-400 z-10">
                <span>9980 •••• •••• 0001</span>
                <span className="text-amber-300 font-bold">MEMBER</span>
              </div>
              {/* Subtle gold emblem ring */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full border border-amber-500/20 pointer-events-none"></div>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                Membership Qualification
              </div>
              <p className="text-gray-300 leading-relaxed text-xs">
                Accumulate a minimum spend of <strong>S$20,000</strong> within a 12-month calendar
                period on your Luna Credit Cards or Luna Cash Loyalty Card at Luna Department Store.
              </p>
              <div className="text-[11px] text-gray-400">
                Membership tenure: 1 Year (Renewable upon maintaining qualifying spend).
              </div>
            </div>
          </div>

          {/* Pillars of Privileges */}
          <div>
            <h3 className="font-serif text-base text-[#1A1A1A] pb-2 border-b border-gray-200 mb-3">
              Hallmark Privileges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#E5E7EB] p-3.5 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-1.5 text-[#1A1A1A] font-bold">
                  <span className="material-symbols-outlined text-[#D91B24] text-[18px]">
                    local_cafe
                  </span>
                  <span>VIP Lounge Access (Level 3)</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Unwind in tranquility with complimentary artisan beverages, fine tea, and
                  confections for you and an accompanying guest.
                </p>
              </div>

              <div className="border border-[#E5E7EB] p-3.5 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-1.5 text-[#1A1A1A] font-bold">
                  <span className="material-symbols-outlined text-[#D91B24] text-[18px]">
                    local_parking
                  </span>
                  <span>Complimentary Valet & Parking</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Enjoy 2 hours of complimentary parking vouchers and priority valet parking service
                  at the store carpark.
                </p>
              </div>

              <div className="border border-[#E5E7EB] p-3.5 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-1.5 text-[#1A1A1A] font-bold">
                  <span className="material-symbols-outlined text-[#D91B24] text-[18px]">
                    percent
                  </span>
                  <span>10% Year-Round Discount</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Selected luxury fashion, household, and gourmet brands extend year-round member
                  privilege savings exclusively to Prestige cardholders.
                </p>
              </div>

              <div className="border border-[#E5E7EB] p-3.5 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-1.5 text-[#1A1A1A] font-bold">
                  <span className="material-symbols-outlined text-[#D91B24] text-[18px]">
                    cake
                  </span>
                  <span>Birthday Treats & Private Previews</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Receive special Luna Gift Certificates on your birthday month, plus private previews
                  to seasonal collection launches.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-[#D91B24] hover:bg-[#B01018] text-white py-2.5 px-4 font-bold uppercase tracking-wider text-xs transition text-center cursor-pointer"
            >
              Close Prestige Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
