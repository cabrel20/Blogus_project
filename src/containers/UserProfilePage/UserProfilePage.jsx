import React from "react";

//import { BigText } from "../../components/atoms";
import { NavBar, StoryCard } from "../../components/molecules";
import {
  Avatar,
  BigText,
  Button,
  MediumText,
  SmallText,
} from "../../components/atoms";
import { BORDER_PRIMARY_100, CONTAINER } from "../../config/settings";
import { useSelected } from "../../context/UseSelected";
import { menuItemsUserProfile } from "../../utils/constants";

const UserProfilePage = () => {
  const [isSelceted, changeItemHandler] = useSelected(menuItemsUserProfile[0]);

  return (
    <>
      <NavBar />
      <div className={`flex ${CONTAINER} gap-20`}>
        <div className="w-2/3 space-y-5 my-8">
          <BigText>Yann Fonkoue</BigText>
          <div
            className={` flex items-center space-x-20 relative w-full border-b py-3 ${BORDER_PRIMARY_100}`}
          >
            {menuItemsUserProfile.map((item, index) => (
              <div
                key={index}
                onClick={() => changeItemHandler(item)}
                className={`absolute ${
                  isSelceted === item && "border-b border-black "
                } top-0 cursor-pointer transition-all  ease-linear`}
              >
                <SmallText>{item}</SmallText>
              </div>
            ))}
          </div>
          <div className=" w-full space-y-5 pt-8">
            <StoryCard />
            <StoryCard />
            <StoryCard />
          </div>
        </div>
        <div className={`w-1/3 border-l h-screen py-8 ${BORDER_PRIMARY_100}`}>
          <div className=" flex flex-col px-10">
            <div className=" space-y-4">
              <Avatar height="h-20 " width=" w-20" />
              <MediumText>Yann Fonkoue</MediumText>
            </div>
            <Button nameButton="edit profile" noCustom={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
