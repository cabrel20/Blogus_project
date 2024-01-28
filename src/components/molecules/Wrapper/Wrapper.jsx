import React from "react";

import { BG_WHITE, BORDER_PRIMARY_100 } from "../../../config/settings";

const Wrapper = ({ children }) => {
  return (
    <div className={`w-full h-full flex flex-col relative ${BG_WHITE}`}>
      {children}
    </div>
  );
};

export default Wrapper;
