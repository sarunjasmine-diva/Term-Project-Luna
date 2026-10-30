import React from 'react';
import { CardItem } from '../types';

interface CardMatrixProps {
  cards: CardItem[];
  onSelectCardDetails: (card: CardItem) => void;
  onSelectUpdateDetails: (card: CardItem) => void;
  selectedCardId?: string;
  onHighlightCard?: (cardId: string) => void;
}

export const CardMatrix: React.FC<CardMatrixProps> = ({
  cards,
  onSelectCardDetails,
  onSelectUpdateDetails,
  selectedCardId,
  onHighlightCard,
}) => {
  return (
    <div className="mb-14 overflow-x-auto border border-[#E5E7EB] shadow-sm bg-white">
      <table className="w-full min-w-[940px] border-collapse text-left text-xs">
        <thead>
          <tr className="bg-white border-b border-[#E5E7EB]">
            <th className="w-[20%] p-4 font-bold text-[#1A1A1A] uppercase tracking-wider text-[11px] align-bottom bg-gray-50/70">
              Criteria / Privileges
            </th>

            {cards.map((card) => {
              const isSelected = selectedCardId === card.id;
              return (
                <th
                  key={card.id}
                  onClick={() => onHighlightCard && onHighlightCard(card.id)}
                  className={`w-[20%] p-4 text-center align-top border-l border-[#E5E7EB] transition-colors cursor-pointer ${
                    isSelected ? 'bg-red-50/20' : 'bg-white hover:bg-gray-50/30'
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="font-bold text-xs text-[#1A1A1A] min-h-[34px] flex items-center justify-center leading-tight">
                      {card.name}
                    </span>

                    {/* Fictional Luna Card Mockup Graphic */}
                    <div
                      className={`w-44 aspect-[1.58/1] rounded-lg bg-gradient-to-tr ${card.cardDesign.gradient} p-2.5 ${card.cardDesign.textColor} flex flex-col justify-between shadow-md text-left transition-transform hover:scale-[1.03] duration-200 border border-black/10 select-none relative overflow-hidden`}
                    >
                      {/* Card Top Row */}
                      <div className="flex justify-between items-center z-10">
                        {card.id === 'cash-loyalty' ? (
                          <>
                            <div className="flex items-center gap-1">
                              <span className="text-[8px] font-bold tracking-widest text-white">
                                LUNA
                              </span>
                              <span className="text-[6px] text-white/80">✦</span>
                            </div>
                            <span className="text-[7px] bg-white/20 px-1 rounded font-mono text-white">
                              LOYALTY
                            </span>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-1">
                              <span
                                className={`text-[8px] font-bold tracking-wider ${
                                  card.id === 'card-a'
                                    ? 'text-amber-300'
                                    : card.id === 'debit'
                                    ? 'text-gray-900'
                                    : 'text-gray-100'
                                }`}
                              >
                                LUNA
                              </span>
                              <span className="text-[6px] opacity-70">●</span>
                              <span className="text-[7px] font-semibold tracking-wider opacity-90">
                                {card.cardDesign.networkLogo}
                              </span>
                            </div>
                            <span
                              className={`text-[8px] font-extrabold tracking-wider ${
                                card.id === 'debit'
                                  ? 'text-blue-900 italic text-[9px]'
                                  : card.id === 'card-b'
                                  ? 'italic text-white text-[9px]'
                                  : 'text-amber-300 text-[8px]'
                              }`}
                            >
                              {card.cardDesign.networkLogo}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Card Chip or Emblem */}
                      <div className="z-10">
                        {card.id === 'cash-loyalty' ? (
                          <div className="text-center font-serif text-[11px] tracking-widest text-white/95 uppercase drop-shadow-sm flex items-center justify-center gap-1">
                            <span>🌙</span>
                            <span>{card.cardDesign.cardholderName}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-5 h-3.5 ${card.cardDesign.chipColor} rounded-sm opacity-90 border border-black/10 shadow-inner`}
                            ></div>
                            <span className="text-[7px] font-mono tracking-widest opacity-60">
                              LUNA
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Bottom Row */}
                      <div className="flex justify-between items-end text-[7px] font-mono z-10">
                        <span
                          className={
                            card.id === 'debit' ? 'text-gray-600' : 'text-gray-300'
                          }
                        >
                          {card.cardDesign.cardSampleNumber}
                        </span>
                        <span
                          className={`font-sans font-bold text-[7px] tracking-wider uppercase ${
                            card.id === 'debit' ? 'text-gray-800' : 'text-white'
                          }`}
                        >
                          {card.cardDesign.tierLabel}
                        </span>
                      </div>

                      {/* Fictional Crescent Orbit Watermark */}
                      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-white/10 pointer-events-none"></div>
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-[#E5E7EB]">
          {/* Eligibility */}
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">Eligibility</td>
            {cards.map((card) => (
              <td
                key={card.id}
                className="p-4 text-center border-l border-[#E5E7EB] font-medium text-gray-700"
              >
                {card.eligibility}
              </td>
            ))}
          </tr>

          {/* Luna Department Store */}
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">
              Luna Department Store
            </td>
            {cards.map((card) => (
              <td key={card.id} className="p-4 text-center border-l border-[#E5E7EB]">
                <span className="font-semibold text-[#1A1A1A] block">
                  {card.deptStoreSpend.rate}
                </span>
                <span
                  className={
                    card.deptStoreSpend.highlight
                      ? 'text-[#D91B24] font-bold text-xs'
                      : 'text-[#1A1A1A] font-medium text-xs'
                  }
                >
                  {card.deptStoreSpend.points}
                </span>
              </td>
            ))}
          </tr>

          {/* 10 BP Weekday Privilege */}
          <tr className="bg-red-50/20 hover:bg-red-50/40">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">
              10 BP Weekday Privilege
            </td>
            <td
              colSpan={2}
              className="p-4 text-center border-l border-[#E5E7EB] text-[#D91B24] font-medium text-xs leading-relaxed"
            >
              Receive 10 Bonus Points (BP) with min $400 charged every Monday to Thursday^
            </td>
            <td
              colSpan={2}
              className="p-4 text-center border-l border-[#E5E7EB] text-gray-400 italic"
            >
              Not applicable
            </td>
          </tr>

          {/* Card Promotion Period */}
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">Card Promotion Period</td>
            <td colSpan={2} className="p-4 text-center border-l border-[#E5E7EB] leading-relaxed">
              <span className="font-semibold text-[#1A1A1A] block">
                Get 10% OFF during Luna Card Promotion Period •
              </span>
              <span className="text-gray-500 text-[11px] block mt-0.5">
                Earn Double Bonus Points during Luna Double Bonus Points Promotion Period*
              </span>
            </td>
            <td
              colSpan={2}
              className="p-4 text-center border-l border-[#E5E7EB] text-gray-400 italic"
            >
              Not applicable
            </td>
          </tr>

          {/* Participating Specialty Stores */}
          <tr className="hover:bg-gray-50/50">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">
              Participating Specialty Stores in Luna Shopping Centre (#)
              <span className="block text-[10px] text-gray-500 font-normal mt-0.5">
                (Basement 2 - Level 4) + Astra Horology
              </span>
            </td>
            <td className="p-4 text-center border-l border-[#E5E7EB]">
              <span className="font-semibold text-[#1A1A1A] block">Every $30 charged</span>
              <span className="text-[#D91B24] font-bold">= 2 Bonus Points</span>
            </td>
            <td className="p-4 text-center border-l border-[#E5E7EB]">
              <span className="font-semibold text-[#1A1A1A] block">Every $30 charged</span>
              <span className="text-[#1A1A1A] font-medium">= 1 Bonus Point</span>
            </td>
            <td className="p-4 text-center border-l border-[#E5E7EB] text-gray-400 italic">
              Not applicable
            </td>
            <td className="p-4 text-center border-l border-[#E5E7EB] text-gray-400 italic">
              Not applicable
            </td>
          </tr>

          {/* Redemption of Luna Bonus Points */}
          <tr className="bg-gray-50/30">
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">
              Redemption of Luna Bonus Points
            </td>
            <td
              colSpan={4}
              className="p-4 text-center border-l border-[#E5E7EB] font-medium text-[#1A1A1A]"
            >
              <span className="bg-[#D91B24]/10 text-[#D91B24] font-bold px-2 py-1 rounded inline-block text-xs">
                Every 100 Luna Bonus Points accumulated = $30 Luna Gift Vouchers
              </span>
              <span className="text-gray-500 text-[11px] block mt-1">
                Redemption can be done at Customer Service Centre, Level 3, Luna Department Store.
              </span>
            </td>
          </tr>

          {/* For More Details CTA */}
          <tr>
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">For more details</td>
            {cards.map((card) => (
              <td key={card.id} className="p-4 text-center border-l border-[#E5E7EB]">
                <button
                  onClick={() => onSelectCardDetails(card)}
                  className="w-full bg-[#D91B24] hover:bg-[#B01018] active:bg-[#900c13] text-white py-2 px-2.5 text-[11px] font-bold tracking-wider uppercase transition shadow-sm rounded-none flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>LEARN MORE(+)</span>
                </button>
              </td>
            ))}
          </tr>

          {/* Update of Personal Details CTA */}
          <tr>
            <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">
              For update of personal details
            </td>
            {cards.map((card) => (
              <td key={card.id} className="p-4 text-center border-l border-[#E5E7EB]">
                <button
                  onClick={() => onSelectUpdateDetails(card)}
                  className="w-full bg-[#4A4A4A] hover:bg-black active:bg-neutral-900 text-white py-1.5 px-2.5 text-[11px] font-semibold tracking-wider uppercase transition rounded-none cursor-pointer"
                >
                  <span>UPDATE</span>
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
