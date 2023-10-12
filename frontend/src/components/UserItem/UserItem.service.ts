export const formatNumber = (number: string) => {
  const part1 = number.slice(0, 2);
  const part2 = number.slice(2, 4);
  const part3 = number.slice(4, 6);

  return `${part1}-${part2}-${part3}`;
};