import React, { useState } from "react";

function L01CounterAsynchronousExample() {
  const [counter, setCounter] = useState(0);

  function incrementAsynchonous() {
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  function increment() {
    setCounter((previous) => previous + 1);
    setCounter((previous) => previous + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h4> Счетчик: {counter}</h4>
      <button onClick={incrementAsynchonous} className="btn btn-danger">
        Добавить 2
      </button>
      <button onClick={increment} className="btn btn-primary">
        Добавить 2
      </button>
      <button onClick={decrement} className="btn btn-success">
        Убрать 1
      </button>
    </>
  );
}

export default L01CounterAsynchronousExample;
