export interface Coffee {
  id: number;
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
}

export enum PaymentMethod {
  DEBIT_CARD = 'debit-card',
  CREDIT_CARD = 'credit-card',
  CASH = 'cash',
}