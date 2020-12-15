import React from "react";
import {useAlert} from "./AlertContext";

export default function Alert() {
  const alert = useAlert()
  if (!alert.visible) return null

  return (
      <div className="alert alert-danger" role="alert" onClick={alert.toggle} style={{ cursor: "pointer"}}>
        <p className="mb-0">
          Это очень и очень важное сообщение!!!
        </p>
      </div>
  )
}
