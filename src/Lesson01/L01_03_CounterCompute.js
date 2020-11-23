import React, { useState } from "react";

function computeInitialCounter(counter) {
  console.log(`Some calculations ${counter}...`);
  return Math.trunc(Math.random() * 20);
}

function L01CounterCompute() {
  const [counter1, setCounter1] = useState(computeInitialCounter("1"));
  const [counter2, setCounter2] = useState(() => computeInitialCounter("2"));

  function increment() {
    setCounter1(counter1 + 1);
    setCounter2(counter2 + 1);
  }

  function decrement() {
    setCounter1(counter1 - 1);
    setCounter2(counter2 - 1);
  }

  return (
    <>
      <div className="card bg-light mb-3 shadow" style={{ width: "15.3rem" }}>
        <div className="card-body">
          <h4> Счетчик 1: {counter1}</h4>
          <h4> Счетчик 2: {counter2}</h4>
          <button onClick={increment} className="btn btn-primary mr-1">
            Добавить 1
          </button>
          <button onClick={decrement} className="btn btn-success">
            Убрать 1
          </button>
        </div>
      </div>
    </>
  );
}

export default L01CounterCompute;
