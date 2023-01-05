import clsx from 'clsx';
import { addMonths, format, isSameDay, isSameMonth, subMonths } from 'date-fns';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getDays } from './helpers';
import styles from './styles.module.scss';

type Event = {
  id: string;
  date: Date;
};

type Events = Event[];

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Events>([]);

  const goToNow = () => setDate(new Date());
  const goToPrev = () => setDate((prev) => subMonths(prev, 1));
  const goToNext = () => setDate((prev) => addMonths(prev, 1));

  const days = getDays(date);

  const createEvent = (event: Event) => setEvents((prev) => [...prev, event]);

  // getDays проревьювить
  // переключение месяцев колёсиком мыши

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
        {days.map((day) => {
          const currentEvents = events.filter((event) => isSameDay(day, event.date));

          const handleCreate = () => createEvent({ id: nanoid(), date: day });

          return (
            <div
              key={day.toString()}
              tabIndex={0}
              role="button"
              onClick={handleCreate}
              onKeyDown={(event) => {
                if (event.code === 'Space') {
                  handleCreate();
                }
              }}
              className={clsx(styles.day, !isSameMonth(day, date) && styles.notAvailable)}
            >
              {format(day, 'dd')}
              {currentEvents.map((event, index) => (
                <div key={event.id}>{`Event - ${index + 1}`}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Calendar };
