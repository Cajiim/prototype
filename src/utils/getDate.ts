const staticMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const parseDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const result = `${month}.${day}.${year}`;

  return result;
};

const getAllDates = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const days = dates.map((el) => el.getDate());
  const monthName = staticMonth[month];
  const dedicatedDay = new Date().getMonth() === month ? new Date().getDate() : '';

  const parseDates = dates.map((el) => parseDate(el));
  return { parseDates, days, monthName, dedicatedDay };
};

export default getAllDates;
