import React from "react";
import {useAlert} from "./AlertContext";

export default function Alert() {
  const alert = useAlert()
  if (!alert) return null

  return (
      <div className="alert alert-danger" role="alert">
        <p className="mb-0">
          Это очень и очень важное сообщение!!!
        </p>
      </div>
  )
}
