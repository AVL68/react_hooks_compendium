import React from "react";
import Intro from "./Lesson00/Intro";
import Lesson01 from "./Lesson01/Lesson01";
import Lesson02 from "./Lesson02/Lesson02";
import Lesson03 from "./Lesson03/Lesson03";
import Lesson04 from "./Lesson04/Lesson04";

function App() {
  return (
    <div className="container">
      <Intro />
      <Lesson01 />
      <Lesson02 />
      <Lesson03 />
      <Lesson04 />
    </div>
  );
}

export default App;
