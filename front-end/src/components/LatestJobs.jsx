import React from "react";
import LatestJobsCards from "./LatestJobsCards";

const randomJobs = [1,2,3,4,4,5];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Fresh for Freshers</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5 ">
      {
        randomJobs.slice(0,6).map((job, index) => <LatestJobsCards/>)
      }
      </div>
    </div>
  );
};

export default LatestJobs;
