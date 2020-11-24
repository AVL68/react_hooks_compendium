import React, { useState } from "react";
import { HeaderForExampl } from "../common/HeaderForExampl";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import { L02_01_baseUse } from "./L02_01_baseUse";
import { L02_02_secondArgument } from "./L02_02_secondArgument";

export const L02_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. Базовое использование useEffect."
        WVLFSecond={1416}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_01_baseUse.js"
      />
      {seeExampl01 ? (
        <>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>
          <L02_01_baseUse />
          <p>
            В функциональной компoненте использован хук useEffect:
            <СodeHowText codeText={[`useEffect(() => {`, `  console.log("render from useEffect");`, `});`]} />
            Обратите внимание, что рендер компоненты происходит только при смене названия ресурса.
          </p>
        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. Второй параметр хука useEffect"
        WVLFSecond={1661}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson02/L02_01_baseUse.js"
      />
      {seeExampl02 ? (
        <>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>
          <L02_02_secondArgument />
          <p>
            По умолчанию эффекты запускаются после каждого завершённого рендера. :
            <СodeHowText codeText={[`useEffect(() => {`, `  "render from useEffect", ", type: ", type, ", color: ", color`, `});`]} />
            Обратите внимание, что рендер компоненты происходит только при смене названия ресурса или цвета.
          </p>
          <p>
            В некоторых случаях это может быть излишним, чтобы реализовать это, передайте второй аргумент в useEffect, который является массивом значений, от которых зависит эффект.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect" />
            <СodeHowText codeText={[`useEffect(() => {`, `  console.log("render from useEffect with type: ", type);`, ` }, [type]);`]} />
          </p>
        </>
      ) : null}
    </>
  );
};
