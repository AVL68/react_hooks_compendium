import React, {useState} from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import СodeHowText from "../common/СodeHowText";
// import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import L05_01_DynamicList from "./L05_01_DynamicList";
import L05_01_DynamicList_useCallback from "./L05_01_DynamicList_useCallback";
// import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";

export const L05_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);

  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Вывод динамического списка."
        WVLFSecond={3590}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L05_01_DynamicList.js"
      />
      {seeExampl01 ? (
        <>
          <p>Для вывода динамического списка элементов используется callback функция
            <СodeHowText codeText={[`const generateItemsFromAPI = () => {`, 'return new Array(count).fill("").map((_, key) => `Элемент ${key + 1}`)', `}`]}/>
          </p>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

          <L05_01_DynamicList/>

          <div className="alert alert-danger" role="alert">
            <p className="mb-0">
              Рендер элементов происходит при добавлении нового элемента, что правильно. Также рендер
              элементов происходит во время изменения цвета. Это уменьшает общую эффективность рендеринга
              компоненты.
            </p>
          </div>

        </>
      ) : null}


      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Применяем useCallback."
        WVLFSecond={4045}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L05_01_DynamicList_useCallback.js"
      />
      {seeExampl02 ? (
        <>
          <p>Callback функцию обернули хуком useCallback. Вторым параметром передали зависимость.
            <СodeHowText codeText={[`const generateItemsFromAPI = useCallback(() => {`, 'return new Array(count).fill("").map((_, key) => `Элемент ${key + 1}`)', `},[count])`]}/>
          </p>
          <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

          <L05_01_DynamicList_useCallback/>

          <div className="alert alert-warning" role="alert">
            <p className="mb-0">
              Рендер элементов происходит при добавлении нового элемента, что правильно. Рендер
              элементов не происходит во время изменения цвета. Это улучшает общую эффективность рендеринга
              компоненты.
            </p>
          </div>

        </>
      ) : null}


    </>
  );
};
