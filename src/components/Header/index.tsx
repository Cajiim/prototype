import { FC, Dispatch, SetStateAction } from 'react';
import { format, subMonths, add } from 'date-fns';
import Button from '@mui/material/Button';
import './index.scss';

type THeader = FC<{
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}>;

const Header: THeader = ({ selectedDate, setSelectedDate }) => (
  <div className="header">
    <Button color="info" onClick={() => setSelectedDate(subMonths(selectedDate, 1))}>
      {'<'}
    </Button>
    <span className="header__monthName">{format(selectedDate, 'MMMM yyyy')}</span>
    <Button color="info" onClick={() => setSelectedDate(add(selectedDate, { months: 1 }))}>
      {'>'}
    </Button>
  </div>
);

export default Header;
