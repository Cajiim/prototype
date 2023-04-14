import { FC, useState, useEffect } from 'react';
import { format } from 'date-fns';

import Day from '../Day';
import './index.scss';

type TMonth = {
  days: Date[];
  selectedDate: Date;
};

type TEvent = {
  description: string;
  startTime: string;
  endTime: string;
};

type TEvents = {
  [date: string]: TEvent[];
};

const Months: FC<TMonth> = ({ days, selectedDate }) => {
  const localData = localStorage.data ? JSON.parse(localStorage.data) : {};
  const [events, setEvents] = useState<TEvents>(localData || {});
  
  useEffect(() => localStorage.setItem('data', JSON.stringify(events)), [events]);

  return (
  <ul className="months">
    {days.map((item) => (
      <Day
        key={String(item)}
        item={item}
        selectedDate={selectedDate}
        events={events[format(item, 'yyyy-MM-dd')]}
        setEvents={setEvents}
      />
    ))}
  </ul>
)};

export default Months;
