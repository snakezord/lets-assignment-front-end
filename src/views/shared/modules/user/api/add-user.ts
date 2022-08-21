// import { generateRandomId } from '../../../utils/common';

import { User } from '../model';

export const addUser = async (data: Omit<User, '_id'>): Promise<void> => {
  // await localStorage.setItem(
  //   'users',
  //   JSON.stringify([ ...(await getUsers()), data ])
  // );
  try {
    const response = await fetch('http://localhost:9000/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log('res', { res });
  } catch (error) {
    console.error('error', { error });
  }
};
