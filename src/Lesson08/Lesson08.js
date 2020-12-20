import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import {L08_listOfContent} from "./L08_listOfContent";
// import CodeHowText from "../common/СodeHowText";

export default function Lesson08() {
  return (
    <>
      <h2>
        8. Создание пользовательских хуков.
        <WatchVideoLessonFromSecond second={5658} />
      </h2>
      <p>
        Создание пользовательских хуков позволяет перенести логику компонентов в функции, которые можно повторно использовать.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-custom.html"/>
      </p>
      <p>Пользовательский хук — это JavaScript-функция, имя которой начинается с «use», и которая может вызывать другие хуки</p>
      <L08_listOfContent />

    </>
  );
}

