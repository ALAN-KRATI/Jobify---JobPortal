import { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    jobType: "",
    search: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs", {
          params: filters, // Apply filters when fetching jobs
        });
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [filters]); // Re-fetch when filters change

  // Handle Input Changes
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Filters Section */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="salary"
          placeholder="Min Salary"
          value={filters.salary}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Job Search Bar */}
      <input
        type="text"
        name="search"
        placeholder="Search for jobs..."
        value={filters.search}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Job Listings */}
      <div className="grid gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="p-4 border rounded bg-white shadow-md">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p>{job.company} - {job.location}</p>
              <p>Salary: ${job.salary}</p>
              <p>{job.jobType}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
