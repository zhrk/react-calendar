import clsx from 'clsx';
import { addMonths, format, isSameMonth, subMonths } from 'date-fns';
import { useState } from 'react';
import { getDays } from './helpers';
import styles from './styles.module.scss';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const goToNow = () => setDate(new Date());
  const goToPrev = () => setDate((prev) => subMonths(prev, 1));
  const goToNext = () => setDate((prev) => addMonths(prev, 1));

  const days = getDays(date);

  // getDays проревьювить

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
          <button disabled={isSameMonth(new Date(), date)} type="button" onClick={goToNow}>
            now
          </button>
        </div>
        {format(date, 'dd.MM.yyyy')}
      </div>
      <div className={styles.days}>
        {days.map((day) => (
          <div
            key={day.toString()}
            className={clsx(styles.day, !isSameMonth(day, date) && styles.notAvailable)}
          >
            {format(day, 'dd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Calendar };
