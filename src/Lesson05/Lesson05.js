import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import {L05_listOfContent} from "./L05_listOfContent";

function Lesson05() {
  return (
    <>
      <h2>
        5. Хук useCallback.
        <WatchVideoLessonFromSecond second={3578} />
      </h2>
      <p>
        Возвращает мемоизированный колбэк.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usecallback" />
      </p>
      <L05_listOfContent />

    </>
  );
}

export default Lesson05;
