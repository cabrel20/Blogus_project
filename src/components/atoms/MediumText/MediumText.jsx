import React from "react";
import { COLOR_PRYMARY_200_1 } from "../../../config/settings";

const MediumText = ({ children, bold }) => {
  return (
    <h1 className={`text-md ${bold && " font-bold"} ${COLOR_PRYMARY_200_1}`}>
      {children}
    </h1>
  );
};

export default MediumText;
