import React from "react"
import ReactjsOrg from "../common/ReactjsOrg"
import { L07_listOfContent } from "./L07_listOfContent"
import CodeHowText from "../common/СodeHowText"

export default function Lesson07() {
  return (
    <>
      <h2>
        7. Хук useReducer.
      </h2>
      <p>
        Альтернатива для useState. Принимает редюсер типа (state, action) {"=>"} newState и возвращает текущее состояние в
        паре с методом dispatch. (Если вы знакомы с Redux, вы уже знаете, как это работает.)
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usereducer"/>
        <CodeHowText codeText={[`const [state, dispatch] = useReducer(reducer, initialArg, init);`]}/>
      </p>
      <L07_listOfContent />

    </>
  );
}

