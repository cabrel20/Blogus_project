import React from "react";
import { COLOR_PRYMARY_100, COLOR_PRYMARY_200 } from "../../../config/settings";

const SmallText = ({ children }) => {
  return <h1 className={`text-md ${COLOR_PRYMARY_200}`}>{children}</h1>;
};

export default SmallText;
