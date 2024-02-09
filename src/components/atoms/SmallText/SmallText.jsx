import React from "react";
import { COLOR_PRYMARY_100, COLOR_PRYMARY_200 } from "../../../config/settings";

const SmallText = ({ children, bold }) => {
  return (
    <h1
      className={`text-md ${
        bold && "font-bold"
      } ${COLOR_PRYMARY_200} hover:text-black transition-all ease-in-out`}
    >
      {children}
    </h1>
  );
};

export default SmallText;
