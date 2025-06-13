import Job from "@/components/Job";
import Navbar from "../components/shared/Navbar";
import React from "react";
import { useSelector } from "react-redux";

const Browse = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-lg my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job, index) => {
            return <Job key={job?._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
