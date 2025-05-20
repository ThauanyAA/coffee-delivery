import { PaymentMethod } from "../@types/definitions";

export const formatPriceToBRL = (value: number) => {
  const parts = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).formatToParts(value);

  return parts
    .filter(part => part.type !== 'currency') // Remove symbol R$
    .map(part => part.value)
    .join('');
};

export function formatPaymentMethod(method: PaymentMethod) {
  switch(method) {
    case 'cash':
      return 'Dinheiro';
    case 'debit-card':
      return 'Cartão de Débito';
    case 'credit-card':
      return 'Cartão de Crédito';
    default:
      return ''
  }
}