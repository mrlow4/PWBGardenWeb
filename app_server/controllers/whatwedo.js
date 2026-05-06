/* GET What We Do page*/
const whatwedo = (req, res) => {
    res.render("whatwedo", {title:"This is what we do :)"});
};

module.exports = {
    whatwedo
}