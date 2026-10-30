import React from 'react';

interface FooterProps {
  onOpenPrestige: () => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrestige, onOpenInfoModal }) => {
  const handleLinkClick = (e: React.MouseEvent, title: string, content: string) => {
    e.preventDefault();
    onOpenInfoModal(title, content);
  };

  return (
    <footer className="bg-[#111111] text-gray-400 pt-12 pb-8 border-t border-neutral-800 text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-neutral-800 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-[#D91B24] flex items-center justify-center text-white text-[10px] font-bold">
                🌙
              </span>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                Luna Department Store
              </h4>
            </div>
            <p className="text-gray-400 text-xs">
              88 Orchard Crescent, Singapore 238888 &nbsp;|&nbsp; Mon - Sun, 10am to 9.30pm
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Follow us on:</span>
            <div className="flex gap-2 text-white">
              <a
                href="#social-f"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfoModal('Social Media', 'Follow @lunadepartment for seasonal lookbooks and events.');
                }}
                className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold hover:bg-[#D91B24] transition cursor-pointer"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#social-ig"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfoModal('Instagram', 'Follow @lunadepartment on Instagram.');
                }}
                className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold hover:bg-[#D91B24] transition cursor-pointer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="#social-yt"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenInfoModal('YouTube', 'Watch our craftsmanship and designer previews on YouTube.');
                }}
                className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold hover:bg-[#D91B24] transition cursor-pointer"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-8 border-b border-neutral-800 text-[11px]">
          {/* Col 1 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">About Us</h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Company Policy',
                      'Luna Department Store is committed to thoughtful hospitality, curation of international luxury and lifestyle brands, and premier service excellence.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Company Policy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'General Services',
                      'Services available at Level 3 Customer Service Centre include Gift Wrapping, Gift Voucher Issuance, Lost & Found, and Wheelchair Loans.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  General Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Corporate Services',
                      'Corporate gift voucher purchases and bespoke seasonal hampers can be coordinated via our Corporate Sales Division.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Corporate Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Careers',
                      'Join the Luna family. Explore opportunities in Retail Operations, Customer Relations, Visual Merchandising, and Department Management.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">In-Store</h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Store Information',
                      'Luna Department Store spans 6 levels: Basement 2 (Food Hall & Gourmet), Basement 1 (Accessories & Footwear), Level 1 (Cosmetics & Haute Joaillerie), Level 2 (Designer Fashion & Fine Jewellery), Level 3 (Men & Active Lifestyle), Level 4 (Home Living & Children).'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Store Information
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Events Calendar',
                      'Current Highlight: Luna Artisanal Gourmet Fair at Luna Square B2, showcasing authentic seasonal delicacies, pastry masterclasses, and specialty teas.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Events Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Directory Guide',
                      'Floor directory brochures are available at customer service counters on Level 1 and Level 3, as well as electronic store directory kiosks on all floors.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Directory Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">
              Communications
            </h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Ads & Catalogues',
                      'Browse our seasonal lookbooks and festive catalogs online to preview new arrivals, limited collections, and cardholder promotions.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Ads & Catalogues
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Press Room',
                      'Media inquiries and press releases regarding store expansions, brand partnerships, and community initiatives.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Press Room
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">Tourists</h5>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Tourist Privileges',
                      'Overseas visitors presenting their foreign passport at Customer Service Centre Level 3 can redeem a complimentary Tourist Privilege Card granting special store privileges.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Tourist Privileges
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'GST Refund',
                      'Tourist tax refund kiosks are located at Customer Service Centre, Level 3. Minimum purchase of S$100 (same-day).'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  GST Refund
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Overseas Cards',
                      'Affiliate store cardholders and international privilege partners enjoy cross-border member savings.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Overseas Cards
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">Help & Info</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#faq-section" className="hover:text-white transition">
                  In-store FAQ
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition">
                  Online FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Getting Here',
                      'MRT: Orchard MRT Station via underpass directly to Luna Basement 2. Carpark: Luna Department Store basement carpark with over 800 lots.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Getting Here
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    handleLinkClick(
                      e,
                      'Contact Us',
                      'Customer Service Hotline: +65 6800 1111 | Operating Hours: 10:00am - 9:30pm Daily.'
                    )
                  }
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 6 */}
          <div>
            <h5 className="text-white font-semibold uppercase mb-3 tracking-wider">Loyalty</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#cards-matrix" className="text-[#D91B24] font-semibold hover:underline">
                  Luna Cards
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrestige}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Prestige Programme
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 gap-3">
          <p>&copy; 2025 Luna Department Store Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={(e) =>
                handleLinkClick(
                  e,
                  'Luna Shopping Centre',
                  'Luna Shopping Centre connects 4 levels of premier luxury fashion, culinary salons, and lifestyle boutiques.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              Luna SC
            </button>
            <button
              onClick={(e) =>
                handleLinkClick(
                  e,
                  'Sustainability',
                  'Our Eco-Action initiative supports sustainable merchandise sourcing, plastic reduction in gift packaging, and energy-efficient building operations.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              Sustainability
            </button>
            <button
              onClick={(e) =>
                handleLinkClick(
                  e,
                  'Privacy Policy',
                  'Luna Department Store complies with Personal Data Protection standards. Customer records are strictly secured.'
                )
              }
              className="hover:text-white cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
