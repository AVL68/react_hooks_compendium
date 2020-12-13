import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import {L06_listOfContent} from "./L06_listOfContent";

export default function Lesson06() {
  return (
    <>
      <h2>
        6. Хук useContext.
        <WatchVideoLessonFromSecond second={4203} />
      </h2>
      <p>
        Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение
        контекста для этого контекста. Текущее значение контекста определяется пропом value
        ближайшего MyContext.Provider над вызывающим компонентом в дереве.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usecontext"/>
      </p>
      <L06_listOfContent />

    </>
  );
}

