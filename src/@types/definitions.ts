export interface Coffee {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
  quantity: number;
}

export interface ItemType {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export enum PaymentMethod {
  DEBIT_CARD = 'debit-card',
  CREDIT_CARD = 'credit-card',
  CASH = 'cash',
}