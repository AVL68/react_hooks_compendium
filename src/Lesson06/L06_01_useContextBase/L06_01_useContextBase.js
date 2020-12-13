import React, { useState } from "react";
import Main from "./Main";
import Alert from "./Alert";

export const AlertContext = React.createContext()

function L06_01_useContextBase() {
  const [alert, setAlert] = useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert} >
      <div className="card bg-light mb-3 shadow" style={{width: "45rem"}}>
        <div className="card-body">

          <Alert/>
          <Main toggle={toggleAlert}/>

        </div>
      </div>
    </AlertContext.Provider>
  )
}

export default L06_01_useContextBase