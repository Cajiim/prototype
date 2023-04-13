import { FC, useState } from 'react';
import { format, isSameDay } from 'date-fns';
import classNames from 'classnames';
import Button from '@mui/material/Button';

import Modal from '../Modal';
import styles from './index.scss';

const cn = classNames.bind(styles);

export type TEvent = {
  description: string;
  startTime: string;
  endTime: string;
};

export type TEvents = {
  [date: string]: TEvent;
};

type TDay = {
  item: Date;
  selectedDate: Date;
};

const Day: FC<TDay> = ({ item, selectedDate }) => {
  const localData = JSON.parse(localStorage.data);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [events, setEvents] = useState<TEvents>(localData || {});
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
        <div className="">{format(item, 'dd')}</div>
        <div className="day__events">
          <span className="day__description">
            {events[format(item, 'yyyy-MM-dd')]?.description || ''}
          </span>
          <span className="day__startTime">
            {events[format(item, 'yyyy-MM-dd')] &&
              `Начало: ${events[format(item, 'yyyy-MM-dd')].startTime}`}
          </span>
          <span className="day__endTime">
            {events[format(item, 'yyyy-MM-dd')] &&
              `Конец: ${events[format(item, 'yyyy-MM-dd')].endTime}`}
          </span>
        </div>
        <Button
          className="day__addButton"
          size="small"
          onClick={handlButtonAdd}
          style={{ fontSize: '8px', position: 'absolute' }}
        >
          {events[format(item, 'yyyy-MM-dd')] ? 'Изменить' : 'Добавить'}
        </Button>
      </li>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setEvents={setEvents}
        currDay={item}
        events={events}
      />
    </>
  );
};

export default Day;
