import React, { useState } from "react";
import L05_01_DynamicList_Items from "./L05_01_DynamicList_Items";

function L05_01_DynamicList() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false)
  const style = {
    color: colored ? "darkred" : "black"
  }

  const generateItemsFromAPI = () => {
    return new Array(count).fill("").map((_, key) => `Элемент ${key + 1}`)
  }

  return (
    <>
      <div className="card bg-light mb-3 shadow" style={{ width: "25.5rem" }}>
        <div className="card-body">
          <h4 style = {style}> Количество элементов: {count}</h4>
          <button onClick={() => setCount(prev => prev + 1)} className="btn btn-primary mr-1">
            Добавить элемент
          </button>
          <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">
            Изменить цвет
          </button>

          <L05_01_DynamicList_Items getItems={generateItemsFromAPI} />
        </div>
      </div>
    </>
  );
}

export default L05_01_DynamicList;
