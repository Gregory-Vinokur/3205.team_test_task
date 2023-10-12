import React, { useEffect, useState } from 'react';
import './Spinner.css';

const Spinner = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="spinner-container">
      <div className="spinner" role="progressbar">
        <div className="spinner__indicator"></div>
        <div className="count">{count}</div>
        <div className="spinner__text">Progressing...</div>
      </div>
    </div>
  );
};

export default Spinner;
