import { useState, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Button from '@mui/material/Button';

import { handleClickAdd, handleEditClick } from './utils';
import type { TModal } from './types';
import styles from './index.scss';

const cn = classNames.bind(styles);

const Modal: TModal = ({
  isOpen,
  setIsOpen,
  setEvents,
  currDay,
  id,
  initDescription,
  initStartTime,
  initEndTime,
}) => {
  const [description, setDescription] = useState(initDescription || '');
  const [startDate, setStartDate] = useState(initStartTime || '');
  const [endDate, setEndDate] = useState(initEndTime || '');

  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  // eslint-disable-next-line consistent-return
  const handlClick = () => {
    if (description && startDate && endDate) {
      if (id) {
        handleEditClick({ currDay, descriptionId: id, description, startDate, endDate, setEvents });
      } else {
        handleClickAdd({ currDay, description, startDate, endDate, setEvents });
        setIsOpen(false);
        setDescription('');
        setStartDate('');
        setEndDate('');
      }
    } else return '';
  };

  return createPortal(
    <div
      className={cn('modal', {
        modal_open: isOpen,
      })}
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <form className="modal__form" onClick={(e) => e.stopPropagation()} role="presentation">
        <h3>{id ? 'Edit Event' : 'Add Event'}</h3>
        <label className="modal__description" htmlFor="description">
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="modal__descriptionInput"
          />
        </label>
        <label htmlFor="startTime">
          Start Time:
          <input
            className="modal__startTime"
            type="time"
            value={startDate}
            onChange={handleChangeStartDate}
            id="startTime"
          />
        </label>
        <label htmlFor="endTime">
          End Time:
          <input
            className="modal__endTime"
            type="time"
            value={endDate}
            onChange={handleChangeEndDate}
            id="endTime"
          />
        </label>
        <Button variant="contained" onClick={handlClick}>
          {id ? 'Edit' : 'Add'}
        </Button>
      </form>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
