import React from "react";

import {
  BG_PRIMARY_100,
  BORDER_PRIMARY_100,
  COLOR_PRYMARY_200,
} from "../../../config/settings";

const Input = ({
  rounded,
  onChange,
  placeholder,
  icon,
  width,
  padding,
  type,
}) => {
  return (
    <React.Fragment>
      <div className={`${width} h-11 relative`}>
        {icon && (
          <span className={`absolute top-2 left-2 ${COLOR_PRYMARY_200}`}>
            {icon}
          </span>
        )}
        <input
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          className={`text-sm border ${BORDER_PRIMARY_100} ${padding} h-full w-full outline-none ${BG_PRIMARY_100} ${COLOR_PRYMARY_200} ${rounded}`}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
