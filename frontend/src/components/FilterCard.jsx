import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Hyderabad", "Banglore", "Mumbai", "Chennai", "Pune", "Delhi"],
  },
  {
    filterType: "Category",
    array: [
      "Software Development",
      "Marketing",
      "Finance",
      "Design",
      "HR",
      "Sales",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-5 LPA", "5-10 LPA", "10-15 LPA", "15-20 LPA", "20-25 LPA"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
