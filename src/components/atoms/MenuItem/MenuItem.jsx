import React from "react";
import {
  BG_PRIMARY_100,
  BG_WHITE,
  HOVER_PRIMARY_100,
} from "../../../config/settings";
import { Link } from "react-router-dom";

const MenuItem = ({ title, icon, link }) => {
  return (
    <Link to={link}>
      <div
        className={`flex gap-3 items-center p-3 ${BG_WHITE} ${HOVER_PRIMARY_100}`}
      >
        <span>{icon}</span>
        <h1>{title}</h1>
      </div>
    </Link>
  );
};

export default MenuItem;
