import React from "react";

import Wrapper from "../Wrapper/Wrapper";
import { MenuItem } from "../../atoms";
import { menuProfile } from "../../../config/routes";
import { BORDER_PRIMARY_100 } from "../../../config/settings";
import { CiLogout } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="relative opacity-0 hover:opacity-100 transition-all ease-in-out duration-100 ">
      <div className="h-10 w-10 absolute top-0 -right-5 "></div>
      <div className={`w-60 absolute  top-10 right-0 z-20 shadow-app bg-none`}>
        <Wrapper>
          {menuProfile.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </Wrapper>
        <div className={` border-t ${BORDER_PRIMARY_100}`}>
          <MenuItem title="Sign Out" icon={<CiLogout size={25} />} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
