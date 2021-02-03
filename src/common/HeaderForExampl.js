import React from "react";
import GitHubFile from "../common/GitHubFile";

export const HeaderForExampl = ({
                                  seeExampl = false,
                                  setSeeExampl = null,
                                  label = "",
                                  labelAdd = "",
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
        <GitHubFile href={GHFile}/>
      </span>
    </h3>
  )
}
