import React, {useEffect, useRef, useState} from "react";

export const L03_06_prevState = () => {
  const [value, setValue] = useState("initial")

  const renderCount = useRef(1);

  const inputRef = useRef(null)

  const prevValue = useRef("")

  useEffect(() => {
    renderCount.current++
  });

  useEffect(() => prevValue.current = value,[value])

  const focus = () => inputRef.current.focus()

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{width: "40rem"}}>
        <div className="card-body">
          <h4> Количество рендеров компоненты : {renderCount.current}</h4>
          <h4>Прошлое состояние: {prevValue.current}</h4>
          <input ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}/>
          <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
      </div>
    </>
  );
};
