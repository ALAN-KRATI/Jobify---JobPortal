const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Job-Seeker', 'Recruiter'],
        required: true
    },
    profile: {
        bio: {
            type: String
        },
        skills: [{
            type: String
        }],
        resume: {
            type: String
        },
        portfolio: {
            type: String
        },
        profilePicture: {
            type: String,
            default: ""
        }
    },

}, {timestamps: true});

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;