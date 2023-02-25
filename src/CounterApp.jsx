import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value, subTitle }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReduce = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={handleReduce}>-1</button>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <p>{subTitle}</p>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
  subTitle: PropTypes.string,
};

CounterApp.defaultProps = {
  subTitle: "soy un sub",
};

export default CounterApp;
