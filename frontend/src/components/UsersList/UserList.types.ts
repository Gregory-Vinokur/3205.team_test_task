import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../interfaces/IUser';

export type UsersListProps = {
  users: IUser[] | null | undefined;
  count: number | null;
  error: string | null;
  setCount: Dispatch<SetStateAction<number | null>>;
};