export function percentToDecimal(num) {
  if (!num || num > 100 || num <= 0) return 'Invalid number';
  if (num > 0 && num <= 100) return num / 100;
}
