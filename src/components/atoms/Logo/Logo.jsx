import React from "react";

import { COLOR_PRYMARY_300 } from "../../../config/settings";
import { Link } from "react-router-dom";

const Logo = ({ size }) => {
  return (
    <Link to="/">
      <h1
        className={`${
          size ? size : "text-2xl"
        } text-bold logo-font ${COLOR_PRYMARY_300}`}
      >
        Blogus
      </h1>
    </Link>
  );
};

export default Logo;
