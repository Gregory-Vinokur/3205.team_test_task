export const formatNumber = (number: string) => {
  const formattedNumber = number.replace(/(\d{2})(\d{2})(\d{2})/g, '$1-$2-$3');

  return formattedNumber;
};
