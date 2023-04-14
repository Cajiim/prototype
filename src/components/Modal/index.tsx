import { FC, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { format } from 'date-fns';
import classNames from 'classnames';
import Button from '@mui/material/Button';

import type { TEvent /* TEvents */ } from '../Day';
import styles from './index.scss';

const cn = classNames.bind(styles);

type TEvents = {
  [date: string]: TEvent[];
};

type TModal = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  events: TEvent[];
  setEvents: Dispatch<SetStateAction<TEvents>>;
  currDay: Date;
};

const Modal: FC<TModal> = ({ isOpen, setIsOpen, setEvents, currDay /* events */ }) => {
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleClick = (day: number | Date): void => {
    const formattedDate = format(day, 'yyyy-MM-dd');
    const objEvent: TEvent = {
      description: `${description}`,
      startTime: `${startDate}`,
      endTime: `${endDate}`,
    };

    setEvents((prevEvents: TEvents): TEvents => {
      console.log(prevEvents, 'prevEvents');
      const eventsOnCurrentDay: TEvent[] = prevEvents[formattedDate] || [];
      const updatedEventsOnCurrentDay: TEvent[] = [...eventsOnCurrentDay, objEvent];
      const updatedEvents: TEvents = {
        ...prevEvents,
        [formattedDate]: updatedEventsOnCurrentDay,
      };
      return updatedEvents;
    });

    /* setEvents((prevEvents) => ({
      ...prevEvents,
      [formattedDate]: obj,
    })); */
  };

  return createPortal(
    <div
      className={cn('modal', {
        modal_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <form className="modal__form" onClick={(e) => e.stopPropagation()} role="presentation">
        <h3>Add Event</h3>
        <label className="modal__description" htmlFor="description">
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="modal__descriptionInput"
          />
        </label>
        <label htmlFor="startTime">
          Start Time:
          <input
            className="modal__startTime"
            type="time"
            value={startDate}
            onChange={handleChangeStartDate}
            id="startTime"
          />
        </label>
        <label htmlFor="endTime">
          End Time:
          <input
            className="modal__endTime"
            type="time"
            value={endDate}
            onChange={handleChangeEndDate}
            id="endTime"
          />
        </label>
        <Button
          variant="contained"
          onClick={() => {
            handleClick(currDay);
            setIsOpen(false);
          }}
        >
          Add
        </Button>
      </form>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
