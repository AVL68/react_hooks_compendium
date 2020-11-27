import React from "react";
function WatchVideoLessonFromSecond({ second = 1, text = "" }) {
  return (
    <a href={`https://youtu.be/9KJxaFHotqI?t=${second}`} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title="Смотреть видео">
      <span>{text}</span>
      <svg width="1em" height="0.65em" viewBox="0 0 16 16" className="bi bi-file-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" />
        <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
      </svg>
    </a>
  );
}

export default WatchVideoLessonFromSecond;