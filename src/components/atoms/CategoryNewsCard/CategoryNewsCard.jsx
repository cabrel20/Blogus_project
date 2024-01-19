import React from "react";
import Icon from "../Icon/Icon";
import BigText from "../BigText/BigText";

const CategoryNewsCard = ({ title, icon }) => {
  return (
    <React.Fragment>
      <div className="flex items-center gap-1 py-4">
        <BigText>{title}</BigText>
        {icon && <Icon icon={icon} />}
      </div>
    </React.Fragment>
  );
};

export default CategoryNewsCard;
