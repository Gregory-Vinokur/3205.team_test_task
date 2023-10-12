import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../interfaces/IUser';

export type FormData = {
  email: string;
  number: string;
};

export type FormProps = {
  setUsers: Dispatch<SetStateAction<IUser[] | null | undefined>>;
  setCount: Dispatch<SetStateAction<number | null>>;
};