const express = require("express"); // Express app
const router = express.Router(); // Router logic
const jwt = require('jsonwebtoken'); // Enables JSON web tokens

// Imports the controllers that will be routed
const mealsController = require("../controllers/meals");
const authController = require("../controllers/authentication");

// Method to authenticate our JWT.
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');

    const authHeader = req.headers['authorization'];
    // console.log('Auth Header: ' +authHeader);

    if(authHeader == null)
    {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1)
    {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token);
    
    if(token == null)
    {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }
 
    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token));
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err)
        {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth param to the decoded object
    });
    next(); // We need to continue or this will hang forever.
}

// Registers the new route for the registration controller
router.route("/register").post(authController.register);
// Defines route for login endpoint
router.route("/login").post(authController.login);

// Defines route for our meals endpoint
// GET method routes mealList
// POST method adds a meal
router.route("/meals").get(mealsController.mealsList) 
                      .post(authenticateJWT, mealsController.mealsAddMeal); 

// GET method routes mealsFindByName - requires parameter
// PUT method routes mealsUpdateMeal - requires parameter
// DELETE method routes mealsRemoveMeal - requires parameter
router.route("/meals/:mealCode").get(mealsController.mealsFindByCode)
                                .put(authenticateJWT, mealsController.mealsUpdateMeal)
                                .delete(authenticateJWT, mealsController.mealsRemoveMeal);

module.exports = router;