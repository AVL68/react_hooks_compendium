import React, { useEffect, useState } from "react";

export const L02_03_FetchPlaceholder = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{ width: "90%", maxHeight: "500px", overflow: "auto" }}>
        <div className="card-body">
          <h4> Ресурс: {type}</h4>
          <button onClick={() => setType("users")} className="btn btn-outline-info mr-1">
            Пользователи
          </button>
          <button onClick={() => setType("todos")} className="btn btn-outline-info mr-1">
            Todo
          </button>
          <button onClick={() => setType("posts")} className="btn btn-outline-info">
            Посты
          </button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};
