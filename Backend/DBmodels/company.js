const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    industry: {
        type: String
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
}, {timestamps: true})

const companyModel = mongoose.model('Company', companySchema);
module.exports = companyModel;