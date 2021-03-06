import React, {useState} from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import {L02_01_baseUse} from "./L02_01_baseUse";
import {L02_02_secondArgument} from "./L02_02_secondArgument";
import {L02_03_FetchPlaceholder} from "./L02_03_FetchPlaceholder";
import {L02_04_DidMount} from "./L02_04_DidMount";
import {L02_05_WillUnmount} from "./L02_05_WillUnmount";

export const L02_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);
  const [seeExampl04, setSeeExampl04] = useState(false);
  const [seeExampl05, setSeeExampl05] = useState(false);

  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Базовое использование useEffect."
        WVLFSecond={1416}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_01_baseUse.js"
      />
      {seeExampl01 ? (
        <>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>
          <L02_01_baseUse/>
          <p>
            В функциональной компoненте использован хук useEffect:
            <СodeHowText codeText={[`useEffect(() => {`, `  console.log("render from useEffect");`, `});`]}/>
            Обратите внимание, что рендер компоненты происходит только при смене названия ресурса.
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Второй параметр хука useEffect"
        WVLFSecond={1661}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_02_secondArgument.js"
      />
      {seeExampl02 ? (
        <>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>
          <L02_02_secondArgument/>
          <p>
            По умолчанию эффекты запускаются после каждого завершённого рендера. :
            <СodeHowText
              codeText={[`useEffect(() => {`, `  "render from useEffect", ", type: ", type, ", color: ", color`, `});`]}/>
            Обратите внимание, что рендер компоненты происходит только при смене названия ресурса или цвета.
          </p>
          <p>
            В некоторых случаях это может быть излишним, чтобы реализовать это, передайте второй аргумент в useEffect,
            который является массивом значений, от которых зависит эффект.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect"/>
            <СodeHowText
              codeText={[`useEffect(() => {`, `  console.log("render from useEffect with type: ", type);`, ` }, [type]);`]}/>
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl03}
        setSeeExampl={setSeeExampl03}
        label="Третий пример. "
        labelAdd="Делаем запрос на {JSON} Placeholder."
        WVLFSecond={1738}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_03_FetchPlaceholder.js"
      />
      {seeExampl03 ? (
        <>
          <p>
            Делаем запрос и получаем данные, в зависимости от выбранного ресурса.
            <СodeHowText
              codeText={[`useEffect(() => {`, "  fetch(`https://jsonplaceholder.typicode.com/${type}`)", ` .then((response) => response.json())`, ` .then((json) => setData(json));`, ` }, [type]);`]}/>
            Данные запрашиваются каждый раз, когда меняется ресурс.
          </p>
          <L02_03_FetchPlaceholder/>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl04}
        setSeeExampl={setSeeExampl04}
        label="Четвертый пример. "
        labelAdd="componentDidMount?"
        WVLFSecond={1949}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_04_DidMount.js"
      />
      {seeExampl04 ? (
        <>
          <p>
            Если необходимо запустить эффект один раз (при монтировании), надо передать пустой массив ([ ]) вторым
            аргументом.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect"/>
            <СodeHowText
              codeText={[`useEffect(() => {`, "  fetch(`https://jsonplaceholder.typicode.com/users`)", ` .then((response) => response.json())`, ` .then((json) => setUsers(json));`, ` }, [ ]);`]}/>
          </p>
          <L02_04_DidMount/>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl05}
        setSeeExampl={setSeeExampl05}
        label="Пятый пример. "
        labelAdd="componentWillUnmount?"
        WVLFSecond={1995}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_05_WillUnmount.js"
      />
      {seeExampl05 ? (
        <>
          <p>
            Часто эффекты создают ресурсы, которые необходимо очистить (или сбросить) перед тем, как компонент покидает
            экран, например подписку или идентификатор таймера.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect"/>
            <СodeHowText
              codeText={[`useEffect(() => {`, "  window.addEventListener(\"mousemove\", event => {", ` setData({x: event.clientX, y: event.clientY})`, ` })`, ` }, []);`]}/>
          </p>
          <L02_05_WillUnmount/>
          <p>Чтобы сделать это, функция переданная в useEffect, может вернуть функцию очистки:
            <СodeHowText
              codeText={[`return () =>{`, `  console.log("5. componentWillUnmount")`, ` window.removeEventListener("mousemove", mouseMoveHandler)}`, ` }, []);`]}/>
          </p>
        </>
      ) : null}
    </>
  );
};
