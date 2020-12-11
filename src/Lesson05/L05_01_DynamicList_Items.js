import React, { useState, useEffect } from "react";

export default function L05_01_DynamicList_Items({ getItems = []}) {
  const [items,setItems] = useState([])

  useEffect(()=>{
    const newItems = getItems()
    setItems(newItems)

    console.log("Render from DynamicList_Items")
  },[getItems])

  return (
    <ul>
      {items.map( i => <li key={i}>{i}</li>)}
    </ul>
  )
}
