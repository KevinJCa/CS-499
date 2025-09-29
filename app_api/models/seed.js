// Brings in the DB connection and the menu schema
const Mongoose = require('./db');
const Meal = require('./town');

// Read seed data from json file
var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

// Delete any existing records, then insert seed data
const seedDB = async() => {
    await Meal.deleteMany({});
    await Meal.insertMany(meals);
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});