import React from "react";

import { BigText, Lien, MediumText, SmallText } from "../../atoms";
import { BG_PRIMARY_100, REDIRECT_LINK } from "../../../config/settings";
import Topic from "../../atoms/Topic/Topic";

const img =
  "https://images.unsplash.com/photo-1705579830227-64b7df9b1b69?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NewsCard = () => {
  return (
    <React.Fragment>
      <div className=" space-y-5">
        <div className=" w-full h-72 relative">
          <img
            src={img}
            alt="article_img"
            className={`w-full h-full object-cover ${BG_PRIMARY_100}`}
          />
          <Topic title="History" isAbsolute={true} />
        </div>
        <div className=" space-y-5">
          <SmallText>April 17, 2024</SmallText>
          <BigText>
            For 'Fantastic Beats' series, a Case of Diminishing Returns
          </BigText>
          <MediumText>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200
          </MediumText>
          <Lien titleLink={REDIRECT_LINK} path="/" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsCard;
