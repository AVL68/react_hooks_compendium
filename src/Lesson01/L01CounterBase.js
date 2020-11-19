import React, { useState } from "react";

function L01CounterBase() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h4> Счетчик: {counter}</h4>
      <button onClick={increment} className="btn btn-primary">
        Добавить 1
      </button>
      <button onClick={decrement} className="btn btn-success">
        Убрать 1
      </button>
    </>
  );
}

export default L01CounterBase;
