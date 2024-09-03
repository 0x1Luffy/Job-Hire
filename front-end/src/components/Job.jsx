import React from "react";
import { Button } from "./ui/button";
import { Badge, Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 ">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://clipartcraft.com/images/transparent-background-google-logo-6.png" />
          </Avatar>
        </Button>
        <div className="">
          <h1 className="font-medium text-lg ">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora.
        </p>
      </div>
      <Badge className={"text-blue-700 font-bold"} variant="ghost">
        {" "}
        12 Positions
      </Badge>
      <div className="flex items-center gap-2 mt4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {" "}
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209B7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
