import React, { useRef, useState } from "react";

import SmallText from "../../atoms/SmallText/SmallText";
import { getDate, getDay, getMonth, getYear } from "../../../utils/helpers";
import { COLOR_PRYMARY_200, CONTAINER } from "../../../config/settings";
import { categories } from "../../../utils/constants";
import { Button, Icon } from "../../atoms";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const CategoryBar = () => {
  // ref of slider container
  const sliderContainer = useRef(null);
  const currentSliderContainer = sliderContainer.current;

  // state for showing  scroll button
  const [isShowLeft, setIsShowLeft] = useState(true);
  const [isShowRight, setIsShowRight] = useState(false);

  // preview scrollLeft value
  const [previewScrollLeft, setPreviewScrollLeft] = useState(0);

  const nextHandler = () => {
    sliderContainer.current.scrollLeft += 300;
    setPreviewScrollLeft(sliderContainer.current.scrollLeft);
    if (sliderContainer.current.scrollLeft >= 0) {
      setIsShowLeft(true);
    }
    if (previewScrollLeft === sliderContainer.current.scrollLeft) {
      setIsShowLeft(false);
    }
    console.log(
      sliderContainer.current.scrollLeft,
      previewScrollLeft,
      isShowLeft
    );
  };

  const previousHandler = () => {
    //const currentSliderContainer = sliderContainer.current;

    sliderContainer.current.scrollLeft -= 300;
    if (previewScrollLeft >= 0) {
      setIsShowRight(true);
    }
    if (previewScrollLeft === 0) {
      setIsShowRight(false);
    }
    console.log(sliderContainer.current.scrollLeft, isShowRight);
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

        {/* Category  */}
        <div
          ref={sliderContainer}
          className=" overflow-hidden max-w-[988px] flex items-center gap-5 scroll-smooth"
        >
          {/* button  */}
          {isShowLeft && (
            <div className="icon-wrapper-right absolute right-6 px-6 z-10">
              <Icon
                icon={<IoChevronForward size={20} />}
                onClick={nextHandler}
              />
            </div>
          )}
          <div className={` w-full flex items-center gap-5`}>
            {categories.map((category, index) => (
              <Button
                noCustom={true}
                nameButton={category.titleCategory}
                key={index}
              />
            ))}
          </div>
          {/* button  */}
          {isShowRight && (
            <div className="icon-wrapper-left absolute left-28 px-6 z-10">
              <Icon
                icon={
                  <IoChevronBackOutline size={20} onClick={previousHandler} />
                }
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryBar;
