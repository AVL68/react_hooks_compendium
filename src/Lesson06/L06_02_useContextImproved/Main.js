import React from "react";
import {useAlertTogle} from "./alert/AlertContext";

export default function Main() {

  const toggle = useAlertTogle()

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button className="btn btn-success" onClick={toggle}>Показать alert</button>
    </>
  )
}

