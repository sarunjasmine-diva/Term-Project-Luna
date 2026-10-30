import React, { useState } from 'react';
import { CardItem } from '../types';

interface UpdateDetailsModalProps {
  card: CardItem | null;
  onClose: () => void;
  onUpdateSuccess?: (msg: string) => void;
}

export const UpdateDetailsModal: React.FC<UpdateDetailsModalProps> = ({
  card,
  onClose,
  onUpdateSuccess,
}) => {
  const [newAddress, setNewAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [isDone, setIsDone] = useState(false);

  if (!card) return null;

  const isBankCard = card.id !== 'cash-loyalty';

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
    if (onUpdateSuccess) {
      onUpdateSuccess(`Contact records for ${card.name} have been updated.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full border border-[#E5E7EB] shadow-2xl relative">
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
              Personal Information Maintenance
            </span>
            <h3 className="font-serif text-lg">Update Card Details</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg p-1 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-5 text-xs text-gray-700 space-y-4">
          <div className="bg-gray-50 p-3 border border-[#E5E7EB]">
            <span className="text-gray-500 font-semibold block text-[11px]">Selected Account:</span>
            <strong className="text-gray-900 text-sm">{card.name}</strong>
          </div>

          {isBankCard ? (
            /* Bank Partner Card Instructions */
            <div className="space-y-3">
              <p className="text-gray-600 leading-relaxed">
                For security reasons and regulatory compliance, personal contact and mailing address
                updates for <strong>{card.name}</strong> are synchronized via your issuing bank
                portal or mobile app.
              </p>

              <div className="border border-blue-100 bg-blue-50/60 p-3 text-blue-900 space-y-2">
                <div className="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">smartphone</span>
                  <span>How to update in 1 minute:</span>
                </div>
                <ol className="list-decimal pl-4 space-y-1 text-xs">
                  <li>Log in to your <strong>Partner Banking App</strong> or internet portal.</li>
                  <li>Go to <strong>Settings</strong> &gt; <strong>Profile & Contact Details</strong>.</li>
                  <li>Confirm your identity via two-factor authentication.</li>
                  <li>
                    Updates will automatically reflect on your Luna co-brand statements and reward
                    mailings.
                  </li>
                </ol>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    if (onUpdateSuccess) {
                      onUpdateSuccess(`Mailing preferences synced for ${card.name}.`);
                    }
                    onClose();
                  }}
                  className="flex-1 bg-[#D91B24] hover:bg-[#B01018] text-white py-2 px-3 text-center font-bold tracking-wider uppercase transition flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Sync Partner Bank Records</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 font-semibold uppercase transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Luna Cash Loyalty Card Form */
            <div>
              {isDone ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[28px]">
                    check_circle
                  </span>
                  <div className="font-bold text-gray-900">Details Updated Successfully</div>
                  <p className="text-[11px] text-gray-600">
                    Your new mailing address and contact preferences have been recorded. Future
                    Luna Department Store catalogues and voucher notifications will be sent to your
                    new address.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 bg-[#D91B24] text-white py-1.5 px-4 font-bold uppercase text-[11px] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleUpdate} className="space-y-3">
                  <p className="text-gray-600">
                    Update your mailing address to ensure you never miss member promotions and gift
                    voucher redemptions.
                  </p>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      New Mailing Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                      placeholder="Block / Street / Unit number"
                      className="w-full border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="e.g. 238873"
                        className="w-full border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        placeholder="e.g. 91234567"
                        className="w-full border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24]"
                    />
                  </div>

                  <p className="text-[10px] text-gray-500">
                    Alternatively, visit the Customer Service Centre on Level 3 with your ID.
                  </p>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-[#D91B24] hover:bg-[#B01018] text-white py-2 font-bold uppercase tracking-wider text-xs transition cursor-pointer"
                    >
                      Save Updates
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 font-semibold uppercase text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
