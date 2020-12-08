import React, {useEffect, useRef, useState} from "react";

export const L03_05_focus = () => {
  const [value, setValue] = useState("initial")

  const renderCount = useRef(1);

  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current++
  });

  const focus = () => inputRef.current.focus()

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{width: "40rem"}}>
        <div className="card-body">
          <h4> Количество рендеров компоненты : {renderCount.current}</h4>
          <input ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}/>
          <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
      </div>
    </>
  );
};
