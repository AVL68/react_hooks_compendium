import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import { L01_listOfContent } from "./L01_listOfContent";
import CodeHowText from "../common/СodeHowText";
import ReactjsOrg from "../common/ReactjsOrg";

export default function Lesson01() {
  return (
    <>
      <h2>
        1. Первый базовый хук useState.
        <WatchVideoLessonFromSecond second={278} />
      </h2>
      <p>Он наделяет наш функциональный компонент внутренним состоянием.
        Возвращает значение с состоянием и функцию для его обновления.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usestate" />
        <CodeHowText codeText={[`const [state, setState] = useState(initialState);`]} />
      </p>
      <L01_listOfContent />
    </>
  );
}
