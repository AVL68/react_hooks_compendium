import React, { useState } from "react";

function L01CounterBase() {
  const [counter, setCounter] = useState(0);

  // if (true) {
  //   const [counter, setCounter] = useState(0);
  // }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h4> Счетчик: {counter}</h4>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
    </>
  );
}

export default L01CounterBase;
