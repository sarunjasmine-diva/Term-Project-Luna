import React from 'react';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  voucherValue: number;
  onClearBag: () => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  voucherValue,
  onClearBag,
}) => {
  if (!isOpen) return null;

  const voucherCount = Math.floor(voucherValue / 30);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 border-b border-[#E5E7EB] bg-[#1A1A1A] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D91B24]">shopping_bag</span>
            <h3 className="font-serif text-lg">Luna Bag</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 text-xs text-gray-700 overflow-y-auto">
          {voucherValue === 0 ? (
            <div className="text-center py-12 space-y-3">
              <span className="material-symbols-outlined text-gray-300 text-[48px]">
                shopping_basket
              </span>
              <div className="font-semibold text-gray-800 text-sm">Your Bag is Empty</div>
              <p className="text-gray-500 text-xs max-w-xs mx-auto">
                Use our Bonus Points Simulator or Member Portal to redeem Luna Gift Vouchers.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-red-50/50 p-4 border border-[#D91B24]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#D91B24] text-[24px]">
                  confirmation_number
                </span>
                <div className="flex-1">
                  <div className="font-bold text-[#1A1A1A] text-sm">Luna Gift Vouchers</div>
                  <div className="text-gray-600 text-xs mt-0.5">
                    {voucherCount} × S$30 Physical Vouchers claimed
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    Valid across Luna Department Store & participating Specialty Stores (B2 - L4).
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-base text-[#D91B24] tabular-nums">
                    S$ {voucherValue}
                  </div>
                </div>
              </div>

              <div className="border border-[#E5E7EB] p-4 bg-gray-50 text-xs space-y-2">
                <div className="font-bold text-gray-800 uppercase text-[11px]">
                  Collection & Redemption Guide:
                </div>
                <p className="text-gray-600 leading-relaxed text-[11px]">
                  Present your digital QR voucher code or physical Luna Card at the{' '}
                  <strong>Customer Service Centre, Level 3</strong> to collect your sealed voucher
                  envelope.
                </p>
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>No expiration date on redeemed Luna Gift Vouchers.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-[#E5E7EB] space-y-2">
          {voucherValue > 0 && (
            <button
              onClick={onClearBag}
              className="w-full py-2 text-gray-600 hover:text-red-600 font-medium text-xs text-center block cursor-pointer"
            >
              Clear Bag
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#D91B24] hover:bg-[#B01018] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            Continue Browsing Privileges
          </button>
        </div>
      </div>
    </div>
  );
};
