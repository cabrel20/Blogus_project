import React from "react";
import { BG_PRIMARY_100, HOVER_PRIMARY_100 } from "../../../config/settings";
import { Link } from "react-router-dom";

const Icon = ({ icon, onClick, link }) => {
  return (
    <React.Fragment>
      <Link to={link}>
        <button
          onClick={onClick}
          className={`flex flex-col items-center justify-center h-9 w-9 rounded-full ${HOVER_PRIMARY_100}`}
        >
          {icon}
        </button>
      </Link>
    </React.Fragment>
  );
};

export default Icon;
