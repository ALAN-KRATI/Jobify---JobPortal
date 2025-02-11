const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobPosting',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: String,
        enums: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    coverLetter: {
        type: String
    },
    resume: {
        type: String
    }
}, {timestamps: true});

const applicationModel = mongoose.model('application', applicationSchema);
module.exports = applicationModel;
