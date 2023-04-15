import { FC, Dispatch, SetStateAction } from 'react';

import type { TEvents } from '../Day/types';

export type TModal = FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setEvents: Dispatch<SetStateAction<TEvents>>;
  currDay: Date;
  id?: string;
  initDescription?: string;
  initStartTime?: string;
  initEndTime?: string;
}>;

export type THandleClick = {
  currDay: number | Date;
  descriptionId?: string;
  description: string;
  startDate: string;
  endDate: string;
  setEvents: Dispatch<SetStateAction<TEvents>>;
};
