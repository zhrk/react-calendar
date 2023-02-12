import { randAnimal } from '@ngneat/falso';
import { nanoid } from 'nanoid';

export const mockedEvents = [
  {
    id: nanoid(),
    title: randAnimal(),
    from: new Date('2023-02-01T21:00:00.000Z'),
    to: new Date('2023-02-01T21:00:00.000Z'),
  },
  {
    id: nanoid(),
    title: randAnimal(),
    from: new Date('2023-02-04T21:00:00.000Z'),
    to: new Date('2023-02-07T21:00:00.000Z'),
  },
  {
    id: nanoid(),
    title: randAnimal(),
    from: new Date('2023-02-10T21:00:00.000Z'),
    to: new Date('2023-02-12T21:00:00.000Z'),
  },
];
