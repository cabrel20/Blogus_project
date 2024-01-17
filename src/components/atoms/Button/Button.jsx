import React from "react";
import { BG_PRIMARY_300, COLOR_WHITE } from "../../../config/settings";

const Button = ({ nameButton, custom }) => {
  return (
    <React.Fragment>
      <button
        className={` px-12 py-2 ${
          custom
            ? COLOR_WHITE +
              BG_PRIMARY_300 +
              `hover:bg-gray-500 transition-all ease-in-out`
            : "border border-black"
        }`}
      >
        {nameButton}
      </button>
    </React.Fragment>
  );
};

export default Button;
