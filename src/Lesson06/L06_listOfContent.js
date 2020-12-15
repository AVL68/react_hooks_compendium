import React, { useState } from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import ReactjsOrg from "../common/ReactjsOrg";
import CodeHowText from "../common/СodeHowText";
import GitHubFile from "../common/GitHubFile";
import L06_01_useContextBase from "./L06_01_useContextBase/L06_01_useContextBase";
import L06_02_useContextImproved from "./L06_02_useContextImproved/L06_02_useContextImproved";
import L06_03_useContextObject from "./L06_03_useContextObject/L06_03_useContextObject";
// import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";

export const L06_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);

  return (
    <>
      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Базовое применение."
        WVLFSecond={4209}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_01_useContextBase/L06_01_useContextBase.js"
      />
      {seeExampl01 ? (
        <>
          <p>Создаём объект Context.
            <ReactjsOrg href="https://ru.reactjs.org/docs/context.html#reactcreatecontext"/>
            <CodeHowText codeText={[`export const AlertContext = React.createContext()`]}/>
            Каждый объект Context используется вместе с Provider компонентом
            <ReactjsOrg href="https://ru.reactjs.org/docs/context.html#contextprovider"/>,
            <CodeHowText codeText={[`<AlertContext.Provider value={alert} >`]}/>
            который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.
            <CodeHowText codeText={[`const alert = useContext(AlertContext)`]}/>
          </p>

          <L06_01_useContextBase/>

        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Пример улучшенного применения."
        WVLFSecond={4687}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_02_useContextImproved/L06_02_useContextImproved.js"
      />
      {seeExampl02 ? (
        <>
          <p>Всю логику работы с context и state выносим в отдельный файл.
            <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_02_useContextImproved/alert/AlertContext.js" />
          </p>
          <L06_02_useContextImproved/>

        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl03}
        setSeeExampl={setSeeExampl03}
        label="Третий пример. "
        labelAdd="Используем объект."
        WVLFSecond={5123}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_03_useContextImproved/L06_03_useContextObject.js"
      />
      {seeExampl03 ? (
        <>
          <p>Экспортируем в провайдере объект
            <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson06/L06_03_useContextImproved/alert/AlertContext.js"/>
            :
            <CodeHowText codeText={[`<AlertContext.Provider value={{`, `visible: alert,`, `toggle`, `}} >`]}/>
          </p>
          <L06_03_useContextObject/>

        </>
      ) : null}

    </>
  );
};
