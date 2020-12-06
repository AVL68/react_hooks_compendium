import React, {useEffect, useState} from "react";

export const L02_05_WillUnmount = () => {
  const [data, setData] = useState({x: 0, y: 0});

  const mouseMoveHandler = event => {
    setData({x: event.clientX, y: event.clientY})
  }

  useEffect(() => {
    console.log("5. componentDidMount")
    window.addEventListener("mousemove", mouseMoveHandler)
    return () =>{
      console.log("5. componentWillUnmount")
      window.removeEventListener("mousemove", mouseMoveHandler)}
  },[]);

  return (
    <>
      <div className="card bg-light mb-3 shadow " style={{width: "30%", height: "180px"}}>
        <div className="card-body">
          <h4> Координаты курсора:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};
