import React from "react";
import { BG_PRIMARY_100, BG_PRIMARY_200 } from "../../../config/settings";

const SkeletonCategory = () => {
  return <div className={`animate-pulse w-full h-12 ${BG_PRIMARY_100}`}></div>;
};

export default SkeletonCategory;
