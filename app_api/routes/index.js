const express = require("express"); // Express app
const router = express.Router(); // Router logic

// Imports the controllers that will be routed
const mealsController = require("../controllers/meals");

// Defines route for our meals endpoint
// GET method routes mealList
// POST method adds a meal
router.route("/meals").get(mealsController.mealsList) 
                      .post(mealsController.mealsAddMeal); 

// GET method routes mealsFindByName - requires parameter
// PUT method routes mealsUpdateMeal - requires parameter
router.route("/meals/:mealCode").get(mealsController.mealsFindByCode)
                                .put(mealsController.mealsUpdateMeal);

module.exports = router;