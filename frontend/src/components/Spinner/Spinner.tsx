import { useEffect } from 'react';
import './Spinner.styles.scss';
import { SpinnerProps } from './Spinner.types';

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
    <div className="spinner" role="progressbar">
      <div className="spinner__container">
        <div className="spinner__indicator"></div>
        <div className="spinner__count">{count}</div>
        <div className="spinner__text">Loading...</div>
      </div>
    </div>
  );
};

export { Spinner };
