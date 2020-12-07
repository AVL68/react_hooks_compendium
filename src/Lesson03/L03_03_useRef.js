import React, {useEffect, useRef, useState} from "react";

export const L03_03_useRef = () => {
  const [value, setValue] = useState("initial")

  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++
  });

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "40rem" }}>
        <div className="card-body">
          <h4> Количество рендеров компоненты : {renderCount.current}</h4>
          <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </div>
      </div>
    </>
  );
};
