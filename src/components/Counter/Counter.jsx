import React from "react";

const Counter = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>MINUS</button>
      <button onClick={increment}>PLUS</button>
    </div>
  );
};

export default Counter;
