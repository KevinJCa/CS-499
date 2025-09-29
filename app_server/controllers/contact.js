/* GET contact view */
// Wires up the controller to serve the contact page.
const contact = (req, res) => {
    res.render('contact', { title: 'TOWN'});
};

module.exports = {
    contact
}