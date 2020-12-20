import React, { useState } from "react";


function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }
  return {
    value, onChange
  }
}

export default function L08_03_MyHookInput() {
  const name = useInput("")
  const lastName = useInput("")

  return (
      <div className="card bg-light mb-3 shadow" style={{width: "45rem"}}>
        <div className="card-body">
          <input type="text" value={name.value} placeholder="Name" onChange={name.onChange} className="mr-1"/>
          <input type="text" {...lastName} placeholder="LastName" />
          <hr/>
          <h1>Имя: <em>{name.value} {lastName.value}</em></h1>

        </div>
      </div>
  )

}