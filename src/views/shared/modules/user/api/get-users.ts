import { User } from '../model';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('http://localhost:9000/users', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = (await response.json()) as User[];
    console.log('res', { res });
    return res;
  } catch (error) {
    console.error('error', { error });
    return [];
  }
};
