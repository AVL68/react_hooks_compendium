import React from "react";
import IconsSVG from "../common/IconsSVG";

function ReactjsOrg({ href = "#", text = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title="Смотреть документацию">
      {text}
      <IconsSVG iconsID="react-file" width="1em" height="0.9em" className={"bi"}/>
    </a>
  );
}

export default ReactjsOrg;
