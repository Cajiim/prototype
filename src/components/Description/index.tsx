import { FC } from 'react';

const Description: FC = () => (
  <li className="day__events">
    <span className="day__description">{events?.description || ''}</span>
    <span className="day__startTime">{events && `Начало: ${events!.startTime}`}</span>
    <span className="day__endTime">{events && `Конец: ${events!.endTime}`}</span>
  </li>
);

export default Description;
