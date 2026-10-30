import { FaqCategory } from '../types';

export const FAQ_DATA: FaqCategory[] = [
  {
    category: 'GENERAL',
    items: [
      {
        id: 'faq-1',
        question: 'How do I apply for Luna Cards?',
        answer: 'For Luna Credit Cards and Luna Debit Card, please click "LEARN MORE(+)" in the above table for online fast-track application.',
        subpoints: [
          'A recent colour passport-sized photograph',
          'Your National Identity Card / Passport or resident pass showing your permanent address',
          'Proof of residential address in Singapore / locality',
        ],
        note: 'For Luna Cash Loyalty Card application, please visit our Customer Service Centre at Level 3. A fee of S$15 (inclusive of GST) will be levied for every card issued. Payment must be made by cash or direct card payment.',
      },
      {
        id: 'faq-2',
        question: 'How do I update Luna on my change of mailing address?',
        answer:
          'For Luna Credit Card A, Luna Credit Card B, and Luna Debit Card, please update your details through our Partner Bank app or portal. For Luna Cash Loyalty Cardholders, please visit our Customer Service Centre at Level 3 or submit your address change online through the UPDATE portal.',
      },
      {
        id: 'faq-3',
        question: 'Can I pay with any credit cards when using the Luna Cash Loyalty Card?',
        answer:
          'Luna Cash Loyalty Card points are awarded exclusively when purchases are settled via cash, direct bank debit, or Luna Gift Vouchers. Transactions made with third-party credit cards do not qualify for Cash Loyalty bonus points accumulation.',
      },
      {
        id: 'faq-4',
        question: 'I am an existing Luna Cardholder. How can I receive promotional and marketing materials from Luna?',
        answer:
          'You can ensure your marketing consent preferences are active by visiting our Customer Service Centre at Level 3, or by updating your communication settings via the Luna Online account portal.',
      },
    ],
  },
  {
    category: '10 BONUS POINTS (BP) WEEKDAY PRIVILEGE',
    items: [
      {
        id: 'faq-5',
        question: 'Who is eligible for the new 10 Bonus Points (BP) Weekday Privilege and how is it credited to my Card?',
        answer:
          'With effect from Wed 1 Jan 2025, get 10 Bonus Points (BP) with a minimum charge of $400 on your Luna Credit Card A or Luna Credit Card B at Luna Department Store every Monday to Thursday (inclusive of Public Holidays).',
        subpoints: [
          'Exclusions apply. Please find the exclusions list at Customer Service Centre.',
          'The 10 Bonus Points (BP) will automatically be credited to your account at the end of each day after the store closes.',
        ],
      },
      {
        id: 'faq-6',
        question: 'I made my purchase using other credit cards. Am I still eligible for the new 10 Bonus Points (BP) Weekday Privilege?',
        answer:
          'No. You must charge your purchases to a valid Luna Credit Card A or Luna Credit Card B to qualify for this privilege.',
      },
      {
        id: 'faq-7',
        question: 'Can I be entitled for 10 Bonus Points (BP) when I pay using Gift Vouchers?',
        answer:
          'Only the nett amount charged to your qualified Luna Credit Card will count toward the minimum spend of $400. Payments settled with gift vouchers do not count toward this spend requirement.',
      },
      {
        id: 'faq-8',
        question: 'Can I combine purchases from the main and supplementary cards to meet the minimum purchase amount of $400?',
        answer:
          'Spending cannot be combined across main and supplementary cards. The $400 minimum spend must be accumulated on an individual card.',
      },
      {
        id: 'faq-9',
        question: 'Can I be entitled for 10 Bonus Points (BP) from Friday to Sunday (inclusive of Public Holidays)?',
        answer:
          'No. The 10 Bonus Points privilege is strictly valid on purchases made every Monday to Thursday (inclusive of weekday Public Holidays).',
      },
    ],
  },
  {
    category: 'BONUS POINTS',
    items: [
      {
        id: 'faq-10',
        question: 'What are the exclusions for Double Bonus Points Promotion?',
        answer:
          'Double Bonus Points Promotion is not applicable for payment by and/or purchase of Luna gift vouchers, purchases from selected boutique tenants, specialty supermarket, dining franchises, and selected concessions as stipulated by Luna Department Store from time to time.',
      },
      {
        id: 'faq-11',
        question: 'Are all purchases made in Luna Department Store entitled to Luna Bonus Points?',
        answer:
          'Most standard retail merchandise purchases qualify. Certain services, concessions, and food outlets may carry exemptions. Please check in-store at cashier points for details.',
      },
      {
        id: 'faq-12',
        question: 'Does my Luna Bonus Points expire?',
        answer:
          'Bonus points have validity periods tied to card statement cycles and program calendar years. Unredeemed bonus points will expire according to standard program terms. Cardholders are encouraged to redeem in blocks of 100 points.',
      },
      {
        id: 'faq-13',
        question: 'How do I redeem my Luna Bonus Points and can I offset them against my purchases at the cashier counter?',
        answer:
          'Bonus Points cannot be directly offset at regular cashier counters. Instead, present your card and ID at the Customer Service Centre on Level 3 or in the digital portal to convert every 100 points into S$30 Luna Gift Vouchers.',
      },
    ],
  },
  {
    category: 'GIFT VOUCHERS',
    items: [
      {
        id: 'faq-14',
        question: 'Is there any expiry date for the Luna Gift Vouchers?',
        answer:
          'Luna Gift Vouchers redeemed via bonus points do not carry an expiration date and remain valid for future visits across the department store.',
      },
      {
        id: 'faq-15',
        question: 'Can I utilize Luna Gift Vouchers at the specialty shops in Luna Shopping Centre?',
        answer:
          'Luna Gift Vouchers can be utilized at participating Specialty Stores in Luna Shopping Centre from Basement 2 to Level 4, as well as throughout the main Luna Department Store.',
      },
    ],
  },
];
