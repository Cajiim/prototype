import { FC, Dispatch, SetStateAction } from 'react';

import type { TEvent, TEvents } from '../Day/types';

export type TDescriptionWrapper = FC<{
  events: TEvent[];
  currDate: Date;
  setEvents: Dispatch<SetStateAction<TEvents>>;
}>;
