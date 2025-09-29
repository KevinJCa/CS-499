const mealsEndpoint = "http://localhost:3000/api/meals";
const Options = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};
// var fs = require('fs');
// var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8')); // Reads the meals data from the JSON file

/* GET menu view */
// Wires up the controller to serve the menu page.
const menu = async function (req, res, next) {
    // console.log('MENU CONTROLLER BEGIN');
    await fetch(mealsEndpoint, Options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) {
                    message = "No meals exist in our database!";
                }
            }
            res.render("menu", {title: "TOWN", meals: json, message}); // 'meals' passes the trips data to the handlebars view
        })
        .catch((err) => res.status(500).send(err.message));
};             

module.exports = {
    menu
};