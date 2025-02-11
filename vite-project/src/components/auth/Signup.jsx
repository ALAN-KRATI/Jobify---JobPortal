import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom"; // ✅ Use navigate to redirect after signup
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate(); // ✅ Hook to redirect users after signup
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submitting Signup Data:", input);  // ✅ Debugging Log

    try {
        const res = await axios.post("http://localhost:5000/api/users/signup", input);
        console.log("Signup Successful. Token:", res.data.token);  // ✅ Debugging Log
        alert("Signup successful! Redirecting to login...");
        navigate("/login");
    } catch (err) {
        console.error("Signup Error:", err.response?.data);
        alert(err.response?.data?.error || "Signup failed! Try again.");
    }
};


  return (
    <div className="flex items-center justify-center max-w-6xl mx-auto my-10">
      <form onSubmit={submitHandler} className="w-1/2 p-6 bg-white bg-opacity-80 rounded-md my-10 shadow-md shadow-gray-400">
        <h1 className="font-bold text-2xl text-center text-c1">Sign Up <span className="text-zinc-600">Today to get Hired!</span></h1>

        <div className="my-2">
          <Label className="font-bold">Full Name</Label>
          <Input type="text" name="fullname" value={input.fullname} onChange={changeEventHandler} placeholder="Enter your full name" required />
        </div>

        <div className="my-2">
          <Label className="font-bold">Phone no.</Label>
          <Input type="number" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} placeholder="Enter your Phone No." required />
        </div>

        <div className="my-2">
          <Label className="font-bold">Email Address</Label>
          <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="Enter your Email" required />
        </div>

        <div className="my-2">
          <Label className="font-bold">Password</Label>
          <Input type="password" name="password" value={input.password} onChange={changeEventHandler} placeholder="Enter the password" required />
        </div>

        <div className="my-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="student" checked={input.role === "student"} onChange={changeEventHandler} required />
              <Label className="font-bold">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input type="radio" name="role" value="recruiter" checked={input.role === "recruiter"} onChange={changeEventHandler} required />
              <Label className="font-bold">Recruiter</Label>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full my-4 bg-c1 hover:bg-c2">SIGN UP</Button>
        <span className="text-sm">Already registered? <Link to="/login" className="mx-4 text-c2">Login</Link></span>
      </form>
    </div>
  );
};

export default Signup;
