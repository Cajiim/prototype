import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import type { THandleClick } from './types';

export const handleClickAdd = ({
  currDay,
  description,
  startDate,
  endDate,
  setEvents,
}: THandleClick): void => {
  const formattedDate = format(currDay, 'yyyy-MM-dd');
  const objEvent = {
    id: uuidv4(),
    description,
    startTime: startDate,
    endTime: endDate,
  };

  setEvents((prevEvents) => {
    const eventsOnCurrentDay = prevEvents[formattedDate] || [];
    const updatedEventsOnCurrentDay = [...eventsOnCurrentDay, objEvent];
    const updatedEvents = {
      ...prevEvents,
      [formattedDate]: updatedEventsOnCurrentDay,
    };

    return updatedEvents;
  });
};

export const handleEditClick = ({
  currDay,
  descriptionId,
  description,
  startDate,
  endDate,
  setEvents,
}: THandleClick): void => {
  const formattedDate = format(currDay, 'yyyy-MM-dd');
  const objEvent = {
    id: uuidv4(),
    description,
    startTime: startDate,
    endTime: endDate,
  };
  setEvents((prevEvents) => {
    const eventsOnCurrentDay = prevEvents[formattedDate] || [];
    const updatedEventsOnCurrentDay = eventsOnCurrentDay.map((el) => {
      if (el.id === descriptionId) {
        return { ...el, ...objEvent };
      }

      return el;
    });
    const updatedEvents = {
      ...prevEvents,
      [formattedDate]: updatedEventsOnCurrentDay,
    };

    return updatedEvents;
  });
};
