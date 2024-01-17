import React from "react";

import { BORDER_PRIMARY_100, CONTAINER } from "../../../config/settings";
import Logo from "../../atoms/Logo/Logo";
import { Button, Input } from "../../atoms";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <React.Fragment>
      <div
        className={`flex items-center justify-between py-3 border-b border-dashed  ${BORDER_PRIMARY_100} ${CONTAINER}`}
      >
        <div className="flex items-center gap-4">
          <Logo />
          <Input
            rounded="rounded-full"
            placeholder="Search..."
            icon={<CiSearch size={20} />}
          />
        </div>

        <div className="flex items-center gap-5">
          <Button nameButton="Sign In" custom={true} />
          <Button nameButton="Log In" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
