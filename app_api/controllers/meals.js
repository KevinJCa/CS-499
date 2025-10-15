const mongoose = require('mongoose');
const Meal = require('../models/town'); // Register model
const Model = mongoose.model('meals');

// GET: /meals - lists all the meals on the menu
// Regardless of outcome, response will include HTML status code
// and JSON mesage to the requesting client
const mealsList = async(req, res) => {

    // No filter, return all records;
    const q = await Model.find({}).exec() 

    // Uncomment to show results of query on console
    // console.log(q);

    // If database returns no data
    if(!q) { 
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

// GET: /meals/:name - lists a single meal
// Regardless of outcome, response will include HTML status code
// and JSON mesage to the requesting client
const mealsFindByCode = async(req, res) => {

    // No filter, return all records;
    const q = await Model.find({'code' : req.params.mealCode }).exec() // Return a single meal

    // Uncomment to show results of query on console
    // console.log(q);

    // If database returns no data
    if(!q) { 
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {
    mealsList,
    mealsFindByCode
};

