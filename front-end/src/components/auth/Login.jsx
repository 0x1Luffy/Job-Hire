import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup} from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label> Email </Label>
            <Input type="email" placeholder="dummy@gmail.com" />
          </div>
          <div className="my-2">
            <Label> Password</Label>
            <Input type="password" placeholder="Chetan" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className='w-full my-4'>Login</Button>
          <span className="text-sm">Dont't Have an Account <Link to="/signup" className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
