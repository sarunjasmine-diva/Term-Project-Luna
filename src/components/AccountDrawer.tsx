import React, { useState } from 'react';
import { MemberProfile } from '../types';

interface AccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRedeemVouchers: (amount: number) => void;
}

export const AccountDrawer: React.FC<AccountDrawerProps> = ({
  isOpen,
  onClose,
  onRedeemVouchers,
}) => {
  const [profile, setProfile] = useState<MemberProfile>({
    name: 'Evelyn Tan',
    cardNumber: '3799 8800 •••• 1024',
    cardType: 'Luna Credit Card A',
    bonusPoints: 280,
    availableVouchersValue: 60,
    transactions: [
      {
        id: 'tx-1',
        date: '28 Oct 2026',
        store: 'Luna Dept Store (Level 1 Cosmetics)',
        amount: 240,
        pointsEarned: 48,
      },
      {
        id: 'tx-2',
        date: '23 Oct 2026 (Mon)',
        store: 'Luna Dept Store (Level 3 Fashion)',
        amount: 450,
        pointsEarned: 100, // Includes 10 BP weekday bonus!
      },
      {
        id: 'tx-3',
        date: '15 Oct 2026',
        store: 'Luna Food Hall (Basement 2)',
        amount: 85,
        pointsEarned: 16,
      },
    ],
  });

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRedeemBlock = () => {
    if (profile.bonusPoints < 100) return;
    const newPoints = profile.bonusPoints - 100;
    const addedVoucher = 30;
    setProfile((prev) => ({
      ...prev,
      bonusPoints: newPoints,
      availableVouchersValue: prev.availableVouchersValue + addedVoucher,
    }));
    onRedeemVouchers(addedVoucher);
    setNotification('Simulated voucher issue: 1 × S$30 Luna Gift Voucher issued to Bag!');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Header */}
        <div className="p-5 border-b border-[#E5E7EB] bg-[#1A1A1A] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D91B24]">account_circle</span>
            <h3 className="font-serif text-lg">Luna Member Portal</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 text-xs text-gray-700">
          {notification && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>{notification}</span>
            </div>
          )}

          {/* Member Card Profile */}
          <div className="bg-gradient-to-tr from-gray-900 via-neutral-800 to-black text-white p-4 rounded-lg shadow-md border border-neutral-700">
            <div className="flex justify-between items-center text-[9px] font-bold tracking-wider text-amber-300 mb-4">
              <span>LUNA MEMBER</span>
              <span className="bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">ACTIVE</span>
            </div>
            <div className="text-base font-serif mb-1">{profile.name}</div>
            <div className="font-mono text-xs text-gray-400 mb-3">{profile.cardNumber}</div>
            <div className="text-[10px] text-gray-400 border-t border-neutral-700/80 pt-2 flex justify-between">
              <span>{profile.cardType}</span>
              <span className="text-amber-300 font-semibold">PLATINUM</span>
            </div>
          </div>

          {/* Points & Voucher Balance */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 bg-gray-50 border border-[#E5E7EB]">
              <span className="text-[11px] text-gray-500 uppercase font-bold block">
                Accumulated Points
              </span>
              <span className="text-2xl font-bold text-[#D91B24] tabular-nums">
                {profile.bonusPoints} BP
              </span>
              <span className="text-[10px] text-gray-400 block mt-1">Statement valid: 2026/27</span>
            </div>
            <div className="p-3.5 bg-gray-50 border border-[#E5E7EB]">
              <span className="text-[11px] text-gray-500 uppercase font-bold block">
                Gift Vouchers Claimed
              </span>
              <span className="text-2xl font-bold text-gray-900 tabular-nums">
                S$ {profile.availableVouchersValue}
              </span>
              <span className="text-[10px] text-gray-400 block mt-1">No expiry date</span>
            </div>
          </div>

          {/* Instant Points Redemption Action */}
          <div className="p-4 border border-[#D91B24]/30 bg-red-50/30">
            <div className="font-bold text-xs text-[#1A1A1A] mb-1">Redeem Gift Vouchers</div>
            <p className="text-[11px] text-gray-600 mb-3">
              Every 100 Luna Bonus Points = S$30 Luna Gift Vouchers.
            </p>
            <button
              onClick={handleRedeemBlock}
              disabled={profile.bonusPoints < 100}
              className="w-full bg-[#D91B24] hover:bg-[#B01018] disabled:bg-gray-300 text-white py-2 px-3 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">redeem</span>
              <span>
                {profile.bonusPoints >= 100
                  ? 'Redeem 100 BP for S$30 Voucher'
                  : 'Earn ' + (100 - profile.bonusPoints) + ' more BP to redeem'}
              </span>
            </button>
          </div>

          {/* Recent Store Transactions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pb-1 border-b border-gray-200 mb-2">
              Recent Luna Activity
            </h4>
            <div className="divide-y divide-gray-100">
              {profile.transactions.map((tx) => (
                <div key={tx.id} className="py-2.5 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-medium text-gray-900">{tx.store}</div>
                    <div className="text-[11px] text-gray-400">{tx.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">S$ {tx.amount}</div>
                    <div className="text-[11px] text-[#D91B24] font-bold">+{tx.pointsEarned} BP</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-[#E5E7EB] text-center">
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-xs uppercase cursor-pointer"
          >
            Close Member Portal
          </button>
        </div>
      </div>
    </div>
  );
};
