const mongoose = require('mongoose');

// Defines the sub-schema for each meal within the array
const mealSchema = new mongoose.Schema({
    code: { type: String, Required: true, index: true},
    name: { type: String, required: true, index: true},
    image: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: String, required: true}
});

// Defines the menu schema that includes the different arrays of menuSchema objects based on meal type
const menuSchema = new mongoose.Schema({
    breakfast: [mealSchema],
    lunch: [mealSchema],
    dinner: [mealSchema]
});

const Meal = mongoose.model('meals', mealSchema);
module.exports = Meal;
