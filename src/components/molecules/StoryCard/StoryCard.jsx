import React from "react";

import { Avatar, Icon, MediumText, SmallText } from "../../atoms";
import { BG_PRIMARY_100, BG_PRIMARY_200 } from "../../../config/settings";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const image =
  "https://cdn.dribbble.com/users/1798295/screenshots/5899990/media/8c1063b7edb2f22c3c4b1ce94cac503e.png?resize=450x338&vertical=center";

const StoryCard = () => {
  return (
    <div className={` w-full h-40 flex items-start ${BG_PRIMARY_100}`}>
      <div className=" flex items-center gap-3 py-5">
        <div className="px-5 space-y-3">
          <div className=" flex justify-between">
            <div className=" flex items-center gap-3">
              <Avatar width=" w-8 " height=" h-8 " />
              <SmallText>Yann Fonkoue</SmallText>
            </div>
            <Icon icon={<HiOutlineDotsHorizontal size={20} />} />
          </div>
          <div>
            <MediumText bold={true}>
              {" "}
              For 'Fantastic Beats' series, a Case of Diminishing Returns
            </MediumText>
          </div>
        </div>
      </div>
      <div className="h-full w-2/5">
        <img
          src={image}
          alt="story image"
          className={` h-full w-full object-cover ${BG_PRIMARY_200}`}
        />
      </div>
    </div>
  );
};

export default StoryCard;
