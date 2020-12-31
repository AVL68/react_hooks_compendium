import React, { useState, useMemo } from "react";

function complexCompute(num) {
  console.log("complex compute ...")
  let i = 0
  while(i < 1000000000) i++

  return num * 2
}


function L04_02_useMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)
  const style = {
    color: colored ? "darkred" : "black"
  }

  const computed = useMemo(() => {return complexCompute(number)},[number])

  return (
    <>
      <div className="card bg-light mb-3 shadow" style={{ width: "25.5rem" }}>
        <div className="card-body">
          <h4 style = {style}> Вычисляемое свойство: {computed}</h4>
          <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-primary me-1">
            Добавить 2
          </button>
          <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-success me-3">
            Вычесть 2
          </button>
          <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">
            Изменить цвет
          </button>
        </div>
      </div>
    </>
  );
}

export default L04_02_useMemo;
