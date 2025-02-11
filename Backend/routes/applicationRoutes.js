const express = require('express');
const Application = require('../DBmodels/application');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

// Apply for a job
router.post('/postJob', authenticate, async(req, res) => {
    const { job, applicant, status, coverLetter, resume} = req.body;

    try{
        const application = new Application({
            job,
            applicant: req.user.id,
            status,
            coverLetter,
            resume
        });

  
        res.status(201).json(application);
    }
    catch(error){
        res.status(500).json({message: 'Error applying for job', error});
    }
});

// Get applications for a job
router.get('/:jobId', authenticate, async(req, res) => {
    try{
        ~
        res.status(200).json(applications);
    }
    catch(error){
        res.status(500).json({message: 'Error fetching applications', error});
    }
});

module.exports = router;