import React from "react";
import Topic from "../../atoms/Topic/Topic";
import { Lien, MediumText, SmallText } from "../../atoms";
import { BG_PRIMARY_100, REDIRECT_LINK } from "../../../config/settings";

const img =
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NewsCardSmall = () => {
  return (
    <React.Fragment>
      <div className="flex  justify-between gap-3">
        <div className=" space-y-4">
          <div className="flex items-center gap-3">
            <Topic title="Crypto" />
            <SmallText>June 12, 2022</SmallText>
          </div>
          <div>
            <span className="font-bold">
              <MediumText>
                Nicola Sturgeon Reported to Police Over Apparent Face mask Law
                Breach
              </MediumText>
            </span>
            <Lien titleLink={REDIRECT_LINK} />
          </div>
        </div>
        <img
          src={img}
          alt="img_article"
          loading="lazy"
          className={` h-36 w-1/3 object-cover ${BG_PRIMARY_100}`}
        />
      </div>
    </React.Fragment>
  );
};

export default NewsCardSmall;
