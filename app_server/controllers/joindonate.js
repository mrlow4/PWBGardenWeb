/* GET Join and Donate page*/
const joindonate = (req, res) => {
    res.render("joindonate", {title:"Help your community by joining or donating."});
};

module.exports = {
    joindonate
}