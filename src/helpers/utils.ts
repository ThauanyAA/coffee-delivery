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