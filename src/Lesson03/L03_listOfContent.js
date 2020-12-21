import React, {useState} from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import {L03_01_useEffect} from "./L03_01_useEffect";
import {L03_02_let} from "./L03_02_let";
import {L03_03_useRef} from "./L03_03_useRef";
import {L03_04_reference} from "./L03_04_reference";
import {L03_05_focus} from "./L03_05_focus";
import {L03_06_prevState} from "./L03_06_prevState";

export const L03_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);
  const [seeExampl04, setSeeExampl04] = useState(false);
  const [seeExampl05, setSeeExampl05] = useState(false);
  const [seeExampl06, setSeeExampl06] = useState(false);

  return (
    <>
      <h3>Есть задача: Посчитать, сколько раз рендерится компонент.</h3>

      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Используем useEffect."
        WVLFSecond={2280}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_01_useEffect.js"
      />
      {seeExampl01 ? (
        <>
          <СodeHowText codeText={[`useEffect(() => {`, `  setRenderCount(prev => prev+1)`, `});`]}/>
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Внимание!</h4>
            <p>Есть предупреждение. {`"Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render"`} </p>
            <hr/>
            <p className="mb-0">
              Чтобы увидеть предупреждение откройте консоль браузера.
            </p>
          </div>

          <L03_01_useEffect/>
          <p>
            В примере получился бесконечный цикл, так как при изменении стейта происходит рендеринг компоненты.
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Используем переменную вне компоненты."
        WVLFSecond={2408}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_02_let.js"
      />
      {seeExampl02 ? (
        <>
          <СodeHowText codeText={[`let renderCount = 1`, `export const L03_02_let = () => {`]}/>
          <L03_02_let/>
          <p>Это не самое лучшее решение,в этом примере использована переменная вне жизненного цикла компоненты.  </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl03}
        setSeeExampl={setSeeExampl03}
        label="Третий пример. "
        labelAdd="Используем useRef."
        WVLFSecond={2518}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_03_useRef.js"
      />
      {seeExampl03 ? (
        <>
          <СodeHowText codeText={[`const renderCount = useRef(1);`]}/>
          <L03_03_useRef/>
          <p>С помощью свойства .current, можно обратиться к значению объекта:
            <СodeHowText codeText={[`<h4> Количество рендеров компоненты : {renderCount.current}</h4>`]}/>
          </p>
          <p>Хук useRef() это общий контейнер, а его свойство current — изменяемое и может хранить любое значение, подобно свойству экземпляра класса.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables"/>
          </p>
        </>
      ) : null}

      <h3>Есть задача: Менять фокус на странице.</h3>
      <p>Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.
        <ReactjsOrg href="https://ru.reactjs.org/docs/refs-and-the-dom.html"/>
      </p>

      <HeaderForExampl
        seeExampl={seeExampl04}
        setSeeExampl={setSeeExampl04}
        label="Четвертый пример. "
        labelAdd="Получаем ссылку на DOM элемент."
        WVLFSecond={2628}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_04_reference.js"
      />
      {seeExampl04 ? (
        <>
          <p>Рефы прикрепляются к React-элементам через ref атрибут.
            <СodeHowText codeText={[`<input ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}/>`]}/>
          </p>

          <L03_04_reference/>
          <p>Чтобы увидеть сообщение откройте консоль браузера.
            <СodeHowText codeText={[`console.log(inputRef.current.value)`]}/>
            Когда атрибут ref используется с HTML-элементом, свойство current созданного рефа в конструкторе с помощью React.createRef() получает соответствующий DOM-элемент.
            <ReactjsOrg href="https://ru.reactjs.org/docs/refs-and-the-dom.html#accessing-refs"/>
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl05}
        setSeeExampl={setSeeExampl05}
        label="Пятый пример. "
        labelAdd="Задаем фокус на элемент."
        WVLFSecond={2708}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_05_focus.js"
      />
      {seeExampl05 ? (
        <>
          <СodeHowText codeText={[`const focus = () => inputRef.current.focus()`]}/>
          <L03_05_focus/>
        </>
      ) : null}

      <h3>Есть задача: Получить предыдущее значение состояния.</h3>

      <HeaderForExampl
        seeExampl={seeExampl06}
        setSeeExampl={setSeeExampl06}
        label="Шестой пример. "
        labelAdd="Отображение предыдущего состояния"
        WVLFSecond={2773}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson03/L03_06_prevState.js"
      />
      {seeExampl06 ? (
        <>
          <L03_06_prevState/>
        </>
      ) : null}

    </>
  );
};
