import React, { useEffect, useState } from "react";

export const L02_02_secondArgument = () => {
  const [type, setType] = useState("users");
  const [color, setColor] = useState("primary");

  useEffect(() => {
    console.log("render from useEffect", ", type: ", type, ", color: ", color);
  });

  useEffect(() => {
    console.log("render from useEffect with type: ", type);
  }, [type]);

  useEffect(() => {
    console.log("render from useEffect with color: ", color);
  }, [color]);

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "20rem" }}>
        <div className="card-body">
          <h4> Ресурс: {type}</h4>
          <button onClick={() => setType("users")} className="btn btn-outline-info me-1">
            Пользователи
          </button>
          <button onClick={() => setType("todo")} className="btn btn-outline-info me-1">
            Todo
          </button>
          <button onClick={() => setType("posts")} className="btn btn-outline-info">
            Посты
          </button>

          <h4>
            Цвет: <span className={"text-" + color}>{color}</span>
          </h4>
          <button onClick={() => setColor("primary")} className="btn btn-primary me-1">
            Синий
          </button>
          <button onClick={() => setColor("success")} className="btn btn-success me-1">
            Зеленый
          </button>
          <button onClick={() => setColor("danger")} className="btn btn-danger me-1">
            Красный
          </button>
        </div>
      </div>
    </>
  );
};
