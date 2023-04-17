import Description from '../Description';
import type { TDescriptionWrapper } from './types';
import './index.scss';

const DescriptionWrapper: TDescriptionWrapper = ({ events, currDate, setEvents }) => (
  <ul className="descriptionWrapper">
    {events &&
      events.map(({ description, startTime, endTime, id }, index) => (
        <Description
          key={id || index}
          description={description}
          startTime={startTime}
          endTime={endTime}
          id={id}
          currDate={currDate}
          setEvents={setEvents}
        />
      ))}
  </ul>
);

export default DescriptionWrapper;
