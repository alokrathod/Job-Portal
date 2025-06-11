import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="/icons/companyLogo.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Location</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          deleniti illum rerum exercitationem vitae commodi at saepe ad fugiat
          voluptatibus.
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
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209B7]">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
