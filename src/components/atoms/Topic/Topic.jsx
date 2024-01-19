import React from "react";
import { BG_WHITE, BORDER_PRIMARY_100 } from "../../../config/settings";

const Topic = ({ title, isAbsolute }) => {
  return (
    <span
      className={` px-4 py-1 border ${isAbsolute && "absolute top-0 left-0"} ${
        BORDER_PRIMARY_100 + BG_WHITE
      }`}
    >
      {title}
    </span>
  );
};

export default Topic;
