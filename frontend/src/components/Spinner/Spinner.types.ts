import { Dispatch, SetStateAction } from 'react';

export type SpinnerProps = {
  count: number | null;
  setCount: Dispatch<SetStateAction<number | null>>;
};