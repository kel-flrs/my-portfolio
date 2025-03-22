export const calculateTotalYearsAndMonthsOfExp = () => {
  const startDate = new Date(2022, 2); // March 2022
  const endDate = new Date(); // Current date

  // Calculate total months difference
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (endDate.getMonth() - startDate.getMonth());
  
  // Apply the 3-month gap reduction
  const adjustedTotalMonths = totalMonths - 3;
  
  // Calculate years and remaining months
  const years = Math.floor(adjustedTotalMonths / 12);
  const months = adjustedTotalMonths % 12;

  const result = { years, months };
  return result;
};