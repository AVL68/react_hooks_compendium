import React from "react";
const СodeHowText = ({ codeText = [] }) => {
  return codeText.map((value, i) => (
    <code key={i} className="text_code">
      {value}
    </code>
  ));
};
export default СodeHowText;
