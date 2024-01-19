import React, { useRef } from "react";

import SmallText from "../../atoms/SmallText/SmallText";
import { getDate, getDay, getMonth, getYear } from "../../../utils/helpers";
import { COLOR_PRYMARY_200, CONTAINER } from "../../../config/settings";
import { categories } from "../../../utils/constants";
import { Button, Icon } from "../../atoms";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const CategoryBar = () => {
  //const leftButton = document.getElementById("leftButton");
  const sliderContainer = useRef(null);

  const nextHandler = () => {
    sliderContainer.current.scrollLeft += 300;
    console.log(sliderContainer.current.scrollLeft);
  };

  return (
    <React.Fragment>
      <div className={`flex items-center relative gap-2 py-5 ${CONTAINER}`}>
        {/* Date part */}
        <div className="px-5">
          <SmallText>
            <span className="font-bold">{getDay()}</span>
          </SmallText>
          <SmallText>
            <span className={COLOR_PRYMARY_200 + "flex items-center gap-1"}>
              <span>{getDate()}</span>,<span>{getMonth().substring(0, 3)}</span>
              <span> {getYear()}</span>
            </span>
          </SmallText>
        </div>

        {/* button part */}
        {/* <Icon icon={<IoChevronForward size={20} />} /> */}
        {/* Category part */}
        <div className=" overflow-hidden  flex items-center gap-5">
          <div className="icon-wrapper-right absolute right-6 px-6 z-10">
            <Icon icon={<IoChevronForward size={20} />} />
          </div>
          <div
            ref={sliderContainer}
            className={` flex items-center gap-5 scroll-smooth`}
          >
            {categories.map((category, index) => (
              <Button
                noCustom={true}
                nameButton={category.titleCategory}
                key={index}
              />
            ))}
          </div>
          {/* button part */}
          {/* <div className="icon-wrapper-left absolute left-34 px-6 z-10">
            <Icon
              icon={<IoChevronBackOutline size={20} onClick={nextHandler} />}
            />
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryBar;
