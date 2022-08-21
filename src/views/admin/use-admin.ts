import { useState, useEffect } from 'react';

import { User } from '../shared/modules/user/model';
import { getUsers } from '../shared/modules/user/api/get-users';

export interface HookData {
  users: User[];
  loading: boolean;
}

const useAdmin = (): HookData => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  // FILL IN THE GAPS
  // Load users ...

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  }, []);

  return {
    users,
    loading,
  };
};

export default useAdmin;
