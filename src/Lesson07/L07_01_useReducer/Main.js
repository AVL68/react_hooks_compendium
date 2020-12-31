import React from "react";
import {useAlert} from "./alert/AlertContext";

export default function Main() {

  const {show, hide, visible} = useAlert()

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button className="btn btn-success  me-1" onClick={()=> show("Это текст из main.js")} disabled={visible? "disabled" : ""}>Показать alert</button>
      <button className="btn btn-warning" onClick={()=> hide()} disabled={!visible? "disabled" : ""}>Убрать alert</button>
    </>
  )
}

