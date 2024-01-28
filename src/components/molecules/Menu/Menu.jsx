import React from "react";

import Wrapper from "../Wrapper/Wrapper";
import { MenuItem } from "../../atoms";
import { menuProfile } from "../../../config/routes";
import { BORDER_PRIMARY_100 } from "../../../config/settings";
import { CiLogout } from "react-icons/ci";

const Menu = () => {
  return (
    <div className="relative  transition-all ease-in-out duration-100 ">
      <div className="h-10 w-10 absolute top-0 -right-5 "></div>
      <div
        className={`w-60 absolute py-4 top-14 -right-6 z-20 shadow-app bg-white`}
      >
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
          <MenuItem title="Sign Out" icon={<CiLogout size={20} />} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
