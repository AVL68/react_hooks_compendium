import React, {useContext, useState} from "react";


const AlertContext = React.createContext()
const AlertTogleContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}
export const useAlertTogle = () => {
  return useContext(AlertTogleContext)
}

export const AlertProvider = ({ children=null }) => {
  const [alert, setAlert] = useState(false)
  const toggle = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert} >
      <AlertTogleContext.Provider value={toggle} >
        {children}
      </AlertTogleContext.Provider>
    </AlertContext.Provider>
  )

}