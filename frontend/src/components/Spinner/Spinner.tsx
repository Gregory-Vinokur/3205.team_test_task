import { Dispatch, SetStateAction, useEffect } from 'react';
import './Spinner.css';

type SpinnerProps = {
  count: number | null;
  setCount: Dispatch<SetStateAction<number | null>>;
};

const Spinner = ({ count, setCount }: SpinnerProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (count && count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count, setCount]);

  return (
    <div className="spinner-container">
      <div className="spinner" role="progressbar">
        <div className="spinner__indicator"></div>
        <div className="count">{count}</div>
        <div className="spinner__text">Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
