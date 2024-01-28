import React, { useRef, useState } from "react";

import SmallText from "../../atoms/SmallText/SmallText";
import { getDate, getDay, getMonth, getYear } from "../../../utils/helpers";
import {
  COLOR_PRYMARY_200,
  CONTAINER,
  SCROLLVALUE,
} from "../../../config/settings";
import { categories } from "../../../utils/constants";
import { Button, Icon } from "../../atoms";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

const CategoryBar = () => {
  // ref of slider container
  const sliderContainer = useRef(null);

  // state for showing  scroll button
  const [isShowLeft, setIsShowLeft] = useState(true);
  const [isShowRight, setIsShowRight] = useState(false);

  // preview scrollLeft value
  const [previewScrollLeft, setPreviewScrollLeft] = useState(0);

  // scroll next handler
  const nextHandler = () => {
    setPreviewScrollLeft((sliderContainer.current.scrollLeft += SCROLLVALUE));
    sliderContainer.current.scrollLeft += SCROLLVALUE;

    if (sliderContainer.current.scrollLeft >= 0) {
      setIsShowLeft(true);
      setIsShowRight(true);
    }
    if (
      previewScrollLeft === sliderContainer.current.scrollLeft &&
      previewScrollLeft !== 0
    ) {
      setIsShowLeft(false);
    }
  };

  // scroll previous handler
  const previousHandler = () => {
    sliderContainer.current.scrollLeft -= SCROLLVALUE;
    setPreviewScrollLeft((sliderContainer.current.scrollLeft -= SCROLLVALUE));

    if (sliderContainer.current.scrollLeft > 0) {
      setIsShowRight(true);
      setIsShowLeft(true);
    }
    if (previewScrollLeft === sliderContainer.current.scrollLeft) {
      setIsShowRight(false);
      setIsShowLeft(true);
    }
  };

  return (
    <React.Fragment>
      <div className={`flex items-center  gap-2 py-5 ${CONTAINER}`}>
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

        <div className=" relative w-full">
          {/* button left  */}
          {isShowLeft && (
            <div className="icon-wrapper-right absolute right-0 px-6 z-10">
              <Icon
                icon={<IoChevronForward size={20} />}
                onClick={nextHandler}
              />
            </div>
          )}

          <div
            ref={sliderContainer}
            className="overflow-hidden max-w-[988px] flex items-center gap-5 scroll-smooth"
          >
            <div className={` w-full flex items-center gap-2`}>
              {categories.map((category, index) => (
                <Button
                  noCustom={true}
                  nameButton={category.titleCategory}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* button rigth  */}
          {isShowRight && (
            <div className="icon-wrapper-left absolute left-0 top-0 px-6 z-10">
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
