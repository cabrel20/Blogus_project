import React from "react";
import { BG_PRIMARY_100, HOVER_PRIMARY_100 } from "../../../config/settings";

const Icon = ({ icon, onClick }) => {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center h-9 w-9 rounded-full ${HOVER_PRIMARY_100}`}
      >
        {icon}
      </button>
    </React.Fragment>
  );
};

export default Icon;
