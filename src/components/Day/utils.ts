import { parse, compareAsc } from 'date-fns';

import type { TEvent } from './types';

const sortByStartTime = (arr: TEvent[]) =>
  arr?.sort((a, b) => {
    const timeA = parse(a.startTime, 'HH:mm', new Date());
    const timeB = parse(b.startTime, 'HH:mm', new Date());
    return compareAsc(timeA, timeB);
  });

export default sortByStartTime;
