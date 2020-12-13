import React from "react";

export default function Main({toggle = null}) {

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button className="btn btn-success" onClick={toggle}>Показать alert</button>
    </>
  )
}

