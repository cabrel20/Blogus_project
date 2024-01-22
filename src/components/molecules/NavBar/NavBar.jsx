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
import { ROUTES_APP } from "../../../config/routes";

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
            width="w-64"
            padding="px-10"
            type="search"
            icon={<CiSearch size={25} />}
          />
        </div>

        <div className="flex items-center gap-5">
          <Button
            nameButton="Sign Up"
            custom={true}
            link={ROUTES_APP[0].path}
          />
          <Button nameButton="Log In" link={ROUTES_APP[0].path} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
