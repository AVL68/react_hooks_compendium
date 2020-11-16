import React, { useState } from "react";

function L01_counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h3>
        Первый пример.
        <a href="https://youtu.be/9KJxaFHotqI?t=287" target="_blank" rel="noopener noreferrer">
          <svg width="1em" height="0.65em" viewBox="0 0 16 16" class="bi bi-file-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
            <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
          </svg>
        </a>
      </h3>
      <h4> Счетчик: {counter}</h4>
      <p>Знаечние счетчика добавляем в состояние компоненты.</p>
      <p>Кнопками меняем значение счетчика на 1.</p>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <h4>Дополнительно:</h4>
      <p>Для инициализаии состояния, useState используем в начале компоненты.</p>
      <p>Нельзя использовать useState в логических операторах. </p>
      <p>Использовать useState для инициализации нового состояния в компаненте можно сколько сколько угодно раз.</p>
    </>
  );
}

export default L01_counter;
