import React from "react";
import {
  BG_PRIMARY_300,
  COLOR_PRYMARY_100,
  COLOR_PRYMARY_200,
  COLOR_WHITE,
  ROUNDED,
} from "../../../config/settings";
import SmallText from "../SmallText/SmallText";
import { Link } from "react-router-dom";

const Button = ({
  nameButton,
  custom,
  noCustom,
  onClick,
  link,
  width,
  paddingY,
}) => {
  return (
    <React.Fragment>
      <Link to={link}>
        {!noCustom && (
          <button
            onClick={onClick}
            className={` ${width} px-12 ${
              paddingY ? paddingY : "py-2"
            } text-sm hover:bg-gray-500 transition-all ease-in-out ${ROUNDED} ${
              custom ? COLOR_WHITE + BG_PRIMARY_300 : "border border-black"
            }`}
          >
            {nameButton}
          </button>
        )}
      </Link>
      <Link to={link}>
        {noCustom && (
          <button
            onClick={onClick}
            className={
              COLOR_PRYMARY_200 +
              `hover:text-gray-700 ${paddingY ? paddingY : "py-2"} ${width}`
            }
          >
            {!link && <SmallText>{nameButton}</SmallText>}
            {link && (
              <Link to={link}>
                <SmallText>{nameButton}</SmallText>
              </Link>
            )}
          </button>
        )}
      </Link>
    </React.Fragment>
  );
};

export default Button;
