import React, { useState, useMemo } from 'react';
import { CardItem } from '../types';

interface PointsCalculatorProps {
  cards: CardItem[];
  selectedCardId: string;
  onSelectCard: (id: string) => void;
  onAddToCartVoucher?: (vouchers: number) => void;
}

export const PointsCalculator: React.FC<PointsCalculatorProps> = ({
  cards,
  selectedCardId,
  onSelectCard,
  onAddToCartVoucher,
}) => {
  const [deptSpend, setDeptSpend] = useState<number>(450);
  const [specialtySpend, setSpecialtySpend] = useState<number>(120);
  const [dayType, setDayType] = useState<'weekday' | 'weekend'>('weekday');
  const [isDoublePointsPromo, setIsDoublePointsPromo] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const selectedCard = cards.find((c) => c.id === selectedCardId) || cards[0];

  const calculation = useMemo(() => {
    let deptRate = 1;
    let specialtyRate = 0;
    const canGetWeekdayBonus =
      (selectedCard.id === 'card-a' || selectedCard.id === 'card-b') &&
      dayType === 'weekday' &&
      deptSpend >= 400;

    if (selectedCard.id === 'card-a') {
      deptRate = isDoublePointsPromo ? 4 : 2;
      specialtyRate = 2;
    } else if (selectedCard.id === 'card-b') {
      deptRate = isDoublePointsPromo ? 4 : 2;
      specialtyRate = 1;
    } else if (selectedCard.id === 'debit') {
      deptRate = 1;
      specialtyRate = 0;
    } else if (selectedCard.id === 'cash-loyalty') {
      deptRate = 1;
      specialtyRate = 0;
    }

    const deptPoints = Math.floor(deptSpend / 10) * deptRate;
    const specialtyPoints = specialtyRate > 0 ? Math.floor(specialtySpend / 30) * specialtyRate : 0;
    const weekdayBonus = canGetWeekdayBonus ? 10 : 0;
    const totalPoints = deptPoints + specialtyPoints + weekdayBonus;

    // 100 points = $30 gift vouchers
    const fullVoucherBlocks = Math.floor(totalPoints / 100);
    const voucherValue = fullVoucherBlocks * 30;
    const pointsToNextVoucher = 100 - (totalPoints % 100);
    const effectiveRebateRate =
      deptSpend + specialtySpend > 0
        ? ((voucherValue / (deptSpend + specialtySpend)) * 100).toFixed(1)
        : '0.0';

    return {
      deptPoints,
      specialtyPoints,
      weekdayBonus,
      canGetWeekdayBonus,
      totalPoints,
      fullVoucherBlocks,
      voucherValue,
      pointsToNextVoucher,
      effectiveRebateRate,
    };
  }, [selectedCard, deptSpend, specialtySpend, dayType, isDoublePointsPromo]);

  const handleShareOrCopy = () => {
    navigator.clipboard?.writeText(
      `Luna Rebate Simulation: Spend S$${deptSpend} at Luna Department Store + S$${specialtySpend} at Specialty = ${calculation.totalPoints} BP ($${calculation.voucherValue} Luna Gift Vouchers with ${selectedCard.name})`
    );
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="mb-14 border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#D91B24] text-[20px]">
              calculate
            </span>
            <h3 className="font-serif text-lg tracking-wide">
              Luna Bonus Points & Gift Voucher Simulator
            </h3>
          </div>
          <p className="text-gray-300 text-xs mt-0.5">
            Estimate your reward accumulation, weekday bonuses, and voucher conversions.
          </p>
        </div>
        <div className="text-right">
          <span className="text-[11px] uppercase tracking-wider text-gray-400">Standard Rule:</span>
          <span className="text-xs text-[#EA4C56] font-semibold block">100 BP = S$30 Vouchers</span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Card Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Select Your Luna Card:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cards.map((card) => {
                const isSelected = card.id === selectedCard.id;
                return (
                  <button
                    key={card.id}
                    onClick={() => onSelectCard(card.id)}
                    className={`p-2.5 text-left border rounded-none transition cursor-pointer text-xs ${
                      isSelected
                        ? 'border-[#D91B24] bg-red-50/40 text-[#D91B24] font-semibold ring-1 ring-[#D91B24]'
                        : 'border-[#E5E7EB] hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-bold truncate">{card.name}</div>
                    <div className="text-[10px] text-gray-500 truncate">{card.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Department Store Spend Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-800">
                Luna Department Store Spend:
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] tabular-nums">
                S$ {deptSpend.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={deptSpend}
              onChange={(e) => setDeptSpend(Number(e.target.value))}
              className="w-full accent-[#D91B24] h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>S$ 0</span>
              <span className="text-[#D91B24] font-medium">S$ 400 (Weekday Bonus Target)</span>
              <span>S$ 2,000+</span>
            </div>
          </div>

          {/* Specialty Store Spend Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-800">
                Specialty Stores (B2 - Level 4) Spend:
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] tabular-nums">
                S$ {specialtySpend.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1500"
              step="30"
              value={specialtySpend}
              onChange={(e) => setSpecialtySpend(Number(e.target.value))}
              className="w-full accent-[#D91B24] h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>S$ 0</span>
              <span>Every $30 charged qualifies</span>
              <span>S$ 1,500</span>
            </div>
          </div>

          {/* Day of Week & Double Points Switches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="border border-[#E5E7EB] p-3 bg-gray-50/50">
              <span className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Shopping Day:
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDayType('weekday')}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium border cursor-pointer transition ${
                    dayType === 'weekday'
                      ? 'bg-[#D91B24] text-white border-[#D91B24]'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Mon - Thu (Weekday)
                </button>
                <button
                  type="button"
                  onClick={() => setDayType('weekend')}
                  className={`flex-1 py-1.5 px-2 text-xs font-medium border cursor-pointer transition ${
                    dayType === 'weekend'
                      ? 'bg-[#D91B24] text-white border-[#D91B24]'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Fri - Sun
                </button>
              </div>
            </div>

            <div className="border border-[#E5E7EB] p-3 bg-gray-50/50 flex flex-col justify-between">
              <span className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Promotion Period:
              </span>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700">
                <input
                  type="checkbox"
                  checked={isDoublePointsPromo}
                  onChange={(e) => setIsDoublePointsPromo(e.target.checked)}
                  className="w-4 h-4 accent-[#D91B24] rounded-none"
                />
                <span className="font-medium">Luna Double Points Active</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Results Breakdown */}
        <div className="lg:col-span-5 bg-[#FAFAF8] border border-[#E5E7EB] p-5 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3 pb-2 border-b border-gray-200 flex justify-between items-center">
              <span>Simulation Breakdown</span>
              <span className="text-[#D91B24]">{selectedCard.name}</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Department Store Points:</span>
                <span className="font-bold text-[#1A1A1A] tabular-nums">
                  +{calculation.deptPoints} BP
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Specialty Stores Points:</span>
                <span className="font-bold text-[#1A1A1A] tabular-nums">
                  +{calculation.specialtyPoints} BP
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Weekday Bonus (Min. $400):</span>
                <span
                  className={`font-bold tabular-nums ${
                    calculation.weekdayBonus > 0 ? 'text-[#D91B24]' : 'text-gray-400'
                  }`}
                >
                  {calculation.weekdayBonus > 0 ? `+${calculation.weekdayBonus} BP` : '0 BP'}
                </span>
              </div>

              <div className="pt-2 border-t border-gray-200 flex justify-between items-baseline">
                <span className="font-bold text-sm text-gray-900">Total Accumulated:</span>
                <span className="text-xl font-bold text-[#D91B24] tabular-nums">
                  {calculation.totalPoints} BP
                </span>
              </div>
            </div>

            {/* Voucher Box */}
            <div className="mt-5 p-4 bg-white border border-[#E5E7EB] rounded-none">
              <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Redeemable Gift Vouchers
              </div>
              <div className="text-2xl font-bold text-[#1A1A1A] tabular-nums flex items-baseline gap-2">
                <span>S$ {calculation.voucherValue}</span>
                <span className="text-xs font-normal text-gray-500">
                  ({calculation.fullVoucherBlocks} × S$30 Vouchers)
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">
                {calculation.pointsToNextVoucher === 100
                  ? 'Redeem at Customer Service Centre, Level 3.'
                  : `Earn ${calculation.pointsToNextVoucher} more points to unlock another S$30 voucher.`}
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleShareOrCopy}
              className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 py-2 px-3 text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copiedNotification ? 'check' : 'content_copy'}
              </span>
              <span>{copiedNotification ? 'Copied Summary!' : 'Copy Summary'}</span>
            </button>

            {onAddToCartVoucher && calculation.voucherValue > 0 && (
              <button
                onClick={() => onAddToCartVoucher(calculation.voucherValue)}
                className="flex-1 bg-[#D91B24] hover:bg-[#B01018] text-white py-2 px-3 text-xs font-bold tracking-wide uppercase transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">redeem</span>
                <span>Simulate Bag Claim</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
