import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import { L01_listOfContent } from "./L01_listOfContent";

function Lesson01() {
  return (
    <>
      <h2>
        1. Первый базовый хук useState.
        <WatchVideoLessonFromSecond second={278} />
      </h2>
      <p>Он наделяет наш функциональный компонент внутренним состоянием.</p>
      <L01_listOfContent />
    </>
  );
}

export default Lesson01;
