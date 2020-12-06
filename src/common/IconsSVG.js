import React from "react";
import iconsSVG from "../common/assets/icons.svg";

export default function IconsSVG({ className = "", iconsID = "", width="1em", height="1em"}) {
    return (
        <svg className={className} width={width} height={height} >
            <use xlinkHref={`${iconsSVG}#${iconsID}`} />
        </svg>
    );
}