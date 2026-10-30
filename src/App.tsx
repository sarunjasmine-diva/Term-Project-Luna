import React, { useState } from 'react';
import { Header } from './components/Header';
import { CardMatrix } from './components/CardMatrix';
import { PointsCalculator } from './components/PointsCalculator';
import { FaqSection } from './components/FaqSection';
import { CardDetailsModal } from './components/CardDetailsModal';
import { UpdateDetailsModal } from './components/UpdateDetailsModal';
import { PrestigeModal } from './components/PrestigeModal';
import { SpecialtyStoresModal } from './components/SpecialtyStoresModal';
import { AccountDrawer } from './components/AccountDrawer';
import { BagDrawer } from './components/BagDrawer';
import { Footer } from './components/Footer';
import { LUNA_CARDS } from './data/cardsData';
import { FAQ_DATA } from './data/faqData';
import { CardItem } from './types';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Explore Store');
  const [selectedCardForDetails, setSelectedCardForDetails] = useState<CardItem | null>(null);
  const [selectedCardForUpdate, setSelectedCardForUpdate] = useState<CardItem | null>(null);
  const [isPrestigeModalOpen, setIsPrestigeModalOpen] = useState(false);
  const [isSpecialtyModalOpen, setIsSpecialtyModalOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagVoucherValue, setBagVoucherValue] = useState<number>(60);
  const [selectedCardId, setSelectedCardId] = useState<string>('card-a');

  // Generic info modal for footer links
  const [infoModal, setInfoModal] = useState<{ title: string; content: string } | null>(null);

  // Success toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleClaimVoucherToBag = (amount: number) => {
    setBagVoucherValue((prev) => prev + amount);
    showToast(`Added S$${amount} Luna Gift Vouchers to your Bag!`);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#1A1A1A] text-white px-4 py-3 rounded shadow-xl border border-neutral-700 text-xs flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#D91B24] text-[18px]">info</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={Math.floor(bagVoucherValue / 30)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Breadcrumbs */}
      <nav className="bg-[#F6F6F6]/60 border-b border-[#E5E7EB] py-2.5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-[11px] text-gray-500 flex items-center gap-2 tracking-wide uppercase">
          <a href="#" className="hover:text-[#D91B24] transition">
            Home
          </a>
          <span>&gt;</span>
          <a href="#" className="hover:text-[#D91B24] transition">
            Loyalty
          </a>
          <span>&gt;</span>
          <span className="text-[#1A1A1A] font-semibold">Luna Cards</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
        {/* Page Title & Intro */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-1">
            <h1 className="serif-heading text-3xl md:text-4xl font-normal text-[#1A1A1A] tracking-tight">
              Luna Cards
            </h1>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Discover curated privileges, exclusive double points, and shopping rebates with official
            Luna Cards.
          </p>
        </div>

        {/* Loyalty Programme Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E5E7EB] mb-12 shadow-sm">
          <button className="bg-[#D91B24] text-white py-3.5 px-6 text-center text-sm font-semibold tracking-wide uppercase transition hover:bg-[#B01018] flex items-center justify-center gap-2 cursor-default">
            <span>Luna Cards</span>
          </button>
          <button
            onClick={() => setIsPrestigeModalOpen(true)}
            className="bg-white text-gray-700 py-3.5 px-6 text-center text-sm font-medium tracking-wide uppercase hover:bg-gray-50 border-t md:border-t-0 md:border-l border-[#E5E7EB] transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Luna Prestige Card Programme</span>
            <span className="material-symbols-outlined text-[16px] text-gray-400">open_in_new</span>
          </button>
        </div>

        {/* Card Matrix Table Section */}
        <div id="cards-matrix">
          <div className="flex justify-between items-baseline mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Comparative Privilege & Earning Matrix
            </h2>
            <span className="text-[11px] text-gray-500 hidden sm:inline">
              Swipe horizontally to compare all 4 official card tiers
            </span>
          </div>

          <CardMatrix
            cards={LUNA_CARDS}
            onSelectCardDetails={(card) => setSelectedCardForDetails(card)}
            onSelectUpdateDetails={(card) => setSelectedCardForUpdate(card)}
            selectedCardId={selectedCardId}
            onHighlightCard={(id) => setSelectedCardId(id)}
          />
        </div>

        {/* Footnotes & Terms */}
        <div className="mb-14 text-[11px] text-gray-500 space-y-1.5 leading-relaxed bg-[#F6F6F6]/50 p-4 border border-[#E5E7EB]">
          <p>
            <span className="text-[#D91B24] font-bold">(#)</span> Bonus Points are awarded for
            purchases (excluding instalment payment plans) at participating Specialty Stores in
            Luna Shopping Centre from Basement 2 to Level 4. Please visit{' '}
            <button
              onClick={() => setIsSpecialtyModalOpen(true)}
              className="text-[#D91B24] underline hover:text-[#B01018] font-medium cursor-pointer"
            >
              Luna Shopping Centre Privileges
            </button>{' '}
            for the latest update on the list of participating Specialty Stores.
          </p>
          <p>
            <span className="text-[#D91B24] font-bold">(^)</span> For Luna Credit Cards and Debit
            Card, personal records are updated via partner bank security authentication.
          </p>
          <p>
            <span className="text-[#D91B24] font-bold">(*)</span> Exclusions and other terms and
            conditions apply.
          </p>
          <p>
            LDSL reserves the right to revise the benefits and privileges extended to cardholders from
            time to time at its sole discretion and without prior notice.
          </p>
        </div>

        {/* Interactive Points Calculator */}
        <PointsCalculator
          cards={LUNA_CARDS}
          selectedCardId={selectedCardId}
          onSelectCard={setSelectedCardId}
          onAddToCartVoucher={handleClaimVoucherToBag}
        />

        {/* FAQ Accordion Section */}
        <FaqSection
          categories={FAQ_DATA}
          searchQuery={searchQuery}
          onOpenCustomerServiceModal={() =>
            setInfoModal({
              title: 'Customer Service Centre (Level 3)',
              content:
                'Location: Level 3 (adjacent to Childrens Department), Luna Department Store, 88 Orchard Crescent. Hours: 10:00am - 9:30pm daily. Services: Luna Gift Voucher redemption, Luna Cash Loyalty Card applications, Tourist Privileges, GST Refund assistance, and member assistance.',
            })
          }
        />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenPrestige={() => setIsPrestigeModalOpen(true)}
        onOpenInfoModal={(title, content) => setInfoModal({ title, content })}
      />

      {/* Modals & Drawers */}
      <CardDetailsModal
        card={selectedCardForDetails}
        onClose={() => setSelectedCardForDetails(null)}
        onApplySuccess={(cardName) => {
          showToast(`Application successfully initiated for ${cardName}!`);
        }}
      />

      <UpdateDetailsModal
        card={selectedCardForUpdate}
        onClose={() => setSelectedCardForUpdate(null)}
        onUpdateSuccess={(msg) => showToast(msg)}
      />

      <PrestigeModal
        isOpen={isPrestigeModalOpen}
        onClose={() => setIsPrestigeModalOpen(false)}
      />

      <SpecialtyStoresModal
        isOpen={isSpecialtyModalOpen}
        onClose={() => setIsSpecialtyModalOpen(false)}
      />

      <AccountDrawer
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onRedeemVouchers={(val) => {
          setBagVoucherValue((prev) => prev + val);
          showToast(`Redeemed S$${val} Luna Gift Vouchers!`);
        }}
      />

      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        voucherValue={bagVoucherValue}
        onClearBag={() => {
          setBagVoucherValue(0);
          showToast('Bag has been cleared.');
        }}
      />

      {/* Generic Info Modal for Footer Links */}
      {infoModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full border border-[#E5E7EB] shadow-2xl p-6 relative text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-3">
              <h3 className="font-serif text-base font-bold text-gray-900">{infoModal.title}</h3>
              <button
                onClick={() => setInfoModal(null)}
                className="text-gray-400 hover:text-gray-800 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed mb-5">{infoModal.content}</p>
            <div className="text-right">
              <button
                onClick={() => setInfoModal(null)}
                className="bg-[#D91B24] hover:bg-[#B01018] text-white py-1.5 px-4 font-bold uppercase text-[11px] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
