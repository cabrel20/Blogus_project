import React from "react";
import { COLOR_PRYMARY_300 } from "../../../config/settings";

const BigText = ({ children }) => {
  return (
    <h1 className={`text-2xl font-bold ${COLOR_PRYMARY_300}`}>{children}</h1>
  );
};

export default BigText;
