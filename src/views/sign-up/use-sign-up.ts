import { useState, useEffect, useMemo, BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../shared/modules/user/model';
import { Movie } from '../shared/modules/movie/model';
import { addUser } from '../shared/modules/user/api/add-user';
import { getMovies, MOVIES } from '../shared/modules/movie/api/get-movies';
import { range } from '../shared/utils/common';

export interface HookData {
  data: Omit<User, '_id'>;
  movies: Movie[];
  sitRows: number[];
  sitPlaces: number[];
  loading: boolean;
  handleChangeData: (e: BaseSyntheticEvent) => void;
  handleChangeAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleClearAvatar: () => void;
}

const useSignUp = (): HookData => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Omit<User, '_id'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    avatarBase64: '',
    movie: undefined,
    sitRow: undefined,
    sitPlace: undefined,
  });

  const [movies, setMovies] = useState<Movie[]>([]);

  const sitRows = useMemo(() => {
    return range(1, 15);
  }, []);

  const sitPlaces = useMemo(() => {
    return range(1, 45);
  }, []);

  // FILL IN THE GAPS
  // Handlers go here
  // ...

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (e.target.files) {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          const res = reader.result;
          if (res && typeof res === 'string') {
            setData(
              (prev) =>
                ({
                  ...prev,
                  avatarBase64: res,
                } as User)
            );
          }
        },
        false
      );

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleClearAvatar = () =>
    setData((prev) => {
      return {
        ...prev,
        avatarBase64: '',
      } as User;
    });

  const handleChangeData = (e: BaseSyntheticEvent) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'avatarBase64') {
      value = e.target.files[0];
    }

    if (name === 'movie') {
      value = movies.find((movie) => movie._id === value);
    }

    setData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        } as User)
    );
  };

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (data && data.firstName && data.lastName && data.email && data.phone && data.avatarBase64) {
      setLoading(true);
      try {
        await addUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        navigate('/success');
      }
    }
  };

  return {
    data,
    movies: movies.length > 0 ? movies : MOVIES,
    sitRows,
    sitPlaces,
    loading,
    handleChangeData,
    handleChangeAvatar,
    handleSubmit,
    handleClearAvatar,
  };
};

export default useSignUp;
