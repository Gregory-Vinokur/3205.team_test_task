import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../interfaces/IUser';
import { UseFormReset } from 'react-hook-form';

export type FormData = {
  email: string;
  number: string;
};

export type FormProps = {
  setUsers: Dispatch<SetStateAction<IUser[] | null | undefined>>;
  setCount: Dispatch<SetStateAction<number | null>>;
  setError: Dispatch<SetStateAction<string | null>>;
};

export type fetchUsersProps = {
  data: FormData;
  setUsers: Dispatch<SetStateAction<IUser[] | null | undefined>>;
  reset: UseFormReset<FormData>;
  setError: Dispatch<SetStateAction<string | null>>;
  previousController: React.MutableRefObject<AbortController | null>;
};