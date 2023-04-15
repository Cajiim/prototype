import { FC, Dispatch, SetStateAction, useState } from 'react';
import Button from '@mui/material/Button';
import { format } from 'date-fns';

import Modal from '../Modal';
import type { TEvent, TEvents } from '../Day/types';
import './index.scss';

type TEditDescription = { currDate: Date; setEvents: Dispatch<SetStateAction<TEvents>> };
type TDescription = FC<TEvent & TEditDescription>;

const Description: TDescription = ({
  description,
  startTime,
  endTime,
  currDate,
  setEvents,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDelete = (day: number | Date, descriptionId: string): void => {
    const formattedDate = format(day, 'yyyy-MM-dd');
    setEvents((prevEvents) => {
      const eventsOnCurrentDay = prevEvents[formattedDate] || [];
      const updatedEventsOnCurrentDay = eventsOnCurrentDay.filter((el) => el.id !== descriptionId);
      const updatedEvents = {
        ...prevEvents,
        [formattedDate]: updatedEventsOnCurrentDay,
      };
      return updatedEvents;
    });
  };

  return (
    <>
      <li className="description">
        <div className="description__text" onClick={() => setIsOpen(true)} role="presentation">
          <span className="description__item">{description || ''}</span>
          <span className="description__item">{startTime && `Начало: ${startTime}`}</span>
          <span className="description__item">{endTime && `Конец: ${endTime}`}</span>
        </div>
        <Button
          className="description__delete"
          color="error"
          onClick={() => handleClickDelete(currDate, id)}
          style={{
            fontSize: '12px',
            width: '20px',
            minWidth: '20px',
          }}
        >
          X
        </Button>
      </li>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setEvents={setEvents}
        currDay={currDate}
        id={id}
        initDescription={description}
        initStartTime={startTime}
        initEndTime={endTime}
      />
    </>
  );
};

export default Description;
