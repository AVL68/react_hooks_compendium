import React from "react";
import {AlertProvider} from "./alert/AlertContext";
import Main from "./Main";
import Alert from "./alert/Alert";

export default function L06_03_useContextObject() {

  return (
    <AlertProvider >
      <div className="card bg-light mb-3 shadow" style={{width: "45rem"}}>
        <div className="card-body">
          <Alert/>
          <Main/>
        </div>
      </div>
    </AlertProvider>
  )
}
