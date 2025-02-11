const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skillRequired: [{
        type: String,
    }],
    salary: {
        min: { type: Number },
        max: { type: Number },
    },
    experienceLevel: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
        required: true
    },
    positions: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    posted_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }] 
}, {timestamps: true});

const JobPostingModel = mongoose.model('JobPosting', jobPostingSchema);
module.exports = JobPostingModel;