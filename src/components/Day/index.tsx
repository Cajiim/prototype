import { useState } from 'react';
import { format, isSameDay } from 'date-fns';
import classNames from 'classnames';
import Button from '@mui/material/Button';

import DescriptionWrapper from '../DescriptionWrapper';
import Modal from '../Modal';
import type { TDay } from './types';
import styles from './index.scss';

const cn = classNames.bind(styles);

const Day: TDay = ({ item, selectedDate, events, setEvents }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlButtonAdd = () => setIsOpen(true);
  const date = new Date();

  return (
    <>
      <li
        key={String(item)}
        className={cn('day', {
          day_currMonth: item.getMonth() === selectedDate.getMonth(),
          day_active: isSameDay(item, date),
        })}
        role="presentation"
      >
        <div className="day__header">
          <div className="day__currDayNumber">{format(item, 'dd')}</div>
          <Button
            className="day__addButton"
            size="small"
            onClick={handlButtonAdd}
            style={{ fontSize: '8px', position: 'relative', padding: '0', margin: '0' }}
          >
            Добавить
          </Button>
        </div>
        <DescriptionWrapper events={events} setEvents={setEvents} currDate={item} />
      </li>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setEvents={setEvents} currDay={item} />
    </>
  );
};

export default Day;
