import React from "react";

import { BG_WHITE, BORDER_PRIMARY_100 } from "../../../config/settings";

const Wrapper = ({ children }) => {
  return (
    <div className={`w-full h-full flex flex-col relative ${BG_WHITE}`}>
      <span
        className={`absolute bg-red-400 -top-0 w-0 h-0 border-r border-l border-b ${BORDER_PRIMARY_100}`}
      ></span>
      {children}
    </div>
  );
};

export default Wrapper;
