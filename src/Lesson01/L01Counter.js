import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import L01CounterBase from "./L01CounterBase";
import GitHubFile from "../common/GitHubFile";
import ReactjsOrg from "../common/ReactjsOrg";
import L01CounterAsynchronousExample from "./L01CounterAsynchronousExample";
import L01CounterCompute from "./L01CounterCompute";

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
        <span className="text_code">
          <br /> const [counter, setCounter] = useState(0);
        </span>
      </p>
      <p>
        Кнопками меняем значение счетчика на 1.
        <span className="text_code">
          <br />
          {"function increment() { setCounter(counter + 1); "}
          <br />
          {'<button onClick={increment} className="btn btn-success"> Добавить </button>'}
        </span>
      </p>
      <L01CounterBase />
      <h4>Дополнительно:</h4>
      <p>Для инициализаии состояния, useState используем в начале компоненты.</p>
      <p>
        Не используйте хуки внутри циклов, условных операторов или вложенных функций.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level" />
      </p>
      <p>Использовать useState для инициализации нового состояния в компаненте можно сколько сколько угодно раз.</p>
      <h3>
        Второй пример.
        <WatchVideoLessonFromSecond second={741} />
        <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01CounterAsynchronousExample.js" />
      </h3>
      <p>Хук useState работает асинхронно. </p>
      <L01CounterAsynchronousExample />
      <p>
        По красной кнопке счетчик не увеличивается на 2, так как испульзуется текущее состояние.
        <span className="text_code">
          <br />
          {`function incrementAsynchonous() {`}
          <br />
          {`setCounter(counter + 1);`}
          <br />
          {`setCounter(counter + 1);`}
        </span>
      </p>

      <p>
        По синей кнопке счетчик не увеличивается на 2, так как испульзуется предыдущее состояние.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#functional-updates" />
        <span className="text_code">
          <br />
          {`function increment() {`}
          <br />
          {`setCounter((previous) => previous + 1);`}
          <br />
          {`setCounter((previous) => previous + 1);`}
        </span>
      </p>

      <h3>
        Третий пример.
        <WatchVideoLessonFromSecond second={907} />
        <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01CounterCompute.js" />
      </h3>
      <p>Чтобы увидеть результаты начального рендеринга счетчиков откройте консоль браузера.</p>
      <L01CounterCompute />
      <p>
        Обратите внимание, что рендеринг первого и второго счетчика отличаются.
        <br />
        Функция расчета первоначального состояния первого счетчика выполняется при каждом изменении состояния.
        <span className="text_code">
          <br />
          {'const [counter1, setCounter1] = useState(computeInitialCounter("1"));'}
        </span>
        <br />
        Функция расчета первоначального состояния второго счетчика выполняется один раз.
        <span className="text_code">
          <br />
          {'const [counter2, setCounter2] = useState(() => computeInitialCounter("2"));'}
        </span>
        <br />
        Начальное состояние можно вычислять посредством функции, которая будет выполняться только при начальном рендеринге.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#lazy-initial-state" />
      </p>
    </>
  );
}

export default L01_counter;
