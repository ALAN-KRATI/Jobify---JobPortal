import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";

const PostJob = () => {
    const [job, setJob] = useState({
        title: "",
        description: "",
        skillRequired: "",
        minSalary: "",
        maxSalary: "",
        experienceLevel: "",
        location: "",
        jobType: "",
        company: "",
        posted_by: "",
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(job),
            });
            const data = await response.json();
            console.log("Job posted:", data);
        } catch (error) {
            console.error("Error posting job:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white bg-opacity-80 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-c1 mb-4">Let’s hire your next great candidate</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='my-2'>
                        <Label className='font-bold'>Job Title</Label>
                        <Input type="text" name="title" value={job.title} onChange={handleChange} placeholder="Job Title" />
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Job Description</Label>
                        <textarea name="description" value={job.description} onChange={handleChange} placeholder="Job Description" className="p-2 border rounded w-full"></textarea>
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Skills Required (comma-separated)</Label>
                        <Input type="text" name="skillRequired" value={job.skillRequired} onChange={handleChange} placeholder="e.g., React, Node.js, MongoDB" />
                    </div>
                    <div className='my-2 flex gap-4'>
                        <div>
                            <Label className='font-bold'>Min Salary</Label>
                            <Input type="number" name="minSalary" value={job.minSalary} onChange={handleChange} placeholder="Min Salary" />
                        </div>
                        <div>
                            <Label className='font-bold'>Max Salary</Label>
                            <Input type="number" name="maxSalary" value={job.maxSalary} onChange={handleChange} placeholder="Max Salary" />
                        </div>
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Experience Level (Years)</Label>
                        <Input type="number" name="experienceLevel" value={job.experienceLevel} onChange={handleChange} placeholder="Experience Level" />
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Location</Label>
                        <Input type="text" name="location" value={job.location} onChange={handleChange} placeholder="Location" />
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Positions Available</Label>
                        <Input type="number" name="positions" value={job.positions} onChange={handleChange} placeholder="Number of Positions" />
                    </div>
                    <div className='my-2'>
                        <Label className='font-bold'>Job Type</Label>
                        <select name="jobType" value={job.jobType} onChange={handleChange} className="p-2 border rounded w-full">
                            <option value="">Select Job Type</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                    <Button type="submit" className="w-full bg-c1 hover:bg-c2">POST JOB</Button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;
