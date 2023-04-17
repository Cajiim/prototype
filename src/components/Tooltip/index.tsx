import { FC, ReactNode, useState } from 'react';

import './index.scss';

type TTooltip = FC<{
  description: string;
  startTime: string;
  endTime: string;
  children: ReactNode;
}>;

const Tooltip: TTooltip = ({ description, startTime, endTime, children }) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <div className="tooltip" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && (
        <div className='tooltip__items'>
          <span className="tooltip__item">{description}</span>
          <span className="tooltip__item">{`${startTime}-${endTime}`}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
