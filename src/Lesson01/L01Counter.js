import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import L01CounterBase from "./L01CounterBase";
import GitHubFile from "../common/GitHubFile";

function L01_counter() {
  return (
    <>
      <h3>
        Первый пример.
        <WatchVideoLessonFromSecond second={294} />
        <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01CounterBase.js" />
      </h3>
      <p>
        Значение счетчика добавляем в состояние компоненты.
        <br /> const [counter, setCounter] = useState(0);
      </p>
      <p>
        Кнопками меняем значение счетчика на 1.
        <br />
        {"function increment() { setCounter(counter + 1); "}
        <br />
        {'<button onClick={increment} className="btn btn-success"> Добавить </button>'}
      </p>
      <L01CounterBase />
      <h4>Дополнительно:</h4>
      <p>Для инициализаии состояния, useState используем в начале компоненты.</p>
      <p>Не используйте хуки внутри циклов, условных операторов или вложенных функций. </p>
      <p>Использовать useState для инициализации нового состояния в компаненте можно сколько сколько угодно раз.</p>
    </>
  );
}

export default L01_counter;
