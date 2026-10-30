export interface CardItem {
  id: string;
  name: string;
  subtitle: string;
  cardType: 'card-a' | 'card-b' | 'debit' | 'cash-loyalty';
  cardDesign: {
    gradient: string;
    textColor: string;
    chipColor: string;
    networkLogo: string;
    tierLabel: string;
    cardSampleNumber: string;
    cardholderName?: string;
    accentColor?: string;
  };
  eligibility: string;
  minIncome?: string;
  annualFee: string;
  deptStoreSpend: {
    rate: string;
    points: string;
    highlight: boolean;
  };
  weekdayPrivilege: string | null;
  cardPromotionPeriod: string | null;
  specialtyStoresSpend: string | null;
  redemption: string;
  partnerUrl: string;
  features: string[];
  welcomeOffer: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string | string[];
  subpoints?: string[];
  note?: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface MemberProfile {
  name: string;
  cardNumber: string;
  cardType: string;
  bonusPoints: number;
  availableVouchersValue: number;
  transactions: {
    id: string;
    date: string;
    store: string;
    amount: number;
    pointsEarned: number;
  }[];
}
