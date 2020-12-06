import React from "react";
import IconsSVG from "../common/IconsSVG";

function WatchVideoLessonFromSecond({ second = 1, text = "" }) {
  return (
    <a href={`https://youtu.be/9KJxaFHotqI?t=${second}`} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title="Смотреть видео" >
      <span>{text}</span>
      <IconsSVG iconsID="file-play" width="1em" height="0.65em" className={"bi"}/>
    </a>
  );
}

export default WatchVideoLessonFromSecond;
