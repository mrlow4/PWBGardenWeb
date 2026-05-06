/* GET Homepage*/
const index = (req, res) => {
    res.render("index", {title:"The website for the Paij Wadley Bailey Community Garden!!!"});
};

module.exports = {
    index
}