import React from "react";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/shared/Navbar";
import Job from "../components/Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex gap-5 flex-col md:flex-row">
          {/* Filter Sidebar */}
          <div className="w-full md:w-1/5">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div className="w-full md:w-4/5">
            {allJobs.length === 0 ? (
              <span>No Jobs Found</span>
            ) : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4">
                  {allJobs.map((job, index) => (
                    <div>
                      <Job key={job?._id} job={job} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
