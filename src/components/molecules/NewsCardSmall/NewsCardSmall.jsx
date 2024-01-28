import React from "react";
import Topic from "../../atoms/Topic/Topic";
import { Lien, MediumText, SmallText } from "../../atoms";
import { BG_PRIMARY_100, REDIRECT_LINK } from "../../../config/settings";

const img =
  "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXN8ZW58MHx8MHx8fDA%3D";

const NewsCardSmall = () => {
  return (
    <React.Fragment>
      <div className="flex  justify-between gap-3">
        <div className=" space-y-4">
          <div className="flex flex-col w-2/3 gap-3">
            <Topic title="Divertissement" />
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
        <div className="h-36 w-2/3">
          <img
            src={img}
            alt="img_article"
            loading="lazy"
            className={` w-full h-full object-cover ${BG_PRIMARY_100}`}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsCardSmall;
