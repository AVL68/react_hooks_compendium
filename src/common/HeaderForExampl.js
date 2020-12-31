import React from "react";
import WatchVideoLessonFromSecond from "../common/WatchVideoLessonFromSecond";
import GitHubFile from "../common/GitHubFile";

export const HeaderForExampl = ({
                                  seeExampl = false,
                                  setSeeExampl = null,
                                  label = "",
                                  labelAdd = "",
                                  WVLFSecond = 0,
                                  GHFile = ""
                                }) => {
  return (
    <h3>
      <span className="form-group form-switch" data-toggle="tooltip" data-placement="bottom" title="Смотреть пример">
        <input checked={seeExampl} onChange={() => setSeeExampl(!seeExampl)} type="checkbox"
               className="form-check-input" id={GHFile} style={{cursor: "pointer", width: "1em", height: "0.6em"}}/>
        <label className="form-check-label" htmlFor={GHFile} style={{cursor: "pointer"}}>
          &nbsp;{label}
          <span style={{fontSize: 18}}>{labelAdd}</span>
        </label>
        <WatchVideoLessonFromSecond second={WVLFSecond}/>
        <GitHubFile href={GHFile}/>
      </span>
    </h3>
  );
};
//
// <div className="form-check form-switch">
//   <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
//     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
// </div>