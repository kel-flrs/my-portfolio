export const calculateTotalYearsAndMonthsOfExp = () => {
  const startDate = new Date(2022, 2); // March 2022
  const endDate = new Date(); // Current date

  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = (totalMonths % 12) - 4;

  const result = { years, months };

  return result;
};
