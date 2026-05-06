/* GET History page*/
const history = (req, res) => {
    res.render("history", {title:"Learn our history!"});
};

module.exports = {
    history
}