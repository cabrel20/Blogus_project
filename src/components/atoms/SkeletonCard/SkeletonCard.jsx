import React from "react";
import { BG_PRIMARY_100 } from "../../../config/settings";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className={`w-3/5 h-8 animate-pulse ${BG_PRIMARY_100}`}></div>
      <div className={`w-full h-44 animate-pulse ${BG_PRIMARY_100}`}></div>
      <div className={`w-4/5 h-8 animate-pulse ${BG_PRIMARY_100}`}></div>
      <div className={`w-4/5 h-8 animate-pulse ${BG_PRIMARY_100}`}></div>
    </div>
  );
};

export default SkeletonCard;
