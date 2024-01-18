import React from "react";
import {
  BG_PRIMARY_300,
  COLOR_PRYMARY_100,
  COLOR_PRYMARY_200,
  COLOR_WHITE,
  ROUNDED,
} from "../../../config/settings";
import SmallText from "../SmallText/SmallText";

const Button = ({ nameButton, custom, noCustom, onClick }) => {
  return (
    <React.Fragment>
      {!noCustom && (
        <button
          onClick={onClick}
          className={` px-12 py-2 text-sm hover:bg-gray-500 transition-all ease-in-out ${ROUNDED} ${
            custom ? COLOR_WHITE + BG_PRIMARY_300 : "border border-black"
          }`}
        >
          {nameButton}
        </button>
      )}
      {noCustom && (
        <button
          onClick={onClick}
          className={COLOR_PRYMARY_200 + `hover:text-gray-700`}
        >
          <SmallText>{nameButton}</SmallText>
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
