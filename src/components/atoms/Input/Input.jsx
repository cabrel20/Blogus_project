import React from "react";

import { BG_PRIMARY_100, COLOR_PRYMARY_200 } from "../../../config/settings";

const Input = ({ rounded, onChange, placeholder, icon }) => {
  return (
    <React.Fragment>
      <div className={`w-64 h-12 relative`}>
        {icon && (
          <span className={`absolute top-3 left-2 ${COLOR_PRYMARY_200}`}>
            {icon}
          </span>
        )}
        <input
          placeholder={placeholder}
          onChange={onChange}
          type="text"
          className={`text-sm px-10 h-full w-full outline-none ${BG_PRIMARY_100} ${COLOR_PRYMARY_200} ${rounded}`}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
