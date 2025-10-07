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

// POST: /meals - Adds a new Meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsAddMeal = async(req, res) => {
    const newMeal = new Meal({
        code: req.body.code,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price
    });

    const q = await newMeal.save();

        if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new meal
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the following line to show results of operation on the console
        // console.log(q)
};

// PUT: /meals/:mealCode - Edits a Meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsUpdateMeal = async(req, res) => {

    // Uncomment for debugging
    // console.log(req.params);
    // console.log(req.body);

    const q = await Model.findOneAndUpdate(
        { 'code' : req.params.mealCode}, 
        {
            code: req.body.code,
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price
        }
    ).exec();

    if (!q)
    { // Database returned no data
        return res.status(400).json(err);
    } else { // Return resulting updated trip
        return res.status(201).json(q);
    }

        // Uncomment the following line to show results of operation on the console
        // console.log(q)
};

// DELETE: /meals/:mealCode - Removes a Meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsRemoveMeal = async(req, res) => {

    // No filter, return all records;
    const q = await Model.deleteOne({'code' : req.params.mealCode }).exec() // Delete a single meal using its code

    // Uncomment to show results of query on console
    // console.log(q);

    // If database returns no data
    if(!q) { 
        return res.status(404).json(err);
    } else {
        return res.status(200).json(q);
    }
}

module.exports = {
    mealsList,
    mealsFindByCode,
    mealsAddMeal,
    mealsUpdateMeal,
    mealsRemoveMeal
};

