import React, { useState } from "react";

function L01StateObject() {
  const [state, setstate] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function updateTitle() {
    setstate((prev) => {
      return { ...prev, title: "Новый заголовок по синей кнопке" };
    });
  }

  function resetObject() {
    setstate({
      title: "Счетчик",
      date: Date.now(),
    });
  }

  return (
    <>
      <div className="card bg-light mb-3" style={{ width: "27rem" }}>
        <div className="card-body">
          <button onClick={() => setstate({ title: "Новый заголовок по красной кнопке" })} className="btn btn-danger">
            Изменить title
          </button>
          <button onClick={updateTitle} className="btn btn-primary">
            Изменить title
          </button>
          <button onClick={resetObject} className="btn btn-success">
            Восстановить
          </button>
          <br />
          <div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default L01StateObject;
