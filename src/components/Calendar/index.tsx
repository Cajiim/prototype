import { FC, useState } from 'react';
import { startOfMonth, startOfWeek, addDays } from 'date-fns';

import Months from '../Months';
import Weeks from '../Weeks';
import Header from '../Header';
import './index.scss';

const Calendar: FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const monthStart = startOfMonth(selectedDate);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 1 });

  const days = [];
  let day = weekStart;
  for (let i = 0; i < 42; i += 1) {
    days.push(day);
    day = addDays(day, 1);
  }

  const modifiedData = (arr: Date[]) => {
    const slicedArr = arr.slice(35);
    const isIncludeLastWeek = slicedArr.some((el) => el.getMonth() === selectedDate.getMonth());

    return isIncludeLastWeek ? arr : arr.slice(0, 35);
  };

  return (
    <div className="calendar">
      <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Weeks />
      <Months days={modifiedData(days)} selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;