import React from "react";
import { Link } from "react-router-dom";
import { COLOR_SECONDARY } from "../../../config/settings";

export const Lien = ({ path, titleLink }) => {
  return (
    <Link
      to={path}
      className={`text-md font-bold underline ${COLOR_SECONDARY}`}
    >
      {titleLink}
    </Link>
  );
};
