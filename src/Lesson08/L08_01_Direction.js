import React, { useState } from "react";


export default function L08_01_Direction() {
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")


  const handlerName = event => {
    setName(event.target.value)
  }

  const handlerlastName = event => {
    setlastName(event.target.value)
  }

  return (
      <div className="card bg-light mb-3 shadow" style={{width: "45rem"}}>
        <div className="card-body">
          <input type="text" value={name} placeholder="Name" onChange={handlerName} className="me-1"/>
          <input type="text" value={lastName} placeholder="LastName" onChange={handlerlastName}/>
          <hr/>
          <h1>Имя: <em>{name} {lastName}</em></h1>

        </div>
      </div>
  )

}