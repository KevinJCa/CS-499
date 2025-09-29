/* GET Homepage */
// Wires up the controller to serve the main index page.
const index = (req, res) => {
    res.render('index', { title: "TOWN"});
};

module.exports = {
    index
}