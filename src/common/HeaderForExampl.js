import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import GitHubFile from "../common/GitHubFile";

export const HeaderForExampl = ({ seeExampl = false, setSeeExampl = null, label = "", WVLFSecond = 0, GHFile = "" }) => {
  return (
    <h3>
      <span className="form-group form-check" data-toggle="tooltip" data-placement="bottom" title="Смотреть пример">
        <input checked={seeExampl} onChange={() => setSeeExampl(!seeExampl)} type="checkbox" className="form-check-input" id="exampleCheck1" style={{ cursor: "pointer" }}></input>
        <label className="form-check-label" htmlFor="exampleCheck1" style={{ cursor: "pointer" }}>
          {label}
        </label>
        <WatchVideoLessonFromSecond second={WVLFSecond} />
        <GitHubFile href={GHFile} />
      </span>
    </h3>
  );
};
