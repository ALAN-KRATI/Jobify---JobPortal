const express = require('express');
const Company = require('../DBmodels/company');
const { authenticate } = require('../middleware/authenticate');

const router = express.Router();

// Create a new Company
router.post('/newComapany', authenticate, async(req, res) => {
    const { name, description, website, location, industry, employees = []} = req.body;

    try{
        const newComapany = new Company({name, description, website, location, industry, employees});
        await newComapany.save();
        res.status(201).json(newComapany);
    }
    catch(error){
        res.status(500).json({message: 'Error creating company', error});
    }
});

// Get company details
router.get('/:id', async (req, res) => {
    try{
        const company = await Company.findById(req.params.id).populate('employees');
        res.status(200).json(company);
    }
    catch(error){
        res.status(500).json({message: 'Company not found', error});
    }
});

module.exports = router;