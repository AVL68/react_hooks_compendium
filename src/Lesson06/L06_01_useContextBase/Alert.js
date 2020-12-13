import React, { useContext } from "react";
import {AlertContext} from "./L06_01_useContextBase";

export default function Alert() {
  const alert = useContext(AlertContext)
  if (!alert) return null

  return (
      <div className="alert alert-danger" role="alert">
        <p className="mb-0">
          Это очень и очень важное сообщение!!!
        </p>
      </div>
  )
}
