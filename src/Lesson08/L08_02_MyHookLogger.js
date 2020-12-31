import React, { useState, useEffect } from "react";

function useLogger(value , title) {
  useEffect(() => {
    console.log(`Значение ${title} изменилось на: ${value}`)
  },[value])
}

export default function L08_02_MyHookLogger() {
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")

  useLogger(name, "name")
  useLogger(lastName, "lastName")


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