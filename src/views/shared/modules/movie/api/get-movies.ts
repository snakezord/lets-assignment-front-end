import { Movie } from '../model';

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch('http://localhost:9000/movies', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = (await response.json()) as Movie[];
    return res;
  } catch (error) {
    console.error('error', { error });
    return [];
  }
};

export const MOVIES: Movie[] = [
  {
    _id: '1',
    title: 'Movie 1',
    duration: 105 * 60000, // 1 hour 45 minutes,
    startDate: new Date('2022-02-19 19:00:00'),
  },
  {
    _id: '2',
    title: 'Movie 2',
    duration: 145 * 60000,
    startDate: new Date('2022-02-19 20:00:00'),
  },
  {
    _id: '3',
    title: 'Movie 3',
    duration: 185 * 60000,
    startDate: new Date('2022-02-20 19:00:00'),
  },
  {
    _id: '4',
    title: 'Movie 4',
    duration: 90 * 60000,
    startDate: new Date('2022-02-20 20:00:00'),
  },
  {
    _id: '5',
    title: 'Movie 5',
    duration: 85 * 60000,
    startDate: new Date('2022-02-21 19:00:00'),
  },
  {
    _id: '6',
    title: 'Movie 6',
    duration: 125 * 60000,
    startDate: new Date('2022-02-21 20:00:00'),
  },
];
