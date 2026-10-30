import React, { useState } from 'react';
import { FaqCategory } from '../types';

interface FaqSectionProps {
  categories: FaqCategory[];
  searchQuery?: string;
  onOpenCustomerServiceModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  categories,
  searchQuery = '',
  onOpenCustomerServiceModal,
}) => {
  // Default open FAQ 1 and FAQ 5 matching the design
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-5': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        allOpen[item.id] = true;
      });
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const q = searchQuery.toLowerCase().trim();

  // Filter categories and questions if search query is provided
  const filteredCategories = categories
    .map((cat) => {
      const filteredItems = cat.items.filter((item) => {
        if (!q) return true;
        const matchesQ = item.question.toLowerCase().includes(q);
        const matchesA = Array.isArray(item.answer)
          ? item.answer.some((a) => a.toLowerCase().includes(q))
          : item.answer.toLowerCase().includes(q);
        const matchesSub = item.subpoints?.some((s) => s.toLowerCase().includes(q));
        return matchesQ || matchesA || matchesSub;
      });
      return {
        ...cat,
        items: filteredItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="border-t border-[#E5E7EB] pt-10 mb-14" id="faq-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div>
          <h2 className="serif-heading text-2xl md:text-3xl font-normal text-[#1A1A1A]">FAQ</h2>
          <p className="text-xs text-gray-500 mt-1">
            Frequently asked questions about card applications, bonus point earnings, and voucher rules for Luna Cards.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="text-[11px] font-semibold text-gray-600 hover:text-[#D91B24] px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-50 transition cursor-pointer"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="text-[11px] font-semibold text-gray-600 hover:text-[#D91B24] px-2.5 py-1 border border-gray-200 bg-white hover:bg-gray-50 transition cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {searchQuery && (
        <div className="mb-4 text-xs text-gray-600 bg-red-50/60 p-2.5 border border-red-100 flex items-center justify-between">
          <span>
            Showing results matching: <strong className="text-[#D91B24]">"{searchQuery}"</strong>
          </span>
          <span className="text-gray-400">
            {filteredCategories.reduce((acc, c) => acc + c.items.length, 0)} questions found
          </span>
        </div>
      )}

      {filteredCategories.length === 0 ? (
        <div className="p-8 text-center border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-500">
          No questions matched your search query. Try searching for "vouchers", "apply", "weekday",
          or contact Customer Service.
        </div>
      ) : (
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.category}>
              {/* Category Header */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] pb-2 border-b border-[#1A1A1A] mb-3">
                {category.category}
              </h3>

              {/* Accordion Items */}
              <div className="space-y-2">
                {category.items.map((item) => {
                  const isOpen = q ? true : !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      id={item.id}
                      className="border border-[#E5E7EB] rounded-none bg-white transition shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full py-3.5 px-4 text-left flex items-center justify-between text-xs font-semibold text-[#1A1A1A] hover:bg-gray-50 transition cursor-pointer gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="leading-snug">{item.question}</span>
                        <span
                          className={`material-symbols-outlined text-[18px] text-gray-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#D91B24]' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                          {Array.isArray(item.answer) ? (
                            item.answer.map((para, i) => (
                              <p key={i} className="mb-2">
                                {para}
                              </p>
                            ))
                          ) : (
                            <p className="mb-2">{item.answer}</p>
                          )}

                          {item.subpoints && item.subpoints.length > 0 && (
                            <ul className="list-disc pl-5 space-y-1 mb-2 text-gray-700">
                              {item.subpoints.map((pt, i) => (
                                <li key={i}>{pt}</li>
                              ))}
                            </ul>
                          )}

                          {item.note && (
                            <p className="text-[11px] text-gray-500 italic mt-2 border-t border-gray-200/60 pt-2">
                              {item.note}
                            </p>
                          )}

                          {item.id === 'faq-1' && onOpenCustomerServiceModal && (
                            <div className="mt-3 pt-2">
                              <button
                                onClick={onOpenCustomerServiceModal}
                                className="text-[11px] text-[#D91B24] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[14px]">
                                  location_on
                                </span>
                                <span>Customer Service Centre (Level 3) Location & Hours</span>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
