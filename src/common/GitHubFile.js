import React from "react";
import IconsSVG from "../common/IconsSVG";

function GitHubFile({ href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="bottom" title="Смотреть код на GitHub">
      <IconsSVG iconsID="git-file" width="1em" height="0.65em" className={"bi"}/>
    </a>
  );
}

export default GitHubFile;
