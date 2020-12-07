import React, { useEffect, useState } from "react";

export const L03_01_useEffect = () => {
  const [renderCount, setRenderCount] = useState(1);

  useEffect(() => {
    setRenderCount(prev => prev+1)
  });

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "20rem" }}>
        <div className="card-body">
          <h4> Количество рендеров компоненты : {renderCount}</h4>
        </div>
      </div>
    </>
  );
};
