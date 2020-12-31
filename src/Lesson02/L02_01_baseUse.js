import React, { useEffect, useState } from "react";

export const L02_01_baseUse = () => {
  const [type, setType] = useState("users");

  useEffect(() => {
    console.log("render from useEffect");
  });

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
        </div>
      </div>
    </>
  );
};
