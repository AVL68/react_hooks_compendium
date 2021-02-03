import React from "react"
import ReactjsOrg from "../common/ReactjsOrg"
import {L05_listOfContent} from "./L05_listOfContent"

export default function Lesson05() {
  return (
    <>
      <h2>
        5. Хук useCallback.
      </h2>
      <p>
        Возвращает мемоизированный колбэк.
        <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-reference.html#usecallback" />
      </p>
      <L05_listOfContent />

    </>
  )
}

