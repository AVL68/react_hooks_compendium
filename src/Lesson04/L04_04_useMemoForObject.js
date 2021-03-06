import React, { useState, useMemo, useEffect} from "react";

function complexCompute(num) {
  let i = 0
  while(i < 100000000) i++

  return num * 2
}


function L04_04_useMemoForObject() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)

  const styleColor = useMemo(()=>({color: colored ? "darkred" : "black"}),[colored])


  useEffect(()=>{
    console.log("Changed object of styleColor.")
  },[styleColor])

  const computed = useMemo(() => {return complexCompute(number)},[number])

  return (
    <>
      <div className="card bg-light mb-3 shadow" style={{ width: "25.5rem" }}>
        <div className="card-body">
          <h4 style = {styleColor}> Вычисляемое свойство: {computed}</h4>
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

export default L04_04_useMemoForObject;
