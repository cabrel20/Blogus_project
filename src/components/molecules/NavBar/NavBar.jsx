import React from "react";

import {
  BG_WHITE,
  BORDER,
  BORDER_PRIMARY_100,
  CONTAINER,
} from "../../../config/settings";
import Logo from "../../atoms/Logo/Logo";
import { Button, Input } from "../../atoms";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <React.Fragment>
      <div
        className={`flex items-center justify-between py-2 border-b sticky top-0 z-30 ${
          BORDER_PRIMARY_100 + BORDER + BG_WHITE
        } ${CONTAINER}`}
      >
        <div className="flex items-center gap-4">
          <Logo />
          <Input
            rounded="rounded-full"
            placeholder="Search"
            icon={<CiSearch size={25} />}
          />
        </div>

        <div className="flex items-center gap-5">
          <Button nameButton="Sign Up" custom={true} />
          <Button nameButton="Log In" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
