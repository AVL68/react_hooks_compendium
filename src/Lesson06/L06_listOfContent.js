import React, { useState } from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import L06_01_useContextBase from "./L06_01_useContextBase/L06_01_useContextBase";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
// import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";

export const L06_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  // const [seeExampl02, setSeeExampl02] = useState(false);

  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Базовое применение>."
        WVLFSecond={4209}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_01_useContextBase.js"
      />
      {seeExampl01 ? (
        <>
          <p>Создаём объект Context.
            <ReactjsOrg href="https://ru.reactjs.org/docs/context.html#reactcreatecontext"/>
            <СodeHowText codeText={[`export const AlertContext = React.createContext()`]}/>
            Каждый объект Context используется вместе с Provider компонентом
            <ReactjsOrg href="https://ru.reactjs.org/docs/context.html#contextprovider"/>,
            <СodeHowText codeText={[`<AlertContext.Provider value={alert} >`]}/>
            который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.
            <СodeHowText codeText={[`const alert = useContext(AlertContext)`]}/>
          </p>

          <L06_01_useContextBase/>

        </>
      ) : null}


      {/*<HeaderForExampl*/}
      {/*  seeExampl={seeExampl02}*/}
      {/*  setSeeExampl={setSeeExampl02}*/}
      {/*  label="Второй пример. "*/}
      {/*  labelAdd="Применяем useCallback."*/}
      {/*  WVLFSecond={4045}*/}
      {/*  GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson05/L05_01_DynamicList_useCallback.js"*/}
      {/*/>*/}
      {/*{seeExampl02 ? (*/}
      {/*  <>*/}
      {/*    <p>Callback функцию обернули хуком useCallback. Вторым параметром передали зависимость.*/}
      {/*      <СodeHowText codeText={[`const generateItemsFromAPI = useCallback(() => {`, 'return new Array(count).fill("").map((_, key) => `Элемент ${key + 1}`)', `},[count])`]}/>*/}
      {/*    </p>*/}
      {/*    <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>*/}

      {/*    <L05_01_DynamicList_useCallback/>*/}

      {/*    <div className="alert alert-warning" role="alert">*/}
      {/*      <p className="mb-0">*/}
      {/*        Рендер элементов происходит при добавлении нового элемента, что правильно. Рендер*/}
      {/*        элементов не происходит во время изменения цвета. Это улучшает общую эффективность рендеринга*/}
      {/*        компоненты.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*  </>*/}
      {/*) : null}*/}


    </>
  );
};
