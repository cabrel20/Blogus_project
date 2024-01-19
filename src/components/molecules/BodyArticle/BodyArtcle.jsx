import React from "react";

import {
  BORDER,
  BORDER_PRIMARY_100,
  CONTAINER,
} from "../../../config/settings";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardMedium from "../NewsCardMedium/NewsCardMedium";
import { IoChevronForward } from "react-icons/io5";
import { CategoryNewsCard } from "../../atoms";
import NewsCardSmall from "../NewsCardSmall/NewsCardSmall";

const BodyArtcle = () => {
  return (
    <React.Fragment>
      <div className={` grid grid-cols-3  my-4 ${CONTAINER}`}>
        <div className={`flex flex-col px-4`}>
          <CategoryNewsCard
            title="Archeology"
            icon={<IoChevronForward size={20} />}
          />
          <div className=" space-y-16">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
        <div
          className={`flex flex-col gap-4 px-4  ${BORDER + BORDER_PRIMARY_100}`}
        >
          <CategoryNewsCard title="Latest News" />
          <div className=" space-y-16">
            <NewsCardMedium />
            <NewsCardMedium />
            <NewsCardMedium />
          </div>
        </div>
        <div className={`flex flex-col  px-4`}>
          <CategoryNewsCard title="Most Read" />
          <div className=" grid grid-cols-1  space-y-16">
            <NewsCardSmall />
            <NewsCardSmall />
            <NewsCardSmall />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BodyArtcle;
