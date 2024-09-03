import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
const filterData = [
  {
    filterType: "Location",
    array: ["Pune", "Mumbai", "Banglore", "Hydrabad", "Kolhapur"],
  },
  {
    filterType: "Industry",
    array: ["Full Stack Developer", "Backend Developer", "Python Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40-1Lakh", "1Lakh-5Lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((elem, index) => (
          <div className="font-bold text-lg">
            <h1>{elem.filterType}</h1>
            {elem.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={index} />
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
