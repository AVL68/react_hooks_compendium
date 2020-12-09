import React, {useState} from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import СodeHowText from "../common/СodeHowText";
import L04_01_42 from "./L04_01_42";
import L04_02_useMemo from "./L04_02_useMemo";
// import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";

export const L04_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  // const [seeExampl03, setSeeExampl03] = useState(false);
  // const [seeExampl04, setSeeExampl04] = useState(false);
  // const [seeExampl05, setSeeExampl05] = useState(false);
  // const [seeExampl06, setSeeExampl06] = useState(false);

  return (
    <>
      <h3>Есть задача: Оптимизация производительности.</h3>

      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Не эффективный рендеринг."
        WVLFSecond={2887}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_01_42.js"
      />
      {seeExampl01 ? (
        <>
          <p>Для расчета вычисляемого свойства используется долгий расчет.
            <СodeHowText codeText={[`function complexCompute(num) {...`]}/>
          </p>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

          <L04_01_42/>

          <div className="alert alert-danger" role="alert">
            <p className="mb-0">
              Расчет вычисляемого свойства происходит и при добавлении и вычитании, что опрадано. Также расчет
              вычисляемого свойства происходит во время изменения цвета. Это уменьшает эффективность рендеринга
              компоненты.
            </p>
          </div>

        </>
      ) : null}


      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Применяем useMemo."
        WVLFSecond={3237}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_02_useMemo.js"
      />
      {seeExampl02 ? (
        <>
          <p>Расчет вычисляемого свойства обернули хуком useMemo. Вторым параметром передали зависимость расчета.
            <СodeHowText codeText={[`const computed = useMemo(() => {return complexCompute(number)},[number])`]}/>
          </p>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

          <L04_02_useMemo/>

          <div className="alert alert-warning" role="alert">
            <p className="mb-0">
              Расчет вычисляемого свойства происходит при добавлении и вычитании, что опрадано. Расчет
              вычисляемого свойства не происходит во время изменения цвета, что лучше сказывается на эффективность
              рендеринга
              компоненты.
            </p>
          </div>

        </>
      ) : null}


    </>
  );
};
