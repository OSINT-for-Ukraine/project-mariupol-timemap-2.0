export const currentDate = new Date();

export const getIsoDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const calculateDateFromMonthsAgo = (monthsAgo: number) => {
  const oneMonthAgoDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - monthsAgo,
    currentDate.getDate()
  );
  return getIsoDate(oneMonthAgoDate);
};
