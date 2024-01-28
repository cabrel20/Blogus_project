import React from "react";
import { BigText, Lien, SmallText } from "../../atoms";
import Topic from "../../atoms/Topic/Topic";
import { REDIRECT_LINK } from "../../../config/settings";

const NewsCardMedium = () => {
  return (
    <React.Fragment>
      <div className=" space-y-5">
        <div className=" flex items-center gap-3">
          <Topic title="Divertissement" />
          <SmallText>May 20, 2023</SmallText>
        </div>
        <div className="space-y-5">
          <BigText>
            Nicola Sturgeon Reported to Police Over Apparent Face mask Law
            Breach
          </BigText>
          <SmallText>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum
          </SmallText>
        </div>
        <Lien titleLink={REDIRECT_LINK} />
      </div>
    </React.Fragment>
  );
};

export default NewsCardMedium;
