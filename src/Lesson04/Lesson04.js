import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
// import СodeHowText from "../common/СodeHowText";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import {L04_listOfContent} from "./L04_listOfContent";

export default function Lesson04() {
  return (
    <>
      <h2>
        4. Хук useMemo.
        <WatchVideoLessonFromSecond second={2887} />
      </h2>
      <p>
        Возвращает мемоизированное значение.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usememo" />
      </p>
      <L04_listOfContent />

    </>
  );
}
