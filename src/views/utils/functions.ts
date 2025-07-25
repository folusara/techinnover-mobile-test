export const formatCurrency = (amount: number, putCurrency: boolean): string => {
  return `${putCurrency ? '₦ ' : ''}${amount.toLocaleString('en-NG')}`;
};
