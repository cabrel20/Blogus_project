import React from "react";
import { SkeletonCard, SkeletonCategory } from "../../atoms";
import { CONTAINER } from "../../../config/settings";

const Skeleton = () => {
  return (
    <div className={CONTAINER + `py-8`}>
      <div className="flex items-center gap-5">
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
        <SkeletonCategory />
      </div>
      <div className=" grid grid-cols-3 gap-8 py-8">
        <div className=" flex flex-col gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className=" flex flex-col gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className=" flex flex-col gap-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
