import { addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import styles from './styles.module.scss';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const goToPrev = () => setDate((prev) => subMonths(prev, 1));
  const goToNext = () => setDate((prev) => addMonths(prev, 1));

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topControls}>
          <button type="button" onClick={goToPrev}>
            prev
          </button>
          <button type="button" onClick={goToNext}>
            next
          </button>
        </div>
        {date.toString()}
      </div>
    </div>
  );
};

export { Calendar };
