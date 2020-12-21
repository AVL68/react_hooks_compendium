import React, { useState } from "react";


function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }
  const clear = () => setValue("")

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

export default function L08_04_MyHookClear() {
  const name = useInput("")
  const lastName = useInput("")

  return (
    <div className="card bg-light mb-3 shadow" style={{width: "45rem"}}>
      <div className="card-body">
        <input type="text" {...name.bind} placeholder="Name" className="mr-1"/>
        <input type="text" {...lastName.bind} placeholder="LastName"/>
        <hr/>
        <button className="btn btn-success mr-1" onClick={name.clear}>Очистить name</button>
        <button className="btn btn-success mr-2" onClick={lastName.clear}>Очистить lastName</button>
        <button className="btn btn-warning" onClick={() => {
          name.clear()
          lastName.clear()
        }}>Очистить имя
        </button>
        <hr/>
        <h1>Имя: <em>{name.value} {lastName.value}</em></h1>

      </div>
      </div>
  )

}