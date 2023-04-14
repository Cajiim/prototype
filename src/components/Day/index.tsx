import { FC, useState, Dispatch, SetStateAction } from 'react';
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
  [date: string]: TEvent[];
};

type TDay = {
  item: Date;
  selectedDate: Date;
  events: TEvent[];
  setEvents: Dispatch<SetStateAction<TEvents>>;
};

const Day: FC<TDay> = ({ item, selectedDate, events, setEvents }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handlButtonAdd = () => setIsOpen(true);
  const date = new Date();

  /* const formatedCurrDay = format(item, 'yyyy-MM-dd'); */

  /* const handlButtonDelete = () => {
    setEvents(
      (prevEvents): TEvents => ({
        ...prevEvents,
        [formatedCurrDay]: null,
      })
    );
  }; */
  /* console.log(events, 'events'); */
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
          <span className="day__description">{events?.description || ''}</span>
          <span className="day__startTime">{events && `Начало: ${events!.startTime}`}</span>
          <span className="day__endTime">{events && `Конец: ${events!.endTime}`}</span>
        </div>
        {events && (
          <Button
            className="day__deleteButton"
            size="small"
            color="error"
            /* onClick={() => handlButtonDelete()} */
            style={{ fontSize: '8px', position: 'absolute', padding: '0' }}
          >
            Удалить
          </Button>
        )}
        <Button
          className="day__addButton"
          size="small"
          onClick={handlButtonAdd}
          style={{ fontSize: '8px', position: 'absolute', padding: '0' }}
        >
          {events ? 'Изменить' : 'Добавить'}
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
