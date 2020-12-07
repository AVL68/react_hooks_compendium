import React, {useState} from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import {L03_01_useEffect} from "./L03_01_useEffect";
import {L03_02_let} from "./L03_02_let";
import {L03_03_useRef} from "./L03_03_useRef";

export const L03_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);
  // const [seeExampl04, setSeeExampl04] = useState(false);
  // const [seeExampl05, setSeeExampl05] = useState(false);

  return (
    <>
      <h3>Есть задача: Посчитать, сколько раз рендерится компонента.</h3>

      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Используем useEffect."
        WVLFSecond={2280}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L03_01_useEffect.js"
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
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L03_02_let.js"
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
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L03_03_useRef.js"
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


    </>
  );
};
