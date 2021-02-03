import React from "react"
import ReactjsOrg from "../common/ReactjsOrg"
import СodeHowText from "../common/СodeHowText"
import {L03_listOfContent} from "./L03_listOfContent"

export default function Lesson03() {
  return (
    <>
      <h2>
        3. Хук useRef.
      </h2>
      <p>
        useRef возвращает изменяемый ref-объект.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#useref" />
        <СodeHowText codeText={[`const refContainer = useRef(initialValue);`]} />
      </p>
      <L03_listOfContent />

    </>
  )
}
