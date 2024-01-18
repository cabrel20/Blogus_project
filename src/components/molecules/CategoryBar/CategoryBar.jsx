import React, { useState } from "react";

import SmallText from "../../atoms/SmallText/SmallText";
import { getDate, getDay, getMonth, getYear } from "../../../utils/helpers";
import { COLOR_PRYMARY_200, CONTAINER } from "../../../config/settings";
import { categories } from "../../../utils/constants";
import { Button, Icon } from "../../atoms";
import { IoChevronForward } from "react-icons/io5";

const CategoryBar = () => {
  return (
    <React.Fragment>
      <div className={`flex items-center  gap-5 py-5 ${CONTAINER}`}>
        {/* Date part */}
        <div>
          <SmallText>
            <span className="font-bold">{getDay()}</span>
          </SmallText>
          <SmallText>
            <p className={COLOR_PRYMARY_200}>
              {getDate()}, {getMonth().substring(0, 3)} {getYear()}
            </p>
          </SmallText>
        </div>

        {/* button part */}
        {/* <Icon icon={<IoChevronForward size={20} />} /> */}
        {/* Category part */}
        <div className=" overflow-hidden">
          <div
            className={`flex items-center gap-5 transform ease-in-out duration-150`}
          >
            {categories.map((category) => (
              <Button
                noCustom={true}
                nameButton={category.titleCategory}
                key={category.id}
              />
            ))}
          </div>
        </div>
        {/* button part */}
        <Icon icon={<IoChevronForward size={20} />} />
      </div>
    </React.Fragment>
  );
};

export default CategoryBar;
