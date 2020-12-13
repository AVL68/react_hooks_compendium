import React from "react";
import ReactjsOrg from "../common/ReactjsOrg";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";

export default function Intro() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Конспект, шпаргалка по хукам в React.</h1>

      <p>
        Основан на курсе React Hooks -
        <WatchVideoLessonFromSecond second={1} text=" Полный Курс (Про Все Хуки!) от Владилен Минин" />
        Дополнительная информация с
        <ReactjsOrg href="https://ru.reactjs.org/" text=" https://ru.reactjs.org/" />
      </p>
      <p> Основная идея react компонент: есть определенный стейт, объект описывающий состояние компонента. Если он меняется, react непосредственно перерисовывает ту область, где этот стейт выводится.</p>
      <p>
        Для взаимодействия со стейт-ом в функциональных компонентах используются хуки. Хуки - это просто абсолютно изолированный функции, их предоставляет react, которые позволяют полностью имплементировать весь
        функционал react в базовых функциональных компонентах.
      </p>
    </>
  );
}
