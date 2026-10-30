import React, { useState } from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenAccount: () => void;
  onOpenBag: () => void;
  bagCount: number;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const DEPARTMENTS = [
  'Explore Store',
  'Food',
  'Luxury',
  'Beauty',
  'Women',
  'Men',
  'Children',
  'Household',
  'Interior',
  'Gadgets',
  'Sports',
  'Travel',
  'Promotions',
];

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenAccount,
  onOpenBag,
  bagCount,
  selectedCategory,
  onSelectCategory,
}) => {
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const quickSearchTags = [
    '10 BP Weekday Privilege',
    'Luna Gift Vouchers',
    'Luna Credit Card A',
    'Luna Credit Card B',
    'Specialty Stores',
    'Double Bonus Points',
    'Luna Cash Loyalty Card',
  ];

  return (
    <header className="w-full bg-white border-b border-[#E5E7EB] sticky top-0 z-40">
      {/* Top Banner & Main Nav Row */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Fictional Brand Logo: Luna Department Store */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
            aria-label="Luna Department Store Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#D91B24] flex items-center justify-center text-white shadow-sm shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1 0 10 10c0-1.25-.23-2.45-.66-3.55a8 8 0 1 1-5.79-6.45C14.45 2.23 13.25 2 12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest leading-none text-[#1A1A1A]">
                LUNA
              </span>
              <span className="text-[7.5px] tracking-[0.25em] text-gray-500 font-sans uppercase font-bold mt-0.5">
                DEPARTMENT STORE
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4 relative">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setShowSearchSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 250)}
              placeholder="Search cards, privileges, FAQs, stores..."
              className="w-full bg-[#F6F6F6] text-xs rounded-full py-2.5 pl-9 pr-8 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D91B24] border border-transparent transition"
            />
            <span className="material-symbols-outlined text-[18px] text-gray-400 absolute left-3 top-2.5 pointer-events-none">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600 text-xs flex items-center justify-center w-4 h-4 rounded-full bg-gray-200"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown / Autocomplete */}
          {showSearchSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E7EB] shadow-lg rounded-md p-3 z-50 text-xs">
              <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Popular Inquiries
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    onMouseDown={() => onSearchChange(tag)}
                    className="text-left text-xs text-gray-700 hover:text-[#D91B24] hover:bg-red-50/60 px-2.5 py-1 rounded transition border border-gray-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Utility Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-gray-500 text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Mon - Sun, 10:00am - 9:30pm</span>
          </div>

          {/* Account Button */}
          <button
            onClick={onOpenAccount}
            className="text-gray-700 hover:text-[#D91B24] flex items-center gap-1.5 transition py-1 px-2 rounded hover:bg-gray-50 cursor-pointer"
            aria-label="Member Account"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span className="hidden sm:inline font-medium">Account</span>
          </button>

          {/* Bag Button */}
          <button
            onClick={onOpenBag}
            className="text-gray-700 hover:text-[#D91B24] flex items-center gap-1.5 transition py-1 px-2 rounded hover:bg-gray-50 relative cursor-pointer"
            aria-label="Shopping Bag"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="hidden sm:inline font-medium">Bag ({bagCount})</span>
            {bagCount > 0 && (
              <span className="sm:hidden absolute -top-1 -right-1 bg-[#D91B24] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="md:hidden px-4 pb-2.5">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search privileges, cards, FAQs..."
            className="w-full bg-[#F6F6F6] text-xs rounded-full py-2 pl-9 pr-8 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D91B24]"
          />
          <span className="material-symbols-outlined text-[17px] text-gray-400 absolute left-3 top-2">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Secondary Department Categories Bar */}
      <div className="border-t border-gray-100 bg-white overflow-x-auto no-scrollbar">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center gap-6 text-[11px] font-semibold tracking-wider uppercase text-gray-700 whitespace-nowrap py-2.5">
          {DEPARTMENTS.map((dept) => {
            const isSelected = selectedCategory === dept;
            const isExplore = dept === 'Explore Store';
            const isPromo = dept === 'Promotions';
            return (
              <button
                key={dept}
                onClick={() => onSelectCategory(dept)}
                className={`transition-colors flex items-center gap-1 py-0.5 cursor-pointer ${
                  isSelected || (isExplore && selectedCategory === 'Explore Store')
                    ? 'text-[#D91B24] font-bold border-b-2 border-[#D91B24]'
                    : isPromo
                    ? 'text-[#D91B24] hover:text-[#B01018]'
                    : 'hover:text-[#D91B24]'
                }`}
              >
                <span>{dept}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
