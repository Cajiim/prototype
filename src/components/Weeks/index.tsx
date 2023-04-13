import { FC } from 'react';
import './index.scss';

const Weeks: FC = () => (
  <ul className="weeks">
    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((item) => (
      <li className="weeks__day" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default Weeks;
