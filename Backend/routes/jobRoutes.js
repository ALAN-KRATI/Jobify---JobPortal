const express = require('express');
const JobPosting = require('../DBmodels/jobPosting.js');
const { authenticate } = require('../middleware/authenticate.js');

const router = express.Router();

// Post a job

router.post("/jobPost", async (req, res) => {
    try{
        const job = new JobPosting(req.body);
        await job.save();
        res.status(201).json(job);
    } catch(error){
        res.status(500).json({error : error.message});
    }
});


// Get all jobs
rrouter.get("/allJobs", async (req, res) => {
    try {
      let query = {};
  
      // Location (Case-insensitive)
      if (req.query.location) {
        query.location = { $regex: new RegExp(req.query.location, "i") };
      }
  
      // Salary Range
      if (req.query.minSalary || req.query.maxSalary) {
        query["salary.min"] = req.query.minSalary ? { $gte: Number(req.query.minSalary) } : undefined;
        query["salary.max"] = req.query.maxSalary ? { $lte: Number(req.query.maxSalary) } : undefined;
      }
  
      // Job Type
      if (req.query.jobType) {
        const validJobTypes = ["full-time", "part-time", "contract", "internship"];
        if (validJobTypes.includes(req.query.jobType.toLowerCase())) {
          query.jobType = req.query.jobType.toLowerCase();
        }
      }
  
      // Skills (Check if at least one skill matches)
      if (req.query.skills) {
        const skillsArray = req.query.skills.split(",").map(skill => skill.trim());
        query.skillRequired = { $in: skillsArray };
      }
  
      // Experience Level
      if (req.query.experienceLevel) {
        query.experienceLevel = { $gte: Number(req.query.experienceLevel) };
      }
  
      const jobs = await Job.find(query);
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
module.exports = router;