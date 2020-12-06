import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";

function Lesson03() {
  return (
    <>
      <h2>
        3. Хук useRef.
        <WatchVideoLessonFromSecond second={2253} />
      </h2>
      <p>
        useRef возвращает изменяемый ref-объект.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#useref" />
        <СodeHowText codeText={[`const refContainer = useRef(initialValue);`]} />
      </p>


    </>
  );
}

export default Lesson03;
