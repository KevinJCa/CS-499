var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8')); // Reads the meals data from the JSON file

/* GET menu view */
// Wires up the controller to serve the menu page.
const menu = (req, res) => {
    res.render('menu', { title: 'TOWN', meals}); // 'meals' passes the trips data to the handlebars view
};

module.exports = {
    menu
}