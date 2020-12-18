import React, { useState } from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import L07_01_useReducer from "./L07_01_useReducer/L07_01_useReducer";
// import ReactjsOrg from "../common/ReactjsOrg";
// import CodeHowText from "../common/СodeHowText";
// import GitHubFile from "../common/GitHubFile";
// import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";

export const L07_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);

  return (
    <>

      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Базовое использование."
        WVLFSecond={5216}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson07/L07_01_useReducer/alert/AlertContext.js"
      />
      {seeExampl01 ? (
        <>
          <L07_01_useReducer/>

        </>
      ) : null}

    </>
  );
};
