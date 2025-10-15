const express = require("express"); // Express app
const router = express.Router(); // Router logic

// Imports the controllers that will be routed
const mealsController = require("../controllers/meals");

// Defines route for our meals endpoint
router.route("/meals").get(mealsController.mealsList); // GET Method routes mealList

// GET Method routes mealsFindByName - requires parameter
router.route("/meals/:mealCode").get(mealsController.mealsFindByCode);

module.exports = router;