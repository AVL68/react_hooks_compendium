import React, { useState } from "react";
import ReactjsOrg from "../common/ReactjsOrg";
import CodeHowText from "../common/СodeHowText";
import { HeaderForExampl } from "../common/HeaderForExampl";
import L01_01_CounterBase from "./L01_01_CounterBase";
import L01_02_CounterAsynchronousExample from "./L01_02_CounterAsynchronousExample";
import L01_03_CounterCompute from "./L01_03_CounterCompute";
import L01_04_StateObject from "./L01_04_StateObject";

export const L01_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);
  const [seeExampl04, setSeeExampl04] = useState(false);

  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Базовое применение."
        WVLFSecond={294}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01_01_CounterBase.js"
      />
      {seeExampl01 ? (
        <>
          <p>
            Значение счетчика добавляем в состояние компоненты.
            <CodeHowText codeText={[`const [counter, setCounter] = useState(0);`]} />
          </p>
          <p>
            Кнопками меняем значение счетчика на 1.
            <CodeHowText codeText={[`function increment() { setCounter(counter + 1);`, `<button onClick={increment} className="btn btn-success"> Добавить </button>`]} />
          </p>
          <L01_01_CounterBase />
        </>
      ) : null}

      <h4>Дополнительно:</h4>
      <p>Для инициализаии состояния, useState используем в начале компоненты.</p>
      <p>
        Не используйте хуки внутри циклов, условных операторов или вложенных функций.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level" />
      </p>
      <p>Использовать useState для инициализации нового состояния в компоненте можно сколько сколько угодно раз.</p>

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Хук useState работает асинхронно."
        WVLFSecond={741}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01_02_CounterAsynchronousExample.js"
      />

      {seeExampl02 ? (
        <>
          <L01_02_CounterAsynchronousExample />
          <p>
            По красной кнопке счетчик не увеличивается на 2, так как используется текущее состояние.
            <CodeHowText codeText={[`function incrementAsynchonous() {`, `setCounter(counter + 1);`, `setCounter(counter + 1);`]} />
          </p>
          <p>
            По синей кнопке счетчик увеличивается на 2, так как используется предыдущее состояние.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#functional-updates" />
            <CodeHowText codeText={[`function increment() {`, `setCounter((previous) => previous + 1);`, `setCounter((previous) => previous + 1);`]} />
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl03}
        setSeeExampl={setSeeExampl03}
        label="Третий пример."
        WVLFSecond={907}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01_03_CounterCompute.js"
      />

      {seeExampl03 ? (
        <>
          <p>Чтобы увидеть результаты начального рендеринга счетчиков откройте консоль браузера.</p>
          <L01_03_CounterCompute />
          <p>
            Обратите внимание, что рендеринг первого и второго счетчика отличаются.
            <br />
            Функция расчета первоначального состояния первого счетчика выполняется при каждом изменении состояния.
            <CodeHowText codeText={['const [counter1, setCounter1] = useState(computeInitialCounter("1"));']} />
            Функция расчета первоначального состояния второго счетчика выполняется один раз.
            <CodeHowText codeText={['const [counter2, setCounter2] = useState(() => computeInitialCounter("2"));']} />
            Начальное состояние можно вычислять посредством функции, которая будет выполняться только при начальном рендеринге.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#lazy-initial-state" />
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl04}
        setSeeExampl={setSeeExampl04}
        label="Четвертый пример. "
        labelAdd="Стейт описан в формате объекта."
        WVLFSecond={1083}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01_04_StateObject.js"
      />

      {seeExampl04 ? (
        <>
          <p>
            <CodeHowText codeText={[`const [state, Setstate] = useState({`, `title: "Счетчик",`, `date: Date.now(), });`]} />
          </p>

          <L01_04_StateObject />
          <p>Хук useState не объединяет объекты обновления автоматически.</p>
          <p>
            По красной кнопке объект полностью заменился на новый.
            <CodeHowText codeText={[`setstate({ title: "Новый заголовок по красной кнопке" })`]} />
          </p>
          <p>
            По синей кнопке изменился только title.
            <CodeHowText codeText={[`setstate((prev) => { return { ...prev, title: "Новый заголовок по синей кнопке" } });`]} />
          </p>
        </>
      ) : null}
    </>
  );
};
