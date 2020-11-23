import React, { useState } from "react";
import { L02_01_baseUse } from "./L02_01_baseUse";
import { HeaderForExampl } from "../common/HeaderForExampl";
import СodeHowText from "../common/СodeHowText";
// import ReactjsOrg from "../common/ReactjsOrg";

export const L02_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример.Базовое использование useEffect."
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
    </>
  );
};
