import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
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
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied ? "bg-gray-600" : "bg-[#7209B7] hover:bg-[#9472ce]"
          }`}
        >
          {isApplied ? "Already applied" : "Apply now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gary-300 font-medium py-2">
        Job description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Backend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">Hyderabad</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe
            sint quos nulla dolor corporis.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">2 years</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">15 LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">4</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted on:{" "}
          <span className="pl-4 font-normal text-gray-800">12-06-2025</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
