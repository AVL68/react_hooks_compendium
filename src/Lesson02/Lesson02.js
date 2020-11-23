import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
import СodeHowText from "../common/СodeHowText";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import { L02_listOfContent } from "./L02_listOfContent";

function Lesson02() {
  return (
    <>
      <h2>
        2. Один из основных хуков: useEffect.
        <WatchVideoLessonFromSecond second={1400} />
      </h2>
      <p>
        Мутации, подписки, таймеры, логирование и другие побочные эффекты не допускаются внутри основного тела функционального компонента (называемого этапом рендеринга React).
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#useeffect" />
        <br />
        Функция, переданная в useEffect, будет запущена после того, как рендер будет зафиксирован на экране.
        <СodeHowText codeText={[`useEffect(didUpdate);`]} />
      </p>
      <L02_listOfContent />
    </>
  );
}

export default Lesson02;
