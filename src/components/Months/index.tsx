import { FC } from 'react';

import Day from '../Day';
import './index.scss';

type TMonth = {
  days: Date[];
  selectedDate: Date;
};

const Months: FC<TMonth> = ({ days, selectedDate }) => (
  <ul className="months">
    {days.map((item) => (
      <Day
        key={String(item)}
        item={item}
        selectedDate={selectedDate}
      />
    ))}
  </ul>
);

export default Months;
