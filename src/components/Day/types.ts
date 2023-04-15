import {FC, Dispatch, SetStateAction } from 'react';

export type TEvent = {
  id: string;
  description: string;
  startTime: string;
  endTime: string;
};

export type TEvents = {
  [date: string]: TEvent[];
};

export type TDay = FC<{
  item: Date;
  selectedDate: Date;
  events: TEvent[];
  setEvents: Dispatch<SetStateAction<TEvents>>;
}>;
