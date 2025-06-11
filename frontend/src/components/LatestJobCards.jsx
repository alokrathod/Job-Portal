import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-4 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer w-full max-w-md mx-auto">
      <div className="mb-2">
        <h1 className="font-medium text-base sm:text-lg">Company name</h1>
        <p className="text-sm text-gray-500">Location</p>
      </div>
      <div className="mb-3">
        <h1 className="font-bold text-base sm:text-lg my-1">Job title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-2">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          Job Openings
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Job type
        </Badge>
        <Badge className="text-[#7209B7] font-bold" variant="ghost">
          Salary (LPA)
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
