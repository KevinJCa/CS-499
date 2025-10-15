/* GET about view */
// Wires up the controller to serve the about page.
const about = (req, res) => {
    res.render('about', { title: 'TOWN'});
};

module.exports = {
    about
}