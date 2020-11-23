import React, { useState } from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import GitHubFile from "../common/GitHubFile";
import { L02_01_baseUse } from "./L02_01_baseUse";
// import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";

export const L02_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  return (
    <>
      <h3>
        <span className="form-group form-check" data-toggle="tooltip" data-placement="bottom" title="Смотреть пример">
          <input onChange={() => setSeeExampl01(!seeExampl01)} type="checkbox" className="form-check-input" id="exampleCheck1" style={{ cursor: "pointer" }} checked={seeExampl01}></input>
          <label className="form-check-label" htmlFor="exampleCheck1" style={{ cursor: "pointer" }}>
            Первый пример.Базовое использование useEffect.
          </label>
          <WatchVideoLessonFromSecond second={1416} />
          <GitHubFile href="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson01/L01CounterBase.js" />
        </span>
      </h3>
      <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>
      {seeExampl01 ? <L02_01_baseUse /> : null}
    </>
  );
};
