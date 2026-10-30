import React, { useState } from 'react';

interface SpecialtyStoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SpecialtyStore {
  name: string;
  floor: string;
  category: string;
}

const SPECIALTY_STORES: SpecialtyStore[] = [
  { name: 'Astra Horology', floor: 'Level 2', category: 'Fine Watches' },
  { name: 'Maison Selene', floor: 'Level 1 & 2', category: 'Haute Couture & Leather' },
  { name: 'Aurum Jewels & Timepieces', floor: 'Level 1 & 2', category: 'Fine Jewellery' },
  { name: 'Veloce Atelier', floor: 'Level 1', category: 'Luxury Accessories' },
  { name: 'Celestia Parfums', floor: 'Level 1', category: 'Luxury Fragrances' },
  { name: 'Atelier de Lyon', floor: 'Level 2', category: 'French Ready-to-Wear' },
  { name: 'Solstice Fine Leather', floor: 'Level 1', category: 'Artisanal Leather Goods' },
  { name: 'Elysium Diamonds', floor: 'Level 1', category: 'High Jewellery' },
  { name: 'Archipelago Rare Books', floor: 'Level 4', category: 'Books & Curated Stationery' },
  { name: 'Aura Activewear', floor: 'Level 3', category: 'Performance Apparel' },
  { name: 'Botanica Herbarium', floor: 'Basement 1', category: 'Haircare & Wellness' },
  { name: 'Tea Sovereign Salon', floor: 'Level 2', category: 'Artisan Gourmet Tea' },
  { name: 'Patisserie Lumière', floor: 'Level 2', category: 'Confectionery & Pastries' },
  { name: 'Gourmet Pantry Market', floor: 'Basement 2', category: 'International Produce' },
  { name: 'Luna Food Hall & Japanese Dining', floor: 'Basement 2', category: 'Dining & Specialty Food' },
];

export const SpecialtyStoresModal: React.FC<SpecialtyStoresModalProps> = ({ isOpen, onClose }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('All');

  if (!isOpen) return null;

  const floors = ['All', 'Basement 2', 'Basement 1', 'Level 1', 'Level 2', 'Level 3', 'Level 4'];

  const filtered = SPECIALTY_STORES.filter((store) => {
    const matchesText =
      store.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      store.category.toLowerCase().includes(filterQuery.toLowerCase());
    const matchesFloor = selectedFloor === 'All' || store.floor.includes(selectedFloor);
    return matchesText && matchesFloor;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full border border-[#E5E7EB] shadow-2xl relative my-8">
        <div className="bg-[#1A1A1A] text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D91B24]">
              Luna Shopping Centre
            </span>
            <h3 className="font-serif text-xl">Participating Specialty Stores (#)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl p-1 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6 text-xs text-gray-700 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-gray-600 leading-relaxed">
            Luna Bonus Points are awarded for retail charges at participating Specialty Stores from{' '}
            <strong>Basement 2 to Level 4</strong>, including <strong>Astra Horology</strong>.
            Earn rates: Luna Credit Card A earns <strong>2 BP per $30</strong>; Luna Credit Card B
            earns <strong>1 BP per $30</strong>.
          </p>

          {/* Search & Floor Filter */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search store name or category..."
              className="flex-1 border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24]"
            />
            <select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              className="border border-gray-300 p-2 text-xs focus:outline-none focus:border-[#D91B24] bg-white"
            >
              {floors.map((f) => (
                <option key={f} value={f}>
                  {f === 'All' ? 'All Floors' : f}
                </option>
              ))}
            </select>
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border border-[#E5E7EB] p-3 max-h-72 overflow-y-auto bg-gray-50/50">
            {filtered.map((store, i) => (
              <div
                key={i}
                className="p-2.5 bg-white border border-[#E5E7EB] flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold text-gray-900">{store.name}</div>
                  <div className="text-[10px] text-gray-500">{store.category}</div>
                </div>
                <span className="text-[10px] font-bold text-[#D91B24] bg-red-50 px-2 py-0.5 rounded">
                  {store.floor}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-500 italic">
            *Excludes instalment payment plans and non-participating service counters. Terms and
            conditions apply.
          </p>

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="bg-[#1A1A1A] hover:bg-black text-white py-2 px-5 font-bold uppercase text-xs cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
