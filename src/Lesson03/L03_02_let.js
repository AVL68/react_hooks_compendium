import React, { useState, useEffect } from "react";

let renderCount = 1

export const L03_02_let = () => {
  const [value, setValue] = useState("initial")

  useEffect(() => {
    renderCount++
  });

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "40rem" }}>
        <div className="card-body">
          <h4> Количество рендеров компоненты : {renderCount}</h4>
          <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </div>
      </div>
    </>
  );
};
