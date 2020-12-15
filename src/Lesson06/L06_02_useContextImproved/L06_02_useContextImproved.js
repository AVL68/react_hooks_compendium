import React from "react";
import {AlertProvider} from "./alert/AlertContext";
import Main from "./Main";
import Alert from "./alert/Alert";

function L06_02_useContextImproved() {

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

export default L06_02_useContextImproved